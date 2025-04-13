"use client";
import React from "react";
import { useAtomValue } from "jotai";
import { usePathname } from "next/navigation";
import styled from "styled-components";

import { atomHeaderTransparent, atomPageTitle } from "@/atom/common";
import { RoutedHeaderContainer } from "@/components/layouts/Header/RoutedHeader";
import DropdownAction from "@/components/common/input/DropdownAction";
import HeaderTeamMover from "@/app/(mobile)/team/_components/HeaderTeamMover";

type Props = {
  scrollY: number;
};
function TeamHeader({ scrollY }: Props) {
  const pathname = usePathname();
  const title = useAtomValue(atomPageTitle);
  const bgTransparent = useAtomValue(atomHeaderTransparent);
  const DEFAULT_SCROLLED_Y = 160;
  const canTransparent = typeof bgTransparent === "boolean" ? bgTransparent : bgTransparent.inactive;
  const isScrolled = scrollY > (typeof bgTransparent !== "boolean" ? bgTransparent.inactive : DEFAULT_SCROLLED_Y);

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
        <div style={{ flex: 1 }}>
          <HeaderTeamMover title={title} />
        </div>
        {pathname !== "/team/find" && (
          <DropdownAction
            icon
            options={[
              { name: "팀 관리", action: () => {} },
              { name: "팀 탈퇴", action: () => {} },
            ]}
          />
        )}
      </RoutedHeaderContainer>
    </header>
  );
}

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

export default TeamHeader;
