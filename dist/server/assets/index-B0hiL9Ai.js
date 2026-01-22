import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { a as usePost, u as useGet } from "./query-Ciubt76c.js";
import styled, { keyframes } from "styled-components";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { intervalToDuration, formatDate, format, differenceInDays, startOfWeek, addDays } from "date-fns";
import React, { useState, useEffect } from "react";
import { useRouter, useParams, Link } from "@tanstack/react-router";
import { F as FONTS, T as TEXT_ACTIVE } from "./common-6ceLbjxn.js";
import { A as AlertFilledIcon } from "./AlertFilled-JvwFT9H1.js";
import { h as baseContainer, o as baseCardContainer, p as flexRowGap10, a as flexColumnGap20, g as flexColumnGap10, k as flexRowGap4, r as flexRowGap12, c as flexColumnGap16, n as flexRowGap8, d as flexColumnGap4, l as flexAlignCenter, y as flexSpaceEvenly, f as flexColumnGap12, j as baseDividedLineChild } from "./container.css-C2ezn6CH.js";
import { t as teamMainTopBanner, a as teamMainTopInfoList, b as teamMainTopInfoListItem, c as teamMainTopHeader, d as teamMainTextWithIcon, e as teamMainMatchTeamContainer, f as teamMainMatchTeamName, g as teamMainMatchTeamScoreBox, h as teamMainMatchResultBox, i as teamMainMatchResultBoxLose, j as teamMainMatchResultBoxWin, k as teamMainMatchTeamScoreContainer, l as teamMainMatchTeamScoreContainerLose, m as teamMainMatchTeamScoreContainerWin, n as teamMainScheduleItem, o as teamMainBoardListImage, p as teamMainRecentVoteList, R as RecentVoteCard, q as teamMainRecentVoteCard, r as teamMainRecentVoteContainer, s as teamMainDataCardTitle, u as teamMainDataSummary, v as teamMainContentsGroup } from "./RecentVoteCard-BOrv2so7.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { L as LocationPinIcon } from "./LocationPin-DegDBbH0.js";
import { I as IdentifyIcon } from "./IdCard-DHy0MnbB.js";
import { P as PeopleIcon } from "./People-dk9UROdd.js";
import { C as CalendarIcon } from "./Calendar-CZ4mMM-F.js";
import clsx from "clsx";
import { C as Chip } from "./Chip-Bq9i_bIn.js";
import { B as Badge } from "./Badge-CVtyNCaL.js";
import { C as ClockIcon } from "./Clock-Bj0T6dbi.js";
import { a as formattedDate } from "./date-DKPo_LKv.js";
import { H as HeartIcon } from "./Heart-MAVvv3Fe.js";
import { C as CommentIcon } from "./Chat-DatnR1Um.js";
import { G as GroupTitle } from "./GroupTitle-BCFfFyEu.js";
import { Swiper, SwiperSlide } from "swiper/react";
/* empty css                */
import { B as Button } from "./Button-cLlpCM0x.js";
import { P as ProgressCircle, a as ProgressCircleTrophyWrapper, T as TrophyIcon, d as ThumbUpIcon, e as ThumbDownIcon, C as CheerIcon } from "./Cheer-ZbFWKFg0.js";
import { i as teamJoinAPI, t as teamAPI } from "./authToken-Bx9YTtw3.js";
import { F as FloatButton } from "./FloatButton-pCr3Cp-L.js";
import { u as useModal } from "./useModal--yzWVOVY.js";
import { T as TextArea } from "./TextArea-C-rWbjLd.js";
import { u as usePopup } from "./PopupProvider-CCXZDelm.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import { g as Route } from "./router-mwjOH7mt.js";
import "@tanstack/react-query";
import "jotai";
import "@vanilla-extract/css";
import "react-hook-form";
import "./common-BU27Mq6v.js";
import "./Check-xgghRidd.js";
import "./RightDirection-DCcZ277n.js";
import "./Close20-w_89MMCP.js";
import "cookies-next";
import "axios";
import "./Portal-D4P9dmtA.js";
import "react-dom";
import "@number-flow/react";
import "./Wrapper-DpW65hF8.js";
import "./InputWrapper-CgYCSwII.js";
import "./container.css-DZr6lpKA.js";
import "@microsoft/clarity";
function TeamNotice({ list }) {
  const router = useRouter();
  const params = useParams({ strict: false });
  const teamId = params["teamId"];
  const [order, setOrder] = useState(0);
  const ANIMATE_INTERVAL = 3e3;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setOrder((prev) => {
        if (prev === list.length) return 0;
        return (prev + 1) % list.length;
      });
    }, ANIMATE_INTERVAL);
    return () => clearInterval(intervalId);
  }, []);
  return /* @__PURE__ */ jsx(Container$2, { children: /* @__PURE__ */ jsx(Display, { children: list.map((item, index) => {
    const dateInterval = intervalToDuration({
      start: new Date(item.createAt),
      end: /* @__PURE__ */ new Date()
    });
    const isWithin24H = !dateInterval.years && !dateInterval.months && !dateInterval.days;
    return /* @__PURE__ */ jsx(
      Item,
      {
        onClick: () => router.navigate({ to: `/team/${teamId}/board/${item.articleId}` }),
        className: order === index ? "current" : order === 0 && list.length - 1 === index || order - 1 === index ? "prev" : "next",
        children: /* @__PURE__ */ jsxs(Wrapper, { children: [
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsxs("span", { className: "category", children: [
              /* @__PURE__ */ jsx(AlertFilledIcon, {}),
              " 공지"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "title", children: item.title })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "create-at", children: isWithin24H ? dateInterval.hours ?? 0 > 0 ? `${dateInterval.hours}시간 전` : (dateInterval.hours ?? true) && (dateInterval.minutes ?? 0 > 0) ? `${dateInterval.minutes}분 전` : "방금" : item.createAt.split("T")[0] })
        ] })
      },
      item.articleId
    );
  }) }) });
}
const Container$2 = styled.div`
  padding: 10px 12px;
  background-color: var(--primary50);
  border-radius: 8px;
`;
const Display = styled.div`
  position: relative;
  display: flex;
  height: 1.8rem;
  overflow: hidden;
  align-items: center;
`;
const Item = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 1.8rem;
  transform: translate3d(0, -100%, 0);
  align-items: center;

  &.prev {
    transform: translate3d(0, -100%, 0);
    transition: transform 0.4s ease;
  }
  &.current {
    transform: translate3d(0, 0, 0);
    transition: transform 0.4s ease;
  }
  &.next {
    transform: translate3d(0, 100%, 0);
  }

  p {
    display: flex;
    gap: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .category {
    ${FONTS.caption1("semibold")};
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--primary500);
    svg {
      width: 18px;
      height: 18px;
      fill: var(--primary500);
    }
  }
  .title {
    ${FONTS.caption1("medium")};
    color: var(--gray700);
  }
  .create-at {
    ${FONTS.caption1("regular")};
    color: var(--gray400);
  }
