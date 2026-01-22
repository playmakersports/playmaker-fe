import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import clsx from "clsx";
import styled from "styled-components";
import NumberFlow from "@number-flow/react";
import { useRouter, Link } from "@tanstack/react-router";
import { a as atomPageTitle, b as atomHeaderTransparent, u as useHeader } from "./useHeader-yY41oJF1.js";
import { useAtom, useAtomValue } from "jotai";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { q as flexColumnGap24, c as flexColumnGap16, f as flexColumnGap12, p as flexRowGap10, l as flexAlignCenter, b as flexColumnGap40, h as baseContainer, a as flexColumnGap20 } from "./container.css-C2ezn6CH.js";
import { P as Portal } from "./Portal-D4P9dmtA.js";
import { style } from "@vanilla-extract/css";
import { D as DownArrowIcon } from "./DownArrow-CJuEPh4T.js";
import { L as LeftDirection } from "./LeftDirection-DmrmcEV0.js";
import { P as ProgressCircle, a as ProgressCircleTrophyWrapper, T as TrophyIcon, b as TeamDataRecordContainer, c as TeamDataRecordItem, d as ThumbUpIcon, e as ThumbDownIcon, C as CheerIcon, f as TeamStatisticsGroupTitle, g as TeamStatisticsGroupCardItem, h as TeamStatisticsGroupHeadIconWrapper, i as TeamStatisticsDetailContainer } from "./Cheer-ZbFWKFg0.js";
import { P as PlusIcon } from "./Plus-CBBY8JMW.js";
import { M as MinusIcon } from "./Minus-Dzq7_5JU.js";
import { C as ClockIcon } from "./Clock-Bj0T6dbi.js";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
import { b as Route } from "./router-mwjOH7mt.js";
import "react-dom";
import "@microsoft/clarity";
const headerMoverContainer = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "var(--header-height)"
});
const headerMoverButton = style({
  display: "flex",
  margin: "-3px -8px",
  padding: "3px 8px",
  gap: "4px",
  alignItems: "center",
  color: "var(--gray900)",
  borderRadius: "6px",
  transition: "all 0.2s",
  selectors: {
    "&:active": {
      backgroundColor: "var(--gray100)",
      transform: "scale(0.97)"
    }
  }
});
const headerListContainer = style({
  position: "fixed",
  margin: "0 auto",
  left: "50%",
  marginTop: "-1px",
  top: "var(--safe-area-top)",
  transform: "translateX(-50%)",
  width: "var(--mobile-max-width)",
  padding: "0 12px 20px",
  backgroundColor: "var(--background-light)",
  borderRadius: "0 0 20px 20px",
  transition: "transform 0.3s, opacity 0.3s",
  zIndex: 901
});
const headerListItem = style([
  fonts.body4.regular,
  {
    userSelect: "none",
    cursor: "pointer",
    display: "inline-flex",
    width: "100%",
    padding: "10px 8px",
    color: "var(--gray600)",
    textAlign: "left"
  }
]);
function HeaderMainDropdown({ title, showList, setShowList, list, onCloseList }) {
  const handleCloseList = () => {
    setShowList(false);
    onCloseList && onCloseList();
  };
  return /* @__PURE__ */ jsxs("div", { className: headerMoverContainer, children: [
    /* @__PURE__ */ jsxs("button", { type: "button", className: headerMoverButton, onClick: () => setShowList((prev) => !prev), children: [
      /* @__PURE__ */ jsx("h3", { className: fonts.body2.semibold, children: title }),
      title && /* @__PURE__ */ jsx(
        DownArrowIcon,
        {
          width: 24,
          height: 24,
          style: {
            fill: "var(--gray700)"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Portal, { inactiveScroll: showList, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: headerListContainer,
          tabIndex: -1,
          role: "dialog",
          "aria-modal": "true",
          style: {
            visibility: showList ? "visible" : "hidden",
            opacity: showList ? 1 : 0,
            transform: `translateX(-50%) translateY(${showList ? 0 : "-24px"})`
          },
          children: list.map((item, index) => /* @__PURE__ */ jsx("button", { type: "button", onClick: item.action, className: headerListItem, children: item.name }, `${item.name}+${index}`))
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          onClick: handleCloseList,
          style: {
            position: "fixed",
            visibility: showList ? "visible" : "hidden",
            opacity: showList ? 1 : 0,
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 0,
            width: "var(--mobile-max-width)",
            height: "calc(100vh - var(--safe-area-top))",
            backgroundColor: "rgba(15, 23, 42, 0.4)",
            zIndex: 900,
            transition: "opacity 0.3s"
          }
        }
      )
    ] })
  ] });
}
function StatisticsHeader() {
  const router = useRouter();
  const [showList, setShowList] = useState(false);
  const [title, setTitle] = useAtom(atomPageTitle);
  const [, setIsTransparent] = useAtom(atomHeaderTransparent);
  useEffect(() => {
    if (showList) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  }, [showList]);
  const handleHeaderTitle = (title2) => {
    setTitle(title2);
    setShowList(false);
  };
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => router.back(),
        style: { width: "24px", height: "24px", display: "flex", justifyContent: "center", alignItems: "center" },
        children: /* @__PURE__ */ jsx(
          LeftDirection,
          {
            width: 24,
            height: 24,
            style: {
              fill: "var(--gray700)"
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      HeaderMainDropdown,
      {
        title: `${title} 데이터`,
        showList,
        setShowList,
        onCloseList: () => setIsTransparent(true),
        list: [
          { name: "팀 교류전", action: () => handleHeaderTitle("팀 교류전") },
          { name: "팀 대회", action: () => handleHeaderTitle("팀 대회") }
        ]
      }
    ) })
  ] });
}
const WarningIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2827'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2827)'%3e%3cpath%20d='M5.33512%2020.5C3.79435%2020.5%202.83224%2018.831%203.60439%2017.4977L10.2695%205.98858C11.0399%204.65829%2012.9606%204.6583%2013.731%205.98858L20.3961%2017.4977C21.1682%2018.831%2020.2061%2020.5%2018.6653%2020.5H5.33512ZM4.97369%2018.0987C4.74138%2018.4987%205.02997%2019%205.49253%2019H18.5079C18.9705%2019%2019.2591%2018.4987%2019.0268%2018.0987L12.5191%206.89338C12.2878%206.49515%2011.7127%206.49515%2011.4814%206.89338L4.97369%2018.0987ZM12.0002%2017.8077C12.2291%2017.8077%2012.4209%2017.7303%2012.5757%2017.5755C12.7306%2017.4207%2012.808%2017.2288%2012.808%2017C12.808%2016.7712%2012.7306%2016.5793%2012.5757%2016.4245C12.4209%2016.2697%2012.2291%2016.1923%2012.0002%2016.1923C11.7714%2016.1923%2011.5796%2016.2697%2011.4247%2016.4245C11.2699%2016.5793%2011.1925%2016.7712%2011.1925%2017C11.1925%2017.2288%2011.2699%2017.4207%2011.4247%2017.5755C11.5796%2017.7303%2011.7714%2017.8077%2012.0002%2017.8077ZM11.2502%2014.4423C11.2502%2014.8565%2011.586%2015.1923%2012.0002%2015.1923C12.4144%2015.1923%2012.7502%2014.8565%2012.7502%2014.4423V10.9423C12.7502%2010.528%2012.4144%2010.1923%2012.0002%2010.1923C11.586%2010.1923%2011.2502%2010.528%2011.2502%2010.9423V14.4423Z'%20/%3e%3c/g%3e%3c/svg%3e";
function Statistics() {
  const {
    teamId
  } = Route.useParams();
  const title = useAtomValue(atomPageTitle);
  useHeader({
    title: "팀 교류전",
    customArea: /* @__PURE__ */ jsx(StatisticsHeader, {}),
    transparent: true
  });
  const [value, setValue] = useState(0);
  const data = {
    avg: {
      score: 60,
      concede: 17,
      foul: 7,
      timeout: 3
    }
  };
  useEffect(() => {
    if (title === "팀 교류전") setValue(87);
    else if (title === "팀 대회") setValue(51);
  }, [title]);
  return /* @__PURE__ */ jsxs(Container, { className: clsx(baseContainer, flexColumnGap20), children: [
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap24, children: [
      /* @__PURE__ */ jsxs("div", { className: "progress-chart", children: [
        /* @__PURE__ */ jsx("div", { className: "circle-wrapper", children: /* @__PURE__ */ jsx(ProgressCircle, { size: 186, percentage: value, rate: 0.75, direction: "right-to-left", children: /* @__PURE__ */ jsxs("div", { className: fonts.head5.semibold, style: {
          color: "#404040"
        }, children: [
          /* @__PURE__ */ jsx("div", { className: ProgressCircleTrophyWrapper, children: /* @__PURE__ */ jsx(TrophyIcon, { width: 24, height: 24, fill: "var(--primary500)" }) }),
          /* @__PURE__ */ jsx(NumberFlow, { value, suffix: "%" })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "circle-back" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: TeamDataRecordContainer, children: [
        /* @__PURE__ */ jsxs("p", { className: TeamDataRecordItem, children: [
          /* @__PURE__ */ jsx(ThumbUpIcon, { width: 20, height: 20, fill: "var(--primary500)" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("span", { className: "title", children: "승리" }),
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(NumberFlow, { value, suffix: "회" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: TeamDataRecordItem, children: [
          /* @__PURE__ */ jsx(ThumbDownIcon, { width: 20, height: 20, fill: "var(--red500)" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("span", { className: "title", children: "패배" }),
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(NumberFlow, { value, suffix: "회" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: TeamDataRecordItem, children: [
          /* @__PURE__ */ jsx(CheerIcon, { width: 20, height: 20, fill: "var(--gray400)" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("span", { className: "title", children: "무승부" }),
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(NumberFlow, { value, suffix: "회" }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: clsx(flexColumnGap40, TeamStatisticsDetailContainer), children: [
      /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, children: [
        /* @__PURE__ */ jsxs("h3", { className: TeamStatisticsGroupTitle, children: [
          "전적 분석",
          /* @__PURE__ */ jsx(Link, { to: `/team/${teamId}/statistics/records`, children: /* @__PURE__ */ jsx(RightArrowIcon, { width: 24, height: 24, fill: "var(--gray700)" }) })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: flexColumnGap12, children: [
          /* @__PURE__ */ jsxs("li", { className: TeamStatisticsGroupCardItem, children: [
            /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap10, flexAlignCenter), children: [
              /* @__PURE__ */ jsx("span", { className: TeamStatisticsGroupHeadIconWrapper, style: {
                backgroundColor: "var(--success50)"
              }, children: /* @__PURE__ */ jsx(PlusIcon, { width: 24, height: 24, fill: "var(--success500)" }) }),
              /* @__PURE__ */ jsx("span", { className: "item-title", children: "평균 득점" })
            ] }),
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(NumberFlow, { value: data.avg.score, suffix: "점" }) })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: TeamStatisticsGroupCardItem, children: [
            /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap10, flexAlignCenter), children: [
              /* @__PURE__ */ jsx("span", { className: TeamStatisticsGroupHeadIconWrapper, style: {
                backgroundColor: "var(--red50)"
              }, children: /* @__PURE__ */ jsx(MinusIcon, { width: 24, height: 24, fill: "var(--red500)" }) }),
              /* @__PURE__ */ jsx("span", { className: "item-title", children: "평균 실점" })
            ] }),
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(NumberFlow, { value: data.avg.concede, suffix: "점" }) })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: TeamStatisticsGroupCardItem, children: [
            /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap10, flexAlignCenter), children: [
              /* @__PURE__ */ jsx("span", { className: TeamStatisticsGroupHeadIconWrapper, style: {
                backgroundColor: "var(--warning50)"
              }, children: /* @__PURE__ */ jsx(WarningIcon, { width: 24, height: 24, fill: "var(--warning500)" }) }),
              /* @__PURE__ */ jsx("span", { className: "item-title", children: "평균 파울" })
            ] }),
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(NumberFlow, { value: data.avg.foul, suffix: "회" }) })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: TeamStatisticsGroupCardItem, children: [
            /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap10, flexAlignCenter), children: [
              /* @__PURE__ */ jsx("span", { className: TeamStatisticsGroupHeadIconWrapper, style: {
                backgroundColor: "var(--purple50)"
              }, children: /* @__PURE__ */ jsx(ClockIcon, { width: 24, height: 24, fill: "var(--purple500)" }) }),
              /* @__PURE__ */ jsx("span", { className: "item-title", children: "평균 타임아웃" })
            ] }),
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(NumberFlow, { value: data.avg.timeout, suffix: "회" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, children: [
        /* @__PURE__ */ jsxs("h3", { className: TeamStatisticsGroupTitle, children: [
          "팀 리더보드",
          /* @__PURE__ */ jsx(Link, { to: `/team/${teamId}/statistics/leaderboard`, children: /* @__PURE__ */ jsx(RightArrowIcon, { width: 24, height: 24, fill: "var(--gray700)" }) })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: flexColumnGap12, children: [
          /* @__PURE__ */ jsxs("li", { className: TeamStatisticsGroupCardItem, children: [
            /* @__PURE__ */ jsx("span", { className: "item-title", children: "득점" }),
            /* @__PURE__ */ jsxs("span", { className: flexRowGap10, children: [
              /* @__PURE__ */ jsx("span", { children: "홍길동" }),
              /* @__PURE__ */ jsx("span", { children: "20점" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: TeamStatisticsGroupCardItem, children: [
            /* @__PURE__ */ jsx("span", { className: "item-title", children: "어시스트" }),
            /* @__PURE__ */ jsxs("span", { className: flexRowGap10, children: [
              /* @__PURE__ */ jsx("span", { children: "홍길동" }),
              /* @__PURE__ */ jsx("span", { children: "20점" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: TeamStatisticsGroupCardItem, children: [
            /* @__PURE__ */ jsx("span", { className: "item-title", children: "공격 리바운드" }),
            /* @__PURE__ */ jsxs("span", { className: flexRowGap10, children: [
              /* @__PURE__ */ jsx("span", { children: "홍길동" }),
              /* @__PURE__ */ jsx("span", { children: "20점" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: TeamStatisticsGroupCardItem, children: [
            /* @__PURE__ */ jsx("span", { className: "item-title", children: "수비 리바운드" }),
            /* @__PURE__ */ jsxs("span", { className: flexRowGap10, children: [
              /* @__PURE__ */ jsx("span", { children: "홍길동" }),
              /* @__PURE__ */ jsx("span", { children: "20점" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: TeamStatisticsGroupCardItem, children: [
            /* @__PURE__ */ jsx("span", { className: "item-title", children: "PER" }),
            /* @__PURE__ */ jsxs("span", { className: flexRowGap10, children: [
              /* @__PURE__ */ jsx("span", { children: "홍길동" }),
              /* @__PURE__ */ jsx("span", { children: "20점" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const Container = styled.div`
  background-color: var(--gray100);
  background: linear-gradient(to bottom, var(--background-light) 0%, var(--gray100) 8%);

  div.progress-chart {
    position: relative;
    margin: 20px auto 0;
    width: 200px;
    height: 200px;
  }

  div.circle-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
    background: radial-gradient(rgba(256, 256, 256, 0.6), rgba(256, 256, 256, 0.9));
    background-color: rgba(256, 256, 256, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 80px -5px rgba(43, 206, 138, 0.8);
    border: 1px solid #fff;
    z-index: 1;
  }
  div.circle-back {
    position: absolute;
    width: 160px;
    height: 160px;
    background-color: var(--info200);
    border-radius: 50%;
    right: -26px;
    bottom: -12px;
    filter: blur(20px);
    opacity: 0.7;
    z-index: 0;
  }
`;
export {
  Statistics as component
};
