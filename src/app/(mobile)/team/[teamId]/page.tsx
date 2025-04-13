import React from "react";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

import { baseBackendURL } from "@/apis";
import { SelectTeamResponse } from "@/types/team";

import TeamMainCoverTop from "./_components/TeamMainCoverTop";
import TeamMainTop from "./_components/TeamMainTop";
import TeamMainContents from "./_components/TeamMainContents";

async function getTeamData(teamId: string) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access-token")?.value;
  const res = await fetch(`${baseBackendURL}/api/team/selectteam/page/${teamId}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) notFound(); // 404
  const team: SelectTeamResponse = await res.json();
  if (!team.teamId) notFound();
  return team;
}

export async function generateMetadata({ params }: { params: Promise<{ teamId: string }> }) {
  const { teamId } = await params;
  const team = await getTeamData(teamId);

  return {
    title: team.teamName,
  };
}

async function TeamHome({ params }: { params: Promise<{ teamId: string }> }) {
  const { teamId } = await params;
  const teamData = await getTeamData(teamId);

  return (
    <>
      <TeamMainCoverTop coverImg={teamData.bgUrl} teamIntro={teamData.teamIntro} />
      <TeamMainTop {...teamData} />
      <TeamMainContents />
    </>
  );
}

export default TeamHome;
