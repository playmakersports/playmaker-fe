import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { intervalToDuration } from "date-fns";

import { TEXT_ACTIVE } from "@/styles/common";

type Props = {
  list: {
    articleId: string;
    createAt: string;
    title: string;
  }[];
};

function Notice({ list }: Props) {
  const router = useRouter();
  const teamId = router.query.teamId;

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
              onClick={() =>
                router.push({
                  pathname: "/team/[teamId]/board/[articleId]",
                  query: {
                    teamId: teamId,
                    articleId: item.articleId,
                  },
                })
              }
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
                  <span className="category">공지</span>
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

const PADDING = 24;

const Container = styled.div`
  margin: 0 -16px 20px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--gray6);
`;
const Display = styled.div`
  position: relative;
  display: flex;
  padding: 0 ${PADDING}px;
  height: 3.6rem;
  overflow: hidden;
  align-items: center;
`;
const Item = styled.div`
  position: absolute;
  display: flex;
  height: 3.6rem;
  width: calc(100% - ${PADDING * 2}px);
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
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .category {
    display: inline-flex;
    margin-right: 6px;
    align-items: center;
    font-weight: 700;
    gap: 6px;
    &::after {
      content: "";
      width: 5px;
      height: 5px;
      background-color: var(--gray5);
      border-radius: 100%;
    }
  }
  .title {
    font-weight: 400;
  }
  .create-at {
    flex-shrink: 0;
    color: var(--gray5);
    font-size: 1.4rem;
    text-align: right;
  }
`;

const Wrapper = styled.div`
  display: inline-flex;
  gap: 2px;
  padding: 0 2px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1.6rem;
  line-height: 2rem;
  user-select: none;
  border-radius: 2px;

  ${TEXT_ACTIVE("var(--background)")};
`;

export default Notice;
