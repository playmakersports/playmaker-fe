import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { keyframes } from "@emotion/react";

import SearchListIcon from "@/assets/icon/global/SearchList.svg";
import CalendarIcon from "@/assets/icon/global/Calendar.svg";
import PaperPlaneIcon from "@/assets/icon/global/PaperPlane.svg";
import CrownIcon from "@/assets/icon/global/CrownSolid.svg";

const INNER_LR_PADDING = 24;
const BUTTON_WIDTH = 40;
const BUTTONS_GAP = 28;

function Navigation() {
  const router = useRouter();
  const [showListType, setShowListType] = useState(false);
  const movePage = (target: string) => {
    router.push(target);
  };

  return (
    <Container>
      <NavWrap show={showListType}>
        <Inner>
          <button
            type="button"
            data-label="둘러보기"
            onClick={() => setShowListType((prev) => !prev)}
            className={showListType ? "active main-menu" : " main-menu"}
          >
            <SearchListIcon />
          </button>
          <ListSelector show={showListType}>
            <button type="button" onClick={() => movePage("/team/list")}>
              팀
            </button>
            <button type="button" onClick={() => movePage("/competition")}>
              대회
            </button>
            <button type="button" onClick={() => movePage("/match")}>
              매치
            </button>
          </ListSelector>
          <button type="button" className={showListType ? "hide main-menu" : " main-menu"}>
            <CalendarIcon />
          </button>
          <button type="button" className={showListType ? "hide main-menu" : " main-menu"}>
            <PaperPlaneIcon />
          </button>
          <button type="button" data-label="팀 관리" className={showListType ? "hide main-menu" : " main-menu"}>
            <CrownIcon />
          </button>
        </Inner>
      </NavWrap>
    </Container>
  );
}

const showNavAnimate = keyframes`
    0% {
        opacity: 0.3;
        width: 64px;
        transform: scale(0.2) translate3d(0, 40%, 0);
    }
    18% {
        opacity: 1;
        width: 64px;
        transform: scale(1.2) translate3d(0, 0, 0);
    }
    26% {
        opacity: 1;
        width: 64px;
        transform: scale(0.95);
    }
    36% {
        opacity: 1;
        width: 64px;
        transform: scale(1);
    }
    60% {
        opacity: 1;
        transform: scale(1.03);
    }
    74% {
        opacity: 1;
        width: ${INNER_LR_PADDING * 2 + BUTTON_WIDTH * 4 + BUTTONS_GAP * 3}px;
        transform: scale(0.98);
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
  max-width: 320px;
  bottom: calc(16px + var(--env-sab) / 1.5);
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  pointer-events: none;
`;
const SHOW_SUB_GRADIENT = "linear-gradient(to right, rgba(108, 108, 108, 0.8) 27%, rgba(256, 256, 256, 0.75) 27%)";
const NavWrap = styled.div<{ show: boolean }>`
  width: ${INNER_LR_PADDING * 2 + BUTTON_WIDTH * 4 + BUTTONS_GAP * 3}px;
  padding: 12px ${INNER_LR_PADDING}px;
  border-radius: 32px;
  background: ${({ show }) => (show ? SHOW_SUB_GRADIENT : "rgba(255, 255, 255, 0.75)")};
  backdrop-filter: blur(7px);
  pointer-events: auto;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  animation: ${showNavAnimate} 1.4s forwards;
  animation-delay: 0.2s;
  box-shadow: 0 2px 20px 2px rgba(0, 0, 0, 0.1);
`;
const Inner = styled.div`
  position: relative;
  display: flex;
  gap: ${BUTTONS_GAP}px;
  opacity: 0;
  animation: ${showInnerMenu} 0.5s forwards;
  animation-delay: 1.1s;

  button.main-menu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${BUTTON_WIDTH}px;
    height: ${BUTTON_WIDTH}px;
    opacity: 1;
    svg {
      width: 28px;
      height: 28px;
      fill: var(--gray700);
    }

    &.active {
      border-radius: 8px;
      transition: background-color 0.25s;
      svg {
        fill: var(--gray0);
      }
    }

    &.hide {
      opacity: 0;
      transition: opacity 0.2s;
    }

    &::before {
      content: attr(data-label);
      position: absolute;
      display: inline-block;
      top: -100%;
      left: 50%;
      transform: translate3d(-50%, 5px, 0);
      width: max-content;
      font-size: 1.6rem;
      font-weight: 400;
      padding: 6px 10px;
      border-radius: 5px;
      background-color: var(--gray700);
      color: var(--gray0);
      opacity: 0;
      visibility: hidden;
      transition: transform 0.2s, opacity 0.2s;
    }
    &:hover::before {
      visibility: visible;
      opacity: 1;
      transform: translate3d(-50%, -10px, 0);
    }
    @media (max-width: 600px) {
      &:hover::before {
        display: none;
      }
    }
  }
`;
const ListSelector = styled.div<{ show: boolean }>`
  position: absolute;
  left: calc(40px + 8px);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin: -3px ${({ show }) => (show ? "0" : "-24px")} -3px 0;
  padding: 4px 10px 0 8px;
  width: ${({ show }) => (show ? "216px" : "0%")};
  height: 100%;
  opacity: ${({ show }) => (show ? "1" : "0")};
  overflow: hidden;
  transition: width 0.2s, opacity 0.25s;
  z-index: 2;

  button:nth-child(2n) {
    position: relative;
    padding: 0 10px;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 4px;
      transform: translateY(-50%);
      display: inline-block;
      height: 70%;
      border-right: 1px solid var(--gray700);
      opacity: 0.4;
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 4px;
      transform: translateY(-50%);
      display: inline-block;
      height: 70%;
      border-left: 1px solid var(--gray700);
      opacity: 0.4;
    }
  }
  button {
    flex: 0.9;
    gap: 4px;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--gray700);
    word-break: keep-all;
  }
`;

export default Navigation;
