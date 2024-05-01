import React from "react";
import styled from "@emotion/styled";
import { FONTS } from "@/styles/common";
import { countDayDiff } from "@/util/date";

type Props = {
  posterImg: string;
  matchId: string;
  matchName: string;
  matchDate: string;
};
function MatchScheduleItem(props: Props) {
  const { posterImg, matchId, matchName, matchDate } = props;
  const dayCount = () => {
    if (countDayDiff(matchDate) === 0) return "오늘";
    if (countDayDiff(matchDate) === 1) return "내일";
    return `${countDayDiff(matchDate)}일 전`;
  };

  return (
    <Container>
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
  width: 80px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  transition: transform 0.2s;
  gap: 12px;
`;
const Container = styled.button`
  padding: 12px;
  border-radius: 12px;
  transition: all 0.2s;

  &:active {
    background-color: ${({ theme }) => theme.background};
  }
  &:active > ${ItemWrapper} {
    transform: scale(0.97);
  }
`;

const Poster = styled.div`
  position: relative;
  margin: 0 auto;
  width: 72px;
  min-height: 100px;
  background-color: ${({ theme }) => theme.gray3};
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 72px;
    min-height: 100px;
    object-fit: cover;
  }

  &::after {
    content: attr(data-count);
    position: absolute;
    display: flex;
    align-items: flex-end;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 8px;
    text-align: left;
    ${FONTS.MD2};
    color: #fff;
    font-weight: 800;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 30%);
  }
`;

const Name = styled.p`
  ${FONTS.MD1W500};
  width: 100%;
  max-height: 40px;
  text-align: center;
  word-break: keep-all;
  -webkit-line-clamp: 2;
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
`;

export default MatchScheduleItem;
