"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import clsx from "clsx";
import { useProfileGet } from "@/apis/hook/user";

import { fonts } from "@/styles/fonts.css";
import { FONTS, SCROLL_MASKED_GRADIENT, TEXT_ACTIVE } from "@/styles/common";
import { scrollMaskedHandler, scrollMaskedHandlerRef } from "@/util/display";
import PlusIcon from "@/assets/icon/common/Plus.svg";
import { ApiHomeResponse } from "@/apis/types/code";

function MyTeam({ data }: { data: ApiHomeResponse["teams"] }) {
  return (
    <TeamList as="article" aria-label="나의 팀 목록">
      <div className="list-wrapper">
        <div
          className="team-list"
          ref={(ref) => scrollMaskedHandlerRef(ref, "horizontal")}
          onScroll={(e) => scrollMaskedHandler(e, "horizontal")}
        >
          {data?.map((item) => (
            <Link key={item.teamId} href={`/team/${item.teamId}`} legacyBehavior>
              <TeamItem aria-label={item.teamName} role="button">
                <TeamImage
                  style={{
                    backgroundImage: `url(${item.teamLogo})`,
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
  gap: 12px;
  margin: 0 -16px;
  padding: 0 16px 0 0;
  border-bottom: 1px solid var(--gray200);
  border-top-left-radius: 20px;
  align-items: center;
  overflow: hidden;

  div.list-wrapper {
    flex: 1;
    ${SCROLL_MASKED_GRADIENT("var(--background-light-rgb)")}
  }
  .team-list {
    padding: 20px 4px 18px 20px;
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
  width: 52px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--gray900);
  border-radius: 2px;
  ${TEXT_ACTIVE("var(--gray100)", { scalable: true })}

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
  margin: 20px 0 18px;
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
