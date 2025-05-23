import React from "react";
import styled from "styled-components";
import useCalendar from "@/hook/useCalendar";
import { format, isBefore, isSameDay, isWithinInterval } from "date-fns";

import { ModalProps } from "@/hook/useModal";
import { FONTS } from "@/styles/common";
import { formattedDate } from "@/util/date";

type Props = {
  ModalComponents: (props: ModalProps) => React.JSX.Element | undefined;
  rangeState: [{ start: string; end: string }, React.Dispatch<React.SetStateAction<{ start: string; end: string }>>];
};
function DateRangeModal({ ModalComponents, rangeState }: Props) {
  const { weekCalendarList, currentDate } = useCalendar();
  const [dateRange, setDateRange] = rangeState;

  const onClickDay = (date: Date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    setDateRange((prev) => {
      if (!prev.start) {
        return { ...prev, start: formattedDate };
      }
      if (!prev.end) {
        if (isBefore(date, prev.start)) {
          // 두번째로 선택한 날짜가 첫번째로 선택한 날짜보다 이전일 경우
          return { start: formattedDate, end: prev.start };
        }
        return { ...prev, end: formattedDate };
      }
      return { start: formattedDate, end: "" };
    });
  };

  return (
    <ModalComponents draggable="all" buttons={[{ onClick: (close) => close(), name: "확인", mode: "primary" }]}>
      <Range>
        <DateLabel>
          <p className="day-text">
            {formattedDate(dateRange.start, {
              displayDateType: "kr",
              displayYear: "always",
              displayDayName: "hide",
            })}
          </p>
          <p className="time-text">23:40</p>
        </DateLabel>
        <DateLabel>
          <p className="day-text">
            {formattedDate(dateRange.end, {
              displayDateType: "kr",
              displayYear: "always",
              displayDayName: "hide",
            })}
          </p>
          <p className="time-text">23:40</p>
        </DateLabel>
      </Range>
      <CurrentDate>{format(currentDate, "yyyy년 M월")}</CurrentDate>
      <Calendar>
        <div className="week-cal-row day-name">
          {["일", "월", "화", "수", "목", "금", "토"].map((value) => (
            <span key={value} className="week-day-name">
              {value}
            </span>
          ))}
        </div>
        {weekCalendarList.map((week, index) => (
          <div className="week-cal-row" key={index}>
            {week.map((day) => (
              <DayItem
                type="button"
                className={`${
                  isSameDay(dateRange.start, dateRange.end) && isSameDay(dateRange.start, day.date)
                    ? "same"
                    : isSameDay(dateRange.start, day.date)
                    ? "start"
                    : isSameDay(dateRange.end, day.date)
                    ? "end"
                    : isWithinInterval(day.date, { start: dateRange.start, end: dateRange.end })
                    ? "within"
                    : ""
                } ${day.nextMonth || day.previousMonth ? "not-this-month" : ""} ${
                  day.holiday.isHoliday ? "holiday" : ""
                }`}
                key={`${day.date}`}
                onClick={() => onClickDay(day.date)}
              >
                {day.displayValue}
              </DayItem>
            ))}
          </div>
        ))}
      </Calendar>
    </ModalComponents>
  );
}

const Range = styled.div`
  display: flex;
  gap: 10px;
`;
const CurrentDate = styled.div`
  margin: 24px 0 18px;
  padding: 0 4px;
  color: var(--gray900);
  ${FONTS.body1("semibold")};
`;
const Calendar = styled.div`
  --cal-gap: 4px;

  div.week-cal-row {
    display: flex;
    margin-bottom: 6px;
    height: calc((min(100vw, var(--mobile-max-width)) - 32px - (var(--cal-gap) * 7)) / 7);
    gap: var(--cal-gap);

    &.day-name {
      height: auto;
      color: var(--gray400);
      ${FONTS.body4("regular")};
    }
  }
  span.week-day-name {
    flex: 1;
    text-align: center;
  }
`;
const DayItem = styled.button`
  user-select: none;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: var(--gray900);
  ${FONTS.body2("regular")};

  &.not-this-month {
    color: var(--gray400);
    &.holiday {
      color: var(--red300);
    }
  }
  &.holiday {
    color: var(--red500);
  }

  &.same,
  &.start,
  &.end,
  &.within {
    background-color: var(--main);
    color: var(--white);
  }
  &.start {
    border-radius: 32px 4px 4px 32px;
  }
  &.end {
    border-radius: 4px 32px 32px 4px;
  }

  &:active {
    transform: scale(0.95);
  }
  transition: transform 0.2s;
`;
const DateLabel = styled.div`
  flex: 1;
  padding: 6px 0;
  text-align: center;
  border-radius: 8px;
  color: var(--gray900);
  background-color: var(--gray200);

  p.day-text {
    ${FONTS.body3("regular")}
  }
  p.time-text {
    ${FONTS.body4("regular")}
  }
`;

export default DateRangeModal;
