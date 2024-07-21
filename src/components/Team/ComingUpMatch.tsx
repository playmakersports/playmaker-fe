import React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import MatchCard from "../Main/MatchCard";
import GroupTitle from "../common/GroupTitle";

function ComingUpMatch() {
  const router = useRouter();
  const teamId = router.query.teamId;

  return (
    <Container>
      <GroupTitle link={`/team/${teamId}/schedule`}>다가오는 경기</GroupTitle>
      <Cards>
        <MatchCard
          size="MEDIUM"
          posterImg="/images/mock/2024hongik-jump-competition.jpeg"
          competitionId=""
          competitionName="전국대학동아리 농구대회"
          matchDate="2024-07-31"
          matchTime="15:30"
          matchLocation="00대학교 실내체육관"
          openedBy="국민체육진흥공단"
          homeName="포이프"
          awayName="archive"
        />
        <MatchCard
          size="MEDIUM"
          posterImg="/images/mock/seoul-tech-univ-poster.png"
          competitionId=""
          competitionName="리그 챔피언 배구"
          matchDate="2024-07-31"
          matchTime="15:30"
          matchLocation="00대학교 실내체육관"
          openedBy="국민체육진흥공단"
          homeName="포이프"
          awayName="archive"
        />
      </Cards>
    </Container>
  );
}

const Container = styled.article``;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0 0px;
  gap: 16px;
`;

export default ComingUpMatch;
