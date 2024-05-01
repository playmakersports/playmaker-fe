import styled from "@emotion/styled";
import useBackgroundGray from "@/hook/useBackgroundGray";

import MyTeam from "@/components/Main/MyTeam";
import SportsSection from "@/components/Main/SportsSection";
import Head from "next/head";
import { BaseContainer } from "@/components/common/Container";

export default function Home() {
  useBackgroundGray();

  return (
    <>
      <Head>
        <title>플메 PLAYMAKER</title>
      </Head>
      <Container>
        <MyTeam />
        <SportsSection />
      </Container>
    </>
  );
}

const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
