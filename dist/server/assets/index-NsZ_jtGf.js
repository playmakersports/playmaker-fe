import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import styled from "styled-components";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { F as FONTS, C as CARD_ACTIVE } from "./common-6ceLbjxn.js";
import { a as formattedDate } from "./date-DKPo_LKv.js";
import { B as BaseContainer } from "./Container-AJHSCHjd.js";
import { useForm } from "react-hook-form";
import { useRouter, useParams } from "@tanstack/react-router";
import { u as useToast } from "./useToast-hwetiz13.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import React from "react";
import { B as BasicWhiteCard } from "./Card-7o_ZdfYV.js";
import { F as FloatButton } from "./FloatButton-pCr3Cp-L.js";
import { I as InputCheckbox } from "./SelectInput-Dl1BIb6a.js";
import "jotai";
import "date-fns";
import "sonner";
import "./AlertFilled-JvwFT9H1.js";
import "./Close20-w_89MMCP.js";
import "./Check-xgghRidd.js";
function ApplyInfo(props) {
  useHeader({ title: "대회 신청" });
  const { title, place, startDate, endDate } = props;
  return /* @__PURE__ */ jsx(BaseContainer, { children: /* @__PURE__ */ jsxs(Container$1, { children: [
    /* @__PURE__ */ jsx("h2", { children: title }),
    /* @__PURE__ */ jsxs("ul", { className: "info-list", children: [
      /* @__PURE__ */ jsx("li", { children: place }),
      /* @__PURE__ */ jsxs("li", { children: [
        formattedDate(startDate, {
          displayDateType: ".",
          displayYear: "always",
          displayDayName: "short-with-parenthesis"
        }),
        " ",
        "-",
        " ",
        formattedDate(endDate, {
          displayDateType: ".",
          displayYear: "not-this-year",
          displayDayName: "short-with-parenthesis"
        })
      ] })
    ] })
  ] }) });
}
const Container$1 = styled.div`
  padding: 20px;
  background-color: var(--background);
  border-radius: 10px;

  h2 {
    ${FONTS.body3("semibold")};
  }
  ul.info-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 16px;
    ${FONTS.body4("regular")};
    color: var(--gray600);

    li {
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;
const CardInput = React.forwardRef(({ type, value, children, id, ...rest }, ref) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Input, { type, ref, id, value, ...rest }),
  /* @__PURE__ */ jsx(Card, { htmlFor: id, role: "button", children })
] }));
CardInput.displayName = "CardInput";
const Card = styled(BasicWhiteCard).attrs({ as: "label" })`
  cursor: pointer;
  ${FONTS.body3("regular")};
  width: 100%;
  font-weight: 400;
  ${CARD_ACTIVE}
`;
const Input = styled.input`
  display: none;
  &:checked + ${Card} {
    font-weight: 500;
    padding: 17px 19px; // border 2px 고려
    border: 2px solid var(--main);
    color: var(--main);
  }
  &:disabled + ${Card} {
    transform: translateY(0);
    box-shadow: none;
  }
`;
function ApplyTeamSelect() {
  const { trigger } = useToast();
  const router = useRouter();
  const params = useParams({ strict: false });
  const competitionId = params["competitionId"];
  const { register, watch, handleSubmit } = useForm();
  const isReCheckTeam = watch("ReCheckTeam") && !!watch("teamId");
  const TEAMS_MOCK = [
    { teamName: "SPABA1", teamId: 123, teamLogo: "" },
    { teamName: "SPABA2", teamId: 233, teamLogo: "" },
    { teamName: "SPABA3", teamId: 533, teamLogo: "" }
  ];
  const onSubmit = (data) => {
    console.log(data);
    trigger("참가 신청이 완료됐어요", { type: "success" });
    router.navigate({ to: `/competition/${competitionId}`, replace: true });
  };
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs("form", { className: "inner-wrapper", onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsx("p", { className: "info-title", children: "출전할 팀을 선택해주세요" }),
      /* @__PURE__ */ jsx(TeamList, { children: TEAMS_MOCK.map((team) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(CardInput, { type: "radio", value: `${team.teamId}`, id: `${team.teamId}`, ...register("teamId"), children: /* @__PURE__ */ jsxs("p", { className: "card-inner", children: [
        /* @__PURE__ */ jsx("span", { className: "team-logo" }),
        /* @__PURE__ */ jsx("span", { className: "team-name", children: team.teamName })
      ] }) }) }, team.teamId)) }),
      /* @__PURE__ */ jsx(FloatButton, { children: /* @__PURE__ */ jsx(Button, { type: "submit", mode: "primary", disabled: !isReCheckTeam, fullWidth: true, children: "신청" }) })
    ] }),
    /* @__PURE__ */ jsx(InputCheckbox, { id: "ReCheckTeam", text: { title: "위 선택한 팀으로 신청합니다" }, ...register("ReCheckTeam") })
  ] });
}
const Container = styled(BaseContainer)`
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  form.inner-wrapper {
    flex: 1;
    overflow-y: auto;
    padding: 0 12px;
  }
  p.info-title {
    ${FONTS.body3("semibold")};
  }
`;
const TeamList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 18px;

  li {
    display: flex;
    p.card-inner {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }

  span.team-logo {
    display: block;
    width: 60px;
    height: 60px;
    background-color: var(--gray100);
    border-radius: 50%;
  }
  span.team-name {
    ${FONTS.body3("semibold")};
    font-size: 1.8rem;
  }
`;
function CompetitionApply() {
  return /* @__PURE__ */ jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - var(--safe-area-top) - 64px - var(--env-sab))"
  }, children: [
    /* @__PURE__ */ jsx(ApplyInfo, { title: "제 2회 한국유소년 스포츠 연맹 대학 농구 친선전 KUSE 경기", place: "서울과학기술대학교 체육관", startDate: "2024-12-30", endDate: "2025-01-03" }),
    /* @__PURE__ */ jsx(ApplyTeamSelect, {})
  ] });
}
export {
  CompetitionApply as component
};
