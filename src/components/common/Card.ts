import { FONTS } from "@/styles/common";
import styled from "@emotion/styled";

export const BasicWhiteCard = styled.div`
  padding: 18px 20px;
  border-radius: 10px;
  background-color: var(--background-light);
  border: 1px solid var(--gray7);
  user-select: none;
  box-shadow: var(--shadow-alpha20);
`;

export const BasicWhiteSection = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.card};
  user-select: none;
`;

export const BasicWhiteCardTitle = styled.h3`
  margin: 0 0 16px;
  ${FONTS.HEAD1};
`;
