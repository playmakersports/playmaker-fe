"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

function Navigation({ hide = false }: { hide?: boolean }) {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        bottom: "-1px",
        left: 0,
        right: 0,
        width: "100%",
        minHeight: " var(--navigation-height)",
        zIndex: 900,
        transition: "transform 0.35s ease, opacity 0.3s ease",
        opacity: hide ? "0" : "1",
        transform: hide ? "translateY(100%)" : "translateY(0)",
      }}
    >
      <Container>
        <Inner
          style={{
            boxShadow: "0 0 15px 0 rgba(51, 65, 85, 0.05)",
            backgroundColor: "var(--background-light)",
          }}
        >
          <Link href="/" legacyBehavior prefetch>
            <Button data-label="홈" data-active={pathname === "/"}>
              <HomeIconOutlined className="outlined-icon" />
              <HomeIconFilled className="filled-icon" />
            </Button>
          </Link>
          <Link href="/team" legacyBehavior prefetch>
            <Button data-label="팀" data-active={pathname === "/team"}>
              <PeopleIconOutlined className="outlined-icon" />
              <PeopleIconFilled className="filled-icon" />
            </Button>
          </Link>
          <Link href="/matches" legacyBehavior prefetch>
            <Button data-label="알림" data-active={pathname === "/matches"}>
              <NotificationIconOutlined className="outlined-icon" />
              <NotificationIconFilled className="filled-icon" />
            </Button>
          </Link>
          <Link href="/feed" legacyBehavior prefetch>
            <Button data-label="피드" data-active={pathname === "/feed"}>
              <MailIconOutlined className="outlined-icon" />
              <MailIconFilled className="filled-icon" />
            </Button>
          </Link>
          <Link href="/my" legacyBehavior prefetch>
            <Button data-label="마이" data-active={["/my", "/my/team", "/my/feed"].includes(pathname)}>
              <PersonIconOutlined className="outlined-icon" />
              <PersonIconFilled className="filled-icon" />
            </Button>
          </Link>
        </Inner>
      </Container>
    </nav>
  );
}

const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.15);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.main`
  margin: 0 auto;
  max-width: var(--mobile-max-width);

  @media (max-width: 540px) {
    width: 100%;
  }
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 16px calc(var(--safe-bottom) + 10px);
  display: flex;
  justify-content: space-between;
`;

const Button = styled.a`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:active {
    & svg {
      transform: scale(0.9);
      transition: transform 0.1s ease;
    }
  }

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
