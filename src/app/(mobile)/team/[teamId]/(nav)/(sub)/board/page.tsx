"use client";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { useGet } from "@/apis/hook/query";
import { usePageTitle } from "@/hook/usePageTitle";
import useStickyMoment from "@/hook/useStickyMoment";

import { FONTS } from "@/styles/common";
import MainTab from "@/components/Main/MainTab";
import { BaseContainer } from "@/components/common/Container";
import { BasicInput } from "@/components/common/input/BaseInput";
import { GetTeamBoardListResponse } from "@/types/team";
import ListArticle from "./_components/ListArticle";

import PlusIcon from "@/assets/icon/global/Plus.svg";
import Loading from "@/components/common/Loading";

function Board() {
  const router = useRouter();
  const params = useParams();
  const teamId = params["teamId"];
  const searchParams = useSearchParams();

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

  const tabRef = useRef<HTMLDivElement>(null);
  useStickyMoment(tabRef);
  const [, setTab] = useState("ALL");
  const currentPage = searchParams.get("page") || "1";

  const { data, isLoading } = useGet<GetTeamBoardListResponse>(`/api/board/team/${teamId}`, { page: currentPage });
  const updatePaging = (page: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <>
      <Search>
        <BasicInput type="text" iconType="search" />
      </Search>
      <TabWrapper ref={tabRef}>
        <MainTab
          items={[
            { value: "ALL", name: "전체" },
            { value: "1", name: "공지사항" },
            { value: "2", name: "자유" },
            { value: "3", name: "가입인사" },
            { value: "4", name: "경기" },
          ]}
          nowValue={setTab}
        />
      </TabWrapper>
      <FixedArticles>
        {MOCK.slice(0, 3).map((article) => (
          <FixedArticle key={article} onClick={() => router.push(`/team/${teamId}/board/${article}`)}>
            <div className="article-inner">
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
          {isLoading ? (
            <Loading />
          ) : (
            data?.board?.map((article) => <ListArticle key={article.articleId} {...article} />)
          )}
        </Articles>

        <Page>
          {PAGE_MOCK.map((pageNum) => (
            <button type="button" key={pageNum} onClick={() => updatePaging(String(pageNum))}>
              {pageNum}
            </button>
          ))}
        </Page>
      </Container>
    </>
  );
}

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

  button {
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
  flex-direction: column;
  gap: 12px;
`;

export default Board;
