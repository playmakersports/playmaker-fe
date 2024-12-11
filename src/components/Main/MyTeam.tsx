"use client";

import React from "react";
import styled from "@emotion/styled";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { MY_TEAM_MOCK } from "@/constants/mock/HOME";
import { SCROLL_MASKED_GRADIENT, TEXT_ACTIVE } from "@/styles/common";
import { scrollMaskedHandler, scrollMaskedHandlerRef } from "@/util/display";
import { BasicWhiteCard } from "../common/Card";
import PlusIcon from "@/assets/icon/global/Plus.svg";

function MyTeam() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <TeamList as="article" aria-label="나의 팀 목록">
      <ul
        className="team-list"
        ref={(ref) => scrollMaskedHandlerRef(ref, "horizontal")}
        onScroll={(e) => scrollMaskedHandler(e, "horizontal")}
      >
        {MY_TEAM_MOCK.map((item) => (
          <TeamItem
            key={item.teamName}
            aria-label={item.teamName}
            role="button"
            onClick={() => router.push(`/team/${item.teamId}`)}
          >
            <TeamImage src={item.logoImg} />
            <p>{item.teamName}</p>
          </TeamItem>
        ))}
        <TeamItem aria-label="새로운 팀 찾기">
          <More>
            <PlusIcon width={28} height={28} />
          </More>
          <p>추가</p>
        </TeamItem>
      </ul>
    </TeamList>
  );
}

const TeamList = styled(BasicWhiteCard)`
  padding: 0;
  ${SCROLL_MASKED_GRADIENT("var(--background-light-rgb)")}

  .team-list {
    display: flex;
    justify-content: space-around;
    gap: 12px;
    padding: 12px 16px;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;
const TeamItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--gray900);
  border-radius: 2px;
  ${TEXT_ACTIVE("var(--gray300)", { scalable: true })}

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

const TeamImage = styled.div<{ src: string }>`
  display: block;
  margin: 0 8px;
  width: 50px;
  height: 50px;
  background-color: #fff;
  background-image: url(${({ src }) => src});
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid var(--gray300);
  border-radius: 100%;
`;

const More = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  width: 50px;
  height: 50px;
  border: 1px dashed var(--gray200);
  border-radius: 100%;
  & + p {
    color: var(--gray700);
  }
  svg {
    fill: var(--gray500);
  }
`;

export default MyTeam;
