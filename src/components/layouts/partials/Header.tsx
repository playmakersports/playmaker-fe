import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useAtomValue } from "jotai";
import Link from "next/link";

import { TEXT_ACTIVE } from "@/styles/common";
import { atomBgWhite } from "@/atom/common";
import { usePageTitle } from "@/hook/usePageTitle";

import Logotype from "@/assets/logo/Logotype.svg";
import NoticeBellIcon from "@/assets/icon/global/NoticeBell.svg";
import PersonIcon from "@/assets/icon/global/Person.svg";
import HomeIcon from "@/assets/icon/global/Home.svg";
import HeaderLeftArrow from "@/assets/icon/arrow/HeaderLeftArrow.svg";

type Props = { scrollActive: number };
function Header({ scrollActive }: Props) {
  const isWhiteBg = useAtomValue(atomBgWhite);

  const ICON_SIZE = 22;
  const router = useRouter();
  const { getTitle, getSubTitle, getTransparent } = usePageTitle();

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
        <PageTitle>
          {getSubTitle && <p>{getSubTitle}</p>}
          {getTitle}
        </PageTitle>
        <Icon type="button" onClick={() => router.push("/")}>
          <HomeIcon width={ICON_SIZE} height={ICON_SIZE} />
        </Icon>
      </Inner>
    </Wrapper>
  );
}

const Icon = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-10);
  ${TEXT_ACTIVE("var(--gray6)")};
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
  button > svg {
    fill: ${({ theme }) => theme.gray1};
  }
  .logo {
    width: 148px;
    fill: var(--gray1);
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
  gap: 12px;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.gray1};
`;
const PageTitle = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  font-weight: 400;
  font-size: 1.6rem;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.1px;
  p {
    font-weight: 700;
    font-size: 1.4rem;
    font-variant-numeric: tabular-nums;
  }
`;

const Count = styled.div`
  position: absolute;
  padding: 2px 4px;
  left: 50%;
  top: -2px;
  background-color: var(--point);
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: 700;
  border-radius: 9px;
  min-width: 18px;
  text-align: center;
`;

export default Header;
