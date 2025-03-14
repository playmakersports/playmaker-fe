import React, { useCallback, useImperativeHandle, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { getDate, getDaysInMonth, getMonth, getYear } from "date-fns";
import Flicking, { ChangedEvent, FlickingError, WillChangeEvent } from "@egjs/react-flicking";
import useModal from "@/hook/useModal";

import { FONTS } from "@/styles/common";

type Props = {
  children: (showModal: () => void) => React.ReactNode;
  defaultValue?: string;
  getCurrentValue: (values: { y: number; m: number; d: number }) => void;
  pickType?: "EVERYDAY" | "ONLY_PAST";
};
export const DateSwiperSelect = (props: Props) => {
  const { children, defaultValue, getCurrentValue, pickType = "EVERYDAY" } = props;

  const { ModalComponents, showModal } = useModal();

  const [yearValue, setYearValue] = useState(defaultValue ? +defaultValue.split("-")[0] : +getYear(new Date()));
  const [monthValue, setMonthValue] = useState(defaultValue ? +defaultValue.split("-")[1] : +getMonth(new Date()) + 1);
  const [dayValue, setDayValue] = useState(defaultValue ? +defaultValue.split("-")[2] : +getDate(new Date()));
  const yearFlickRef = useRef<Flicking>(null);
  const monthFlickRef = useRef<Flicking>(null);
  const dayFlickRef = useRef<Flicking>(null);

  useEffect(() => {
    if (defaultValue) {
      const [year, month, day] = defaultValue.split("-").map(Number);
      setYearValue(year);
      setMonthValue(month);
      setDayValue(day);
    }
  }, [defaultValue]);

  const getNumberFromTo = useCallback((start: number, end: number) => {
    if (start > end) {
      return Array.from({ length: start - end + 1 }, (_, index) => start - index);
    }
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }, []);
  const YEARS = getNumberFromTo(pickType === "EVERYDAY" ? 2299 : getYear(new Date()), 1940);
  const MONTHS = getNumberFromTo(
    1,
    (pickType === "ONLY_PAST" && +yearValue < getYear(new Date())) || pickType === "EVERYDAY"
      ? 12
      : getMonth(new Date()) + 1
  );
  const DAYS = getNumberFromTo(
    1,
    pickType === "ONLY_PAST" && +yearValue === getYear(new Date()) && +monthValue === getMonth(new Date()) + 1
      ? getDate(new Date())
      : getDaysInMonth(new Date(yearValue, monthValue - 1))
  );

  const onYearChanged = (e: ChangedEvent | WillChangeEvent) => {
    setYearValue(+`${YEARS[e.index]}`);
  };
  const onMonthChanged = (e: ChangedEvent | WillChangeEvent) => {
    setMonthValue(+`${MONTHS[e.index]}`);
  };
  const onDayChanged = (e: ChangedEvent | WillChangeEvent) => {
    setDayValue(+`${DAYS[e.index]}`);
  };

  const moveToYear = (index: number) => {
    setYearValue(+`${YEARS[index]}`);
    yearFlickRef.current!.moveTo(index).catch((err) => {
      if (err instanceof FlickingError) return;
      throw err;
    });
  };
  const moveToMonth = (index: number) => {
    setMonthValue(+`${MONTHS[index]}`);
    monthFlickRef.current!.moveTo(index).catch((err) => {
      if (err instanceof FlickingError) return;
      throw err;
    });
  };
  const moveToDay = (index: number) => {
    setDayValue(+`${DAYS[index]}`);
    dayFlickRef.current!.moveTo(index).catch((err) => {
      if (err instanceof FlickingError) return;
      throw err;
    });
  };

  return (
    <>
      {children(showModal)}

      <ModalComponents
        buttons={[
          {
            mode: "MAIN",
            name: "선택",
            onClick: (close) => {
              getCurrentValue({ y: yearValue, m: monthValue, d: dayValue });
              close();
            },
          },
        ]}
      >
        <Wrapper>
          <PickList>
            <Flicking
              ref={yearFlickRef}
              horizontal={false}
              onWillChange={onYearChanged}
              onChanged={onYearChanged}
              defaultIndex={YEARS.findIndex((v) => v === yearValue)}
            >
              {YEARS.map((year, index) => (
                <li
                  key={year + "year"}
                  className={year === +yearValue ? "active-pick" : ""}
                  onClick={() => moveToYear(index)}
                >
                  {year}
                </li>
              ))}
            </Flicking>
          </PickList>
          <PickList>
            <Flicking
              ref={monthFlickRef}
              horizontal={false}
              onWillChange={onMonthChanged}
              onChanged={onMonthChanged}
              defaultIndex={MONTHS.findIndex((v) => v === monthValue)}
            >
              {MONTHS.map((month, index) => (
                <li
                  key={month + "month"}
                  className={month === +monthValue ? "active-pick" : ""}
                  onClick={() => moveToMonth(index)}
                >
                  {month}
                </li>
              ))}
            </Flicking>
          </PickList>
          <PickList>
            <Flicking
              ref={dayFlickRef}
              horizontal={false}
              onWillChange={onDayChanged}
              onChanged={onDayChanged}
              defaultIndex={DAYS.findIndex((v) => v === dayValue)}
            >
              {DAYS.map((day, index) => (
                <li key={day} className={day === +dayValue ? "active-pick" : ""} onClick={() => moveToDay(index)}>
                  {day}
                </li>
              ))}
            </Flicking>
          </PickList>
        </Wrapper>
      </ModalComponents>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
  height: 160px;
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
const PickList = styled.ul`
  flex: 1;
  border-left: 1px solid var(--gray200);
  &:first-of-type {
    border-left: none;
  }
  li {
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
  }
`;
