import React from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import {
  headerButtonDarkBgIconWrapper,
  headerButtonIcon,
  headerButtonIconWrapper,
  headerContainer,
  headerInnerContainer,
  headerMainContainer,
  headerMainLogoContainer,
  headerMainScrolledContainer,
} from "./header.css";

import LogoSymbol from "@/assets/logo/LogoSymbol.svg";
import LogoSymbolGreen from "@/assets/logo/LogoSymbolGreen.svg";
import LogoTextType from "@/assets/logo/LogoTextType.svg";

import NoticeBellIcon from "@/assets/icon/common/filled/Notification.svg";
import NoticeBellActiveIcon from "@/assets/icon/common/filled/NotificationUnread.svg";
import PersonIcon from "@/assets/icon/common/filled/Person.svg";

type Props = { scrollY: number };
function MainHeader({ scrollY }: Props) {
  const router = useRouter();
  const isScrolled = scrollY > 160;

  return (
    <header className={clsx(headerContainer, headerMainContainer, isScrolled && headerMainScrolledContainer)}>
      <div className={headerInnerContainer}>
        <div className={headerMainLogoContainer}>
          {isScrolled ? <LogoSymbolGreen width={40} height={28} /> : <LogoSymbol width={40} height={28} />}
          <LogoTextType width={132} height={20} fill={isScrolled ? "var(--gray700)" : "var(--gray100)"} />
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            type="button"
            className={clsx(headerButtonIconWrapper, !isScrolled && headerButtonDarkBgIconWrapper)}
            onClick={() => router.push("/notification")}
            aria-label="내 알림 전체보기"
          >
            <NoticeBellIcon className={headerButtonIcon} fill={isScrolled ? "var(--gray700)" : "var(--gray100)"} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
