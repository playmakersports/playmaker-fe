import React, { useState } from "react";
import styled from "@emotion/styled";

import MainTab from "./MainTab";
import { FONTS } from "@/styles/fonts";
import { BasicWhiteCard } from "../common/Card";
import SectionItem from "./SectionItem";
import RightArrowThinIcon from "@/assets/icon/arrow/RightArrowThin.svg";

function SportsSection() {
  const [activeTab, setActiveTab] = useState(TAB_ITEMS[0].value);

  return (
    <div>
      <MainTab
        nowValue={(value) => {
          setActiveTab(value);
        }}
        items={TAB_ITEMS}
      />
      <Cards>
        <Container>
          <Title>모집 중인 팀</Title>
          <ListWrapper>
            {MOCK_TEAM_LIST.map((value, index) => (
              <SectionItem key={index} {...value} />
            ))}
          </ListWrapper>
          <MoreButton type="button">
            더 많은 팀 보기 <RightArrowThinIcon width={12} height={12} />
          </MoreButton>
        </Container>
        <Container>
          <Title>진행 중인 경기</Title>
          <ListWrapper></ListWrapper>
          <MoreButton type="button">
            더 많은 대회 보기 <RightArrowThinIcon width={12} height={12} />
          </MoreButton>
        </Container>
        <Container>
          <Title>대회 일정</Title>
          <ListWrapper></ListWrapper>
          <MoreButton type="button">
            더 많은 대회 보기 <RightArrowThinIcon width={12} height={12} />
          </MoreButton>
        </Container>
      </Cards>
    </div>
  );
}

const TAB_ITEMS = [
  { value: "volley", name: "배구" },
  { value: "basketball", name: "농구" },
  { value: "football", name: "축구" },
  { value: "badminton", name: "배드민턴" },
  { value: "tennis", name: "테니스" },
];
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

const Container = styled(BasicWhiteCard)`
  padding: 24px 20px 8px;
`;
const Title = styled.h3`
  margin: 0 0 16px;
  padding: 0 8px;
  ${FONTS.HEAD1}
`;
const ListWrapper = styled.div`
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

export default SportsSection;
