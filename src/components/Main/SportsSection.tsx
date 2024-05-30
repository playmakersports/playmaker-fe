import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import MainTab from "./MainTab";
import { FONTS, SCROLL_HIDE, SCROLL_MASKED_GRADIENT } from "@/styles/common";
import { BasicWhiteCard, BasicWhiteCardTitle } from "../common/Card";
import RecruitTeamItem from "./RecruitTeamItem";
import RightArrowThinIcon from "@/assets/icon/arrow/RightArrowThin.svg";
import CompetitionScheduleItem from "./CompetitionScheduleItem";
import { SUPPORT_SPORTS } from "@/constants/mock/SPORTS";
import { scrollMaskedHandler, scrollMaskedHandlerRef } from "@/util/display";

function SportsSection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(SUPPORT_SPORTS[0].value);

  return (
    <div>
      <MainTab
        nowValue={(value) => {
          setActiveTab(value);
        }}
        items={SUPPORT_SPORTS}
      />
      <Cards>
        <Container>
          <BasicWhiteCardTitle>모집 중인 팀</BasicWhiteCardTitle>
          <ListWrapperColumn>
            {MOCK_TEAM_LIST.map((value, index) => (
              <RecruitTeamItem key={index} {...value} />
            ))}
          </ListWrapperColumn>
          <MoreButton type="button" onClick={() => router.push(`/recruit?sports=${activeTab}`)}>
            더 많은 팀 보기 <RightArrowThinIcon width={12} height={12} />
          </MoreButton>
        </Container>
        <Container>
          <BasicWhiteCardTitle>진행 중인 경기</BasicWhiteCardTitle>
          <ListWrapperColumn></ListWrapperColumn>
          <MoreButton type="button">
            더 많은 대회 보기 <RightArrowThinIcon width={12} height={12} />
          </MoreButton>
        </Container>
        <Container>
          <BasicWhiteCardTitle>대회 일정</BasicWhiteCardTitle>
          <ListWrapperRow>
            <div className="inner-scroll-wrapper" ref={scrollMaskedHandlerRef} onScroll={scrollMaskedHandler}>
              {MOCK_MATCH_LIST.map((value, index) => (
                <CompetitionScheduleItem key={index} {...value} />
              ))}
            </div>
          </ListWrapperRow>
          <MoreButton type="button">
            더 많은 대회 보기 <RightArrowThinIcon width={12} height={12} />
          </MoreButton>
        </Container>
      </Cards>
    </div>
  );
}

const MOCK_TEAM_LIST = [
  {
    teamId: "1",
    teamName: "SPABA",
    isUnivTeam: true,
    univName: "서울과기대",
    location: "서울과학기술대학교 체육관",
    date: "2024-04-12 20:00",
  },
  {
    teamId: "2",
    teamName: "프렌즈",
    isUnivTeam: true,
    univName: "성균관대",
    location: "성균관대학교 체육관",
    date: "2024-04-12 20:00",
  },
];

const MOCK_MATCH_LIST = [
  {
    competitionId: "2",
    posterImg:
      "https://i.namu.wiki/i/83QhQJRkrjYOgRlz8WBlerxOxWfSDjs0nEag90x03uiA6hIMS9rdFCFuC7aCRxP53zCadhmwMlUHhjJX570WRg.webp",
    matchName: "무슨무슨 배구 대회",
    matchDate: "2024-05-01",
  },
  { competitionId: "3", posterImg: "0", matchName: "000 천하제일대박 대회", matchDate: "2024-05-02" },
  { competitionId: "4", posterImg: "0", matchName: "2024 전국배구대회", matchDate: "2024-05-09" },
  { competitionId: "5", posterImg: "0", matchName: "00배 경기도대회", matchDate: "2024-05-20" },
];

const Container = styled(BasicWhiteCard)`
  padding: 24px 20px 8px;
`;
const ListWrapperColumn = styled.div`
  margin: 0 -4px 4px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const MoreButton = styled.button`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  width: 100%;
  color: ${({ theme }) => theme.gray1};
  border-radius: 16px;
  transition: all 0.2s;
  ${FONTS.MD2};
  svg {
    fill: ${({ theme }) => theme.gray1};
  }
  &:active {
    transform: scale(0.97);
    background-color: ${({ theme }) => theme.background};
  }
`;
const ListWrapperRow = styled.div`
  margin: -4px -4px 4px;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
  ${SCROLL_HIDE};
  .inner-scroll-wrapper {
    display: flex;
    margin-bottom: 12px;
    gap: 4px;
    overflow-x: auto;
    overflow-y: hidden;
  }
  ${SCROLL_MASKED_GRADIENT("var(--card-rgb)")};
`;

export default SportsSection;
