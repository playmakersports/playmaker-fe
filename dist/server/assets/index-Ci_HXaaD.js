import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { u as useGet } from "./query-Ciubt76c.js";
import { useRef, useState } from "react";
import styled from "styled-components";
import Flicking from "@egjs/react-flicking";
import { F as FONTS, B as BUTTON_ACTIVE, C as CARD_ACTIVE, T as TEXT_ACTIVE, S as SCROLL_MASKED_GRADIENT } from "./common-6ceLbjxn.js";
import NumberFlow from "@number-flow/react";
import clsx from "clsx";
import { isSameDay, isToday, startOfWeek, addDays, format } from "date-fns";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { f as filterButtonContainer, F as FilterLineIcon, h as homeContentsContainer } from "./FilterLine-DdLzIwkB.js";
import { u as useModal } from "./useModal--yzWVOVY.js";
import { C as CheckIcon } from "./Check-xgghRidd.js";
import { C as Chip } from "./Chip-Bq9i_bIn.js";
import { a as formattedDate, c as countDayDiff } from "./date-DKPo_LKv.js";
import { C as CalendarIcon } from "./Calendar-CZ4mMM-F.js";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
import { u as useStickyMoment } from "./useStickyMoment-DIRi6KdR.js";
import { M as MainTab } from "./MainTab-DOXli7NZ.js";
import { useRouter, Link } from "@tanstack/react-router";
import { B as BasicWhiteCard } from "./Card-7o_ZdfYV.js";
import { G as GroupTitle } from "./GroupTitle-BCFfFyEu.js";
import { S as SUPPORT_SPORTS } from "./SPORTS-C8KNL8RQ.js";
import { C as COMPETITION_LIST_MOCK } from "./COMPETITION-B-h5l23v.js";
import { s as scrollMaskedHandler, a as scrollMaskedHandlerRef } from "./display-DVSv9f0r.js";
import { P as PlusIcon } from "./Plus-CBBY8JMW.js";
import { c as commonAPI } from "./authToken-Bx9YTtw3.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import "@tanstack/react-query";
import "@vanilla-extract/css";
import "./Button-cLlpCM0x.js";
import "./Portal-D4P9dmtA.js";
import "react-dom";
import "./container.css-C2ezn6CH.js";
import "./Close20-w_89MMCP.js";
import "./RightDirection-DCcZ277n.js";
import "cookies-next";
import "axios";
function Banner() {
  const flickRef = useRef(null);
  const [activePanel, setActivePanel] = useState(0);
  const data = [
    {
      background: "https://basketkorea.com/news/data/20230701/p1065582677150200_187_thum.jpg",
      title: `2025 국민대배 전국 대학생 농구대회`,
      description: "2025.02.19 - 02.28",
      buttonName: "",
      linkTo: ""
    },
    {
      background: "https://cdn.news.unn.net/news/photo/202010/236095_122053_4627.jpg",
      title: "KSUF U-리그 대학배구",
      description: "2025.03.20 - 2025.03.31",
      buttonName: "",
      linkTo: ""
    },
    {
      background: "https://basketkorea.com/news/data/20230701/p1065582677150200_187_thum.jpg",
      title: `2025 국민대배 전국 대학생 농구대회`,
      description: "2025.02.19 - 02.28",
      buttonName: "",
      linkTo: ""
    }
  ];
  const onPanelChanged = (e) => {
    setActivePanel(e.index);
  };
  return /* @__PURE__ */ jsxs(Container$3, { children: [
    /* @__PURE__ */ jsx(
      Flicking,
      {
        ref: flickRef,
        moveType: "strict",
        circular: true,
        onWillChange: onPanelChanged,
        onChanged: onPanelChanged,
        children: data.map((banner, index) => /* @__PURE__ */ jsx(Panel, { children: /* @__PURE__ */ jsx("div", { className: "inner-container", style: { backgroundImage: `url(${banner.background})` }, children: /* @__PURE__ */ jsxs("p", { className: "left", children: [
          /* @__PURE__ */ jsx("span", { className: "title", children: banner.title }),
          /* @__PURE__ */ jsx("span", { className: "description", children: banner.description })
        ] }) }) }, index))
      }
    ),
    /* @__PURE__ */ jsxs(Index, { "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx(NumberFlow, { value: activePanel + 1 }),
      /* @__PURE__ */ jsx("span", { children: "/" }),
      data.length
    ] })
  ] });
}
const BANNER_HEIGHT = 250;
const Container$3 = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: calc(${BANNER_HEIGHT}px + var(--safe-area-top));
  overflow: hidden;
  box-shadow: var(--shadow-alpha20);

  .flicking-viewport {
    position: relative;
    width: 100%;
    transform-style: preserve-3d;
    overflow: visible;
  }
  .flicking-camera {
    display: flex;
    align-items: center;
    transform-style: preserve-3d;
    will-change: transform;
  }
