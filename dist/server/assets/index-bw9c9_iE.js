import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { q as flexColumnGap24, h as baseContainer } from "./container.css-C2ezn6CH.js";
import { style } from "@vanilla-extract/css";
import styled from "styled-components";
import { F as FONTS } from "./common-6ceLbjxn.js";
import "jotai";
import "react";
const TeamRecordChartArea = style({
  minHeight: "280px",
  borderRadius: "0 0 20px 20px",
  backgroundColor: "var(--background-light)",
  boxShadow: "var(--shadow-sm)"
});
function TeamRecords() {
  useHeader({
    title: "전적 분석",
    options: {
      titleAlign: "center"
    },
    subIcons: [{
      svgIcon: /* @__PURE__ */ jsx(Fragment, {}),
      description: "",
      onClick: ""
    }]
  });
  return /* @__PURE__ */ jsxs("div", { className: flexColumnGap24, children: [
    /* @__PURE__ */ jsx("div", { className: TeamRecordChartArea }),
    /* @__PURE__ */ jsx("div", { className: baseContainer, children: /* @__PURE__ */ jsxs(Records, { children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "match-name", children: "경기명" }),
        /* @__PURE__ */ jsx("th", { children: "득점" }),
        /* @__PURE__ */ jsx("th", { children: "실점" }),
        /* @__PURE__ */ jsx("th", { children: "결과" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: MOCK.map((item) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { className: "match-name", children: item.matchName }),
        /* @__PURE__ */ jsx("td", { className: "goal", children: /* @__PURE__ */ jsx("span", { children: item.goal }) }),
        /* @__PURE__ */ jsx("td", { className: "miss", children: /* @__PURE__ */ jsx("span", { children: item.miss }) }),
        /* @__PURE__ */ jsx("td", { className: "result", style: {
          color: item.goal > item.miss ? "var(--primary500)" : "var(--gray300)"
        }, children: item.goal > item.miss ? "승" : "패" })
      ] }, item.id)) })
    ] }) })
  ] });
}
const MOCK = [{
  id: 1,
  matchName: "2023-09-01",
  goal: 35,
  miss: 13
}, {
  id: 2,
  matchName: "2023-09-01",
  goal: 35,
  miss: 63
}, {
  id: 52,
  matchName: "2023-09-01",
  goal: 35,
  miss: 63
}, {
  id: 32,
  matchName: "2023-09-01",
  goal: 85,
  miss: 10
}];
const Records = styled.table`
  width: 100%;
  & > thead {
    ${FONTS.caption1("medium")};
    text-align: left;
    color: var(--gray500);
    & > tr {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  & > tbody tr {
    ${FONTS.body4("regular")};
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 0;
    color: var(--gray700);
    border-bottom: 1px solid var(--gray100);
    &:last-of-type {
      border-bottom: none;
    }
  }
  th,
  td {
    vertical-align: middle;
    width: 32px;
  }
  th.match-name,
  td.match-name {
    flex: 1;
  }
  td.goal > span,
  td.miss > span {
    ${FONTS.body4("regular")};
    display: inline-block;
    width: 100%;
    border-radius: 6px;
    padding: 4px 0;
    color: var(--gray600);
    background-color: var(--gray50);
    border: 1px solid var(--gray100);
    text-align: center;
  }
  td.goal > span {
    background-color: var(--gray100);
  }
  td.result {
    ${FONTS.body4("semibold")};
    text-align: center;
  }
`;
export {
  TeamRecords as component
};
