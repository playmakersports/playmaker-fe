import React from "react";
import styled from "styled-components";
import { useRouter, useParams } from "next/navigation";

import GroupTitle from "../common/GroupTitle";
import { BasicWhiteCard } from "../common/Card";
import { CARD_ACTIVE, FONTS, SCROLL_HIDE } from "@/styles/common";
import { formattedDate } from "@/util/date";

function BoardList() {
  const router = useRouter();
  const params = useParams();
  const teamId = params["teamId"];
  const moveArticlePage = (articleId: string) => {
    router.push(`/team/${teamId}/board/${articleId}`);
  };

  return (
    <Wrapper>
      <GroupTitle link={`/team/${teamId}/board`}>게시판</GroupTitle>
      <List>
        {BOARD_ARTICLES_MOCK.map((item) => (
          <Item key={item.articleId} onClick={() => moveArticlePage(item.articleId)}>
            <p className="article-category">{item.category}</p>
            <p className="article-title">{item.title}</p>
            <p className="article-author">
              {item.writtenBy} <span className="author-separator">|</span>{" "}
              {formattedDate(item.writtenAt, {
                displayDateType: ".",
                displayDayName: "hide",
                displayYear: "always",
                displayTime: "hide",
              })}
            </p>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
}

const BOARD_ARTICLES_MOCK = [
  {
    articleId: "1",
    title: "BOD 일반부 랭킹 24-25 시즌 경기 모집",
    category: "공지사항",
    writtenBy: "백종원",
    writtenAt: "2024-10-1315:20",
  },
  { articleId: "2", title: "게시글 제목2", category: "공지사항", writtenBy: "안성재", writtenAt: "2024-10-1508:20" },
  { articleId: "3", title: "게시글 제목3", category: "공지사항", writtenBy: "홍길동", writtenAt: "2024-10-1722:20" },
];

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const List = styled.ul`
  display: flex;
  margin: 0 -16px;
  padding: 0 16px 8px;
  overflow-x: auto;
  white-space: nowrap;
  ${SCROLL_HIDE}
`;
const Item = styled(BasicWhiteCard).attrs({ as: "li" })`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  width: 170px;
  min-width: 170px;
  margin-right: 12px;
  ${CARD_ACTIVE}

  p.article-category {
    ${FONTS.MD3};
    display: inline-block;
    margin-bottom: 6px;
    padding: 1px 4px;
    width: max-content;
    border-radius: 5px;
    border: 1px solid var(--primary300);
    color: var(--main);
  }
  p.article-title {
    flex: 1;
    ${FONTS.MD2};
    margin-bottom: 20px;
    font-weight: 500;
    line-height: 2.2rem;
    display: -webkit-box;
    white-space: pre-wrap;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p.article-author {
    ${FONTS.MD3};
    font-weight: 400;
    color: var(--gray700);
    span.author-separator {
      color: var(--gray400);
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export default BoardList;
