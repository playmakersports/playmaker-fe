import React, { ReactNode, useEffect, useImperativeHandle, useRef, useState } from "react";
import styled from "@emotion/styled";
import { getMonth, getYear, isSameDay, subMonths } from "date-fns";
import useCalendar from "@/hook/useCalendar";

import { FONTS } from "@/styles/common";
import { DateKeypadInput } from "./PlainInput";
import { BasicInput, InputProps } from "./Input";
import CalendarIcon from "@/assets/icon/global/Calendar.svg";
import DoubleLeftArrowIcon from "@/assets/icon/arrow/DoubleLeftArrow.svg";
import DoubleRightArrowIcon from "@/assets/icon/arrow/DoubleRightArrow.svg";

type Props = Omit<InputProps, "type" | "value" | "search"> & {
  displayIcon?: boolean;
  fullWidth?: boolean;
  value?: string;
  defaultValue?: string;
  children?: ReactNode;
};
const DateCalendarInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    children,
    displayIcon = false,
    fullWidth = false,
    defaultValue,
    title,
    errorText,
    delButton = false,
    medium = false,
    value,
    ...rest
  } = props;

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

  const setTargetDate = (target?: string) => {
    if (target) {
      const [year, month, day] = target.split("/");
      setCurrentDate(new Date(`${year}/${month}/${day}`));
      setYearValue(+year);
      setMonthValue(+month);
      const newValue = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      if (inputRef.current) {
        inputRef.current.value = newValue;
        if (rest.onChange) {
          rest.onChange({ target: { value: newValue } } as React.ChangeEvent<HTMLInputElement>);
        }
      }
    } else {
      setCurrentDate(new Date());
      setYearValue(new Date().getFullYear());
      setMonthValue(new Date().getMonth() + 1);
    }
  };

  const handleMonthMove = (direction: "PREV" | "NEXT") => {
    const targetDate = subMonths(currentDate, direction === "PREV" ? +1 : -1);
    setCurrentDate(targetDate);
    setTargetDate(`${targetDate.getFullYear()}/${targetDate.getMonth() + 1}/${targetDate.getDate()}`);
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
    setShowCalendar((prev) => !prev);
  };

  useEffect(() => {
    const outSideClick = (e: any) => {
      if (showCalendar && containerRef.current && !containerRef.current.contains(e.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", outSideClick);
  }, [showCalendar]);

  return (
    <Container ref={containerRef} fullWidth={fullWidth}>
      {displayIcon && (
        <Icon onClick={!props.disabled ? handleCalendarView : () => {}}>
          <CalendarIcon />
        </Icon>
      )}
      <BasicInput
        style={displayIcon ? { paddingLeft: "26px" } : undefined}
        errorText={errorText}
        ref={inputRef}
        type="text"
        title={title}
        onButtonWrapClick={!props.disabled ? handleCalendarView : () => {}}
        defaultValue={defaultValue && `${yearValue}-${monthValue}-${+defaultValue.split("-")[2]}`}
        {...rest}
      />
      {showCalendar && (
        <CalendarModalWrapper
          role="dialog"
          left={containerRef.current ? containerRef.current!.offsetLeft : 0}
          position={calendarPosition}
        >
          <NowDate>
            <button type="button" onClick={() => handleMonthMove("PREV")}>
              <DoubleLeftArrowIcon />
            </button>
            <div className="date-input-wrapper">
              <DateKeypadInput
                type="number"
                aria-label="연도 입력"
                pattern="[0-9]*"
                inputMode="numeric"
                style={{ width: "64px" }}
                value={yearValue}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setYearValue(+e.target.value)}
                onBlur={(e) => {
                  if (e.target.value !== "" && Number(e.target.value) > 1900 && Number(e.target.value) < 2999) {
                    setTargetDate(`${yearValue}/${monthValue}/01`);
                  } else {
                    setTargetDate();
                  }
                }}
              />
              .
              <DateKeypadInput
                type="number"
                aria-label="월 입력"
                pattern="[0-9]*"
                inputMode="numeric"
                style={{ width: "32px" }}
                value={monthValue}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setMonthValue(+e.target.value)}
                onBlur={(e) => {
                  if (e.target.value !== "" && Number(e.target.value) > 0 && Number(e.target.value) < 13) {
                    setTargetDate(`${yearValue}/${monthValue}/01`);
                  } else {
                    setTargetDate();
                  }
                }}
              />
              .
            </div>
            <button type="button" onClick={() => handleMonthMove("NEXT")}>
              <DoubleRightArrowIcon />
            </button>
          </NowDate>

          <Days>
            <Week>
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
                    thisMonth={!(day.nextMonth || day.previousMonth)}
                    isHoliday={day.holiday.isHoliday}
                    className={isSameDay(day.date, currentDate) && inputRef.current!.value ? "current-date" : ""}
                    aria-label={`${day.date.getMonth() + 1}월 ${day.displayValue}일`}
                    onClick={() => {
                      const year = day.date.getFullYear();
                      const month = day.date.getMonth() + 1;
                      const date = day.date.getDate();
                      setCurrentDate(day.date);
                      setYearValue(year);
                      setMonthValue(month);
                      const newValue = `${year}-${String(month).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
                      if (inputRef.current) {
                        inputRef.current.value = newValue;
                        if (rest.onChange) {
                          rest.onChange({ target: { value: newValue } } as React.ChangeEvent<HTMLInputElement>);
                        }
                        setShowCalendar(false);
                        inputRef.current.focus();
                      }
                    }}
                  >
                    {day.displayValue}
                  </Day>
                ))}
              </Week>
            ))}
          </Days>
        </CalendarModalWrapper>
      )}
    </Container>
  );
});
DateCalendarInput.displayName = "DateCalendarInput";

const Container = styled.div<{ fullWidth: boolean }>`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
`;
const Icon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 12px;
  z-index: 1;
  width: 20px;
  height: 100%;
  svg {
    width: 18px;
    height: 18px;
    fill: var(--gray600);
  }
`;
type ContainerPositionType = { top: number; left: number; isAbove: boolean };
const CalendarModalWrapper = styled.div<{ left: number; position: ContainerPositionType }>`
  position: absolute;
  margin: 0 -4px;
  /* top: ${({ position }) => (position.isAbove ? "auto" : `${position.top}px`)}; */
  transform: ${({ position }) => (position.isAbove ? "translateY(calc(-100% - 46px - 16px))" : "translateY(16px)")};
  width: 340px;
  padding: 20px 12px;
  background-color: var(--background-light);
  border-radius: 10px;
  box-shadow: 0 0 16px 6px rgba(0, 0, 0, 0.07);
  z-index: 50;

  @media (max-width: 420px) {
    top: ${({ position }) => (position.isAbove ? 0 : position.top)}px;
    left: 0;
    margin: 0;
    transform: ${({ position }) => (position.isAbove ? `translateY(calc(-46px - 16px))` : "translateY(16px)")};
    width: 100vw;
  }
`;
const NowDate = styled.div`
  ${FONTS.HEAD1};
  display: flex;
  margin: 0 0 24px;
  align-items: center;
  justify-content: center;
  gap: 24px;

  .date-input-wrapper {
    display: flex;
    user-select: none;
  }
  button {
    display: flex;
    align-items: center;
    svg {
      fill: var(--gray500);
    }
  }
  ${DateKeypadInput} {
    max-width: 56px;
    margin: 0 2px;
    ${FONTS.HEAD1};
  }
`;
const Week = styled.div`
  display: flex;
`;
const DayName = styled.div`
  flex: 1;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--gray600);
`;
const Days = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 1.8rem;
  transform: translateX(0);
  transition: transform 0.3s cubic-bezier(0.05, 0, 0, 1);

  &.L {
    transform: translateX(5%);
  }
  &.R {
    transform: translateX(-5%);
  }
`;
const Day = styled.button<{ thisMonth: boolean; isHoliday: boolean }>`
  position: relative;
  flex: 1;
  padding: 8px 0;
  text-align: center;
  border: 1px solid transparent;
  color: ${({ isHoliday }) => (isHoliday ? "var(--point-red)" : "var(--text)")};
  opacity: ${({ thisMonth }) => (thisMonth ? 1 : 0.35)};
  border-radius: 5px;
  font-size: 1.6rem;

  &[aria-invalid] {
    visibility: hidden;
  }
  &:hover {
    background-color: var(--gray100);
  }
  &:focus {
    background-color: var(--gray200);
  }
  &.current-date {
    background-color: var(--main);
    transform: scale(1.03);
    font-weight: 600;
    color: #fff;
  }
`;

export default DateCalendarInput;
