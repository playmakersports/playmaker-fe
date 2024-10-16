import React from "react";
import styled from "@emotion/styled";

import CrownIcon from "@/assets/icon/global/Crown.svg";
import { FONTS } from "@/styles/common";

type Props = {
  playerId: string;
  name: string;
  position: string;
  // "president" | "vice" | "manager" | "member"
  profileImg: string;
  tag: string[] | string;
  attendRate: number;
  birthDate: string;
  generation?: number;
};
function PlayerListItem(props: Props) {
  const { playerId, name, position, profileImg, tag, attendRate, birthDate, generation } = props;
  const POSITION_NAME: Record<string, string> = {
    president: "회장",
    vice: "부회장",
    manager: "매니저",
    member: "",
  };
  return (
    <Container>
      <Image>
        {(position === "president" || position === "vice") && (
          <Staff data-position={position}>
            <CrownIcon width={16} height={16} />
          </Staff>
        )}
      </Image>
      <Name>
        <p className="position">{POSITION_NAME[position]}</p>
        <p className="player-name">{name}</p>
        <p className="player-tags">{typeof tag === "string" ? tag : tag.map((i) => <span>#{i}</span>)}</p>
      </Name>
      <Info>
        <li>
          <span>출석률</span>
          <span>{attendRate * 100}%</span>
        </li>
        {generation ? (
          <li>
            <span>기수</span>
            <span>{generation}기</span>
          </li>
        ) : (
          <li>
            <span>나이</span>
            <span>{birthDate.split("-")[0].slice(2)}년생</span>
          </li>
        )}
      </Info>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-height: 60px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
const Image = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--gray100);
`;
const Staff = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -2px;
  bottom: -2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  border: 2px solid var(--background-light);
  box-sizing: content-box;

  &[data-position="president"] {
    background-color: #fe9e2a;
  }
  &[data-position="vice"] {
    background-color: var(--sub1);
  }
`;
const Name = styled.div`
  flex: 1;
  p.position {
    font-size: 1.3rem;
    line-height: 1.6rem;
    font-weight: 500;
    color: var(--main);
  }
  p.player-name {
    ${FONTS.MD1};
    margin-bottom: 4px;
  }
  p.player-tags {
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: 400;
    color: var(--gray600);
    span {
      margin-right: 4px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;
const Info = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;

  li {
    padding: 0 6px;
    display: flex;
    min-width: 48px;
    align-items: center;
    flex-direction: column;

    span:first-of-type {
      font-size: 1.3rem;
      line-height: 2.2rem;
      font-weight: 400;
      color: var(--gray500);
    }
    span:last-of-type {
      font-size: 1.6rem;
      line-height: 2rem;
      font-weight: 600;
    }
  }
`;

export default PlayerListItem;
