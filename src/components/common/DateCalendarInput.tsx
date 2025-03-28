import React, { ReactNode, useEffect, useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";
import {
  addMonths,
  format,
  getMonth,
  getYear,
  isFuture,
  isPast,
  isSameDay,
  isSameMonth,
  isToday,
  subMonths,
} from "date-fns";
import useCalendar from "@/hook/useCalendar";
import { useToast } from "@/hook/useToast";

import { FONTS, TEXT_ACTIVE } from "@/styles/common";
import { DateKeypadInput } from "./input/PlainInput";
import Button from "./Button";
import { BasicInput, InputProps } from "./input/BaseInput";

import LeftArrowIcon from "@/assets/icon/arrow/LeftArrow.svg";
import RightArrowIcon from "@/assets/icon/arrow/RightArrow.svg";
import DownArrowIcon from "@/assets/icon/arrow/DownArrow.svg";

type Props = Omit<InputProps, "type" | "value" | "iconType" | "suffix"> & {
  value?: string;
  defaultValue?: string;
  children?: ReactNode;
  pickType?: "EVERYDAY" | "ONLY_PAST" | "ONLY_FUTURE";
};
const DateCalendarInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    children,
    error,
    description,
    defaultValue,
    title,
    delButton = false,
    value,
    pickType = "EVERYDAY",
    ...rest
  } = props;

  const { trigger } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0, isAbove: false });
  const [showCalendar, setShowCalendar] = useState(false);
  const { dayList, weekCalendarList, currentDate, setCurrentDate } = useCalendar();
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const [yearValue, setYearValue] = useState(() =>
    value ? +value.split("-")[0] : defaultValue ? +defaultValue.split("-")[0] : +getYear(new Date())
  );
  const [monthValue, setMonthValue] = useState(() =>
    value ? +value.split("-")[1] : defaultValue ? +defaultValue.split("-")[1] : +getMonth(new Date()) + 1
  );

  useEffect(() => {
    const targetValue = value || defaultValue || inputRef.current?.value;
    if (targetValue) {
      const [year, month, day] = targetValue.split("-");
      setCurrentDate(new Date(`${year}/${month}/${day}`));
      setYearValue(+year);
      setMonthValue(+month);
    }
  }, [value, setCurrentDate]);

  const handleMonthMove = (direction: "PREV" | "NEXT") => {
    const targetDate = direction === "PREV" ? subMonths(currentDate, 1) : addMonths(currentDate, 1);

    if (
      (direction === "NEXT" &&
        pickType === "ONLY_PAST" &&
        isSameMonth(targetDate, new Date()) &&
        isFuture(targetDate)) ||
      (direction === "PREV" && pickType === "ONLY_FUTURE" && isSameMonth(targetDate, new Date()) && isPast(targetDate))
    ) {
      setCurrentDate(new Date());
    } else {
      setCurrentDate(targetDate);
    }
    setYearValue(targetDate.getFullYear());
    setMonthValue(targetDate.getMonth() + 1);
  };

  const handleCalendarView = () => {
    if (containerRef.current) {
      const containerRect = containerRef.current!.getBoundingClientRect();
      const isAbove = containerRect.bottom > window.innerHeight / 2;
      setCalendarPosition({
        top: isAbove ? containerRect.top : containerRect.bottom,
        left: containerRect.left,
        isAbove: isAbove,
      });
    }
    setShowCalendar(true);
  };

  const onClickUpdateDateValue = () => {
    const currentValueFormatted = format(currentDate, "yyyy-MM-dd");
    if (inputRef.current) {
      inputRef.current.value = currentValueFormatted;
      if (rest.onChange) {
        rest.onChange({ target: { value: currentValueFormatted } } as React.ChangeEvent<HTMLInputElement>);
      }
      setShowCalendar(false);
      inputRef.current.focus();
    }
  };
  const onClickResetDateValue = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setYearValue(new Date().getFullYear());
      setMonthValue(new Date().getMonth() + 1);
      setCurrentDate(new Date());
      if (rest.onChange) {
        rest.onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
      }
    }
  };

  const setCurrentDateValue = (date?: Date) => {
    const targetDate = date ?? new Date();
    setCurrentDate(targetDate);
    setYearValue(targetDate.getFullYear());
    setMonthValue(targetDate.getMonth() + 1);
  };

  useEffect(() => {
    const outSideClick = (e: any) => {
      if (showCalendar && containerRef.current && !containerRef.current.contains(e.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mouseup", outSideClick);
  }, [showCalendar]);

  return (
    <Container ref={containerRef}>
      <div style={{ position: "relative" }}>
        <BasicInput
          error={error}
          description={description}
          ref={inputRef}
          type="text"
          title={title}
          onButtonWrapClick={!props.disabled ? handleCalendarView : () => {}}
          defaultValue={defaultValue && `${yearValue}-${monthValue}-${+defaultValue.split("-")[2]}`}
          {...rest}
        />
        <div
          className="dropdown-icon"
          style={{ top: title ? "28px" : "0" }}
          aria-disabled={props.disabled}
          onClick={!props.disabled ? handleCalendarView : () => {}}
        >
          <DownArrowIcon />
        </div>
      </div>
      {showCalendar && (
        <CalendarModalWrapper
          role="dialog"
          left={containerRef.current ? containerRef.current!.offsetLeft : 0}
          position={calendarPosition}
        >
          <NowDate>
            <CurrentDateInputs>
              <div className="year">
                <DateKeypadInput
                  type="number"
                  aria-label="연도 입력"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  value={yearValue}
                  maxLength={4}
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => setYearValue(+e.target.value.slice(0, 4))}
                  onBlur={(e) => {
                    const newYear = Number(e.target.value);
                    if (e.target.value !== "" && newYear > 1900 && newYear < 2999) {
                      const newDate = new Date(newYear, monthValue, currentDate.getDate());
                      if (pickType === "ONLY_PAST" && isFuture(newDate)) {
                        setCurrentDateValue();
                        trigger("미래로 날짜를 설정할 수 없어요.", { type: "error" });
                      } else if (pickType === "ONLY_FUTURE" && isPast(newDate) && !isToday(newDate)) {
                        setCurrentDateValue();
                        trigger("과거로 날짜를 설정할 수 없어요.", { type: "error" });
                      } else {
                        setCurrentDateValue(new Date(newYear, monthValue - 1, currentDate.getDate()));
                      }
                    } else {
                      setCurrentDateValue();
                    }
                  }}
                />
                년
              </div>
              <div className="month">
                <DateKeypadInput
                  type="number"
                  aria-label="월 입력"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  style={{
                    paddingRight: "1px",
                    width: monthValue < 10 ? "12px" : "20px",
                    textAlign: monthValue < 10 ? "right" : "left",
                  }}
                  value={monthValue}
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => setMonthValue(+e.target.value)}
                  onBlur={(e) => {
                    const newMonth = Number(e.target.value);
                    if (e.target.value !== "" && newMonth > 0 && newMonth < 13) {
                      const newDate = new Date(yearValue, newMonth, currentDate.getDate());
                      if (pickType === "ONLY_PAST" && isFuture(newDate)) {
                        setCurrentDateValue();
                        trigger("미래로 날짜를 설정할 수 없어요.", { type: "error" });
                      } else if (pickType === "ONLY_FUTURE" && isPast(newDate) && !isToday(newDate)) {
                        setCurrentDateValue();
                        trigger("과거로 날짜를 설정할 수 없어요.", { type: "error" });
                      } else {
                        setCurrentDateValue(new Date(yearValue, newMonth - 1, currentDate.getDate()));
                      }
                    } else {
                      setCurrentDateValue();
                    }
                  }}
                />
                월
              </div>
            </CurrentDateInputs>
            <MonthSwitch>
              <button
                type="button"
                disabled={pickType === "ONLY_FUTURE" && isSameMonth(currentDate, new Date())}
                onClick={() => handleMonthMove("PREV")}
              >
                <LeftArrowIcon />
              </button>
              <button
                type="button"
                disabled={pickType === "ONLY_PAST" && isSameMonth(currentDate, new Date())}
                onClick={() => handleMonthMove("NEXT")}
              >
                <RightArrowIcon />
              </button>
            </MonthSwitch>
          </NowDate>

          <Calendar>
            <Week className="week-name-header">
              {dayList.map((value) => (
                <DayName key={value}>{value}</DayName>
              ))}
            </Week>
            {weekCalendarList.map((week, weekNum) => (
              <Week key={weekNum}>
                {week.map((day) => (
                  <Day
                    tabIndex={!(day.nextMonth || day.previousMonth) ? day.displayValue : -1}
                    key={day.date.toString()}
                    type="button"
                    $isCurrentMonth={!(day.nextMonth || day.previousMonth)}
                    $isHoliday={day.holiday.isHoliday}
                    className={isSameDay(day.date, currentDate) ? "current-date" : ""}
                    aria-label={`${day.date.getMonth() + 1}월 ${day.displayValue}일`}
                    onClick={() => {
                      const year = day.date.getFullYear();
                      const month = day.date.getMonth() + 1;
                      setCurrentDate(day.date);
                      setYearValue(year);
                      setMonthValue(month);
                    }}
                  >
                    {day.displayValue}
                  </Day>
                ))}
              </Week>
            ))}
          </Calendar>

          <Buttons>
            <button type="button" className="reset-button" onClick={onClickResetDateValue}>
              초기화
            </button>
            <Button type="button" mode="primary" fillType="default" onClick={onClickUpdateDateValue}>
              확인
            </Button>
          </Buttons>
        </CalendarModalWrapper>
      )}
    </Container>
  );
});
DateCalendarInput.displayName = "DateCalendarInput";

