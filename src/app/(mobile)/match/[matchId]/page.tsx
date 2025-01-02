import React from "react";

import GradientBg from "@/components/common/GradientBg";
import MatchScores from "../_components/MatchScores";
import MatchTitle from "../_components/MatchTitle";
import MatchMvp from "../_components/MatchMvp";

function MatchPage() {
  const winnerColor = TEAM_SCORES.homeScore > TEAM_SCORES.awayScore ? TEAM_SCORES.homeColor : TEAM_SCORES.awayColor;

  return (
    <>
      <GradientBg position="absolute" opacity={0.35} colorRgb={winnerColor} />
      <MatchTitle competitionName={TEAM_SCORES.competitionName} />
      <MatchScores
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
        scores={TEAM_SCORES.scores}
      />
      <MatchMvp
        name="김선형"
        profileImg="https://imgnews.pstatic.net/image/413/2020/12/18/0000110505_001_20201218032641259.jpg?type=w647"
        teamName={TEAM_SCORES.homeName}
        photo="https://thumb.zumst.com/530x0/https://static.news.zumst.com/images/2/2023/03/30/0d96b666658043f7994f61ce280fb06e.jpg"
        stats={[
          { title: "득점", value: "20" },
          { title: "어시스트", value: "5" },
          { title: "리바운드", value: "10" },
          { title: "스틸", value: "3" },
        ]}
      />
    </>
  );
}

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

export default MatchPage;
