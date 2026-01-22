import React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pc/staff/")({
  component: StaffIndex,
});

function StaffIndex() {
  return <div>StaffIndex</div>;
}
