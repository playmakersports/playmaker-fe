"use client";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";
import { useGet } from "@/apis/hook/query";
import { useHeader } from "@/hook/useHeader";
import useStickyMoment from "@/hook/useStickyMoment";

import { fonts } from "@/styles/fonts.css";
import { baseDividedLine } from "@/styles/container.css";
import { boardListFixedSection, boardListFixedSectionTitle } from "./_components/teamBoard.css";
import MainTab from "@/components/Main/MainTab";
import { GetTeamBoardListResponse } from "@/types/team";
import ListArticle from "./_components/ListArticle";
import Loading from "@/components/common/Loading";
import Badge from "@/components/common/Badge";
import SearchPopup from "./_components/SearchPopup";
import { boardAPI } from "@/apis/url";
import PlusFloat from "@/components/common/PlusFloat";

import SearchIcon from "@/assets/icon/common/Search.svg";

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
    ],
  });

  const tabRef = useRef<HTMLDivElement>(null);
  useStickyMoment(tabRef);
  const [boardType, setTab] = useState("0");
  const currentKeyword = searchParams.get("keyword") || "";

  const boardParams: { [key: string]: string } =
    boardType !== "0"
      ? {
          boardType,
          teamId: teamId as string,
        }
      : { teamId: teamId as string };
  const { data, isLoading, isError, refetch } = useGet<GetTeamBoardListResponse>(`${boardAPI.BOARDS}`, boardParams);

  const updateKeyword = (keyword: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("keyword", keyword);
    window.history.replaceState(null, "", `?${params.toString()}`);
  };

  return (
    <>
      {showSearch && <SearchPopup setShow={setShowSearch} />}
      <PlusFloat linkTo={`/team/${teamId}/board/editor?type=new`} blind="글 작성" />
      <TabWrapper ref={tabRef}>
        <MainTab
          padding={16}
          type="line"
          color="primary"
          sameWidth
          items={[
            { value: "0", name: "전체" },
            { value: "1", name: "공지사항" },
            { value: "2", name: "자유게시판" },
            { value: "3", name: "갤러리" },
          ]}
          nowValue={setTab}
        />
      </TabWrapper>
      {data && data.length > 0 ? (
        <div style={{ paddingBottom: "var(--safe-bottom-navigation)" }}>
          <div className={boardListFixedSection}>
            {MOCK.slice(0, 3).map((article) => (
              <Link
                onContextMenu={(e) => e.preventDefault()}
                key={article}
                className={boardListFixedSectionTitle}
                href={`/team/${teamId}/board/${article}`}
              >
                <Badge type="red" size="small" fillType="light">
                  공지
                </Badge>
                <span className={fonts.caption1.regular}>글 공지입니다.</span>
              </Link>
            ))}
          </div>
          <div className={baseDividedLine} />
          <section style={{ backgroundColor: "var(--gray50)" }}>
            {data?.map((article) => (
              <ListArticle key={article.id} {...article} />
            ))}
          </section>
        </div>
      ) : isLoading ? (
        <Loading page />
      ) : (
        <div
          className={fonts.caption1.regular}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - var(--header-height) - 40px - var(--navigation-height))",
            backgroundColor: "var(--gray50)",
            color: "var(--gray400)",
            textAlign: "center",
          }}
        >
          게시글이 존재하지 않습니다.
          <br />
          첫번째 게시글의 주인공이 되어보세요!
        </div>
      )}
    </>
  );
}

const MOCK = [1, 10, 12, 14, 16, 8, 9, 28, 4, 2];

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

export default Board;
