"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";

import { FONTS, getFontsJSON } from "@/styles/common";
import {
  atomHeaderActions,
  atomHeaderCustomArea,
  atomHeaderIcons,
  atomHeaderTransparent,
  atomPageTitle,
} from "@/atom/common";
import DropdownAction from "@/components/common/input/DropdownAction";

import LeftArrow from "@/assets/icon/arrow/LeftArrow.svg";

type Props = { scrollY: number };
function RoutedHeader({ scrollY }: Props) {
  const router = useRouter();

  const title = useAtomValue(atomPageTitle);
  const customArea = useAtomValue(atomHeaderCustomArea);
  const icons = useAtomValue(atomHeaderIcons);
  const actions = useAtomValue(atomHeaderActions);
  const bgTransparent = useAtomValue(atomHeaderTransparent);
  const canTransparent = typeof bgTransparent === "boolean" ? bgTransparent : bgTransparent.inactive;
  const DEFAULT_SCROLLED_Y = 160;
  const isScrolled = scrollY > (typeof bgTransparent !== "boolean" ? bgTransparent.inactive : DEFAULT_SCROLLED_Y);

  const onClickBack = () => {
    router.back();
  };

  return (
    <header style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
      <Container style={{ height: "var(--header-height)" }} data-never={!canTransparent} data-scrolled={isScrolled}>
        {customArea ? (
          <div style={{ flex: 1 }}>{customArea}</div>
        ) : (
          <>
            <button type="button" onClick={onClickBack} id="backButton" style={{ width: "24px", height: "24px" }}>
              <LeftArrow width="100%" height="100%" />
            </button>
            <Title
              data-never={!canTransparent}
              data-fadein={canTransparent && isScrolled}
              style={{ ...getFontsJSON(FONTS.body3("semibold")), flex: 1 }}
            >
              {title}
            </Title>
          </>
        )}
        <Subs>
          {icons.map((icon, index) => (
            <SubIcons key={index} where={icon.onClick}>
              {icon.svgIcon}
            </SubIcons>
          ))}
        </Subs>
        {actions.length > 0 && <DropdownAction icon options={actions} />}
      </Container>
    </header>
  );
}
function SubIcons({ children, where }: { children: React.ReactNode; where: (() => void) | string }) {
  if (typeof where === "string") {
    return (
      <li>
        <Link href={where} legacyBehavior>
          <a>{children}</a>
        </Link>
      </li>
    );
  } else {
    return (
      <li>
        <button type="button" onClick={where}>
          {children}
        </button>
      </li>
    );
  }
}

const Title = styled.span`
  color: var(--gray700);
  transition: transform 0.2s ease-in-out, opacity 0.2s;

  &[data-never="false"] {
    &[data-fadein="true"] {
      opacity: 1;
      transform: translateY(0);
    }
    &[data-fadein="false"] {
      opacity: 0;
      transform: translateY(-12px);
    }
  }
`;
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: var(--mobile-max-width);
  border-bottom: 1px solid transparent;
  align-items: center;
  gap: 10px;
  top: 0;
  left: 0;
  padding: 0 20px;

  &[data-never="true"] {
    background-color: var(--background-light);
    &[data-scrolled="true"] {
      border-color: var(--gray200);
    }
  }
  &[data-never="false"] {
    &[data-scrolled="false"] {
      background-color: transparent;
      svg {
        fill: var(--white);
      }
      ${Title} {
        color: var(--white);
      }
    }

    &[data-scrolled="true"] {
      background-color: var(--background-light);
      border-color: var(--gray200);
    }
  }
`;

const Subs = styled.ul`
  display: flex;
  gap: 10px;
  li {
    width: 24px;
    height: 24px;
    & a > svg {
      width: 100%;
      height: 100%;
      fill: var(--gray700);
    }
  }
`;

export default RoutedHeader;