`;
const Panel = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: calc(${BANNER_HEIGHT}px + var(--safe-area-top));
  display: flex;
  justify-content: center;
  align-items: center;

  div.inner-container {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 20px calc(20px + 16px);
    align-items: flex-end;
    justify-content: space-between;
    white-space: pre-wrap;
    background-size: 100%;
    background-position: center;

    p.left {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      color: #fff;
    }
    span.title {
      ${FONTS.body2("semibold")};
    }
    span.description {
      ${FONTS.caption1("medium")};
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 55%;
      background: linear-gradient(to top, #000, transparent);
    }
  }
`;
const Index = styled.div`
  position: absolute;
  display: inline-flex;
  gap: 2px;
  bottom: calc(20px + 16px);
  right: 20px;
  z-index: 1;
  padding: 3px 10px;
  color: var(--white);
  border-radius: 999px;
  box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.08);
  background-color: rgba(256, 256, 256, 0.4);
  ${FONTS.caption1("medium")};
`;
const BottomSheetSelect = (props) => {
  const { title, description, options, value, onChange, children } = props;
  const { showModal, ModalComponents } = useModal();
  const [selectedOption, setSelectedOption] = useState(value);
  const onSelected = (target) => {
    onChange(target);
    setSelectedOption(target);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: showModal, role: "button", children }),
    /* @__PURE__ */ jsx(ModalComponents, { draggable: "all", title, description, children: ({ closeModal }) => /* @__PURE__ */ jsx(ModalInner, { children: /* @__PURE__ */ jsx("div", { className: "dropdown-options", children: options.map((option) => /* @__PURE__ */ jsxs("label", { children: [
      option.name,
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "radio",
          name: "dropdown-option",
          defaultChecked: selectedOption === option.value ? true : false,
          value: option.value,
          onClick: () => {
            onSelected(option.value);
            closeModal();
          }
        }
      ),
      /* @__PURE__ */ jsx(CheckIcon, {})
    ] }, option.value)) }) }) })
  ] });
};
const ModalInner = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--gray200);

  div.dropdown-options {
    display: flex;
    margin: -8px -8px 0;
    flex-direction: column;
    gap: 8px;
  }

  label {
    user-select: none !important;
    display: flex;
    padding: 8px;
    align-items: center;
    justify-content: space-between;
    color: var(--gray700);
    ${FONTS.body4("regular")};
    ${BUTTON_ACTIVE("var(--gray50)")};

    input + svg {
      display: none;
      width: 24px;
      height: 24px;
      fill: var(--primary500);
    }
    input:checked + svg {
      display: block;
    }
  }
  i,
  input[type="radio"] {
    display: none;
  }
