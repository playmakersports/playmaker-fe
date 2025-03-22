"use client";

import React from "react";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";

import HomeIcon from "@/assets/icon/common/filled/Home.svg";
// import SearchListIcon from "@/assets/icon/common/filled/SearchList.svg";
// import FlagIcon from "@/assets/icon/common/filled/Flag.svg";
import PersonIcon from "@/assets/icon/common/filled/Person.svg";
// import PhysicsIcon from "@/assets/icon/common/filled/Physics.svg";

function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const movePage = (path: string) => {
    router.push(path);
  };

  return (
    <Container>
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
          data-label="팀"
          onClick={() => movePage("/matches")}
          className={pathname === "/matches" ? "active" : ""}
        >
          {/* <FlagIcon /> */}
        </Button>
        <Button
          type="button"
          data-label="매치"
          onClick={() => movePage("/matches")}
          className={pathname === "/matches" ? "active" : ""}
        >
          {/* <FlagIcon /> */}
        </Button>
        <Button
          type="button"
          data-label="피드"
          onClick={() => movePage("/feed")}
          className={pathname === "/feed" ? "active" : ""}
        >
          {/* <PhysicsIcon /> */}
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
    </Container>
  );
}

const Container = styled.nav`
  position: fixed;
  width: var(--mobile-max-width);
  height: var(--navigation-height);
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;

  @media (max-width: 540px) {
    width: 100%;
  }
`;

const Inner = styled.div`
  width: 100%;
  padding: 16px 16px calc(var(--safe-bottom) + 16px);
  display: flex;
  justify-content: space-between;
  background-color: var(--white);
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -7px 20px 0 #efefef;
`;

const Button = styled.button<{ opacity?: number }>`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
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
