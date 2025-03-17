import React, { useImperativeHandle, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { format, getMonth, getYear, isSameDay, subMonths, addMonths } from "date-fns";
import useCalendar from "@/hook/useCalendar";
import useModal from "@/hook/useModal";
import { useToast } from "@/hook/useToast";

import { BasicInput, InputProps } from "./Input";
import { BUTTON_ACTIVE, FONTS, TEXT_ACTIVE } from "@/styles/common";
import { DateKeypadInput } from "./PlainInput";
import LeftArrowIcon from "@/assets/icon/arrow/LeftArrowThin.svg";
import RightArrowIcon from "@/assets/icon/arrow/RightArrowThin.svg";

type Props = Omit<InputProps, "type" | "value"> & {
  displayIcon?: boolean;
  value?: string;
  defaultValue?: string;
  pickType?: "EVERYDAY" | "ONLY_PAST" | "ONLY_FUTURE";
};

const DateInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { displayIcon = false, defaultValue, title, errorText, value, ...rest } = props;

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
    setCurrentDate(targetDate);
    setYearValue(targetDate.getFullYear());
    setMonthValue(targetDate.getMonth() + 1);
  };

  return (
    <>
      <BasicInput ref={inputRef} type="text" title={title} onButtonWrapClick={() => showModal()} {...rest} />

      <ModalComponents
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
            <MonthMoverButton type="button" onClick={() => handleMonthMove("PREV")}>
              <LeftArrowIcon />
            </MonthMoverButton>
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
                  const newYear = Number(e.target.value);
                  if (e.target.value !== "" && newYear > 1900 && newYear < 2999) {
                    const newDate = new Date(newYear, monthValue - 1, 1);
                    if (props.pickType === "ONLY_PAST" && newDate > new Date()) {
                      setTargetDate();
                      trigger("미래로 날짜를 설정할 수 없어요.");
                    } else if (props.pickType === "ONLY_FUTURE" && newDate < new Date()) {
                      setTargetDate();
                      trigger("과거로 날짜를 설정할 수 없어요.");
                    } else {
                      setTargetDate(`${newYear}/${monthValue}/01`);
                    }
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
                  const newMonth = Number(e.target.value);
                  if (e.target.value !== "" && newMonth > 0 && newMonth < 13) {
                    const newDate = new Date(yearValue, newMonth - 1, currentDate.getDate());
                    if (props.pickType === "ONLY_PAST" && newDate > new Date()) {
                      setTargetDate();
                      trigger("미래로 날짜를 설정할 수 없어요.");
                    } else if (props.pickType === "ONLY_FUTURE" && newDate < new Date()) {
                      setTargetDate();
                      trigger("과거로 날짜를 설정할 수 없어요.");
                    } else {
                      setTargetDate(`${yearValue}/${newMonth}/${currentDate.getDate()}`);
                    }
                  } else {
                    setTargetDate();
                  }
                }}
              />
            </div>
            <MonthMoverButton
              type="button"
              disabled={props.pickType === "ONLY_PAST" && subMonths(currentDate, -1) > new Date()}
              onClick={() => {
                if (props.pickType === "ONLY_PAST" && subMonths(currentDate, -1) > new Date()) {
                  return;
                }
                handleMonthMove("NEXT");
              }}
            >
              <RightArrowIcon />
            </MonthMoverButton>
            {props.pickType != "ONLY_FUTURE" && (
              <SetTodayBtn
                type="button"
                className={isSameDay(new Date(), currentDate) ? "" : "current-date-show"}
                onClick={() => setTargetDate(format(new Date(), "yyyy/MM/dd"))}
              >
                오늘로 이동
              </SetTodayBtn>
            )}
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
                    key={day.date.toString()}
                    type="button"
                    disabled={
                      (props.pickType === "ONLY_PAST" && !isSameDay(day.date, new Date()) && day.date > new Date()) ||
                      (props.pickType === "ONLY_FUTURE" && !isSameDay(day.date, new Date()) && day.date < new Date())
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
          </Days>
        </Container>
      </ModalComponents>
    </>
  );
});
DateInput.displayName = "DateInput";

const Container = styled.div`
  position: relative;
`;

const SetTodayBtn = styled.button`
  position: absolute;
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: var(--background-light);
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);
  font-size: 1.6rem;
  transform: translateY(-12px);
  transition: transform 0.3s, opacity 0.2s;
  opacity: 0;
  z-index: -1;
  &.current-date-show {
    transform: translateY(-42px);
    opacity: 1;
    z-index: 1;
  }
  &:hover {
    background-color: var(--gray100);
  }
`;
const NowDate = styled.div`
  position: relative;
  user-select: none;
  ${FONTS.HEAD1};
  display: flex;
  margin: 4px 0 24px;
  align-items: center;
  justify-content: center;
  gap: 24px;

  .date-input-wrapper {
    display: flex;
    align-items: center;
  }
  ${DateKeypadInput} {
    max-width: 60px;
    margin: 0 2px;
    ${FONTS.HEAD1};
    font-size: 2.2rem;
  }
`;
const MonthMoverButton = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  svg {
    width: 18px;
    height: 18px;
    fill: var(--gray800);
  }
  &:not(:disabled) {
    ${TEXT_ACTIVE("var(--gray100)", { activeRange: 5 })}
  }
  &:disabled {
    cursor: not-allowed;
    svg {
      fill: var(--gray300);
    }
  }
`;
const Week = styled.div`
  display: flex;
`;
const DayName = styled.div`
  user-select: none;
  flex: 1;
  text-align: center;
  font-size: 1.4rem;
  color: var(--gray400);
`;
const Days = styled.div`
  display: flex;
  min-height: 384px;
  margin: 0 2px;
  flex-direction: column;
  gap: 4px;
  ${FONTS.MD1W500};
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
const Day = styled.button<{ $isCurrentMonth: boolean; $isHoliday: boolean }>`
  position: relative;
  flex: 1;
  margin: 0 2px;
  padding: 16px 0;
  text-align: center;
  border: 1px solid transparent;
  color: ${({ $isHoliday }) => ($isHoliday ? "var(--point-red)" : "var(--text)")};
  opacity: ${({ $isCurrentMonth }) => ($isCurrentMonth ? 1 : 0.35)};
  font-size: 1.8rem;
  ${BUTTON_ACTIVE()};

  &[aria-invalid] {
    visibility: hidden;
  }
  &:hover {
    background-color: var(--gray100);
  }
  &:focus {
    background-color: var(--gray300);
  }
  &:active {
    background-color: var(--gray200);
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
    font-weight: 600;
    color: #fff;
  }
`;

export default DateInput;
