"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { useGet } from "@/apis/hook/query";
import { useHeader } from "@/hook/useHeader";
import useStickyMoment from "@/hook/useStickyMoment";
import { usePopup } from "@/components/common/global/PopupProvider";

import { FONTS } from "@/styles/common";
import MainTab from "@/components/Main/MainTab";
import { BaseContainer } from "@/components/common/Container";
import { BasicInput } from "@/components/common/input/BaseInput";
import { GetTeamBoardListResponse } from "@/types/team";
import ListArticle from "./_components/ListArticle";

import PlusIcon from "@/assets/icon/common/Plus.svg";
import Loading from "@/components/common/Loading";
import Button from "@/components/common/Button";

function Board() {
  const router = useRouter();
  const params = useParams();
  const teamId = params["teamId"];
  const popup = usePopup();
  const searchParams = useSearchParams();

  useHeader({
    title: "게시판",
    subIcons: [
      {
        svgIcon: <PlusIcon />,
        onClick: `/team/${teamId}/board/editor?type=new`,
        description: "새 게시글",
      },
    ],
  });

  const tabRef = useRef<HTMLDivElement>(null);
  useStickyMoment(tabRef);
  const [, setTab] = useState("ALL");
  const currentPage = searchParams.get("page") || "1";
  const currentKeyword = searchParams.get("keyword") || "";

  const { data, isLoading, isError, refetch } = useGet<GetTeamBoardListResponse>(`/api/board/team/${teamId}`, {
    page: currentPage,
    keyword: currentKeyword,
  });

  const updatePaging = (page: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };
  const updateKeyword = (keyword: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("keyword", keyword);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  useEffect(() => {
    const showErrorPopup = async () => {
      const isConfirm = await popup?.confirm("서버 문제 혹은 네트워크가 연결되지 않은 상태일 수 있습니다.", {
        title: "게시글을 불러오지 못했습니다.",
        showIcon: true,
        buttonText: {
          yes: "닫기",
          no: "재시도",
        },
      });

      if (!isConfirm) {
        refetch();
      }
    };
    if (isError) {
      showErrorPopup();
    }
  }, [isError]);

  return (
    <>
      <TabWrapper ref={tabRef}>
        <MainTab
          padding={16}
          type="line"
          color="primary"
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
            <button
              type="button"
              data-active={currentPage === String(pageNum)}
              key={pageNum}
              onClick={() => updatePaging(String(pageNum))}
            >
              {pageNum}
            </button>
          ))}
        </Page>
        <Search
          onSubmit={(e) => {
            e.preventDefault();
            updateKeyword(e.currentTarget.keyword.value);
          }}
        >
          <div style={{ flex: 1 }}>
            <BasicInput type="text" iconType="search" id="keyword" />
          </div>
          <Button type="submit" size="small" mode="gray" fillType="light">
            검색
          </Button>
        </Search>
      </Container>
    </>
  );
}

const MOCK = [1, 10, 12, 14, 16, 8, 9, 28, 4, 2];
const PAGE_MOCK = [1, 2, 3, 4, 5];

const Container = styled(BaseContainer)`
  padding-top: 0;
  padding-bottom: calc(16px + var(--env-sab));
`;
const TabWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  transition: padding 0.2s;

  &.stuck {
    padding: 6px 0 0;
    box-shadow: var(--shadow-xs);
    background-color: var(--background-light);
  }
`;
const FixedArticles = styled.div``;
const FixedArticle = styled.div`
  border-bottom: 1px solid var(--gray200);
  color: var(--gray700);

  div.article-inner {
    cursor: pointer;
    display: flex;
    padding: 10px 16px;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  p.article-head {
    margin-bottom: 4px;
    ${FONTS.body4("semibold")};
  }
  p.article-sub {
    color: var(--gray500);
    ${FONTS.caption1("regular")};
  }
`;
const Articles = styled.div`
  display: flex;
  min-height: 120px;
  margin: 0 0 16px;
  flex-direction: column;
`;

const Search = styled.form`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  padding: 0 15%;
`;
const Page = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  gap: 12px;

  button {
    ${FONTS.body3("regular")};
    padding: 8px 16px;
    background-color: var(--primary50);
    border-radius: 6px;
    user-select: none;

    &:active {
      background-color: var(--primary100);
    }
    &[data-active="true"] {
      color: #fff;
      background-color: var(--primary500);
      ${FONTS.body4("semibold")};
    }
  }
`;

export default Board;
