import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link, useSearch } from "@tanstack/react-router";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { u as useStickyMoment } from "./useStickyMoment-DIRi6KdR.js";
import { b as teamFindAllBanner, c as teamFindAllBannerIndex, d as teamFindAllGroupContainer, e as teamFindAllBgGroupContainer, t as teamFindSearchContainer, a as teamFindSearchInput } from "./teamFind.css-WQyolMa0.js";
import { M as MainTab } from "./MainTab-DOXli7NZ.js";
import { S as SUPPORT_SPORTS } from "./SPORTS-C8KNL8RQ.js";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
/* empty css                */
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { d as flexColumnGap4, h as baseContainer, m as flexSpaceBetween, o as baseCardContainer, n as flexRowGap8, g as flexColumnGap10, k as flexRowGap4, l as flexAlignCenter, p as flexRowGap10, q as flexColumnGap24, f as flexColumnGap12, a as flexColumnGap20 } from "./container.css-C2ezn6CH.js";
import { formatDate } from "date-fns";
import { u as useModal } from "./useModal--yzWVOVY.js";
import { a as usePost, u as useGet } from "./query-Ciubt76c.js";
import { u as useToast } from "./useToast-hwetiz13.js";
import { H as HeartIcon } from "./Heart-MAVvv3Fe.js";
import { L as LocationPinIcon } from "./LocationPin-DegDBbH0.js";
import { P as PeopleIcon } from "./People-dk9UROdd.js";
import { f as filterButtonContainer, F as FilterLineIcon } from "./FilterLine-DdLzIwkB.js";
import { I as InputCheckbox } from "./SelectInput-Dl1BIb6a.js";
import { mapValues, groupBy } from "es-toolkit";
import { c as commonAPI } from "./authToken-Bx9YTtw3.js";
import { B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import { L as LocationContainer, a as LocationChildList } from "./location-styled-DzexRJKn.js";
import { S as SearchIcon } from "./Search-DrxoJQ2v.js";
import { P as PlusFloat } from "./PlusFloat-CUJwxAcR.js";
import "jotai";
import "@vanilla-extract/css";
import "./common-6ceLbjxn.js";
import "./Portal-D4P9dmtA.js";
import "react-dom";
import "@tanstack/react-query";
import "sonner";
import "./AlertFilled-JvwFT9H1.js";
import "./Close20-w_89MMCP.js";
import "./Check-xgghRidd.js";
import "cookies-next";
import "axios";
import "./Wrapper-DpW65hF8.js";
import "./InputWrapper-CgYCSwII.js";
import "./container.css-DZr6lpKA.js";
import "./Plus-CBBY8JMW.js";
function TeamFindAll() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        loop: true,
        slidesPerView: "auto",
        style: {
          height: "180px"
        },
        children: bannerList.map((banner, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: teamFindAllBanner, style: { backgroundImage: `url(${banner.imageUrl})` }, children: [
          /* @__PURE__ */ jsxs("div", { className: teamFindAllBannerIndex, children: [
            index + 1,
            /* @__PURE__ */ jsx("span", { children: "/" }),
            bannerList.length
          ] }),
          /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, style: { width: "100%" }, children: [
            /* @__PURE__ */ jsx("p", { className: fonts.body2.semibold, children: banner.title }),
            /* @__PURE__ */ jsx("p", { className: fonts.body4.medium, style: { opacity: 0.8 }, children: banner.description })
          ] })
        ] }) }, banner.id))
      }
    ),
    /* @__PURE__ */ jsxs("article", { className: baseContainer, children: [
      /* @__PURE__ */ jsx("div", { className: teamFindAllGroupContainer, children: /* @__PURE__ */ jsxs(GroupTitle, { className: flexColumnGap4, children: [
        /* @__PURE__ */ jsxs("div", { className: clsx(flexSpaceBetween), children: [
          /* @__PURE__ */ jsxs("h5", { className: fonts.body2.semibold, children: [
            "이번주 가장 ",
            /* @__PURE__ */ jsx("span", { className: "highlight", children: "인기 있는 팀" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: fonts.caption1.regular, children: [
            formatDate(/* @__PURE__ */ new Date(), "MM-dd / HH:mm"),
            " 기준"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: fonts.body4.regular, children: "이번주 TOP3 스포츠 팀을 모았어요" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: teamFindAllBgGroupContainer, children: /* @__PURE__ */ jsxs(GroupTitle, { className: flexColumnGap4, children: [
        /* @__PURE__ */ jsxs("h5", { className: fonts.body2.semibold, children: [
          "지금 ",
          /* @__PURE__ */ jsx("span", { className: "highlight", children: "팀원 모집 중" }),
          "인 관심 팀"
        ] }),
        /* @__PURE__ */ jsx("p", { className: fonts.body4.regular, children: "사용자 님이 둘러본 팀들이 현재 부원을 모집중이에요!" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: teamFindAllGroupContainer, children: /* @__PURE__ */ jsxs(GroupTitle, { className: flexColumnGap4, children: [
        /* @__PURE__ */ jsxs("h5", { className: fonts.body2.semibold, children: [
          "요즘 활발하게 ",
          /* @__PURE__ */ jsx("span", { className: "highlight", children: "활동 중" }),
          "인 팀"
        ] }),
        /* @__PURE__ */ jsx("p", { className: fonts.body4.regular, children: "최근 가입자가 가장 많은 팀들이에요" })
      ] }) })
    ] })
  ] });
}
const bannerList = [
  {
    id: 1,
    title: "배너 제목1",
    description: "배너 설명1",
    imageUrl: "https://placehold.co/600x400"
  },
  {
    id: 2,
    title: "배너 제목2",
    description: "배너 설명2",
    imageUrl: "https://placehold.co/600x400"
  }
];
const GroupTitle = styled.div`
  & h5 {
    color: var(--gray900);
  }
  & p {
    color: var(--gray400);
  }
  span.highlight {
    color: var(--primary500);
  }
`;
const HeartFillIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2832'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2832)'%3e%3cpath%20d='M13.1038%2019.3345C12.4761%2019.8988%2011.5239%2019.8988%2010.8963%2019.3345C9.23858%2017.8307%207.86775%2016.5384%206.78375%2015.4578C5.69975%2014.3769%204.84075%2013.415%204.20675%2012.572C3.57275%2011.7292%203.12983%2010.9603%202.878%2010.2653C2.626%209.57044%202.5%208.86536%202.5%208.15002C2.5%206.73086%202.9785%205.54269%203.9355%204.58552C4.89267%203.62852%206.08083%203.15002%207.5%203.15002C8.373%203.15002%209.198%203.35419%209.975%203.76252C10.752%204.17086%2011.427%204.75644%2012%205.51927C12.573%204.75644%2013.248%204.17086%2014.025%203.76252C14.802%203.35419%2015.627%203.15002%2016.5%203.15002C17.9192%203.15002%2019.1073%203.62852%2020.0645%204.58552C21.0215%205.54269%2021.5%206.73086%2021.5%208.15002C21.5%208.86536%2021.374%209.57044%2021.122%2010.2653C20.8702%2010.9603%2020.4272%2011.7292%2019.7932%2012.572C19.1592%2013.415%2018.3018%2014.3769%2017.221%2015.4578C16.1403%2016.5384%2014.7679%2017.8307%2013.1038%2019.3345Z'%20/%3e%3c/g%3e%3c/svg%3e";
const Spinner = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20200%20200'%3e%3cradialGradient%20id='a11'%20cx='.66'%20fx='.66'%20cy='.3125'%20fy='.3125'%20gradientTransform='scale(1.5)'%3e%3cstop%20offset='0'%20stop-color='%23306def'%3e%3c/stop%3e%3cstop%20offset='.3'%20stop-color='%23306def'%20stop-opacity='.9'%3e%3c/stop%3e%3cstop%20offset='.6'%20stop-color='%23306def'%20stop-opacity='.6'%3e%3c/stop%3e%3cstop%20offset='.8'%20stop-color='%23306def'%20stop-opacity='.3'%3e%3c/stop%3e%3cstop%20offset='1'%20stop-color='%23306def'%20stop-opacity='0'%3e%3c/stop%3e%3c/radialGradient%3e%3ccircle%20transform-origin='center'%20fill='none'%20stroke='url(%23a11)'%20stroke-width='24'%20stroke-linecap='round'%20stroke-dasharray='200%201000'%20stroke-dashoffset='0'%20cx='100'%20cy='100'%20r='70'%3e%3canimateTransform%20type='rotate'%20attributeName='transform'%20calcMode='spline'%20dur='2'%20values='360;0'%20keyTimes='0;1'%20keySplines='0%200%201%201'%20repeatCount='indefinite'%3e%3c/animateTransform%3e%3c/circle%3e%3ccircle%20transform-origin='center'%20fill='none'%20opacity='.2'%20stroke='%23306def'%20stroke-width='24'%20stroke-linecap='round'%20cx='100'%20cy='100'%20r='70'%3e%3c/circle%3e%3c/svg%3e";
const TeamHeart = ({ teamId, isHeart, onHeart }) => {
  const { trigger } = useToast();
  const { mutate, isPending, isSuccess, isError, error } = usePost(`/api/teamjoin/subscribed/${teamId}`);
  useEffect(() => {
    if (isError) {
      trigger(error.message);
    }
  }, [isError, trigger, error]);
  const handleClick = (event) => {
    if (isPending) return;
    event.stopPropagation();
    mutate({ data: {} });
    if (isSuccess) {
      onHeart(!isHeart);
    }
  };
  return /* @__PURE__ */ jsx(
    HeartButton,
    {
      type: "button",
      onClick: handleClick,
      "aria-label": `내가 좋아요 ${isHeart ? "한 팀" : "하지 않은 팀"}. 좋아요를 ${isHeart ? "해제" : ""}하려면 선택하세요.`,
      children: isPending ? /* @__PURE__ */ jsx(Spinner, {}) : isHeart ? /* @__PURE__ */ jsx(HeartFillIcon, { className: "fill-heart" }) : /* @__PURE__ */ jsx(HeartIcon, { className: "stroke-heart" })
    }
  );
};
const HeartButton = styled.button`
  svg {
    width: 24px;
    height: 24px;
  }
  svg.fill-heart {
    fill: var(--primary500);
  }
  svg.stroke-heart {
    fill: var(--gray400);
  }
`;
function TeamListCard(props) {
  const { university, teamId, teamLogo, teamName, location, teamIntro, gender, memberCnt, likeCnt } = props;
  const [heart, setHeart] = useState(false);
  return /* @__PURE__ */ jsxs(CardHeader, { className: baseCardContainer, style: { padding: "12px" }, children: [
    /* @__PURE__ */ jsxs(Link, { to: `/team/${teamId}`, className: flexRowGap8, style: { flex: 1 }, children: [
      /* @__PURE__ */ jsx("img", { src: teamLogo, alt: teamName }),
      /* @__PURE__ */ jsxs("div", { className: flexColumnGap10, style: { flex: 1 }, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: fonts.body3.medium, children: teamName }),
          /* @__PURE__ */ jsx("p", { className: fonts.body4.regular, children: teamIntro })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: clsx(fonts.caption1.regular, flexRowGap10), style: { color: "var(--gray400)" }, children: [
          university ? /* @__PURE__ */ jsx("div", { className: clsx(flexRowGap4, flexAlignCenter), children: /* @__PURE__ */ jsx("span", { children: university }) }) : /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap4, flexAlignCenter), children: [
            /* @__PURE__ */ jsx(LocationPinIcon, { width: 18, height: 18 }),
            location
          ] }),
          /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap4, flexAlignCenter), children: [
            /* @__PURE__ */ jsx(PeopleIcon, { width: 18, height: 18 }),
            memberCnt,
            "명"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: clsx(flexColumnGap10, flexAlignCenter, fonts.caption1.medium),
        style: {
          userSelect: "none",
          width: "24px",
          wordBreak: "keep-all",
          letterSpacing: "-0.35px",
          gap: 0,
          color: "var(--gray400)"
        },
        children: [
          /* @__PURE__ */ jsx(TeamHeart, { teamId, isHeart: heart, onHeart: setHeart }),
          Intl.NumberFormat("ko-KR", {
            notation: "compact",
            compactDisplay: "short",
            roundingMode: "trunc"
          }).format(likeCnt)
        ]
      }
    )
  ] });
}
const CardHeader = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--gray700);

  img {
    display: inline-block;
    padding: 3px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--background-light);
    border: 1px solid var(--gray200);
    overflow: hidden;
    object-fit: cover;
  }
`;
function FilterButton({ onClick, children }) {
  return /* @__PURE__ */ jsxs("button", { type: "button", onClick, className: filterButtonContainer, children: [
    /* @__PURE__ */ jsx(FilterLineIcon, { width: 16, height: 16, fill: "var(--gray600)" }),
    children
  ] });
}
const useAreaGet = () => useGet(`${commonAPI.CODES}/activeArea`);
function LocationFilterModal(props) {
  const { ModalComponents } = props;
  const { data, isLoading } = useAreaGet();
  const [sido, setSido] = useState({ key: "", name: "" });
  const [sigungu, setSigungu] = useState("");
  const sidoList = data?.map((v) => v.parent);
  const sigunguList = mapValues(
    groupBy(data ?? [], (item) => item.parent.codeSequenceKey),
    (arr) => arr[0].child
  );
  return /* @__PURE__ */ jsx(ModalComponents, { draggable: "bar", children: ({ closeModal, setState }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap24, children: [
      /* @__PURE__ */ jsxs("div", { className: flexColumnGap12, children: [
        /* @__PURE__ */ jsx("p", { className: fonts.body2.semibold, children: "지역 필터링" }),
        /* @__PURE__ */ jsx(BasicInput, { type: "text", iconType: "search", placeholder: "지역을 검색해 주세요." })
      ] }),
      /* @__PURE__ */ jsx(LocationContainer, { style: { maxHeight: "55vh" }, className: fonts.body3.regular, children: /* @__PURE__ */ jsxs(LocationChildList, { children: [
        /* @__PURE__ */ jsx("ul", { className: "parent", children: sidoList?.map((parent) => /* @__PURE__ */ jsx(
          "li",
          {
            onClick: () => setSido({ key: parent.codeSequenceKey, name: parent.codeValue }),
            className: clsx({
              active: sido.key === parent.codeSequenceKey,
              [fonts.body3.semibold]: sido.key === parent.codeSequenceKey
            }),
            role: "button",
            children: parent.codeValue
          },
          parent.codeSequenceKey
        )) }),
        /* @__PURE__ */ jsx("ul", { className: "child", style: { overflowY: "auto", maxHeight: "55vh" }, children: sigunguList[sido.key]?.map((child) => /* @__PURE__ */ jsx(
          "li",
          {
            role: "button",
            onClick: () => setSigungu(child.codeSequenceKey),
            className: sigungu === child.codeSequenceKey ? "active" : "",
            children: child.codeValue
          },
          `${child.codeSequenceKey}+${child.codeValue}`
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { margin: "20px 0 -20px", display: "flex", gap: "8px" }, children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          mode: "gray",
          fillType: "outline",
          size: "large",
          flex: 1,
          onClick: () => {
            setState({ location: "" });
            closeModal();
          },
          children: "초기화"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          mode: "primary",
          fillType: "default",
          disabled: !sigungu,
          size: "large",
          flex: 1,
          onClick: () => {
            setState({ location: sigungu });
            closeModal();
          },
          children: "적용"
        }
      )
    ] })
  ] }) });
}
function TeamFindSports({ sports }) {
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [isOnlyRecruiting, setIsOnlyRecruiting] = useState(false);
  const [location, setLocation] = useState([]);
  const { ModalComponents, showModal, modalState } = useModal({ key: "team-location" });
  const { data, isLoading, isFetched } = useGet(`/api/teams/browse/filter`, {
    teamItem: sports.toUpperCase(),
    recruiting: isOnlyRecruiting ? "true" : void 0,
    activeArea: modalState["team-location"]?.location
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: clsx(baseContainer, flexColumnGap20), style: { paddingTop: "20px" }, children: [
      /* @__PURE__ */ jsxs("div", { className: clsx(flexSpaceBetween), children: [
        /* @__PURE__ */ jsx(FilterButton, { onClick: () => showModal(), children: "지역 선택" }),
        /* @__PURE__ */ jsxs("label", { className: flexRowGap10, children: [
          /* @__PURE__ */ jsx(
            InputCheckbox,
            {
              size: "MEDIUM",
              checked: isOnlyRecruiting,
              onChange: (e) => setIsOnlyRecruiting(e.target.checked)
            }
          ),
          /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, children: "모집 중만 보기 " })
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxs("div", { className: clsx(flexColumnGap12), children: [
        /* @__PURE__ */ jsx("div", { className: "skeleton-loading-ui", style: { width: "100%", height: "98px", borderRadius: "10px" } }),
        /* @__PURE__ */ jsx("div", { className: "skeleton-loading-ui", style: { width: "100%", height: "98px", borderRadius: "10px" } }),
        /* @__PURE__ */ jsx("div", { className: "skeleton-loading-ui", style: { width: "100%", height: "98px", borderRadius: "10px" } })
      ] }) : /* @__PURE__ */ jsx("div", { className: clsx(flexColumnGap12), children: data?.map((item) => /* @__PURE__ */ jsx(
        TeamListCard,
        {
          teamId: item.id,
          teamLogo: item.logoUrl ?? "",
          teamName: item.teamName,
          location: item.activeArea,
          teamIntro: item.teamIntro,
          university: "",
          gender: "",
          likeCnt: 8400,
          memberCnt: 20
        },
        item.id
      )) }),
      isFetched && data?.length === 0 && /* @__PURE__ */ jsx("div", { className: fonts.body3.medium, children: "검색 결과가 없습니다" })
    ] }),
    /* @__PURE__ */ jsx(LocationFilterModal, { ModalComponents })
  ] });
}
function TeamList() {
  useHeader({
    title: "팀 살펴보기"
  });
  const sportsTabRef = useRef(null);
  useStickyMoment(sportsTabRef);
  const {
    sports: targetSports
  } = useSearch({
    from: "/team/find/"
  });
  const [activeTab, setActiveTab] = useState(targetSports ?? "");
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs(TabWrapper, { ref: sportsTabRef, children: [
      /* @__PURE__ */ jsxs("div", { className: teamFindSearchContainer, style: {
        marginBottom: "8px"
      }, children: [
        /* @__PURE__ */ jsx(SearchIcon, { fill: "var(--primary500)", width: 20, height: 20 }),
        /* @__PURE__ */ jsx("input", { type: "text", className: teamFindSearchInput, placeholder: "스포츠 종목 또는 팀 이름 입력" })
      ] }),
      /* @__PURE__ */ jsx(MainTab, { sameWidth: true, padding: 16, color: "primary", type: "line", initialValue: activeTab, nowValue: (value) => {
        setActiveTab(value);
      }, items: [{
        value: "",
        name: "전체"
      }, ...SUPPORT_SPORTS.map((item) => ({
        value: item.nameEng,
        name: item.name
      }))] })
    ] }),
    /* @__PURE__ */ jsx(PlusFloat, { linkTo: "/team-create", blind: "팀 만들기" }),
    /* @__PURE__ */ jsx("section", { children: activeTab === "" ? /* @__PURE__ */ jsx(TeamFindAll, {}) : /* @__PURE__ */ jsx(TeamFindSports, { sports: activeTab }) })
  ] });
}
const TabWrapper = styled.div`
  position: sticky;
  padding: 8px 0 0;
  top: 0;
  z-index: 1;
  &.stuck {
    background-color: var(--background-light);
  }
`;
export {
  TeamList as component
};
