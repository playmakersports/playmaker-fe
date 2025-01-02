"use client";

import React from "react";
import TeamNavigation from "../_components/TeamNavigation";

function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ paddingBottom: "64px" }}>{children}</div>
      <TeamNavigation />
    </>
  );
}

export default TeamLayout;
