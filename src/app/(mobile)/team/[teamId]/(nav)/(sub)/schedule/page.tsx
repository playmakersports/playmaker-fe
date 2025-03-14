"use client";

import React, { useState, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import styled from "styled-components";
import { isSameDay, subMonths } from "date-fns";
import useCalendar from "@/hook/useCalendar";
import { usePageTitle } from "@/hook/usePageTitle";
import useModal from "@/hook/useModal";
import useStickyMoment from "@/hook/useStickyMoment";

import { TEAM_SCHEDULE_MOCK } from "@/constants/mock/TEAM";
import Loading from "@/components/common/Loading";
import { DateSwiperSelect } from "@/components/common/DateSwiperSelect";
import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import { BaseContainer } from "@/components/common/Container";
import ScheduleDetailModal from "../../../_components/ScheduleDetailModal";

import PlusIcon from "@/assets/icon/global/Plus.svg";
import LocationIcon from "@/assets/icon/global/Location.svg";
import CalendarIcon from "@/assets/icon/global/Calendar.svg";
import LeftArrowIcon from "@/assets/icon/arrow/LeftArrowThin.svg";
import RightArrowIcon from "@/assets/icon/arrow/RightArrowThin.svg";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";

function Schedule() {
  const router = useRouter();
  const params = useParams();
  const teamId = params["teamId"];
  const calendarRef = useRef<HTMLDivElement>(null);
  useStickyMoment(calendarRef);

  usePageTitle({
    title: "일정",
    scrolledShadow: false,
    subIcons: [
      {
        svgIcon: <PlusIcon />,
        linkTo: `/team/${teamId}/board/editor?type=new&via=schedule`,
        description: "일정 생성",
      },
    ],
  });

  const { dayList, weekCalendarList, currentDate, setCurrentDate } = useCalendar();
  const { ModalComponents, showModal } = useModal();

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
    <Container>
      <CalendarContainer>
        <Header>
          <NowDate>
            <MonthArrow onClick={() => handleMonthMove("PREV")}>
              <LeftArrowIcon />
            </MonthArrow>
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
                      className={
                        currentDate.getFullYear() === new Date().getFullYear() ? "hide year-number" : "year-number"
                      }
                      value={currentDate.getFullYear() === new Date().getFullYear() ? 0 : currentDate.getFullYear()}
                      suffix={currentDate.getFullYear() === new Date().getFullYear() ? undefined : "년"}
                      format={{
                        useGrouping: false,
                        trailingZeroDisplay: "stripIfInteger",
                      }}
                      style={{
                        marginRight: "6px",
                      }}
                    />
                    <NumberFlow value={currentDate.getMonth() + 1} suffix="월" />
                  </button>
                </NumberFlowGroup>
              )}
            </DateSwiperSelect>
            <MonthArrow onClick={() => handleMonthMove("NEXT")}>
              <RightArrowIcon />
            </MonthArrow>
          </NowDate>
          <MonthMover></MonthMover>
        </Header>
        <Days
          className={swipeDirection}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <DirectionL className={swipeDirection}>이전달</DirectionL>
          <DirectionR className={swipeDirection}>다음달</DirectionR>
          <Week>
            {dayList.map((value) => (
              <DayName key={value}>{value}</DayName>
            ))}
          </Week>
          <Weeks ref={calendarRef}>
            {weekCalendarList.map((week, weekNum) => {
              const isActiveWeek = week.some((day) => isSameDay(day.date, currentDate));
              return (
                <Week key={weekNum} className={isActiveWeek ? "active-week" : ""}>
                  {week.map((day) => (
                    <Day
                      key={day.date.toString()}
                      data-active={true}
                      $isCurrentMonth={!(day.nextMonth || day.previousMonth)}
                      $isHoliday={day.holiday.isHoliday}
                      className={isSameDay(day.date, currentDate) ? "current-date" : ""}
                      onClick={() => {
                        setCurrentDate(day.date);
                      }}
                    >
                      {day.displayValue}
                    </Day>
                  ))}
                </Week>
              );
            })}
          </Weeks>
        </Days>
      </CalendarContainer>
      <ScheduleContainer>
        {/* <Loading /> */}
        <ScheduleList>
          {TEAM_SCHEDULE_MOCK.map((item, index) => (
            <li key={`${item.date}+${index}`} onClick={() => showModal()}>
              <p className="schedule-emoji">{item.emoji}</p>
              <p className="schedule-title">{item.title}</p>
              <p className="schedule-description">{item.description}</p>
              <div className="schedule-info">
                <p>
                  <LocationIcon />
                  {item.place}
                </p>
                <p>
                  <CalendarIcon />
                  {item.startTime} - {item.endTime}
                </p>
              </div>
            </li>
          ))}
        </ScheduleList>
      </ScheduleContainer>
      <ScheduleDetailModal
        ModalContainer={ModalComponents}
        scheduleInfo={{
          articleId: "1",
          emoji: "🎉",
          title: "일정 제목",
          startDate: "2024-12-01",
          endDate: "2024-12-02",
          place: "성균관대학교 경기장",
          description: "올해의 마지막 경기입니다. 많은 관심 부탁드립니다.",
          writer: "홍길동",
        }}
      />
    </Container>
  );
}