`;
function MyWeekly() {
  const [activeDate, setActiveDate] = useState(/* @__PURE__ */ new Date());
  const [filterTeam, setFilterTeam] = useState("all");
  const SCHEDULE_MOCK = [
    {
      scheduleId: 35,
      date: "2025-04-10",
      time: "13:40",
      teamName: "SPABA",
      teamId: 123,
      title: "000 대회 참여",
      category: "훈련"
    },
    {
      scheduleId: 23,
      date: "2025-04-10",
      time: "16:40",
      teamName: "SPABA",
      teamId: 123,
      title: "000 대회 참여",
      category: "교류전"
    },
    {
      scheduleId: 1243,
      date: "2025-04-11",
      time: "10:40",
      teamName: "SPABA",
      teamId: 123,
      title: "000 대회 참여",
      category: "대회"
    },
    {
      scheduleId: 1523,
      date: "2025-04-13",
      time: "13:40",
      teamName: "SPABA",
      teamId: 123,
      title: "000 대회 참여",
      category: "대회"
    },
    {
      scheduleId: 2523,
      date: "2025-04-15",
      time: "11:40",
      teamName: "SPABA",
      teamId: 1243,
      title: "참가 신청",
      category: "팀 이벤트"
    }
  ];
  const handleActiveDate = (date) => {
    setActiveDate(date);
  };
  return /* @__PURE__ */ jsxs(Wrapper$1, { "aria-label": "이번주 나의 일정", children: [
    /* @__PURE__ */ jsxs(Title, { children: [
      /* @__PURE__ */ jsxs("div", { className: "title-wrapper", children: [
        /* @__PURE__ */ jsx(CalendarIcon, {}),
        /* @__PURE__ */ jsx("span", { className: "title", children: "다가오는 주요 일정" }),
        /* @__PURE__ */ jsx("button", { type: "button", children: /* @__PURE__ */ jsx(RightArrowIcon, {}) })
      ] }),
      /* @__PURE__ */ jsx(
        BottomSheetSelect,
        {
          title: "필터",
          description: "일정에 보여질 팀 리스트를 선택해 주세요.",
          options: [
            { name: "전체", value: "all" },
            { name: "SPABA", value: "23" },
            { name: "FCGOGO", value: "253" }
          ],
          onChange: (value) => setFilterTeam(value),
          children: /* @__PURE__ */ jsxs("div", { className: filterButtonContainer, children: [
            /* @__PURE__ */ jsx(FilterLineIcon, { width: 16, height: 16, fill: "var(--gray600)" }),
            "필터"
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Week, { children: getDatesOfCurrentWeek().map((value, i) => /* @__PURE__ */ jsxs("button", { type: "button", className: "day-wrapper", onClick: () => handleActiveDate(new Date(value)), children: [
      /* @__PURE__ */ jsx("span", { className: "date-name", children: WEEK_NAME[i] }),
      /* @__PURE__ */ jsx("span", { className: clsx("day-number", isSameDay(value, activeDate) && "active-date", i === 5 && "has-plan"), children: +value.split("-")[2] })
    ] }, value)) }),
    /* @__PURE__ */ jsx(Schedules, { children: SCHEDULE_MOCK.map((schedule) => /* @__PURE__ */ jsxs("li", { className: "schedule-item", style: { marginBottom: "4px" }, children: [
      /* @__PURE__ */ jsx("span", { className: "day-signature", children: isToday(schedule.date) ? /* @__PURE__ */ jsx("span", { className: fonts.caption1.semibold, style: { color: "var(--primary500)" }, children: "Today" }) : formattedDate(schedule.date, {
        displayDateType: ".",
        displayYear: "not-this-year",
        displayDayName: "hide",
        displayTime: "hide"
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "day-information", "data-category": schedule.category, children: [
        /* @__PURE__ */ jsxs("p", { className: "left", children: [
          /* @__PURE__ */ jsx("span", { className: "team-logo" }),
          /* @__PURE__ */ jsx("span", { className: "schedule-time", children: schedule.time }),
          /* @__PURE__ */ jsx("span", { className: "schedule-title", children: schedule.title })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "schedule-category", children: /* @__PURE__ */ jsx(Chip, { type: CHIP_COLOR[schedule.category], fillType: "light", children: schedule.category }) })
      ] })
    ] }, schedule.scheduleId)) })
  ] });
}
const CHIP_COLOR = {
  훈련: "primary",
  교류전: "info",
  대회: "red",
  "팀 이벤트": "magenta"
};
const Wrapper$1 = styled.div``;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;

  div.title-wrapper {
    display: flex;
    align-items: center;
  }
  span.title {
    margin-left: 8px;
    margin-right: 4px;
    color: var(--gray900);
    ${FONTS.body2("semibold")};
  }
  button {
    width: 24px;
    height: 24px;
  }
  svg {
    width: 24px;
    height: 24px;
    fill: var(--gray700);
  }
`;
const Week = styled.div`
  user-select: none;
  display: flex;
  justify-content: space-between;

  button.day-wrapper {
    flex: 1;
    text-align: center;

    span.date-name {
      ${FONTS.caption1("medium")};
      display: block;
      padding: 3px 0;
      color: var(--gray400);
    }

    span.day-number {
      ${FONTS.body3("medium")};
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      color: var(--gray700);

      &.has-plan {
        color: var(--primary500);
        background-color: var(--primary50);
      }
      &.active-date {
        ${FONTS.body3("semibold")};
        color: var(--white);
        background-color: var(--primary500);
      }
    }
  }
`;
const Schedules = styled.ul`
  margin-top: 20px;

  li.schedule-item {
    display: flex;
    gap: 12px;
    height: 44px;
    justify-content: space-between;
    align-items: flex-start;
  }
  span.day-signature {
    width: 36px;
    color: var(--gray400);
    ${FONTS.caption1("medium")};
  }
  div.day-information {
    position: relative;
    flex: 1;
    display: flex;
    padding: 10px 0 10px 12px;
    justify-content: space-between;
    gap: 8px;
    p.left {
      display: flex;
      gap: 8px;
      align-items: center;
      ${FONTS.body4("regular")};
    }
    span.schedule-time {
      font-variant-numeric: tabular-nums;
      letter-spacing: -0.01rem;
    }
    span.team-logo {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid var(--gray200);
    }

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      height: 100%;
      width: 3px;
      border-radius: 2px;
    }
    &[data-category="훈련"] {
      &::before {
        background-color: var(--primary400);
      }
    }
    &[data-category="교류전"] {
      &::before {
        background-color: var(--info400);
      }
    }
    &[data-category="대회"] {
      &::before {
        background-color: var(--red400);
      }
    }
    &[data-category="팀 이벤트"] {
      &::before {
        background-color: var(--magenta300);
      }
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
function CompetitionCard(props) {
  const router = useRouter();
  const { posterImg, competitionId, competitionName, startDate, endDate, matchLocation, attendMembers } = props;
  const dayCount = () => {
    if (countDayDiff(startDate) === 0) return "D-DAY";
    return `D${countDayDiff(startDate) > 0 ? -countDayDiff(startDate) : "+" + -countDayDiff(startDate)}`;
  };
  return /* @__PURE__ */ jsxs(MediumCardContainer, { onClick: () => router.navigate({ to: `/competition/${competitionId}` }), children: [
    /* @__PURE__ */ jsx("div", { className: "match-poster", style: { backgroundImage: `url(${posterImg})` }, "data-d-day": dayCount() }),
    /* @__PURE__ */ jsxs(MediumContents, { children: [
      /* @__PURE__ */ jsx("h5", { children: competitionName }),
      /* @__PURE__ */ jsxs(DetailList, { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("dt", { children: "일시" }),
          /* @__PURE__ */ jsxs("dd", { children: [
            formattedDate(startDate, {
              displayYear: "not-this-year",
              displayDateType: "kr",
              displayDayName: "hide",
              displayTime: "hide"
            }),
            " ",
            "~",
            " ",
            formattedDate(endDate, {
              displayYear: "not-this-year",
              displayDateType: "kr",
              displayDayName: "hide",
              displayTime: "hide"
            })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("dt", { children: "장소" }),
          /* @__PURE__ */ jsx("dd", { children: matchLocation })
        ] }),
        !!attendMembers && /* @__PURE__ */ jsxs("li", { className: "attend-number", children: [
          "우리 팀에서 ",
          attendMembers,
          "명 출전"
        ] })
      ] })
    ] })
  ] });
}
const MediumCardContainer = styled(BasicWhiteCard)`
  display: flex;
  padding: 0;
  overflow: hidden;

  .match-poster {
    position: relative;
    ${FONTS.body3("semibold")};
    width: 112px;
    height: 128px;
    background-size: cover;
    background-position: center;
    background-color: var(--gray300);
    &::before {
      position: absolute;
      content: attr(data-d-day);
      top: 0;
      left: 0;
      margin: 8px;
      padding: 2px 6px;
      border-radius: 16px;
      backdrop-filter: blur(12px);
      background-color: rgba(0, 0, 0, 0.1);
      color: #fff;
    }
  }
  ${CARD_ACTIVE}
