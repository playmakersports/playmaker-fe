import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { addDays, format, startOfWeek } from "date-fns";

import LogoSymbolType from "@/assets/logo/LogoSymbol.svg";
import { FONTS } from "@/styles/common";
import { BasicWhiteCard } from "../common/Card";

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
      <List>
        <p className="active-date">
          <LogoSymbolType width={18} height={18} />
          <span>{activeDate.split("-").join(".")}</span>
        </p>
        <Schedules>
          {SCHEDULE_MOCK.map((item) => (
            <li key={item.startTime} className="team-group-schedules">
              <span className="team-group-schedule-time">{item.startTime}</span>
              <span>{item.contents}</span>
            </li>
          ))}
        </Schedules>
      </List>
    </Container>
  );
}

const Container = styled(BasicWhiteCard)``;
const Week = styled.div`
  display: flex;
  padding-bottom: 10px;
  margin: 0 0 10px;
  user-select: none;
  gap: 4px;
  border-bottom: 1px solid var(--gray200);
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

const List = styled.div`
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

export default TeamWeekly;