const CalendarContainer = styled.article`
  margin: 0 -16px 14px;
  padding: 0 0 20px;

  &:has(.stuck) {
    padding-bottom: 32px;
  }
`;
const ScheduleContainer = styled.div`
  flex: 1;
  margin: 0 -16px -24px;
  height: max-content;
  padding: 20px 16px calc(var(--env-sab) + 32px);
  background-color: var(--background);
  border-radius: 20px 20px 0 0;
  border-top: 1px solid var(--gray100);
`;
const Container = styled(BaseContainer)`
  display: flex;
  padding-bottom: 32px;
  height: calc(100vh - var(--safe-area-top) - 1px);
  flex-direction: column;

  &:has(.stuck) {
    ${ScheduleContainer} {
      border-top: none;
    }
  }
`;

const Header = styled.div`
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
const NowDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 2.8rem;
  button.date-control-button {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 -2px;
    padding: 4px 8px;
    font-size: 2rem;
    font-weight: 500;
    ${BUTTON_ACTIVE("var(--gray50)")};

    & > .year-number {
      z-index: -1;
      transition: opacity 0.7s;
    }
    & > .hide {
      margin-left: calc(-6px - 12px);
      opacity: 0;
    }
  }
`;
const Days = styled.div`
  position: relative;
  width: var(--mobile-max-width);
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  gap: 2px;
  ${FONTS.MD1W500};
  font-size: 1.6rem;
  transition: transform 0.3s cubic-bezier(0.05, 0, 0, 1);

  &.L {
    transform: translateX(5%);
  }
  &.R {
    transform: translateX(-5%);
  }
`;

const Week = styled.div`
  display: flex;
  padding: 0 20px;
`;
const Weeks = styled.div`
  display: flex;
  flex-direction: column;

  &.stuck {
    ${Week}.active-week {
      position: fixed;
      width: 100%;
      max-width: var(--mobile-max-width);
      height: max-content;
      padding-top: 12px;
      padding-bottom: 20px;
      top: var(--safe-area-top);
      opacity: 1;
      z-index: 1;
      background-color: var(--background-light);
      &::after {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 36px;
        left: 0;
        bottom: -24px;
        background: linear-gradient(to bottom, rgba(var(--background-rgb), 1) 0%, rgba(var(--background-rgb), 0) 100%);
        border-radius: 20px 20px 0 0;
        border-top: 1px solid var(--gray100);
      }
    }
    ${Week} {
      margin-top: -4px;
      height: 12px;
      opacity: 0;
      transition: all 0.3s;
    }
  }
`;
const DayName = styled.div`
  flex: 1;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--gray700);
`;
const MonthMover = styled.div`
  display: flex;
  gap: 4px;
`;
const MonthArrow = styled.button`
  padding: 8px 6px;
  ${BUTTON_ACTIVE("var(--gray50)")};
  svg {
    width: 16px;
    height: 16px;
    fill: var(--gray500);
  }
`;

const MonthDirection = styled.div`
  position: absolute;
  top: calc(50% - 32px);
  text-align: center;
  line-height: 7.2rem;
  width: 72px;
  height: 72px;
  background-color: var(--main);
  border-radius: 100%;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  opacity: 0;
  transform: scale(0.1);
  transition: transform 0.3s var(--animation-cubic), opacity 0.3s var(--animation-cubic);
  z-index: 2;
`;
const DirectionL = styled(MonthDirection)`
  left: 0;
  transform: translate3d(-100%, 0, 0);
  &.L {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;
const DirectionR = styled(MonthDirection)`
  right: 0;
  transform: translate3d(100%, 0, 0);
  &.R {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const Day = styled.button<{ $isCurrentMonth: boolean; $isHoliday: boolean }>`
  position: relative;
  flex: 1;
  padding: 12px 0 24px;
  font-size: 1.6rem;
  text-align: center;
  border: 1px solid transparent;
  color: ${({ $isHoliday }) => ($isHoliday ? "var(--point-red)" : "var(--text)")};
  opacity: ${({ $isCurrentMonth }) => ($isCurrentMonth ? 1 : 0.35)};
  ${BUTTON_ACTIVE("var(--primary-m20)")};

  &[aria-invalid] {
    visibility: hidden;
  }
  &[data-active]::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    margin: 8px auto 0;
    width: 4px;
    height: 4px;
    background-color: var(--sub0);
    border-radius: 100%;
  }
  &.current-date {
    background-color: var(--primary-m20);
    transform: scale(1.03);
  }
`;

const ScheduleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    cursor: pointer;
    padding: 16px 20px;
    background-color: var(--background-light);
    width: 100%;
    ${BUTTON_ACTIVE("var(--background-light)")};
  }

  p.schedule-emoji {
    font-size: 1.6rem;
  }
  p.schedule-title {
    margin-bottom: 6px;
    ${FONTS.MD1}
  }
  p.schedule-description {
    ${FONTS.MD2};
    font-weight: 400;
    color: var(--gray800);
  }
  div.schedule-info {
    margin-top: 12px;
    ${FONTS.MD2};
    font-weight: 400;
    p {
      display: flex;
      padding: 2px 0;
      align-items: center;
      gap: 10px;
      color: var(--gray600);
      svg {
        fill: var(--gray600);
      }
    }
  }
`;

export default Schedule;
