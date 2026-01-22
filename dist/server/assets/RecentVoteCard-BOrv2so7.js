import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useParams, Link } from "@tanstack/react-router";
import clsx from "clsx";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { B as Button } from "./Button-cLlpCM0x.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { i as innerChildContainer, p as flexRowGap10, l as flexAlignCenter, k as flexRowGap4, c as flexColumnGap16, d as flexColumnGap4, n as flexRowGap8 } from "./container.css-C2ezn6CH.js";
import { h as hexToRgb } from "./common-BU27Mq6v.js";
import { style, globalStyle } from "@vanilla-extract/css";
import { C as CheckIcon } from "./Check-xgghRidd.js";
import { C as CalendarIcon } from "./Calendar-CZ4mMM-F.js";
import { C as ClockIcon } from "./Clock-Bj0T6dbi.js";
import { R as RightDirectionArrow } from "./RightDirection-DCcZ277n.js";
const teamMainTopBanner = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  width: "100%",
  height: "180px",
  objectFit: "cover",
  backgroundColor: "var(--gray100)",
  backgroundSize: "cover",
  backgroundPosition: "top center"
});
const teamMainTopInfoList = style({
  padding: "12px 20px",
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  backdropFilter: "blur(5px)",
  backgroundColor: "rgba(0,0,0,0.1)",
  "@media": {
    "screen and (max-width: 360px)": {
      padding: "12px 8px",
      gap: "6px"
    }
  }
});
const teamMainTopInfoListItem = style([
  fonts.caption1.regular,
  {
    display: "flex",
    gap: "4px",
    alignItems: "center",
    color: "var(--white)",
    opacity: "0.85",
    "@media": {
      "screen and (max-width: 360px)": {
        fontSize: "1.15rem !important"
      }
    }
  }
]);
globalStyle(`${teamMainTopInfoListItem} > svg`, {
  width: "18px",
  height: "18px",
  fill: "var(--white)"
});
const teamMainTopHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  color: "var(--gray700)"
});
const teamMainContentsGroup = style({
  display: "flex",
  paddingBottom: "10px",
  flexDirection: "column",
  gap: "16px"
});
const teamMainScheduleItem = style({
  paddingBottom: "20px",
  borderBottom: "1px solid var(--gray100)",
  selectors: {
    "&:last-of-type": {
      borderBottom: "none"
    },
    "&:active": {
      backgroundColor: "var(--gray50)"
    }
  }
});
const teamMainTextWithIcon = style({
  display: "inline-flex",
  gap: "4px",
  alignItems: "center",
  color: "var(--gray400)"
});
const teamMainMatchTeamContainer = style({
  margin: "20px auto 0",
  display: "flex",
  maxWidth: "300px",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  color: "var(--gray700)"
});
const teamMainMatchTeamScoreContainer = style([
  fonts.body2.regular,
  {
    display: "flex",
    alignItems: "center",
    padding: "8px 14px",
    borderRadius: "8px",
    gap: "10px",
    backgroundColor: "var(--gray50)"
  }
]);
const teamMainMatchTeamName = style([
  fonts.body4.medium,
  {
    maxWidth: "54px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }
]);
const teamMainMatchTeamScoreBox = style({
  minWidth: "28px",
  textAlign: "center"
});
const teamMainMatchTeamScoreContainerWin = style({
  backgroundColor: "#D4FCDB",
  background: `linear-gradient(90deg,  #D4FCDB 0%, rgba(${hexToRgb("#D4FCDB")},0.2) 100%)`
});
const teamMainMatchTeamScoreContainerLose = style({
  backgroundColor: "#FEE8D8",
  background: `linear-gradient(90deg, rgba(${hexToRgb("#FEE8D8")},0.2) 0%, #FEE8D8 100%)`
});
const teamMainMatchResultBox = style([
  fonts.caption1.medium,
  {
    padding: "3px 8px",
    borderRadius: "6px",
    backgroundColor: "var(--gray700)",
    color: "var(--white)"
  }
]);
const teamMainMatchResultBoxWin = style({
  backgroundColor: "var(--primary500)"
});
const teamMainMatchResultBoxLose = style({
  backgroundColor: "var(--red500)"
});
style({
  width: "24px",
  height: "24px",
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "3px",
  transition: "all 0.25s",
  selectors: {
    "&:active": {
      boxShadow: "0 0 0 4px var(--gray50)",
      backgroundColor: "var(--gray50)",
      transform: "scale(0.97)"
    }
  }
});
style({
  width: "100%",
  height: "100%",
  selectors: {
    '&[data-filled="true"]': {
      fill: "var(--red500) !important"
    }
  }
});
const teamMainRecentVoteContainer = style([
  innerChildContainer,
  {
    padding: "20px 0",
    background: "var(--gray50)"
  }
]);
const teamMainRecentVoteList = style({
  scrollbarWidth: "none"
});
const teamMainRecentVoteCard = style({
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
const teamMainRecentVoteCardDateHeader = style({
  paddingBottom: "10px",
  marginBottom: "10px",
  borderBottom: "1px dashed var(--gray200)"
});
const teamMainBoardListImage = style({
  width: "52px",
  height: "52px",
  borderRadius: "8px",
  backgroundColor: "var(--gray100)",
  objectFit: "cover",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  overflow: "hidden"
});
const teamMainDataCardTitle = style([
  flexRowGap10,
  flexAlignCenter,
  {
    borderBottom: "1px dashed var(--gray200)",
    paddingBottom: "12px"
  }
]);
const teamMainDataSummary = style({
  flex: 1,
  maxWidth: "55px",
  textAlign: "center"
});
globalStyle(`${teamMainDataSummary} svg`, {
  width: "20px",
  height: "20px",
  marginBottom: "12px"
});
function RecentVoteCard({ voteId, scheduleId, title, content, date }) {
  const { register } = useForm();
  const params = useParams({ strict: false });
  const teamId = params["teamId"];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: `/team/${teamId}/schedule?feat=view|${scheduleId}`,
        className: clsx(flexRowGap10, teamMainRecentVoteCardDateHeader, flexAlignCenter),
        style: { justifyContent: "space-between" },
        children: [
          /* @__PURE__ */ jsxs("div", { className: flexRowGap10, children: [
            /* @__PURE__ */ jsxs(
              "span",
              {
                style: { color: "var(--gray600)" },
                className: clsx(fonts.caption1.medium, flexRowGap4, flexAlignCenter),
                children: [
                  /* @__PURE__ */ jsx(CalendarIcon, { width: 18, height: 18, fill: "var(--gray600)" }),
                  " ",
                  date
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "span",
              {
                style: { color: "var(--gray600)" },
                className: clsx(fonts.caption1.medium, flexRowGap4, flexAlignCenter),
                children: [
                  /* @__PURE__ */ jsx(ClockIcon, { width: 18, height: 18, fill: "var(--gray600)" }),
                  " ",
                  date
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(RightDirectionArrow, { width: 20, height: 20, fill: "var(--gray400)" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, children: [
      /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, children: [
        /* @__PURE__ */ jsx("p", { style: { color: "var(--gray800)" }, className: fonts.body3.medium, children: title }),
        /* @__PURE__ */ jsx("p", { style: { color: "var(--gray400)" }, className: fonts.caption1.medium, children: content })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, children: [
        /* @__PURE__ */ jsxs("div", { className: flexRowGap8, children: [
          /* @__PURE__ */ jsxs(SelectVoteOption, { children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                style: { visibility: "hidden" },
                type: "radio",
                id: `${voteId}-attend`,
                ...register(`${voteId}-Vote`)
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "checkbox", children: /* @__PURE__ */ jsx(CheckIcon, { width: 20, height: 20 }) }),
            /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, children: "참석" })
          ] }),
          /* @__PURE__ */ jsxs(SelectVoteOption, { children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                style: { visibility: "hidden" },
                type: "radio",
                id: `${voteId}-no-attend`,
                ...register(`${voteId}-Vote`)
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "checkbox", children: /* @__PURE__ */ jsx(CheckIcon, { width: 20, height: 20 }) }),
            /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, children: "불참석" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "button", mode: "primary", size: "small", children: "확인" })
      ] })
    ] })
  ] });
}
const SelectVoteOption = styled.label`
  cursor: pointer;
  flex: 1;
  display: flex;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  color: var(--gray400);

  & > input {
    position: absolute;
    width: 1;
    height: 1;
    margin: -1px;
    overflow: hidden;
  }

  &:active {
    background-color: var(--gray50);
  }

  &:has(input:checked) {
    background-color: rgba(231, 253, 235, 0.5);
    color: var(--gray700);

    div.checkbox {
      background-color: var(--primary500);
      border: transparent;
      & > svg {
        display: block;
        fill: var(--white);
      }
    }
  }
  div.checkbox {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    border: 1px solid var(--gray200);
    & > svg {
      display: none;
    }
  }
`;
export {
  RecentVoteCard as R,
  SelectVoteOption as S,
  teamMainTopInfoList as a,
  teamMainTopInfoListItem as b,
  teamMainTopHeader as c,
  teamMainTextWithIcon as d,
  teamMainMatchTeamContainer as e,
  teamMainMatchTeamName as f,
  teamMainMatchTeamScoreBox as g,
  teamMainMatchResultBox as h,
  teamMainMatchResultBoxLose as i,
  teamMainMatchResultBoxWin as j,
  teamMainMatchTeamScoreContainer as k,
  teamMainMatchTeamScoreContainerLose as l,
  teamMainMatchTeamScoreContainerWin as m,
  teamMainScheduleItem as n,
  teamMainBoardListImage as o,
  teamMainRecentVoteList as p,
  teamMainRecentVoteCard as q,
  teamMainRecentVoteContainer as r,
  teamMainDataCardTitle as s,
  teamMainTopBanner as t,
  teamMainDataSummary as u,
  teamMainContentsGroup as v
};
