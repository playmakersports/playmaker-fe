"use client";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import clsx from "clsx";
import Link from "next/link";
import { useHeader } from "@/hook/useHeader";
import useStickyMoment from "@/hook/useStickyMoment";
import useModal from "@/hook/useModal";
import { usePopup } from "@/components/common/global/PopupProvider";

import { FONTS } from "@/styles/common";
import Button from "@/components/common/Button";
import { fonts } from "@/styles/fonts.css";
import {
  playersListTableColumnDivider,
  playersListTableFlex1,
  playersListTableHead,
  playersListTableRow,
  playersListTableW54,
} from "../../players/_components/players.css";
import {
  flexAlignCenter,
  flexColumnGap20,
  flexRowGap12,
  flexRowGap24,
  flexRowGap4,
  flexSpaceBetween,
} from "@/styles/container.css";
import { TEAM_APPLY_LIST } from "@/constants/mock/TEAM_APPLY";

import RightArrow from "@/assets/icon/arrow/RightArrow.svg";
import SettingsIcon from "@/assets/icon/common/outlined/Settings.svg";

function TeamAdminRole() {
  const headRef = useRef<HTMLDivElement>(null);
  const { ModalComponents, showModal } = useModal();
  const [selectedPlayer, setSelectedPlayer] = useState<{
    playerId: number | null;
    playerName: string | null;
  }>({
    playerId: null,
    playerName: null,
  });
  const popup = usePopup();

  useStickyMoment(headRef);
  useHeader({
    title: "권한 설정",
  });
  const players = TEAM_APPLY_LIST;

  const onClickRoleChangeButton = ({ playerId, playerName }: { playerId: number | null; playerName: string }) => {
    setSelectedPlayer({ playerId, playerName });
    showModal();
  };

  return (
    <>
      <div className={clsx(playersListTableRow, playersListTableHead)} ref={headRef}>
        <div className={clsx(flexRowGap12, flexAlignCenter, playersListTableW54)}>프로필</div>
        <div className={playersListTableColumnDivider} data-header="true" />
        <div className={clsx(flexAlignCenter, playersListTableFlex1)}>이름</div>
      </div>

      <ul>
        {players.map((player) => (
          <PlayerItem key={player.playerId}>
            <div className={clsx(flexAlignCenter)} style={{ flex: 1 }}>
              <div className={flexRowGap24} style={{ flex: 1 }}>
                <ProfileImage></ProfileImage>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p className={fonts.caption1.semibold}>23기</p>
                  <Link href={`/p/${player.playerId}`} className={clsx(flexRowGap4, flexAlignCenter)}>
                    <p className={fonts.body3.medium}>{player.name}</p>
                    <RightArrow width={20} height={20} fill="var(--gray700)" />
                  </Link>
                </div>
              </div>
              <Button
                type="button"
                mode="gray"
                size="small"
                fillType="outline"
                icon={<SettingsIcon />}
                onClick={() => {
                  onClickRoleChangeButton({ playerId: player.playerId, playerName: player.name });
                }}
              >
                권한 변경
              </Button>
            </div>
          </PlayerItem>
        ))}
      </ul>
      <ModalComponents
        title="권한 변경"
        buttons={[
          {
            name: "취소",
            mode: "gray",
            fillType: "outline",
            onClick: (close) => {
              close();
            },
          },
          {
            name: "저장",
            mode: "primary",
            fillType: "default",
            onClick: (close) => {
              const confirm = popup?.confirm("", {
                title: `${selectedPlayer.playerName}님에게 권한을 부여합니다.`,
                buttonText: {
                  yes: "네, 부여할게요",
                  no: "아니요",
                },
                showIcon: true,
              });
              if (confirm) {
                // 권한 변경
              }
              close();
            },
          },
        ]}
      >
        <div className={clsx(flexColumnGap20, fonts.body4.regular)}>
          <div className={clsx(flexAlignCenter, flexSpaceBetween)}>
            <label>회장</label>
          </div>
          <div className={clsx(flexAlignCenter, flexSpaceBetween)}>
            <label>부회장</label>
          </div>
          <div className={clsx(flexAlignCenter, flexSpaceBetween)}>
            <label>운영진</label>
          </div>
          <div className={clsx(flexAlignCenter, flexSpaceBetween)}>
            <label>팀원</label>
          </div>
        </div>
      </ModalComponents>
    </>
  );
}

const PlayerItem = styled.li`
  user-select: none;
  padding: 20px 16px;
  div.item-top {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  div.item-intro {
    ${FONTS.body4("regular")};
    margin-top: 16px;
    margin-left: 32px;
    background-color: var(--gray50);
    border-radius: 8px;
    padding: 10px 12px;
    color: var(--gray600);
  }
  &:nth-child(2n) {
    background-color: var(--gray50);
  }
`;
const ProfileImage = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: var(--gray100);
`;

export default TeamAdminRole;
