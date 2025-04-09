import React, { useState } from "react";
import styled from "styled-components";

import { fonts } from "@/styles/fonts.css";
import { baseContainer } from "@/styles/container.css";
import { NumberFlowInput } from "@/components/common/input/NumberFlowInput";

function Stage4() {
  const [number, setNumber] = useState(0);
  return (
    <div className={baseContainer}>
      <div
        style={{
          display: "flex",
          gap: "2px",
          alignItems: "center",
          justifyContent: "center",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        <div
          className={fonts.head4.semibold}
          style={{
            letterSpacing: "-0.15rem",
            color: "var(--gray700)",
          }}
        >
          <NumberFlowInput
            style={{ padding: "0 2px" }}
            value={number}
            onChange={(e) => {
              setNumber(e.target.valueAsNumber);
            }}
          />
        </div>
        <p className={fonts.body2.regular} style={{ color: "var(--gray400)" }}>
          kg
        </p>
      </div>
      <RangeSlider
        type="range"
        min={40}
        max={120}
        value={number}
        onChange={(e) => {
          setNumber(e.target.valueAsNumber);
        }}
      />
    </div>
  );
}

const RangeSlider = styled.input<{
  min: number;
  max: number;
  value: number;
}>`
  appearance: none;
  width: 100%;
  height: 2px;

  background: ${({ min, max, value }) => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, var(--primary500) 0%, var(--primary500) ${percentage}%, var(--gray200) ${percentage}%, var(--gray200) 100%)`;
  }};
  border-radius: 4px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background-color: var(--white);
    border: 1px solid var(--gray300);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--shadow-xs);
  }
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background-color: var(--white);
    border: 1px solid var(--gray300);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--shadow-xs);
  }
`;

export default Stage4;
