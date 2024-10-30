import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { usePageTitle } from "@/hook/usePageTitle";
import useStickyMoment from "@/hook/useStickyMoment";
import useModal from "@/hook/useModal";
import useBgWhite from "@/hook/useBgWhite";

import { CARD_ACTIVE, FONTS } from "@/styles/common";
import { NOW_RECRUIT_LIST } from "@/constants/mock/RECRUIT";
import MainTab from "@/components/Main/MainTab";
import { BaseContainer } from "@/components/common/Container";
import { SUPPORT_SPORTS } from "@/constants/mock/SPORTS";
import { BasicInput } from "@/components/common/Input";
import { BasicWhiteCard } from "@/components/common/Card";

import ArticlePlus from "@/assets/icon/global/ArticlePlus.svg";

function Recruit() {
  useBgWhite();
  usePageTitle({
    title: "팀 목록",
    subIcons: [{ svgIcon: <ArticlePlus />, linkTo: "/team/create", description: "팀 만들기" }],
  });
  const { ModalComponents, showModal } = useModal();
  const sportsTabRef = useRef<HTMLDivElement>(null);
  useStickyMoment(sportsTabRef);
  const router = useRouter();
  const targetSports = router.query.sports as string;
  const [activeTab, setActiveTab] = useState(targetSports ?? SUPPORT_SPORTS[0].value);
  const [searchValue, setSearchValue] = useState("");

  const RECRUIT_STATUS: Record<string, string> = {
    PENDING: "모집중",
    FINISHED: "모집완료",
    NO_RECRUIT: "",
  };
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
      <Cards>
        {NOW_RECRUIT_LIST.map((item) => (
          <Card as="button" key={item.teamId} onClick={showModal}>
            <CardHeader>
              <img src={item.teamLogo} alt={item.teamName} />
              <h2>
                {item.teamName}
                {item.status !== "NO_RECRUIT" && (
                  <span className={`recruit-status ${item.status}`}>{RECRUIT_STATUS[item.status]}</span>
                )}
              </h2>
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
        buttons={[
          { mode: "OPTION2", name: "팀 페이지 이동", onClick: () => console.log("") },
          { mode: "MAIN", name: "입단 신청", onClick: () => console.log("") },
        ]}
      >
        팀 정보
      </ModalComponents>
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
const Card = styled(BasicWhiteCard)`
  ${FONTS.MD1W500};
  font-weight: 400;
  text-align: left;
  border: 2px solid transparent;
  ${CARD_ACTIVE};

  .recruit-detail {
    display: flex;
    flex-direction: column;
    gap: 4px;
    div {
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
`;

const CardHeader = styled.div`
  display: inline-flex;
  margin-bottom: 12px;
  align-items: center;
  gap: 8px;
  ${FONTS.MD1W500};

  h2 {
    display: inline-flex;
    align-items: center;
    font-size: 1.8rem;
    gap: 6px;
  }
  .recruit-status {
    ${FONTS.MD1};
    font-size: 1.3rem;
    line-height: 1.25rem;
    padding: 3px 4px;
    border-radius: 4px;
    border: 1px solid var(--main);
    color: var(--main);

    &.FINISHED {
      border: 1px solid var(--gray600);
      color: var(--gray600);
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

export default Recruit;
