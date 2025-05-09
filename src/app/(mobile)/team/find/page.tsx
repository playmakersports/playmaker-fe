"use client";

import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useSearchParams, useRouter } from "next/navigation";
import { useHeader } from "@/hook/useHeader";
import useStickyMoment from "@/hook/useStickyMoment";
import { useGet } from "@/apis/hook/query";

import MainTab from "@/components/Main/MainTab";
import { NOW_RECRUIT_LIST } from "@/constants/mock/RECRUIT";
import { BaseContainer } from "@/components/common/Container";
import { SUPPORT_SPORTS } from "@/constants/SPORTS";
import { BasicInput } from "@/components/common/input/BaseInput";
import { DropDownBottomSheet } from "@/components/common/DropDownBottomSheet";

import PlusIcon from "@/assets/icon/common/Plus.svg";
import TeamListCard from "../_components/TeamListCard";

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
  const [searchValue, setSearchValue] = useState("");
  const [sortQuery, setSortQuery] = useState("default");

  const { data } = useGet("/api/team/selectteam");

  return (
    <Container>
      <TabWrapper ref={sportsTabRef}>
        <MainTab
          padding={20}
          color="primary"
          type="line"
          initialValue={activeTab}
          nowValue={(value) => {
            setActiveTab(value);
          }}
          items={[
            { value: "all", name: "전체" },
            ...SUPPORT_SPORTS.map((item) => ({
              value: item.nameEng,
              name: item.name,
            })),
          ]}
        />
      </TabWrapper>
      <Contents>
        <TeamCreateButton type="button" onClick={() => router.push("/team-create")}>
          <PlusIcon width={24} height={24} />
        </TeamCreateButton>
        <BasicInput
          type="text"
          iconType="search"
          placeholder="팀 이름으로 찾기.."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          delButton={true}
        />
      </Contents>
      <Filter>
        <DropDownBottomSheet
          defaultValue={sortQuery}
          getCurrentValue={setSortQuery}
          options={[
            { value: "default", name: "추천순" },
            { value: "like", name: "좋아요순" },
            { value: "members", name: "팀 인원순" },
            { value: "date", name: "마감 임박순" },
          ]}
        />
      </Filter>

      <Cards>
        {NOW_RECRUIT_LIST.map((item) => (
          <TeamListCard
            key={item.teamId}
            status={item.status}
            university={item.university}
            teamId={item.teamId}
            teamLogo={item.teamLogo}
            teamName={item.teamName}
            location={item.location}
            dueDate={item.dueDate}
            gender={item.gender}
            likeCnt={8400}
            memberCnt={20}
          />
        ))}
      </Cards>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  padding: 0 16px calc(88px + var(--env-sab) + 12px);
`;

const TabWrapper = styled.div`
  position: sticky;
  margin: 0 -16px;
  padding: 4px 0 0;
  top: 0;
  z-index: 1;
  transition: padding 0.2s;

  &.stuck {
    background-color: var(--background-light);
  }
`;
const Contents = styled.section`
  margin: 0 -16px;
  padding: 12px 16px;
  background-color: var(--background);
`;
const Cards = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
`;

const Filter = styled.div`
  display: flex;
  padding: 12px 6px 6px;
  justify-content: space-between;
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
