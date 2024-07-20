import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { addDays, format, startOfWeek } from "date-fns";

import { FONTS } from "@/styles/common";
import { BasicWhiteCard } from "../common/Card";

function MyWeekly() {
  const [activeDate, setActiveDate] = useState("");

  useEffect(() => {
    setActiveDate(format(new Date(), "yyyy-MM-dd"));
  }, []);

  const SCHEDULE_MOCK = [
    {
      teamName: "SPABA",
      schedules: [
        { startTime: "09:30", contents: "팀 훈련" },
        { startTime: "16:30", contents: "교류전 (VS 성균관대)" },
      ],
    },
    { teamName: "최강FC", schedules: [{ startTime: "20:30", contents: "친목 풋살" }] },
  ];

  return (
    <Wrapper>
      <Week>
        {getDatesOfCurrentWeek().map((value, i) => (
          <div key={value}>
            <span className="date-name">{WEEK_NAME[i]}</span>
            <button
              type="button"
              onClick={() => setActiveDate(value)}
              className={`${activeDate === value ? "active-date" : ""} date-day`}
            >
              <p>{+value.split("-")[2]}</p>
            </button>
          </div>
        ))}
      </Week>
      <Schedules>
        {SCHEDULE_MOCK.map((team) => (
          <div key={team.teamName} className="team-group">
            <p className="team-group-name">{team.teamName}</p>
            <ul className="team-group-schedules">
              {team.schedules.map((schedule) => (
                <li key={schedule.startTime}>
                  <span className="team-group-schedule-time">{schedule.startTime}</span>
                  <span>{schedule.contents}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Schedules>
    </Wrapper>
  );
}

const Wrapper = styled(BasicWhiteCard)`
  padding: 0;
`;
const Week = styled.div`
  display: flex;
  padding: 16px 16px 0;
  margin-bottom: 12px;
  user-select: none;

  div {
    flex: 1;
    text-align: center;
    ${FONTS.MD1W500};

    &:first-of-type {
      // 일요일
      button > p {
        color: var(--point);
      }
    }
    span.date-name {
      display: block;
      color: var(--gray4);
      font-size: 1.4rem;
    }
    button.date-day {
      text-align: center;
      width: 100%;

      &:active > p {
        color: #fff !important;
        background-color: var(--background);
        box-shadow: 0 0 0 2px var(--background);
        transform: scale(0.97);
      }
    }

    button.date-day > p {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 100%;
      transition: all 0.2s cubic-bezier(0.05, 0, 0, 1);
    }

    button.active-date > p {
      color: #fff;
      background-color: var(--main);
      font-weight: 700;
      transition: background-color 0.2s;
    }
  }
`;

const Schedules = styled.div`
  padding: 0 16px 16px;
  ${FONTS.MD1W500};

  .team-group {
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid var(--gray6);
    &:last-of-type {
      border: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }

    .team-group-name {
      margin: 0 16px 4px;
      font-weight: 600;
    }
    .team-group-schedules {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .team-group-schedules li {
      display: inline-flex;
      align-items: center;
      font-variant-numeric: tabular-nums;
      font-size: 1.4rem;
      font-weight: 400;
      gap: 4px;
      .team-group-schedule-time {
        letter-spacing: -0.2px;
      }
      span {
        color: var(--gray2);
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

export default MyWeekly;
