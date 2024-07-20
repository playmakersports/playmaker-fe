import { FONTS } from "@/styles/common";
import styled from "@emotion/styled";

export const InputStyledWrapper = styled.div<{ isMedium?: boolean; isError?: boolean; hasBorder?: boolean }>`
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
  }

  ${({ isError, hasBorder }) =>
    hasBorder
      ? `
  background-color: transparent;
  border: 1px solid ${isError ? "var(--point)" : "var(--gray6)"};
  border-radius: 6px;
        `
      : `
  background-color: var(--gray6);
  border: 1px solid transparent;
      `} {
  }

  &:focus,
  &:has(input:focus) {
    border: 1px solid var(--main);
  }
`;
