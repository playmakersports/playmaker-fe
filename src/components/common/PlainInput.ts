import styled from "@emotion/styled";

export const DateKeypadInput = styled.input`
  width: 100%;
  color: var(--text);
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
    border-radius: 8px;
    border: 1px solid var(--main);
  }
`;