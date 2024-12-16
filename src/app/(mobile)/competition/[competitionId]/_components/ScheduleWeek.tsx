import React, { useRef } from "react";
import styled from "@emotion/styled";
import { eachDayOfInterval, isSameDay, isToday } from "date-fns";

import { DAY_NAME_KOREAN } from "@/util/date";
import { scrollMaskedHandler, scrollMaskedHandlerRef } from "@/util/display";
import { SCROLL_HIDE, SCROLL_MASKED_GRADIENT } from "@/styles/common";
import RightArrowIcon from "@/assets/icon/arrow/RightArrowSmall.svg";

type Props = {
  startDate: string;
  endDate: string;
  schedule?: { date: string; rounds: string[] }[];
};
function ScheduleWeek(props: Props) {
  const { startDate, endDate, schedule } = props;
  const weeklyRef = useRef<HTMLUListElement>(null) as React.MutableRefObject<HTMLUListElement>;
  const todayScrollLeft = useRef<number>(0);

  return (
    <Schedule>
      <WeeklyButton
        className="prev"
        onClick={() => {
          weeklyRef.current.scrollBy({ left: -360, behavior: "smooth" });
        }}
      >
        <RightArrowIcon />
      </WeeklyButton>
      <Weekly
        onScroll={(e) => scrollMaskedHandler(e, "horizontal")}
        ref={(ref) => {
          if (ref) {
            weeklyRef.current = ref;
            scrollMaskedHandlerRef(ref, "horizontal");
            const WEEKLY_WIDTH = ref.clientWidth / 2;
            const TARGET_LEFT_WIDTH = todayScrollLeft.current * (52 + 8) - WEEKLY_WIDTH;
            ref?.scrollTo({
              left: TARGET_LEFT_WIDTH,
              behavior: "smooth",
            });
          }
        }}
      >
        {eachDayOfInterval({
          start: new Date(startDate),
          end: new Date(endDate),
        }).map((date, index) => (
          <li
            key={date.toISOString()}
            ref={(element) => {
              if (isToday(date)) {
                if (element) {
                  todayScrollLeft.current = index + 1;
                  console.log(todayScrollLeft.current);
                }
              }
            }}
            className={isToday(date) ? "today" : schedule?.find((s) => isSameDay(s.date, date)) ? "has-match" : ""}
          >
            <span className="day-name">{DAY_NAME_KOREAN[date.getDay()]}</span>
            <span>{date.getDate()}</span>
            <p className="rounds">
              {schedule
                ?.find((s) => isSameDay(s.date, date))
                ?.rounds?.map((round) => (
                  <span key={round}>{round}</span>
                ))}
            </p>
          </li>
        ))}
      </Weekly>
      <WeeklyButton
        className="next"
        onClick={() => {
          weeklyRef.current.scrollBy({ left: 360, behavior: "smooth" });
        }}
      >
        <RightArrowIcon />
      </WeeklyButton>
    </Schedule>
  );
}

const Schedule = styled.section`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin: 0 -16px;
  padding: 20px 0 36px;
  border-top: 1px solid var(--gray100);
  ${SCROLL_MASKED_GRADIENT("var(--background-light-rgb)")};

  button.prev:has(+ ul.prev-scroll-mask) {
    display: flex;
  }
`;
const Weekly = styled.ul`
  display: inline-flex;
  padding: 0 12px;
  white-space: nowrap;
  gap: 8px;
  overflow-x: auto;
  ${SCROLL_HIDE}

  li {
    user-select: none;
    cursor: pointer;
    flex-shrink: 0;
    width: 52px;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    padding: 8px 0;
    font-size: 2rem;
    font-weight: 400;
    border-radius: 5px;

    span.day-name {
      font-size: 1.3rem;
      color: var(--gray600);
    }

    &.has-match {
      cursor: pointer;
      color: var(--gray900);

      p.rounds > span {
        background-color: var(--gray100);
        color: var(--gray400);
      }
    }
    &.today {
      cursor: pointer;
      color: var(--main);
      font-weight: 500;
      span.day-name {
        color: var(--main);
      }
    }
    /* 경기 없는 날 */
    cursor: default;
    color: var(--gray400);

    p.rounds {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 8px;
      font-size: 1.3rem;
      font-weight: 600;

      span {
        padding: 4px 8px;
        border-radius: 10px;
        background-color: rgba(var(--sub2-rgb), 0.35);
        color: var(--main);
      }
    }
  }

  &.next-scroll-mask {
    & + button.next {
      display: flex;
    }
  }
`;

const WeeklyButton = styled.button`
  position: absolute;
  display: none;
  top: 36px;
  padding: 8px 6px 8px 8px;
  align-items: center;
  justify-content: center;
  background-color: var(--gray0);
  opacity: 0.95;
  z-index: 2;

  &.next {
    right: -1px;
    border: 1px solid var(--gray200);
    border-radius: 50% 0 0 50%;
  }
  &.prev {
    left: -1px;
    border: 1px solid var(--gray200);
    border-radius: 0 50% 50% 0;
    & > svg {
      transform: rotate(180deg);
    }
  }

  svg {
    width: 24px;
    height: 24px;
    fill: var(--gray600);
  }
`;

export default ScheduleWeek;
