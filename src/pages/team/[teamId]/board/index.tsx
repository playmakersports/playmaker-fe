import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import useBgWhite from "@/hook/useBgWhite";
import { usePageTitle } from "@/hook/usePageTitle";
import useStickyMoment from "@/hook/useStickyMoment";

import MainTab from "@/components/Main/MainTab";
import { BaseContainer } from "@/components/common/Container";
import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import { BasicWhiteCard } from "@/components/common/Card";

import PlusIcon from "@/assets/icon/global/Plus.svg";
import { BasicInput } from "@/components/common/Input";

function Board({ teamId }: { teamId: string }) {
  const router = useRouter();

  usePageTitle({
    title: "게시판",
    scrolledShadow: false,
    subIcons: [
      {
        svgIcon: <PlusIcon />,
        linkTo: `/team/${teamId}/board/editor?type=new`,
        description: "새 게시글",
      },
    ],
  });
  useBgWhite();
  const tabRef = useRef<HTMLDivElement>(null);
  useStickyMoment(tabRef);
  const [, setTab] = useState("ALL");
  const currentPage = router.query.page;

  return (
    <>
      <Search>
        <BasicInput type="text" search />
      </Search>
      <TabWrapper ref={tabRef}>
        <MainTab
          items={[
            { value: "ALL", name: "전체" },
            { value: "notice", name: "공지" },
            { value: "free", name: "자유" },
            { value: "introduce", name: "가입인사" },
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
                  <p className="article-sub">공지사항 · 홍길동 · 2024.7.20</p>
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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { teamId } = context.params as { teamId: string };
  return {
    props: {
      teamId,
    },
  };
};

const MOCK = [1, 10, 12, 14, 16, 8, 9, 28, 4, 2];
const PAGE_MOCK = [1, 2, 3, 4, 5];

const Search = styled.div`
  display: flex;
  padding: 12px 16px 0px;
`;
const Page = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: center;
  gap: 12px;

  div {
    ${FONTS.MD1};
    padding: 8px 12px;
    background-color: var(--background-light);
    border-radius: 8px;
    user-select: none;

    &:active {
      color: #fff;
      background-color: var(--main);
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
  transition: padding 0.2s;

  &.stuck {
    padding: 6px 16px 8px;
    box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.1);
    background-color: var(--background-light);
  }
`;
const FixedArticles = styled.div``;
const FixedArticle = styled.div`
  border-bottom: 1px solid var(--gray300);
  .article-inner {
    display: flex;
    padding: 12px 20px;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    ${FONTS.MD1W500}
  }

  label {
    color: #fff;
    padding: 0 6px;
    border-radius: 4px;
    font-size: 1.4rem;
  }
  label[color="red"] {
    background-color: var(--point);
  }
  label[color="blue"] {
    background-color: var(--main);
  }

  .article-head {
    ${FONTS.MD1};
    font-weight: 600;
  }
  .article-sub {
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--gray700);
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
    margin-bottom: 8px;
    ${FONTS.MD1};
  }
  .article-sub {
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--gray700);
  }
  .article-info {
    text-align: right;
    .article-head {
      font-weight: 600;
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

  ${BUTTON_ACTIVE("var(--background-light)")}
`;

const WriteButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  border-radius: 10px;
  border: 1px dashed var(--gray500);
  color: var(--gray800);
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
