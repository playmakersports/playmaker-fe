"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { useParams } from "next/navigation";
import useCalendar from "@/hook/useCalendar";
import { useHeader } from "@/hook/useHeader";

import { baseDividedLine, flexColumnGap16, flexRowGap8 } from "@/styles/container.css";
import { monthEventSummary, monthEventSummaryItems } from "./_components/calendar.css";
import ScheduleList from "./_components/ScheduleList";
import CalendarView from "./_components/CalendarView";
import PlusFloat from "@/components/common/PlusFloat";
import SearchIcon from "@/assets/icon/common/Search.svg";

function Schedule() {
  const params = useParams();
  const teamId = params["teamId"];
  const calendar = useCalendar();
  const viewWeekly = useState(true);
  const isMonthly = !viewWeekly[0];

  useHeader({
    title: "다가오는 일정",
    subIcons: [
      {
        svgIcon: <SearchIcon />,
        onClick: `/team/${teamId}/schedule`,
        description: "일정 찾기",
      },
    ],
  });

  return (
    <section>
      <PlusFloat linkTo={`/team/${teamId}/schedule/new`} blind="새 일정 만들기" replace={true} />
      <CalendarView calendar={calendar} viewWeekly={viewWeekly} />
      {isMonthly && <div className={baseDividedLine} />}
      <div
        className={flexColumnGap16}
        style={{
          paddingTop: isMonthly ? "0" : "8px",
          paddingBottom: "24px",
        }}
      >
        {isMonthly && (
          <ul
            className={clsx(monthEventSummary, flexRowGap8)}
            style={{
              flexWrap: "wrap",
            }}
          >
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
        )}
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

export default Schedule;
