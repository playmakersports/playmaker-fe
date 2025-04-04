"use client";

import { FONTS } from "@/styles/common";
import React, { useState } from "react";
import styled from "styled-components";

import { MatchSummaryCard } from "./container";
import BottomSheet from "@/components/common/BottomSheet";
import MatchRoundCard from "@/components/Match/MatchRoundCard";
import ScoreVersus from "./ScoreVersus";

type TeamMatchInfo = {
  name: string;
  univ: string;
  logo: string;
  score: number;
  color: string;
};
type Props = {
  homeInfo: TeamMatchInfo;
  awayInfo: TeamMatchInfo;
  stage: string;
  scores: { stage: string; home: number; away: number }[];
};

function MatchScores(props: Props) {
  const { homeInfo, awayInfo, stage, scores } = props;
  const [showAllScore, setShowAllScore] = useState(false);

  return (
    <>
      <section style={{ position: "relative", zIndex: 0 }}>
        <ScoreVersus homeInfo={homeInfo} awayInfo={awayInfo} stage={stage} />
        <SummaryContainer>
          <ScoreTable onClick={() => setShowAllScore((prev) => !prev)}>
            <div className="table-row table-header">
              <div className="team-logo"></div>
              {scores.map((score) => (
                <p key={score.stage}>{score.stage}</p>
              ))}
            </div>
            <div className="table-row">
              <div className="team-logo">
                <img src={homeInfo.logo} alt={homeInfo.name} />
              </div>
              {scores.map((score) => (
                <p key={`home-${score.stage}`}>{score.home}</p>
              ))}
            </div>
            <div className="table-row">
              <div className="team-logo">
                <img src={awayInfo.logo} alt={awayInfo.name} />
              </div>
              {scores.map((score) => (
                <p key={`away-${score.stage}`}>{score.away}</p>
              ))}
            </div>
          </ScoreTable>
        </SummaryContainer>
      </section>
      {showAllScore && (
        <BottomSheet setShow={setShowAllScore} draggable="bar">
          <ScoreWrapper onClick={(e) => e.stopPropagation()}>
            {scores.map((score) => (
              <MatchRoundCard
                key={score.stage}
                roundName={score.stage}
                homeTeamLogo={homeInfo.logo}
                homeTeamName={homeInfo.name}
                homeTeamScore={score.home}
                awayTeamLogo={awayInfo.logo}
                awayTeamName={awayInfo.name}
                awayTeamScore={score.away}
              />
            ))}
          </ScoreWrapper>
        </BottomSheet>
      )}
    </>
  );
}

const SummaryContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ScoreTable = styled(MatchSummaryCard)`
  ${FONTS.body3("regular")};

  div.table-row {
    display: flex;
    padding: 2px 0;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid var(--gray200);
    font-weight: 600;

    p {
      flex: 1;
      padding: 10px;
    }
    &:last-of-type {
      border-bottom: none;
    }
  }
  div.table-header {
    color: var(--gray700);
    font-weight: 700;
  }

  div.team-logo {
    width: 56px;
    flex: none;
    flex-shrink: 0;
    & > img {
      display: block;
      margin: 0 auto;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: var(--gray100);
    }
  }
`;

const ScoreWrapper = styled.div`
  display: flex;
  margin-bottom: -20px;
  padding-bottom: 20px;
  flex-direction: column;
  gap: 10px;
  max-height: calc(100vh - var(--safe-area-top) - 320px);
  overflow-y: auto;
  overscroll-behavior: contain;
`;

export default MatchScores;
