"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useAtomValue } from "jotai";

import { FONTS, getFontsJSON } from "@/styles/common";
import { atomHeaderActions, atomHeaderIcons, atomHeaderTransparent, atomPageTitle } from "@/atom/common";
import DropdownAction from "@/components/common/input/DropdownAction";

import LeftArrow from "@/assets/icon/arrow/LeftArrow.svg";

type Props = { scrollY: number };
function RoutedHeader({ scrollY }: Props) {
  const title = useAtomValue(atomPageTitle);
  const icons = useAtomValue(atomHeaderIcons);
  const actions = useAtomValue(atomHeaderActions);
  const bgTransparent = useAtomValue(atomHeaderTransparent);

  const onClickBack = () => {};

  return (
    <Header style={{ height: "var(--header-height)" }}>
      <button type="button" onClick={onClickBack} id="backButton" style={{ width: "24px", height: "24px" }}>
        <LeftArrow width="100%" height="100%" />
      </button>
      <span style={{ ...getFontsJSON(FONTS.body3("semibold")), color: "var(--gray700)", flex: 1 }}>{title}</span>
      <Subs>
        {icons.map((icon, index) => (
          <SubIcons key={index} where={icon.onClick}>
            {icon.svgIcon}
          </SubIcons>
        ))}
      </Subs>
      {actions.length > 0 && <DropdownAction icon options={actions} />}
    </Header>
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
const Header = styled.header`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  top: 0;
  left: 0;
  padding: 0 20px;
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
