import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import clsx from "clsx";
import { t as teamFindSearchContainer, a as teamFindSearchInput } from "./teamFind.css-WQyolMa0.js";
import { c as flexColumnGap16, k as flexRowGap4, d as flexColumnGap4, l as flexAlignCenter, m as flexSpaceBetween, f as flexColumnGap12, n as flexRowGap8 } from "./container.css-C2ezn6CH.js";
import { style } from "@vanilla-extract/css";
import { S as SearchIcon } from "./Search-DrxoJQ2v.js";
import { Swiper, SwiperSlide } from "swiper/react";
/* empty css                */
import { Link } from "@tanstack/react-router";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
import { R as RightDirectionArrow } from "./RightDirection-DCcZ277n.js";
import { L as LocationPinIcon, C as CalendarIcon } from "./Calendar-_ULFP4YG.js";
import { f as formattedDateNoHyphen } from "./date-DKPo_LKv.js";
import "jotai";
import "react";
import "date-fns";
const matchMainTeamListLogo = style({
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "1px solid var(--gray200)",
  backgroundColor: "var(--white)",
  selectors: {
    "&[data-selected='true']": {
      border: "3px solid var(--primary500)"
    }
  }
});
const matchMainTeamListItem = style({
  padding: "8px 12px",
  borderRadius: "8px",
  textAlign: "center",
  selectors: {
    "&[data-selected='true']": {
      backgroundColor: "var(--primary50)"
    }
  }
});
const matchMainUpcomingContainer = style({
  padding: "20px 0",
  backgroundColor: "var(--gray50)"
});
const matchMainUpcomingCard = style({
  userSelect: "none",
  width: "280px !important",
  borderRadius: "10px",
  padding: "16px",
  backgroundColor: "var(--white)",
  border: "1px solid var(--gray200)",
  marginRight: "var(--global-lr-padding)",
  selectors: {
    "&:first-of-type": {
      marginLeft: "var(--global-lr-padding)"
    }
  }
});
const matchMainUpcomingCardTeamLogo = style({
  flexShrink: 0,
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "1px solid var(--gray200)",
  backgroundColor: "var(--white)"
});
const matchMainUpcomingCardTeamName = style({
  display: "block",
  width: "calc(280px - 32px - 40px - 8px)",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
});
const matchMainUpcomingCardDetail = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  padding: "8px",
  borderRadius: "8px",
  backgroundColor: "var(--gray50)"
});
function MatchMainTop() {
  return /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, style: { padding: "8px 0 16px" }, children: [
    /* @__PURE__ */ jsxs("div", { className: teamFindSearchContainer, style: { marginBottom: "8px" }, children: [
      /* @__PURE__ */ jsx(SearchIcon, { fill: "var(--primary500)", width: 20, height: 20 }),
      /* @__PURE__ */ jsx("input", { type: "text", className: teamFindSearchInput, placeholder: "경기 제목 또는 팀 이름 입력" })
    ] }),
    /* @__PURE__ */ jsxs("ul", { style: { padding: "0 16px" }, className: flexRowGap4, children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { className: clsx(flexColumnGap4, matchMainTeamListItem), children: [
        /* @__PURE__ */ jsx("div", { className: matchMainTeamListLogo }),
        /* @__PURE__ */ jsx("div", { className: fonts.caption1.medium, children: "팀 이름" })
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { className: clsx(flexColumnGap4, matchMainTeamListItem), "data-selected": "true", children: [
        /* @__PURE__ */ jsx("div", { className: matchMainTeamListLogo, "data-selected": "true" }),
        /* @__PURE__ */ jsx("div", { className: fonts.caption1.semibold, children: "팀 이름" })
      ] }) })
    ] })
  ] });
}
function MainUpcomingMatch() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: clsx(flexColumnGap16, matchMainUpcomingContainer), children: [
    /* @__PURE__ */ jsxs("div", { className: clsx(flexAlignCenter, flexSpaceBetween), style: { padding: "0 var(--global-lr-padding)" }, children: [
      /* @__PURE__ */ jsx("h3", { className: fonts.body2.semibold, style: { color: "var(--gray900)" }, children: "진행 예정 경기" }),
      /* @__PURE__ */ jsx(RightDirectionArrow, { width: 24, height: 24 })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { scrollbarWidth: "none" }, children: data.length > 0 && /* @__PURE__ */ jsx(Swiper, { slidesPerView: "auto", freeMode: true, children: data.map((item) => /* @__PURE__ */ jsx(SwiperSlide, { className: clsx(matchMainUpcomingCard), children: /* @__PURE__ */ jsxs("div", { className: flexColumnGap12, children: [
      /* @__PURE__ */ jsxs(Link, { className: flexRowGap8, to: `/match/${item.matchId}`, children: [
        /* @__PURE__ */ jsx("div", { className: matchMainUpcomingCardTeamLogo }),
        /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
          /* @__PURE__ */ jsxs("p", { className: flexSpaceBetween, children: [
            /* @__PURE__ */ jsx("span", { className: fonts.caption1.semibold, style: { color: "var(--gray600)" }, children: item.teamName }),
            /* @__PURE__ */ jsx(RightArrowIcon, { width: 20, height: 20 })
          ] }),
          /* @__PURE__ */ jsx("span", { className: clsx(matchMainUpcomingCardTeamName, fonts.body4.regular), children: item.matchName })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: matchMainUpcomingCardDetail, children: [
        /* @__PURE__ */ jsxs("p", { className: clsx(flexRowGap4, fonts.caption1.regular), style: { color: "var(--gray500)" }, children: [
          /* @__PURE__ */ jsx(LocationPinIcon, { width: 16, height: 16, fill: "var(--gray400)" }),
          item.location
        ] }),
        /* @__PURE__ */ jsxs("p", { className: clsx(flexRowGap4, fonts.caption1.regular), style: { color: "var(--gray500)" }, children: [
          /* @__PURE__ */ jsx(CalendarIcon, { width: 16, height: 16, fill: "var(--gray400)" }),
          formattedDateNoHyphen(item.matchDate),
          " / ",
          item.matchTime,
          " "
        ] })
      ] })
    ] }) }, item.matchId)) }) })
  ] }) });
}
const data = [
  {
    matchId: 124,
    teamName: "Gvaleir",
    matchName: "제25회 과기대 총장배 전국농구동아리대회",
    teamLogo: ".png",
    matchDate: "20250620",
    matchTime: "16:00",
    location: "잠실운동장 야외코트"
  },
  {
    matchId: 524,
    teamName: "Gvaleir",
    matchName: "제25회 과기대 총장배 전국농구동아리대회",
    teamLogo: ".png",
    matchDate: "20250620",
    matchTime: "16:00",
    location: "잠실운동장 야외코트"
  },
  {
    matchId: 94,
    teamName: "Gvaleir",
    matchName: "제25회 과기대 총장배 전국농구동아리대회",
    teamLogo: ".png",
    matchDate: "20250625",
    matchTime: "20:00",
    location: "잠실운동장 야외코트"
  }
];
function MatchMain() {
  useHeader({
    customArea: /* @__PURE__ */ jsx("span", { className: fonts.body2.semibold, style: {
      color: "var(--gray900)"
    }, children: "경기" })
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(MatchMainTop, {}),
    /* @__PURE__ */ jsx(MainUpcomingMatch, {})
  ] });
}
export {
  MatchMain as component
};
