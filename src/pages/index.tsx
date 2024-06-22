import styled from "@emotion/styled";
import Head from "next/head";

import MyTeam from "@/components/Main/MyTeam";
import SportsSection from "@/components/Main/SportsSection";
import { BaseContainer } from "@/components/common/Container";
import Banner from "@/components/Main/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>플메 PLAYMAKER</title>
      </Head>
      <Container>
        <Banner />
        <MyTeam />
        <SportsSection />
      </Container>
    </>
  );
}

const Container = styled(BaseContainer)`
  padding: 2px 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: calc(32px + var(--env-sab));
`;
