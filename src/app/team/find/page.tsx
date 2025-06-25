"use client";

import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useSearchParams, useRouter } from "next/navigation";
import { useHeader } from "@/hook/useHeader";
import useStickyMoment from "@/hook/useStickyMoment";

import { teamFindSearchContainer, teamFindSearchInput } from "./_components/teamFind.css";
import MainTab from "@/components/Main/MainTab";
import { SUPPORT_SPORTS } from "@/constants/SPORTS";
import TeamFindAll from "./_components/TeamFindAll";
import TeamFindSports from "./_components/TeamFindSports";

import SearchIcon from "@/assets/icon/common/Search.svg";
import PlusFloat from "@/components/common/PlusFloat";

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
      <PlusFloat linkTo="/team-create" blind="팀 만들기" />
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

export default TeamList;
