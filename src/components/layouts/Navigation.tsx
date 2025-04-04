"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navigationIcon } from "./style/navigation.module.scss";
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
      <div className={navigationContainer}>
        <div className={navigationInner}>
          <Link href="/" legacyBehavior prefetch>
            <a className={`${navigationButton} ${navigationIcon}`} data-label="홈" data-active={pathname === "/"}>
              {pathname === "/" ? (
                <HomeIconFilled className={`filled ${navigationSvg} ${activeIcon}`} />
              ) : (
                <HomeIconOutlined className={`outlined ${navigationSvg}`} />
              )}
            </a>
          </Link>
          <Link href="/team" legacyBehavior prefetch>
            <a className={`${navigationButton} ${navigationIcon}`} data-label="팀" data-active={pathname === "/team"}>
              {pathname === "/team" ? (
                <PeopleIconFilled className={`filled ${navigationSvg} ${activeIcon}`} />
              ) : (
                <PeopleIconOutlined className={`outlined ${navigationSvg}`} />
              )}
            </a>
          </Link>
          <Link href="/matches" legacyBehavior prefetch>
            <a
              className={`${navigationButton} ${navigationIcon}`}
              data-label="알림"
              data-active={pathname === "/matches"}
            >
              {pathname === "/matches" ? (
                <NotificationIconFilled className={`filled ${navigationSvg} ${activeIcon}`} />
              ) : (
                <NotificationIconOutlined className={`outlined ${navigationSvg}`} />
              )}
            </a>
          </Link>
          <Link href="/feed" legacyBehavior prefetch>
            <a className={`${navigationButton} ${navigationIcon}`} data-label="피드" data-active={pathname === "/feed"}>
              {pathname === "/feed" ? (
                <MailIconFilled className={`filled ${navigationSvg} ${activeIcon}`} />
              ) : (
                <MailIconOutlined className={`outlined ${navigationSvg}`} />
              )}
            </a>
          </Link>
          <Link href="/my" legacyBehavior prefetch>
            <a
              className={`${navigationButton} ${navigationIcon}`}
              data-label="마이"
              data-active={pathname === "/my" || pathname.startsWith("/my/")}
            >
              {pathname === "/my" || pathname.startsWith("/my/") ? (
                <PersonIconFilled className={`${navigationSvg} ${activeIcon}`} />
              ) : (
                <PersonIconOutlined className={`${navigationSvg}`} />
              )}
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
