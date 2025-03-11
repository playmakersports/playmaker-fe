"use client";

import styled from "styled-components";
import { BaseContainer } from "@/components/common/Container";

export const HomeContainer = styled.div`
  margin-top: calc(-1 * var(--safe-area-top));
`;
export const HomeInnerWrapper = styled(BaseContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--background-light);
  margin-top: -20px;
  border-radius: 20px 20px 0 0;
`;

export const HomeBackGradient = styled.div`
  position: absolute;
  margin: calc(-1 * var(--header-height)) -16px 0;
  top: 0;
  width: 100%;
  height: 900px;
  background: linear-gradient(165deg, rgba(48, 108, 239, 0.8) 20%, rgb(48, 109, 239, 0) 90%);
  z-index: 0;
  opacity: 0.15;
`;
