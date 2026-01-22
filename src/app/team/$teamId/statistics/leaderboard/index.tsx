"use client";
import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useHeader } from "@/hook/useHeader";
import { baseContainer } from "@/styles/container.css";

export const Route = createFileRoute("/team/$teamId/statistics/leaderboard/")({
  component: TeamLeaderBoard,
});

function TeamLeaderBoard() {
  useHeader({
    title: "팀 리더보드",
    options: { titleAlign: "center" },
    subIcons: [{ svgIcon: <></>, description: "", onClick: "" }],
  });

  return <div className={baseContainer}>TeamLeaderBoard</div>;
}
