"use client";

import React from "react";
import useBgWhite from "@/hook/useBgWhite";
import { useParams } from "next/navigation";

function TeamHomeLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const teamId = params["teamId"];
  useBgWhite();

  return <>{children}</>;
}

export default TeamHomeLayout;
