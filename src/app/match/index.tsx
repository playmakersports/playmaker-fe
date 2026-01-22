"use client";
import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useHeader } from "@/hook/useHeader";
import { fonts } from "@/styles/fonts.css";
import MatchMainTop from "./_components/main/MainTop";
import MainUpcomingMatch from "./_components/main/MainUpcoming";

export const Route = createFileRoute("/match/")({
  component: MatchMain,
});

function MatchMain() {
  useHeader({
    customArea: (
      <span className={fonts.body2.semibold} style={{ color: "var(--gray900)" }}>
        경기
      </span>
    ),
  });
  return (
    <>
      <MatchMainTop />
      <MainUpcomingMatch />
    </>
  );
}
