import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import clsx from "clsx";
import { u as useGet } from "./query-Ciubt76c.js";
import { u as baseCardContainerNoTrans, d as flexColumnGap4, k as flexRowGap4, a as flexColumnGap20, m as flexSpaceBetween, e as flexColumnGap8, l as flexAlignCenter, p as flexRowGap10, g as flexColumnGap10, f as flexColumnGap12, v as flexCenterJA, r as flexRowGap12, n as flexRowGap8, o as baseCardContainer, s as baseContainerPaddingTop } from "./container.css-C2ezn6CH.js";
import { useState, useEffect } from "react";
import { formatDate } from "date-fns";
import NumberFlow from "@number-flow/react";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { C as CalendarIcon } from "./Calendar-CZ4mMM-F.js";
import { c as colors, s as semantic } from "./color.css-BLEreRIo.js";
import { style, globalStyle } from "@vanilla-extract/css";
import { B as Badge } from "./Badge-CVtyNCaL.js";
import styled from "styled-components";
import { useParams } from "@tanstack/react-router";
import { M as MainTab } from "./MainTab-DOXli7NZ.js";
import { a as SCROLL_HIDE } from "./common-6ceLbjxn.js";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
import { u as useModal } from "./useModal--yzWVOVY.js";
import { m as matchAPI } from "./authToken-Bx9YTtw3.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import { a as Route } from "./router-mwjOH7mt.js";
import "@tanstack/react-query";
import "jotai";
import "./Button-cLlpCM0x.js";
import "./Portal-D4P9dmtA.js";
import "react-dom";
import "cookies-next";
import "axios";
import "@microsoft/clarity";
const matchWinLoseLabel = style([
  fonts.body4.semibold,
  {
    margin: "0 auto",
    width: "90px",
    borderRadius: "0 0 8px 8px",
    padding: "4px 0",
    backgroundColor: "var(--primary500)",
    color: "var(--white)",
    textAlign: "center"
  }
]);
const matchTeamLogo = style({
  position: "relative",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "var(--gray100)",
  border: "1px solid var(--gray200)",
  selectors: {
    "&[data-win='true']": {
      border: "2.5px solid var(--primary500)"
    }
  }
});
globalStyle(`${matchTeamLogo} > svg`, {
  position: "absolute",
  top: "-20px",
  left: "50%",
  transform: "translateX(-50%)"
});
const matchFlowWinRate = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  backgroundColor: "var(--primary500)",
  color: "var(--white)",
  borderRadius: "8px"
});
const matchFlowScoredQuarter = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1px",
  backgroundColor: "var(--gray100)"
});
const matchPlayersDataCard = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  borderRadius: "8px",
  backgroundColor: "var(--gray50)",
  padding: "16px"
});
const matchPlayerDataMVPDetail = style({
  flex: 1,
  borderRadius: "8px",
  backgroundColor: "var(--white)",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between"
});
const matchPlayerMvpPhoto = style({
  display: "flex",
  alignItems: "flex-end",
  width: "100%",
  height: "156px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
  overflow: "hidden"
});
const matchPlayerMvpInfo = style([
  fonts.body3.medium,
  {
    padding: "4px 0 8px",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(6px)",
    textAlign: "center",
    color: "var(--gray100)"
  }
]);
function MatchHeader(props) {
  const { title, subtitle, date, time, home, away } = props;
  useHeader({
    title: "플메슛 83 : 99 SPABA",
    transparent: true,
    subActions: [
      { name: "경기 수정", action: () => {
      } },
      { name: "경기 삭제", action: () => {
      } }
    ],
    options: { titleAlign: "center" }
  });
  const [scores, setScores] = useState([0, 0]);
  useEffect(() => {
    setScores([away.score, home.score]);
  }, [away, home]);
  return /* @__PURE__ */ jsxs("div", { className: baseCardContainerNoTrans, children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: flexColumnGap4,
        style: {
          borderBottom: `1px solid var(--gray200)`,
          margin: "0 -16px",
          padding: "0 16px 20px",
          textAlign: "center"
        },
        children: [
          /* @__PURE__ */ jsx("h3", { className: fonts.body3.semibold, children: title }),
          subtitle && /* @__PURE__ */ jsx("p", { className: fonts.body4.regular, style: { color: "var(--gray600)" }, children: subtitle }),
          /* @__PURE__ */ jsxs(
            "p",
            {
              className: clsx(flexRowGap4, fonts.caption1.regular),
              style: {
                justifyContent: "center",
                color: "var(--gray400)"
              },
              children: [
                /* @__PURE__ */ jsx(CalendarIcon, { width: 18, height: 18, fill: "currentColor" }),
                " ",
                formatDate(date, "yyyy년 M월 d일"),
                " ",
                time
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: matchWinLoseLabel, children: "WIN" }),
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap20, children: [
      /* @__PURE__ */ jsxs("div", { className: flexSpaceBetween, children: [
        /* @__PURE__ */ jsxs("div", { className: clsx(flexColumnGap8, flexAlignCenter), style: { width: "100px" }, children: [
          /* @__PURE__ */ jsx("div", { className: matchTeamLogo, "data-win": away.score > home.score, children: away.score > home.score && /* @__PURE__ */ jsx("svg", { width: "30", height: "23", viewBox: "0 0 30 23", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M14.999 1.33398C15.7485 1.33399 16.4178 1.60773 16.9492 2.1377L17.1367 2.34277C17.5457 2.83663 17.7558 3.43146 17.7559 4.08789C17.7559 4.53998 17.6502 4.97473 17.4326 5.37402V5.375C17.397 5.44024 17.3575 5.50271 17.3174 5.56445L20.4268 9.80859L23.1797 8.6416C23.1795 8.6289 23.1787 8.61621 23.1787 8.60352C23.1787 7.86109 23.4428 7.19314 23.9629 6.66016H23.9639L24.168 6.4707C24.659 6.05732 25.2547 5.84668 25.9111 5.84668C26.5669 5.84678 27.1612 6.05703 27.6553 6.46484L27.8613 6.65137V6.65234L28.0488 6.85742C28.457 7.35186 28.666 7.94727 28.666 8.60352C28.666 9.25759 28.4527 9.84796 28.043 10.3369L27.8555 10.54C27.462 10.9278 26.9938 11.1743 26.4756 11.2773L24.8057 20.915C24.7226 21.3941 24.3065 21.744 23.8203 21.7441H6.17969C5.69364 21.7441 5.27779 21.3948 5.19434 20.916L3.51953 11.2822C2.99272 11.1816 2.5181 10.9318 2.12305 10.5332H2.12207C1.60039 10.0063 1.33306 9.34329 1.33301 8.60352C1.33301 7.86108 1.59703 7.19314 2.11719 6.66016L2.32129 6.4707C2.81239 6.05715 3.40794 5.84673 4.06445 5.84668C4.81424 5.84668 5.48368 6.12137 6.01465 6.65234C6.5459 7.18359 6.82031 7.85337 6.82031 8.60352C6.82031 8.61589 6.8185 8.62825 6.81836 8.64062L9.57129 9.80859L12.6816 5.56348C12.6695 5.54469 12.6572 5.52595 12.6455 5.50684L12.5654 5.36816C12.351 4.97157 12.2432 4.53976 12.2432 4.08984C12.2433 3.34026 12.5172 2.67071 13.0479 2.13965L13.2539 1.95215C13.7481 1.54387 14.3428 1.33398 14.999 1.33398Z",
              fill: "#FFC957",
              stroke: "white",
              strokeWidth: "2",
              strokeLinejoin: "round"
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: fonts.body3.medium, children: away.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap10, fonts.head5.semibold), children: [
          /* @__PURE__ */ jsx("span", { className: clsx({ [colors.primary500]: away.score > home.score }), children: /* @__PURE__ */ jsx(NumberFlow, { value: scores[0] }) }),
          ":",
          /* @__PURE__ */ jsx("span", { className: clsx({ [colors.primary500]: away.score < home.score }), children: /* @__PURE__ */ jsx(NumberFlow, { value: scores[1] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: clsx(flexColumnGap8, flexAlignCenter), style: { width: "100px" }, children: [
          /* @__PURE__ */ jsx("div", { className: matchTeamLogo, "data-win": away.score < home.score, children: away.score < home.score && /* @__PURE__ */ jsx("svg", { width: "30", height: "23", viewBox: "0 0 30 23", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M14.999 1.33398C15.7485 1.33399 16.4178 1.60773 16.9492 2.1377L17.1367 2.34277C17.5457 2.83663 17.7558 3.43146 17.7559 4.08789C17.7559 4.53998 17.6502 4.97473 17.4326 5.37402V5.375C17.397 5.44024 17.3575 5.50271 17.3174 5.56445L20.4268 9.80859L23.1797 8.6416C23.1795 8.6289 23.1787 8.61621 23.1787 8.60352C23.1787 7.86109 23.4428 7.19314 23.9629 6.66016H23.9639L24.168 6.4707C24.659 6.05732 25.2547 5.84668 25.9111 5.84668C26.5669 5.84678 27.1612 6.05703 27.6553 6.46484L27.8613 6.65137V6.65234L28.0488 6.85742C28.457 7.35186 28.666 7.94727 28.666 8.60352C28.666 9.25759 28.4527 9.84796 28.043 10.3369L27.8555 10.54C27.462 10.9278 26.9938 11.1743 26.4756 11.2773L24.8057 20.915C24.7226 21.3941 24.3065 21.744 23.8203 21.7441H6.17969C5.69364 21.7441 5.27779 21.3948 5.19434 20.916L3.51953 11.2822C2.99272 11.1816 2.5181 10.9318 2.12305 10.5332H2.12207C1.60039 10.0063 1.33306 9.34329 1.33301 8.60352C1.33301 7.86108 1.59703 7.19314 2.11719 6.66016L2.32129 6.4707C2.81239 6.05715 3.40794 5.84673 4.06445 5.84668C4.81424 5.84668 5.48368 6.12137 6.01465 6.65234C6.5459 7.18359 6.82031 7.85337 6.82031 8.60352C6.82031 8.61589 6.8185 8.62825 6.81836 8.64062L9.57129 9.80859L12.6816 5.56348C12.6695 5.54469 12.6572 5.52595 12.6455 5.50684L12.5654 5.36816C12.351 4.97157 12.2432 4.53976 12.2432 4.08984C12.2433 3.34026 12.5172 2.67071 13.0479 2.13965L13.2539 1.95215C13.7481 1.54387 14.3428 1.33398 14.999 1.33398Z",
              fill: "#FFC957",
              stroke: "white",
              strokeWidth: "2",
              strokeLinejoin: "round"
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: fonts.body3.medium, children: home.name })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: flexColumnGap10, children: [
        /* @__PURE__ */ jsxs("div", { className: flexSpaceBetween, children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: clsx([fonts.body4.medium, { [colors.primary500]: away.fouls > home.fouls }]),
              style: { width: "100px", textAlign: "center" },
              children: away.fouls
            }
          ),
          /* @__PURE__ */ jsx(Badge, { type: "primary", size: "medium", fillType: "light", children: "팀 파울수" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: clsx([fonts.body4.medium, { [colors.primary500]: away.fouls < home.fouls }]),
              style: { width: "100px", textAlign: "center" },
              children: home.fouls
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: flexSpaceBetween, children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: clsx([fonts.body4.medium, { [colors.primary500]: away.timeouts > home.timeouts }]),
              style: { width: "100px", textAlign: "center" },
              children: away.timeouts
            }
          ),
          /* @__PURE__ */ jsx(Badge, { type: "primary", size: "medium", fillType: "light", children: "타임아웃 수" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: clsx([
                fonts.body4.medium,
                {
                  [colors.primary500]: away.timeouts < home.timeouts
                }
              ]),
              style: { width: "100px", textAlign: "center" },
              children: home.timeouts
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const ChartIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2003_24035'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2003_24035)'%3e%3cpath%20d='M5.05775%2020.5C4.55258%2020.5%204.125%2020.325%203.775%2019.975C3.425%2019.625%203.25%2019.1974%203.25%2018.6923V3H4.75V18.6923C4.75%2018.7692%204.78208%2018.8398%204.84625%2018.9038C4.91025%2018.9679%204.98075%2019%205.05775%2019H20.75V20.5H5.05775ZM6.69225%2017.25V9.09625H9.69225V17.25H6.69225ZM11.4423%2017.25V4.09625H14.4423V17.25H11.4423ZM16.1923%2017.25V13.0963H19.1923V17.25H16.1923Z'%20/%3e%3c/g%3e%3c/svg%3e";
const DoubleUpArrow = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2053_16759'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='20'%20height='20'%3e%3crect%20x='20'%20width='20'%20height='20'%20transform='rotate(90%2020%200)'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2053_16759)'%3e%3cpath%20d='M5.72745%209.70948C5.48476%209.46679%205.48476%209.07331%205.72745%208.83062L9.99948%204.55859L14.2715%208.83062C14.5142%209.07331%2014.5142%209.46679%2014.2715%209.70949C14.0291%209.95189%2013.6362%209.95222%2013.3934%209.71023L9.99948%206.32776L6.60558%209.71023C6.36277%209.95222%205.96986%209.95189%205.72745%209.70948ZM5.72745%2015.0012C5.48476%2014.7585%205.48476%2014.365%205.72745%2014.1223L9.99948%209.85026L14.2715%2014.1223C14.5142%2014.365%2014.5142%2014.7585%2014.2715%2015.0012C14.0291%2015.2436%2013.6362%2015.2439%2013.3934%2015.0019L9.99948%2011.6194L6.60558%2015.0019C6.36277%2015.2439%205.96986%2015.2436%205.72745%2015.0012Z'%20/%3e%3c/g%3e%3c/svg%3e";
const UpArrowToggle = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.33013%205C7.71503%204.33333%208.67728%204.33333%209.06218%205L12.5263%2011C12.9112%2011.6667%2012.4301%2012.5%2011.6603%2012.5H4.73205C3.96225%2012.5%203.48113%2011.6667%203.86603%2011L7.33013%205Z'%20/%3e%3c/svg%3e";
function MatchFlow() {
  const flowData = [
    { type: "up", name: "최다 득점 쿼터", value: 2, quarter: "2Q" },
    { type: "up", name: "최다 연속 득점", value: 4, quarter: "4Q" },
    { type: "down", name: "최다 실점 쿼터", value: 3, quarter: "3Q" },
    { type: "down", name: "최다 연속 실점", value: 1, quarter: "1Q" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: clsx(baseCardContainerNoTrans, flexColumnGap20), children: [
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, children: [
      /* @__PURE__ */ jsxs("div", { className: clsx(fonts.body2.semibold, colors.gray900, flexRowGap4), children: [
        /* @__PURE__ */ jsx(ChartIcon, { width: 28, height: 28 }),
        "경기 흐름"
      ] }),
      /* @__PURE__ */ jsx("p", { className: semantic.description, children: "진행된 경기의 세부 스코어 데이터를 알 수 있어요." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: matchFlowWinRate, children: [
      /* @__PURE__ */ jsxs("div", { className: flexRowGap4, children: [
        /* @__PURE__ */ jsx(DoubleUpArrow, { width: 20, height: 20 }),
        /* @__PURE__ */ jsx("div", { className: fonts.body4.medium, children: "경기 우위 비율" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: fonts.body4.semibold, children: "15%" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: matchFlowScoredQuarter, children: flowData.map((item) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: flexColumnGap12,
        style: {
          padding: "16px 0",
          backgroundColor: "var(--background-light)"
        },
        children: [
          /* @__PURE__ */ jsxs("p", { className: clsx(flexRowGap4, flexCenterJA), children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: item.type === "up" ? colors.primary500 : colors.red500,
                style: { transform: item.type === "down" ? "rotate(180deg)" : "none" },
                children: /* @__PURE__ */ jsx(UpArrowToggle, { width: 16, height: 16 })
              }
            ),
            /* @__PURE__ */ jsx("span", { className: fonts.caption1.regular, children: item.name })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: clsx(flexRowGap12, flexCenterJA), children: [
            /* @__PURE__ */ jsxs("span", { className: clsx([item.type === "up" ? colors.primary500 : colors.red500, fonts.body4.medium]), children: [
              item.value,
              "점"
            ] }),
            /* @__PURE__ */ jsx(Badge, { type: item.type === "up" ? "primary" : "red", size: "medium", fillType: "light", children: item.quarter })
          ] })
        ]
      },
      item.name
    )) })
  ] });
}
const GroupIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2846'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='25'%20height='24'%3e%3crect%20x='0.45459'%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2846)'%3e%3cpath%20d='M2.17384%2017.7885C1.50047%2017.7885%200.95459%2017.2426%200.95459%2016.5692C0.95459%2015.9039%201.30201%2015.3574%201.99684%2014.9297C2.69184%2014.5022%203.59767%2014.2885%204.71434%2014.2885C4.89884%2014.2885%205.08467%2014.2942%205.27184%2014.3057C5.45901%2014.3172%205.64751%2014.3397%205.83734%2014.373C5.64251%2014.6847%205.49792%2015.0081%205.40359%2015.3432C5.30942%2015.6786%205.26234%2016.0225%205.26234%2016.375C5.26234%2017.1556%204.6295%2017.7885%203.84884%2017.7885H2.17384ZM8.32959%2017.7885C7.5702%2017.7885%206.95459%2017.1729%206.95459%2016.4135C6.95459%2015.9453%207.08601%2015.5174%207.34884%2015.1297C7.61167%2014.7419%207.99051%2014.4038%208.48534%2014.1155C8.98017%2013.827%209.56484%2013.6107%2010.2393%2013.4665C10.9137%2013.3222%2011.6508%2013.25%2012.4508%2013.25C13.2662%2013.25%2014.011%2013.3222%2014.6853%2013.4665C15.3597%2013.6107%2015.9443%2013.827%2016.4391%2014.1155C16.9341%2014.4038%2017.3104%2014.7419%2017.5681%2015.1297C17.8258%2015.5174%2017.9546%2015.9453%2017.9546%2016.4135C17.9546%2017.1729%2017.339%2017.7885%2016.5796%2017.7885H8.32959ZM21.0573%2017.7885C20.2783%2017.7885%2019.6468%2017.157%2019.6468%2016.378C19.6468%2016.0018%2019.6023%2015.6473%2019.5133%2015.3145C19.4242%2014.9818%2019.2905%2014.668%2019.1123%2014.373C19.3085%2014.3397%2019.496%2014.3172%2019.6748%2014.3057C19.8537%2014.2942%2020.0303%2014.2885%2020.2046%2014.2885C21.3213%2014.2885%2022.2254%2014.4997%2022.9171%2014.9222C23.6088%2015.3446%2023.9546%2015.8936%2023.9546%2016.5692C23.9546%2017.2426%2023.4087%2017.7885%2022.7353%2017.7885H21.0573ZM4.71159%2013.3172C4.24026%2013.3172%203.83759%2013.1497%203.50359%2012.8145C3.16959%2012.4793%203.00259%2012.0764%203.00259%2011.6057C3.00259%2011.1289%203.17026%2010.7261%203.50559%2010.3972C3.84076%2010.0684%204.24367%209.90399%204.71434%209.90399C5.19117%209.90399%205.59559%2010.0684%205.92759%2010.3972C6.25976%2010.7261%206.42584%2011.1299%206.42584%2011.6087C6.42584%2012.0734%206.26151%2012.4743%205.93284%2012.8115C5.60434%2013.1487%205.19726%2013.3172%204.71159%2013.3172ZM20.2046%2013.3172C19.7379%2013.3172%2019.336%2013.1487%2018.9988%2012.8115C18.6617%2012.4743%2018.4931%2012.0734%2018.4931%2011.6087C18.4931%2011.1299%2018.6617%2010.7261%2018.9988%2010.3972C19.336%2010.0684%2019.7385%209.90399%2020.2063%209.90399C20.6885%209.90399%2021.094%2010.0684%2021.4228%2010.3972C21.7517%2010.7261%2021.9161%2011.1289%2021.9161%2011.6057C21.9161%2012.0764%2021.7521%2012.4793%2021.4241%2012.8145C21.0961%2013.1497%2020.6896%2013.3172%2020.2046%2013.3172ZM12.4581%2012.5C11.7378%2012.5%2011.1244%2012.2476%2010.6181%2011.7427C10.1118%2011.2381%209.85859%2010.6252%209.85859%209.90399C9.85859%209.16832%2010.1109%208.55174%2010.6156%208.05424C11.1204%207.55657%2011.7334%207.30774%2012.4546%207.30774C13.1901%207.30774%2013.8067%207.55624%2014.3043%208.05324C14.8018%208.55007%2015.0506%209.16582%2015.0506%209.90049C15.0506%2010.6207%2014.8022%2011.234%2014.3053%2011.7405C13.8083%2012.2468%2013.1926%2012.5%2012.4581%2012.5Z'%20/%3e%3c/g%3e%3c/svg%3e";
function MatchPlayers() {
  const mvpPhoto = "https://thumb.zumst.com/530x0/https://static.news.zumst.com/images/2/2023/03/30/0d96b666658043f7994f61ce280fb06e.jpg";
  return /* @__PURE__ */ jsxs("div", { className: clsx(baseCardContainerNoTrans, flexColumnGap20), children: [
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, children: [
      /* @__PURE__ */ jsxs("div", { className: clsx(fonts.body2.semibold, colors.gray900, flexRowGap4), children: [
        /* @__PURE__ */ jsx(GroupIcon, { width: 28, height: 28 }),
        "선수 데이터"
      ] }),
      /* @__PURE__ */ jsx("p", { className: semantic.description, children: "경기에서 맹활약한 플레이어들을 확인해 보세요." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: matchPlayersDataCard, children: [
      /* @__PURE__ */ jsx("h5", { className: fonts.body4.semibold, children: "MVP" }),
      /* @__PURE__ */ jsx("div", { className: matchPlayerMvpPhoto, style: { backgroundImage: `url(${mvpPhoto})` }, children: /* @__PURE__ */ jsx("p", { className: matchPlayerMvpInfo, children: "NO.19 홍길동" }) }),
      /* @__PURE__ */ jsxs("div", { className: flexColumnGap8, children: [
        /* @__PURE__ */ jsxs("div", { className: flexRowGap8, children: [
          /* @__PURE__ */ jsxs("div", { className: matchPlayerDataMVPDetail, children: [
            /* @__PURE__ */ jsx("span", { className: clsx(fonts.caption1.medium, colors.gray500), children: "득점" }),
            /* @__PURE__ */ jsx("span", { className: clsx(fonts.caption1.semibold, colors.primary500), children: "5점" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: matchPlayerDataMVPDetail, children: [
            /* @__PURE__ */ jsx("span", { className: clsx(fonts.caption1.medium, colors.gray500), children: "어시스트" }),
            /* @__PURE__ */ jsx("span", { className: clsx(fonts.caption1.semibold, colors.primary500), children: "13회" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: matchPlayerDataMVPDetail, children: [
          /* @__PURE__ */ jsx("span", { className: clsx(fonts.caption1.medium, colors.gray500), children: "리바운드" }),
          /* @__PURE__ */ jsx("span", { className: clsx(fonts.caption1.semibold, colors.primary500), children: "13회" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: matchPlayersDataCard, children: [
      /* @__PURE__ */ jsx("h5", { className: fonts.body4.semibold, children: "쿼터별 주요 선수" }),
      /* @__PURE__ */ jsx("div", { style: { backgroundImage: `url(${mvpPhoto})` } })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap8, children: [
      /* @__PURE__ */ jsxs("div", { className: matchPlayersDataCard, children: [
        /* @__PURE__ */ jsx("h5", { className: fonts.body4.semibold, children: "득점왕" }),
        /* @__PURE__ */ jsxs("div", { className: matchPlayerDataMVPDetail, children: [
          /* @__PURE__ */ jsx("span", { className: clsx(fonts.caption1.medium, colors.gray500), children: "득점" }),
          /* @__PURE__ */ jsx("span", { className: clsx(fonts.caption1.semibold, colors.primary500), children: "13점" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: flexRowGap8, children: [
        /* @__PURE__ */ jsxs("div", { className: matchPlayersDataCard, children: [
          /* @__PURE__ */ jsx("h5", { className: fonts.body4.semibold, children: "어시스트왕" }),
          /* @__PURE__ */ jsxs("div", { className: matchPlayerDataMVPDetail, children: [
            /* @__PURE__ */ jsx("span", { className: clsx(fonts.caption1.medium, colors.gray500), children: "어시스트" }),
            /* @__PURE__ */ jsx("span", { className: clsx(fonts.caption1.semibold, colors.primary500), children: "13회" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: matchPlayersDataCard, children: [
          /* @__PURE__ */ jsx("h5", { className: fonts.body4.semibold, children: "리바운드왕" }),
          /* @__PURE__ */ jsxs("div", { className: matchPlayerDataMVPDetail, children: [
            /* @__PURE__ */ jsx("span", { className: clsx(fonts.caption1.medium, colors.gray500), children: "리바운드" }),
            /* @__PURE__ */ jsx("span", { className: clsx(fonts.caption1.semibold, colors.primary500), children: "13회" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function PlayersList() {
  const { showModal, ModalComponents } = useModal();
  const params = useParams({ strict: false });
  params["matchId"];
  const [currentTeam, setCurrentTeam] = useState("HOME");
  const MOCK_PROFILE_IMG = "https://cdn.interfootball.co.kr/news/photo/202012/514959_420656_1454.jpg";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { type: "button", onClick: showModal, className: clsx(fonts.body3.medium, baseCardContainer), children: "선수 전체 명단" }),
    /* @__PURE__ */ jsx(
      ModalComponents,
      {
        title: "선수 명단",
        draggable: "all",
        buttons: [
          {
            name: "닫기",
            onClick: (close) => {
              close();
            },
            mode: "primary"
          }
        ],
        children: /* @__PURE__ */ jsxs(Wrapper, { className: "scrollable-container", children: [
          /* @__PURE__ */ jsx("div", { className: "tab-container", children: /* @__PURE__ */ jsx(
            MainTab,
            {
              type: "line",
              color: "primary",
              items: [
                { name: "홈팀", value: "HOME" },
                { name: "원정팀", value: "AWAY" }
              ],
              initialValue: currentTeam,
              nowValue: setCurrentTeam,
              sameWidth: true
            }
          ) }),
          /* @__PURE__ */ jsx(List, { className: flexColumnGap20, children: TEAM_PLAYERS_MOCK.map((player) => /* @__PURE__ */ jsxs("li", { className: clsx(flexSpaceBetween, flexAlignCenter), children: [
            /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap12, flexAlignCenter), children: [
              /* @__PURE__ */ jsx("img", { src: MOCK_PROFILE_IMG, alt: player.name }),
              /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, style: { gap: 0 }, children: [
                /* @__PURE__ */ jsxs("span", { className: clsx(fonts.body4.medium, flexAlignCenter, flexRowGap4), children: [
                  /* @__PURE__ */ jsxs("span", { className: "back-number", children: [
                    "NO.",
                    player.backNumber.toString().padStart(2, "0")
                  ] }),
                  player.name,
                  player.startingYn === "Y" && /* @__PURE__ */ jsx(Badge, { type: "magenta", fillType: "light", size: "small", children: "선발" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: semantic.description, children: player.position })
              ] })
            ] }),
            /* @__PURE__ */ jsx(RightArrowIcon, { fill: "var(--gray700)", width: 18, height: 18 })
          ] }, player.id)) })
        ] })
      }
    )
  ] });
}
const Wrapper = styled.section`
  position: relative;
  margin-top: -20px;
  max-height: 60vh;
  padding: 0 4px;
  overflow-y: auto;
  ${SCROLL_HIDE};

  div.tab-container {
    position: sticky;
    padding-bottom: 20px;
    top: 0;
    z-index: 5;
    background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 24%);
  }
`;
const List = styled.ul`
  li {
    img {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      object-fit: cover;
    }
  }
  span.back-number {
    opacity: 0.8;
    letter-spacing: -0.03rem;
    font-size: 90%;
    font-weight: 700;
  }
`;
const TEAM_PLAYERS_MOCK = [
  { id: "1", img: "", name: "김길동", backNumber: 20, position: "가드", startingYn: "Y" },
  { id: "2", img: "", name: "고길동", backNumber: 7, position: "가드", startingYn: "Y" },
  { id: "3", img: "", name: "서길동", backNumber: 88, position: "포워드", startingYn: "Y" },
  { id: "4", img: "", name: "홍길동", backNumber: 8, position: "포워드", startingYn: "Y" },
  { id: "5", img: "", name: "박길동", backNumber: 10, position: "포워드", startingYn: "N" },
  { id: "15", img: "", name: "왕길동", backNumber: 15, position: "포워드", startingYn: "N" },
  { id: "51", img: "", name: "대길동", backNumber: 19, position: "가드", startingYn: "Y" },
  { id: "45", img: "", name: "송길동", backNumber: 28, position: "센터", startingYn: "Y" },
  { id: "7", img: "", name: "송길동", backNumber: 28, position: "포워드", startingYn: "N" },
  { id: "88", img: "", name: "송길동", backNumber: 28, position: "센터", startingYn: "Y" }
];
function MatchPage() {
  const {
    matchId
  } = Route.useParams();
  const {
    data: match,
    isLoading
  } = useGet(`${matchAPI.matches}/${matchId}`);
  if (isLoading || !match) {
    return /* @__PURE__ */ jsx(Loading, { page: true });
  }
  return /* @__PURE__ */ jsxs("section", { className: clsx(flexColumnGap20, baseContainerPaddingTop), style: {
    marginTop: "calc((env(safe-area-inset-top) + var(--header-height)) * -1)",
    paddingTop: "calc(env(safe-area-inset-top) + var(--header-height))",
    backgroundColor: "var(--gray100)"
  }, children: [
    /* @__PURE__ */ jsx(MatchHeader, { title: match.title, subtitle: "서울경인지역예선 16강", date: match.matchDateTime, time: "14:00", home: {
      name: match.homeTeamName,
      logo: "",
      score: match.homeScore,
      fouls: 10,
      timeouts: 2
    }, away: {
      name: match.awayTeamName,
      logo: "",
      score: match.awayScore,
      fouls: 8,
      timeouts: 3
    } }),
    /* @__PURE__ */ jsx(MatchFlow, {}),
    /* @__PURE__ */ jsx(MatchPlayers, {}),
    /* @__PURE__ */ jsx(PlayersList, {})
  ] });
}
export {
  MatchPage as component
};
