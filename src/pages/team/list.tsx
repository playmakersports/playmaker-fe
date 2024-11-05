import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { usePageTitle } from "@/hook/usePageTitle";
import useStickyMoment from "@/hook/useStickyMoment";
import useModal from "@/hook/useModal";
import useBgWhite from "@/hook/useBgWhite";

import MainTab from "@/components/Main/MainTab";
import { CARD_ACTIVE, FONTS } from "@/styles/common";
import { NOW_RECRUIT_LIST } from "@/constants/mock/RECRUIT";
import { BaseContainer } from "@/components/common/Container";
import { SUPPORT_SPORTS } from "@/constants/mock/SPORTS";
import { BasicInput } from "@/components/common/Input";
import { BasicWhiteCard } from "@/components/common/Card";
import { DropDownBottomSheet } from "@/components/common/DropDownBottomSheet";

import PlusIcon from "@/assets/icon/global/Plus.svg";
import TeamListDetail from "@/components/Main/TeamListDetail";

function TeamList() {
  useBgWhite();
  usePageTitle({
    title: "팀 목록",
  });
  const { ModalComponents, showModal } = useModal();
  const sportsTabRef = useRef<HTMLDivElement>(null);
  useStickyMoment(sportsTabRef);
  const router = useRouter();
  const targetSports = router.query.sports as string;
  const [activeTab, setActiveTab] = useState(targetSports ?? SUPPORT_SPORTS[0].value);
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilterQuery, setSelectedFilterQuery] = useState("default");

  const RECRUIT_STATUS: Record<string, string> = {
    PENDING: "모집중",
    FINISHED: "모집완료",
    NO_RECRUIT: "",
  };
  return (
    <Container>
      <Floating>
        <AddTeamButton type="button" onClick={() => router.push("/team/create")}>
          <PlusIcon /> 팀 만들기
        </AddTeamButton>
      </Floating>
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
            { value: "default", name: "기본순" },
            { value: "like", name: "좋아요순" },
            { value: "members", name: "팀 인원순" },
            { value: "date", name: "마감 임박순" },
          ]}
        />
      </Filter>

      <Cards>
        {NOW_RECRUIT_LIST.map((item) => (
          <Card as="button" key={item.teamId} onClick={showModal}>
            <CardHeader>
              <img src={item.teamLogo} alt={item.teamName} />
              <h3>
                {item.teamName}
                {item.status !== "NO_RECRUIT" && (
                  <span className={`recruit-status ${item.status}`}>{RECRUIT_STATUS[item.status]}</span>
                )}
              </h3>
            </CardHeader>
            <dl className="recruit-detail">
              <div>{item.university}</div>
              <div>
                <dt>지역</dt>
                <dd>{item.location}</dd>
              </div>
              <div>
                <dt>모집마감</dt>
                <dd>{item.dueDate}</dd>
              </div>
            </dl>
          </Card>
        ))}
      </Cards>
      <ModalComponents
        // title="팀원 신청"
        buttons={[
          { mode: "OPTION2", name: "팀 페이지 이동", onClick: () => console.log("") },
          { mode: "MAIN", name: "가입 신청", onClick: () => console.log("") },
        ]}
      >
        <TeamListDetail />
      </ModalComponents>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  padding-bottom: calc(88px + var(--env-sab) + 12px);
`;
const Floating = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 5;
`;
const AddTeamButton = styled.button`
  ${FONTS.MD1}
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 16px var(--env-sab);
  padding: 12px 24px;
  border-radius: 24px;
  background-color: var(--main);
  color: var(--gray0);
  svg {
    fill: var(--gray0);
  }
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
const Card = styled(BasicWhiteCard)`
  ${FONTS.MD1W500};
  font-weight: 400;
  text-align: left;
  border: 1px solid var(--gray200);
  box-shadow: 0 6px 12px 0 rgba(112, 144, 178, 0.08), 0 2px 4px 0 rgba(112, 144, 178, 0.06);
  ${CARD_ACTIVE};

  .recruit-detail {
    display: flex;
    flex-direction: column;
    gap: 4px;
    ${FONTS.MD2};
    font-weight: 400;
    color: var(--gray600);
  }
`;

const CardHeader = styled.div`
  display: inline-flex;
  margin-bottom: 12px;
  align-items: center;
  gap: 8px;
  ${FONTS.MD1W500};

  h3 {
    display: inline-flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 600;
    gap: 6px;
  }
  .recruit-status {
    ${FONTS.MD2};
    font-size: 1.3rem;
    line-height: 1.25rem;
    padding: 4px 5px;
    border-radius: 4px;
    background-color: rgba(160, 188, 248, 0.3);
    color: var(--main);

    &.FINISHED {
      background-color: var(--gray200);
      color: var(--gray700);
    }
  }

  img {
    display: inline-block;
    padding: 3px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--background-light);
    border: 1px solid var(--gray300);
    overflow: hidden;
    object-fit: cover;
  }
`;

const Filter = styled.div`
  display: flex;
  padding: 6px 0;
  justify-content: space-between;
`;

export default TeamList;
