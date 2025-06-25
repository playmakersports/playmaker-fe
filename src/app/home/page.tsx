import Banner from "@/components/Main/Banner";
import MyWeekly from "@/app/_components/MyWeekly";
import SportsSection from "@/components/Main/SportsSection";
import MyTeam from "../_components/MyTeam";
import { homeContentsContainer } from "../_components/container.css";

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
        <SportsSection />
      </section>
    </div>
  );
}
