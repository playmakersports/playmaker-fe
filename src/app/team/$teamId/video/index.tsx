import React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/team/$teamId/video/")({
  component: Video,
});

function Video() {
  return <div>Video List</div>;
}
