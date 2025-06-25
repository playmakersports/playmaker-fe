"use client";
import React from "react";
import { useHeader } from "@/hook/useHeader";

function TeamAdminBlock() {
  useHeader({
    title: "팀원 퇴출",
    options: { titleAlign: "center" },
  });

  return <div>TeamAdminBlock</div>;
}

export default TeamAdminBlock;
