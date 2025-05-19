"use client";
import styled from "styled-components";

export const BaseContainer = styled.section`
  padding: 0 var(--global-lr-padding) 20px;
`;

export const WhiteSectionDivider = styled.div<{ $child?: boolean }>`
  display: block;
  width: var(--mobile-max-width);
  height: 6px;
  background-color: var(--gray50);
  ${({ $child }) =>
    $child &&
    `
  margin: 0 calc(-1 * var(--global-lr-padding))px;
  `}
`;
export const WhiteSectionWrapper = styled.article`
  margin-left: -16px;
  margin-right: -16px;
  padding: 20px 24px;
`;
