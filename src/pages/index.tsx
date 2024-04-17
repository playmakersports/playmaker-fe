import styled from "@emotion/styled";
import useBackgroundGray from "@/hook/useBackgroundGray";

import MyTeam from "@/components/Main/MyTeam";
import SportsSection from "@/components/Main/SportsSection";

export default function Home() {
  useBackgroundGray();

  return (
    <Container>
      <MyTeam />
      <SportsSection />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin: 0 -16px;
  padding: 12px 16px 20px;
  height: 100vh;
`;
