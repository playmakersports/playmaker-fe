import styled from "@emotion/styled";
import useBgWhite from "@/hook/useBgWhite";

import { BaseContainer } from "@/components/common/Container";
import MainHeader from "@/components/layouts/Header/MainHeader";
import Banner from "@/components/Main/Banner";
import MyTeam from "@/components/Main/MyTeam";
import MyWeekly from "@/components/Main/MyWeekly";
import SportsSection from "@/components/Main/SportsSection";
import MyTeamSchedule from "@/components/Main/MyTeamSchedule";

export default function Home() {
  useBgWhite();
  return (
    <Container>
      <BackGradient />
      <MainHeader />
      <Banner />
      <MyTeam />
      <MyWeekly />
      {/* <MyTeamSchedule /> */}
      <SportsSection />
    </Container>
  );
}

const Container = styled(BaseContainer)`
  position: relative;
  margin-top: calc(-1 * var(--header-height));
  padding: calc(16px + var(--header-height)) 16px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--background);
`;

const BackGradient = styled.div`
  position: absolute;
  margin: calc(-1 * var(--header-height)) -16px 0;
  top: 0;
  width: 100%;
  height: 900px;
  background: linear-gradient(165deg, rgba(48, 108, 239, 0.9) 0%, rgb(48, 109, 239, 0) 80%);
  z-index: 0;
  opacity: 0.15;
`;
