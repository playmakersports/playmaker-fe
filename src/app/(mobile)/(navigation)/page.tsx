import FixedNotice from "@/components/Main/FixedNotice";
import Banner from "@/components/Main/Banner";
import MyTeam from "@/components/Main/MyTeam";
import MyWeekly from "@/components/Main/MyWeekly";
import SportsSection from "@/components/Main/SportsSection";
import MyTeamSchedule from "@/components/Main/MyTeamSchedule";
import { HomeInnerWrapper, HomeContainer } from "../_components/container";

export default function Home() {
  return (
    <HomeContainer>
      {/* <HomeBackGradient /> */}
      {/* <FixedNotice /> */}
      <Banner />
      <HomeInnerWrapper>
        <MyTeam />
        <MyWeekly />
        <MyTeamSchedule />
        <SportsSection />
      </HomeInnerWrapper>
    </HomeContainer>
  );
}
