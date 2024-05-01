import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";

import { usePageTitle } from "@/hook/usePageTitle";
import Logotype from "@/assets/logo/Logotype.svg";
import NoticeBellIcon from "@/assets/icon/global/NoticeBell.svg";
import PersonIcon from "@/assets/icon/global/Person.svg";
import LeftArrow from "@/assets/icon/arrow/LeftArrow.svg";

type Props = { scrollActive: boolean };
function Header({ scrollActive }: Props) {
  const ICON_SIZE = 22;
  const router = useRouter();
  const title = usePageTitle();

  if (router.asPath === "/") {
    return (
      <Wrapper scrolled={scrollActive}>
        <Inner>
          <Logotype width={120} height={36} />
          <Menu>
            <Icon>
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
    <Wrapper scrolled={scrollActive}>
      <Inner>
        <button type="button" aria-label="뒤로가기" onClick={() => router.back()}>
          <LeftArrow width={ICON_SIZE + 8} height={ICON_SIZE + 8} />
        </button>
        <PageTitle>{title}</PageTitle>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.header<{ scrolled: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  top: 0;
  padding: env(safe-area-inset-top) 20px;
  padding: constant(safe-area-inset-top) 20px;
  height: var(--header-height);
  background-color: ${({ scrolled, theme }) => (scrolled ? `rgba(${theme.baseBackgroundRgb}, 0.2)` : "none")};
  backdrop-filter: ${({ scrolled }) => (scrolled ? `blur(16px)` : `none`)};
  z-index: 999;
  transition: background-color 0.3s, backdrop-filter 0.3s;
  svg {
    fill: ${({ theme }) => theme.gray2};
  }
`;
const Inner = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
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
  color: ${({ theme }) => theme.gray1};
`;
const Icon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
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
