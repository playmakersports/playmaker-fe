"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { useRouter, usePathname } from "next/navigation";

import HomeIcon from "@/assets/icon/global/Home.svg";
// import SearchListIcon from "@/assets/icon/global/SearchList.svg";
import FlagIcon from "@/assets/icon/global/Flag.svg";
import PersonIcon from "@/assets/icon/global/Person24.svg";
import PhysicsIcon from "@/assets/icon/global/Physics.svg";

const INNER_LR_PADDING = 20;
const BUTTON_WIDTH = 64;
const BUTTONS_GAP = 4;

function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const movePage = (path: string) => {
    router.push(path);
  };

  return (
    <Container>
      <NavWrap>
        <Inner>
          <Button
            type="button"
            data-label="홈"
            onClick={() => movePage("/")}
            className={pathname === "/" ? "active" : ""}
          >
            <HomeIcon />
          </Button>
          <Button
            type="button"
            data-label="매치"
            onClick={() => movePage("/matches")}
            className={pathname === "/matches" ? "active" : ""}
          >
            <FlagIcon />
          </Button>
          <Button
            type="button"
            data-label="피드"
            onClick={() => movePage("/feed")}
            className={pathname === "/feed" ? "active" : ""}
          >
            <PhysicsIcon />
          </Button>
          <Button
            type="button"
            data-label="마이"
            onClick={() => movePage("/my")}
            className={["/my", "/my/team", "/my/feed"].includes(pathname) ? "active" : ""}
          >
            <PersonIcon />
          </Button>
        </Inner>
      </NavWrap>
    </Container>
  );
}

const showNavAnimate = keyframes`
    0% {
        opacity: 0.3;
        width: 68px;
        transform: scale(0.2);
    }
    25% {
        opacity: 1;
        width: 68px;
        transform: scale(1.25);
    }
    35% {
        opacity: 1;
        width: 68px;
        transform: scale(1.1);
    }
    57% {
        opacity: 1;
        transform: scale(1);
    }
    74% {
        opacity: 1;
        width: ${INNER_LR_PADDING * 2 + BUTTON_WIDTH * 4 + BUTTONS_GAP * 3}px;
        transform: scale(1);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;
const showInnerMenu = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;
const Container = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: calc(12px + var(--env-sab) / 1.8);
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  pointer-events: none;
`;
const NavWrap = styled.div`
  display: flex;
  align-items: center;
  width: ${INNER_LR_PADDING * 2 + BUTTON_WIDTH * 4 + BUTTONS_GAP * 3}px;
  height: 68px;
  padding: 0 ${INNER_LR_PADDING}px;
  border-radius: 48px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(7px);
  pointer-events: auto;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  animation: ${showNavAnimate} 1.4s forwards;
  animation-delay: 0.35s;
  box-shadow: 0 6px 20px 0 rgba(208, 214, 226, 0.5);
  overflow: hidden;
  will-change: width, transform;
`;
const Inner = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: ${BUTTONS_GAP}px;
  opacity: 0;
  animation: ${showInnerMenu} 0.5s forwards;
  animation-delay: 0.85s;
`;

const Button = styled.button<{ opacity?: number }>`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: ${BUTTON_WIDTH}px;
  opacity: ${({ opacity }) => opacity ?? 1};
  transition: opacity 0.2s;

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    fill: var(--gray400);
    z-index: 1;
    transition: fill 0.4s;
  }

  &.active {
    svg {
      fill: var(--main);
      transition: fill 0.25s;
    }
    &::after {
      color: var(--main);
      transition: color 0.25s;
    }
  }

  &::after {
    content: attr(data-label);
    width: max-content;
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--gray500);
    z-index: 1;
    transition: color 0.4s;
  }
`;

export default Navigation;
