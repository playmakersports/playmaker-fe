"use client";

import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useRouter, useParams } from "next/navigation";

import { teamMainContentsGroup } from "./team.main.css";
import { baseContainer, flexColumnGap12, flexColumnGap40 } from "@/styles/container.css";
import TeamMainRecentMatch from "./TeamMainRecentMatch";
import WeeklyCalender from "@/app/(mobile)/team/[teamId]/_components/TeamWeeklyCalender";
import TeamMainBoardList from "./TeamMainBoardList";
import GroupTitle from "@/components/common/GroupTitle";
import RecentVote from "./RecentVote";
import TeamMainPlayerList from "./TeamMainPlayerList";

import CalendarIcon from "@/assets/icon/color/Calendar.svg";

function TeamMainContents() {
  const [weeklyDate, setWeeklyDate] = useState("");
  const params = useParams();
  const teamId = params["teamId"];

  return (
    <section className={clsx(baseContainer, flexColumnGap40)}>
      <RecentVote />
      <div className={teamMainContentsGroup}>
        <GroupTitle icon={<CalendarIcon />} link={`/team/${teamId}/schedule`}>
          다가오는 일정
        </GroupTitle>
        <WeeklyCalender
          activeDate={weeklyDate}
          setActiveDate={setWeeklyDate}
          schedulesList={[
            { scheduleId: "", startDate: "2025-04-20", scheduleCategory: "훈련", scheduleTitle: "팀 훈련" },
            {
              scheduleId: "",
              startDate: "2025-04-23",
              scheduleCategory: "훈련",
              scheduleTitle: "교류전 (VS 성균관대)",
            },
          ]}
        />
      </div>
      <div className={teamMainContentsGroup}>
        <GroupTitle icon={<CalendarIcon />} link={`/team/${teamId}/matches`}>
          최근 경기
        </GroupTitle>
        <div className={flexColumnGap12}>
          <TeamMainRecentMatch
            matchId={"123"}
            competitionName="2025년 4월 20일 교류전"
            matchDate="2025-04-20"
            homeInfo={{
              name: "성균관대학교",
              imgUrl:
                "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
              score: 91,
            }}
            awayInfo={{
              name: "고려대학교",
              imgUrl:
                "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
              score: 78,
            }}
          />
          <TeamMainRecentMatch
            matchId={"1223"}
            competitionName="2025년 4월 20일 교류전"
            matchDate="2025-04-20"
            homeInfo={{
              name: "성균관대학교",
              imgUrl:
                "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
              score: 91,
            }}
            awayInfo={{
              name: "고려대학교",
              imgUrl:
                "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
              score: 98,
            }}
          />
          <TeamMainRecentMatch
            matchId={"1223"}
            competitionName="2025년 4월 20일 교류전"
            matchDate="2025-04-20"
            homeInfo={{
              name: "성균관대학교",
              imgUrl:
                "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
              score: 91,
            }}
            awayInfo={{
              name: "고려대학교",
              imgUrl:
                "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
              score: 91,
            }}
          />
        </div>
      </div>
      <div className={teamMainContentsGroup}>
        <GroupTitle link={`/team/${teamId}/board`}>팀 게시판</GroupTitle>
        <div className={flexColumnGap12}>
          <TeamMainBoardList />
        </div>
      </div>
      <div className={teamMainContentsGroup}>
        <GroupTitle link={`/team/${teamId}/statistics`}>팀 데이터</GroupTitle>
        <div className={flexColumnGap12}></div>
      </div>
      <div className={teamMainContentsGroup}>
        <GroupTitle link={`/team/${teamId}/players`}>팀원 </GroupTitle>
        <div className={flexColumnGap12} style={{ gap: 0, paddingBottom: "20px" }}>
          <TeamMainPlayerList />
        </div>
      </div>
      <Link href={`/team/${teamId}/video/1`}>경기 영상</Link>
    </section>
  );
}

export default TeamMainContents;
