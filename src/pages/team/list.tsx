import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { usePageTitle } from "@/hook/usePageTitle";
import useStickyMoment from "@/hook/useStickyMoment";
import useBgWhite from "@/hook/useBgWhite";

import MainTab from "@/components/Main/MainTab";
import { NOW_RECRUIT_LIST } from "@/constants/mock/RECRUIT";
import { BaseContainer } from "@/components/common/Container";
import { SUPPORT_SPORTS } from "@/constants/mock/SPORTS";
import { BasicInput } from "@/components/common/Input";
import { DropDownBottomSheet } from "@/components/common/DropDownBottomSheet";

import PlusIcon from "@/assets/icon/global/Plus.svg";
import TeamListCard from "@/components/Team/TeamListCard";

function TeamList() {
  useBgWhite();
  usePageTitle({
    title: "팀 목록",
    subIcons: [{ svgIcon: <PlusIcon />, description: "팀 생성", linkTo: "/team/create" }],
  });
  const sportsTabRef = useRef<HTMLDivElement>(null);
  useStickyMoment(sportsTabRef);
  const router = useRouter();
  const targetSports = router.query.sports as string;
  const [activeTab, setActiveTab] = useState(targetSports ?? SUPPORT_SPORTS[0].value);
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilterQuery, setSelectedFilterQuery] = useState("default");

  return (
    <Container>
      <TabWrapper ref={sportsTabRef}>
        <MainTab
          type="line"
          initialValue={activeTab}
          nowValue={(value) => {
            setActiveTab(value);
          }}
          items={SUPPORT_SPORTS}
        />
      </TabWrapper>
      <Contents>
        <BasicInput
          type="text"
          search={true}
          placeholder="팀 이름으로 찾기.."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          delButton={true}
        />
      </Contents>
      <Filter>
        <DropDownBottomSheet
          defaultValue={selectedFilterQuery}
          getCurrentValue={setSelectedFilterQuery}
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
          />
        ))}
      </Cards>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  padding-bottom: calc(88px + var(--env-sab) + 12px);
`;

const TabWrapper = styled.div`
  position: sticky;
  margin: 0 -16px;
  padding: 4px 16px 0;
  top: 0;
  z-index: 1;
  transition: padding 0.2s;

  &.stuck {
    border-bottom: 1px solid rgb(var(--gray-h6));
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
  margin-top: 16px;
`;

const Filter = styled.div`
  display: flex;
  padding: 6px 0;
  justify-content: space-between;
`;

export default TeamList;
