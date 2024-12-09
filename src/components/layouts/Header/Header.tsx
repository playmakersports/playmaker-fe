import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useAtomValue } from "jotai";
import { usePageTitle } from "@/hook/usePageTitle";

import { atomBgWhite } from "@/atom/common";
import { HeaderInner, HeaderWrapper, HeaderIcon } from ".";
import MainHeader from "./MainHeader";

import HeaderLeftArrow from "@/assets/icon/arrow/LeftArrowThin.svg";

type Props = { scrollActive: number };
function Header({ scrollActive }: Props) {
  const isWhiteBg = useAtomValue(atomBgWhite);
  const router = useRouter();
  const { titleValue, subTitleValue, isTransparent, scrollBgColorValue, subIconsValue, scrolledShadowValue } =
    usePageTitle();

  const isScrolled = scrollActive > (scrollBgColorValue ? scrollBgColorValue.trigger : 160);
  const isTitleShow = isTransparent ? isScrolled : true;

  if (router.asPath === "/") {
    return <MainHeader />;
  }
  if (isTransparent) {
    return (
      <TransparentWrapper bgWhite={isWhiteBg} scrolled={isTitleShow} scrolledShadow={scrolledShadowValue}>
        <HeaderInner>
          <Icon type="button" aria-label="뒤로가기" onClick={() => router.back()}>
            <HeaderLeftArrow />
          </Icon>
          <PageTitle scrolled={isTitleShow}>
            {subTitleValue && <p>{subTitleValue}</p>}
            <h2 className="main-title">{titleValue}</h2>
          </PageTitle>
          <RightIcons>
            {subIconsValue.map((icon) => (
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
        </HeaderInner>
      </TransparentWrapper>
    );
  }
  return (
    <Wrapper
      bgWhite={isWhiteBg}
      bgColor={scrollBgColorValue && [scrollBgColorValue.beforeBg, scrollBgColorValue.afterBg]}
      scrolled={isScrolled}
      scrolledShadow={scrolledShadowValue}
    >
      <HeaderInner>
        <Icon type="button" aria-label="뒤로가기" onClick={() => router.back()}>
          <HeaderLeftArrow />
        </Icon>
        <PageTitle scrolled>
          {subTitleValue && <p>{subTitleValue}</p>}
          <h2 className="main-title">{titleValue}</h2>
        </PageTitle>
        <RightIcons>
          {subIconsValue.map((icon) => (
            <Icon key={icon.linkTo} type="button" onClick={() => router.push(icon.linkTo)}>
              {icon.svgIcon}
            </Icon>
          ))}
        </RightIcons>
      </HeaderInner>
    </Wrapper>
  );
}

type StyledScrolled = { scrolled?: boolean; scrolledShadow?: boolean };
type WrapperStyledType = { bgWhite: boolean; bgColor?: [string, string] | null };
const Icon = styled(HeaderIcon)`
  svg {
    fill: var(--gray700);
  }
`;
const Wrapper = styled(HeaderWrapper)<StyledScrolled & WrapperStyledType>`
  background-color: ${({ scrolled, bgColor, bgWhite }) => {
    if (bgColor) {
      return scrolled ? bgColor[1] : bgColor[0];
    }
    return bgWhite ? "var(--background-light)" : "var(--background)";
  }};
  box-shadow: ${({ scrolledShadow, scrolled }) =>
    scrolled && scrolledShadow ? "0 4px 10px 2px rgba(0, 0, 0, 0.1)" : "none"};
  transition: box-shadow 0.25s;
`;

const TransparentWrapper = styled(HeaderWrapper)<StyledScrolled & WrapperStyledType>`
  background-color: ${({ scrolled, bgWhite }) =>
    !scrolled ? "transparent" : bgWhite ? "var(--background-light)" : "var(--background)"};
  box-shadow: ${({ scrolledShadow, scrolled }) =>
    scrolled && scrolledShadow ? "0 4px 10px 2px rgba(0, 0, 0, 0.1)" : "none"};
  transition: box-shadow 0.25s;

  ${Icon} {
    ${({ scrolled }) =>
      !scrolled
        ? `svg {
          transition: all 0.25s;
          fill: #fff;
          filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.35));
        }
      `
        : `
        svg {
          fill: var(--gray700)
        }
      `}
  }
`;

const PageTitle = styled.div<StyledScrolled>`
  visibility: ${({ scrolled }) => (scrolled ? "visible" : "hidden")};
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  will-change: transform;
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
    transform: ${({ scrolled }) => (scrolled ? `translate3d(0,0,0)` : `translate3d(0,80%,0)`)};
    will-change: transform;
  }
`;
const RightIcons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default Header;
