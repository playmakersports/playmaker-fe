"use client";

import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useSearchParams, useRouter } from "next/navigation";
import { useHeader } from "@/hook/useHeader";
import useStickyMoment from "@/hook/useStickyMoment";

import { baseContainer } from "@/styles/container.css";
import { teamFindSearchContainer, teamFindSearchInput } from "./_components/teamFind.css";
import MainTab from "@/components/Main/MainTab";
import { SUPPORT_SPORTS } from "@/constants/SPORTS";
import TeamFindAll from "./_components/TeamFindAll";
import TeamFindSports from "./_components/TeamFindSports";

import SearchIcon from "@/assets/icon/common/Search.svg";
import PlusIcon from "@/assets/icon/common/Plus.svg";

function TeamList() {
  useHeader({
    title: "팀 살펴보기",
  });
  const router = useRouter();
  const sportsTabRef = useRef<HTMLDivElement>(null);
  useStickyMoment(sportsTabRef);
  const searchParams = useSearchParams();
  const targetSports = searchParams.get("sports") as string;
  const [activeTab, setActiveTab] = useState(targetSports ?? "");

  return (
    <section>
      <TabWrapper ref={sportsTabRef}>
        <div className={teamFindSearchContainer} style={{ marginBottom: "8px" }}>
          <SearchIcon fill="var(--primary500)" width={20} height={20} />
          <input type="text" className={teamFindSearchInput} placeholder="스포츠 종목 또는 팀 이름 입력" />
        </div>
        <MainTab
          sameWidth
          padding={16}
          color="primary"
          type="line"
          initialValue={activeTab}
          nowValue={(value) => {
            setActiveTab(value);
          }}
          items={[
            { value: "", name: "전체" },
            ...SUPPORT_SPORTS.map((item) => ({
              value: item.nameEng,
              name: item.name,
            })),
          ]}
        />
      </TabWrapper>
      <TeamCreateButton type="button" onClick={() => router.push("/team-create")}>
        <PlusIcon width={24} height={24} />
      </TeamCreateButton>
      <section>{activeTab === "" ? <TeamFindAll /> : <TeamFindSports sports={activeTab} />}</section>
    </section>
  );
}

const TabWrapper = styled.div`
  position: sticky;
  padding: 8px 0 0;
  top: 0;
  z-index: 1;
  &.stuck {
    background-color: var(--background-light);
  }
`;
const TeamCreateButton = styled.button`
  position: absolute;
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
  right: 20px;
  bottom: var(--safe-bottom-navigation);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: var(--primary500);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s;
  z-index: 1;

  svg {
    fill: var(--white);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export default TeamList;
