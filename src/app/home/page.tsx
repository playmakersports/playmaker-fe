import Banner from "@/components/Main/Banner";
import MyWeekly from "@/app/_components/MyWeekly";
import SportsSection from "@/components/Main/SportsSection";
import MyTeam from "../_components/MyTeam";
import { homeContentsContainer } from "../_components/container.css";
import { cookies, headers } from "next/headers";
import { commonAPI } from "@/apis/url";
import { baseBackendURL } from "@/apis";
import { ApiHomeResponse } from "@/apis/types/code";

async function getHomeData() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  const res = await fetch(`${baseBackendURL}${commonAPI.HOME}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  const data: ApiHomeResponse = await res.json();
  return data;
}

async function Home() {
  const homeData = await getHomeData();

  return (
    <div
      style={{
        marginTop: "calc(-1 * var(--safe-area-top))",
      }}
    >
      <Banner />
      <section className={homeContentsContainer}>
        <MyTeam data={homeData.teams} />
        <MyWeekly />
        <SportsSection />
      </section>
    </div>
  );
}

export default Home;
