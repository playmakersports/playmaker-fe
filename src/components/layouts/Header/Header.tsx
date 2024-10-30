import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useAtomValue } from "jotai";

import { atomBgWhite } from "@/atom/common";
import { usePageTitle } from "@/hook/usePageTitle";

import { HeaderInner, HeaderWrapper, HeaderIcon } from ".";
import HeaderLeftArrow from "@/assets/icon/arrow/HeaderLeftArrow.svg";

type Props = { scrollActive: number };
function Header({ scrollActive }: Props) {
  const isWhiteBg = useAtomValue(atomBgWhite);
  const router = useRouter();
  const { getTitle, getSubTitle, getTransparent, getSubIcons } = usePageTitle();

  const isTitleShow = getTransparent ? scrollActive > 160 : true;

  if (router.asPath === "/") {
    return null;
  }
  if (getTransparent) {
    return (
      <TransparentWrapper bgWhite={isWhiteBg} scrolled={isTitleShow}>
        <HeaderInner>
          <Icon type="button" aria-label="뒤로가기" onClick={() => router.back()}>
            <HeaderLeftArrow />
          </Icon>
          <PageTitle scrolled={isTitleShow}>
            {getSubTitle && <p>{getSubTitle}</p>}
            <h2 className="main-title">{getTitle}</h2>
          </PageTitle>
          <RightIcons>
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
        </HeaderInner>
      </TransparentWrapper>
    );
  }
  return (
    <Wrapper bgWhite={isWhiteBg}>
      <HeaderInner>
        <Icon type="button" aria-label="뒤로가기" onClick={() => router.back()}>
          <HeaderLeftArrow />
        </Icon>
        <PageTitle scrolled>
          {getSubTitle && <p>{getSubTitle}</p>}
          <h2 className="main-title">{getTitle}</h2>
        </PageTitle>
        <RightIcons>
          {getSubIcons.map((icon) => (
            <Icon key={icon.linkTo} type="button" onClick={() => router.push(icon.linkTo)}>
              {icon.svgIcon}
            </Icon>
          ))}
        </RightIcons>
      </HeaderInner>
    </Wrapper>
  );
}

type StyledScrolled = { scrolled?: boolean };
type WrapperStyledType = { bgWhite: boolean };
const Icon = styled(HeaderIcon)`
  svg {
    fill: var(--gray600);
  }
`;
const Wrapper = styled(HeaderWrapper)<StyledScrolled & WrapperStyledType>`
  background-color: ${({ bgWhite }) => (bgWhite ? "var(--background-light)" : "var(--background)")};
`;

const TransparentWrapper = styled(HeaderWrapper)<StyledScrolled & WrapperStyledType>`
  background-color: ${({ scrolled, bgWhite }) =>
    !scrolled ? "transparent" : bgWhite ? "var(--background-light)" : "var(--background)"};

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
          fill: var(--gray600)
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
