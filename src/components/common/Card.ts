import { FONTS } from "@/styles/common";
import styled from "@emotion/styled";

export const BasicWhiteCard = styled.div`
  padding: 18px 20px;
  border-radius: 20px;
  border: 1px solid var(--gray200);
  background-color: var(--background-light);
  user-select: none;
  box-shadow: var(--shadow-alpha20);
`;

export const BasicWhiteCardTitle = styled.h3`
  margin: 0 0 16px;
  ${FONTS.HEAD1};
`;
