import React from "react";
import styled from "@emotion/styled";

import CrownIcon from "@/assets/icon/global/CrownFill.svg";
import FlagIcon from "@/assets/icon/global/FlagFill.svg";
import { FONTS } from "@/styles/common";
import GenderIcon from "../common/GenderIcon";

type Props = {
  playerId: string;
  name: string;
  level: number;
  profileImg: string;
  tag: string[] | string;
  attendRate: number;
  birthDate: string;
  gisu?: number;
  sex: "MALE" | "FEMALE";
};
function PlayerListItem(props: Props) {
  const { playerId, name, level, profileImg, tag, attendRate, birthDate, sex, gisu } = props;
  interface Position {
    name: string;
    color: string;
    value: string;
  }
  const LEVEL_CODE: Record<string, Position> = {
    5: { name: "회장", color: "#ff8c00", value: "president" },
    4: { name: "부회장", color: "#0fd1c1", value: "vice" },
    3: { name: "운영진", color: "#8984E5", value: "staff" },
    2: { name: "매니저", color: "#A0BCF8", value: "manager" },
    1: { name: "팀원", color: "", value: "member" },
  };

  return (
    <Container>
      <Image>
        {level > 1 && (
          <Staff bgColor={LEVEL_CODE[level].color}>
            <CrownIcon width={16} height={16} />
          </Staff>
        )}
      </Image>
      <Name>
        {level > 1 && <p className="position">{LEVEL_CODE[level].name}</p>}
        <p className="player-name">
          {name} <GenderIcon type={sex} />
        </p>
        <p className="player-tags">{typeof tag === "string" ? tag : tag.map((i) => <span key={i}>#{i}</span>)}</p>
      </Name>
      <Info>
        <li>
          <span>출석률</span>
          <span>{attendRate * 100}%</span>
        </li>
        {gisu ? (
          <li>
            <span>기수</span>
            <span>{gisu}기</span>
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
const Staff = styled.div<{ bgColor: string }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -3px;
  bottom: -3px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 3px solid var(--background-light);
  box-sizing: content-box;

  background-color: ${({ bgColor }) => bgColor};
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
    display: inline-flex;
    align-items: center;
    gap: 4px;
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
