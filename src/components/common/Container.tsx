import styled from "styled-components";

export const BaseContainer = styled.section`
  padding: 12px 16px 20px;
`;

export const WhiteSectionDivider = styled.div`
  display: block;
  margin: 0 -16px;
  width: calc(100% + 32px);
  height: 12px;
  background-color: var(--background);
  box-shadow: inset 0 4px 4px 0 rgba(195, 220, 243, 0.5);
`;
export const WhiteSectionWrapper = styled.article`
  margin-left: -16px;
  margin-right: -16px;
  padding: 20px 24px;
`;
