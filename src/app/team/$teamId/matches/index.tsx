"use client";
import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useHeader } from "@/hook/useHeader";
import { baseContainer } from "@/styles/container.css";

export const Route = createFileRoute("/team/$teamId/matches/")({
  component: MatchesList,
});

function MatchesList() {
  useHeader({ title: "매치" });

  return <section className={baseContainer}>MatchesList</section>;
}
