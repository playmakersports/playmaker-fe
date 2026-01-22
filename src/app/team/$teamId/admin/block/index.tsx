"use client";
import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useHeader } from "@/hook/useHeader";

export const Route = createFileRoute("/team/$teamId/admin/block/")({
  component: TeamAdminBlock,
});

function TeamAdminBlock() {
  useHeader({
    title: "팀원 퇴출",
    options: { titleAlign: "center" },
  });

  return <div>TeamAdminBlock</div>;
}
