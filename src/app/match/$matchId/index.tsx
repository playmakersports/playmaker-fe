"use client";
import React from "react";
import clsx from "clsx";
import { createFileRoute } from "@tanstack/react-router";
import { useGet } from "@/apis/hook/query";

import { baseContainerPaddingTop, flexColumnGap20 } from "@/styles/container.css";
import MatchHeader from "../../match/_components/detail/MatchHeader";
import MatchFlow from "../../match/_components/detail/MatchFlow";
import MatchPlayers from "../../match/_components/detail/MatchPlayers";
import PlayersList from "../../match/_components/detail/PlayersList";
import { matchAPI } from "@/apis/url";
import { ApiMatchDetail } from "@/apis/types/match";
import Loading from "@/components/common/Loading";

export const Route = createFileRoute("/match/$matchId/")({
  component: MatchPage,
});

function MatchPage() {
  const { matchId } = Route.useParams();
  const { data: match, isLoading } = useGet<ApiMatchDetail>(`${matchAPI.matches}/${matchId}`);

  if (isLoading || !match) {
    return <Loading page />;
  }

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
          logo: "",
          score: match.homeScore,
          fouls: 10,
          timeouts: 2,
        }}
        away={{
          name: match.awayTeamName,
          logo: "",
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