`;
const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 2rem;
  user-select: none;

  ${TEXT_ACTIVE("transparent", { scalable: true })};
`;
function TeamMainLogo({ text = "", imgSrc }) {
  return /* @__PURE__ */ jsxs(Container$1, { children: [
    text && /* @__PURE__ */ jsx(Playing, { "data-text": text }),
    /* @__PURE__ */ jsx(RoundWrapper, { $playing: text !== "", children: /* @__PURE__ */ jsx(ProfileImg, { src: imgSrc, $playing: text !== "", alt: "팀 프로필 이미지" }) })
  ] });
}
const rotateCircle = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
`;
const Container$1 = styled.div`
  position: relative;
  width: 58px;
  height: 58px;
`;
const RoundWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  border-radius: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    display: ${({ $playing }) => $playing ? "block" : "none"};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--main);
    background: linear-gradient(var(--main) 0%, #10bfff 45%, #90d621 95%);
    animation: ${rotateCircle} 2s linear infinite;
  }
`;
const ProfileImg = styled.img`
  margin: ${({ $playing }) => $playing ? "3px" : "0"};
  border: 4px solid var(--background-light);
  border: ${({ $playing }) => $playing ? "" : "1px solid var(--gray300)"};
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  z-index: 1;
  border-radius: 100%;
  object-fit: cover;
  background-color: #fff;
`;
const Playing = styled.p`
  ${FONTS.caption1("semibold")};
  font-size: 1.2rem;
  position: absolute;
  padding: 3px 8px;
  border-radius: 6px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary500);
  border: 2px solid var(--background-light);
  color: #fff;
  z-index: 2;
  word-break: keep-all;
  &::before {
    content: attr(data-text);
  }
`;
function TeamMainTop(props) {
  const bgUrl = `https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
  useHeader({
    title: props.teamName
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: teamMainTopBanner, style: { backgroundImage: `url(${bgUrl})` }, children: /* @__PURE__ */ jsxs("ul", { className: teamMainTopInfoList, children: [
      /* @__PURE__ */ jsxs("li", { className: teamMainTopInfoListItem, children: [
        /* @__PURE__ */ jsx(LocationPinIcon, {}),
        props.activeArea
      ] }),
      /* @__PURE__ */ jsxs("li", { className: teamMainTopInfoListItem, children: [
        /* @__PURE__ */ jsx(IdentifyIcon, {}),
        " ",
        props.teamLeaderName
      ] }),
      /* @__PURE__ */ jsxs("li", { className: teamMainTopInfoListItem, children: [
        /* @__PURE__ */ jsx(PeopleIcon, {}),
        " ",
        props.memberCount,
        "명"
      ] }),
      /* @__PURE__ */ jsxs("li", { className: teamMainTopInfoListItem, children: [
        /* @__PURE__ */ jsx(CalendarIcon, {}),
        " ",
        formatDate(props.foundingDate ?? props.createDate, "yy-MM-dd"),
        " 창단"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: baseContainer, style: { paddingBottom: "20px" }, children: [
      /* @__PURE__ */ jsxs(Top, { children: [
        /* @__PURE__ */ jsx(TeamMainLogo, { text: props.recruitingYn === "Y" ? "모집중" : "", imgSrc: props.logoUrl ?? "a.png" }),
        /* @__PURE__ */ jsxs("div", { className: teamMainTopHeader, children: [
          /* @__PURE__ */ jsx("h2", { className: fonts.body3.semibold, style: { color: "var(--gray900)" }, children: props.teamName }),
          /* @__PURE__ */ jsx("p", { className: fonts.body4.regular, children: props.teamIntro })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        TeamNotice,
        {
          list: [
            { title: "8월 1주차 교류전 참가 여부 투표", articleId: "5", createAt: "2025-04-19T13:00" },
            { title: "2024년 하계 단결 MT - 투표 진행중", articleId: "1", createAt: "2025-04-19T23:58" },
            { title: "2024년 6월 회비 결산", articleId: "32", createAt: "2025-04-19T22:57" }
          ]
        }
      )
    ] })
  ] });
}
const Top = styled.section`
  display: flex;
  gap: 12px;
  padding: 28px 0 20px;
`;
function TeamMainRecentMatch(props) {
  const { matchId, competitionName, matchDate, homeInfo, awayInfo } = props;
  const isHomeWin = homeInfo.score > awayInfo.score;
  const isAwayWin = homeInfo.score < awayInfo.score;
  const isDraw = homeInfo.score === awayInfo.score;
  return /* @__PURE__ */ jsx(Link, { to: `/match/${matchId}`, children: /* @__PURE__ */ jsxs("div", { className: baseCardContainer, children: [
    /* @__PURE__ */ jsxs("div", { className: teamMainTopHeader, children: [
      /* @__PURE__ */ jsx("p", { className: fonts.body4.medium, children: competitionName }),
      /* @__PURE__ */ jsxs("p", { className: clsx(teamMainTextWithIcon, fonts.caption1.regular), children: [
        /* @__PURE__ */ jsx(CalendarIcon, { fill: "var(--gray400)", width: 18, height: 18 }),
        " ",
        matchDate
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: teamMainMatchTeamContainer, children: [
      /* @__PURE__ */ jsxs(Team, { children: [
        /* @__PURE__ */ jsx("img", { src: homeInfo.imgUrl, alt: homeInfo.name, width: 40, height: 40 }),
        /* @__PURE__ */ jsx("span", { className: teamMainMatchTeamName, children: homeInfo.name })
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: clsx(teamMainMatchTeamScoreContainer, {
            [teamMainMatchTeamScoreContainerWin]: isHomeWin,
            [teamMainMatchTeamScoreContainerLose]: isAwayWin
          }),
          children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: teamMainMatchTeamScoreBox,
                style: {
                  color: isHomeWin ? "var(--primary500)" : void 0,
                  fontWeight: isHomeWin ? 600 : void 0,
                  opacity: isHomeWin || isDraw ? 1 : 0.3
                },
                children: homeInfo.score
              }
            ),
            /* @__PURE__ */ jsxs(
              "span",
              {
                className: clsx(teamMainMatchResultBox, {
                  [teamMainMatchResultBoxWin]: isHomeWin,
                  [teamMainMatchResultBoxLose]: isAwayWin
                }),
                children: [
                  isHomeWin ? "WIN" : isAwayWin ? "LOSE" : "DRAW",
                  "!"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: teamMainMatchTeamScoreBox,
                style: {
                  color: isAwayWin ? "var(--red500)" : void 0,
                  fontWeight: isAwayWin ? 600 : void 0,
                  opacity: isAwayWin || isDraw ? 1 : 0.3
                },
                children: awayInfo.score
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(Team, { children: [
        /* @__PURE__ */ jsx("img", { src: awayInfo.imgUrl, alt: awayInfo.name, width: 40, height: 40 }),
        /* @__PURE__ */ jsx("span", { className: teamMainMatchTeamName, children: awayInfo.name })
      ] })
    ] })
  ] }) });
}
const Team = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  & > img {
    border-radius: 100%;
    object-fit: cover;
    border: 1px solid var(--gray200);
  }
`;
function TeamWeeklyCalender(props) {
  const { activeDate, setActiveDate, schedulesList } = props;
  const router = useRouter();
  const params = useParams({ strict: false });
  const teamId = params["teamId"];
  const moveSchedule = (scheduleId) => {
    router.navigate({ to: `/team/${teamId}/schedule?feat=view|${scheduleId}` });
  };
  useEffect(() => {
    setActiveDate(format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"));
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Week, { children: getDatesOfCurrentWeek().map((value, i) => /* @__PURE__ */ jsxs(
      DaySelector,
      {
        type: "button",
        onClick: () => setActiveDate(value),
        className: activeDate === value ? "active-day" : "",
        children: [
          /* @__PURE__ */ jsx("span", { className: clsx("date-name", fonts.caption1.medium), children: WEEK_NAME[i] }),
          /* @__PURE__ */ jsx("span", { className: clsx("date-number", fonts.body4.medium), children: +value.split("-")[2] })
        ]
      },
      value
    )) }),
    /* @__PURE__ */ jsx(List, { className: clsx(flexColumnGap20), children: schedulesList.map((schedule, index) => {
      const diffDays = differenceInDays(/* @__PURE__ */ new Date(), new Date(schedule.startDate));
      return /* @__PURE__ */ jsxs("li", { onClick: () => moveSchedule(schedule.scheduleId), className: teamMainScheduleItem, children: [
        /* @__PURE__ */ jsxs("div", { className: "head-line", children: [
          /* @__PURE__ */ jsx(Chip, { type: "primary", fillType: "light", children: schedule.scheduleCategory }),
          /* @__PURE__ */ jsx("span", { className: clsx("subtitle", fonts.body4.medium), children: schedule.scheduleTitle })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sub-line", children: [
          /* @__PURE__ */ jsxs("p", { className: clsx(flexRowGap10), children: [
            /* @__PURE__ */ jsxs("span", { className: clsx("date-wrapper", fonts.caption1.regular), children: [
              /* @__PURE__ */ jsx(CalendarIcon, {}),
              schedule.startDate
            ] }),
            /* @__PURE__ */ jsxs("span", { className: clsx("date-wrapper", fonts.caption1.regular), children: [
              /* @__PURE__ */ jsx(ClockIcon, {}),
              schedule.time
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Badge, { type: "primary", fillType: diffDays === 0 ? "filled" : "light", size: "medium", children: [
            "D",
            diffDays === 0 ? "-DAY" : diffDays
          ] })
        ] })
      ] }, index);
    }) })
  ] });
}
const Week = styled.div`
  display: flex;
  user-select: none;
`;
const DaySelector = styled.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  transition: all 0.2s var(--animation-cubic);

  span.date-name {
    // 요일명
    display: block;
    height: 24px;
    color: var(--gray400);
  }
  span.date-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    text-align: center;
    border-radius: 6px;
  }

  &.active-day {
    span.date-number {
      background: var(--primary500);
      color: #fff;
    }
  }

  &:active {
    transform: scale(0.95);
    span.date-number {
      background: var(--gray50);
    }
  }
`;
const List = styled.ul`
  li.today {
    border-color: var(--primary500);
  }
  div.head-line {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
    span.subtitle {
      color: var(--gray700);
    }
  }
  div.sub-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span.date-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      color: var(--gray400);
    }
    svg {
      width: 18px;
      height: 18px;
      fill: var(--gray400);
    }
  }
`;
const WEEK_NAME = ["일", "월", "화", "수", "목", "금", "토"];
function getDatesOfCurrentWeek() {
  const today = /* @__PURE__ */ new Date();
  const start = startOfWeek(today, { weekStartsOn: 0 });
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(start, i);
    return format(date, "yyyy-MM-dd");
  });
  return dates;
}
function TeamMainBoardList() {
  const params = useParams({ strict: false });
  const teamId = params["teamId"];
  const data2 = BOARD_ARTICLES_MOCK;
  return /* @__PURE__ */ jsx(Fragment, { children: data2.map((item, index) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        style: { justifyContent: "space-between", alignItems: "flex-end" },
        className: clsx(flexRowGap12),
        to: `/team/${teamId}/board/${item.articleId}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: flexColumnGap10, children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Badge, { size: "medium", type: "gray", fillType: "light", children: item.category }) }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
              /* @__PURE__ */ jsx("p", { className: fonts.body4.medium, style: { color: "var(--gray700)" }, children: item.title }),
              /* @__PURE__ */ jsxs("p", { className: clsx(flexRowGap10, fonts.caption1.regular), style: { color: "var(--gray400)" }, children: [
                /* @__PURE__ */ jsxs("span", { className: flexRowGap4, children: [
                  /* @__PURE__ */ jsx(CalendarIcon, { width: 18, height: 18, fill: "var(--gray400)" }),
                  formattedDate(item.writtenAt, {
                    displayDateType: ".",
                    displayDayName: "hide",
                    displayYear: "always",
                    displayTime: "hide"
                  })
                ] }),
                /* @__PURE__ */ jsxs("span", { className: flexRowGap4, children: [
                  /* @__PURE__ */ jsx(HeartIcon, { width: 18, height: 18, fill: "var(--gray400)" }),
                  "23"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: flexRowGap4, children: [
                  /* @__PURE__ */ jsx(CommentIcon, { width: 18, height: 18, fill: "var(--gray400)" }),
                  "5"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: teamMainBoardListImage })
        ]
      }
    ),
    data2.length - 1 === index || /* @__PURE__ */ jsx(
      "div",
      {
        "aria-disabled": true,
        style: {
          width: "100%",
          height: "1px",
          backgroundColor: "var(--gray200)"
        }
      }
    )
  ] }, item.articleId)) });
}
const BOARD_ARTICLES_MOCK = [
  {
    articleId: "1",
    title: "게시판 제목1",
    category: "공지사항",
    writtenBy: "포이프",
    writtenAt: "2024-10-13T15:20"
  },
  { articleId: "2", title: "게시글 제목2", category: "공지사항", writtenBy: "포이프", writtenAt: "2024-10-15T08:20" },
  { articleId: "3", title: "게시글 제목3", category: "공지사항", writtenBy: "포이프", writtenAt: "2024-10-17T22:20" }
];
function RecentVote() {
  return /* @__PURE__ */ jsxs("div", { className: clsx(teamMainRecentVoteContainer, flexColumnGap16), children: [
    /* @__PURE__ */ jsxs("p", { className: fonts.body3.medium, style: { color: "var(--gray900)", padding: "0 16px" }, children: [
      "사용자 님의 ",
      /* @__PURE__ */ jsx("span", { style: { color: "var(--primary500)" }, children: "참여 의사" }),
      "를 기다리고 있어요!"
    ] }),
    /* @__PURE__ */ jsx("div", { className: teamMainRecentVoteList, children: data.length > 0 && /* @__PURE__ */ jsx(Swiper, { slidesPerView: "auto", freeMode: true, children: data.map((item) => /* @__PURE__ */ jsx(SwiperSlide, { className: clsx(teamMainRecentVoteCard), children: /* @__PURE__ */ jsx(
      RecentVoteCard,
      {
        title: item.title,
        scheduleId: item.scheduleId,
        content: item.content,
        date: item.date,
        voteId: item.voteId
      }
    ) }, item.voteId)) }) })
  ] });
}
const data = [
  {
    voteId: "123",
    scheduleId: "123",
    title: "저녁 번개 참석자 모집",
    date: "2025.04.18",
    content: "과기대 앞 돼지고기집"
  },
  { voteId: "1423", scheduleId: "5123", title: "하계 훈련 참가자", date: "2025.05.31", content: "필참" }
];
function PlayerListItem(props) {
  const { playerId, name, level, profileImg, position, birthDate, gisu } = props;
  const LEVEL_CODE = {
    5: { name: "회장", color: "#ff8c00", value: "president" },
    4: { name: "부회장", color: "#0fd1c1", value: "vice" },
    3: { name: "운영진", color: "#8984E5", value: "staff" },
    2: { name: "매니저", color: "#A0BCF8", value: "manager" },
    1: { name: "팀원", color: "", value: "member" }
  };
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx(ProfileImage, { style: { backgroundImage: `url(${profileImg})` } }),
    /* @__PURE__ */ jsxs(Name, { children: [
      level > 1 && /* @__PURE__ */ jsx("p", { className: clsx(fonts.caption1.regular, "position"), children: LEVEL_CODE[level].name }),
      /* @__PURE__ */ jsx("p", { className: clsx(fonts.body3.semibold, "player-name"), children: name })
    ] }),
    /* @__PURE__ */ jsxs(Info, { className: flexRowGap8, children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: fonts.caption1.medium, style: { color: "var(--gray400)" }, children: "포지션" }),
        /* @__PURE__ */ jsx("span", { className: fonts.body4.semibold, style: { color: "var(--gray700)" }, children: position })
      ] }),
      gisu && /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: fonts.caption1.medium, style: { color: "var(--gray400)" }, children: "기수" }),
        /* @__PURE__ */ jsxs("span", { className: fonts.body4.semibold, style: { color: "var(--gray700)" }, children: [
          gisu,
          "기"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: fonts.caption1.medium, style: { color: "var(--gray400)" }, children: "출석률" }),
        /* @__PURE__ */ jsx("span", { className: fonts.body4.semibold, style: { color: "var(--gray700)" }, children: "30%" })
      ] })
    ] })
  ] });
}
const Container = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
`;
const ProfileImage = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--gray100);
  width: 48px;
  height: 48px;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
`;
const Name = styled.div`
  flex: 1;
  p.position {
    color: var(--primary500);
  }
  p.player-name {
    color: var(--gray900);
    word-break: keep-all;
  }
`;
const Info = styled.ul`
  li {
    display: flex;
    padding: 8px;
    align-items: center;
    flex-direction: column;
    min-width: 65px;
    max-width: 80px;
    background-color: var(--gray50);
    border-radius: 6px;
  }
`;
function TeamMainPlayerList() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      PlayerListItem,
      {
        playerId: "123",
        name: "홍길동",
        level: 5,
        profileImg: "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
        position: "가드",
        birthDate: "1999-12-21",
        gisu: 1
      }
    ),
    /* @__PURE__ */ jsx(
      PlayerListItem,
      {
        playerId: "3123",
        name: "홍길동",
        level: 4,
        profileImg: "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
        position: "가드",
        birthDate: "2000-01-01",
        gisu: 1
      }
    ),
    /* @__PURE__ */ jsx(
      PlayerListItem,
      {
        playerId: "31523",
        name: "홍길동",
        level: 3,
        profileImg: "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
        position: "가드",
        birthDate: "2000-01-01",
        gisu: 2
      }
    ),
    /* @__PURE__ */ jsx(
      PlayerListItem,
      {
        playerId: "31273",
        name: "홍길동",
        level: 3,
        profileImg: "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
        position: "가드",
        birthDate: "2000-01-01",
        gisu: 3
      }
    ),
    /* @__PURE__ */ jsx(
      PlayerListItem,
      {
        playerId: "131273",
        name: "홍길동",
        level: 2,
        profileImg: "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
        position: "센터",
        birthDate: "2000-01-01",
        gisu: 3
      }
    ),
    /* @__PURE__ */ jsx(
      PlayerListItem,
      {
        playerId: "94",
        name: "홍길동",
        level: 0,
        profileImg: "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
        position: "가드",
        birthDate: "2000-01-01",
        gisu: 3
      }
    )
  ] });
}
function TeamMainData() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: clsx(baseCardContainer, flexColumnGap12), children: [
      /* @__PURE__ */ jsxs("div", { className: teamMainDataCardTitle, children: [
        /* @__PURE__ */ jsx("span", { className: fonts.body3.semibold, children: "교류전 전적" }),
        /* @__PURE__ */ jsx("span", { className: fonts.caption1.regular, style: { color: "var(--gray400)" }, children: "최근 3개월 내 진행된 팀 교류전 성적 승률" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: flexRowGap8, children: [
        /* @__PURE__ */ jsx(
          ProgressCircle,
          {
            size: 124,
            percentage: 77,
            rate: 1,
            stroke: {
              track: 20,
              progress: 12
            },
            color: {
              track: "var(--primary50)"
            },
            direction: "right-to-left",
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: clsx(fonts.body1.semibold, flexColumnGap4, flexAlignCenter),
                style: { color: "var(--gray900)", gap: 0 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: ProgressCircleTrophyWrapper, style: { margin: 0, backgroundColor: "var(--primary50)" }, children: /* @__PURE__ */ jsx(TrophyIcon, { width: 24, height: 24, fill: "var(--primary500)" }) }),
                  "87%"
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: flexSpaceEvenly, style: { flex: 1, padding: "0 4px" }, children: [
          /* @__PURE__ */ jsxs("div", { className: teamMainDataSummary, children: [
            /* @__PURE__ */ jsx(ThumbUpIcon, { fill: "var(--primary500)" }),
            /* @__PURE__ */ jsx("p", { className: fonts.caption1.medium, style: { color: "var(--gray400)" }, children: "승리" }),
            /* @__PURE__ */ jsx("p", { className: fonts.body3.semibold, children: "59" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: teamMainDataSummary, children: [
            /* @__PURE__ */ jsx(ThumbDownIcon, { fill: "var(--red500)" }),
            /* @__PURE__ */ jsx("p", { className: fonts.caption1.medium, style: { color: "var(--gray400)" }, children: "패배" }),
            /* @__PURE__ */ jsx("p", { className: fonts.body3.semibold, children: "59" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: teamMainDataSummary, children: [
            /* @__PURE__ */ jsx(CheerIcon, { fill: "var(--gray400)" }),
            /* @__PURE__ */ jsx("p", { className: fonts.caption1.medium, style: { color: "var(--gray400)" }, children: "무승부" }),
            /* @__PURE__ */ jsx("p", { className: fonts.body3.semibold, children: "59" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: clsx(baseCardContainer, flexColumnGap12), children: [
      /* @__PURE__ */ jsxs("div", { className: teamMainDataCardTitle, children: [
        /* @__PURE__ */ jsx("span", { className: fonts.body3.semibold, children: "대회 전적" }),
        /* @__PURE__ */ jsx("span", { className: fonts.caption1.regular, style: { color: "var(--gray400)" }, children: "최근 3개월 내 진행된 팀 대회 성적 승률" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: flexRowGap8, children: [
        /* @__PURE__ */ jsx(
          ProgressCircle,
          {
            size: 124,
            percentage: 77,
            rate: 1,
            stroke: {
              track: 20,
              progress: 12
            },
            color: {
              track: "var(--primary50)"
            },
            direction: "right-to-left",
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: clsx(fonts.body1.semibold, flexColumnGap4, flexAlignCenter),
                style: { color: "var(--gray900)", gap: 0 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: ProgressCircleTrophyWrapper, style: { margin: 0, backgroundColor: "var(--primary50)" }, children: /* @__PURE__ */ jsx(TrophyIcon, { width: 24, height: 24, fill: "var(--primary500)" }) }),
                  "87%"
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: flexSpaceEvenly, style: { flex: 1, padding: "0 4px" }, children: [
          /* @__PURE__ */ jsxs("div", { className: teamMainDataSummary, children: [
            /* @__PURE__ */ jsx(ThumbUpIcon, { fill: "var(--primary500)" }),
            /* @__PURE__ */ jsx("p", { className: fonts.caption1.medium, style: { color: "var(--gray400)" }, children: "승리" }),
            /* @__PURE__ */ jsx("p", { className: fonts.body3.semibold, children: "59" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: teamMainDataSummary, children: [
            /* @__PURE__ */ jsx(ThumbDownIcon, { fill: "var(--red500)" }),
            /* @__PURE__ */ jsx("p", { className: fonts.caption1.medium, style: { color: "var(--gray400)" }, children: "패배" }),
            /* @__PURE__ */ jsx("p", { className: fonts.body3.semibold, children: "59" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: teamMainDataSummary, children: [
            /* @__PURE__ */ jsx(CheerIcon, { fill: "var(--gray400)" }),
            /* @__PURE__ */ jsx("p", { className: fonts.caption1.medium, style: { color: "var(--gray400)" }, children: "무승부" }),
            /* @__PURE__ */ jsx("p", { className: fonts.body3.semibold, children: "59" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function TeamMainContents() {
  const [weeklyDate, setWeeklyDate] = useState("");
  const params = useParams({ strict: false });
  const teamId = params.teamId;
  return /* @__PURE__ */ jsxs("section", { className: clsx(baseContainer, flexColumnGap20), children: [
    /* @__PURE__ */ jsx(RecentVote, {}),
    /* @__PURE__ */ jsxs("div", { className: teamMainContentsGroup, children: [
      /* @__PURE__ */ jsx(GroupTitle, { link: `/team/${teamId}/schedule`, children: "다가오는 일정" }),
      /* @__PURE__ */ jsx(
        TeamWeeklyCalender,
        {
          activeDate: weeklyDate,
          setActiveDate: setWeeklyDate,
          schedulesList: [
            {
              scheduleId: "",
              startDate: "2025-04-20",
              time: "13:50",
              scheduleCategory: "훈련",
              scheduleTitle: "팀 훈련"
            },
            {
              scheduleId: "",
              startDate: "2025-04-23",
              time: "18:50",
              scheduleCategory: "훈련",
              scheduleTitle: "교류전 (VS 성균관대)"
            }
          ]
        }
      ),
      /* @__PURE__ */ jsx(Button, { type: "button", mode: "gray", fillType: "outline", size: "medium", children: "더보기" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: baseDividedLineChild }),
    /* @__PURE__ */ jsxs("div", { className: teamMainContentsGroup, children: [
      /* @__PURE__ */ jsx(GroupTitle, { link: `/team/${teamId}/matches`, children: "최근 경기" }),
      /* @__PURE__ */ jsxs("div", { className: flexColumnGap12, children: [
        /* @__PURE__ */ jsx(
          TeamMainRecentMatch,
          {
            matchId: "123",
            competitionName: "2025년 4월 20일 교류전",
            matchDate: "2025-04-20",
            homeInfo: {
              name: "성균관대학교",
              imgUrl: "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
              score: 91
            },
            awayInfo: {
              name: "고려대학교",
              imgUrl: "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
              score: 78
            }
          }
        ),
        /* @__PURE__ */ jsx(
          TeamMainRecentMatch,
          {
            matchId: "1223",
            competitionName: "2025년 4월 20일 교류전",
            matchDate: "2025-04-20",
            homeInfo: {
              name: "성균관대학교",
              imgUrl: "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
              score: 91
            },
            awayInfo: {
              name: "고려대학교",
              imgUrl: "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
              score: 98
            }
          }
        ),
        /* @__PURE__ */ jsx(
          TeamMainRecentMatch,
          {
            matchId: "1223",
            competitionName: "2025년 4월 20일 교류전",
            matchDate: "2025-04-20",
            homeInfo: {
              name: "성균관대학교",
              imgUrl: "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
              score: 91
            },
            awayInfo: {
              name: "고려대학교",
              imgUrl: "https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",
              score: 91
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "button", mode: "gray", fillType: "outline", size: "medium", children: "더보기" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: baseDividedLineChild }),
    /* @__PURE__ */ jsxs("div", { className: teamMainContentsGroup, children: [
      /* @__PURE__ */ jsx(GroupTitle, { link: `/team/${teamId}/board`, children: "팀 게시판" }),
      /* @__PURE__ */ jsx("div", { className: flexColumnGap16, children: /* @__PURE__ */ jsx(TeamMainBoardList, {}) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: baseDividedLineChild }),
    /* @__PURE__ */ jsxs("div", { className: teamMainContentsGroup, children: [
      /* @__PURE__ */ jsx(GroupTitle, { link: `/team/${teamId}/statistics`, children: "팀 데이터" }),
      /* @__PURE__ */ jsx("div", { className: flexColumnGap12, children: /* @__PURE__ */ jsx(TeamMainData, {}) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: baseDividedLineChild }),
    /* @__PURE__ */ jsxs("div", { className: teamMainContentsGroup, children: [
      /* @__PURE__ */ jsx(GroupTitle, { link: `/team/${teamId}/players`, children: "팀원 " }),
      /* @__PURE__ */ jsx("div", { className: flexColumnGap20, children: /* @__PURE__ */ jsx(TeamMainPlayerList, {}) })
    ] }),
    /* @__PURE__ */ jsx(Link, { to: `/team/${teamId}/video/1`, children: "경기 영상" })
  ] });
}
function TeamJoinButton({ teamId }) {
  const { mutate } = usePost(teamJoinAPI.REQUEST);
  const popup = usePopup();
  const { showModal, ModalComponents, modalState } = useModal({ key: "join-request-modal" });
  const onSubmitJoin = (close) => {
    mutate(
      {
        data: {
          teamId,
          message: modalState?.["join-request-modal"]
        }
      },
      {
        onSuccess: () => {
          popup?.alert(`가입 신청을 해주셔서 감사합니다.
운영진의 승인까지 잠시만 기다려주세요.`, {
            title: "가입 신청 완료",
            color: "primary",
            showIcon: true
          });
          close();
        },
        onError: (err) => {
          if (err.response?.data) {
            const content = err.response.data.error === "E415" ? "운영진의 가입 승인까지 잠시만 기다려주세요." : `잠시후 다시 시도해주세요. [${err.status}]`;
            popup?.alert(`${content}
Occurred Date ${formatDate(/* @__PURE__ */ new Date(), "yyyy-MM-dd HH:mm:ss")}`, {
              title: err.response?.data.message,
              color: "red",
              showIcon: true
            });
            if (err.response.data.error === "E415") {
              close();
            }
            return;
          }
          popup?.alert(
            `잠시후 다시 시도해주세요. [${err.status}]
Occurred Date ${formatDate(/* @__PURE__ */ new Date(), "yyyy-MM-dd HH:mm:ss")}`,
            {
              title: "에러",
              color: "red",
              showIcon: true
            }
          );
        }
      }
    );
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(FloatButton, { children: /* @__PURE__ */ jsx(Button, { type: "button", mode: "primary", size: "xlarge", fullWidth: true, onClick: showModal, children: "팀 가입 신청" }) }),
    /* @__PURE__ */ jsx(
      ModalComponents,
      {
        title: "팀 가입 신청",
        description: "가입을 위한 메시지를 남겨보세요",
        buttons: [
          {
            name: "신청",
            onClick: (close) => {
              onSubmitJoin(close);
            },
            mode: "primary"
          }
        ],
        children: ({ setState }) => /* @__PURE__ */ jsx(
          TextArea,
          {
            title: "가입 요청 메시지",
            placeholder: "최대 80자까지 작성할 수 있어요.",
            height: 100,
            maxLength: 80,
            onChange: (event) => setState(event.target.value),
            displayLength: true
          }
        )
      }
    )
  ] });
}
function TeamHome() {
  const {
    teamId
  } = Route.useParams();
  const {
    data: teamData,
    isLoading
  } = useGet(`${teamAPI.TEAMS}/${teamId}`);
  if (isLoading || !teamData) {
    return /* @__PURE__ */ jsx(Loading, { page: true });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TeamMainTop, { ...teamData }),
    /* @__PURE__ */ jsx(TeamMainContents, {}),
    teamData.joinYn === "Y" && /* @__PURE__ */ jsx(TeamJoinButton, { teamId })
  ] });
}
export {
  TeamHome as component
};
