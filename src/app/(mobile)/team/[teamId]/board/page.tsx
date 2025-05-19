"use client";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";
import { useGet } from "@/apis/hook/query";
import { useHeader } from "@/hook/useHeader";
import useStickyMoment from "@/hook/useStickyMoment";

import { fonts } from "@/styles/fonts.css";
import { baseContainer, baseDividedLine, flexAlignCenter, flexRowGap16, flexRowGap4 } from "@/styles/container.css";
import {
  boardListFixedSection,
  boardListFixedSectionTitle,
  boardListFixedSectionTitleInner,
  boardListPaginationButton,
} from "./_components/teamBoard.css";
import MainTab from "@/components/Main/MainTab";
import { GetTeamBoardListResponse } from "@/types/team";
import ListArticle from "./_components/ListArticle";

import Loading from "@/components/common/Loading";
import Badge from "@/components/common/Badge";
import SearchIcon from "@/assets/icon/common/Search.svg";
import PlusIcon from "@/assets/icon/common/Plus.svg";
import LeftArrowIcon from "@/assets/icon/arrow/LeftArrow.svg";
import RightArrowIcon from "@/assets/icon/arrow/RightArrow.svg";
import SearchPopup from "./_components/SearchPopup";

function Board() {
  const [showSearch, setShowSearch] = useState(false);
  const params = useParams();
  const teamId = params["teamId"];
  const searchParams = useSearchParams();

  useHeader({
    title: "게시판",
    subIcons: [
      {
        svgIcon: <SearchIcon />,
        onClick: () => {
          setShowSearch((prev) => !prev);
        },
        description: "검색",
      },
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

  return (
    <>
      {showSearch && <SearchPopup setShow={setShowSearch} />}
      <TabWrapper ref={tabRef}>
        <MainTab
          padding={16}
          type="line"
          color="primary"
          sameWidth
          items={[
            { value: "1", name: "게시판" },
            { value: "2", name: "갤러리" },
          ]}
          nowValue={setTab}
        />
      </TabWrapper>
      <div className={boardListFixedSection}>
        {MOCK.slice(0, 3).map((article) => (
          <Link key={article} className={boardListFixedSectionTitle} href={`/team/${teamId}/board/${article}`}>
            <div className={boardListFixedSectionTitleInner}>
              <Badge type="red" size="small">
                공지
              </Badge>
              <span className={fonts.body4.medium}>글 공지입니다.</span>
            </div>
          </Link>
        ))}
      </div>
      <div className={baseDividedLine} />
      <section className={baseContainer} style={{ backgroundColor: "var(--gray50)" }}>
        <Articles>
          {isLoading ? (
            <Loading />
          ) : (
            data?.board?.map((article) => <ListArticle key={article.articleId} {...article} />)
          )}
        </Articles>

        <div
          className={clsx(flexRowGap16, flexAlignCenter)}
          style={{
            padding: "20px 0 0",
            justifyContent: "center",
          }}
        >
          <LeftArrowIcon width={24} height={24} fill="var(--gray700)" />
          <div className={flexRowGap4}>
            {PAGE_MOCK.map((pageNum) => (
              <button
                type="button"
                className={boardListPaginationButton}
                data-active={currentPage === String(pageNum)}
                key={pageNum}
                onClick={() => updatePaging(String(pageNum))}
              >
                {pageNum}
              </button>
            ))}
          </div>
          <RightArrowIcon width={24} height={24} fill="var(--gray700)" />
        </div>
      </section>
    </>
  );
}

const MOCK = [1, 10, 12, 14, 16, 8, 9, 28, 4, 2];
const PAGE_MOCK = [1, 2, 3, 4, 5];

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

const Articles = styled.div`
  display: flex;
  margin: 0 -20px;
  min-height: 120px;
  flex-direction: column;
  background-color: var(--background-light);
`;

export default Board;
