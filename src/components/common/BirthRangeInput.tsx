import React, { useCallback, useEffect, useRef, useState } from "react";
import { differenceInYears, getYear } from "date-fns";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { useToast } from "@/hook/useToast";
import useModal from "@/hook/useModal";
import "swiper/css";

import { InputStyledWrapper } from "./Wrapper";
import { FONTS } from "@/styles/common";
import DownArrowIcon from "@/assets/icon/arrow/DownArrow.svg";

type Props = {
  getYearRange: (target: [number, number]) => void;
  defaultValue?: [number, number];
  title?: string;
};

function BirthRangeInput({ getYearRange, defaultValue, title }: Props) {
  const { trigger } = useToast();
  const { showModal, ModalComponents } = useModal();

  const startAgeYear = getYear(new Date()) - 14;
  const [birthYearMin, setBirthYearMin] = useState<number>(defaultValue?.[0] || 0);
  const [birthYearMax, setBirthYearMax] = useState<number>(defaultValue?.[1] || 0);

  const [minList, setMinList] = useState<number[]>([]);
  const [maxList, setMaxList] = useState<number[]>([]);

  const minSwiperRef = useRef<SwiperCore | null>(null);
  const maxSwiperRef = useRef<SwiperCore | null>(null);

  const getNumberFromTo = useCallback((start: number, end: number) => {
    if (start > end) {
      return Array.from({ length: start - end + 1 }, (_, index) => start - index);
    }
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }, []);

  // 초기 minList 설정
  useEffect(() => {
    setMinList(getNumberFromTo(startAgeYear, 1940));
  }, [getNumberFromTo]);

  // birthYearMin 변경 시 maxList 재설정
  useEffect(() => {
    setMaxList(getNumberFromTo(startAgeYear, birthYearMin || 1940));
  }, [birthYearMin, getNumberFromTo]);

  // 저장 버튼 클릭
  const handleSave = (close: () => void) => {
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
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Container>
        {title && <div className="input-title">{title}</div>}
        <Selects>
          <Select onClick={showModal}>
            {birthYearMin ? (
              <div className="selected-value">{birthYearMin}년생</div>
            ) : (
              <div className="placeholder">연장자 출생연도</div>
            )}
            <i className="arrow-icon">
              <DownArrowIcon />
            </i>
          </Select>
          <div className="separator" />
          <Select onClick={showModal}>
            {birthYearMax ? (
              <div className="selected-value">{birthYearMax}년생</div>
            ) : (
              <div className="placeholder">연소자 출생연도</div>
            )}
            <i className="arrow-icon">
              <DownArrowIcon />
            </i>
          </Select>
        </Selects>
      </Container>

      <ModalComponents
        title="나이 제한"
        description="출생연도로 팀 가입을 제한할 수 있어요."
        buttons={[
          {
            mode: "primary",
            name: "저장",
            onClick: handleSave,
          },
        ]}
      >
        <Wrapper>
          <div className="background-selected">~</div>
          <Swiper
            direction="vertical"
            freeMode
            slidesPerView={5}
            centeredSlides
            onSwiper={(swiper) => (minSwiperRef.current = swiper)}
            onSlideChange={(swiper) => setBirthYearMin(minList[swiper.activeIndex])}
            initialSlide={minList.findIndex((v) => v === birthYearMin) || 0}
            style={{ flex: 1 }}
          >
            {minList.map((year) => (
              <SwiperSlide key={`min-${year}`}>
                {birthYearMin === year ? (
                  <YearPanel>
                    <span className="age-year" data-switch={showAgeInfo}>
                      {year}년생
                    </span>
                    <span className="age-info" data-switch={!showAgeInfo}>
                      {differenceInYears(new Date(), new Date(`${year}-01-01`)) + 1}세
                    </span>
                  </YearPanel>
                ) : (
                  <YearPanel>
                    <span className="age-year">{year}년생</span>
                  </YearPanel>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            direction="vertical"
            freeMode
            slidesPerView={5}
            centeredSlides
            onSwiper={(swiper) => (maxSwiperRef.current = swiper)}
            onSlideChange={(swiper) => setBirthYearMax(maxList[swiper.activeIndex])}
            initialSlide={maxList.findIndex((v) => v === birthYearMax) || 0}
            style={{ flex: 1 }}
          >
            {maxList.map((year) => (
              <SwiperSlide key={`max-${year}`}>
                {birthYearMax === year ? (
                  <YearPanel>
                    <span className="age-year" data-switch={showAgeInfo}>
                      {year}년생
                    </span>
                    <span className="age-info" data-switch={!showAgeInfo}>
                      {differenceInYears(new Date(), new Date(`${year}-01-01`)) + 1}세
                    </span>
                  </YearPanel>
                ) : (
                  <YearPanel>
                    <span className="age-year">{year}년생</span>
                  </YearPanel>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </Wrapper>
      </ModalComponents>
    </>
  );
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

export default BirthRangeInput;