`;
const DetailList = styled.ul`
  ${FONTS.body4("regular")};
  margin: 10px 0 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 400;
  li {
    display: inline-flex;
    gap: 14px;
    dt {
      color: var(--gray900);
      font-weight: 500;
      word-break: keep-all;
    }
    dd {
      color: var(--gray700);
    }
  }
`;
const MediumContents = styled.div`
  padding: 12px 18px;

  h5 {
    ${FONTS.body3("semibold")};
    color: var(--gray900);
  }
  li.attend-number {
    color: var(--main);
  }
`;
function MoreButton(props) {
  const { text, href } = props;
  const router = useRouter();
  return /* @__PURE__ */ jsxs(Container$2, { type: "button", onClick: () => router.navigate({ to: href }), children: [
    text,
    " ",
    /* @__PURE__ */ jsx(RightArrowIcon, { width: 12, height: 12 })
  ] });
}
const Container$2 = styled.button`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin: 12px 0 0;
  width: 100%;
  color: var(--gray600);
  border-radius: 10px;
  ${FONTS.body4("regular")};
  font-weight: 400;
  svg {
    fill: var(--gray600);
  }
  &:hover {
    background-color: var(--gray100);
    box-shadow: 0 0 0 4px var(--gray100);
  }
  ${TEXT_ACTIVE("var(--gray200)", {
  scalable: true
})};
`;
function RecruitTeamItem(props) {
  const { teamId, teamName, univName, location, logoImg } = props;
  const router = useRouter();
  return /* @__PURE__ */ jsx(
    Container$1,
    {
      type: "button",
      onClick: () => {
        router.navigate({ to: `/team/${teamId}` });
      },
      children: /* @__PURE__ */ jsxs(ItemWrapper, { children: [
        /* @__PURE__ */ jsx(TeamImage$1, { src: logoImg }),
        /* @__PURE__ */ jsx(TeamInfo, { children: /* @__PURE__ */ jsxs("p", { className: "name", children: [
          /* @__PURE__ */ jsx("span", { className: "team-name", children: teamName }),
          /* @__PURE__ */ jsx("span", { className: "univ-name", children: univName ?? location })
        ] }) })
      ] })
    }
  );
}
const ItemWrapper = styled.div`
  display: flex;
  transition: transform 0.2s;
  gap: 12px;
