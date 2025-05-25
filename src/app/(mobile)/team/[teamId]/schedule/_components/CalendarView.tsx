"use client";
import React, { useRef, useState } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { isSameDay, subMonths } from "date-fns";

import { UseCalendarType } from "@/hook/useCalendar";
import { DateSwiperSelect } from "@/components/common/DateSwiperSelect";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";

import {
  calendarViewTypeSwitch,
  calendarViewTypeSwitchInner,
  weekDayButton,
  weekDayButtonDisplayValue,
  weekDayButtonScheduledBullet,
  weekDayButtonScheduledBullets,
  weekDayName,
  weekLineWrapper,
} from "./calendar.css";
import { flexAlignCenter, flexSpaceBetween } from "@/styles/container.css";

import DownToggleArrow from "@/assets/icon/arrow/DownArrowToggle.svg";
import { fonts } from "@/styles/fonts.css";
import { TEXT_ACTIVE } from "@/styles/common";

type Props = {
  calendar: UseCalendarType;
  viewWeekly: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};
function CalendarView({ calendar, viewWeekly }: Props) {
  const [showWeekly, setShowWeekly] = viewWeekly;
  const { dayList, weekCalendarList, currentDate, setCurrentDate } = calendar;
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleMonthMove = (direction: "PREV" | "NEXT") => {
    const targetDate = subMonths(currentDate, direction === "PREV" ? +1 : -1);
    setCurrentDate(targetDate);
  };

  const [swipeDirection, setSwipeDirection] = useState("");
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    const startTarget = e.changedTouches[0].pageX;
    setTouchStartX(startTarget);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const targetX = e.changedTouches[0].pageX;
    if (Math.abs(touchStartX - targetX) > 40) {
      if (touchStartX > targetX) {
        handleMonthMove("NEXT");
      } else {
        handleMonthMove("PREV");
      }
    }
    setTouchStartX(0);
    setSwipeDirection("");
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const targetX = e.changedTouches[0].pageX;
    if (Math.abs(touchStartX - targetX) > 40) {
      if (touchStartX > targetX) {
        setSwipeDirection("R");
      } else {
        setSwipeDirection("L");
      }
    } else {
      setSwipeDirection("");
    }
  };

  return (
    <CalendarContainer>
      <NowDate className={clsx(flexAlignCenter, flexSpaceBetween)}>
        <DateSwiperSelect
          defaultValue={`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`}
          getCurrentValue={({ y, m, d }) => {
            setCurrentDate(new Date(y, m - 1, d));
          }}
        >
          {(showModal) => (
            <NumberFlowGroup>
              <button type="button" onClick={showModal} className={clsx(fonts.body2.semibold, "date-control-button")}>
                <NumberFlow
                  value={currentDate.getFullYear()}
                  suffix="년"
                  format={{
                    useGrouping: false,
                    trailingZeroDisplay: "stripIfInteger",
                  }}
                  style={{
                    marginRight: "5px",
                  }}
                />
                <NumberFlow value={currentDate.getMonth() + 1} suffix="월" />
                <DownToggleArrow width={24} height={24} fill="var(--gray900)" />
              </button>
            </NumberFlowGroup>
          )}
        </DateSwiperSelect>
        <button type="button" className={calendarViewTypeSwitch} onClick={() => setShowWeekly((prev) => !prev)}>
          <span className={calendarViewTypeSwitchInner} data-active={!showWeekly}>
            월별
          </span>
          <span className={calendarViewTypeSwitchInner} data-active={showWeekly}>
            주별
          </span>
        </button>
      </NowDate>
      <Days onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <DirectionL className={swipeDirection}>이전달</DirectionL>
        <DirectionR className={swipeDirection}>다음달</DirectionR>
        <div style={{ display: "flex" }}>
          {dayList.map((value) => (
            <span className={weekDayName} key={value}>
              {value}
            </span>
          ))}
        </div>
        <WeekGroup className={swipeDirection} ref={calendarRef}>
          {weekCalendarList.map((week, weekNum) => {
            const isActiveWeek = week.some((day) => isSameDay(day.date, currentDate));
            return (
              <div
                key={weekNum}
                className={clsx({ "active-week": isActiveWeek }, weekLineWrapper)}
                style={{ display: showWeekly && !isActiveWeek ? "none" : "flex" }}
              >
                {week.map((day) => (
                  <button
                    type="button"
                    key={day.date.toString()}
                    className={weekDayButton}
                    data-active-month={!(day.nextMonth || day.previousMonth)}
                    data-holiday={day.holiday.isHoliday}
                    onClick={() => {
                      setCurrentDate(day.date);
                    }}
                  >
                    <span
                      className={weekDayButtonDisplayValue}
                      data-active={isSameDay(day.date, currentDate)}
                      data-scheduled={isSameDay(day.date, "2025-05-26")}
                    >
                      {day.displayValue}
                    </span>
                    <div
                      className={weekDayButtonScheduledBullets}
                      data-active-month={!(day.nextMonth || day.previousMonth)}
                    >
                      {/* TODO: 달력에 예시로 보여주기 위한 조건 처리 */}
                      {Number(day.displayValue) % 3 === 0 && (
                        <span className={weekDayButtonScheduledBullet} data-type="훈련" />
                      )}
                      {Number(day.displayValue) % 5 === 0 && (
                        <span className={weekDayButtonScheduledBullet} data-type="교류전" />
                      )}
                      {Number(day.displayValue) % 8 === 0 && (
                        <span className={weekDayButtonScheduledBullet} data-type="팀" />
                      )}
                      {Number(day.displayValue) % 10 === 0 && (
                        <span className={weekDayButtonScheduledBullet} data-type="대회" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            );
          })}
        </WeekGroup>
      </Days>
    </CalendarContainer>
  );
}

const CalendarContainer = styled.article`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 8px 16px 16px;
`;
const NowDate = styled.div`
  button.date-control-button {
    display: flex;
    padding-left: 2px;
    margin-left: -2px;
    align-items: center;
    color: var(--gray900);
    border-radius: 4px;
    ${TEXT_ACTIVE("var(--gray100)", { scalable: true, activeRange: 4 })};
  }
`;
const Days = styled.div`
  position: relative;
  margin: 0 calc(-1 * var(--global-lr-padding));
  padding: 0 var(--global-lr-padding);
  overflow-x: hidden;
  overflow-y: hidden;
`;
const WeekGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.3s cubic-bezier(0.05, 0, 0, 1);

  &.L {
    transform: translateX(5%);
  }
  &.R {
    transform: translateX(-5%);
  }
`;

const MonthDirection = styled.div`
  position: absolute;
  top: 100px;
  text-align: center;
  line-height: 7.2rem;
  width: 72px;
  height: 72px;
  background-color: var(--primary400);
  border-radius: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  opacity: 0;
  transition: transform 0.3s var(--animation-cubic), opacity 0.3s var(--animation-cubic);
  z-index: 5;
`;
const DirectionL = styled(MonthDirection)`
  left: 0;
  transform: translate3d(-100%, 0, 0);
  &.L {
    opacity: 1;
    transform: translate3d(25%, 0, 0) scale(1.2);
  }
`;
const DirectionR = styled(MonthDirection)`
  right: 0;
  transform: translate3d(100%, 0, 0);
  &.R {
    opacity: 1;
    transform: translate3d(-25%, 0, 0) scale(1.2);
  }
`;

export default CalendarView;
