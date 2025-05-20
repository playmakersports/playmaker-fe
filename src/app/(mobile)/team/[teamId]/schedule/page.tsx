"use client";

import React, { useState, useRef } from "react";
import clsx from "clsx";
import { useRouter, useParams } from "next/navigation";
import styled from "styled-components";
import { isSameDay, subMonths } from "date-fns";
import useCalendar from "@/hook/useCalendar";
import { useHeader } from "@/hook/useHeader";
import useStickyMoment from "@/hook/useStickyMoment";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";

import { DateSwiperSelect } from "@/components/common/DateSwiperSelect";
import { FONTS, TEXT_ACTIVE } from "@/styles/common";

import PlusIcon from "@/assets/icon/common/Plus.svg";
import DownToggleArrow from "@/assets/icon/arrow/DownArrowToggle.svg";
import { baseDividedLine, flexColumnGap16, flexRowGap8 } from "@/styles/container.css";
import {
  monthEventSummary,
  monthEventSummaryItems,
  weekDayButton,
  weekDayButtonDisplayValue,
  weekDayButtonScheduledBullet,
  weekDayButtonScheduledBullets,
  weekDayName,
  weekLineWrapper,
} from "./_components/calendar.css";
import ScheduleList from "./_components/ScheduleList";

function Schedule() {
  const router = useRouter();
  const params = useParams();
  const teamId = params["teamId"];
  const calendarRef = useRef<HTMLDivElement>(null);
  useStickyMoment(calendarRef);

  useHeader({
    title: "다가오는 일정",
    subIcons: [
      {
        svgIcon: <PlusIcon />,
        onClick: `/team/${teamId}/schedule/editor`,
        description: "일정 생성",
      },
    ],
  });

  const { dayList, weekCalendarList, currentDate, setCurrentDate } = useCalendar();

  const handleMonthMove = (direction: "PREV" | "NEXT") => {
    const targetDate = subMonths(currentDate, direction === "PREV" ? +1 : -1);
    setCurrentDate(targetDate);
  };

  // 캘린더 이동
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
    <section>
      <CalendarContainer>
        <NowDate>
          <DateSwiperSelect
            defaultValue={`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`}
            getCurrentValue={({ y, m, d }) => {
              setCurrentDate(new Date(y, m - 1, d));
            }}
          >
            {(showModal) => (
              <NumberFlowGroup>
                <button type="button" onClick={showModal} className="date-control-button">
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
                <div key={weekNum} className={clsx({ "active-week": isActiveWeek }, weekLineWrapper)}>
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
                        <span className={weekDayButtonScheduledBullet} data-type="훈련" />
                        <span className={weekDayButtonScheduledBullet} data-type="교류전" />
                        <span className={weekDayButtonScheduledBullet} data-type="팀" />
                        <span className={weekDayButtonScheduledBullet} data-type="대회" />
                      </div>
                    </button>
                  ))}
                </div>
              );
            })}
          </WeekGroup>
        </Days>
      </CalendarContainer>
      <div className={baseDividedLine} />
      <div className={flexColumnGap16}>
        <ul className={clsx(monthEventSummary, flexRowGap8)}>
          <li className={monthEventSummaryItems} data-type="훈련">
            훈련 1
          </li>
          <li className={monthEventSummaryItems} data-type="교류전">
            교류전 1
          </li>
          <li className={monthEventSummaryItems} data-type="팀">
            팀 이벤트 1
          </li>
          <li className={monthEventSummaryItems} data-type="대회">
            대회 1
          </li>
        </ul>
        <ScheduleList
          data={[
            {
              date: "2025-05-26",
              schedule: [
                {
                  scheduleId: "1",
                  category: "훈련",
                  title: "훈련 1",
                  place: "장소 1",
                  date: "2025-05-26",
                  time: "15:00",
                  people: [
                    { userId: "1", username: "홍길동", img: "https://picsum.photos/seed/picsum/300" },
                    { userId: "2", username: "김철수", img: "https://picsum.photos/seed/picsum/300" },
                  ],
                },
                {
                  scheduleId: "51",
                  category: "교류전",
                  title: "훈련 1",
                  place: "장소 1",
                  date: "2025-05-26",
                  time: "15:00",
                  people: [
                    { userId: "1", username: "홍길동", img: "https://picsum.photos/seed/picsum/300" },
                    { userId: "2", username: "김철수", img: "https://picsum.photos/seed/picsum/300" },
                  ],
                },
              ],
            },
            {
              date: "2025-05-28",
              schedule: [
                {
                  scheduleId: "321",
                  category: "대회",
                  title: "대박농구대회",
                  place: "서울 실내체육관",
                  date: "2025-05-26",
                  time: "09:00",
                  people: [
                    { userId: "41", username: "홍길동", img: "https://picsum.photos/id/40/400" },
                    { userId: "52", username: "김철수", img: "https://picsum.photos/seed/picsum/300" },
                    { userId: "72", username: "김철수", img: "https://picsum.photos/id/237/400" },
                    { userId: "892", username: "김철수", img: "https://picsum.photos/seed/picsum/300" },
                    { userId: "5892", username: "김철수", img: "https://picsum.photos/seed/picsum/300" },
                    { userId: "6892", username: "김철수", img: "https://picsum.photos/seed/picsum/300" },
                    { userId: "67892", username: "김철수", img: "https://picsum.photos/seed/picsum/300" },
                    { userId: "12567892", username: "김철수", img: "https://picsum.photos/seed/picsum/300" },
                    { userId: "267892", username: "김철수", img: "https://picsum.photos/seed/picsum/300" },
                  ],
                },
              ],
            },
          ]}
        />
      </div>
    </section>
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
    ${FONTS.body2("semibold")};
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

export default Schedule;
