import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { addDays, format, startOfWeek } from "date-fns";

import LogoSymbolType from "@/assets/logo/LogoSymbol.svg";
import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import { BasicWhiteCard } from "./Card";

type Props = {
  clickable?: boolean;
  grouping: boolean;
  activeDate: string;
  setActiveDate: (prev: string) => void;
  schedulesList: Array<{
    teamName: string;
    schedules: Array<Schedule>;
  }>;
};
type Schedule = {
  startTime: string;
  scheduleTitle: string;
  scheduleId: string;
};
function WeeklyCalender(props: Props) {
  const { clickable = true, grouping = false, activeDate, setActiveDate, schedulesList } = props;
  const router = useRouter();
  const teamId = router.query.teamId;

  const moveSchedule = () => {
    router.push(`/team/${teamId}/schedule`);
  };

  useEffect(() => {
    setActiveDate(format(new Date(), "yyyy-MM-dd"));
  }, []);

  return (
    <Container>
      <Week isGroup={grouping}>
        {getDatesOfCurrentWeek().map((value, i) => (
          <DaySelector
            type="button"
            key={value}
            onClick={() => setActiveDate(value)}
            className={activeDate === value ? "active-day" : ""}
          >
            <span className="date-name">{WEEK_NAME[i]}</span>
            <span className="date-number">{+value.split("-")[2]}</span>
          </DaySelector>
        ))}
      </Week>
      <List clickable={clickable} onClick={clickable ? moveSchedule : () => {}}>
        {!grouping && (
          <p className="active-date">
            <LogoSymbolType width={18} height={18} />
            <span>{activeDate.split("-").join(".")}</span>
          </p>
        )}
        <Schedules>
          {!grouping
            ? schedulesList[0].schedules.map((item) => (
                <li key={item.startTime} className="team-group-schedules">
                  <span className="team-group-schedule-time">{item.startTime}</span>
                  <span>{item.scheduleTitle}</span>
                </li>
              ))
            : schedulesList.map((schedule) => (
                <GroupingByTeam key={schedule.teamName}>
                  <div className="group-team">
                    <div className="team-list-head">
                      <LogoSymbolType width={18} height={18} />
                      {schedule.teamName}
                    </div>
                    <ul className="group-team-schedule-wrapper">
                      {schedule.schedules.map((item) => (
                        <li key={item.startTime} className="team-group-schedules">
                          <span className="team-group-schedule-time">{item.startTime}</span>
                          <span>{item.scheduleTitle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GroupingByTeam>
              ))}
        </Schedules>
      </List>
    </Container>
  );
}

const Container = styled(BasicWhiteCard)``;
const Week = styled.div<{ isGroup: boolean }>`
  display: flex;
  padding-bottom: 10px;
  margin: 0 0 12px;
  user-select: none;
  gap: 4px;
  border-bottom: ${({ isGroup }) => (isGroup ? "none" : "1px solid var(--gray200)")};
`;

const DaySelector = styled.button`
  flex: 1;
  padding: 4px 2px;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  border-radius: var(--radius-10);
  font-weight: 400;
  font-size: 1.6rem;
  transition: all 0.2s var(--animation-cubic);

  &:first-of-type span.date-number {
    // 일요일
    color: var(--point);
  }

  span.date-name {
    // 요일명
    display: block;
    color: var(--gray600);
    font-size: 1.3rem;
  }
  span.date-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 4px;
    width: 27px;
    height: 27px;
    text-align: center;
    color: var(--gray800);
    border-radius: 50%;
    font-weight: 400;
  }

  &.active-day {
    span {
      color: var(--art-purple);
    }
    span.date-number {
      background: var(--art-purple);
      color: #fff;
      font-weight: 500;
    }
  }

  &:active {
    transform: scale(0.95);
    background-color: var(--art-purple);
    opacity: 0.6;
    span {
      color: #fff;
    }
    span.date-number {
      color: #fff;
      font-weight: 600;
    }
  }
`;

const List = styled.div<{ clickable: boolean }>`
  margin: -8px -12px -8px;
  padding: 8px 12px 8px;
  ${({ clickable }) => (clickable ? BUTTON_ACTIVE("var(--gray100)") : "")}
  p.active-date {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  p.active-date > span {
    display: inline-block;
    padding: 2px 6px;
    color: var(--main);
    background-color: rgba(241, 245, 255, 1);
    font-size: 1.4rem;
    font-weight: 500;
    border-radius: 5px;
    letter-spacing: 0.5px;
  }
`;
const Schedules = styled.ul`
  display: flex;
  flex-direction: column;
  ${FONTS.MD1W500};

  .team-group-schedules {
    display: inline-flex;
    align-items: center;
    padding-left: 8px;
    font-variant-numeric: tabular-nums;
    font-size: 1.4rem;
    font-weight: 400;
    .team-group-schedule-time {
      margin-right: 8px;
      font-weight: 600;
      letter-spacing: -0.2px;
    }
    span {
      color: var(--gray800);
    }
    &::before {
      display: inline-flex;
      margin-right: 12px;
      content: "";
      width: 5px;
      height: 5px;
      background-color: var(--sub1);
      border-radius: 100%;
    }
  }
`;

const GroupingByTeam = styled.li`
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--gray200);
  div.team-list-head {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  ul.group-team-schedule-wrapper {
    padding-top: 6px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  &:last-of-type {
    border: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const WEEK_NAME = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function getDatesOfCurrentWeek() {
  const today = new Date();
  const start = startOfWeek(today, { weekStartsOn: 0 }); // 0은 일요일

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(start, i);
    return format(date, "yyyy-MM-dd");
  });

  return dates;
}

export default WeeklyCalender;
