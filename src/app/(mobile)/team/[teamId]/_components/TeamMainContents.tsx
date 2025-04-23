"use client";

import React, { useState } from "react";
import styled from "styled-components";
import clsx from "clsx";
import { useRouter, useParams } from "next/navigation";

import { teamMainContentsGroup } from "./team.main.css";
import { baseContainer, flexColumnGap12, flexColumnGap40 } from "@/styles/container.css";
import { BasicWhiteCardTitle } from "@/components/common/Card";
import { WhiteSectionDivider } from "@/components/common/Container";
import ScheduleSection from "@/components/Team/ScheduleSection";
import TeamMainRecentMatch from "./TeamMainRecentMatch";
import WeeklyCalender from "@/components/common/WeeklyCalender";

import BoardList from "@/components/Team/BoardList";
import GroupTitle from "@/components/common/GroupTitle";
import HomeTeamList from "@/components/Team/HomeTeamList";
import { CARD_ACTIVE } from "@/styles/common";

import CalendarIcon from "@/assets/icon/color/Calendar.svg";

function TeamMainContents() {
  const [weeklyDate, setWeeklyDate] = useState("");
  const router = useRouter();
  const params = useParams();
  const teamId = params["teamId"];

  return (
    <section className={clsx(baseContainer, flexColumnGap40)}>
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
        <GroupTitle icon={<CalendarIcon />} link={`/team/${teamId}/schedule`}>
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

      <BoardList />
      <Card onClick={() => router.push(`/team/${teamId}/video/1`)}>
        <BasicWhiteCardTitle>경기 영상</BasicWhiteCardTitle>
      </Card>
      <Card onClick={() => router.push(`/team/${teamId}/statistics`)}>
        <BasicWhiteCardTitle>통계</BasicWhiteCardTitle>
        <ScheduleSection />
      </Card>
      <WhiteSectionDivider $child />
      <GroupTitle link={`/team/${teamId}/players`}>팀원</GroupTitle>
      <HomeTeamList />
    </section>
  );
}

const Card = styled.div`
  position: relative;
  text-align: left;
  ${CARD_ACTIVE};
`;

export default TeamMainContents;