const Container = styled.div`
  position: relative;

  div.dropdown-icon {
    position: absolute;
    height: 40px;
    display: flex;
    align-items: center;
    right: 12px;
    top: 0;
    svg {
      width: 20px;
      height: 20px;
      fill: var(--gray700);
    }
    &[aria-disabled="true"] {
      svg {
        fill: var(--gray300);
      }
    }
  }
`;

type ContainerPositionType = { top: number; left: number; isAbove: boolean };
const CalendarModalWrapper = styled.div<{ left: number; position: ContainerPositionType }>`
  position: absolute;
  margin: 0 -4px;
  /* top: ${({ position }) => (position.isAbove ? "auto" : `${position.top}px`)}; */
  transform: ${({ position }) => (position.isAbove ? "translateY(calc(-100% - 46px - 16px))" : "translateY(16px)")};
  width: 320px;
  min-width: 320px;
  padding: 16px;
  background-color: var(--background-light);
  border-radius: 10px;
  box-shadow: var(--shadow-lg);
  z-index: 50;
  color: var(--gray700);

  @media (max-width: 420px) {
    top: ${({ position }) => (position.isAbove ? 0 : position.top)}px;
    left: 0;
    margin: 0;
    transform: ${({ position }) => (position.isAbove ? `translateY(calc(-46px - 16px))` : "translateY(16px)")};
    width: 100vw;
  }
`;
const NowDate = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
`;
const CurrentDateInputs = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 4px 0 10px;
  color: var(--gray900);
  ${FONTS.body2("semibold")};

  ${DateKeypadInput} {
    padding: 0;
    text-align: left;
    max-width: 46px;
    border-radius: 0;
    color: var(--gray900);
    ${FONTS.body2("semibold")};
  }
`;
const MonthSwitch = styled.div`
  display: flex;
  gap: 12px;
  button {
    width: 28px;
    height: 28px;
    border-radius: 4px;

    svg {
      width: 100%;
      height: 100%;
      fill: var(--gray700);
    }
    &:not(:disabled) {
      ${TEXT_ACTIVE("var(--gray100)", { activeRange: 2 })}
    }
    &:disabled {
      cursor: not-allowed;
      svg {
        fill: var(--gray300);
      }
    }
  }
`;

const Calendar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Week = styled.div`
  display: flex;
  justify-content: space-between;

  &.week-name-header {
    display: inline-flex;
    align-items: center;
    margin-bottom: -8px;
  }
`;
const DayName = styled.div`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--gray400);
  ${FONTS.body4("medium")};
`;
const Day = styled.button<{ $isCurrentMonth: boolean; $isHoliday: boolean }>`
  width: 40px;
  height: 40px;
  text-align: center;
  border: 1px solid transparent;
  /* color: ${({ $isHoliday }) => ($isHoliday ? "var(--red400)" : "var(--gray700)")}; */
  color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? "var(--gray700)" : "var(--gray300)")};
  border-radius: 12px;
  ${FONTS.body3("medium")};

  &[aria-invalid] {
    visibility: hidden;
  }
  &:hover {
    background-color: var(--gray50);
  }
  &:active {
    background-color: var(--gray100);
  }
  &.current-date {
    background-color: var(--main);
    transform: scale(1.03);
    color: var(--white);
    ${FONTS.body3("semibold")};
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;

  button.reset-button {
    ${FONTS.body3("medium")};
    color: var(--primary600);
  }
`;

export default DateCalendarInput;
