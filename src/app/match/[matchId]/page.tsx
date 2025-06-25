"use client";
import React from "react";
import clsx from "clsx";
import { useHeader } from "@/hook/useHeader";
import { useParams } from "next/navigation";
import useModal from "@/hook/useModal";

import { fonts } from "@/styles/fonts.css";
import { baseCardContainer, baseContainerPaddingTop, flexColumnGap20 } from "@/styles/container.css";
import MatchHeader from "../_components/detail/MatchHeader";
import MatchFlow from "../_components/detail/MatchFlow";
import MatchPlayers from "../_components/detail/MatchPlayers";
import PlayersList from "../_components/PlayersList";

function MatchPage() {
  const params = useParams();
  const matchId = params["matchId"];
  const { showModal, ModalComponents } = useModal();
  useHeader({
    title: "플메슛 83 : 99 SPABA",
    transparent: true,
    subActions: [
      { name: "경기 수정", action: () => {} },
      { name: "경기 삭제", action: () => {} },
    ],
    options: { titleAlign: "center" },
  });

  return (
    <section
      className={clsx(flexColumnGap20, baseContainerPaddingTop)}
      style={{
        marginTop: "calc((env(safe-area-inset-top) + var(--header-height)) * -1)",
        paddingTop: "calc(env(safe-area-inset-top) + var(--header-height))",
        backgroundColor: "var(--gray100)",
      }}
    >
      <MatchHeader
        title={TEAM_SCORES.competitionName}
        subtitle="서울경인지역예선 16강"
        date="2025-06-02"
        time="14:00"
        home={{
          name: TEAM_SCORES.homeName,
          logo: TEAM_SCORES.homeLogo,
          score: TEAM_SCORES.homeScore,
          fouls: 10,
          timeouts: 2,
        }}
        away={{
          name: TEAM_SCORES.awayName,
          logo: TEAM_SCORES.awayLogo,
          score: TEAM_SCORES.awayScore,
          fouls: 8,
          timeouts: 3,
        }}
      />
      <MatchFlow />
      <MatchPlayers />
      <button type="button" onClick={showModal} className={clsx(fonts.body3.medium, baseCardContainer)}>
        선수 전체 명단
      </button>
      <ModalComponents
        title="선수 명단"
        draggable="all"
        buttons={[
          {
            name: "닫기",
            onClick: (close) => {
              close();
            },
            mode: "primary",
          },
        ]}
      >
        <PlayersList />
      </ModalComponents>
    </section>
  );
}

const TEAM_SCORES = {
  competitionName: "한국스포츠연맹배 전국아마추어농구대회 대학부",
  category: "basketball",
  matchStage: "16강",
  homeName: "SPABA",
  homeUniv: "서울과학기술대",
  homeLogo: "",
  homeScore: 99,
  homeColor: "7, 217, 204",
  awayName: "플메슛",
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
