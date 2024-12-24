"use client";

import React from "react";
import styled from "styled-components";
import { useSearchParams } from "next/navigation";
import { usePageTitle } from "@/hook/usePageTitle";

import { COMPETITION_DETAIL_MOCK } from "@/constants/mock/COMPETITION";
import { BaseContainer, WhiteSectionDivider } from "@/components/common/Container";
import CompetitionHeader from "./_components/CompetitionHeader";

function CompetitionArticle() {
  const MOCK = COMPETITION_DETAIL_MOCK;

  usePageTitle({ title: MOCK.competitionName, transparent: true });

  const searchParams = useSearchParams();
  const competitionId = searchParams.get("competitionId");

  return (
    <>
      <CoverImage src={MOCK.posterImg} />
      <Container>
        <CompetitionHeader
          competitionId={MOCK.competitionId}
          competitionName={MOCK.competitionName}
          startDate={MOCK.startDate}
          endDate={MOCK.endDate}
          matchLocation={MOCK.matchLocation}
        />
      </Container>
      <WhiteSectionDivider />
    </>
  );
}

const Container = styled(BaseContainer)`
  padding-bottom: 0;
`;

const CoverImage = styled.section<{ src: string }>`
  margin-top: calc(-1 * var(--safe-area-top));
  width: 100%;
  height: calc(232px + var(--env-sat));
  background-color: var(--gray600);
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
`;

export default CompetitionArticle;
