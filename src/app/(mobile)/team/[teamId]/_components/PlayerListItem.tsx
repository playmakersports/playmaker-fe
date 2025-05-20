import React from "react";
import styled from "styled-components";
import clsx from "clsx";

import { fonts } from "@/styles/fonts.css";
import { flexRowGap8 } from "@/styles/container.css";

import CrownIcon from "@/assets/icon/common/CrownCircle.svg";
import FlagCircle from "@/assets/icon/common/FlagCircle.svg";
import GenderFemaleIcon from "@/assets/icon/color/Gender_Female.svg";
import GenderMaleIcon from "@/assets/icon/color/Gender_Male.svg";

type Props = {
  size?: "small" | "medium";
  playerId: string;
  name: string;
  level: number;
  profileImg: string;
  position: string;
  birthDate: string;
  gisu?: number;
  sex: "MALE" | "FEMALE";
};
function PlayerListItem(props: Props) {
  const { size = "medium", playerId, name, level, profileImg, position, birthDate, sex, gisu } = props;
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

  const GENDER_ICON = {
    MALE: <GenderMaleIcon width={20} height={20} />,
    FEMALE: <GenderFemaleIcon width={20} height={20} />,
  };

  return (
    <Container>
      <Image data-size={size}>
        {level > 1 && (
          <Staff $bgColor={LEVEL_CODE[level].color} data-size={size}>
            {level > 3 ? <CrownIcon width={24} height={24} /> : <FlagCircle width={24} height={24} />}
          </Staff>
        )}
      </Image>
      <Name>
        {level > 1 && <p className={clsx(fonts.caption1.semibold, "position")}>{LEVEL_CODE[level].name}</p>}
        <p className={clsx(fonts.body3.semibold, "player-name")}>
          {name}
          <span className="gender-icon" data-size={size}>
            {GENDER_ICON[sex]}
          </span>
        </p>
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
const Image = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--gray100);
  &[data-size="small"] {
    width: 48px;
    height: 48px;
  }
`;
const Staff = styled.div<{ $bgColor: string }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -8px;
  bottom: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--background-light);
  box-sizing: content-box;
  background-color: ${({ $bgColor }) => $bgColor};
  &[data-size="small"] {
    display: none;
  }
`;
const Name = styled.div`
  flex: 1;
  p.position {
    color: var(--primary500);
  }
  p.player-name {
    color: var(--gray900);
    span.gender-icon[data-size="small"] {
      display: none;
    }
  }
`;
const Info = styled.ul`
  li {
    display: flex;
    padding: 8px;
    align-items: center;
    flex-direction: column;
    min-width: 52px;
    max-width: 80px;
    background-color: var(--gray50);
    border-radius: 6px;
  }
`;

export default PlayerListItem;
