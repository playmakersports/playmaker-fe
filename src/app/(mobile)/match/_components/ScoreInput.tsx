import React from "react";
import styled from "styled-components";

import ArrowBottom from "@/assets/icon/arrow/DownArrow.svg";

type Props = {
  stage: string;
  leftScore: number;
  rightScore: number;
  onLeftScoreChange: (score: number) => void;
  onRightScoreChange: (score: number) => void;
  disabled?: boolean;
};

function ScoreInput(props: Props) {
  const { stage, leftScore, rightScore, onLeftScoreChange, onRightScoreChange, disabled = false } = props;

  const handleLeftScoreChange = (score: number) => {
    if (score >= 0) {
      onLeftScoreChange(score);
    }
  };

  const handleRightScoreChange = (score: number) => {
    if (score >= 0) {
      onRightScoreChange(score);
    }
  };

  return (
    <Wrapper>
      <strong>{stage}</strong>
      <Inputs>
        <Indicator>
          <button type="button" className="top-arrow" onClick={() => handleLeftScoreChange(leftScore + 1)}>
            <ArrowBottom />
          </button>
          <button type="button" onClick={() => handleLeftScoreChange(leftScore - 1)}>
            <ArrowBottom />
          </button>
        </Indicator>
        <Input>
          <input
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="--"
            disabled={disabled}
            value={leftScore}
            onChange={(e) => handleLeftScoreChange(Number(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                handleLeftScoreChange(leftScore + 1);
              } else if (e.key === "ArrowDown") {
                handleLeftScoreChange(leftScore - 1);
              }
            }}
          />
        </Input>
        <p className="versus">:</p>
        <Input>
          <input
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="--"
            disabled={disabled}
            value={rightScore}
            onChange={(e) => handleRightScoreChange(Number(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                handleRightScoreChange(rightScore + 1);
              } else if (e.key === "ArrowDown") {
                handleRightScoreChange(rightScore - 1);
              }
            }}
          />
        </Input>
        <Indicator>
          <button type="button" className="top-arrow" onClick={() => handleRightScoreChange(rightScore + 1)}>
            <ArrowBottom />
          </button>
          <button type="button" onClick={() => handleRightScoreChange(rightScore - 1)}>
            <ArrowBottom />
          </button>
        </Indicator>
      </Inputs>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  strong {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 1.5rem;
    color: var(--main);
  }
`;
const Inputs = styled.div`
  border: 1px solid var(--primary300);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  background-color: var(--white);
  gap: 12px;

  p.versus {
    margin: 0 4px;
    font-size: 1.6rem;
    color: var(--gray400);
  }
`;
const Indicator = styled.div`
  display: flex;
  flex-direction: column;
  button {
    flex: 1;
    padding: 0 4px;
    border-radius: 5px;

    &.top-arrow {
      transform: rotate(180deg);
    }
    svg {
      fill: var(--gray300);
      width: 24px;
      height: 24px;
    }

    &:active {
      background-color: var(--gray50);
    }
  }
`;
const Input = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 1px rgba(12, 26, 75, 0.2), 0 1px 3px rgba(50, 50, 71, 0.1);

  input {
    padding: 10px 0;
    width: 90px;
    font-size: 3rem;
    line-height: 3rem;
    text-align: center;
    &::placeholder {
      color: var(--gray500);
    }
  }
`;

export default ScoreInput;
