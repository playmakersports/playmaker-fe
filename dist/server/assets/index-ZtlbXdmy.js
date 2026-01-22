import { jsxs, jsx } from "react/jsx-runtime";
import styled from "styled-components";
import { useRouter } from "@tanstack/react-router";
import { s as scrollMaskedHandler, a as scrollMaskedHandlerRef } from "./display-DVSv9f0r.js";
import { S as SCROLL_MASKED_GRADIENT, a as SCROLL_HIDE, F as FONTS } from "./common-6ceLbjxn.js";
import { c as countDayDiff, a as formattedDate } from "./date-DKPo_LKv.js";
import { B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import { P as PlusIcon } from "./Plus-CBBY8JMW.js";
import "date-fns";
import "react";
import "clsx";
import "./fonts.css-vMQm04zv.js";
import "@vanilla-extract/css";
import "./Wrapper-DpW65hF8.js";
import "./InputWrapper-CgYCSwII.js";
import "./container.css-DZr6lpKA.js";
import "./Close20-w_89MMCP.js";
import "./Search-DrxoJQ2v.js";
function CompetitionViewPC() {
  const router = useRouter();
  const STATUS_NAME = {
    CLOSED: "종료",
    PENDING: "진행중",
    BEFORE: "진행예정"
  };
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs(Aside, { children: [
      /* @__PURE__ */ jsx(Filter, { children: /* @__PURE__ */ jsx(BasicInput, { type: "text", placeholder: "대회명으로 찾기", iconType: "search" }) }),
      /* @__PURE__ */ jsx(List, { children: /* @__PURE__ */ jsx("ul", { className: "list-inner", ref: (prev) => scrollMaskedHandlerRef(prev, "vertical"), onScroll: (prev) => scrollMaskedHandler(prev, "vertical"), children: COMPETITIONS.map((competition) => /* @__PURE__ */ jsxs(Item, { children: [
        /* @__PURE__ */ jsxs("p", { className: "competition-header", children: [
          /* @__PURE__ */ jsx("span", { className: "competition-title", children: competition.title }),
          /* @__PURE__ */ jsx(Status, { className: competition.status, children: competition.status === "BEFORE" ? `D-${countDayDiff(competition.startDate)}` : STATUS_NAME[competition.status] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "competition-date", children: formattedDate(competition.startDate, {
          displayDateType: ".",
          displayYear: "always",
          displayDayName: "hide"
        }) })
      ] }, competition.competitionId)) }) }),
      /* @__PURE__ */ jsx(AsideBottom, { children: /* @__PURE__ */ jsx(Button, { type: "button", mode: "primary", onClick: () => {
        router.navigate({
          to: "/pc/staff/competition/create"
        });
      }, fullWidth: true, children: /* @__PURE__ */ jsxs("span", { className: "button-inner", children: [
        /* @__PURE__ */ jsx(PlusIcon, { fill: "#fff" }),
        "새 대회 만들기"
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Detail, { children: "상세정보" })
  ] });
}
const Container = styled.section`
  display: flex;
  gap: 24px;
  height: 100%;
  overflow: hidden;
`;
const Aside = styled.aside`
  display: flex;
  max-width: 18vw;
  min-width: 240px;
  padding: 12px 14px 0 4px;
  flex-direction: column;
  border-right: 1px solid var(--gray300);
`;
const AsideBottom = styled.div`
  margin: 16px 0 20px;
  span.button-inner {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
`;
const Filter = styled.div`
  display: flex;
  padding: 12px 0 0 0;
  flex-direction: column;
  gap: 8px;
`;
const List = styled.div`
  flex: 1;
  margin: 16px 0 0;
  ${SCROLL_MASKED_GRADIENT("256,256,256")}
  ul.list-inner {
    display: flex;
    height: 100%;
    flex-direction: column;
    overflow-y: scroll;
    ${SCROLL_HIDE};
  }
`;
const Item = styled.li`
  cursor: pointer;
  padding: 16px 10px;
  border-bottom: 1px solid var(--gray200);
  p.competition-header {
    ${FONTS.body3("regular")};
    display: flex;
    align-items: center;
    gap: 4px;
    span.competition-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  p.competition-date {
    ${FONTS.body4("regular")};
    font-weight: 400;
    color: var(--gray600);
  }
  &:last-of-type {
    border: none;
  }
  &:hover {
    background-color: var(--gray50);
  }
`;
const Detail = styled.article`
  ${FONTS.body4("regular")};
  flex: 1;
  padding-top: 20px;
  font-weight: 400;
`;
const Status = styled.span`
  ${FONTS.body4("regular")};
  font-size: 1.3rem;
  line-height: 1.2rem;
  padding: 4px;
  border-radius: 4px;
  background-color: var(--primary50);
  color: var(--primary600);
  word-break: keep-all;
  &.BEFORE {
    font-weight: 600;
    background-color: var(--red100);
    color: var(--red500);
  }
  &.CLOSED {
    background-color: var(--gray200);
    color: var(--gray700);
  }
`;
const COMPETITIONS = [{
  competitionId: 1,
  status: "BEFORE",
  title: "전국대학생농구대회",
  startDate: "2024-11-26"
}, {
  competitionId: 2,
  status: "PENDING",
  title: "홍익대학교배 대학생대회",
  startDate: "2024-11-09"
}, {
  competitionId: 3,
  status: "PENDING",
  title: "제20회 U-리그 대회",
  startDate: "2023-10-30"
}, {
  competitionId: 4,
  status: "CLOSED",
  title: "제1회 대학동아리연합농구대회",
  startDate: "2023-09-01"
}, {
  competitionId: 5,
  status: "CLOSED",
  title: "전국대학생농구대회",
  startDate: "2023-05-15"
}, {
  competitionId: 6,
  status: "CLOSED",
  title: "제19회 U-리그 대회",
  startDate: "2023-04-30"
}, {
  competitionId: 7,
  status: "CLOSED",
  title: "제14회 대학아마추어농구대회",
  startDate: "2023-04-01"
}, {
  competitionId: 8,
  status: "CLOSED",
  title: "전국대학생농구대회",
  startDate: "2022-06-08"
}, {
  competitionId: 9,
  status: "CLOSED",
  title: "전국대학생농구대회",
  startDate: "2022-06-09"
}, {
  competitionId: 10,
  status: "CLOSED",
  title: "제13회 대학아마추어농구대회",
  startDate: "2022-05-10"
}, {
  competitionId: 11,
  status: "CLOSED",
  title: "제18회 U-리그 대회",
  startDate: "2022-04-10"
}, {
  competitionId: 12,
  status: "CLOSED",
  title: "전국대학생농구대회",
  startDate: "2022-03-30"
}, {
  competitionId: 13,
  status: "CLOSED",
  title: "전국대학생농구대회",
  startDate: "2022-02-30"
}, {
  competitionId: 14,
  status: "CLOSED",
  title: "전국대학생농구대회",
  startDate: "2021-10-30"
}, {
  competitionId: 15,
  status: "CLOSED",
  title: "전국대학생농구대회",
  startDate: "2021-10-15"
}];
export {
  CompetitionViewPC as component
};
