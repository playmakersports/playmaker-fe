import React, { useCallback, useRef, useState } from "react";
import { InputStyledWrapper } from "./Wrapper";
import styled from "@emotion/styled";
import useModal from "@/hook/useModal";
import Flicking, { ChangedEvent, FlickingError, WillChangeEvent } from "@egjs/react-flicking";
import { getYear } from "date-fns";
import useToast from "@/hook/useToast";

import { CARD_ACTIVE, FONTS } from "@/styles/common";
import ArrowBottomIcon from "@/assets/icon/arrow/BottomArrowThin.svg";

type Props = {
  getYearRange: (target: [number, number]) => void;
  defaultValue?: [number, number];
  title?: string;
};
function BirthRangeInput({ getYearRange, defaultValue, title }: Props) {
  const { trigger } = useToast();
  const { showModal: showMinModal, ModalComponents: MinComponents } = useModal();
  const { showModal: showMaxModal, ModalComponents: MaxComponents } = useModal();
  const [birthYearMin, setBirthYearMin] = useState<number>(defaultValue ? defaultValue[0] : 0);
  const [birthYearMax, setBirthYearMax] = useState<number>(defaultValue ? defaultValue[1] : 0);
  const yearMinRef = useRef<Flicking>(null);
  const yearMaxRef = useRef<Flicking>(null);

  const getNumberFromTo = useCallback((start: number, end: number) => {
    if (start > end) {
      return Array.from({ length: start - end + 1 }, (_, index) => start - index);
    }
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }, []);

  const MIN_BIRTH_YEARS = getNumberFromTo(getYear(new Date()), 1940);
  const MAX_BIRTH_YEARS = getNumberFromTo(getYear(new Date()), !!birthYearMin ? birthYearMin : 1940);

  const onYearMinChanged = (e: ChangedEvent | WillChangeEvent) => {
    setBirthYearMin(+`${MIN_BIRTH_YEARS[e.index]}`);
  };
  const onYearMaxChanged = (e: ChangedEvent | WillChangeEvent) => {
    setBirthYearMax(+`${MAX_BIRTH_YEARS[e.index]}`);
  };

  const moveToYearMin = (index: number) => {
    setBirthYearMin(+`${MIN_BIRTH_YEARS[index]}`);
    yearMinRef.current!.moveTo(index).catch((err) => {
      if (err instanceof FlickingError) return;
      throw err;
    });
  };
  const moveToYearMax = (index: number) => {
    setBirthYearMax(+`${MAX_BIRTH_YEARS[index]}`);
    yearMaxRef.current!.moveTo(index).catch((err) => {
      if (err instanceof FlickingError) return;
      throw err;
    });
  };

  return (
    <>
      <Container>
        <p className="input-title">{title ?? "출생연도 범위"}</p>
        <Selects>
          <Select onClick={showMinModal}>
            {birthYearMin ? (
              <div className="selected-value">{birthYearMin}년생</div>
            ) : (
              <div className="placeholder">연장자 출생연도</div>
            )}
            <i className="arrow-icon">
              <ArrowBottomIcon />
            </i>
          </Select>
          <div className="separator" />
          <Select onClick={showMaxModal}>
            {birthYearMax ? (
              <div className="selected-value">{birthYearMax}년생</div>
            ) : (
              <div className="placeholder">연소자 출생연도</div>
            )}
            <i className="arrow-icon">
              <ArrowBottomIcon />
            </i>
          </Select>
        </Selects>
      </Container>
      <MinComponents
        buttons={[
          {
            mode: "MAIN",
            name: "다음",
            onClick: (close) => {
              close();
              showMaxModal();
            },
          },
        ]}
      >
        <Wrapper>
          <Flicking
            ref={yearMinRef}
            horizontal={false}
            onWillChange={onYearMinChanged}
            onChanged={onYearMinChanged}
            defaultIndex={MIN_BIRTH_YEARS.findIndex((v) => v === birthYearMin)}
          >
            {MIN_BIRTH_YEARS.map((year, index) => (
              <YearPanel
                key={year + "year"}
                className={year === +birthYearMin ? "active-pick" : ""}
                onClick={() => moveToYearMin(index)}
              >
                {year}년생 (만 {getYear(new Date()) - year}세)
              </YearPanel>
            ))}
          </Flicking>
        </Wrapper>
      </MinComponents>
      <MaxComponents
        buttons={[
          {
            mode: "MAIN",
            name: "선택",
            onClick: (close) => {
              if (birthYearMin <= birthYearMax) {
                getYearRange([birthYearMin, birthYearMax]);
                close();
              } else {
                trigger("잘못된 범위 선택입니다");
              }
            },
          },
        ]}
      >
        <Wrapper>
          <Flicking
            ref={yearMaxRef}
            horizontal={false}
            onWillChange={onYearMaxChanged}
            onChanged={onYearMaxChanged}
            defaultIndex={MAX_BIRTH_YEARS.findIndex((v) => v === birthYearMax)}
          >
            {MAX_BIRTH_YEARS.map((year, index) => (
              <YearPanel
                key={year + "year"}
                className={year === +birthYearMax ? "active-pick" : ""}
                onClick={() => moveToYearMax(index)}
              >
                {year}년생 (만 {getYear(new Date()) - year}세)
              </YearPanel>
            ))}
          </Flicking>
        </Wrapper>
      </MaxComponents>
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

  .input-information {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    padding: 0 8px;
    font-size: 1.2rem;
    color: var(--gray700);
    gap: 4px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
const Selects = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div.separator {
    display: block;
    width: 24px;
    height: 1px;
    background-color: var(--gray400);
  }
`;
const Select = styled(InputStyledWrapper)`
  ${CARD_ACTIVE}
  user-select: none;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px 0 rgba(141, 141, 141, 0.15);

  div.selected-value {
    ${FONTS.MD1W500}
  }
  div.placeholder {
    ${FONTS.MD1W500}
    font-weight: 400;
    color: var(--gray500);
  }
  i.arrow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    svg {
      transform: rotate(180deg);
      fill: var(--gray400);
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
  height: 240px;
  overflow: hidden;

  .flicking-viewport {
    position: relative;
    width: 100%;
    transform-style: preserve-3d;
    overflow: visible;
  }
  .flicking-camera {
    transform-style: preserve-3d;
    will-change: transform;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    background: linear-gradient(to bottom, var(--background-light) 0%, rgba(var(--background-light-rgb), 0) 100%);
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 24px;
    background: linear-gradient(to top, var(--background-light) 0%, rgba(var(--background-light-rgb), 0) 100%);
  }
`;
const YearPanel = styled.div`
  padding: 8px 12px;
  display: block;
  text-align: center;
  ${FONTS.MD1W500};
  color: var(--gray600);
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.5px;
  transition: all 0.25s;
  transition-delay: 0.2s;

  &.active-pick {
    color: var(--main);
    font-weight: 700;
    font-size: 2rem;
  }
`;

export default BirthRangeInput;
