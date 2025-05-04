import React from "react";
import styled from "styled-components";
import clsx from "clsx";
import { format } from "date-fns";

import { fonts } from "@/styles/fonts.css";
import { flexColumnGap10 } from "@/styles/container.css";

import CrownIcon from "@/assets/icon/common/CrownCircle.svg";
import FlagCircle from "@/assets/icon/common/FlagCircle.svg";
import GenderFemaleIcon from "@/assets/icon/color/Gender_Female.svg";
import GenderMaleIcon from "@/assets/icon/color/Gender_Male.svg";

type Props = {
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
  const { playerId, name, level, profileImg, position, birthDate, sex, gisu } = props;
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
      <Image>
        {level > 1 && (
          <Staff $bgColor={LEVEL_CODE[level].color}>
            {level > 3 ? <CrownIcon width={24} height={24} /> : <FlagCircle width={24} height={24} />}
          </Staff>
        )}
      </Image>
      <Name>
        {level > 1 && <p className={clsx(fonts.caption1.semibold, "position")}>{LEVEL_CODE[level].name}</p>}
        <p className={clsx(fonts.body3.semibold, "player-name")}>
          {name} {GENDER_ICON[sex]}
        </p>
        <p className={fonts.caption1.medium} style={{ color: "var(--gray400)" }}>
          {format(birthDate, "yyyy년 M월생")}
        </p>
      </Name>
      <Info>
        <li className={flexColumnGap10}>
          <span className={fonts.caption1.medium} style={{ color: "var(--gray600)" }}>
            포지션
          </span>
          <span className={fonts.body3.semibold} style={{ color: "var(--gray800)" }}>
            {position}
          </span>
        </li>
        {gisu && (
          <li className={flexColumnGap10}>
            <span className={fonts.caption1.medium} style={{ color: "var(--gray600)" }}>
              기수
            </span>
            <span className={fonts.body3.semibold} style={{ color: "var(--gray800)" }}>
              {gisu}기
            </span>
          </li>
        )}
      </Info>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 14px;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--gray100);
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
`;
const Name = styled.div`
  flex: 1;
  p.position {
    color: var(--primary500);
  }
  p.player-name {
    margin-bottom: 8px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--gray900);
  }
`;
const Info = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  li {
    text-align: center;
    min-width: 52px;
  }
`;

export default PlayerListItem;
