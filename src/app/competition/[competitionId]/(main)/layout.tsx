"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  underway: React.ReactNode;
  ready: React.ReactNode;
};
function CompetitionLayout({ children, underway, ready }: Props) {
  const params = useSearchParams();
  const isReady = params.get("initial") === "ready";

  return (
    <>
      {children}
      {isReady ? ready : underway}
    </>
  );
}

export default CompetitionLayout;
