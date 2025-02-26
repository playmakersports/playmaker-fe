"use client";
import { useSearchParams } from "next/navigation";

import Loading from "@/components/common/Loading";
import TeamCreateFinish from "@/components/Team/Create/TeamCreateFinish";

function TeamCreateSuccess() {
  const searchParams = useSearchParams();
  const teamId = searchParams.get("teamId");

  if (teamId) return <TeamCreateFinish teamId={teamId} />;
  return <Loading />;
}

export default TeamCreateSuccess;
