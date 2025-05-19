import React from "react";
import { notFound } from "next/navigation";
import { cookies, headers } from "next/headers";

import { baseBackendURL } from "@/apis";
import { SelectTeamResponse } from "@/types/team";

import TeamMainTop from "./_components/TeamMainTop";
import TeamMainContents from "./_components/TeamMainContents";

async function getTeamData(teamId: string) {
  // 현재 위치 가져오기 (API 임시 연동)
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access-token")?.value;
  const link = `${protocol}://${host}/api/team`;
  // const link =
  //   process.env.NODE_ENV === "development"
  //     ? `${protocol}://${host}/api/team`
  //     : `${baseBackendURL}/api/team/selectteam/page/${teamId}`;
  // const res = await fetch(`${baseBackendURL}/api/team/selectteam/page/${teamId}`, {
  const res = await fetch(link, {
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
      <TeamMainTop {...teamData} />
      <TeamMainContents />
    </>
  );
}

export default TeamHome;
