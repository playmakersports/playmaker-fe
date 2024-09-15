import styled from "@emotion/styled";

import Banner from "@/components/Main/Banner";
import MyTeam from "@/components/Main/MyTeam";
import MyWeekly from "@/components/Main/MyWeekly";
import SportsSection from "@/components/Main/SportsSection";
import { BaseContainer } from "@/components/common/Container";

export default function Home() {
  return (
    <Container>
      <Banner />
      <MyTeam />
      <MyWeekly />
      <SportsSection />
    </Container>
  );
}

const Container = styled(BaseContainer)`
  padding: 2px 16px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
