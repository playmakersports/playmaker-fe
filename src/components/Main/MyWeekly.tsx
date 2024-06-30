import React, { useState } from "react";
import styled from "@emotion/styled";
import { addDays, format, startOfWeek } from "date-fns";

import { FONTS } from "@/styles/common";
import { BasicWhiteCard } from "../common/Card";

function MyWeekly() {
  const [activeDate, setActiveDate] = useState(format(new Date(), "yyyy-MM-dd"));

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
        <li>09:00 스케줄</li>
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
      color: var(--sub1);
    }
    span.date-name {
      display: block;
      color: rgba(var(--gray-h3));
      font-size: 1.4rem;
    }
    button.date-day {
      text-align: center;
      width: 100%;

      &:active > p {
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

const Schedules = styled.ul`
  padding: 0 16px 16px;
  ${FONTS.MD1W500}
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