`;
const Container$1 = styled.button`
  margin: 0 -12px;
  padding: 6px 12px;
  border-radius: 12px;
  transition: all 0.2s;

  &:active {
    background-color: var(--background);
  }
  &:active > ${ItemWrapper} {
    transform: scale(0.97);
  }
`;
const TeamImage$1 = styled.img`
  padding: 2px;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid var(--gray300);
  border-radius: 100%;
`;
const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  .name {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--gray800);
  }
  .univ-name {
    opacity: 0.8;
    ${FONTS.body4("regular")};
    color: var(--gray700);
    &::before {
      content: "• ";
    }
  }
  .location-time {
    ${FONTS.body4("regular")};
  }
  .team-name {
    ${FONTS.body3("semibold")};
  }
`;
const TEAM_LIST_MOCK = [
  {
    teamId: "33",
    teamName: "SPABA",
    univName: "서울과기대",
    location: "서울과학기술대학교 체육관",
    logoImg: "/images/mock/spabalogo.png"
  },
  {
    teamId: "2",
    teamName: "JUMP",
    univName: "홍익대",
    location: "홍익대학교 체육관",
    logoImg: "/images/mock/hongik-jump.png"
  },
  {
    teamId: "3",
    teamName: "zoo",
    univName: "고려대",
    location: "고려대학교 화정체육관",
    logoImg: "/images/mock/zoo-logo.png"
  }
];
function SportsSection() {
  const tabRef = useRef(null);
  useStickyMoment(tabRef);
  const [activeTab, setActiveTab] = useState(SUPPORT_SPORTS[0].value);
  return /* @__PURE__ */ jsxs(Wrapper, { children: [
    /* @__PURE__ */ jsx(SportsTitle, { children: /* @__PURE__ */ jsxs("span", { children: [
      SUPPORT_SPORTS.find((v) => v.value === activeTab)?.name,
      " 정보를 한 눈에"
    ] }) }),
    /* @__PURE__ */ jsx(TabWrapper, { ref: tabRef, children: /* @__PURE__ */ jsx(
      MainTab,
      {
        color: "primary",
        type: "light",
        size: "medium",
        nowValue: (value) => {
          setActiveTab(value);
        },
        items: SUPPORT_SPORTS
      }
    ) }),
    /* @__PURE__ */ jsxs(Cards, { children: [
      /* @__PURE__ */ jsxs(Container, { children: [
        /* @__PURE__ */ jsx(GroupTitle, { children: "팀 살펴보기" }),
        /* @__PURE__ */ jsx(ListWrapperColumn, { children: TEAM_LIST_MOCK.map((value, index) => /* @__PURE__ */ jsx(RecruitTeamItem, { ...value }, index)) }),
        /* @__PURE__ */ jsx(LineBottom, {}),
        /* @__PURE__ */ jsx(MoreButton, { text: "더 많은 팀 보기", href: `/team?sports=${activeTab}` })
      ] }),
      /* @__PURE__ */ jsx(GroupTitle, { link: "", children: "대회 일정" }),
      COMPETITION_LIST_MOCK.map((competition, index) => /* @__PURE__ */ jsx(
        CompetitionCard,
        {
          posterImg: competition.posterImg,
          competitionId: competition.competitionId,
          competitionName: competition.competitionName,
          startDate: competition.startDate,
          endDate: competition.endDate,
          matchLocation: competition.matchLocation
        },
        competition.competitionId
      ))
    ] })
  ] });
}
const Wrapper = styled.div`
  background-color: var(--background-light);
  margin: 0 -16px;
  padding: 16px 16px var(--safe-bottom-navigation);
`;
const TabWrapper = styled.div`
  position: sticky;
  padding: 8px 0;
  background-color: var(--background-light);
  z-index: 1;
  transition: all 0.3s;

  &.stuck {
    margin: 0 -16px;
    padding: 10px 16px 8px;
    box-shadow: var(--shadow-xs);
  }
`;
const SportsTitle = styled.h3`
  margin: 16px -16px 24px;
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;

  span {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    position: relative;
    &::before,
    &::after {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background: var(--primary300);
      border-radius: 50%;
      filter: blur(2px);
    }
  }
`;
const Container = styled(BasicWhiteCard)`
  padding: 24px 20px 12px;
`;
const ListWrapperColumn = styled.div`
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const LineBottom = styled.div`
  margin: 0 -16px 2px;
  border-bottom: 1px solid var(--gray200);
