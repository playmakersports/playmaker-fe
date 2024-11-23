import React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import MainMatchCard from "../Main/MainMatchCard";
import GroupTitle from "../common/GroupTitle";

function ComingUpMatch() {
  const router = useRouter();
  const teamId = router.query.teamId;

  return (
    <Container>
      <GroupTitle link={`/team/${teamId}/schedule`}>다가오는 경기</GroupTitle>
      <Cards>
        <MainMatchCard
          size="MEDIUM"
          posterImg="/images/mock/2024hongik-jump-competition.jpeg"
          competitionId=""
          competitionName="전국대학동아리 농구대회"
          startDate="2024-10-30"
          endDate="2024-11-10"
          matchLocation="00대학교 실내체육관"
          openedBy="국민체육진흥공단"
          homeName="포이프"
          awayName="archive"
          attendMembers={12}
        />
        <MainMatchCard
          size="MEDIUM"
          posterImg="/images/mock/seoul-tech-univ-poster.png"
          competitionId=""
          competitionName="리그 챔피언 배구"
          startDate="2024-11-20"
          endDate="2024-11-29"
          matchLocation="00대학교 실내체육관"
          openedBy="국민체육진흥공단"
          homeName="포이프"
          awayName="archive"
        />
      </Cards>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default ComingUpMatch;
