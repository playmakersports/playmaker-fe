import styled from "styled-components";
import MyTeam from "@/components/Main/MyTeam";
import SportsSection from "@/components/Main/SportsSection";

export default function Home() {
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
  gap: 20px;
  margin: 0 -16px;
  padding: 20px 16px;
  height: 100vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 2%, rgba(219, 219, 219, 1) 8%);
`;
