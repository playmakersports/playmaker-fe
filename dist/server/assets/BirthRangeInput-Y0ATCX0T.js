import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect } from "react";
import { getYear, differenceInYears } from "date-fns";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { u as useToast } from "./useToast-hwetiz13.js";
import { u as useModal } from "./useModal--yzWVOVY.js";
/* empty css                */
import { I as InputStyledWrapper } from "./Wrapper-DpW65hF8.js";
import { F as FONTS } from "./common-6ceLbjxn.js";
import { D as DownArrowIcon } from "./DownArrow-CJuEPh4T.js";
function BirthRangeInput({ getYearRange, defaultValue, title }) {
  const { trigger } = useToast();
  const { showModal, ModalComponents } = useModal();
  const startAgeYear = getYear(/* @__PURE__ */ new Date()) - 14;
  const [birthYearMin, setBirthYearMin] = useState(defaultValue?.[0] || 0);
  const [birthYearMax, setBirthYearMax] = useState(defaultValue?.[1] || 0);
  const [minList, setMinList] = useState([]);
  const [maxList, setMaxList] = useState([]);
  const minSwiperRef = useRef(null);
  const maxSwiperRef = useRef(null);
  const getNumberFromTo = useCallback((start, end) => {
    if (start > end) {
      return Array.from({ length: start - end + 1 }, (_, index) => start - index);
    }
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }, []);
  useEffect(() => {
    setMinList(getNumberFromTo(startAgeYear, 1940));
  }, [getNumberFromTo]);
  useEffect(() => {
    setMaxList(getNumberFromTo(startAgeYear, birthYearMin || 1940));
  }, [birthYearMin, getNumberFromTo]);
  const handleSave = (close) => {
    if (birthYearMin && birthYearMax) {
      if (birthYearMin > birthYearMax) {
        trigger("연장자는 연소자보다 나이가 많아야 합니다.", { type: "warning" });
        return;
      }
      getYearRange([birthYearMin, birthYearMax]);
      close();
    } else {
      trigger("출생연도를 모두 선택해주세요.", { type: "warning" });
    }
  };
  const [showAgeInfo, setShowAgeInfo] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowAgeInfo((prev) => !prev);
    }, 3e3);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Container, { children: [
      title && /* @__PURE__ */ jsx("div", { className: "input-title", children: title }),
      /* @__PURE__ */ jsxs(Selects, { children: [
        /* @__PURE__ */ jsxs(Select, { onClick: showModal, children: [
          birthYearMin ? /* @__PURE__ */ jsxs("div", { className: "selected-value", children: [
            birthYearMin,
            "년생"
          ] }) : /* @__PURE__ */ jsx("div", { className: "placeholder", children: "연장자 출생연도" }),
          /* @__PURE__ */ jsx("i", { className: "arrow-icon", children: /* @__PURE__ */ jsx(DownArrowIcon, {}) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "separator" }),
        /* @__PURE__ */ jsxs(Select, { onClick: showModal, children: [
          birthYearMax ? /* @__PURE__ */ jsxs("div", { className: "selected-value", children: [
            birthYearMax,
            "년생"
          ] }) : /* @__PURE__ */ jsx("div", { className: "placeholder", children: "연소자 출생연도" }),
          /* @__PURE__ */ jsx("i", { className: "arrow-icon", children: /* @__PURE__ */ jsx(DownArrowIcon, {}) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      ModalComponents,
      {
        title: "나이 제한",
        description: "출생연도로 팀 가입을 제한할 수 있어요.",
        buttons: [
          {
            mode: "primary",
            name: "저장",
            onClick: handleSave
          }
        ],
        children: /* @__PURE__ */ jsxs(Wrapper, { children: [
          /* @__PURE__ */ jsx("div", { className: "background-selected", children: "~" }),
          /* @__PURE__ */ jsx(
            Swiper,
            {
              direction: "vertical",
              freeMode: true,
              slidesPerView: 5,
              centeredSlides: true,
              onSwiper: (swiper) => minSwiperRef.current = swiper,
              onSlideChange: (swiper) => setBirthYearMin(minList[swiper.activeIndex]),
              initialSlide: minList.findIndex((v) => v === birthYearMin) || 0,
              style: { flex: 1 },
              children: minList.map((year) => /* @__PURE__ */ jsx(SwiperSlide, { children: birthYearMin === year ? /* @__PURE__ */ jsxs(YearPanel, { children: [
                /* @__PURE__ */ jsxs("span", { className: "age-year", "data-switch": showAgeInfo, children: [
                  year,
                  "년생"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "age-info", "data-switch": !showAgeInfo, children: [
                  differenceInYears(/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date(`${year}-01-01`)) + 1,
                  "세"
                ] })
              ] }) : /* @__PURE__ */ jsx(YearPanel, { children: /* @__PURE__ */ jsxs("span", { className: "age-year", children: [
                year,
                "년생"
              ] }) }) }, `min-${year}`))
            }
          ),
          /* @__PURE__ */ jsx(
            Swiper,
            {
              direction: "vertical",
              freeMode: true,
              slidesPerView: 5,
              centeredSlides: true,
              onSwiper: (swiper) => maxSwiperRef.current = swiper,
              onSlideChange: (swiper) => setBirthYearMax(maxList[swiper.activeIndex]),
              initialSlide: maxList.findIndex((v) => v === birthYearMax) || 0,
              style: { flex: 1 },
              children: maxList.map((year) => /* @__PURE__ */ jsx(SwiperSlide, { children: birthYearMax === year ? /* @__PURE__ */ jsxs(YearPanel, { children: [
                /* @__PURE__ */ jsxs("span", { className: "age-year", "data-switch": showAgeInfo, children: [
                  year,
                  "년생"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "age-info", "data-switch": !showAgeInfo, children: [
                  differenceInYears(/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date(`${year}-01-01`)) + 1,
                  "세"
                ] })
              ] }) : /* @__PURE__ */ jsx(YearPanel, { children: /* @__PURE__ */ jsxs("span", { className: "age-year", children: [
                year,
                "년생"
              ] }) }) }, `max-${year}`))
            }
          )
        ] })
      }
    )
  ] });
}
const Container = styled.div`
  .input-title {
    font-size: 1.4rem;
    margin-bottom: 4px;
    padding: 0 10px;
    font-weight: 500;
    color: var(--gray700);
    line-height: 2.4rem;
  }
`;
const Selects = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div.separator {
    width: 24px;
    height: 1px;
    background-color: var(--gray400);
  }
`;
const Select = styled(InputStyledWrapper)`
  user-select: none;
  display: flex;
  justify-content: space-between;

  div.selected-value {
    ${FONTS.body4("regular")};
  }
  div.placeholder {
    ${FONTS.body4("regular")};
    color: var(--gray400);
  }
  i.arrow-icon {
    display: flex;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
      fill: var(--gray700);
    }
  }
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 0 12px;
  height: 300px;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 32px;
    left: 0;
    z-index: 2;
  }

  &::before {
    top: 0;
    background: linear-gradient(to bottom, var(--background-light), rgba(var(--background-light-rgb), 0));
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top, var(--background-light), rgba(var(--background-light-rgb), 0));
  }

  div.background-selected {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: var(--primary50);
    z-index: 1;
    border-radius: 8px;
    transform: translateY(-50%);
    opacity: 0.65;
    ${FONTS.head5("medium")};
    color: var(--primary600);
  }
`;
const YearPanel = styled.div`
  user-select: none;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas: "overlap";

  padding: 8px 0;
  width: 100%;
  height: 100%;
  text-align: center;
  ${FONTS.body3("regular")};
  color: var(--gray500);
  letter-spacing: -0.1px;
  transition: color 0.3s ease, font-size 0.3s ease;

  span.age-year {
    grid-area: overlap;
  }
  span.age-info {
    grid-area: overlap;
    display: flex;
    justify-content: center;
  }
  .swiper-slide-active & {
    ${FONTS.body1("semibold")};
    color: var(--primary600);

    span {
      transition: opacity 0.3s ease;
    }
    span[data-switch="true"] {
      opacity: 1;
    }
    span[data-switch="false"] {
      opacity: 0;
    }
  }
`;
export {
  BirthRangeInput as B
};
