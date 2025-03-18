import { FONTS } from "@/styles/common";
import styled from "styled-components";

export const InputStyledWrapper = styled.div<{ $isMedium?: boolean; $isError?: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  height: 44px;
  padding: ${({ $isMedium }) => ($isMedium ? "6px 8px" : "0 12px")};
  gap: 10px;
  align-items: center;
  border-radius: 8px;

  & svg {
    width: 18px;
    height: 18px;
    fill: var(--gray900);
  }

  background-color: var(--background-light);
  border: 1px solid ${({ $isError }) => ($isError ? "var(--warning500)" : "var(--gray300)")};
  border-radius: 6px;

  &:disabled,
  &:has(input:disabled) {
    background-color: var(--gray100);
  }
  &:focus,
  &:has(input:focus) {
    border: 1px solid var(--main);
  }

  & input {
    color: var(--gray900);
    ${FONTS.body3("regular")};
  }
`;
