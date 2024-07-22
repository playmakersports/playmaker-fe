import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { SUPPORT_SPORTS } from "@/constants/mock/SPORTS";
import { TEAM_LIST_MOCK } from "@/constants/mock/HOME";
import RecruitTeamItem from "./RecruitTeamItem";
import MatchCard from "./MatchCard";
import MainTab from "./MainTab";
import { BasicWhiteCard, BasicWhiteCardTitle } from "../common/Card";
import MoreButton from "../common/MoreButton";
import GroupTitle from "../common/GroupTitle";
import { SCROLL_HIDE, SCROLL_MASKED_GRADIENT } from "@/styles/common";
import { WhiteSectionDivider } from "../common/Container";
import { COMPETITION_LIST_MOCK } from "@/constants/mock/COMPETITION";

function SportsSection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(SUPPORT_SPORTS[0].value);

  return (
    <Wrapper>
      <WhiteSectionDivider />
      <TabHead>
        <span>{SUPPORT_SPORTS.find((v) => v.value === activeTab)?.name} 정보를 한 눈에</span>
      </TabHead>
      <MainTab
        nowValue={(value) => {
          setActiveTab(value);
        }}
        items={SUPPORT_SPORTS}
      />
      <Cards>
        <Container>
          <BasicWhiteCardTitle>팀 살펴보기</BasicWhiteCardTitle>
          <ListWrapperColumn>
            {TEAM_LIST_MOCK.map((value, index) => (
              <RecruitTeamItem key={index} {...value} />
            ))}
          </ListWrapperColumn>
          <LineBottom />
          <MoreButton text="더 많은 팀 보기" href={`/recruit?sports=${activeTab}`} />
        </Container>

        <GroupTitle link="">경기 일정</GroupTitle>
        {COMPETITION_LIST_MOCK.map((competition, index) => (
          <MatchCard
            key={competition.competitionId}
            size={index === 0 ? "LARGE" : "MEDIUM"}
            posterImg={competition.posterImg}
            competitionId={competition.competitionId}
            competitionName={competition.competitionName}
            matchDate={competition.matchDate}
            matchTime={competition.matchTime}
            matchLocation={competition.matchLocation}
            openedBy={competition.openedBy}
            openedByLogo={competition.openedByLogo}
            homeName={competition.homeName}
            homeLogo={competition.homeLogo}
            awayName={competition.awayName}
            awayLogo={competition.awayLogo}
          />
        ))}
      </Cards>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--background-light);
  margin: 0 -16px;
  padding: 0 16px;
`;
const TabHead = styled.h3`
  position: relative;
  margin: 24px -16px;
  width: calc(100% + 32px);
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    background-color: var(--gray5);
    width: 100%;
    height: 1px;
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    position: relative;
    background-color: var(--background-light);
    &::before,
    &::after {
      content: "";
      display: inline-block;
      width: 5px;
      height: 5px;
      border: 2px solid var(--gray5);
      border-radius: 100%;
    }
  }
`;
const Container = styled(BasicWhiteCard)`
  padding: 24px 20px 2px;
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

const ListWrapperRow = styled.div`
  margin: 0 -20px;
  ${SCROLL_HIDE};
  .inner-scroll-wrapper {
    margin: 0 12px;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
  }
  ${SCROLL_MASKED_GRADIENT("var(--card-rgb)")};
`;

const LineBottom = styled.div`
  margin-bottom: 2px;
  border-bottom: 1px solid var(--gray6);
`;

export default SportsSection;
