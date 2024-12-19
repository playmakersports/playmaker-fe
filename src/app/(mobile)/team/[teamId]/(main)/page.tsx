// "use client";

import React from "react";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

import TeamMainTop from "../_components/TeamMainTop";
import TeamMainContents from "../_components/TeamMainContents";
import { baseBackendURL } from "@/apis";
import { SelectTeamResponse } from "@/types/team";
import TeamMainCoverTop from "../_components/TeamMainCoverTop";

// async function getTeamData(id: string) {
//   const cookieStore = await cookies();
//   const accessToken = cookieStore.get("access-token");
//   const res = await fetch(`${baseBackendURL}/api/team/selectteam/page/${id}`, {
//     cache: "force-cache",
//     headers: {
//       authorization: `Bearer ${accessToken}`,
//     },
//   });
//   const team: SelectTeamResponse = await res.json();
//   if (!team) notFound();
//   return team;
// }

// export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = await params;
//   const team = await getTeamData(id);

//   return {
//     title: team.teamName,
//   };
// }

async function TeamHome({ params }: { params: Promise<{ teamId: string }> }) {
  const { teamId } = await params;
  // const teamData = await getTeamData(teamId);

  return (
    <>
      <TeamMainCoverTop />
      <TeamMainTop teamId={teamId} />
      <TeamMainContents />
    </>
  );
}

export default TeamHome;
