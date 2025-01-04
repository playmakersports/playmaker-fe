import styled from "styled-components";

export const BaseContainer = styled.section`
  padding: 12px 16px 20px;
`;

export const WhiteSectionDivider = styled.div<{ $child?: boolean }>`
  display: block;
  width: var(--mobile-max-width);
  height: 12px;
  background-color: var(--gray100);
  ${({ $child }) =>
    $child &&
    `
  margin: 0 -16px;
  `}
`;

export const WhiteSectionWrapper = styled.article`
  margin-left: -16px;
  margin-right: -16px;
  padding: 20px 24px;
`;
