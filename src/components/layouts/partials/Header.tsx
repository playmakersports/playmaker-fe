import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useAtomValue } from "jotai";
import Link from "next/link";

import HeaderLNB from "./HeaderLNB";
import { BUTTON_ACTIVE } from "@/styles/common";
import { atomBgWhite } from "@/atom/common";
import { usePageTitle } from "@/hook/usePageTitle";

import Logotype from "@/assets/logo/Logotype.svg";
import NoticeBellIcon from "@/assets/icon/global/NoticeBell.svg";
import PersonIcon from "@/assets/icon/global/Person.svg";
import MenuIcon from "@/assets/icon/global/Menu.svg";
import HeaderLeftArrow from "@/assets/icon/arrow/HeaderLeftArrow.svg";

type Props = { scrollActive: number };
function Header({ scrollActive }: Props) {
  const isWhiteBg = useAtomValue(atomBgWhite);
  const handleLnbState = useState(false);
  const [showLnb, setShowLnb] = handleLnbState;

  const ICON_SIZE = 22;
  const router = useRouter();
  const { getTitle, getTransparent } = usePageTitle();

  if (router.asPath === "/") {
    return (
      <Wrapper className="main-header" scrolled={scrollActive > 0}>
        <Inner>
          <Logotype className="logo" width={120} height={36} />
          <Menu>
            <Icon onClick={() => router.push("/notification")}>
              <Count>3</Count>
              <NoticeBellIcon width={ICON_SIZE} height={ICON_SIZE} />
            </Icon>
            <Link href="/user/login">
              <Icon>
                <PersonIcon width={ICON_SIZE} height={ICON_SIZE} />
              </Icon>
            </Link>
          </Menu>
        </Inner>
      </Wrapper>
    );
  }
  return (
    <Wrapper
      className={`page-header ${isWhiteBg ? "white-bg-header" : ""} ${
        getTransparent ? "transparent-header main-header" : ""
      }`}
      scrolled={scrollActive > 130}
    >
      <Inner>
        <Icon type="button" aria-label="뒤로가기" onClick={() => router.back()}>
          <HeaderLeftArrow width={ICON_SIZE} height={ICON_SIZE} />
        </Icon>
        <PageTitle>{getTitle}</PageTitle>
        <Icon
          className={showLnb ? "active-menu" : ""}
          type="button"
          aria-label="메뉴 보기"
          onClick={() => setShowLnb((prev) => !prev)}
        >
          <MenuIcon width={ICON_SIZE} height={ICON_SIZE} />
        </Icon>
      </Inner>
      {showLnb && <HeaderLNB handleLnbState={handleLnbState} />}
    </Wrapper>
  );
}

const Icon = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  ${BUTTON_ACTIVE("transparent")};
`;

const Wrapper = styled.header<{ scrolled: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  top: 0;
  padding: env(safe-area-inset-top) 16px;
  padding: constant(safe-area-inset-top) 16px;
  height: var(--header-height);
  z-index: 999;
  transition: background-color 0.3s, backdrop-filter 0.3s, transform 0.2s;

  &.page-header {
    background-color: var(--background);
  }
  &.white-bg-header {
    background-color: var(--background-light);
  }
  &.transparent-header {
    background: transparent;
    ${Icon} {
      ${({ scrolled }) =>
        !scrolled &&
        `svg {
          fill: #fff;
          filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.35));
        }
      `}
    }
  }
  &.main-header {
    background-color: ${({ scrolled }) => (scrolled ? `rgba(var(--background-rgb), 0.7)` : "none")};
    backdrop-filter: ${({ scrolled }) => (scrolled ? `blur(16px)` : `none`)};
  }
  button > svg,
  .logo {
    fill: ${({ theme }) => theme.gray1};
  }

  button.active-menu {
    z-index: 1001;
    transform: scale(0.9);

    svg {
      fill: ${({ theme }) => theme.text};
    }
  }
`;
const Inner = styled.div`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-top: env(safe-area-inset-top);
  padding-top: constant(safe-area-inset-top);
`;

const Menu = styled.div`
  display: flex;
  gap: 10px;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.gray1};
`;
const PageTitle = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Count = styled.div`
  position: absolute;
  padding: 2px 4px;
  left: 50%;
  top: -2px;
  background-color: ${({ theme }) => theme.sub1};
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: 700;
  border-radius: 9px;
  min-width: 18px;
  text-align: center;
`;

export default Header;
