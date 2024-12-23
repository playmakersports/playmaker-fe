"use client";
import React from "react";
import ErrorFallback from "@/components/common/global/ErrorFallback";

function TeamNotFound() {
  return (
    <ErrorFallback
      status=""
      message="팀 정보를 찾을 수 없습니다."
      retry={() => window.location.reload()}
      reset={() => window.location.replace("/")}
    />
  );
}

export default TeamNotFound;
