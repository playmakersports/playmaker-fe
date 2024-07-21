import React from "react";
import styled from "@emotion/styled";

import PlayerSelector from "@/components/Team/PlayerSelector";
import { usePageTitle } from "@/hook/usePageTitle";

function PlayerList() {
  usePageTitle({ title: "팀원 목록" });
  return (
    <Container>
      <PlayerSelector />
      <PlayerSelector />
      <PlayerSelector />
    </Container>
  );
}

const Container = styled.div`
  padding: 8px 0;
`;

export default PlayerList;
