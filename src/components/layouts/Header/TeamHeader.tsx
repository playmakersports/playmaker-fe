"use client";
import React, { useState } from "react";
import { useAtomValue } from "jotai";
import { usePathname, useParams, useRouter } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import styled from "styled-components";

import { flexAlignCenter, flexRowGap10, flexRowGap12 } from "@/styles/container.css";
import { headerTeamTag, headerTitleTransitionShow } from "./header.css";

import { atomHeaderTransparent, atomPageTitle } from "@/atom/common";
import { RoutedHeaderContainer } from "@/components/layouts/Header/RoutedHeader";
import Badge from "@/components/common/Badge";
import DropdownAction from "@/components/common/input/DropdownAction";
import HeaderMainDropdown from "@/app/(mobile)/team/_components/HeaderMainDropdown";
import TeamHeart from "@/app/(mobile)/team/[teamId]/_components/TeamHeart";

import SearchIcon from "@/assets/icon/common/Search.svg";

type Props = {
  scrollY: number;
};
function TeamHeader({ scrollY }: Props) {
  const pathname = usePathname();
  const teamId = useParams()["teamId"];
  const router = useRouter();
  const title = useAtomValue(atomPageTitle);
  const bgTransparent = useAtomValue(atomHeaderTransparent);
  const DEFAULT_SCROLLED_Y = 160;
  const canTransparent = typeof bgTransparent === "boolean" ? bgTransparent : bgTransparent.inactive;
  const isScrolled = scrollY > (typeof bgTransparent !== "boolean" ? bgTransparent.inactive : DEFAULT_SCROLLED_Y);

  const [showList, setShowList] = useState(false);

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
      <RoutedHeaderContainer
        data-never={!canTransparent}
        data-scrolled={isScrolled}
        style={showList ? { overflow: "hidden" } : {}}
      >
        <div className={clsx(flexRowGap12, flexAlignCenter)} style={{ flex: 1 }}>
          {title !== "팀 살펴보기" && (
            <span className={headerTeamTag} data-show={!showList} data-divider={!!title}>
              팀
            </span>
          )}
          <div className={headerTitleTransitionShow} data-show={!!title}>
            <HeaderMainDropdown
              title={title}
              showList={showList}
              setShowList={setShowList}
              list={[
                { name: "팀 이름1", action: () => {} },
                { name: "팀 이름2", action: () => {} },
                { name: "팀 이름3", action: () => {} },
              ]}
            />
          </div>
        </div>
        {pathname !== "/team/find" && !!title && (
          <RightSection>
            <div className={clsx("action-menu", { hide: showList })}>
              <div className={flexRowGap10}>
                <TeamHeart teamId={`${teamId}`} />
                <DropdownAction
                  icon
                  options={[
                    {
                      name: "팀 관리",
                      action: () => {
                        router.push(`/team/${teamId}/admin`);
                      },
                    },
                    { name: "팀 탈퇴", action: () => {} },
                  ]}
                />
              </div>
            </div>

            <div className={clsx("action-menu", { hide: !showList })}>
              <Link href="/team/find" onClick={() => setShowList(false)}>
                <Badge type="gray" fillType="light" size="large" icon={<SearchIcon />}>
                  팀 살펴보기
                </Badge>
              </Link>
            </div>
          </RightSection>
        )}
      </RoutedHeaderContainer>
    </header>
  );
}

const RightSection = styled.div`
  display: grid;
  align-items: center;
  justify-items: flex-end;
  grid-template-areas: "overlap";

  div.action-menu {
    user-select: none;
    grid-area: overlap;
    transition: transform 0.25s ease-in-out, opacity 0.2s ease-in-out;
    &.hide {
      will-change: transform;
      transform: translate3d(180%, 0, 0);
      opacity: 0;
    }
  }
`;

export default TeamHeader;
