"use client";

import React from "react";
import TeamNavigation from "../_components/TeamNavigation";

function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <TeamNavigation />
    </>
  );
}

export default TeamLayout;
