import { FONTS } from "@/styles/common";
import styled from "@emotion/styled";

export const InputStyledWrapper = styled.div<{ isMedium?: boolean; isError?: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  height: 44px;
  padding: ${({ isMedium }) => (isMedium ? "6px 8px" : "10px 12px")};
  gap: 10px;
  align-items: center;
  border-radius: 8px;
  ${FONTS.MD1};
  font-size: 1.8rem;
  font-weight: 500;

  & svg {
    width: 18px;
    height: 18px;
    fill: var(--gray900);
  }

  background-color: var(--background-light);
  border: 1px solid ${({ isError }) => (isError ? "var(--point)" : "var(--gray300)")};
  border-radius: 6px;

  &:disabled,
  &:has(input:disabled) {
    border: 1px solid transparent;
    background-color: var(--gray300);
  }
  &:focus,
  &:has(input:focus) {
    border: 1px solid var(--main);
  }
`;
