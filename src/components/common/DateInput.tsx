import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { getDate, getDay, getDaysInMonth, getMonth, getYear } from "date-fns";
import Flicking, { ChangedEvent, WillChangeEvent } from "@egjs/react-flicking";

import { FONTS } from "@/styles/common";
import useModal from "@/hook/useModal";
import { BasicInput, InputProps } from "./Input";

type Props = Omit<InputProps, "type" | "search"> & {
  defaultValue?: string;
  dateType?: "DATE" | "TIME" | "DATETIME";
  pickType?: "EVERYDAY" | "ONLY_PAST";
};
function DateInput(props: Props) {
  const {
    defaultValue,
    dateType = "DATE",
    pickType = "EVERYDAY",
    title,
    errorText,
    delButton = false,
    medium = false,
    ...rest
  } = props;

  const { ModalComponents, showModal } = useModal();
  const inputRef = useRef<HTMLInputElement>(null);

  const [yearValue, setYearValue] = useState(defaultValue ? +defaultValue.split("-")[0] : +getYear(new Date()));
  const [monthValue, setMonthValue] = useState(defaultValue ? +defaultValue.split("-")[1] : +getMonth(new Date()) + 1);
  const [dayValue, setDayValue] = useState(defaultValue ? +defaultValue.split("-")[2] : +getDate(new Date()));

  const flickRef = useRef<Flicking>(null);
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
      : getDaysInMonth(`${yearValue}/${monthValue}/01`)
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

  return (
    <>
      <BasicInput ref={inputRef} type="text" title={title} onButtonWrapClick={() => showModal()} {...rest} />

      <ModalComponents
        buttons={[
          {
            mode: "MAIN",
            name: "선택",
            onClick: (close) => {
              inputRef.current!.value = `${yearValue}-${monthValue}-${dayValue}`;
              close();
            },
          },
        ]}
      >
        <Wrapper>
          <PickList>
            <Flicking
              ref={flickRef}
              horizontal={false}
              onWillChange={onYearChanged}
              onChanged={onYearChanged}
              defaultIndex={YEARS.findIndex((v) => v === yearValue)}
            >
              {YEARS.map((year) => (
                <li key={year + "year"} className={year === +yearValue ? "active-pick" : ""}>
                  {year}
                </li>
              ))}
            </Flicking>
          </PickList>
          <PickList>
            <Flicking
              ref={flickRef}
              horizontal={false}
              onWillChange={onMonthChanged}
              onChanged={onMonthChanged}
              defaultIndex={MONTHS.findIndex((v) => v === monthValue)}
            >
              {MONTHS.map((month) => (
                <li key={month + "month"} className={month === +monthValue ? "active-pick" : ""}>
                  {month}
                </li>
              ))}
            </Flicking>
          </PickList>
          <PickList>
            <Flicking
              ref={flickRef}
              horizontal={false}
              onWillChange={onDayChanged}
              onChanged={onDayChanged}
              defaultIndex={DAYS.findIndex((v) => v === dayValue)}
            >
              {DAYS.map((day) => (
                <li key={day} className={day === +dayValue ? "active-pick" : ""}>
                  {day}
                </li>
              ))}
            </Flicking>
          </PickList>
        </Wrapper>
      </ModalComponents>
    </>
  );
}
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
  border-left: 1px solid var(--gray6);
  &:first-of-type {
    border-left: none;
  }
  li {
    padding: 8px 12px;
    display: block;
    text-align: center;
    ${FONTS.MD1W500};
    color: var(--gray3);
    transition: all 0.25s;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.5px;

    &.active-pick {
      color: var(--main);
      font-weight: 600;
      font-size: 1.8rem;
    }
  }
`;

export default DateInput;
