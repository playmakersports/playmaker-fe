"use client";

import React, { useState } from "react";
import styled from "styled-components";

import { MatchSummaryCard } from "./container";
import { FONTS } from "@/styles/common";
import MenuDotsIcon from "@/assets/icon/common/MenuDots.svg";

type Props = {
  name: string;
  profileImg: string;
  teamName: string;
  photo?: string;
  stats: { title: string; value: string }[];
};

function MatchMvp(props: Props) {
  const { name, profileImg, teamName, photo, stats } = props;
  const [expanded, setExpanded] = useState(false);
  const [contentsHeight, setContentsHeight] = useState(0);

  return (
    <Wrapper $expanded={expanded} $contentsHeight={contentsHeight} onClick={() => setExpanded((prev) => !prev)}>
      <Header>
        <div className="left">
          <ProfileImg $image={profileImg}>
            <p className="mvp-label">MVP</p>
          </ProfileImg>
          <p>
            <span className="name">{name}</span>
            <span className="team-name">{teamName}</span>
          </p>
        </div>
        <MenuDotsIcon />
      </Header>
      <Contents
        style={{ opacity: expanded ? 1 : 0 }}
        ref={(el) => {
          if (el) setContentsHeight(el.clientHeight);
        }}
      >
        <MvpImage $image={photo ?? profileImg} />
        <StatList>
          {stats.map((stat) => (
            <li key={stat.title}>
              <span>{stat.title}</span>
              <span className="stat-value">{stat.value}</span>
            </li>
          ))}
        </StatList>
      </Contents>
    </Wrapper>
  );
}

type StyledImageProps = { $image: string };
const Wrapper = styled(MatchSummaryCard)<{ $expanded: boolean; $contentsHeight: number }>`
  position: relative;
  padding: 0;
  height: ${({ $expanded, $contentsHeight }) => ($expanded ? `${80 + $contentsHeight}px` : "80px")};
  overflow: hidden;
`;
const Header = styled.div`
  ${FONTS.body3("semibold")};
  user-select: none;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.left {
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      display: flex;
      flex-direction: column;
      span.team-name {
        ${FONTS.body4("regular")};
        font-weight: 400;
        color: var(--gray600);
      }
    }
  }
  svg {
    width: 24px;
    height: 24px;
    fill: var(--gray700);
  }
`;
const ProfileImg = styled.div<StyledImageProps>`
  position: relative;
  width: 48px;
  height: 48px;
  background-color: var(--gray100);
  background-image: url(${(props) => props.$image});
  background-size: auto 110%;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: 50%;

  p.mvp-label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    right: -8px;
    bottom: -2px;
    background-color: var(--main);
    border-radius: 50%;
    border: 2px solid var(--white);
    box-sizing: content-box;
    color: var(--white);
    font-weight: 600;
    font-size: 1rem;
    line-height: 1rem;
  }
`;

const Contents = styled.div`
  padding: 10px 20px 24px;
  transition: opacity 0.25s;
`;
const MvpImage = styled.div<StyledImageProps>`
  width: 100%;
  height: 160px;
  background-image: url(${(props) => props.$image});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  border-radius: 16px;
`;

const StatList = styled.ul`
  display: flex;
  margin-top: 20px;
  padding: 0 10px;
  flex-direction: column;
  gap: 12px;
  li {
    ${FONTS.body4("regular")};
    display: flex;
    padding: 4px 0;
    justify-content: space-between;
    align-items: center;
    color: var(--gray700);

    span.stat-value {
      display: inline-flex;
      padding: 2px 12px;
      align-items: center;
      background-color: rgba(var(--sub2-rgb), 0.7);
      border-radius: 12px;
      font-weight: 600;
    }
  }
`;

export default MatchMvp;
