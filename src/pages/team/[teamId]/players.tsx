import React, { useState } from "react";
import styled from "@emotion/styled";
import { usePageTitle } from "@/hook/usePageTitle";
import useBgWhite from "@/hook/useBgWhite";
import useModal from "@/hook/useModal";

import SwipeSelector from "@/components/common/SwipeSelector";
import { BasicInput } from "@/components/common/Input";
import { TEAM_PLAYERS_MOCK } from "@/constants/mock/TEAM";
import PlayerListItem from "@/components/Team/PlayerListItem";
import { DropDownBottomSheet } from "@/components/common/DropDownBottomSheet";
import { FONTS } from "@/styles/common";

import CrownIcon from "@/assets/icon/global/Crown.svg";
import StartIcon from "@/assets/icon/global/Star.svg";
import DeleteAllBorderIcon from "@/assets/icon/global/DeleteAllBorder.svg";

function PlayerList() {
  const { showModal: showRoleModal, ModalComponents: RoleModal } = useModal();
  const { showModal: showCategoryModal, ModalComponents: CategoryModal } = useModal();
  const [filter, setFilter] = useState("all");
  usePageTitle({ title: "팀원 목록" });
  useBgWhite();

  const PLAYERS_FILTER = [
    { name: "전체", value: "all" },
    { name: "운영진", value: "manage" },
    { name: "기수", value: "student" },
    { name: "휴학생", value: "rest" },
  ];
  return (
    <>
      <Container>
        <Top>
          <BasicInput type="text" search placeholder="이름으로 찾기" />
          <Filter>
            <DropDownBottomSheet getCurrentValue={setFilter} defaultValue={filter} options={PLAYERS_FILTER} />
            <p>총 {TEAM_PLAYERS_MOCK.length}명</p>
          </Filter>
        </Top>
        <Players>
          {TEAM_PLAYERS_MOCK.map((player) => {
            const { position, gender, birthDate, tag, ...rest } = player;
            const [birthYear, birthMonth] = birthDate.split("-");
            return (
              <SwipeSelector
                key={player.playerId}
                left={[
                  {
                    svg: <CrownIcon fill="var(--gray0)" />,
                    bgColor: "var(--art-purple)",
                    text: "권한 설정",
                    onClick: () => showRoleModal(),
                  },
                  {
                    svg: <StartIcon fill="var(--gray0)" />,
                    bgColor: "var(--main)",
                    text: "카테고리",
                    onClick: () => showCategoryModal(),
                  },
                ]}
                right={{
                  svg: <DeleteAllBorderIcon fill="var(--gray0)" />,
                  bgColor: "#07235F",
                  text: "퇴출",
                  onClick: () => {},
                }}
              >
                <PlayerListItem
                  position={position}
                  birthDate={birthDate}
                  tag={`${birthYear}년 ${+birthMonth}월생`}
                  {...rest}
                />
              </SwipeSelector>
            );
          })}
        </Players>
      </Container>
      <RoleModal title="권한 설정">1</RoleModal>
      <CategoryModal title="카테고리 지정">1</CategoryModal>
    </>
  );
}

const Container = styled.div`
  padding: 8px 16px;
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
  margin: 0 -16px;
`;

export default PlayerList;
