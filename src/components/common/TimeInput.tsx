"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { FONTS } from "@/styles/common";
import { DateKeypadInput } from "./PlainInput";
import ClockIcon from "@/assets/icon/global/Clock.svg";
import { getHours, getMinutes } from "date-fns";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  size?: "LARGE" | "MEDIUM";
};
const TimeInput = React.forwardRef<HTMLInputElement, Props>(({ size = "LARGE", defaultValue, ...rest }, ref) => {
  const getHourMinute = (target: string) => {
    const [hour, minute] = target.split(":");
    const am = +hour < 12;
    const calculateHour = am ? hour : `${+hour - 12}`;
    return { hour: calculateHour, minute, am };
  };
  const [timeValue, setTimeValue] = useState(
    defaultValue
      ? {
          am: getHourMinute(`${defaultValue}`).am,
          hour: getHourMinute(`${defaultValue}`).hour,
          minute: getHourMinute(`${defaultValue}`).minute,
        }
      : {
          am: getHours(new Date()) < 12,
          hour:
            getHours(new Date()) < 12
              ? String(getHours(new Date())).padStart(2, "0")
              : String(getHours(new Date()) - 12).padStart(2, "0"),
          minute: String(getMinutes(new Date())).padStart(2, "0"),
        }
  );

  return (
    <Container>
      <input
        style={{ display: "none" }}
        ref={ref}
        {...rest}
        type="text"
        value={`${String(
          +timeValue.hour +
            (!timeValue.am && +timeValue.hour < 12 ? 12 : 0) -
            (timeValue.am && +timeValue.hour === 12 ? 12 : 0)
        ).padStart(2, "0")}:${timeValue.minute.padStart(2, "0")}`}
      />
      <ClockIcon fill={rest.disabled ? "var(--gray500)" : "var(--gray700)"} />
      <button
        className="am-pm-button"
        type="button"
        disabled={rest.disabled}
        onClick={() => {
          if (timeValue.hour === "12") {
            setTimeValue((prev) => ({ ...prev, am: !prev.am }));
          } else if (timeValue.hour === "00") {
            setTimeValue((prev) => ({ ...prev, am: false, hour: "12" }));
          } else {
            setTimeValue((prev) => ({ ...prev, am: !prev.am }));
          }
        }}
      >
        {timeValue.am ? "오전" : "오후"}
      </button>
      <DateKeypadInput
        type="text"
        pattern="[0-9]*"
        inputMode="numeric"
        disabled={rest.disabled}
        value={timeValue.hour}
        onFocus={(e) => e.target.select()}
        onChange={(event) => {
          const value = event.target.value;
          if (+value > 23) return null;
          setTimeValue((prev) => ({ ...prev, hour: value }));
        }}
        onBlur={(event) => {
          const value = event.target.value;
          if (+value > 12) {
            setTimeValue((prev) => ({ ...prev, am: false, hour: String(+value - 12).padStart(2, "0") }));
          } else if (+value === 0) {
            setTimeValue((prev) => ({ ...prev, am: true, hour: "12" }));
          } else {
            setTimeValue((prev) => ({ ...prev, hour: value.padStart(2, "0") }));
          }
        }}
      />
      :
      <DateKeypadInput
        type="text"
        pattern="[0-9]*"
        inputMode="numeric"
        value={timeValue.minute}
        disabled={rest.disabled}
        onFocus={(e) => e.target.select()}
        onChange={(event) => {
          if (+event.target.value > 59) return null;
          setTimeValue((prev) => ({ ...prev, minute: event.target.value }));
        }}
        onBlur={(event) => setTimeValue((prev) => ({ ...prev, minute: event.target.value.padStart(2, "0") }))}
      />
    </Container>
  );
});
TimeInput.displayName = "TimeInput";

const Container = styled.div`
  position: relative;
  display: flex;
  padding: 10px 10px 10px 12px;
  align-items: center;
  justify-content: center;
  gap: 1px;
  border: 1px solid var(--gray300);
  color: var(--gray900);
  border-radius: 8px;
  ${FONTS.body3("regular")};

  svg {
    margin-right: 4px;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  ${DateKeypadInput} {
    width: 24px;
    padding-right: 2px;
    border-radius: 0;

    &:focus {
      padding-right: 2px;
      border: none;
    }
  }

  button.am-pm-button {
    margin-right: 2px;
    border-radius: 2px;
    &:hover {
      background-color: var(--gray100);
      outline: 3px solid var(--gray100);
    }
    &:disabled {
      color: var(--gray400);
    }
  }
  &:has(input:disabled) {
    appearance: none;
    color: var(--gray400);
    background-color: var(--gray100);
  }
  &:has(input:focus) {
    border: 1px solid var(--main);
  }
`;

export default TimeInput;
