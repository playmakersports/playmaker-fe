import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRouter, useParams } from "next/navigation";

import { BasicWhiteCard, BasicWhiteCardTitle } from "@/components/common/Card";
import { BaseContainer, WhiteSectionDivider, WhiteSectionWrapper } from "@/components/common/Container";
import ScheduleSection from "@/components/Team/ScheduleSection";

import WeeklyCalender from "@/components/common/WeeklyCalender";
import ComingUpMatch from "@/components/Team/ComingUpMatch";

import RecentMatch from "@/components/Team/RecentMatch";
import BoardList from "@/components/Team/BoardList";
import GroupTitle from "@/components/common/GroupTitle";
import HomeTeamList from "@/components/Team/HomeTeamList";
import { TEAM_INFO_MOCK } from "@/constants/mock/TEAM";
import { CARD_ACTIVE } from "@/styles/common";

function TeamMainContents() {
  const [weeklyDate, setWeeklyDate] = useState("");
  const router = useRouter();
  const params = useParams();
  const teamId = params["teamId"];

  return (
    <MainContainer>
      <Cards>
        <WeeklyCalender
          grouping={false}
          activeDate={weeklyDate}
          setActiveDate={setWeeklyDate}
          schedulesList={[
            {
              teamName: "",
              schedules: [
                { scheduleId: "", startTime: "09:30", scheduleTitle: "팀 훈련" },
                { scheduleId: "", startTime: "16:30", scheduleTitle: "교류전 (VS 성균관대)" },
              ],
            },
          ]}
        />
        <ComingUpMatch />
        <RecentMatch
          matchId={"123"}
          teamName={TEAM_INFO_MOCK.teamName}
          teamLogo={TEAM_INFO_MOCK.logo}
          matchTeamScore={20}
          counterpartTeamName="SPABA"
          counterpartTeamLogo=""
          matchCounterpartScore={10}
          matchDate="2024.10.12"
        />
        <BoardList />
        <Card onClick={() => router.push(`/team/${teamId}/video/1`)}>
          <BasicWhiteCardTitle>경기 영상</BasicWhiteCardTitle>
        </Card>
        <Card onClick={() => router.push(`/team/${teamId}/statistics`)}>
          <BasicWhiteCardTitle>통계</BasicWhiteCardTitle>
          <ScheduleSection />
        </Card>
      </Cards>
      <WhiteSectionDivider />
      <PlayerListWrapper>
        <GroupTitle link={`/team/${teamId}/players`}>팀원</GroupTitle>
        <HomeTeamList />
      </PlayerListWrapper>
    </MainContainer>
  );
}

const MainContainer = styled(BaseContainer)`
  padding: 16px;
  background-color: var(--background-light);
`;

const Cards = styled.section`
  display: flex;
  padding: 4px 0 24px;
  flex-direction: column;
  gap: 36px;
`;

const Card = styled(BasicWhiteCard.withComponent("button"))`
  position: relative;
  text-align: left;
  ${CARD_ACTIVE};
`;
const PlayerListWrapper = styled(WhiteSectionWrapper)`
  padding: 20px 24px calc(var(--env-sab) + 100px);
  background-color: var(--background-light);
`;

export default TeamMainContents;
