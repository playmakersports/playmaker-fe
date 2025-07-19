import React from "react";
import clsx from "clsx";

import { baseContainerPaddingTop, flexColumnGap20 } from "@/styles/container.css";
import MatchHeader from "../_components/detail/MatchHeader";
import MatchFlow from "../_components/detail/MatchFlow";
import MatchPlayers from "../_components/detail/MatchPlayers";
import PlayersList from "../_components/detail/PlayersList";
import { cookies, headers } from "next/headers";
import { baseBackendURL } from "@/apis";
import { notFound } from "next/navigation";
import { matchAPI } from "@/apis/url";
import { ApiMatchDetail } from "@/apis/types/match";

async function getMatchDetailData(matchId: string) {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  const res = await fetch(`${baseBackendURL}${matchAPI.matches}/${matchId}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) notFound(); // 404
  const team: ApiMatchDetail = await res.json();
  if (!team.id) notFound();
  return team;
}

export async function generateMetadata({ params }: { params: Promise<{ matchId: string }> }) {
  const { matchId } = await params;
  const match = await getMatchDetailData(matchId);

  return {
    title: `${match.homeTeamName} ${match.homeScore} : ${match.awayScore} ${match.awayTeamName}`,
  };
}

async function MatchPage({ params }: { params: Promise<{ matchId: string }> }) {
  const { matchId } = await params;
  const match = await getMatchDetailData(matchId);

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
        title={match.title}
        subtitle="서울경인지역예선 16강"
        date={match.matchDateTime}
        time="14:00"
        home={{
          name: match.homeTeamName,
          logo: TEAM_SCORES.homeLogo,
          score: match.homeScore,
          fouls: 10,
          timeouts: 2,
        }}
        away={{
          name: match.awayTeamName,
          logo: TEAM_SCORES.awayLogo,
          score: match.awayScore,
          fouls: 8,
          timeouts: 3,
        }}
      />
      <MatchFlow />
      <MatchPlayers />
      <PlayersList />
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
