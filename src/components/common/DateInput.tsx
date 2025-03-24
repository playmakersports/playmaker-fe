import React, { useImperativeHandle, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import {
  format,
  getMonth,
  getYear,
  isSameDay,
  subMonths,
  addMonths,
  isSameMonth,
  isFuture,
  isPast,
  isToday,
} from "date-fns";
import useCalendar from "@/hook/useCalendar";
import useModal from "@/hook/useModal";
import { useToast } from "@/hook/useToast";

import { BasicInput, InputProps } from "./input/BaseInput";
import { FONTS, TEXT_ACTIVE } from "@/styles/common";
import { DateKeypadInput } from "./input/PlainInput";
import LeftArrowIcon from "@/assets/icon/arrow/LeftArrow.svg";
import RightArrowIcon from "@/assets/icon/arrow/RightArrow.svg";

type Props = Omit<InputProps, "type" | "value" | "suffix" | "iconType"> & {
  value?: string;
  defaultValue?: string;
  pickType?: "EVERYDAY" | "ONLY_PAST" | "ONLY_FUTURE";
};

const DateInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { defaultValue, title, error, description, value, pickType = "EVERYDAY", ...rest } = props;

  const { ModalComponents, showModal } = useModal();
  const { trigger } = useToast();
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

  return (
    <>
      <BasicInput
        ref={inputRef}
        type="text"
        title={title}
        error={error}
        description={description}
        onButtonWrapClick={() => showModal()}
        {...rest}
      />
      <ModalComponents
        draggable="all"
        buttons={[
          {
            mode: "primary",
            disabled: !(value || defaultValue || (inputRef.current && inputRef.current.value)),
            name:
              value || defaultValue || (inputRef.current && inputRef.current.value)
                ? `${format(currentDate, "yyyy년 M월 d일")}로 설정`
                : "날짜를 선택하세요",
            onClick: (close) => {
              if (inputRef.current) {
                inputRef.current.value = format(currentDate, "yyyy-MM-dd");
                if (rest.onChange) {
                  rest.onChange({
                    target: { value: format(currentDate, "yyyy-MM-dd") },
                  } as React.ChangeEvent<HTMLInputElement>);
                }
              }
              inputRef.current?.focus();
              close();
            },
          },
        ]}
      >
        <Container>
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
                      const newDate = new Date(newYear, monthValue - 1, 1);
                      if (pickType === "ONLY_PAST" && newDate > new Date()) {
                        setTargetDate();
                        trigger("미래로 날짜를 설정할 수 없어요.", { type: "error" });
                      } else if (pickType === "ONLY_FUTURE" && newDate < new Date()) {
                        setTargetDate();
                        trigger("과거로 날짜를 설정할 수 없어요.", { type: "error" });
                      } else {
                        setTargetDate(`${newYear}/${monthValue}/01`);
                      }
                    } else {
                      setTargetDate();
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
                      const newDate = new Date(yearValue, newMonth - 1, currentDate.getDate());
                      if (pickType === "ONLY_PAST" && newDate > new Date()) {
                        setTargetDate();
                        trigger("미래로 날짜를 설정할 수 없어요.", { type: "error" });
                      } else if (pickType === "ONLY_FUTURE" && newDate < new Date() && !isToday(newDate)) {
                        setTargetDate();
                        trigger("과거로 날짜를 설정할 수 없어요.", { type: "error" });
                      } else {
                        setTargetDate(`${yearValue}/${newMonth}/${currentDate.getDate()}`);
                      }
                    } else {
                      setTargetDate();
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
            <Week>
              {dayList.map((value) => (
                <DayName key={value}>{value}</DayName>
              ))}
            </Week>
            {weekCalendarList.map((week, weekNum) => (
              <Week key={weekNum}>
                {week.map((day) => (
                  <Day
                    key={day.date.toString()}
                    type="button"
                    disabled={
                      (pickType === "ONLY_PAST" && isFuture(day.date)) ||
                      (pickType === "ONLY_FUTURE" && isPast(day.date) && !isToday(day.date))
                    }
                    $isCurrentMonth={!(day.nextMonth || day.previousMonth)}
                    $isHoliday={day.holiday.isHoliday}
                    className={
                      isSameDay(day.date, currentDate) && inputRef.current && inputRef.current.value
                        ? "current-date"
                        : ""
                    }
                    aria-label={`${day.date.getMonth() + 1}월 ${day.displayValue}일`}
                    onClick={() => {
                      const year = day.date.getFullYear();
                      const month = day.date.getMonth() + 1;
                      const date = day.date.getDate();
                      setCurrentDate(day.date);
                      setYearValue(year);
                      setMonthValue(month);
                      const updatedNewDate = `${year}/${String(month).padStart(2, "0")}/${String(date).padStart(
                        2,
                        "0"
                      )}`;
                      if (inputRef.current) {
                        inputRef.current.value = updatedNewDate.replaceAll("/", "-");
                      }
                      if (rest.onChange) {
                        rest.onChange({
                          target: { value: updatedNewDate.replaceAll("/", "-") },
                        } as React.ChangeEvent<HTMLInputElement>);
                      }
                      setTargetDate(updatedNewDate);
                    }}
                  >
                    {day.displayValue}
                  </Day>
                ))}
              </Week>
            ))}
          </Calendar>
        </Container>
      </ModalComponents>
    </>
  );
});
DateInput.displayName = "DateInput";

const Container = styled.div`
  position: relative;
  color: var(--gray700);
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
  ${FONTS.body2("semibold")};

  ${DateKeypadInput} {
    padding: 0;
    text-align: left;
    max-width: 46px;
    border-radius: 0;
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
  display: flex;
  margin-bottom: 20px; // Bottom Sheet default 20px + Calendar 20px = 40px
  flex-direction: column;
`;
const Week = styled.div`
  --cal-gap: 4px;
  display: flex;
  justify-content: space-between;
  height: calc((min(100vw, var(--mobile-max-width)) - 32px - (var(--cal-gap) * 7)) / 7);
  gap: var(--cal-gap);
  ${FONTS.body2("medium")};
`;
const DayName = styled.div`
  flex: 1;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--gray400);
  ${FONTS.body4("medium")};
`;
const Day = styled.button<{ $isCurrentMonth: boolean; $isHoliday: boolean }>`
  position: relative;
  flex: 1;
  text-align: center;
  border: 1px solid transparent;
  color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? "var(--gray700)" : "var(--gray300)")};
  /* color: ${({ $isHoliday }) => ($isHoliday ? "var(--red400)" : "var(--gray600)")}; */
  opacity: ${({ $isCurrentMonth }) => ($isCurrentMonth ? 1 : 0.5)};
  border-radius: 12px;

  &[aria-invalid] {
    visibility: hidden;
  }
  &:hover {
    background-color: var(--gray50);
  }
  &:focus {
    background-color: var(--gray200);
  }
  &:active {
    background-color: var(--gray100);
  }
  &:disabled {
    cursor: not-allowed;
    color: var(--gray300);
    &:hover,
    &:focus,
    &:active {
    }
    background-color: transparent;
    transform: scale(1);
  }
  &.current-date {
    background-color: var(--main);
    transform: scale(1.03);
    color: #fff;
    font-weight: 600; // semibold
  }
`;

export default DateInput;
