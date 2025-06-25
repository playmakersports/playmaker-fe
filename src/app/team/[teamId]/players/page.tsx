"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { useParams, useRouter } from "next/navigation";
import { useHeader } from "@/hook/useHeader";

import PlayersList from "./_components/PlayersList";
import { BasicInput } from "@/components/common/input/BaseInput";
import { TEAM_PLAYERS_MOCK } from "@/constants/mock/TEAM";

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
  const [sortTab, setSortTab] = useState("name");
  const [sortType, setSortType] = useState("");
  const applyCount = Math.floor(Math.random() * 5);

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
            <p className={clsx(fonts.body4.regular, flexRowGap4)} style={{ color: "var(--gray500)" }}>
              <PeopleIcon width={20} height={20} fill="var(--gray600)" />
              {TEAM_PLAYERS_MOCK.length}명
            </p>
            <Button
              type="button"
              mode={applyCount > 0 ? "primary" : "gray"}
              fillType={applyCount > 0 ? "default" : "outline"}
              size="xsmall"
              onClick={() => router.push(`/team/${teamId}/admin/join-request`)}
            >
              가입 신청 {applyCount}건
            </Button>
          </div>
        </div>
        <PlayersList />
      </section>
    </>
  );
}

export default PlayerList;
