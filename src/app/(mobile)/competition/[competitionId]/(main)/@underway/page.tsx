"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FONTS } from "@/styles/common";
import MainTab from "@/components/Main/MainTab";

import { COMPETITION_DETAIL_MOCK } from "@/constants/mock/COMPETITION";
import CompetitionFloat from "../../_components/Float";
import ScheduleWeek from "../../_components/ScheduleWeek";
import MatchCard from "@/components/Team/MatchCard";
import { BasicInput } from "@/components/common/input/BaseInput";
import { BaseContainer } from "@/components/common/Container";

import RightArrowIcon from "@/assets/icon/arrow/RightArrow.svg";

function CompetitionUnderway() {
  const MOCK = COMPETITION_DETAIL_MOCK;
  const [matchRound, setMatchRound] = useState("24");

  return (
    <Container>
      <CompetitionFloat />
      <Participants>
        참가 팀
        <div className="list">
          <div className="team-logo" />
          <div className="team-logo" />
          <div className="team-logo" />
          <div className="team-logo" />
          <div className="team-logo" />
          <RightArrowIcon />
        </div>
      </Participants>
      <ScheduleWeek startDate={MOCK.startDate} endDate={MOCK.endDate} schedule={MOCK.schedule} />
      <BasicInput type="text" placeholder="어떤 팀을 찾고 있나요" iconType="search" />
      <div style={{ margin: "0 -16px", width: "calc(100% + 32px)" }}>
        <MainTab
          padding={16}
          type="line"
          color="primary"
          sameWidth
          nowValue={setMatchRound}
          items={[
            { name: "24강", value: "24" },
            { name: "16강", value: "16" },
            { name: "8강", value: "8" },
            { name: "4강", value: "4" },
            { name: "결승", value: "1" },
          ]}
        />
      </div>

      <Matches>
        {MOCK.matches.map((match) => (
          <MatchCard
            key={match.matchId}
            status={match.status as "NOT_STARTED" | "PENDING" | "FINISHED"}
            matchId={match.matchId}
            teamName={match.teamName}
            teamSubName={match.teamSubName}
            counterpartTeamName={match.counterpartTeamName}
            counterpartTeamSubName={match.counterpartTeamSubName}
            matchTeamScore={match.matchTeamScore}
            matchCounterpartScore={match.matchCounterpartScore}
            matchDate={match.matchDate}
            matchTime={match.matchTime}
            teamLogo={match.teamLogo}
            counterpartTeamLogo={match.counterpartTeamLogo}
            mvpId={match.mvpId}
          />
        ))}
      </Matches>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  padding-top: 0;
  padding-bottom: calc(var(--env-sab) + 100px);
`;
const Participants = styled.div`
  ${FONTS.body4("regular")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 4px 14px;
  font-weight: 500;
  color: var(--gray800);

  div.list {
    display: flex;
    align-items: center;
    svg {
      margin-left: 6px;
      width: 20px;
      height: 20px;
      fill: var(--gray500);
    }

    div.team-logo {
      margin-left: -5px;
      width: 24px;
      height: 24px;
      background-color: var(--primary100);
      border-radius: 50%;
    }
  }
`;

const Matches = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  gap: 16px;
`;

export default CompetitionUnderway;
