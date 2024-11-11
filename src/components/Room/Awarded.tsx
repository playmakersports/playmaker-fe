import styled from "@emotion/styled";
import React from "react";
import GroupTitle from "../common/GroupTitle";
import { BasicWhiteCard } from "../common/Card";
import { FONTS } from "@/styles/common";

import MedalIcon from "@/assets/icon/global/Medal.svg";

type Props = {
  awardsList: Array<{
    awardedYear: number;
    competitionName: string;
    awardedRank: number;
  }>;
};

const RANK_DISPLAY: Record<string, { name: string; color: string }> = {
  1: { name: "1위", color: "#FBBC00" },
  2: { name: "2위", color: "var(--gray500)" },
  3: { name: "3위", color: "#BF7C00" },
};

function RoomAwarded({ awardsList }: Props) {
  return (
    <Container>
      <GroupTitle>수상 경력</GroupTitle>
      <Contents>
        <AwardList>
          <li className="title-items">
            <span className="award-year">연도</span>
            <span className="award-name">대회명</span>
            <span className="award-rank">수상실적</span>
          </li>
          {awardsList.map((award, idx) => (
            <li key={`awarded-${idx}`}>
              <span className="award-year">{award.awardedYear}</span>
              <span className="award-name">{award.competitionName}</span>
              <span className="award-rank" style={{ color: RANK_DISPLAY[award.awardedRank].color, fontWeight: 600 }}>
                {RANK_DISPLAY[award.awardedRank].name}
              </span>
            </li>
          ))}
        </AwardList>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Contents = styled(BasicWhiteCard)``;
const AwardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  li.title-items {
    padding: 0 4px;
    font-weight: 400;
    color: var(--gray600);
  }
  li {
    ${FONTS.MD2};
    padding: 10px 4px;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray100);
    &:first-of-type,
    &:last-of-type {
      border-bottom: none;
    }
    &:last-of-type {
      padding-bottom: 4px;
    }

    span {
      display: inline-flex;
      align-items: center;
    }
    span.award-year {
      width: 60px;
    }
    span.award-name {
      flex: 1;
    }
    span.award-rank {
      width: 54px;
      justify-content: center;
    }
  }
`;

export default RoomAwarded;
