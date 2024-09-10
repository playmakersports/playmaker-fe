import { FONTS } from "@/styles/common";
import styled from "@emotion/styled";

export const StepPageTitle = styled.h2`
  display: block;
  margin: 16px auto 32px;
  font-size: 2.4rem;
  text-align: center;
  white-space: pre-line;
  line-height: 3.4rem;
`;
export const StepPageDescription = styled.p`
  margin: -20px 0 28px;
  ${FONTS.MD2};
  color: var(--gray700);
  text-align: center;
`;

export const StepFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
