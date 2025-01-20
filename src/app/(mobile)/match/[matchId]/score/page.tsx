"use client";
import React, { useState } from "react";
import ScoreVersus from "../../_components/ScoreVersus";
import ScoreInput from "../../_components/ScoreInput";
import styled from "styled-components";

function MatchScore() {
  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);

  return (
    <>
      <ScoreVersus
        small={true}
        homeInfo={{
          name: TEAM_SCORES.homeName,
          univ: TEAM_SCORES.homeUniv,
          logo: TEAM_SCORES.homeLogo,
          score: TEAM_SCORES.homeScore,
          color: TEAM_SCORES.homeColor,
        }}
        awayInfo={{
          name: TEAM_SCORES.awayName,
          univ: TEAM_SCORES.awayUniv,
          logo: TEAM_SCORES.awayLogo,
          score: TEAM_SCORES.awayScore,
          color: TEAM_SCORES.awayColor,
        }}
        stage={TEAM_SCORES.matchStage}
      />
      <Scores>
        <ScoreInput
          stage="1Q"
          leftScore={leftScore}
          rightScore={rightScore}
          onLeftScoreChange={setLeftScore}
          onRightScoreChange={setRightScore}
        />
      </Scores>
    </>
  );
}
const Scores = styled.div`
  position: relative;
`;

const TEAM_SCORES = {
  competitionName: "2024 한국스포츠연맹배 전국아마추어농구대회 대학부 서울경인지역예선",
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

export default MatchScore;
