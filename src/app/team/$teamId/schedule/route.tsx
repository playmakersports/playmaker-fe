"use client";
import React from "react";
import { createFileRoute, Outlet, useSearch } from "@tanstack/react-router";
import NewSchedule from "./_feature/NewSchedule";
import ViewSchedule from "./_feature/ViewSchedule";
import EditSchedule from "./_feature/EditSchedule";

export const Route = createFileRoute("/team/$teamId/schedule")({
  component: ScheduleLayout,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      feat: (search.feat as string) || undefined,
    };
  },
});

function ScheduleLayout() {
  const { feat } = useSearch({ from: "/team/$teamId/schedule" });
  const scheduleId = feat?.startsWith("view") || feat?.startsWith("edit") ? feat.split("|")[1] : null;

  return (
    <>
      {feat === "new" && <NewSchedule />}
      {feat?.startsWith("view") && <ViewSchedule scheduleId={scheduleId} />}
      {feat?.startsWith("edit") && <EditSchedule scheduleId={scheduleId} />}
      <Outlet />
    </>
  );
}
