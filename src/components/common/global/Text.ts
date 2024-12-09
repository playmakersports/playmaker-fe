import { FONTS } from "@/styles/common";
import styled from "@emotion/styled";

export const StepPageTitle = styled.h3`
  display: block;
  margin: 16px 10px 4px;
  font-size: 2.2rem;
  font-weight: 600;
  white-space: pre-line;
  line-height: 3rem;
`;
export const StepPageDescription = styled.p`
  margin: 0 10px;
  ${FONTS.MD2};
  font-weight: 400;
  color: var(--gray700);
  white-space: pre-line;
  text-align: center;
`;

export const StepFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
