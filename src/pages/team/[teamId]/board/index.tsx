import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import useBgWhite from "@/hook/useBgWhite";
import { usePageTitle } from "@/hook/usePageTitle";
import useStickyMoment from "@/hook/useStickyMoment";

import MainTab from "@/components/Main/MainTab";
import { BaseContainer } from "@/components/common/Container";
import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import { BasicWhiteCard } from "@/components/common/Card";

import ArticlePlus from "@/assets/icon/global/ArticlePlus.svg";

function Board() {
  usePageTitle("팀 게시판");
  useBgWhite();
  const tabRef = useRef<HTMLDivElement>(null);
  useStickyMoment(tabRef);
  const [, setTab] = useState("ALL");
  const router = useRouter();
  const teamId = router.query.teamId;
  const currentPage = router.query.page;

  return (
    <>
      <TabWrapper ref={tabRef}>
        <MainTab
          items={[
            { value: "ALL", name: "전체" },
            { value: "notice", name: "공지사항" },
            { value: "photo", name: "사진" },
            { value: "schedule", name: "일정" },
          ]}
          nowValue={setTab}
        />
      </TabWrapper>
      <FixedArticles>
        {MOCK.slice(0, 3).map((article, index) => (
          <FixedArticle
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
              <label color={index === 0 ? "red" : "blue"}>필독</label>
              <div style={{ flex: 1 }}>
                <p className="article-head">글 공지입니다.</p>
                <p className="article-sub">홍길동 | 2024.5.10</p>
              </div>
              <div className="article-info">
                <p className="article-head">{article}</p>
                <p className="article-sub">조회 60</p>
              </div>
            </div>
          </FixedArticle>
        ))}
      </FixedArticles>
      <Container>
        <Articles>
          <WriteButton
            type="button"
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
            <ArticlePlus /> 새 게시글 올리기
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
    </>
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
const Container = styled(BaseContainer)`
  padding-top: 20px;
  padding-bottom: calc(16px + var(--env-sab));
  background-color: var(--background);
`;
const TabWrapper = styled.div`
  position: sticky;
  margin-top: 12px;
  padding: 4px 16px 0;
  top: 0;
  z-index: 1;

  &.stuck {
    border-bottom: 1px solid rgb(var(--gray-h5));
    padding-bottom: 2px;
    background-color: var(--background-light);
  }
`;
const FixedArticles = styled.div`
  box-shadow: 0 2px 4px 0 rgba(141, 141, 141, 0.25);
`;
const FixedArticle = styled.div`
  border-bottom: 1px solid #e8e8e8;
  .article-inner {
    display: flex;
    padding: 12px 20px;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    ${FONTS.MD1W500}
    ${BUTTON_ACTIVE("transparent")}
  }

  label {
    padding: 0 6px;
    color: #fff;
    border-radius: 5px;
    font-size: 1.4rem;
  }
  label[color="red"] {
    border: 1px solid #890101;
    background-color: var(--sub1);
  }
  label[color="blue"] {
    border: 1px solid #0658a5;
    background-color: var(--main);
  }

  .article-head {
    ${FONTS.MD1};
    font-weight: 800;
  }
  .article-sub {
    font-size: 1.4rem;
    color: rgba(var(--gray-h2), 0.8);
  }

  &:active {
    opacity: 0.9;
  }
`;
const Articles = styled.div`
  display: flex;
  padding: 0 4px;
  flex-direction: column;
  gap: 16px;
`;
const Article = styled(BasicWhiteCard)`
  text-align: left;

  .article-head {
    margin-bottom: 2px;
    ${FONTS.MD1};
    font-weight: 700;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:first-of-type {
    border-top: 1px solid transparent;
  }

  ${BUTTON_ACTIVE("transparent")}
`;

const WriteButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  border-radius: 10px;
  border: 1px dashed rgb(var(--gray-h3));
  color: rgb(var(--gray-h2));
  gap: 8px;
  ${FONTS.MD1};
  font-weight: 400;

  svg {
    width: 36px;
    height: 36px;
  }
  ${BUTTON_ACTIVE("transparent")}
`;

export default Board;
