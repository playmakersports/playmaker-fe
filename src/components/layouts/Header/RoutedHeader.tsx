"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";

import { fonts } from "@/styles/fonts.css";
import {
  atomHeaderActions,
  atomHeaderOnClickBack,
  atomHeaderCustomArea,
  atomHeaderIcons,
  atomHeaderTransparent,
  atomPageTitle,
  atomHeaderOptions,
} from "@/atom/common";
import DropdownAction from "@/components/common/input/DropdownAction";

import LeftDirectionArrow from "@/assets/icon/arrow/LeftDirection.svg";
import { headerSingleSubActionButton } from "./header.css";

type Props = { scrollY: number };
function RoutedHeader({ scrollY }: Props) {
  const router = useRouter();

  const title = useAtomValue(atomPageTitle);
  const onClickBackCustom = useAtomValue(atomHeaderOnClickBack);
  const customArea = useAtomValue(atomHeaderCustomArea);
  const icons = useAtomValue(atomHeaderIcons);
  const actions = useAtomValue(atomHeaderActions);
  const bgTransparent = useAtomValue(atomHeaderTransparent);
  const headerOptions = useAtomValue(atomHeaderOptions);
  const canTransparent = typeof bgTransparent === "boolean" ? bgTransparent : bgTransparent.inactive;
  const DEFAULT_SCROLLED_Y = 160;
  const isScrolled = scrollY > (typeof bgTransparent !== "boolean" ? bgTransparent.inactive : DEFAULT_SCROLLED_Y);

  const onClickBack = () => {
    if (onClickBackCustom) {
      onClickBackCustom();
      return;
    }
    router.back();
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 900,
      }}
    >
      <RoutedHeaderContainer data-never={!canTransparent} data-scrolled={isScrolled}>
        {customArea ? (
          <div style={{ flex: 1 }}>{customArea}</div>
        ) : (
          <>
            {headerOptions?.hideBackButton ? (
              <div style={{ width: "24px", height: "24px" }}></div>
            ) : (
              <button type="button" onClick={onClickBack} id="backButton" style={{ width: "24px", height: "24px" }}>
                <LeftDirectionArrow width="100%" height="100%" />
              </button>
            )}
            <Title
              className={fonts.body2.semibold}
              data-never={!canTransparent}
              data-fadein={canTransparent && isScrolled}
              style={{
                flex: 1,
                textAlign: headerOptions?.titleAlign || "left",
              }}
            >
              {title}
            </Title>
          </>
        )}
        {icons.length === 0 && ((Array.isArray(actions) && actions.length === 0) || !actions) && (
          <div style={{ width: "24px", height: "24px" }}></div>
        )}
        {icons.length > 0 && (
          <Subs>
            {icons.map((icon, index) => (
              <SubIcons key={index} where={icon.onClick}>
                {icon.svgIcon}
              </SubIcons>
            ))}
          </Subs>
        )}
        {actions &&
          (Array.isArray(actions) ? (
            actions.length > 0 && <DropdownAction icon options={actions} />
          ) : (
            <button type="button" onClick={actions.action} className={headerSingleSubActionButton}>
              {actions.name}
            </button>
          ))}
      </RoutedHeaderContainer>
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
export const RoutedHeaderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: var(--mobile-max-width);
  min-height: var(--safe-area-top);
  border-bottom: 1px solid transparent;
  align-items: center;
  gap: 10px;
  top: 0;
  left: 0;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: env(safe-area-inset-top);

  &[data-never="true"] {
    background-color: var(--background-light);
    &[data-scrolled="true"] {
      border-color: var(--gray200);
    }
    svg {
      fill: var(--gray700);
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
  li > button,
  li > a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: var(--gray700);
  }
`;

export default RoutedHeader;
