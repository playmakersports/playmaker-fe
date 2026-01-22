import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import styled from "styled-components";
import { a as COMPETITION_DETAIL_MOCK } from "./COMPETITION-B-h5l23v.js";
import { W as WhiteSectionDivider, B as BaseContainer } from "./Container-AJHSCHjd.js";
import { useRef } from "react";
import { useRouter, useSearch } from "@tanstack/react-router";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { u as useStickyMoment } from "./useStickyMoment-DIRi6KdR.js";
import { a as formattedDate } from "./date-DKPo_LKv.js";
import { B as Badge } from "./Badge-CVtyNCaL.js";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
import { P as PersonIcon } from "./Person-BRhULpHA.js";
import { h as Route } from "./router-mwjOH7mt.js";
import "jotai";
import "date-fns";
import "./common-6ceLbjxn.js";
import "@microsoft/clarity";
function CompetitionHeader(props) {
  const { competitionId, competitionName, matchLocation, startDate, endDate } = props;
  const router = useRouter();
  const searchParams = useSearch({ strict: false });
  const isReadyPage = searchParams?.initial;
  const competitionHeaderRef = useRef(null);
  useHeader({ title: props.competitionName, transparent: true });
  useStickyMoment(competitionHeaderRef);
  const moveToDetail = () => {
    router.navigate({ to: `/competition/${competitionId}?initial=ready` });
  };
  return /* @__PURE__ */ jsx(Header, { ref: competitionHeaderRef, children: /* @__PURE__ */ jsxs(Information, { children: [
    /* @__PURE__ */ jsx("h2", { className: "competition-name", children: competitionName }),
    /* @__PURE__ */ jsxs(Label, { children: [
      /* @__PURE__ */ jsx(Badge, { type: "primary", children: "모집중" }),
      /* @__PURE__ */ jsx(Badge, { type: "warning", children: "8강" }),
      /* @__PURE__ */ jsx(Badge, { type: "info", children: "남자부" }),
      /* @__PURE__ */ jsx(Badge, { type: "gray", children: "단체전" }),
      /* @__PURE__ */ jsx(Badge, { type: "gray", children: "대학부" })
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "competition-detail", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { children: matchLocation }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("span", { children: [
        formattedDate(startDate, {
          displayDateType: "kr",
          displayYear: "always",
          displayDayName: "hide"
        }),
        " ",
        "~",
        " ",
        formattedDate(endDate, {
          displayDateType: "kr",
          displayYear: "not-this-year",
          displayDayName: "hide"
        })
      ] }) }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx(PersonIcon, {}),
        /* @__PURE__ */ jsxs("span", { children: [
          competitionId,
          "팀 참여"
        ] })
      ] })
    ] }),
    isReadyPage === "ready" ? /* @__PURE__ */ jsx(Fragment, {}) : /* @__PURE__ */ jsxs(DetailButton, { type: "button", onClick: moveToDetail, children: [
      "대회 정보 자세히",
      /* @__PURE__ */ jsx(RightArrowIcon, {})
    ] })
  ] }) });
}
const Header = styled.div`
  display: flex;
  gap: 24px;
  top: 0;
  transition: all 0.25s;
  background-color: var(--background-light);
`;
const Label = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin: 0 -16px 10px;
  padding: 12px 16px;
  width: var(--mobile-max-width);
  border-top: 1px solid var(--gray200);
`;
const Information = styled.div`
  position: relative;
  flex: 1;
  display: inline-block;
  padding: 0 4px 8px;

  h2.competition-name {
    padding: 6px 0 14px;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.6rem;
  }
  ul.competition-detail {
    display: flex;
    padding: 0 2px;
    flex-direction: column;
    gap: 5px;

    li {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: var(--gray700);
      svg {
        fill: var(--gray800);
      }
    }
  }
`;
const DetailButton = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
  padding: 10px 0;
  color: var(--gray800);
  font-size: 1.4rem;
  font-weight: 500;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--gray500);
  }
`;
function CompetitionArticle() {
  const MOCK = COMPETITION_DETAIL_MOCK;
  const {
    competitionId
  } = Route.useParams();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(CoverImage, { src: MOCK.posterImg }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(CompetitionHeader, { competitionId: MOCK.competitionId, competitionName: MOCK.competitionName, startDate: MOCK.startDate, endDate: MOCK.endDate, matchLocation: MOCK.matchLocation }) }),
    /* @__PURE__ */ jsx(WhiteSectionDivider, {})
  ] });
}
const Container = styled(BaseContainer)`
  padding-bottom: 0;
`;
const CoverImage = styled.section`
  margin-top: calc(-1 * var(--safe-area-top));
  width: 100%;
  height: calc(232px + var(--env-sat));
  background-color: var(--gray600);
  background-image: url(${({
  src
}) => src});
  background-size: cover;
  background-repeat: no-repeat;
`;
export {
  CompetitionArticle as component
};