`;
function MyTeam({ data }) {
  return /* @__PURE__ */ jsxs(TeamList, { as: "article", "aria-label": "나의 팀 목록", children: [
    /* @__PURE__ */ jsx("div", { className: "list-wrapper", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "team-list",
        ref: (ref) => scrollMaskedHandlerRef(ref, "horizontal"),
        onScroll: (e) => scrollMaskedHandler(e, "horizontal"),
        children: data?.map((item) => /* @__PURE__ */ jsx(Link, { to: `/team/${item.teamId}`, children: /* @__PURE__ */ jsxs(TeamItem, { "aria-label": item.teamName, role: "button", children: [
          /* @__PURE__ */ jsx(
            TeamImage,
            {
              style: {
                backgroundImage: `url(${item.teamLogo})`
              }
            }
          ),
          /* @__PURE__ */ jsx("span", { className: clsx(fonts.caption1.medium, "team-name"), children: item.teamName })
        ] }) }, item.teamId))
      }
    ) }),
    /* @__PURE__ */ jsx(Link, { to: "/team", children: /* @__PURE__ */ jsxs(FindTeamButton, { "aria-label": "새로운 팀 찾기", children: [
      /* @__PURE__ */ jsx("span", { className: "circle", children: /* @__PURE__ */ jsx(PlusIcon, {}) }),
      /* @__PURE__ */ jsx("span", { className: "text", children: "살펴보기" })
    ] }) })
  ] });
}
const TeamList = styled.div`
  display: flex;
  gap: 12px;
  margin: 0 -16px;
  padding: 0 16px 0 0;
  border-bottom: 1px solid var(--gray200);
  border-top-left-radius: 20px;
  align-items: center;
  overflow: hidden;

  div.list-wrapper {
    flex: 1;
    ${SCROLL_MASKED_GRADIENT("var(--background-light-rgb)")}
  }
  .team-list {
    padding: 20px 4px 18px 20px;
    display: flex;
    gap: 20px;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;
const TeamItem = styled.a`
  user-select: none;
  position: relative;
  display: flex;
  width: 52px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--gray900);
  border-radius: 2px;
  ${TEXT_ACTIVE("var(--gray100)", { scalable: true })}

  span.team-name {
    width: 44px;
    color: var(--gray700);
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    overflow: hidden;
  }
`;
const TeamImage = styled.div`
  display: block;
  width: 44px;
  height: 44px;
  border: 1px solid var(--gray200);
  background-size: 48px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
`;
const FindTeamButton = styled.a`
  display: flex;
  margin: 20px 0 18px;
  flex-direction: column;
  gap: 4px;

  span.circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px dashed var(--gray300);
    svg {
      width: 24px;
      height: 24px;
      fill: var(--gray400);
    }
  }
  span.text {
    ${FONTS.caption1("medium")};
    color: var(--gray400);
    text-align: center;
  }
`;
function Home() {
  const {
    data: homeData,
    isLoading
  } = useGet(commonAPI.HOME);
  if (isLoading) {
    return /* @__PURE__ */ jsx(Loading, { page: true });
  }
  return /* @__PURE__ */ jsxs("div", { style: {
    marginTop: "calc(-1 * var(--safe-area-top))"
  }, children: [
    /* @__PURE__ */ jsx(Banner, {}),
    /* @__PURE__ */ jsxs("section", { className: homeContentsContainer, children: [
      /* @__PURE__ */ jsx(MyTeam, { data: homeData?.teams }),
      /* @__PURE__ */ jsx(MyWeekly, {}),
      /* @__PURE__ */ jsx(SportsSection, {})
    ] })
  ] });
}
export {
  Home as component
};
