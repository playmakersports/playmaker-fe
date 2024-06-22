import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import { countDayDiff } from "@/util/date";

type Props = {
  posterImg: string;
  competitionId: string;
  matchName: string;
  matchDate: string;
};
function CompetitionScheduleItem(props: Props) {
  const router = useRouter();
  const { posterImg, competitionId, matchName, matchDate } = props;
  const dayCount = () => {
    if (countDayDiff(matchDate) === 0) return "D-DAY";
    return `D${countDayDiff(matchDate) > 0 ? -countDayDiff(matchDate) : "+" + -countDayDiff(matchDate)}`;
  };

  return (
    <Container onClick={() => router.push(`/competition/${competitionId}`)}>
      <ItemWrapper>
        <Poster data-count={dayCount()}>
          <img src={posterImg} alt={matchName} />
        </Poster>
        <Name>{matchName}</Name>
      </ItemWrapper>
    </Container>
  );
}

const ItemWrapper = styled.div`
  width: 107px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  transition: transform 0.2s;
  gap: 10px;
`;
const Container = styled.button`
  padding: 8px;
  border-radius: 12px;
  transition: all 0.2s;

  ${BUTTON_ACTIVE("var(--background)")};
`;

const Poster = styled.div`
  position: relative;
  margin: 0 auto;
  width: 107px;
  height: 133px;
  background-color: ${({ theme }) => theme.gray3};
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 107px;
    height: 133px;
    object-fit: cover;
  }

  &::after {
    content: attr(data-count);
    position: absolute;
    display: flex;
    align-items: flex-start;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 8px;
    text-align: left;
    ${FONTS.MD2};
    color: #fff;
    font-weight: 800;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 30%);
  }
`;

const Name = styled.p`
  ${FONTS.MD2};
  margin: 0 auto;
  width: calc(100% - 24px);
  max-height: 4rem;
  text-align: center;
  word-break: keep-all;
  -webkit-line-clamp: 2;
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
`;

export default CompetitionScheduleItem;
