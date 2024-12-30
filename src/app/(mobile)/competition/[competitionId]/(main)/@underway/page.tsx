"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { FONTS } from "@/styles/common";

import { COMPETITION_DETAIL_MOCK } from "@/constants/mock/COMPETITION";
import CompetitionFloat from "../../_components/Float";
import ScheduleWeek from "../../_components/ScheduleWeek";
import MatchCard from "@/components/Team/MatchCard";
import { BasicInput } from "@/components/common/Input";
import { BaseContainer } from "@/components/common/Container";

import RightArrowIcon from "@/assets/icon/arrow/RightArrowSmall.svg";

function CompetitionUnderway() {
  const MOCK = COMPETITION_DETAIL_MOCK;
  const [matchRound, setMatchRound] = useState(24);

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
      <Search>
        <BasicInput type="text" placeholder="어떤 팀을 찾고 있나요" search />
      </Search>
      <RoundTab role="tablist">
        {[24, 16, 8, 4, 2].map((round, index) => (
          <li
            key={index}
            role="tab"
            onClick={() => setMatchRound(round)}
            className={matchRound === round ? "active" : ""}
          >
            {round === 2 ? "결승" : `${round}강`}
          </li>
        ))}
      </RoundTab>
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
  ${FONTS.MD2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px 14px 4px;
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
      background-color: rgba(var(--sub1-rgb), 0.45);
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

const Search = styled.div`
  margin: 0 -16px;
  padding: 12px 16px;
  background-color: var(--background);
`;

const RoundTab = styled.ul`
  display: flex;
  margin: 0px -16px 24px;
  padding: 12px 16px 0;
  border-bottom: 1px solid var(--gray50);

  li {
    cursor: pointer;
    ${FONTS.MD1W500};
    padding: 2px 0 4px;
    font-weight: 400;
    flex: 1;
    text-align: center;
    color: var(--gray500);

    &.active {
      font-weight: 600;
      color: var(--main);
      border-bottom: 2px solid var(--main);
    }
  }
`;

export default CompetitionUnderway;
