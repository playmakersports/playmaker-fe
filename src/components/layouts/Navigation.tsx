"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import {
  activeIcon,
  navigationButton,
  navigationContainer,
  navigationInner,
  navigationSvg,
} from "./style/navigation.css";

// Filled
import HomeIconFilled from "@/assets/icon/common/filled/Home.svg";
import PeopleIconFilled from "@/assets/icon/common/filled/People.svg";
import TrophyFilled from "@/assets/icon/sports/filled/Trophy.svg";
import NotificationIconFilled from "@/assets/icon/common/filled/Notification.svg";
import PersonIconFilled from "@/assets/icon/common/filled/Person.svg";
// Outlined
import HomeIconOutlined from "@/assets/icon/common/outlined/Home.svg";
import PeopleIconOutlined from "@/assets/icon/common/outlined/People.svg";
import TrophyOutlined from "@/assets/icon/sports/outlined/Trophy.svg";
import NotificationIconOutlined from "@/assets/icon/common/outlined/Notification.svg";
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
      <div className={navigationContainer}>
        <div className={navigationInner}>
          <Link href="/home" legacyBehavior prefetch>
            <a className={navigationButton} data-label="홈" data-active={pathname === "/home"}>
              {pathname === "/home" ? (
                <HomeIconFilled className={clsx(navigationSvg, activeIcon)} />
              ) : (
                <HomeIconOutlined className={navigationSvg} />
              )}
            </a>
          </Link>
          <Link href="/team" legacyBehavior prefetch>
            <a
              className={navigationButton}
              data-label="팀"
              data-active={pathname === "/team" || pathname === "/team/find" || pathname.startsWith("/team/")}
            >
              {pathname === "/team" || pathname === "/team/find" || pathname.startsWith("/team/") ? (
                <PeopleIconFilled className={clsx(navigationSvg, activeIcon)} />
              ) : (
                <PeopleIconOutlined className={navigationSvg} />
              )}
            </a>
          </Link>
          <Link href="/match" legacyBehavior prefetch>
            <a
              className={navigationButton}
              data-label="경기"
              data-active={pathname === "/match" || pathname.startsWith("/match/")}
            >
              {pathname === "/match" || pathname.startsWith("/match/") ? (
                <TrophyFilled className={clsx(navigationSvg, activeIcon)} />
              ) : (
                <TrophyOutlined className={navigationSvg} />
              )}
            </a>
          </Link>
          <Link href="/notification" legacyBehavior prefetch>
            <a className={navigationButton} data-label="알림" data-active={pathname === "/notification"}>
              {pathname === "/notification" ? (
                <NotificationIconFilled className={clsx(navigationSvg, activeIcon)} />
              ) : (
                <NotificationIconOutlined className={navigationSvg} />
              )}
            </a>
          </Link>
          <Link href="/my" legacyBehavior prefetch>
            <a
              className={navigationButton}
              data-label="마이"
              data-active={pathname === "/my" || pathname.startsWith("/my/")}
            >
              {pathname === "/my" || pathname.startsWith("/my/") ? (
                <PersonIconFilled className={clsx(navigationSvg, activeIcon)} />
              ) : (
                <PersonIconOutlined className={navigationSvg} />
              )}
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
