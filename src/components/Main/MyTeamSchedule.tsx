import React from "react";
import styled from "@emotion/styled";

import { BasicWhiteCard } from "../common/Card";
import GroupTitle from "../common/GroupTitle";

function MyTeamSchedule() {
  return (
    <article style={{ zIndex: 1 }}>
      <GroupTitle link="">소속 팀의 경기 일정</GroupTitle>
      <Wrapper>MyTeamSchedule</Wrapper>
    </article>
  );
}

const Wrapper = styled(BasicWhiteCard)`
  padding: 0;
  background-color: var(--background-light);
`;

export default MyTeamSchedule;
