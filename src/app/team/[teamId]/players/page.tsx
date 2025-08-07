"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { useParams, useRouter } from "next/navigation";
import { useHeader } from "@/hook/useHeader";
import { useTeamJoinRequestGet, useTeamPlyerGet } from "@/apis/hook/team";

import PlayersList from "./_components/PlayersList";
import { BasicInput } from "@/components/common/input/BaseInput";
import { fonts } from "@/styles/fonts.css";
import {
  baseContainerPaddingTop,
  flexColumnGap10,
  flexColumnGap20,
  flexRowGap4,
  flexSpaceBetween,
} from "@/styles/container.css";
import Button from "@/components/common/Button";

import PeopleIcon from "@/assets/icon/common/outlined/People.svg";

function PlayerList() {
  const router = useRouter();
  const teamId = useParams().teamId;
  const { data: playersList } = useTeamPlyerGet(teamId as string);
  const { data: requestPlayers } = useTeamJoinRequestGet(teamId as string);
  const joinRequestCount = requestPlayers?.length || 0;

  const [sortTab, setSortTab] = useState("name");
  const [sortType, setSortType] = useState("");

  useHeader({
    title: "팀원",
    subActions: [
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
      {
        name: "기수 설정",
        action: () => {
          router.push(`/team/${teamId}/admin/player-batch`);
        },
      },
    ],
  });

  return (
    <>
      <section className={clsx(baseContainerPaddingTop, flexColumnGap20)}>
        <div className={flexColumnGap10}>
          <BasicInput type="text" iconType="search" placeholder="이름으로 찾기" />
          <div className={clsx(flexSpaceBetween)}>
            <p className={clsx(fonts.body4.regular, flexRowGap4)} style={{ color: "var(--gray500)" }}>
              <PeopleIcon width={20} height={20} fill="var(--gray600)" />
              {playersList?.length}명
            </p>
            <Button
              type="button"
              mode={joinRequestCount > 0 ? "primary" : "gray"}
              fillType={joinRequestCount > 0 ? "default" : "outline"}
              size="xsmall"
              onClick={() => router.push(`/team/${teamId}/admin/join-request`)}
            >
              가입 신청 {joinRequestCount > 0 ? `${joinRequestCount}건` : "없음"}
            </Button>
          </div>
        </div>
        <PlayersList playersList={playersList} />
      </section>
    </>
  );
}

export default PlayerList;
