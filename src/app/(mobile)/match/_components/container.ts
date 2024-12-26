import styled from "styled-components";
import { BUTTON_ACTIVE } from "@/styles/common";

export const MatchSummaryCard = styled.div`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: var(--gray0);
  ${BUTTON_ACTIVE("var(--gray0)", 10)};
`;
