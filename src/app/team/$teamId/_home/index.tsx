"use client";
import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useGet } from "@/apis/hook/query";

import { baseBackendURL } from "@/apis";
import { ApiTeamDetail } from "@/apis/types/team";

import TeamMainTop from "../_components/TeamMainTop";
import TeamMainContents from "../_components/TeamMainContents";
import { teamAPI } from "@/apis/url";
import TeamJoinButton from "../_components/TeamJoinButton";
import Loading from "@/components/common/Loading";

export const Route = createFileRoute("/team/$teamId/_home/")({
  component: TeamHome,
});

function TeamHome() {
  const { teamId } = Route.useParams();
  const { data: teamData, isLoading } = useGet<ApiTeamDetail>(`${teamAPI.TEAMS}/${teamId}`);

  if (isLoading || !teamData) {
    return <Loading page />;
  }

  return (
    <>
      <TeamMainTop {...teamData} />
      <TeamMainContents />
      {teamData.joinYn === "Y" && <TeamJoinButton teamId={teamId} />}
    </>
  );
}
