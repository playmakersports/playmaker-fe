"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { usePageTitle } from "@/hook/usePageTitle";
import useModal from "@/hook/useModal";

import { FONTS } from "@/styles/common";
import SwipeSelector from "@/components/common/SwipeSelector";
import { BasicInput } from "@/components/common/input/BaseInput";
import { TEAM_PLAYERS_MOCK } from "@/constants/mock/TEAM";
import PlayerListItem from "@/components/Team/PlayerListItem";
import { DropDownBottomSheet } from "@/components/common/DropDownBottomSheet";
import PlayerRoleModal from "../../../_components/PlayerRoleModal";

import DoubleStarIcon from "@/assets/icon/global/DoubleStar.svg";
import CrownIcon from "@/assets/icon/global/Crown.svg";
import StartIcon from "@/assets/icon/global/Star.svg";
import DeleteAllBorderIcon from "@/assets/icon/global/DeleteAllBorder.svg";

type PlayerInfo = {
  defaultLevel: number;
  playerId: string;
  playerName: string;
  playerImg: string;
};

function PlayerList() {
  const { showModal: showRoleModal, ModalComponents: RoleModal } = useModal();
  const { showModal: showCategoryModal, ModalComponents: CategoryModal } = useModal();
  const [filter, setFilter] = useState("all");
  const [playerInfo, setPlayerInfo] = useState<PlayerInfo>();
  usePageTitle({
    title: "팀원",
    subIcons: [{ svgIcon: <DoubleStarIcon />, linkTo: "", description: "다중 카테고리" }],
  });

  const PLAYERS_FILTER = [
    { name: "전체", value: "all" },
    { name: "운영진", value: "manage" },
    { name: "기수", value: "student" },
    { name: "휴학생", value: "rest" },
  ];

  const onRoleClick = (playerInfo: PlayerInfo) => {
    setPlayerInfo(playerInfo);
    showRoleModal();
  };
  const onCategoryClick = (playerInfo: PlayerInfo) => {
    setPlayerInfo(playerInfo);
    showCategoryModal();
  };

  return (
    <>
      <Container>
        <Top>
          <BasicInput type="text" iconType="search" placeholder="이름으로 찾기" />
          <Filter>
            <DropDownBottomSheet getCurrentValue={setFilter} defaultValue={filter} options={PLAYERS_FILTER} />
            <p>총 {TEAM_PLAYERS_MOCK.length}명</p>
          </Filter>
        </Top>
        <Players>
          {TEAM_PLAYERS_MOCK.map((player) => {
            const { level, sex, birthDate, tag, ...rest } = player;
            const [birthYear, birthMonth] = birthDate.split("-");
            return (
              <SwipeSelector
                key={player.playerId}
                left={[
                  {
                    svg: <CrownIcon fill="var(--white)" />,
                    bgColor: "var(--purple300)",
                    text: "권한 설정",
                    onClick: () =>
                      onRoleClick({
                        defaultLevel: player.level,
                        playerId: player.playerId,
                        playerName: player.name,
                        playerImg: player.profileImg,
                      }),
                  },
                  {
                    svg: <StartIcon fill="var(--white)" />,
                    bgColor: "var(--main)",
                    text: "카테고리",
                    onClick: () =>
                      onCategoryClick({
                        defaultLevel: player.level,
                        playerId: player.playerId,
                        playerName: player.name,
                        playerImg: player.profileImg,
                      }),
                  },
                ]}
                right={{
                  svg: <DeleteAllBorderIcon fill="var(--white)" />,
                  bgColor: "#07235F",
                  text: "퇴출",
                  onClick: () => {},
                }}
              >
                <PlayerListItem
                  level={level}
                  sex={sex}
                  birthDate={birthDate}
                  tag={`${birthYear}년 ${+birthMonth}월생`}
                  {...rest}
                />
              </SwipeSelector>
            );
          })}
        </Players>
      </Container>
      <PlayerRoleModal ModalContainer={RoleModal} playerInfo={playerInfo} />
      <CategoryModal title="카테고리 지정">1</CategoryModal>
    </>
  );
}

const Container = styled.div`
  padding: 8px 16px;
  overflow-x: hidden;
`;
const Top = styled.div`
  display: flex;
  margin: 0 0 10px;
  flex-direction: column;
  gap: 16px;
`;
const Filter = styled.div`
  display: flex;
  padding: 0 4px;
  justify-content: space-between;
  align-items: center;
  p {
    ${FONTS.MD2};
    color: var(--gray500);
    font-weight: 400;
  }
`;
const Players = styled.div`
  overflow-x: hidden;
  margin: 0 -16px;
`;

export default PlayerList;
