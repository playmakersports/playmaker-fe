import React, { useEffect } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { useRouter, useParams } from "next/navigation";
import { addDays, differenceInDays, format, startOfWeek } from "date-fns";

import { fonts } from "@/styles/fonts.css";
import { flexColumnGap20, flexRowGap10 } from "@/styles/container.css";
import { teamMainScheduleItem } from "./team.main.css";
import Chip from "@/components/common/Chip";
import Badge from "@/components/common/Badge";

import CalendarIcon from "@/assets/icon/common/outlined/Calendar.svg";
import ClockIcon from "@/assets/icon/common/outlined/Clock.svg";

type Props = {
  activeDate: string;
  setActiveDate: (prev: string) => void;
  schedulesList: Array<Schedule>;
};
type Schedule = {
  startDate: string;
  time: string;
  scheduleCategory: string;
  scheduleTitle: string;
  scheduleId: string;
};
function TeamWeeklyCalender(props: Props) {
  const { activeDate, setActiveDate, schedulesList } = props;
  const router = useRouter();
  const params = useParams();
  const teamId = params["teamId"];

  const moveSchedule = () => {
    router.push(`/team/${teamId}/schedule`);
  };

  useEffect(() => {
    setActiveDate(format(new Date(), "yyyy-MM-dd"));
  }, []);

  return (
    <>
      <Week>
        {getDatesOfCurrentWeek().map((value, i) => (
          <DaySelector
            type="button"
            key={value}
            onClick={() => setActiveDate(value)}
            className={activeDate === value ? "active-day" : ""}
          >
            <span className={clsx("date-name", fonts.caption1.medium)}>{WEEK_NAME[i]}</span>
            <span className={clsx("date-number", fonts.body4.medium)}>{+value.split("-")[2]}</span>
          </DaySelector>
        ))}
      </Week>
      <List className={clsx(flexColumnGap20)}>
        {schedulesList.map((schedule, index) => {
          const diffDays = differenceInDays(new Date(), new Date(schedule.startDate));
          return (
            <li key={index} onClick={moveSchedule} className={teamMainScheduleItem}>
              <div className="head-line">
                <Chip type="primary" fillType="light">
                  {schedule.scheduleCategory}
                </Chip>
                <span className={clsx("subtitle", fonts.body4.medium)}>{schedule.scheduleTitle}</span>
              </div>
              <div className="sub-line">
                <p className={clsx(flexRowGap10)}>
                  <span className={clsx("date-wrapper", fonts.caption1.regular)}>
                    <CalendarIcon />
                    {schedule.startDate}
                  </span>
                  <span className={clsx("date-wrapper", fonts.caption1.regular)}>
                    <ClockIcon />
                    {schedule.time}
                  </span>
                </p>
                <Badge type="primary" fillType={diffDays === 0 ? "filled" : "light"} size="medium">
                  D{diffDays === 0 ? "-DAY" : diffDays}
                </Badge>
              </div>
            </li>
          );
        })}
      </List>
    </>
  );
}

const Week = styled.div`
  display: flex;
  user-select: none;
`;

const DaySelector = styled.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  transition: all 0.2s var(--animation-cubic);

  span.date-name {
    // 요일명
    display: block;
    height: 24px;
    color: var(--gray400);
  }
  span.date-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    text-align: center;
    border-radius: 6px;
  }

  &.active-day {
    span.date-number {
      background: var(--primary500);
      color: #fff;
    }
  }

  &:active {
    transform: scale(0.95);
    span.date-number {
      background: var(--gray50);
    }
  }
`;

const List = styled.ul`
  li.today {
    border-color: var(--primary500);
  }
  div.head-line {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
    span.subtitle {
      color: var(--gray700);
    }
  }
  div.sub-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span.date-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      color: var(--gray400);
    }
    svg {
      width: 18px;
      height: 18px;
      fill: var(--gray400);
    }
  }
`;

const WEEK_NAME = ["일", "월", "화", "수", "목", "금", "토"];
function getDatesOfCurrentWeek() {
  const today = new Date();
  const start = startOfWeek(today, { weekStartsOn: 0 }); // 0은 일요일

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(start, i);
    return format(date, "yyyy-MM-dd");
  });

  return dates;
}

export default TeamWeeklyCalender;
