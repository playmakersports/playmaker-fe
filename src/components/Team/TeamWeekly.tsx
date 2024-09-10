import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { addDays, format, startOfWeek } from "date-fns";

import { FONTS } from "@/styles/common";
import { BasicWhiteCard } from "../common/Card";
import GroupTitle from "../common/GroupTitle";
import { useRouter } from "next/router";

function TeamWeekly() {
  const router = useRouter();
  const teamId = router.query.teamId;

  const [activeDate, setActiveDate] = useState("");

  useEffect(() => {
    setActiveDate(format(new Date(), "yyyy-MM-dd"));
  }, []);

  const SCHEDULE_MOCK = [
    { startTime: "09:30", contents: "팀 훈련" },
    { startTime: "16:30", contents: "교류전 (VS 성균관대)" },
  ];

  return (
    <Container>
      <GroupTitle link={`/team/${teamId}/schedule`}>일정</GroupTitle>
      <Week>
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
      <Schedules>
        {SCHEDULE_MOCK.map((item) => (
          <li key={item.startTime} className="team-group-schedules">
            <span className="team-group-schedule-time">{item.startTime}</span>
            <span>{item.contents}</span>
          </li>
        ))}
      </Schedules>
    </Container>
  );
}

const Container = styled.article``;
const Week = styled.div`
  display: flex;
  margin: 12px 0 10px;
  user-select: none;
  gap: 6px;
`;

const DaySelector = styled.button`
  flex: 1;
  padding: 8px 0;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  box-shadow: var(--shadow-alpha20);
  border-radius: var(--radius-10);
  font-weight: 400;
  font-size: 1.8rem;
  transition: all 0.2s var(--animation-cubic);

  &:first-of-type span.date-number {
    // 일요일
    color: var(--point);
  }

  span.date-name {
    // 요일명
    display: block;
    color: var(--gray600);
    font-size: 1.4rem;
  }
  span.date-number {
    margin-top: 4px;
    text-align: center;
  }

  &.active-day {
    background-color: var(--main);
    span {
      color: #fff;
    }
    span.date-number {
      color: #fff;
      font-weight: 600;
    }
  }

  &:active {
    transform: scale(0.95);
    background-color: var(--sub1);
    span {
      color: #fff;
    }
    span.date-number {
      color: #fff;
      font-weight: 600;
    }
  }
`;

const Schedules = styled(BasicWhiteCard.withComponent("ul"))`
  display: flex;
  flex-direction: column;
  ${FONTS.MD1W500};

  .team-group-schedules {
    display: inline-flex;
    align-items: center;
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
      margin-right: 8px;
      content: "";
      width: 5px;
      height: 5px;
      background-color: var(--neutral-n40);
      border-radius: 100%;
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

export default TeamWeekly;
