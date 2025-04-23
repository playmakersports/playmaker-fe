import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter, useParams } from "next/navigation";
import { intervalToDuration } from "date-fns";

import { FONTS, TEXT_ACTIVE } from "@/styles/common";
import AlertFilledIcon from "@/assets/icon/circle/AlertFilled.svg";

type Props = {
  list: {
    articleId: string;
    createAt: string;
    title: string;
  }[];
};

function TeamNotice({ list }: Props) {
  const router = useRouter();
  const params = useParams();
  const teamId = params["teamId"];

  const [order, setOrder] = useState(0);
  const ANIMATE_INTERVAL = 3000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOrder((prev) => {
        if (prev === list.length) return 0;
        return (prev + 1) % list.length;
      });
    }, ANIMATE_INTERVAL);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Display>
        {list.map((item, index) => {
          const dateInterval = intervalToDuration({
            start: new Date(item.createAt),
            end: new Date(),
          });
          const isWithin24H = !dateInterval.years && !dateInterval.months && !dateInterval.days;

          return (
            <Item
              key={item.articleId}
              onClick={() => router.push(`/team/${teamId}/board/${item.articleId}`)}
              className={
                order === index
                  ? "current"
                  : (order === 0 && list.length - 1 === index) || order - 1 === index
                  ? "prev"
                  : "next"
              }
            >
              <Wrapper>
                <p>
                  <span className="category">
                    <AlertFilledIcon /> 공지
                  </span>
                  <span className="title">{item.title}</span>
                </p>
                <span className="create-at">
                  {isWithin24H
                    ? dateInterval.hours ?? 0 > 0
                      ? `${dateInterval.hours}시간 전`
                      : (dateInterval.hours ?? 0 === 0) && (dateInterval.minutes ?? 0 > 0)
                      ? `${dateInterval.minutes}분 전`
                      : "방금"
                    : item.createAt.split("T")[0]}
                </span>
              </Wrapper>
            </Item>
          );
        })}
      </Display>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px 12px;
  background-color: var(--primary50);
  border-radius: 8px;
`;
const Display = styled.div`
  position: relative;
  display: flex;
  height: 1.8rem;
  overflow: hidden;
  align-items: center;
`;
const Item = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 1.8rem;
  transform: translate3d(0, -100%, 0);
  align-items: center;

  &.prev {
    transform: translate3d(0, -100%, 0);
    transition: transform 0.4s ease;
  }
  &.current {
    transform: translate3d(0, 0, 0);
    transition: transform 0.4s ease;
  }
  &.next {
    transform: translate3d(0, 100%, 0);
  }

  p {
    display: flex;
    gap: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .category {
    ${FONTS.caption1("semibold")};
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--primary500);
    svg {
      width: 18px;
      height: 18px;
      fill: var(--primary500);
    }
  }
  .title {
    ${FONTS.caption1("medium")};
    color: var(--gray700);
  }
  .create-at {
    ${FONTS.caption1("regular")};
    color: var(--gray400);
  }
`;

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 2rem;
  user-select: none;

  ${TEXT_ACTIVE("transparent", { scalable: true })};
`;

export default TeamNotice;
