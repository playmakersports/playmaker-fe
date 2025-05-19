"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useHeader } from "@/hook/useHeader";
import clsx from "clsx";
import useModal from "@/hook/useModal";

import { BasicInput } from "@/components/common/input/BaseInput";
import { TEAM_PLAYERS_MOCK } from "@/constants/mock/TEAM";
import PlayerListItem from "@/app/(mobile)/team/[teamId]/_components/PlayerListItem";

import { fonts } from "@/styles/fonts.css";
import PeopleIcon from "@/assets/icon/common/outlined/People.svg";
import {
  baseContainerPaddingTop,
  flexColumnGap10,
  flexColumnGap20,
  flexRowGap4,
  flexSpaceBetween,
} from "@/styles/container.css";
import FilterButton from "@/components/common/FilterButton";
import PlayersListSort from "../_components/PlayersListSort";

function PlayerList() {
  const router = useRouter();
  const teamId = useParams().teamId;
  const { showModal, ModalComponents } = useModal();
  const [sortTab, setSortTab] = useState("name");
  const [sortType, setSortType] = useState("");

  useHeader({
    title: "팀원",
    subActions: [
      {
        name: "가입 신청 목록",
        action: () => {
          router.push(`/team/${teamId}/admin/recruit-applicant`);
        },
      },
      {
        name: "권한 설정",
        action: () => {
          router.push(`/team/${teamId}/admin/role`);
        },
      },
      {
        name: "팀원 퇴출",
        action: () => {
          router.push(`/team/${teamId}/admin/block`);
        },
      },
    ],
    // options: { titleAlign: "center" },
  });

  const PLAYERS_FILTER = [
    { name: "전체", value: "all" },
    { name: "운영진", value: "manage" },
    { name: "기수", value: "student" },
    { name: "휴학생", value: "rest" },
  ];

  return (
    <>
      <section className={clsx(baseContainerPaddingTop, flexColumnGap20)}>
        <div className={flexColumnGap10}>
          <BasicInput type="text" iconType="search" placeholder="이름으로 찾기" />
          <div className={clsx(flexSpaceBetween)}>
            <p className={clsx(fonts.caption1.regular, flexRowGap4)} style={{ color: "var(--gray500)" }}>
              <PeopleIcon width={18} height={18} fill="var(--gray600)" />
              {TEAM_PLAYERS_MOCK.length}명
            </p>
            <FilterButton onClick={() => showModal()}>정렬</FilterButton>
          </div>
        </div>
        <div className={flexColumnGap20}>
          {TEAM_PLAYERS_MOCK.map((player) => {
            const { level, sex, birthDate, tag, ...rest } = player;
            return (
              <PlayerListItem
                key={player.playerId}
                level={level}
                sex={sex}
                position="가드"
                birthDate={birthDate}
                {...rest}
              />
            );
          })}
        </div>
      </section>
      <PlayersListSort
        ModalComponents={ModalComponents}
        sortTab={sortTab}
        setSortTab={setSortTab}
        sortType={sortType}
        setSortType={setSortType}
      />
    </>
  );
}

export default PlayerList;
