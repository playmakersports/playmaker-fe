import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useSearch } from "@tanstack/react-router";
import { c as useInfiniteGet } from "./query-Ciubt76c.js";
import { c as atomHeaderDisplay, u as useHeader } from "./useHeader-yY41oJF1.js";
import { u as useStickyMoment } from "./useStickyMoment-DIRi6KdR.js";
import { flatMap } from "es-toolkit";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { c as flexColumnGap16, e as flexColumnGap8, d as flexColumnGap4, l as flexAlignCenter, k as flexRowGap4, p as flexRowGap10, m as flexSpaceBetween, x as baseDividedLine } from "./container.css-C2ezn6CH.js";
import { S as Spinner, b as boardArticleListContainer, a as boardListFixedSection, c as boardListFixedSectionTitle, d as boardEmptyArticleArea } from "./Spinner-BA0cYQat.js";
import { M as MainTab } from "./MainTab-DOXli7NZ.js";
import clsx from "clsx";
import { a as formattedDate } from "./date-DKPo_LKv.js";
import { B as Badge } from "./Badge-CVtyNCaL.js";
import { c as colors, o as omittedText, s as semantic } from "./color.css-BLEreRIo.js";
import { C as CommentIcon } from "./Chat-DatnR1Um.js";
import { E as EyeIcon, B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import { useSetAtom } from "jotai";
import { L as LeftDirection } from "./LeftDirection-DmrmcEV0.js";
import { j as boardAPI } from "./authToken-Bx9YTtw3.js";
import { P as PlusFloat } from "./PlusFloat-CUJwxAcR.js";
import { B as BoardTypeEnums } from "./enums-D9SRQWnw.js";
import { S as SearchIcon } from "./Search-DrxoJQ2v.js";
import { e as Route } from "./router-mwjOH7mt.js";
import "@tanstack/react-query";
import "@vanilla-extract/css";
import "./common-6ceLbjxn.js";
import "date-fns";
import "./Wrapper-DpW65hF8.js";
import "./InputWrapper-CgYCSwII.js";
import "./container.css-DZr6lpKA.js";
import "./Close20-w_89MMCP.js";
import "cookies-next";
import "axios";
import "./Plus-CBBY8JMW.js";
import "@microsoft/clarity";
function ListArticle(props) {
  const CATEGORY_NAME = {
    1: "공지사항",
    2: "자유게시판",
    3: "갤러리"
  };
  return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs(Link, { to: `/team/${props.teamId}/board/${props.id}`, className: flexColumnGap16, children: [
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap8, children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Badge, { type: "gray", size: "medium", children: CATEGORY_NAME[props.boardType] }) }),
      /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, children: [
        /* @__PURE__ */ jsx("p", { className: fonts.body3.semibold, children: props.title }),
        /* @__PURE__ */ jsx("p", { className: clsx(fonts.body4.regular, colors.gray500, omittedText), children: props.content.replace(/<[^>]*>/g, " ").slice(0, 60) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: clsx(flexAlignCenter, flexSpaceBetween), children: [
      /* @__PURE__ */ jsxs("div", { className: clsx(fonts.caption1.regular, flexAlignCenter, colors.gray400), style: { gap: "6px" }, children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: props.createBy.imageUrl,
            alt: props.createBy.memberName,
            width: 20,
            height: 20,
            style: { borderRadius: "50%" }
          }
        ),
        /* @__PURE__ */ jsx("span", { className: colors.gray500, children: props.createBy.memberName }),
        /* @__PURE__ */ jsx("span", { className: "circle" }),
        formattedDate(new Date(props.createAt), {
          displayDateType: "kr",
          displayDayName: "hide",
          displayYear: "not-this-year",
          displayTime: "12h-kr",
          displaySimpleKR: true
        })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap10, flexAlignCenter), children: [
        /* @__PURE__ */ jsxs("p", { className: clsx(flexRowGap4, fonts.caption1.regular, colors.gray500, flexAlignCenter), children: [
          /* @__PURE__ */ jsx(CommentIcon, { width: 18, height: 18, fill: "var(--gray400)" }),
          props.commentCount ?? 0
        ] }),
        /* @__PURE__ */ jsxs("p", { className: clsx(flexRowGap4, fonts.caption1.regular, colors.gray500, flexAlignCenter), children: [
          /* @__PURE__ */ jsx(EyeIcon, { width: 18, height: 18, fill: "var(--gray400)" }),
          props.viewCount ?? 0
        ] })
      ] })
    ] })
  ] }) });
}
const Wrapper = styled.div`
  padding: 20px 16px;
  background-color: var(--white);
  border-bottom: 1px solid var(--gray200);

  a {
    transition: transform 0.2s;
    &:active {
      transform: scale(0.98);
    }
  }
  span.circle {
    display: inline-block;
    width: 4px;
    height: 4px;
    background-color: var(--gray300);
    border-radius: 50%;
  }
`;
function SearchPopup({ setShow }) {
  const setDisplayHeader = useSetAtom(atomHeaderDisplay);
  const [keyword, setKeyword] = React.useState("");
  useEffect(() => {
    setDisplayHeader(false);
    return () => {
      setDisplayHeader(true);
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        top: 0,
        position: "fixed",
        padding: "var(--env-sat) var(--global-lr-padding) 0",
        width: "100%",
        maxWidth: "var(--mobile-max-width)",
        height: "calc(100vh - 1px)",
        zIndex: 901,
        backgroundColor: "var(--background-light)",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap10, flexAlignCenter), style: { height: "var(--header-height)" }, children: [
          /* @__PURE__ */ jsx("button", { type: "button", "aria-label": "검색창 닫기", onClick: () => setShow(false), children: /* @__PURE__ */ jsx(LeftDirection, { width: 24, height: 24 }) }),
          /* @__PURE__ */ jsx("div", { style: { flex: 1 }, children: /* @__PURE__ */ jsx(
            BasicInput,
            {
              width: "100%",
              iconType: "search",
              delButton: true,
              type: "text",
              value: keyword,
              onChange: (e) => setKeyword(e.target.value),
              placeholder: "검색어를 입력하세요.",
              autoFocus: true,
              className: fonts.body3.regular
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, style: { marginTop: "16px" }, children: [
          /* @__PURE__ */ jsx("p", { className: fonts.body4.medium, children: "최근 검색어" }),
          /* @__PURE__ */ jsx("p", { className: semantic.description, style: { textAlign: "center" }, children: "최근 검색 내역이 없습니다." })
        ] })
      ]
    }
  );
}
function InfiniteQueryTrigger(props) {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, threshold, finishText } = props;
  const targetRef = useRef(null);
  useEffect(() => {
    if (!hasNextPage) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      },
      {
        threshold
      }
    );
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [hasNextPage, fetchNextPage, threshold]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: targetRef,
      style: {
        display: "flex",
        justifyContent: "center",
        padding: "24px 0 32px",
        minHeight: "24px"
      },
      children: [
        isFetchingNextPage && /* @__PURE__ */ jsx(Spinner, { size: 36 }),
        !hasNextPage && !isFetchingNextPage && /* @__PURE__ */ jsx("p", { className: semantic.description, children: finishText })
      ]
    }
  );
}
function Board() {
  const [showSearch, setShowSearch] = useState(false);
  const {
    teamId
  } = Route.useParams();
  const {
    keyword: currentKeyword
  } = useSearch({
    from: "/team/$teamId/board/"
  });
  useHeader({
    title: "게시판",
    subIcons: [{
      svgIcon: /* @__PURE__ */ jsx(SearchIcon, {}),
      onClick: () => {
        setShowSearch((prev) => !prev);
      },
      description: "검색"
    }]
  });
  const tabRef = useRef(null);
  useStickyMoment(tabRef);
  const [boardType, setTab] = useState("0");
  const boardParams = {
    boardType: boardType === "0" ? void 0 : boardType,
    teamId
  };
  const {
    data,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useInfiniteGet(`${boardAPI.BOARDS}`, boardParams);
  const flatData = flatMap(data?.pages ?? [], (page) => page.items, 1);
  console.log("data", data);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showSearch && /* @__PURE__ */ jsx(SearchPopup, { setShow: setShowSearch }),
    /* @__PURE__ */ jsx(PlusFloat, { linkTo: `/team/${teamId}/board/editor?type=new`, blind: "글 작성" }),
    /* @__PURE__ */ jsx(TabWrapper, { ref: tabRef, children: /* @__PURE__ */ jsx(MainTab, { padding: 16, type: "line", color: "primary", sameWidth: true, items: [{
      value: "0",
      name: "전체"
    }, {
      value: "1",
      name: "공지사항"
    }, {
      value: "2",
      name: "자유게시판"
    }, {
      value: "3",
      name: "갤러리"
    }], nowValue: setTab }) }),
    data && flatData.length > 0 ? /* @__PURE__ */ jsxs("div", { className: boardArticleListContainer, children: [
      boardType === "0" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: boardListFixedSection, children: flatData.filter((v) => v.boardType === BoardTypeEnums.NOTICE).map((article) => /* @__PURE__ */ jsxs(Link, { onContextMenu: (e) => e.preventDefault(), className: boardListFixedSectionTitle, to: `/team/${teamId}/board/${article.id}`, children: [
          /* @__PURE__ */ jsx(Badge, { type: "red", size: "medium", fillType: "light", children: "공지" }),
          /* @__PURE__ */ jsx("span", { className: fonts.body4.regular, children: article.title })
        ] }, `${article.teamId}${article.id}`)) }),
        /* @__PURE__ */ jsx("div", { className: baseDividedLine })
      ] }),
      /* @__PURE__ */ jsx("section", { style: {
        backgroundColor: "var(--gray50)"
      }, children: flatData.filter((v) => boardType === "0" ? v.boardType !== BoardTypeEnums.NOTICE : true).map((article) => /* @__PURE__ */ jsx(ListArticle, { ...article }, article.id)) }),
      /* @__PURE__ */ jsx(InfiniteQueryTrigger, { fetchNextPage, isFetchingNextPage, threshold: 0.5, hasNextPage, finishText: "게시글을 모두 불러왔어요" })
    ] }) : isLoading ? /* @__PURE__ */ jsx(Loading, { page: true }) : /* @__PURE__ */ jsxs("div", { className: boardEmptyArticleArea, children: [
      "게시글이 존재하지 않습니다.",
      /* @__PURE__ */ jsx("br", {}),
      "첫 번째 게시글의 주인공이 되어보세요!"
    ] })
  ] });
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
export {
  Board as component
};
