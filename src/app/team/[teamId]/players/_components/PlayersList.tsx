"use client";
import React, { useRef } from "react";
import styled from "styled-components";
import clsx from "clsx";
import useStickyMoment from "@/hook/useStickyMoment";

import { fonts } from "@/styles/fonts.css";
import { flexAlignCenter, flexRowGap4, innerChildContainer } from "@/styles/container.css";
import {
  playersListTableColumnDivider,
  playersListTableFlex1,
  playersListTableHead,
  playersListTableRow,
  playersListTableW70,
} from "./players.css";
import { TeamPlayerAuthStatus, TeamPlayerAuthStatusName } from "@/apis/enums/enums";

import UpDownArrow from "@/assets/icon/arrow/UpDownArrow.svg";
import RightArrow from "@/assets/icon/arrow/RightArrow.svg";
import CrownIcon from "@/assets/icon/common/CrownCircle.svg";
import FlagCircle from "@/assets/icon/common/FlagCircle.svg";
import { ApiTeamPlayerItem } from "@/apis/types/team";

function PlayersList({ playersList }: { playersList?: ApiTeamPlayerItem[] }) {
  const headRef = useRef<HTMLDivElement>(null);

  useStickyMoment(headRef);

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
      {playersList?.map((player) => (
        <div className={playersListTableRow} key={player.memberId}>
          <Image>
            {["MASTER", "ASSISTANT", "STAFF"].includes(player.auth) && (
              <Staff
                style={{
                  backgroundColor: PLAYER_LEVEL_COLORS[player.auth],
                }}
              >
                {player.auth === "MASTER" ? (
                  <CrownIcon width={24} height={24} />
                ) : (
                  <FlagCircle width={24} height={24} />
                )}
              </Staff>
            )}
          </Image>
          <div className={playersListTableFlex1}>
            <div>
              <p
                className={clsx(fonts.caption1.semibold, flexAlignCenter, flexRowGap4)}
                style={{ color: "var(--primary500)" }}
              >
                {player.generation !== null ? (
                  <>
                    {player.generation}기<span className="bullet" />
                  </>
                ) : null}
                {TeamPlayerAuthStatusName[player.auth]}
              </p>

              <p className={clsx(fonts.body3.medium, flexAlignCenter)}>
                {player.username} <RightArrow width={20} height={20} fill="var(--gray700)" />
                {/* <span className="gender-icon">{GENDER_ICON[player.sex]}</span> */}
              </p>
            </div>
          </div>

          <div className={playersListTableColumnDivider} />
          {/* <div className={clsx(fonts.body4.medium, playersListTableW70)}>포워드</div> */}
          <div className={playersListTableColumnDivider} />
          {/* <div className={clsx(fonts.body4.medium, playersListTableW70)}>{player.attendRate * 100}%</div> */}
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
const Staff = styled.div`
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
  &[data-size="small"] {
    display: none;
  }
`;

const PLAYER_LEVEL_COLORS: Record<TeamPlayerAuthStatus, string> = {
  MASTER: "#ff8c00",
  ASSISTANT: "#0fd1c1",
  STAFF: "#8984E5",
  MEMBER: "",
  APPLICABLE: "",
  APPLY: "",
};

export default PlayersList;
