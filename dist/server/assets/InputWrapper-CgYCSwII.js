import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { F as FONTS } from "./common-6ceLbjxn.js";
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { b as baseInputWrapper, d as baseInputHeader, e as baseInputQuestionIcon } from "./container.css-DZr6lpKA.js";
function useTooltip(props) {
  const { color = "white", contents } = props;
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({
    activeX: "left",
    activeY: "top",
    tight: false
  });
  const handleWindowResize = ({ clientWidth, clientHeight }) => {
    const tooltipWidth = 220;
    const tooltipHeight = 120;
    const rect = tooltipRef.current?.getBoundingClientRect() ?? { left: 0, top: 0 };
    if (clientWidth - rect.left < tooltipWidth) {
      setTooltipPosition((prev) => ({ ...prev, activeX: "right" }));
      if (clientWidth - rect.left < tooltipWidth / 2) {
        setTooltipPosition((prev) => ({ ...prev, tight: true }));
      } else {
        setTooltipPosition((prev) => ({ ...prev, tight: false }));
      }
    } else {
      setTooltipPosition((prev) => ({ ...prev, activeX: "left" }));
      if (rect.left < tooltipWidth / 2) {
        setTooltipPosition((prev) => ({ ...prev, tight: true }));
      } else {
        setTooltipPosition((prev) => ({ ...prev, tight: false }));
      }
    }
    if (clientHeight - rect.top < tooltipHeight) {
      setTooltipPosition((prev) => ({ ...prev, activeY: "bottom" }));
    } else {
      setTooltipPosition((prev) => ({ ...prev, activeY: "top" }));
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showTooltip && tooltipRef.current && containerRef.current && !tooltipRef.current.contains(event.target) && !containerRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [showTooltip]);
  useEffect(() => {
    const handler = () => handleWindowResize({
      clientWidth: Math.floor(document.body.clientWidth),
      clientHeight: Math.floor(document.body.clientHeight)
    });
    handler();
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);
  const onClickOpenTooltip = (event) => {
    event.currentTarget.style.position = "relative";
    const clientWidth = Math.floor(document.body.clientWidth);
    const clientHeight = Math.floor(document.body.clientHeight);
    if (tooltipRef.current) {
      tooltipRef.current.getBoundingClientRect();
    } else {
      tooltipRef.current = event.currentTarget;
      tooltipRef.current.getBoundingClientRect();
    }
    handleWindowResize({
      clientWidth,
      clientHeight
    });
    setShowTooltip((prev) => !prev);
  };
  const TriggerArea = ({ children }) => {
    return /* @__PURE__ */ jsx("span", { ref: tooltipRef, style: { position: "relative", cursor: "help" }, onClick: onClickOpenTooltip, children });
  };
  const Tooltip = () => {
    const [tooltipStage, setTooltipStage] = useState(0);
    const onClickSwitchTooltip = (type) => {
      setTooltipStage((prev) => {
        if (type === "prev") {
          return prev - 1 < 0 ? contents.length - 1 : prev - 1;
        } else {
          return prev + 1 >= contents.length ? 0 : prev + 1;
        }
      });
    };
    if (!showTooltip) return null;
    return /* @__PURE__ */ jsxs(
      Container,
      {
        ref: containerRef,
        $colors: TOOLTIP_COLORS[color],
        "data-position": `${tooltipPosition.activeY}-${tooltipPosition.activeX}-${tooltipPosition.tight}`,
        style: {
          [tooltipPosition.activeY]: tooltipPosition.tight ? tooltipPosition.activeY === "top" ? "-100%" : "-200%" : "100%",
          [tooltipPosition.activeX]: tooltipPosition.tight ? "100%" : "50%",
          transform: tooltipPosition.tight ? "" : `translateX(${tooltipPosition.activeX === "left" ? "-50%" : "50%"})`
        },
        children: [
          /* @__PURE__ */ jsx(Contents, { children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "tooltip-inner-wrapper",
              style: {
                transform: `translateX(-${tooltipStage * 100}%)`
              },
              children: contents.map((content, index) => /* @__PURE__ */ jsxs("div", { className: "tooltip-content", children: [
                content.title && /* @__PURE__ */ jsx("h3", { className: "tooltip-title", children: content.title }),
                /* @__PURE__ */ jsx("p", { className: "tooltip-description", children: content.description })
              ] }, index))
            }
          ) }),
          contents.length > 1 && /* @__PURE__ */ jsxs(Bottom, { children: [
            /* @__PURE__ */ jsx("ul", { className: "dots", children: contents.map((_, index) => /* @__PURE__ */ jsx(
              "li",
              {
                style: {
                  backgroundColor: tooltipStage === index ? TOOLTIP_COLORS[color].activeDot : TOOLTIP_COLORS[color].dots
                }
              },
              index
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "buttons", children: [
              /* @__PURE__ */ jsx("button", { type: "button", className: "prev-button", onClick: () => onClickSwitchTooltip("prev"), children: "이전" }),
              /* @__PURE__ */ jsx("button", { type: "button", className: "next-button", onClick: () => onClickSwitchTooltip("next"), children: "다음" })
            ] })
          ] })
        ]
      }
    );
  };
  return { TriggerArea, Tooltip, onClickOpenTooltip };
}
const Container = styled.div`
  position: absolute;
  padding: 12px;
  width: 220px;
  height: max-content;
  box-shadow: 0 0 35px 0 rgba(15, 23, 42, 0.08);
  border-radius: 10px;
  background-color: ${({ $colors }) => $colors.background};
  z-index: 100;

  h3.tooltip-title {
    margin-bottom: 4px;
    color: ${({ $colors }) => $colors.title};
    ${FONTS.caption1("semibold")};
  }
  p.tooltip-description {
    word-break: keep-all;
    color: ${({ $colors }) => $colors.description};
    ${FONTS.caption1("regular")};
  }

  div.buttons > button {
    ${FONTS.caption1("semibold")}
  }
  button.prev-button {
    color: ${({ $colors }) => $colors.prevBtn};
  }
  button.next-button {
    margin-left: 8px;
    color: ${({ $colors }) => $colors.nextBtn};
  }

  --margin-gap: 12px;
  &[data-position="top-right-false"],
  &[data-position="top-left-false"] {
    margin-top: var(--margin-gap);
    &::before {
      top: -5px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  }
  &[data-position="bottom-right-true"],
  &[data-position="top-right-true"] {
    margin-right: var(--margin-gap);
    &::before {
      right: -5px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
  }
  &[data-position="bottom-left-true"],
  &[data-position="top-left-true"] {
    margin-left: var(--margin-gap);
    &::before {
      left: -5px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
  }
  &[data-position="bottom-right-false"],
  &[data-position="bottom-left-false"] {
    margin-bottom: var(--margin-gap);
    &::before {
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background-color: ${({ $colors }) => $colors.background};
  }
`;
const Contents = styled.div`
  overflow: hidden;
  div.tooltip-inner-wrapper {
    display: flex;
    transition: transform 0.3s;
  }
  div.tooltip-content {
    width: 100%;
    flex-shrink: 0;
  }
`;
const Bottom = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: center;
  justify-content: space-between;

  ul.dots {
    display: inline-flex;
    gap: 4px;
    li {
      border-radius: 50%;
      width: 4px;
      height: 4px;
    }
  }
`;
const TOOLTIP_COLORS = {
  white: {
    background: "var(--white)",
    title: "var(--gray700)",
    description: "var(--gray700)",
    activeDot: "var(--gray700)",
    dots: "var(--gray200)",
    nextBtn: "var(--gray700)",
    prevBtn: "var(--gray400)"
  },
  gray: {
    background: "var(--gray700)",
    title: "var(--white)",
    description: "var(--gray300)",
    activeDot: "var(--white)",
    dots: "rgba(256,256,256,0.5)",
    nextBtn: "var(--white)",
    prevBtn: "rgba(256,256,256,0.5)"
  }
};
function InputWrapper({ children, ...props }) {
  const { title, information, required } = props;
  const informationContents = typeof information === "string" ? { color: "white", contents: [{ title: "", description: information }] } : information ?? { color: "white", contents: [{ title: "", description: "" }] };
  const { onClickOpenTooltip, Tooltip } = useTooltip(informationContents);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: baseInputWrapper, children: [
    title && /* @__PURE__ */ jsxs("div", { className: baseInputHeader, children: [
      /* @__PURE__ */ jsx("span", { className: "title", children: title }),
      information && /* @__PURE__ */ jsxs("div", { style: { position: "relative", display: "inline-flex" }, children: [
        /* @__PURE__ */ jsx(Tooltip, {}),
        /* @__PURE__ */ jsx("button", { type: "button", className: baseInputQuestionIcon, onClick: onClickOpenTooltip, children: /* @__PURE__ */ jsx(InfoIcon, { fill: "var(--gray400)" }) })
      ] }),
      required && /* @__PURE__ */ jsx("span", { style: { color: "var(--red500)" }, children: "*" })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { position: "relative" }, children })
  ] }) });
}
const InfoIcon = ({ fill }) => {
  return /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill, xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx(
      "mask",
      {
        id: "mask0_80_2937",
        style: { maskType: "alpha" },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "20",
        height: "20",
        children: /* @__PURE__ */ jsx("rect", { width: "20", height: "20", fill: "#D9D9D9" })
      }
    ),
    /* @__PURE__ */ jsx("g", { mask: "url(#mask0_80_2937)", children: /* @__PURE__ */ jsx("path", { d: "M10 15C10.2778 15 10.5139 14.9028 10.7083 14.7083C10.9028 14.5139 11 14.2778 11 14C11 13.7222 10.9028 13.4861 10.7083 13.2917C10.5139 13.0972 10.2778 13 10 13C9.72222 13 9.48611 13.0972 9.29167 13.2917C9.09722 13.4861 9 13.7222 9 14C9 14.2778 9.09722 14.5139 9.29167 14.7083C9.48611 14.9028 9.72222 15 10 15ZM9.25 11.8125H10.7708C10.7708 11.2986 10.816 10.934 10.9062 10.7188C10.9965 10.5035 11.2153 10.2292 11.5625 9.89583C12.0486 9.42361 12.3854 9.02083 12.5729 8.6875C12.7604 8.35417 12.8542 7.98611 12.8542 7.58333C12.8542 6.81944 12.5938 6.19792 12.0729 5.71875C11.5521 5.23958 10.8889 5 10.0833 5C9.375 5 8.76042 5.1875 8.23958 5.5625C7.71875 5.9375 7.35417 6.44444 7.14583 7.08333L8.5 7.64583C8.625 7.25694 8.82292 6.95486 9.09375 6.73958C9.36458 6.52431 9.68056 6.41667 10.0417 6.41667C10.4306 6.41667 10.75 6.52778 11 6.75C11.25 6.97222 11.375 7.26389 11.375 7.625C11.375 7.94444 11.2674 8.22917 11.0521 8.47917C10.8368 8.72917 10.5972 8.97222 10.3333 9.20833C9.84722 9.65278 9.54514 10.0174 9.42708 10.3021C9.30903 10.5868 9.25 11.0903 9.25 11.8125ZM10 18C8.90278 18 7.86806 17.7917 6.89583 17.375C5.92361 16.9583 5.07292 16.3854 4.34375 15.6562C3.61458 14.9271 3.04167 14.0764 2.625 13.1042C2.20833 12.1319 2 11.0972 2 10C2 8.88889 2.20833 7.85069 2.625 6.88542C3.04167 5.92014 3.61458 5.07292 4.34375 4.34375C5.07292 3.61458 5.92361 3.04167 6.89583 2.625C7.86806 2.20833 8.90278 2 10 2C11.1111 2 12.1493 2.20833 13.1146 2.625C14.0799 3.04167 14.9271 3.61458 15.6562 4.34375C16.3854 5.07292 16.9583 5.92014 17.375 6.88542C17.7917 7.85069 18 8.88889 18 10C18 11.0972 17.7917 12.1319 17.375 13.1042C16.9583 14.0764 16.3854 14.9271 15.6562 15.6562C14.9271 16.3854 14.0799 16.9583 13.1146 17.375C12.1493 17.7917 11.1111 18 10 18ZM10 16.5C11.8056 16.5 13.3403 15.8681 14.6042 14.6042C15.8681 13.3403 16.5 11.8056 16.5 10C16.5 8.19444 15.8681 6.65972 14.6042 5.39583C13.3403 4.13194 11.8056 3.5 10 3.5C8.19444 3.5 6.65972 4.13194 5.39583 5.39583C4.13194 6.65972 3.5 8.19444 3.5 10C3.5 11.8056 4.13194 13.3403 5.39583 14.6042C6.65972 15.8681 8.19444 16.5 10 16.5Z" }) })
  ] });
};
export {
  InputWrapper as I
};
