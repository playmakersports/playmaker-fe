import React, { ReactNode, useImperativeHandle, useRef, useState } from "react";
import styled from "@emotion/styled";
import { getMonth, getYear, isSameDay, subMonths } from "date-fns";
import useCalendar from "@/hook/useCalendar";

import Button from "./Button";
import { BasicInput, InputProps } from "./Input";
import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import { DateKeypadInput } from "./PlainInput";
import DoubleLeftArrowIcon from "@/assets/icon/arrow/DoubleLeftArrow.svg";
import DoubleRightArrowIcon from "@/assets/icon/arrow/DoubleRightArrow.svg";

type Props = Omit<InputProps, "type" | "search"> & {
  defaultValue?: string;
  children?: ReactNode;
};
const DateCalendarInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0, isAbove: false });
  const { children, defaultValue, title, errorText, delButton = false, medium = false, ...rest } = props;

  const [showCalendar, setShowCalendar] = useState(false);
  const { dayList, weekCalendarList, currentDate, setCurrentDate } = useCalendar();
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const [yearValue, setYearValue] = useState(defaultValue ? +defaultValue.split("-")[0] : +getYear(new Date()));
  const [monthValue, setMonthValue] = useState(defaultValue ? +defaultValue.split("-")[1] : +getMonth(new Date()) + 1);

  const setTargetDate = (target?: string) => {
    if (target) {
      const [year, month] = target?.split("/");
      setCurrentDate(new Date(`${year}/${month}/01`));
      setYearValue(+year);
      setMonthValue(+month);
    } else {
      // 빈 값이면 오늘로 이동
      setCurrentDate(new Date());
      setYearValue(new Date().getFullYear());
      setMonthValue(new Date().getMonth() + 1);
    }
  };

  const handleMonthMove = (direction: "PREV" | "NEXT") => {
    const targetDate = subMonths(currentDate, direction === "PREV" ? +1 : -1);
    setCurrentDate(targetDate);
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

  return (
    <Container ref={containerRef}>
      <BasicInput ref={inputRef} type="text" title={title} onButtonWrapClick={handleCalendarView} {...rest} />
      {showCalendar && (
        <Wrapper left={containerRef.current ? containerRef.current!.offsetLeft : 0} position={calendarPosition}>
          <NowDate>
            <DoubleLeftArrowIcon onClick={() => handleMonthMove("PREV")} />
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
            <DoubleRightArrowIcon onClick={() => handleMonthMove("NEXT")} />
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
                      inputRef.current!.value = `${year}-${month}-${date}`;
                    }}
                  >
                    {day.displayValue}
                  </Day>
                ))}
              </Week>
            ))}
          </Days>

          <Bottom>
            {children && children}
            <Button type="button" flex={1} mode="OPTION1" onClick={() => setShowCalendar(false)}>
              닫기
            </Button>
          </Bottom>
        </Wrapper>
      )}
    </Container>
  );
});
DateCalendarInput.displayName = "DateCalendarInput";

const Container = styled.div`
  position: relative;
`;
type ContainerPositionType = { top: number; left: number; isAbove: boolean };
const Wrapper = styled.div<{ left: number; position: ContainerPositionType }>`
  position: fixed;
  margin: 0 -8px;
  top: ${({ position }) => position.top}px;
  transform: ${({ position }) => (position.isAbove ? "translateY(calc(-200% - 16px))" : "translateY(16px)")};
  width: 340px;
  padding: 20px 12px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0 2px 20px 2px rgba(115, 115, 115, 0.15);

  @media (max-width: 420px) {
    top: ${({ position }) => (position.isAbove ? 0 : position.top)}px;
    left: 0;
    margin: 0;
    transform: ${({ position }) => (position.isAbove ? `translateY(calc(-46px - 16px))` : "translateY(16px)")};
    width: 100vw;
    z-index: 90;
  }
`;
const NowDate = styled.div`
  ${FONTS.HEAD1};
  display: flex;
  margin-bottom: 14px;
  align-items: center;
  justify-content: center;
  gap: 24px;

  .date-input-wrapper {
    display: flex;
  }
  svg {
    fill: var(--gray4);
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
`;
const Days = styled.div`
  position: relative;
  display: flex;
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
const Day = styled.button<{ thisMonth: boolean; isHoliday: boolean }>`
  position: relative;
  flex: 1;
  padding: 10px 0;
  text-align: center;
  border: 1px solid transparent;
  color: ${({ isHoliday }) => (isHoliday ? "var(--point)" : "var(--text)")};
  opacity: ${({ thisMonth }) => (thisMonth ? 1 : 0.35)};
  ${BUTTON_ACTIVE()};

  &[aria-invalid] {
    visibility: hidden;
  }
  &:focus {
    background-color: var(--sub1);
    color: #fff;
  }
  &.current-date {
    background-color: var(--main);
    transform: scale(1.03);
    font-weight: 600;
    color: #fff;
  }
`;

const Bottom = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
export default DateCalendarInput;
