"use client";

import { FONTS } from "@/styles/common";
import React, { useState } from "react";
import styled from "styled-components";

import { MatchSummaryCard } from "./container";
import BottomSheet from "@/components/common/BottomSheet";
import MatchRoundCard from "@/components/Match/MatchRoundCard";

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
        <Versus>
          <Team $backColor={awayInfo.color}>
            <div className="team-inner">
              <div className="score">{awayInfo.score}</div>
              <div className="team-logo"></div>
              <div className="team-name">{awayInfo.name}</div>
              <div className="team-univ">{awayInfo.univ}</div>
            </div>
          </Team>
          <div className="center">
            <p>{stage}</p>
            <p className="versus">vs</p>
          </div>
          <Team $backColor={homeInfo.color}>
            <div className="team-inner">
              <div className="score">{homeInfo.score}</div>
              <div className="team-logo"></div>
              <div className="team-name">{homeInfo.name}</div>
              <div className="team-univ">{homeInfo.univ}</div>
            </div>
          </Team>
        </Versus>
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

const Versus = styled.div`
  display: flex;
  padding: 0 32px;
  justify-content: space-between;
  gap: 10%;
  align-items: center;

  div.center {
    user-select: none;
    font-size: 1.4rem;
    color: var(--gray600);
    text-align: center;
    p.versus {
      ${FONTS.MD1W500};
      color: var(--main);
    }
  }
`;
const Team = styled.div<{ $backColor: string }>`
  flex: 1;
  position: relative;

  div.team-inner {
    position: relative;
    text-align: center;
    z-index: 1;
  }

  div.score {
    margin-bottom: 20px;
    font-size: 3.5rem;
    font-weight: 600;
  }
  div.team-logo {
    margin: 0 auto 16px;
    width: 80px;
    height: 80px;
    background-color: var(--gray0);
    border-radius: 50%;
  }
  div.team-name {
    ${FONTS.MD1};
    color: var(--gray900);
  }
  div.team-univ {
    ${FONTS.MD2};
    color: var(--gray600);
  }

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 50%;
    width: 150px;
    height: 180px;
    background-color: ${({ $backColor }) => `rgb(${$backColor})`};
    z-index: 0;
    transform: translateX(-50%);
    border-radius: 50%;
    opacity: 0.2;
    filter: blur(24px);
  }
`;
const SummaryContainer = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ScoreTable = styled(MatchSummaryCard)`
  ${FONTS.MD1W500};

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
