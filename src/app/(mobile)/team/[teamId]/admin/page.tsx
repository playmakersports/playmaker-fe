import React from "react";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { teamAPI } from "@/apis/url";
import { baseBackendURL } from "@/apis";
import { ApiTeamDetail } from "@/apis/types/team";

import { baseContainerPaddingTop } from "@/styles/container.css";
import TeamBasicInfoAdmin from "./_components/TeamBasicInfoAdmin";

async function getTeamData(teamId: string) {
  // 현재 위치 가져오기 (API 임시 연동)
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

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

async function TeamAdmin({ params }: { params: Promise<{ teamId: string }> }) {
  const { teamId } = await params;
  const teamData = await getTeamData(teamId);

  return (
    <section className={baseContainerPaddingTop}>
      <TeamBasicInfoAdmin {...teamData} />
    </section>
  );
}

export default TeamAdmin;
