"use client";

import FixedNotice from "@/components/Main/FixedNotice";
import Banner from "@/components/Main/Banner";
import MyTeam from "@/components/Main/MyTeam";
import MyWeekly from "@/components/Main/MyWeekly";
import SportsSection from "@/components/Main/SportsSection";
import MyTeamSchedule from "@/components/Main/MyTeamSchedule";
import Navigation from "@/components/layouts/Navigation";
import { HomeBackGradient, HomeContainer } from "./_components/container";

export default function Home() {
  return (
    <HomeContainer>
      <HomeBackGradient />
      <FixedNotice />
      <Banner />
      <MyTeam />
      <MyWeekly />
      <MyTeamSchedule />
      <SportsSection />
      <Navigation />
    </HomeContainer>
  );
}
