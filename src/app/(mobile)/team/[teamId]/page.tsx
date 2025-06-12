import React from "react";
import { notFound } from "next/navigation";
import { cookies, headers } from "next/headers";

import { baseBackendURL } from "@/apis";
import { ApiTeamDetail } from "@/apis/types/team";

import TeamMainTop from "./_components/TeamMainTop";
import TeamMainContents from "./_components/TeamMainContents";
import { teamAPI } from "@/apis/url";

async function getTeamData(teamId: string) {
  // 현재 위치 가져오기 (API 임시 연동)
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access-token")?.value;

  const res = await fetch(`${baseBackendURL}${teamAPI.TEAMS}/${teamId}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) notFound(); // 404
  const team: ApiTeamDetail = await res.json();
  if (!team.id) notFound();
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
      <TeamMainTop {...teamData} />
      <TeamMainContents />
    </>
  );
}

export default TeamHome;
