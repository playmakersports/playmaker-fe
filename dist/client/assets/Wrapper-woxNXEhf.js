import{a}from"./styled-components.browser.esm-B_lRBw7u.js";const o=a.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  gap: 8px;
  align-items: center;
  border-radius: 8px;
  text-align: left;
  background-color: var(--background-light);
  border: 1px solid ${({$isError:r})=>r?"var(--red500)":"var(--gray200)"};
  border-radius: 6px;

  &:disabled,
  &:has(input:disabled) {
    background-color: var(--gray50);
    & input {
      color: var(--gray300);
    }
    & svg {
      fill: var(--gray300);
    }
  }
  &:focus,
  &:has(input:focus) {
    border: 1px solid var(--gray300);
  }
`;export{o as I};
