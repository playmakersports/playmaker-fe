"use client";

import React, { useRef, useState } from "react";
import styled from "styled-components";
import useStickyMoment from "@/hook/useStickyMoment";

import MainTab from "./MainTab";
import CompetitionCard from "./CompetitionCard";
import MoreButton from "../common/MoreButton";
import GroupTitle from "../common/GroupTitle";
import RecruitTeamItem from "./RecruitTeamItem";
import { BasicWhiteCard, BasicWhiteCardTitle } from "../common/Card";
import { SUPPORT_SPORTS } from "@/constants/SPORTS";
import { TEAM_LIST_MOCK } from "@/constants/mock/HOME";
import { COMPETITION_LIST_MOCK } from "@/constants/mock/COMPETITION";

function SportsSection() {
  const tabRef = useRef<HTMLDivElement>(null);
  useStickyMoment(tabRef);
  const [activeTab, setActiveTab] = useState(SUPPORT_SPORTS[0].value);

  return (
    <Wrapper>
      <SportsTitle>
        <span>{SUPPORT_SPORTS.find((v) => v.value === activeTab)?.name} 정보를 한 눈에</span>
      </SportsTitle>
      <TabWrapper ref={tabRef}>
        <MainTab
          color="primary"
          type="light"
          size="medium"
          nowValue={(value) => {
            setActiveTab(value);
          }}
          items={SUPPORT_SPORTS}
        />
      </TabWrapper>
      <Cards>
        <Container>
          <BasicWhiteCardTitle>팀 살펴보기</BasicWhiteCardTitle>
          <ListWrapperColumn>
            {TEAM_LIST_MOCK.map((value, index) => (
              <RecruitTeamItem key={index} {...value} />
            ))}
          </ListWrapperColumn>
          <LineBottom />
          <MoreButton text="더 많은 팀 보기" href={`/team?sports=${activeTab}`} />
        </Container>

        <GroupTitle link="">대회 일정</GroupTitle>
        {COMPETITION_LIST_MOCK.map((competition, index) => (
          <CompetitionCard
            key={competition.competitionId}
            posterImg={competition.posterImg}
            competitionId={competition.competitionId}
            competitionName={competition.competitionName}
            startDate={competition.startDate}
            endDate={competition.endDate}
            matchLocation={competition.matchLocation}
          />
        ))}
      </Cards>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--background-light);
  margin: 0 -16px;
  padding: 16px 16px var(--safe-bottom-navigation);
`;
const TabWrapper = styled.div`
  position: sticky;
  padding: 8px 0;
  background-color: var(--background-light);
  z-index: 1;
  transition: all 0.3s;

  &.stuck {
    margin: 0 -16px;
    padding: 10px 16px 8px;
    box-shadow: var(--shadow-xs);
  }
`;
const SportsTitle = styled.h3`
  margin: 16px -16px 24px;
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;

  span {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    position: relative;
    &::before,
    &::after {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background: var(--primary300);
      border-radius: 50%;
      filter: blur(2px);
    }
  }
`;
const Container = styled(BasicWhiteCard)`
  padding: 24px 20px 12px;
`;
const ListWrapperColumn = styled.div`
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LineBottom = styled.div`
  margin: 0 -20px 2px;
  border-bottom: 1px solid var(--gray200);
`;

export default SportsSection;
