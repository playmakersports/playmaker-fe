import React, { useImperativeHandle, useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { formatDate, getDaysInMonth, isSameMonth, isSameYear, setDate, setMonth, setYear } from "date-fns";
import useModal from "@/hook/useModal";

import { BasicInput, InputProps } from "./input/BaseInput";
import { FONTS } from "@/styles/common";

type Props = Omit<InputProps, "type" | "value" | "suffix" | "iconType" | "defaultValue" | "children"> & {
  children?: (showModal: () => void) => React.ReactNode;
  value?: string;
  defaultValue?: string | Date;
  plainStyle?: boolean;
  bottomSheetHeader?: {
    title: string;
    description?: string;
  };
  pickType?: "EVERYDAY" | "ONLY_PAST" | "ONLY_FUTURE";
};

const DateSwiperSelect = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
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
  const [yearList, setYearList] = useState<number[]>([]);
  const [monthList, setMonthList] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [dateList, setDateList] = useState<number[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    if (inputRef.current && inputRef.current.value) {
      setCurrentDate(new Date(inputRef.current.value));
    }
    if (defaultValue) {
      setCurrentDate(new Date(defaultValue));
    }
  }, []);

  const getNumberFromTo = useCallback((start: number, end: number) => {
    if (start > end) {
      return Array.from({ length: start - end + 1 }, (_, index) => start - index);
    }
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }, []);

  const handleMonthDate = () => {
    if (pickType === "ONLY_PAST") {
      if (isSameYear(currentDate, new Date())) {
        setMonthList(getNumberFromTo(1, new Date().getMonth() + 1));
        if (isSameMonth(currentDate, new Date())) {
          setDateList(getNumberFromTo(1, new Date().getDate()));
        }
      } else {
        setMonthList(getNumberFromTo(1, 12));
        setDateList(getNumberFromTo(1, getDaysInMonth(currentDate)));
      }
    }
  };

  useEffect(() => {
    if (pickType === "ONLY_PAST") {
      setYearList(getNumberFromTo(new Date().getFullYear(), 1940));
      return;
    }
    if (pickType === "ONLY_FUTURE") {
      setYearList(getNumberFromTo(new Date().getFullYear(), new Date().getFullYear() + 50));
      return;
    }
    if (pickType === "EVERYDAY") {
      setYearList(getNumberFromTo(1940, new Date().getFullYear() + 50));
    }
  }, [getNumberFromTo]);

  const handleYearChange = (activeIndex: number) => {
    setCurrentDate(setYear(currentDate, yearList[activeIndex]));
  };
  const handleMonthChange = (activeIndex: number) => {
    setCurrentDate(setMonth(currentDate, monthList[activeIndex] - 1));
  };
  const handleDateChange = (activeIndex: number) => {
    setCurrentDate(setDate(currentDate, dateList[activeIndex]));
  };
  useEffect(() => {
    setDateList(getNumberFromTo(1, getDaysInMonth(currentDate)));
    handleMonthDate();
  }, [currentDate]);

  // 저장 버튼 클릭
  const handleSave = (close: () => void) => {
    if (inputRef.current) {
      const newValue = formatDate(currentDate, "yyyy-MM-dd");
      inputRef.current.value = newValue;

      if (rest.onChange) {
        rest.onChange({
          target: {
            name: props.name,
            value: newValue,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    }
    inputRef.current?.focus();
    close();
  };

  return (
    <>
      {!children &&
        (plainStyle ? (
          <input type="text" name={rest.name} ref={inputRef} onClick={() => showModal()} readOnly {...rest} />
        ) : (
          <BasicInput
            ref={inputRef}
            type="text"
            name={rest.name}
            title={title}
            error={error}
            description={description}
            onButtonWrapClick={() => showModal()}
            {...rest}
          />
        ))}
      {children && (
        <>
          {children(showModal)}
          <input
            type="text"
            name={rest.name}
            ref={inputRef}
            readOnly
            style={{ display: "none", width: "1px", height: "1px", position: "fixed", top: "-100%", left: "-100%" }}
            {...rest}
          />
        </>
      )}
      <ModalComponents
        title={bottomSheetHeader?.title}
        description={bottomSheetHeader?.description}
        draggable="bar"
        buttons={[
          {
            mode: "primary",
            disabled: !(currentDate || defaultValue || (inputRef.current && inputRef.current.value)),
            name: `${formatDate(currentDate, "yyyy년 M월 d일")}로 설정`,
            onClick: handleSave,
          },
        ]}
      >
        <Wrapper>
          <div className="background-selected">
            <span>년</span>
            <span>월</span>
            <span>일</span>
          </div>
          <Swiper
            direction="vertical"
            freeMode
            slidesPerView={5}
            centeredSlides
            onSlideChange={(swiper) => handleYearChange(swiper.activeIndex)}
            initialSlide={yearList.findIndex((v) => v === Number(currentDate.getFullYear())) || 0}
            style={{ flex: 1 }}
          >
            {yearList.map((year) => (
              <SwiperSlide key={`min-${year}`}>
                <YearPanel>
                  <span className="age-year">{year}</span>
                </YearPanel>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            direction="vertical"
            freeMode
            slidesPerView={5}
            centeredSlides
            onSlideChange={(swiper) => handleMonthChange(swiper.activeIndex)}
            initialSlide={monthList.findIndex((v) => v === Number(currentDate.getMonth() + 1)) || 0}
            style={{ flex: 1 }}
          >
            {monthList.map((month) => (
              <SwiperSlide key={`min-${month}`}>
                <YearPanel>
                  <span className="age-year">{month}</span>
                </YearPanel>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            direction="vertical"
            freeMode
            slidesPerView={5}
            centeredSlides
            onSlideChange={(swiper) => handleDateChange(swiper.activeIndex)}
            initialSlide={dateList.findIndex((v) => v === Number(currentDate.getDate())) || 0}
            style={{ flex: 1 }}
          >
            {dateList.map((day) => (
              <SwiperSlide key={`min-${day}`}>
                <YearPanel>
                  <span className="age-year">{day}</span>
                </YearPanel>
              </SwiperSlide>
            ))}
          </Swiper>
        </Wrapper>
      </ModalComponents>
    </>
  );
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

export default DateSwiperSelect;
