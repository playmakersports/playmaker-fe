import { FONTS } from "@/styles/common";
import styled from "@emotion/styled";

export const InputStyledWrapper = styled.div<{ isMedium?: boolean; isError?: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  padding: ${({ isMedium }) => (isMedium ? "6px 8px" : "10px 12px")};
  gap: 10px;
  align-items: center;
  border-radius: 8px;
  ${FONTS.MD1};
  font-size: 1.8rem;
  font-weight: 500;

  & svg {
    width: 20px;
    height: 20px;
    fill: var(--black);
  }

  background-color: transparent;
  border: 1px solid ${({ isError }) => (isError ? "var(--point)" : "var(--gray6)")};
  border-radius: 6px;

  &:disabled,
  &:has(input:disabled),
  &:has(input:read-only) {
    border: 1px solid transparent;
    background-color: var(--gray6);
  }
  &:focus,
  &:has(input:focus) {
    border: 1px solid var(--main);
  }
`;
