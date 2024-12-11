import React, { useState } from "react";
import styled from "@emotion/styled";
import { usePageTitle } from "@/hook/usePageTitle";

import { BUTTON_ACTIVE, CARD_ACTIVE, FONTS, SCROLL_HIDE } from "@/styles/common";
import GradientBg from "@/components/common/GradientBg";
import { BaseContainer } from "@/components/common/Container";
import MatchRoundCard from "@/components/Match/MatchRoundCard";

function MatchPage() {
  const [showAllScore, setShowAllScore] = useState(false);
  usePageTitle({ scrollBgColor: [30, "transparent", "var(--background-light)"] });
  const TEAM_SCORES = {
    category: "basketball",
    matchStage: "16강",
    homeName: "SPABA",
    homeUniv: "서울과학기술대",
    homeLogo: "",
    homeScore: 59,
    homeColor: "7, 217, 204",
    awayName: "바스켓",
    awayUniv: "홍익대",
    awayLogo: "",
    awayScore: 83,
    awayColor: "255, 152, 0",
    scores: [
      { stage: "1Q", home: 18, away: 25 },
      { stage: "2Q", home: 28, away: 31 },
      { stage: "3Q", home: 42, away: 20 },
      { stage: "4Q", home: 18, away: 10 },
      { stage: "5Q", home: 8, away: 9 },
    ],
    mvp: "",
  };
  const winnerColor = TEAM_SCORES.homeScore > TEAM_SCORES.awayScore ? TEAM_SCORES.homeColor : TEAM_SCORES.awayColor;

  return (
    <>
      <GradientBg position="fixed" opacity={0.35} colorRgb={winnerColor} />
      <Container>
        <Versus>
          <Team backColor={TEAM_SCORES.homeColor}>
            <div className="team-inner">
              <div className="score">{TEAM_SCORES.homeScore}</div>
              <div className="team-logo"></div>
              <div className="team-name">{TEAM_SCORES.homeName}</div>
              <div className="team-univ">{TEAM_SCORES.homeUniv}</div>
            </div>
          </Team>
          <div className="center">
            <p>{TEAM_SCORES.matchStage}</p>
            <p className="versus">vs</p>
          </div>
          <Team backColor={TEAM_SCORES.awayColor}>
            <div className="team-inner">
              <div className="score">{TEAM_SCORES.awayScore}</div>
              <div className="team-logo"></div>
              <div className="team-name">{TEAM_SCORES.awayName}</div>
              <div className="team-univ">{TEAM_SCORES.awayUniv}</div>
            </div>
          </Team>
        </Versus>
        <SummaryContainer>
          <ScoreTable onClick={() => setShowAllScore((prev) => !prev)}>
            <div className="table-row table-header">
              <div className="team-logo"></div>
              {TEAM_SCORES.scores.map((score) => (
                <p key={score.stage}>{score.stage}</p>
              ))}
            </div>
            <div className="table-row">
              <div className="team-logo">
                <img src={TEAM_SCORES.homeLogo} alt={TEAM_SCORES.homeName} />
              </div>
              {TEAM_SCORES.scores.map((score) => (
                <p key={`home-${score.stage}`}>{score.home}</p>
              ))}
            </div>
            <div className="table-row">
              <div className="team-logo">
                <img src={TEAM_SCORES.awayLogo} alt={TEAM_SCORES.awayName} />
              </div>
              {TEAM_SCORES.scores.map((score) => (
                <p key={`away-${score.stage}`}>{score.away}</p>
              ))}
            </div>
          </ScoreTable>
          <MVPTable></MVPTable>
        </SummaryContainer>
        <RoundBottom isShow={showAllScore}>
          <button type="button" onClick={() => setShowAllScore((prev) => !prev)}>
            닫기
          </button>
          {TEAM_SCORES.scores.map((score) => (
            <MatchRoundCard
              key={score.stage}
              roundName={score.stage}
              homeTeamName={TEAM_SCORES.homeName}
              homeTeamLogo={TEAM_SCORES.homeLogo}
              homeTeamScore={score.home}
              awayTeamName={TEAM_SCORES.awayName}
              awayTeamLogo={TEAM_SCORES.awayLogo}
              awayTeamScore={score.away}
            />
          ))}
        </RoundBottom>
      </Container>
    </>
  );
}

const Container = styled(BaseContainer)`
  position: relative;
  height: calc(100vh - var(--safe-area-top) - 1px);
  padding: 12px 16px 0;
  overflow: hidden;
`;
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
const Team = styled.div<{ backColor: string }>`
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
    background-color: ${({ backColor }) => `rgb(${backColor})`};
    z-index: 0;
    transform: translateX(-50%);
    border-radius: 50%;
    opacity: 0.2;
    filter: blur(24px);
  }
`;
const SummaryContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const SummaryCard = styled.div`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: var(--gray0);
  ${BUTTON_ACTIVE("var(--gray0)", 10)};
`;
const ScoreTable = styled(SummaryCard)`
  ${FONTS.MD1W500};
  font-weight: 400;

  div.table-row {
    display: flex;
    padding: 2px 0;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid var(--gray200);

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
const MVPTable = styled(SummaryCard)``;
const RoundBottom = styled.div<{ isShow: boolean }>`
  user-select: none;
  position: absolute;
  bottom: 0;
  transform: translate3d(${(props) => (props.isShow ? "0,0,0" : "0,100%,0")});
  transition: transform 0.25s;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 -16px;
  padding: 20px 16px calc(var(--env-sab) + 20px);
  width: 100%;
  height: calc(100vh - var(--safe-area-top) - 240px);
  background-color: rgba(var(--gray0-rgb), 0.8);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0 -2px 20px 0px rgba(var(--gray300-rgb), 0.2);
  overflow-y: auto;
  backdrop-filter: blur(10px);
  ${SCROLL_HIDE};

  button {
    margin: 0 auto;
    padding: 6px 24px;
    border-radius: 24px;
    background-color: var(--gray100);
    font-size: 1.4rem;
    ${BUTTON_ACTIVE("var(--gray200)", 10)};
  }
`;

export default MatchPage;
