"use client";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";
import { useInfiniteGet } from "@/apis/hook/query";
import { useHeader } from "@/hook/useHeader";
import useStickyMoment from "@/hook/useStickyMoment";
import { flatMap } from "es-toolkit";

import { fonts } from "@/styles/fonts.css";
import { baseDividedLine } from "@/styles/container.css";
import {
  boardArticleListContainer,
  boardEmptyArticleArea,
  boardListFixedSection,
  boardListFixedSectionTitle,
} from "./_components/teamBoard.css";
import MainTab from "@/components/Main/MainTab";
import { GetTeamBoardListResponse, TeamBoardItemType } from "@/types/team";
import ListArticle from "./_components/ListArticle";
import Loading from "@/components/common/Loading";
import Badge from "@/components/common/Badge";
import SearchPopup from "./_components/SearchPopup";
import { boardAPI } from "@/apis/url";
import PlusFloat from "@/components/common/PlusFloat";
import { BoardTypeEnums } from "@/apis/enums/enums";

import SearchIcon from "@/assets/icon/common/Search.svg";
import InfiniteQueryTrigger from "@/components/common/InfiniteQueryTrigger";

function Board() {
  const [showSearch, setShowSearch] = useState(false);
  const params = useParams();
  const teamId = params["teamId"] as string;
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

  const boardParams = {
    boardType: boardType === "0" ? undefined : boardType,
    teamId: teamId,
  };
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteGet<TeamBoardItemType[]>(
    `${boardAPI.BOARDS}`,
    boardParams
  );

  const updateKeyword = (keyword: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("keyword", keyword);
    window.history.replaceState(null, "", `?${params.toString()}`);
  };

  const flatData = flatMap(data?.pages ?? [], (page) => page.items, 1);

  console.log("data", data);

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
      {data && flatData.length > 0 ? (
        <div className={boardArticleListContainer}>
          {boardType === "0" && (
            <>
              <div className={boardListFixedSection}>
                {flatData
                  .filter((v) => v.boardType === BoardTypeEnums.NOTICE)
                  .map((article) => (
                    <Link
                      onContextMenu={(e) => e.preventDefault()}
                      key={`${article.teamId}${article.id}`}
                      className={boardListFixedSectionTitle}
                      href={`/team/${teamId}/board/${article.id}`}
                    >
                      <Badge type="red" size="medium" fillType="light">
                        공지
                      </Badge>
                      <span className={fonts.body4.regular}>{article.title}</span>
                    </Link>
                  ))}
              </div>
              <div className={baseDividedLine} />
            </>
          )}
          <section style={{ backgroundColor: "var(--gray50)" }}>
            {flatData
              .filter((v) => (boardType === "0" ? v.boardType !== BoardTypeEnums.NOTICE : true))
              .map((article) => (
                <ListArticle key={article.id} {...article} />
              ))}
          </section>
          <InfiniteQueryTrigger
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            threshold={0.5}
            hasNextPage={hasNextPage}
            finishText="게시글을 모두 불러왔어요"
          />
        </div>
      ) : isLoading ? (
        <Loading page />
      ) : (
        <div className={boardEmptyArticleArea}>
          게시글이 존재하지 않습니다.
          <br />첫 번째 게시글의 주인공이 되어보세요!
        </div>
      )}
    </>
  );
}

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
