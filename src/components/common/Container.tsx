import styled from "@emotion/styled";

export const BaseContainer = styled.section`
  padding: 12px 16px 20px;
`;

export const DividedContainer = styled.article`
  margin-left: -16px;
  margin-right: -16px;
  padding: 16px 16px 20px;
  border-top: 12px solid ${({ theme }) => theme.gray4};
`;

export const WhiteSectionDivider = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  height: 12px;
  box-shadow: inset 0 4px 4px 0 rgba(162, 162, 162, 0.25);
`;
export const WhiteSectionWrapper = styled.article`
  margin-left: -16px;
  margin-right: -16px;
  padding: 20px 24px;
  background-color: var(--white);
`;
