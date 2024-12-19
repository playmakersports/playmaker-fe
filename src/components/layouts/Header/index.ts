import { TEXT_ACTIVE } from "@/styles/common";
import styled from "styled-components";

export const HeaderInner = styled.div`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-top: env(safe-area-inset-top);
  padding-top: constant(safe-area-inset-top);
`;

export const HeaderWrapper = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--mobile-max-width);
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: env(safe-area-inset-top) 16px;
  padding: constant(safe-area-inset-top) 16px;
  height: var(--header-height);
  z-index: 999;
  transition: background-color 0.3s, backdrop-filter 0.3s;
  .logo {
    width: 148px;
    fill: var(--gray900);
  }
`;

export const HeaderIcon = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  ${TEXT_ACTIVE("rgba(var(--gray100-rgb),0.5)")};
  border-radius: 5px;

  svg {
    width: 22px;
    height: 22px;
  }
`;
