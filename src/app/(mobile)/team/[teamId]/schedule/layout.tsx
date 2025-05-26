"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import NewSchedule from "./_feature/NewSchedule";
import ViewSchedule from "./_feature/ViewSchedule";

function ScheduleLayout({ children }: { children: React.ReactNode }) {
  const query = useSearchParams();
  const feat = query.get("feat");
  const scheduleId = feat?.startsWith("view") ? feat.split("view|")[1] : null;

  return (
    <>
      {feat === "new" && <NewSchedule />}
      {feat?.startsWith("view") && <ViewSchedule scheduleId={scheduleId} />}
      {children}
    </>
  );
}

export default ScheduleLayout;
