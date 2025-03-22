"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { useRouter, usePathname } from "next/navigation";

import { FONTS } from "@/styles/common";

// Filled
import HomeIconFilled from "@/assets/icon/common/filled/Home.svg";
import PeopleIconFilled from "@/assets/icon/common/filled/People.svg";
import NotificationIconFilled from "@/assets/icon/common/filled/Notification.svg";
import MailIconFilled from "@/assets/icon/common/filled/Mail.svg";
import PersonIconFilled from "@/assets/icon/common/filled/Person.svg";
// Outlined
import HomeIconOutlined from "@/assets/icon/common/outlined/Home.svg";
import PeopleIconOutlined from "@/assets/icon/common/outlined/People.svg";
import NotificationIconOutlined from "@/assets/icon/common/outlined/Notification.svg";
import MailIconOutlined from "@/assets/icon/common/outlined/Mail.svg";
import PersonIconOutlined from "@/assets/icon/common/outlined/Person.svg";

function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const movePage = (path: string) => {
    router.push(path);
  };

  return (
    <Container>
      <Inner
        style={{
          boxShadow: "0 0 15px 0 rgba(51, 65, 85, 0.05)",
          backgroundColor: "var(--background-light)",
        }}
      >
        <Button type="button" data-label="홈" onClick={() => movePage("/")} data-active={pathname === "/"}>
          <HomeIconOutlined className="outlined-icon" />
          <HomeIconFilled className="filled-icon" />
        </Button>
        <Button
          type="button"
          data-label="팀"
          onClick={() => movePage("/matches")}
          data-active={pathname === "/matches"}
        >
          <PeopleIconOutlined className="outlined-icon" />
          <PeopleIconFilled className="filled-icon" />
        </Button>
        <Button
          type="button"
          data-label="알림"
          onClick={() => movePage("/matches")}
          data-active={pathname === "/matches"}
        >
          <NotificationIconOutlined className="outlined-icon" />
          <NotificationIconFilled className="filled-icon" />
        </Button>
        <Button type="button" data-label="피드" onClick={() => movePage("/feed")} data-active={pathname === "/feed"}>
          <MailIconOutlined className="outlined-icon" />
          <MailIconFilled className="filled-icon" />
        </Button>
        <Button
          type="button"
          data-label="마이"
          onClick={() => movePage("/my")}
          data-active={["/my", "/my/team", "/my/feed"].includes(pathname)}
        >
          <PersonIconOutlined className="outlined-icon" />
          <PersonIconFilled className="filled-icon" />
        </Button>
      </Inner>
    </Container>
  );
}

const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.2);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.nav`
  position: fixed;
  width: var(--mobile-max-width);
  min-height: var(--navigation-height);
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;

  @media (max-width: 540px) {
    width: 100%;
  }
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 16px calc(var(--safe-bottom) + 12px);
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    fill: var(--gray300);
    z-index: 1;
  }

  &[data-active="false"] {
    svg.filled-icon {
      display: none;
    }
  }

  &[data-active="true"] {
    svg.outlined-icon {
      display: none;
    }
    svg {
      fill: var(--primary500);
      animation: ${bounce} 0.4s ease;
    }

    &::after {
      ${FONTS.caption1("semibold")};
      color: var(--primary500);
    }
  }

  &::after {
    content: attr(data-label);
    width: max-content;
    margin-top: 2px;
    z-index: 1;
    color: var(--gray400);
    ${FONTS.caption1("regular")};
  }
`;

export default Navigation;
