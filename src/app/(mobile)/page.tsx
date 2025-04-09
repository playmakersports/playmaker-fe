import Banner from "@/components/Main/Banner";
import MyWeekly from "@/components/Main/MyWeekly";
import SportsSection from "@/components/Main/SportsSection";
import MyTeamSchedule from "@/components/Main/MyTeamSchedule";
import MyTeam from "./_components/MyTeam";
import { homeContentsContainer } from "./_components/container.css";

export default function Home() {
  return (
    <div
      style={{
        marginTop: "calc(-1 * var(--safe-area-top))",
      }}
    >
      <Banner />
      <section className={homeContentsContainer}>
        <MyTeam />
        <MyWeekly />
        <MyTeamSchedule />
        <SportsSection />
      </section>
    </div>
  );
}
