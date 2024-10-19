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

const MEDAL_COLORS: Record<string, string> = {
  1: "#FBBC00",
  2: "var(--gray400)",
  3: "#BF7C00",
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
              <span className="award-rank">
                <MedalIcon fill={MEDAL_COLORS[award.awardedRank]} width={28} height={32} />
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
  gap: 10px;
`;
const Contents = styled(BasicWhiteCard)``;
const AwardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  li.title-items {
    padding: 0;
    ${FONTS.MD2};
    color: var(--gray500);
  }
  li {
    padding: 8px 0;
    ${FONTS.MD2};
    font-weight: 400;
    display: flex;
    justify-content: space-between;

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