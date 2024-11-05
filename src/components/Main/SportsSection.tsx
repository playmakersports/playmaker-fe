import React, { useRef, useState } from "react";
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
import { COMPETITION_LIST_MOCK } from "@/constants/mock/COMPETITION";
import useStickyMoment from "@/hook/useStickyMoment";

function SportsSection() {
  const router = useRouter();
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
          padding={20}
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
          <MoreButton text="더 많은 팀 보기" href={`/team/list?sports=${activeTab}`} />
        </Container>

        <GroupTitle link="">대회 일정</GroupTitle>
        {COMPETITION_LIST_MOCK.map((competition, index) => (
          <MatchCard
            key={competition.competitionId}
            size={index === 2 ? "LARGE" : "MEDIUM"}
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
  padding: 16px 16px calc(var(--safe-area-bottom) + 52px);
  border-radius: 30px 30px 0 0;
`;
const TabWrapper = styled.div`
  position: sticky;
  top: -1px;
  width: calc(100% + 32px);
  margin: -8px -16px 8px;
  padding: 8px 0;
  background-color: var(--background-light);
  z-index: 1;
  transition: all 0.3s;

  &.stuck {
    margin: 0 -16px;
    box-shadow: 0 1px 5px 0 rgba(107, 119, 172, 0.2);
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
      background: var(--sub1);
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
