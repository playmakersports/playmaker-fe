import { FONTS } from "@/styles/common";
import styled from "@emotion/styled";

export const BasicWhiteCard = styled.div`
  padding: 18px 20px;
  border-radius: 10px;
  background-color: var(--card);
  border: 1px solid var(--box-stroke);
  user-select: none;
  box-shadow: 0 2px 4px 0 rgba(141, 141, 141, 0.25);
`;

export const CardAreaTitle = styled.div`
  ${FONTS.MD1};
  font-weight: 700;
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
