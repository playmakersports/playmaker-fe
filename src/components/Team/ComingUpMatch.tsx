import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styled from "@emotion/styled";

import GroupTitle from "../common/GroupTitle";
import CompetitionCard from "../Main/CompetitionCard";

function ComingUpMatch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const teamId = searchParams.get("teamId");

  return (
    <Container>
      <GroupTitle link={`/team/${teamId}/schedule`}>다가오는 경기</GroupTitle>
      <Cards>
        <CompetitionCard
          posterImg="/images/mock/2024hongik-jump-competition.jpeg"
          competitionId=""
          competitionName="전국대학동아리 농구대회"
          startDate="2024-10-30"
          endDate="2024-11-10"
          matchLocation="00대학교 실내체육관"
          attendMembers={12}
        />
        <CompetitionCard
          posterImg="/images/mock/seoul-tech-univ-poster.png"
          competitionId=""
          competitionName="리그 챔피언 배구"
          startDate="2024-11-20"
          endDate="2024-11-29"
          matchLocation="00대학교 실내체육관"
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
