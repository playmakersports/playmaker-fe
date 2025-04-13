"use client";
import React, { useState } from "react";
import styled from "styled-components";
import clsx from "clsx";
import { addDays, format, isSameDay, isToday, startOfWeek } from "date-fns";

import { FONTS } from "@/styles/common";
import { fonts } from "@/styles/fonts.css";
import Chip from "@/components/common/Chip";
import { BottomSheetSelect } from "@/components/common/input/BottomSheetSelect";
import { formattedDate } from "@/util/date";

import CalendarIcon from "@/assets/icon/common/outlined/Calendar.svg";
import RightArrow from "@/assets/icon/arrow/RightArrow.svg";
import FilterLineIcon from "@/assets/icon/common/FilterLine.svg";

function MyWeekly() {
  const [activeDate, setActiveDate] = useState(new Date());
  const [filterTeam, setFilterTeam] = useState("all");
  const SCHEDULE_MOCK = [
    {
      scheduleId: 35,
      date: "2025-04-10",
      time: "13:40",
      teamName: "SPABA",
      teamId: 123,
      title: "000 대회 참여",
      category: "훈련",
    },
    {
      scheduleId: 23,
      date: "2025-04-10",
      time: "16:40",
      teamName: "SPABA",
      teamId: 123,
      title: "000 대회 참여",
      category: "교류전",
    },
    {
      scheduleId: 1243,
      date: "2025-04-11",
      time: "10:40",
      teamName: "SPABA",
      teamId: 123,
      title: "000 대회 참여",
      category: "대회",
    },
    {
      scheduleId: 1523,
      date: "2025-04-13",
      time: "13:40",
      teamName: "SPABA",
      teamId: 123,
      title: "000 대회 참여",
      category: "대회",
    },
    {
      scheduleId: 2523,
      date: "2025-04-15",
      time: "11:40",
      teamName: "SPABA",
      teamId: 1243,
      title: "참가 신청",
      category: "팀 이벤트",
    },
  ];

  const handleActiveDate = (date: Date) => {
    setActiveDate(date);
  };

  return (
    <Wrapper aria-label="이번주 나의 일정">
      <Title>
        <div className="title-wrapper">
          <CalendarIcon />
          <span className="title">다가오는 주요 일정</span>
          <button type="button">
            <RightArrow />
          </button>
        </div>
        <BottomSheetSelect
          title="필터"
          description="일정에 보여질 팀 리스트를 선택해 주세요."
          options={[
            { name: "전체", value: "all" },
            { name: "SPABA", value: "23" },
            { name: "FCGOGO", value: "253" },
          ]}
          onChange={(value) => setFilterTeam(value)}
        >
          <FilterButton>
            <FilterLineIcon />
            <span className={fonts.body4.medium}>필터</span>
          </FilterButton>
        </BottomSheetSelect>
      </Title>
      <Week>
        {getDatesOfCurrentWeek().map((value, i) => (
          <button type="button" key={value} className="day-wrapper" onClick={() => handleActiveDate(new Date(value))}>
            <span className="date-name">{WEEK_NAME[i]}</span>
            <span className={clsx("day-number", isSameDay(value, activeDate) && "active-date", i === 5 && "has-plan")}>
              {+value.split("-")[2]}
            </span>
          </button>
        ))}
      </Week>
      <Schedules>
        {SCHEDULE_MOCK.map((schedule) => (
          <li key={schedule.scheduleId} className="schedule-item" style={{ marginBottom: "4px" }}>
            <span className="day-signature">
              {isToday(schedule.date) ? (
                <span className={fonts.caption1.semibold} style={{ color: "var(--primary500)" }}>
                  Today
                </span>
              ) : (
                formattedDate(schedule.date, {
                  displayDateType: ".",
                  displayYear: "not-this-year",
                  displayDayName: "hide",
                  displayTime: "hide",
                })
              )}
            </span>
            <div className="day-information" data-category={schedule.category}>
              <p className="left">
                <span className="team-logo"></span>
                <span className="schedule-time">{schedule.time}</span>
                <span className="schedule-title">{schedule.title}</span>
              </p>
              <span className="schedule-category">
                <Chip type={CHIP_COLOR[schedule.category]} fillType="light">
                  {schedule.category}
                </Chip>
              </span>
            </div>
          </li>
        ))}
      </Schedules>
    </Wrapper>
  );
}
const CHIP_COLOR: Record<string, any> = {
  훈련: "primary",
  교류전: "info",
  대회: "red",
  "팀 이벤트": "magenta",
};

const Wrapper = styled.div``;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;

  div.title-wrapper {
    display: flex;
    align-items: center;
  }
  span.title {
    margin-left: 8px;
    margin-right: 4px;
    color: var(--gray900);
    ${FONTS.body2("semibold")};
  }
  button {
    width: 24px;
    height: 24px;
  }
  svg {
    width: 24px;
    height: 24px;
    fill: var(--gray700);
  }
`;
const Week = styled.div`
  user-select: none;
  display: flex;
  justify-content: space-between;

  button.day-wrapper {
    flex: 1;
    text-align: center;

    span.date-name {
      ${FONTS.caption1("medium")};
      display: block;
      padding: 3px 0;
      color: var(--gray400);
    }

    span.day-number {
      ${FONTS.body3("medium")};
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 12px;
      color: var(--gray700);

      &.has-plan {
        color: var(--primary500);
        background-color: var(--primary50);
      }
      &.active-date {
        ${FONTS.body3("semibold")};
        color: var(--white);
        background-color: var(--primary500);
      }
    }
  }
`;

const Schedules = styled.ul`
  margin-top: 20px;

  li.schedule-item {
    display: flex;
    gap: 12px;
    height: 44px;
    justify-content: space-between;
    align-items: flex-start;
  }
  span.day-signature {
    width: 36px;
    color: var(--gray400);
    ${FONTS.caption1("medium")};
  }
  div.day-information {
    position: relative;
    flex: 1;
    display: flex;
    padding: 10px 0 10px 12px;
    justify-content: space-between;
    gap: 8px;
    p.left {
      display: flex;
      gap: 8px;
      align-items: center;
      ${FONTS.body4("regular")};
    }
    span.schedule-time {
      font-variant-numeric: tabular-nums;
      letter-spacing: -0.01rem;
    }
    span.team-logo {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid var(--gray200);
    }

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      height: 100%;
      width: 3px;
      border-radius: 2px;
    }
    &[data-category="훈련"] {
      &::before {
        background-color: var(--primary400);
      }
    }
    &[data-category="교류전"] {
      &::before {
        background-color: var(--info400);
      }
    }
    &[data-category="대회"] {
      &::before {
        background-color: var(--red400);
      }
    }
    &[data-category="팀 이벤트"] {
      &::before {
        background-color: var(--magenta300);
      }
    }
  }
`;

const FilterButton = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid var(--gray200);
  color: var(--gray600);
  svg {
    width: 16px;
    height: 16px;
    fill: var(--gray600);
  }
  &:active {
    background-color: var(--gray50);
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
