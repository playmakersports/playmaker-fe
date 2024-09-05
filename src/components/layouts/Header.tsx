import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useAtomValue } from "jotai";

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
  const router = useRouter();
  const { getTitle, getSubTitle, getTransparent, getSubIcons } = usePageTitle();

  const isTitleShow = getTransparent ? scrollActive > 160 : true;

  if (router.asPath === "/") {
    return (
      <Wrapper className="main-header" scrolled={scrollActive > 0}>
        <Inner>
          <Logotype className="logo" width={120} height={36} />
          <Menu>
            <Icon onClick={() => router.push("/notification")} aria-label="내 알림 전체보기">
              <Count>3</Count>
              <NoticeBellIcon />
            </Icon>
            <Icon onClick={() => router.push("/user/login")} aria-label="로그인 페이지 이동">
              <PersonIcon />
            </Icon>
          </Menu>
        </Inner>
      </Wrapper>
    );
  }
  if (getTransparent) {
    return (
      <Wrapper
        className={`page-header main-header transparent-header  ${isWhiteBg ? "white-bg-header" : ""}`}
        scrolled={isTitleShow}
      >
        <Inner>
          <Icon type="button" aria-label="뒤로가기" onClick={() => router.back()}>
            <HeaderLeftArrow />
          </Icon>
          <PageTitle scrolled={isTitleShow}>
            {getSubTitle && <p>{getSubTitle}</p>}
            <h2 className="main-title">{getTitle}</h2>
          </PageTitle>
          <RightIcons>
            <Icon type="button" onClick={() => router.push("/")} aria-label="홈화면 이동">
              <HomeIcon />
            </Icon>
            {getSubIcons.map((icon) => (
              <Icon
                key={icon.linkTo}
                type="button"
                onClick={() => router.push(icon.linkTo)}
                aria-label={icon.description}
              >
                {icon.svgIcon}
              </Icon>
            ))}
          </RightIcons>
        </Inner>
      </Wrapper>
    );
  }
  return (
    <Wrapper className={`page-header ${isWhiteBg ? "white-bg-header" : ""}`}>
      <Inner>
        <Icon type="button" aria-label="뒤로가기" onClick={() => router.back()}>
          <HeaderLeftArrow />
        </Icon>
        <PageTitle scrolled>
          {getSubTitle && <p>{getSubTitle}</p>}
          <h2 className="main-title">{getTitle}</h2>
        </PageTitle>
        <RightIcons>
          <Icon type="button" onClick={() => router.push("/")} aria-label="홈화면 이동">
            <HomeIcon />
          </Icon>
          {getSubIcons.map((icon) => (
            <Icon key={icon.linkTo} type="button" onClick={() => router.push(icon.linkTo)}>
              {icon.svgIcon}
            </Icon>
          ))}
        </RightIcons>
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
  ${TEXT_ACTIVE("var(--gray7)")};

  svg {
    width: 22px;
    height: 22px;
  }
`;

type StyledScrolled = { scrolled?: boolean };
const Wrapper = styled.header<StyledScrolled>`
  position: absolute;
  display: flex;
  justify-content: space-between;
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
    background-color: ${({ scrolled }) => (scrolled ? `rgba(var(--background-rgb), 0.45)` : "none")};
    backdrop-filter: ${({ scrolled }) => (scrolled ? `blur(16px)` : `none`)};
  }
  button > svg {
    fill: var(--gray1);
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
  color: var(--gray1);
`;

const PageTitle = styled.div<StyledScrolled>`
  visibility: ${({ scrolled }) => (scrolled ? "visible" : "hidden")};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.1px;
  h2.main-title {
    font-weight: 400;
    font-size: 1.6rem;
    transition: transform 0.3s var(--animate-pop), opacity 0.25s;
    transition-delay: 0.3s;
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
    transform: ${({ scrolled }) => (scrolled ? `translateY(0)` : `translateY(100%)`)};
    will-change: transform;
  }
  p {
    font-weight: 700;
    font-size: 1.4rem;
    font-variant-numeric: tabular-nums;
    transition: transform 0.3s, opacity 0.3s;
    transition-delay: 0.5s;
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
    transform: ${({ scrolled }) => (scrolled ? `translateY(0)` : `translateY(80%)`)};
    will-change: transform;
  }
`;
const RightIcons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
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
