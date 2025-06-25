"use client";
import React, { useRef } from "react";
import styled from "styled-components";
import clsx from "clsx";
import useStickyMoment from "@/hook/useStickyMoment";

import { TEAM_PLAYERS_MOCK } from "@/constants/mock/TEAM";
import { fonts } from "@/styles/fonts.css";
import { flexAlignCenter, flexRowGap4, innerChildContainer } from "@/styles/container.css";

import UpDownArrow from "@/assets/icon/arrow/UpDownArrow.svg";
import RightArrow from "@/assets/icon/arrow/RightArrow.svg";
import CrownIcon from "@/assets/icon/common/CrownCircle.svg";
import FlagCircle from "@/assets/icon/common/FlagCircle.svg";
import GenderFemaleIcon from "@/assets/icon/color/Gender_Female.svg";
import GenderMaleIcon from "@/assets/icon/color/Gender_Male.svg";
import {
  playersListTableColumnDivider,
  playersListTableFlex1,
  playersListTableHead,
  playersListTableRow,
  playersListTableW70,
} from "./players.css";

function PlayersList() {
  const headRef = useRef<HTMLDivElement>(null);
  useStickyMoment(headRef);
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

  const UpDownSortArrow = ({ type }: { type: string }) => {
    return (
      <button type="button" style={{ width: "18px", height: "18px" }}>
        <UpDownArrow width={18} height={18} fill="var(--gray400)" />
      </button>
    );
  };

  return (
    <div className={innerChildContainer}>
      <div className={clsx(playersListTableRow, playersListTableHead)} ref={headRef}>
        <div style={{ width: "54px" }}>프로필</div>
        <div className={playersListTableColumnDivider} data-header="true" />
        <div className={clsx(flexRowGap4, flexAlignCenter, playersListTableFlex1)}>
          이름 <UpDownSortArrow type="name" />
        </div>
        <div className={playersListTableColumnDivider} data-header="true" />
        <div className={clsx(flexRowGap4, flexAlignCenter, playersListTableW70)}>
          포지션 <UpDownSortArrow type="position" />
        </div>
        <div className={playersListTableColumnDivider} data-header="true" />
        <div className={clsx(flexRowGap4, flexAlignCenter, playersListTableW70)}>
          출석률 <UpDownSortArrow type="attendance" />
        </div>
      </div>
      {TEAM_PLAYERS_MOCK.map((player) => (
        <div className={playersListTableRow} key={player.playerId}>
          <Image>
            {player.level > 1 && (
              <Staff $bgColor={LEVEL_CODE[player.level].color}>
                {player.level > 3 ? <CrownIcon width={24} height={24} /> : <FlagCircle width={24} height={24} />}
              </Staff>
            )}
          </Image>
          <div className={playersListTableFlex1}>
            <div>
              {player.level > 1 && (
                <p className={clsx(fonts.caption1.semibold, "position")} style={{ color: "var(--primary500)" }}>
                  {LEVEL_CODE[player.level].name}
                </p>
              )}
              <p className={clsx(fonts.body3.medium, flexAlignCenter)}>
                {player.name} <RightArrow width={20} height={20} fill="var(--gray700)" />
                {/* <span className="gender-icon">{GENDER_ICON[player.sex]}</span> */}
              </p>
            </div>
          </div>

          <div className={playersListTableColumnDivider} />
          <div className={clsx(fonts.body4.medium, playersListTableW70)}>포워드</div>
          <div className={playersListTableColumnDivider} />
          <div className={clsx(fonts.body4.medium, playersListTableW70)}>{player.attendRate * 100}%</div>
        </div>
      ))}
    </div>
  );
}

const Image = styled.div`
  position: relative;
  margin-right: 12px;
  width: 56px;
  height: 56px;
  border-radius: 10px;
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
  &[data-size="small"] {
    display: none;
  }
`;

export default PlayersList;
