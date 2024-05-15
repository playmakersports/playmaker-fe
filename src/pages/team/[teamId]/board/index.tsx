import React, { useState } from "react";
import styled from "@emotion/styled";
import useBackgroundGray from "@/hook/useBackgroundGray";

import MainTab from "@/components/Main/MainTab";
import { BaseContainer } from "@/components/common/Container";
import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import { useRouter } from "next/router";

function Board() {
  useBackgroundGray();
  const [, setTab] = useState("ALL");
  const router = useRouter();
  const teamId = router.query.teamId;
  const currentPage = router.query.page;

  return (
    <Container>
      <MainTab
        items={[
          { value: "ALL", name: "전체" },
          { value: "notice", name: "공지사항" },
          { value: "photo", name: "사진" },
          { value: "schedule", name: "일정" },
        ]}
        nowValue={setTab}
      />
      <Articles>
        <WriteButton
          role="button"
          onClick={() =>
            router.push({
              pathname: "/team/[teamId]/board/editor",
              query: {
                teamId: teamId,
                type: "new",
              },
            })
          }
        >
          <p>새 게시글 올리기</p>
        </WriteButton>
        {MOCK.map((article) => (
          <Article
            key={article}
            onClick={() =>
              router.push({
                pathname: "/team/[teamId]/board/[articleId]",
                query: {
                  teamId: teamId,
                  articleId: article,
                },
              })
            }
          >
            <div className="article-inner">
              <div>
                <p className="article-head">글 공지입니다.</p>
                <p className="article-sub">공지사항 · 홍길동 · 2024.5.10</p>
              </div>
              <div className="article-info">
                <p className="article-head">{article}</p>
                <p className="article-sub">조회 60</p>
              </div>
            </div>
          </Article>
        ))}
      </Articles>
      <Page>
        {PAGE_MOCK.map((pageNum) => (
          <div
            key={pageNum}
            onClick={() =>
              router.push({
                pathname: "/team/[teamId]/board",
                query: {
                  teamId: teamId,
                  page: pageNum,
                },
              })
            }
          >
            {pageNum}
          </div>
        ))}
      </Page>
    </Container>
  );
}

const MOCK = [1, 10, 12, 14, 16, 8, 9, 28, 4, 2];
const PAGE_MOCK = [1, 2, 3, 4, 5];

const Page = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  gap: 12px;
  div {
    ${FONTS.MD1};
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.gray4};
    border-radius: 8px;

    &:active {
      background-color: ${({ theme }) => theme.gray3};
    }
  }
`;
const Container = styled(BaseContainer)``;
const Articles = styled.div`
  display: flex;
  margin-top: 16px;
  padding: 0 4px;
  flex-direction: column;
`;
const Article = styled.button`
  text-align: left;
  border-top: 1px solid ${({ theme }) => theme.gray3};
  .article-head {
    margin-bottom: 2px;
    ${FONTS.MD1};
  }
  .article-sub {
    ${FONTS.MD3};
    color: ${({ theme }) => theme.gray1};
  }

  .article-info {
    text-align: right;
    .article-head {
      font-weight: 800;
    }
  }

  .article-inner {
    padding: 10px 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:first-of-type {
    border-top: 1px solid transparent;
  }

  &:active > .article-inner {
    ${BUTTON_ACTIVE("transparent")};
  }
`;

const WriteButton = styled.div`
  margin: 0 4px 8px;
  text-align: center;
  border-radius: 8px;
  border: 2px dotted ${({ theme }) => theme.gray2};
  user-select: none;
  p {
    padding: 12px 0;
    color: ${({ theme }) => theme.text};
    opacity: 0.7;
    ${FONTS.MD1};
    font-weight: 800;
  }
  &:active > p {
    ${BUTTON_ACTIVE("transparent")}
  }
`;

export default Board;
