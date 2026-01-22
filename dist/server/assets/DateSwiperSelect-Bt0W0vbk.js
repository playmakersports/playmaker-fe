import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React, { useState, useRef, useImperativeHandle, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
/* empty css                */
import { getDaysInMonth, formatDate, isSameYear, isSameMonth, setYear, setMonth, setDate } from "date-fns";
import { u as useModal } from "./useModal--yzWVOVY.js";
import { B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { F as FONTS } from "./common-6ceLbjxn.js";
const DateSwiperSelect = React.forwardRef((props, ref) => {
  const {
    children,
    defaultValue,
    title,
    error,
    description,
    value,
    pickType = "EVERYDAY",
    plainStyle = false,
    bottomSheetHeader,
    ...rest
  } = props;
  const { ModalComponents, showModal } = useModal();
  const [yearList, setYearList] = useState([]);
  const [monthList, setMonthList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [dateList, setDateList] = useState([]);
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  const [currentDate, setCurrentDate] = useState(/* @__PURE__ */ new Date());
  useEffect(() => {
    if (inputRef.current && inputRef.current.value) {
      setCurrentDate(new Date(inputRef.current.value));
    }
    if (defaultValue) {
      setCurrentDate(new Date(defaultValue));
    }
  }, []);
  const getNumberFromTo = useCallback((start, end) => {
    if (start > end) {
      return Array.from({ length: start - end + 1 }, (_, index) => start - index);
    }
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }, []);
  const handleMonthDate = () => {
    if (pickType === "ONLY_PAST") {
      if (isSameYear(currentDate, /* @__PURE__ */ new Date())) {
        setMonthList(getNumberFromTo(1, (/* @__PURE__ */ new Date()).getMonth() + 1));
        if (isSameMonth(currentDate, /* @__PURE__ */ new Date())) {
          setDateList(getNumberFromTo(1, (/* @__PURE__ */ new Date()).getDate()));
        }
      } else {
        setMonthList(getNumberFromTo(1, 12));
        setDateList(getNumberFromTo(1, getDaysInMonth(currentDate)));
      }
    }
  };
  useEffect(() => {
    if (pickType === "ONLY_PAST") {
      setYearList(getNumberFromTo((/* @__PURE__ */ new Date()).getFullYear(), 1940));
      return;
    }
    if (pickType === "ONLY_FUTURE") {
      setYearList(getNumberFromTo((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getFullYear() + 50));
      return;
    }
    if (pickType === "EVERYDAY") {
      setYearList(getNumberFromTo(1940, (/* @__PURE__ */ new Date()).getFullYear() + 50));
    }
  }, [getNumberFromTo]);
  const handleYearChange = (activeIndex) => {
    setCurrentDate(setYear(currentDate, yearList[activeIndex]));
  };
  const handleMonthChange = (activeIndex) => {
    setCurrentDate(setMonth(currentDate, monthList[activeIndex] - 1));
  };
  const handleDateChange = (activeIndex) => {
    setCurrentDate(setDate(currentDate, dateList[activeIndex]));
  };
  useEffect(() => {
    setDateList(getNumberFromTo(1, getDaysInMonth(currentDate)));
    handleMonthDate();
  }, [currentDate]);
  const handleSave = (close) => {
    if (inputRef.current) {
      const newValue = formatDate(currentDate, "yyyy-MM-dd");
      inputRef.current.value = newValue;
      if (rest.onChange) {
        rest.onChange({
          target: {
            name: props.name,
            value: newValue
          }
        });
      }
    }
    inputRef.current?.focus();
    close();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !children && (plainStyle ? /* @__PURE__ */ jsx("input", { type: "text", name: rest.name, ref: inputRef, onClick: () => showModal(), readOnly: true, ...rest }) : /* @__PURE__ */ jsx(
      BasicInput,
      {
        ref: inputRef,
        type: "text",
        name: rest.name,
        title,
        error,
        description,
        onButtonWrapClick: () => showModal(),
        ...rest
      }
    )),
    children && /* @__PURE__ */ jsxs(Fragment, { children: [
      children(showModal),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: rest.name,
          ref: inputRef,
          readOnly: true,
          style: { display: "none", width: "1px", height: "1px", position: "fixed", top: "-100%", left: "-100%" },
          ...rest
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      ModalComponents,
      {
        title: bottomSheetHeader?.title,
        description: bottomSheetHeader?.description,
        draggable: "bar",
        buttons: [
          {
            mode: "primary",
            disabled: !(currentDate || defaultValue || inputRef.current && inputRef.current.value),
            name: `${formatDate(currentDate, "yyyy년 M월 d일")}로 설정`,
            onClick: handleSave
          }
        ],
        children: /* @__PURE__ */ jsxs(Wrapper, { children: [
          /* @__PURE__ */ jsxs("div", { className: "background-selected", children: [
            /* @__PURE__ */ jsx("span", { children: "년" }),
            /* @__PURE__ */ jsx("span", { children: "월" }),
            /* @__PURE__ */ jsx("span", { children: "일" })
          ] }),
          /* @__PURE__ */ jsx(
            Swiper,
            {
              direction: "vertical",
              freeMode: true,
              slidesPerView: 5,
              centeredSlides: true,
              onSlideChange: (swiper) => handleYearChange(swiper.activeIndex),
              initialSlide: yearList.findIndex((v) => v === Number(currentDate.getFullYear())) || 0,
              style: { flex: 1 },
              children: yearList.map((year) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(YearPanel, { children: /* @__PURE__ */ jsx("span", { className: "age-year", children: year }) }) }, `min-${year}`))
            }
          ),
          /* @__PURE__ */ jsx(
            Swiper,
            {
              direction: "vertical",
              freeMode: true,
              slidesPerView: 5,
              centeredSlides: true,
              onSlideChange: (swiper) => handleMonthChange(swiper.activeIndex),
              initialSlide: monthList.findIndex((v) => v === Number(currentDate.getMonth() + 1)) || 0,
              style: { flex: 1 },
              children: monthList.map((month) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(YearPanel, { children: /* @__PURE__ */ jsx("span", { className: "age-year", children: month }) }) }, `min-${month}`))
            }
          ),
          /* @__PURE__ */ jsx(
            Swiper,
            {
              direction: "vertical",
              freeMode: true,
              slidesPerView: 5,
              centeredSlides: true,
              onSlideChange: (swiper) => handleDateChange(swiper.activeIndex),
              initialSlide: dateList.findIndex((v) => v === Number(currentDate.getDate())) || 0,
              style: { flex: 1 },
              children: dateList.map((day) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(YearPanel, { children: /* @__PURE__ */ jsx("span", { className: "age-year", children: day }) }) }, `min-${day}`))
            }
          )
        ] })
      }
    )
  ] });
});
DateSwiperSelect.displayName = "DateSwiperSelect";
const Wrapper = styled.div`
  position: relative;
  user-select: none;
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
    background-color: rgba(var(--main-rgb), 0.1);
    z-index: 1;
    border-radius: 8px;
    transform: translateY(-50%);
    ${FONTS.body2("medium")};
    color: var(--primary600);
    & > span {
      flex: 1;
      padding-left: 24px;
      text-align: center;
      &:first-child {
        padding-left: 60px;
      }
    }
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
  DateSwiperSelect as D
};
