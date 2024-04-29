import styled from "@emotion/styled";
import useBackgroundGray from "@/hook/useBackgroundGray";

import MyTeam from "@/components/Main/MyTeam";
import SportsSection from "@/components/Main/SportsSection";
import Head from "next/head";

export default function Home() {
  useBackgroundGray();

  return (
    <Container>
      <Head>
        <title>플메 PLAYMAKER</title>
      </Head>
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
  height: auto;
  min-height: 100vh;
`;
