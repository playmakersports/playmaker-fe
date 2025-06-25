"use client";
import React from "react";
import { useHeader } from "@/hook/useHeader";
import { baseContainer } from "@/styles/container.css";

function TeamLeaderBoard() {
  useHeader({
    title: "팀 리더보드",
    options: { titleAlign: "center" },
    subIcons: [{ svgIcon: <></>, description: "", onClick: "" }],
  });

  return <div className={baseContainer}>TeamLeaderBoard</div>;
}

export default TeamLeaderBoard;
