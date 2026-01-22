"use client";
import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useGet } from "@/apis/hook/query";

import Banner from "@/components/Main/Banner";
import MyWeekly from "@/app/_components/MyWeekly";
import SportsSection from "@/components/Main/SportsSection";
import MyTeam from "../_components/MyTeam";
import { homeContentsContainer } from "../_components/container.css";
import { commonAPI } from "@/apis/url";
import { ApiHomeResponse } from "@/apis/types/code";
import Loading from "@/components/common/Loading";

export const Route = createFileRoute("/home/")({
  component: Home,
});

function Home() {
  const { data: homeData, isLoading } = useGet<ApiHomeResponse>(commonAPI.HOME);

  if (isLoading) {
    return <Loading page />;
  }

  return (
    <div
      style={{
        marginTop: "calc(-1 * var(--safe-area-top))",
      }}
    >
      <Banner />
      <section className={homeContentsContainer}>
        <MyTeam data={homeData?.teams} />
        <MyWeekly />
        <SportsSection />
      </section>
    </div>
  );
}
