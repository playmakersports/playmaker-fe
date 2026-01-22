import React from "react";
import { createFileRoute } from "@tanstack/react-router";

import { baseContainerPaddingTop } from "@/styles/container.css";
import TeamBasicInfoAdmin from "./_components/TeamBasicInfoAdmin";

export const Route = createFileRoute("/team/$teamId/admin/")({
  component: TeamAdmin,
  loader: async ({ params }) => {
    // TODO: TanStack Start server function으로 데이터 가져오기
    return { teamId: params.teamId };
  },
});

function TeamAdmin() {
  const { teamId } = Route.useParams();
  // TODO: loader로 가져온 데이터 사용

  return (
    <section className={baseContainerPaddingTop}>
      <TeamBasicInfoAdmin id={teamId} teamName="" logoUrl="" />
    </section>
  );
}
