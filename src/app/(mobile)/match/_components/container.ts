import styled from "styled-components";
import { BUTTON_ACTIVE } from "@/styles/common";

export const MatchSummaryCard = styled.div`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: var(--white);
  ${BUTTON_ACTIVE("var(--white)", 10)};
`;
