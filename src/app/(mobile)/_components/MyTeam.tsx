"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import clsx from "clsx";
import { useGet } from "@/apis/hook/query";

import { fonts } from "@/styles/fonts.css";
import { ApiSelectMember } from "@/apis/types/user";
import { FONTS, SCROLL_MASKED_GRADIENT, TEXT_ACTIVE } from "@/styles/common";
import { scrollMaskedHandler, scrollMaskedHandlerRef } from "@/util/display";
import PlusIcon from "@/assets/icon/common/Plus.svg";

function MyTeam() {
  const { data } = useGet<ApiSelectMember>("/api/test/login/selectmyprofile"); // 임시
  const myTeamList = data?.team;

  return (
    <TeamList as="article" aria-label="나의 팀 목록">
      <div className="list-wrapper">
        <div
          className="team-list"
          ref={(ref) => scrollMaskedHandlerRef(ref, "horizontal")}
          onScroll={(e) => scrollMaskedHandler(e, "horizontal")}
        >
          {myTeamList?.map((item) => (
            <Link key={item.teamId} href={`/team/${item.teamId}`} legacyBehavior>
              <TeamItem aria-label={item.teamName} role="button">
                <TeamImage
                  style={{
                    backgroundImage: `url(${item.logoUrl})`,
                  }}
                />
                <span className={clsx(fonts.caption1.medium, "team-name")}>{item.teamName}</span>
              </TeamItem>
            </Link>
          ))}
        </div>
      </div>
      <Link href="/team" legacyBehavior>
        <FindTeamButton aria-label="새로운 팀 찾기">
          <span className="circle">
            <PlusIcon />
          </span>
          <span className="text">살펴보기</span>
        </FindTeamButton>
      </Link>
    </TeamList>
  );
}

const TeamList = styled.div`
  display: flex;
  gap: 16px;
  margin: 0 -20px;
  padding: 20px 20px 18px 0;
  border-bottom: 1px solid var(--gray200);
  border-top-left-radius: 20px;
  align-items: center;
  overflow: hidden;

  div.list-wrapper {
    flex: 1;
    ${SCROLL_MASKED_GRADIENT("var(--background-light-rgb)")}
  }
  .team-list {
    padding: 0 4px 0 20px;
    display: flex;
    gap: 20px;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;
const TeamItem = styled.a`
  user-select: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--gray900);
  border-radius: 2px;
  ${TEXT_ACTIVE("var(--gray50)", { scalable: true })}

  span.team-name {
    width: 44px;
    color: var(--gray700);
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    overflow: hidden;
  }
`;

const TeamImage = styled.div`
  display: block;
  width: 44px;
  height: 44px;
  border: 1px solid var(--gray200);
  background-size: 48px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
`;

const FindTeamButton = styled.a`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span.circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px dashed var(--gray300);
    svg {
      width: 24px;
      height: 24px;
      fill: var(--gray400);
    }
  }
  span.text {
    ${FONTS.caption1("medium")};
    color: var(--gray400);
    text-align: center;
  }
`;

export default MyTeam;
