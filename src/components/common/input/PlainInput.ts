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
