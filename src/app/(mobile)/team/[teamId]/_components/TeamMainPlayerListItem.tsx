import React from "react";
import styled from "styled-components";
import clsx from "clsx";

import { fonts } from "@/styles/fonts.css";
import { flexRowGap8 } from "@/styles/container.css";

type Props = {
  playerId: string;
  name: string;
  level: number;
  profileImg: string;
  position: string;
  birthDate: string;
  gisu?: number;
};
function PlayerListItem(props: Props) {
  const { playerId, name, level, profileImg, position, birthDate, gisu } = props;
  interface ILevel {
    name: string;
    color: string;
    value: string;
  }
  const LEVEL_CODE: Record<string, ILevel> = {
    5: { name: "회장", color: "#ff8c00", value: "president" },
    4: { name: "부회장", color: "#0fd1c1", value: "vice" },
    3: { name: "운영진", color: "#8984E5", value: "staff" },
    2: { name: "매니저", color: "#A0BCF8", value: "manager" },
    1: { name: "팀원", color: "", value: "member" },
  };

  return (
    <Container>
      <ProfileImage style={{ backgroundImage: `url(${profileImg})` }} />
      <Name>
        {level > 1 && <p className={clsx(fonts.caption1.regular, "position")}>{LEVEL_CODE[level].name}</p>}
        <p className={clsx(fonts.body3.semibold, "player-name")}>{name}</p>
      </Name>
      <Info className={flexRowGap8}>
        <li>
          <span className={fonts.caption1.medium} style={{ color: "var(--gray400)" }}>
            포지션
          </span>
          <span className={fonts.body4.semibold} style={{ color: "var(--gray700)" }}>
            {position}
          </span>
        </li>
        {gisu && (
          <li>
            <span className={fonts.caption1.medium} style={{ color: "var(--gray400)" }}>
              기수
            </span>
            <span className={fonts.body4.semibold} style={{ color: "var(--gray700)" }}>
              {gisu}기
            </span>
          </li>
        )}
        <li>
          <span className={fonts.caption1.medium} style={{ color: "var(--gray400)" }}>
            출석률
          </span>
          <span className={fonts.body4.semibold} style={{ color: "var(--gray700)" }}>
            30%
          </span>
        </li>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
`;
const ProfileImage = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--gray100);
  width: 48px;
  height: 48px;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
`;

const Name = styled.div`
  flex: 1;
  p.position {
    color: var(--primary500);
  }
  p.player-name {
    color: var(--gray900);
    word-break: keep-all;
  }
`;
const Info = styled.ul`
  li {
    display: flex;
    padding: 8px;
    align-items: center;
    flex-direction: column;
    min-width: 65px;
    max-width: 80px;
    background-color: var(--gray50);
    border-radius: 6px;
  }
`;

export default PlayerListItem;
