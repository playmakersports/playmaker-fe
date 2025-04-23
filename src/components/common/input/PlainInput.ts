import styled from "styled-components";

export const DateKeypadInput = styled.input`
  width: 100%;
  color: var(--gray700);
  text-align: right;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  padding: 1px;
  &:focus {
    padding: 0px;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;

export const RangeSliderInput = styled.input<{
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
