"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import HomeIcon from "@/assets/icon/global/Home.svg";
import SearchListIcon from "@/assets/icon/global/SearchList.svg";
import CalendarIcon from "@/assets/icon/global/Calendar.svg";
import CrownIcon from "@/assets/icon/global/CrownSolid.svg";
import TeamHomeIcon from "@/assets/icon/global/TeamHome.svg";
import TreeChartIcon from "@/assets/icon/global/TreeChart.svg";
import PhysicsIcon from "@/assets/icon/global/Physics.svg";

const INNER_LR_PADDING = 36;
const BUTTON_WIDTH = 36;
const BUTTONS_GAP = 32;

function Navigation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const asPath = usePathname();
  const [showSubList, setShowSubList] = useState(false);

  const movePage = (target: string) => {
    router.push(target);
  };

  useEffect(() => {
    return () => {
      setShowSubList(false);
    };
  }, []);
  const MAIN_NAV = ["/", "/team/list", "/calendar", "/match"];

  if (MAIN_NAV.includes(asPath)) {
    return (
      <Container>
        <NavWrap>
          <Inner>
            <Button
              type="button"
              data-label="홈"
              className={asPath === "/" ? "active" : ""}
              opacity={showSubList ? 0 : 1}
            >
              <HomeIcon />
            </Button>
            <SubList show={showSubList}>
              <Button type="button" data-label="팀" onClick={() => movePage("/team/list")}>
                <TeamHomeIcon />
              </Button>
              <Button type="button" data-label="대회">
                <TreeChartIcon />
              </Button>
              <Button type="button" data-label="교류전">
                <PhysicsIcon />
              </Button>
            </SubList>
            <Button
              type="button"
              data-label="둘러보기"
              onClick={() => setShowSubList((prev) => !prev)}
              showList={showSubList}
            >
              <SearchListIcon />
            </Button>
            <Button
              type="button"
              data-label="캘린더"
              className={asPath === "/user" ? "active" : ""}
              opacity={showSubList ? 0 : 1}
            >
              <CalendarIcon />
            </Button>
            {/* <Button
              type="button"
              data-label="커뮤니티"
              className={asPath === "/" ? "active" : ""}
              opacity={showSubList ? 0 : 1}
            >
              <CrownIcon />
            </Button> */}
          </Inner>
        </NavWrap>
      </Container>
    );
  }
  return (
    <Container>
      <NavWrap>
        <Inner>
          <Button type="button" data-label="홈" className={asPath === "/" ? "active" : ""}>
            <HomeIcon />
          </Button>
          <Button type="button" data-label="살펴보기" className={asPath === "/team/list" ? "active" : ""}>
            <SearchListIcon />
          </Button>
          <Button type="button" data-label="캘린더" className={asPath === "/" ? "active" : ""}>
            <CalendarIcon />
          </Button>
          <Button type="button" data-label="경기" className={asPath === "/" ? "active" : ""}>
            <CrownIcon />
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
        transform: scale(0.2) translate3d(0, 40%, 0);
    }
    18% {
        opacity: 1;
        width: 68px;
        transform: scale(1.2) translate3d(0, 0, 0);
    }
    26% {
        opacity: 1;
        width: 68px;
        transform: scale(0.95);
    }
    36% {
        opacity: 1;
        width: 68px;
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
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(7px);
  pointer-events: auto;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  animation: ${showNavAnimate} 1.4s forwards;
  box-shadow: 0 6px 20px 0 rgba(208, 214, 226, 0.5);
  overflow: hidden;
`;
const Inner = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: ${BUTTONS_GAP}px;
  opacity: 0;
  animation: ${showInnerMenu} 0.5s forwards;
  animation-delay: 0.65s;
`;

const Button = styled.button<{ opacity?: number; showList?: boolean }>`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: ${BUTTON_WIDTH}px;
  opacity: ${({ opacity }) => opacity ?? 1};
  transform: translate3d(
    ${({ showList }) => (showList ? `-${(BUTTON_WIDTH * 4 + BUTTONS_GAP * 3) / 3 + 20}px` : "0")},
    0,
    0
  );
  /* 
  4개일 때
  transform: translate3d(${({ showList }) => (showList ? `-${BUTTON_WIDTH + BUTTONS_GAP}px` : "0")}, 0, 0); */
  transition: opacity 0.15s, transform 0.15s;
  transition-delay: opacity 0.15s;

  &::before {
    content: "";
    position: absolute;
    visibility: ${({ showList }) => (showList ? "visible" : "hidden")};
    right: -3px;
    width: 1px;
    height: ${({ showList }) => (showList ? BUTTON_WIDTH + 8 : 0)}px;
    background-color: var(--gray300);
    opacity: ${({ showList }) => (showList ? "0.9" : "0")};
    transition: opacity 0.45s, height 0.55s;
  }

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    fill: ${({ showList }) => (showList ? "var(--sub1)" : "var(--gray500)")};
    z-index: 1;
    transition: fill 0.4s;
  }

  &.active {
    svg {
      fill: var(--main);
      transition: fill 0.25s;
    }
    &::after {
      transition: color 0.25s;
      color: var(--main);
    }
  }

  &::after {
    content: attr(data-label);
    width: max-content;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ showList }) => (showList ? "var(--sub1)" : "var(--gray500)")};
    z-index: 1;
    transition: color 0.4s;
  }
`;

const SubList = styled.div<{ show: boolean }>`
  position: absolute;
  display: flex;
  left: ${BUTTON_WIDTH + BUTTONS_GAP}px;
  justify-content: space-between;
  align-items: center;
  width: ${BUTTON_WIDTH * 3 + BUTTONS_GAP * 2}px;
  gap: ${BUTTONS_GAP}px;
  background-color: transparent;
  z-index: ${({ show }) => (show ? 1 : 0)};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.15s;
  transition-delay: opacity 0.25s;

  ${Button} > svg {
    margin-top: -2px;
    width: 26px;
    height: 26px;
  }
`;

export default Navigation;
