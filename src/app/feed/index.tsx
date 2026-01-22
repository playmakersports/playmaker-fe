import React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/feed/")({
  component: Feed,
});

function Feed() {
  return <div>Feed</div>;
}
