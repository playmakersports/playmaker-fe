import React, { useRef, useState } from "react";
import styled from "@emotion/styled";

import useStickyMoment from "@/hook/useStickyMoment";
import { BaseContainer } from "@/components/common/Container";
import { usePageTitle } from "@/hook/usePageTitle";
import { useRouter } from "next/router";
import MainTab from "@/components/Main/MainTab";
import { SUPPORT_SPORTS } from "@/constants/mock/SPORTS";
import { BasicInput } from "@/components/common/Input";
import { BasicWhiteCard } from "@/components/common/Card";
import { CARD_ACTIVE, FONTS } from "@/styles/common";
import { NOW_RECRUIT_LIST } from "@/constants/mock/RECRUIT";
import Button from "@/components/common/Button";

function Recruit() {
  usePageTitle({ title: "모집 중인 팀" });
  const sportsTabRef = useRef<HTMLDivElement>(null);
  useStickyMoment(sportsTabRef);
  const router = useRouter();
  const targetSports = router.query.sports as string;
  const [activeTab, setActiveTab] = useState(targetSports ?? SUPPORT_SPORTS[0].value);
  const [searchValue, setSearchValue] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");

  return (
    <Container>
      <TabWrapper ref={sportsTabRef}>
        <MainTab
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
          placeholder="팀 검색"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          delButton={true}
        />
      </Contents>
      <Cards>
        {NOW_RECRUIT_LIST.map((item) => (
          <Card
            as="button"
            key={item.teamId}
            className={selectedTeam === item.teamId ? "selected" : ""}
            onClick={(e) => {
              setSelectedTeam(item.teamId);
              e.currentTarget.scrollIntoView({
                block: "center",
                behavior: "smooth",
              });
            }}
          >
            <h2>{item.teamName}</h2>
            <dl className="recruit-detail">
              <div>
                <dt>장소</dt>
                <dd>{item.place}</dd>
              </div>
              <div>
                <dt>일정</dt>
                <dd>{item.date}</dd>
              </div>
              <div>
                <dt>시간</dt>
                <dd>
                  {item.startTime} ~ {item.endTime}
                </dd>
              </div>
              <div>
                <dt>인원</dt>
                <dd>{item.member}명</dd>
              </div>
              <div>
                <dt>세부규정</dt>
                <dd>{item.detailRule}</dd>
              </div>
            </dl>
          </Card>
        ))}
      </Cards>
      <Bottom>
        <Button
          type="button"
          flex={1}
          mode="OPTION2"
          onClick={() => {
            console.log("신청");
          }}
        >
          모집 올리기
        </Button>
        <Button
          type="button"
          flex={1}
          mode={selectedTeam !== "" ? "MAIN" : "OPTION1"}
          disabled={selectedTeam === ""}
          onClick={() => {
            console.log("신청");
          }}
        >
          신청
        </Button>
      </Bottom>
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

  &.stuck {
    border-bottom: 1px solid rgb(var(--gray-h6));
    padding-bottom: 2px;
    background-color: var(--background);
  }
`;
const Contents = styled.section`
  margin-top: 20px;
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
  border: 2px solid transparent;
  ${CARD_ACTIVE};

  h2 {
    font-size: 1.8rem;
  }
  .recruit-detail {
    margin-top: 12px;
    div {
      margin-top: 2px;
      display: flex;
      dt {
        flex: 0.35;
        font-weight: 600;
      }
      dd {
        flex: 1;
      }
    }
  }

  &.selected {
    border: 2px solid var(--main);
    transform: scale(1.02);
    box-shadow: 0 0 10px 6px var(--box-shadow);
  }
`;

const Bottom = styled.div`
  position: fixed;
  display: flex;
  gap: 8px;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px 16px calc(20px + env(safe-area-inset-bottom));
  background-color: ${({ theme }) => theme.background};
  transition: transform 0.2s;
`;

export default Recruit;
