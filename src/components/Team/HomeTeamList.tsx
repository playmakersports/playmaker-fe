import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import PlayerListItem from "./PlayerListItem";
import { TEAM_PLAYERS_MOCK } from "@/constants/mock/TEAM";

function HomeTeamList() {
  const router = useRouter();
  const teamId = router.query.teamId;

  return (
    <Wrapper>
      {TEAM_PLAYERS_MOCK.map((player) => (
        <PlayerListItem key={player.playerId} {...player} />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  margin-top: 24px;
  flex-direction: column;
  gap: 24px;
`;

export default HomeTeamList;
