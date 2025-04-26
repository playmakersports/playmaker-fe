"use client";
import React from "react";
import { useHeader } from "@/hook/useHeader";
import { baseContainer } from "@/styles/container.css";

function MatchesList() {
  useHeader({ title: "매치" });

  return <section className={baseContainer}>MatchesList</section>;
}

export default MatchesList;
