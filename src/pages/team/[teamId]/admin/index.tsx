import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { usePageTitle } from "@/hook/usePageTitle";
import { differenceInCalendarDays } from "date-fns";
import { keyframes } from "@emotion/react";
import useModal from "@/hook/useModal";

import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import { TEAM_INFO_MOCK } from "@/constants/mock/TEAM";
import { BaseContainer } from "@/components/common/Container";
import ProfileImage from "@/components/Team/ProfileImage";
import AdminList from "@/components/Team/AdminList";
import useBgWhite from "@/hook/useBgWhite";
import ToggleInput from "@/components/common/ToggleInput";

function AdminIndex() {
  const [countFounded, setCountFounded] = useState(0);
  const { showModal: showPublicTeamModal, ModalComponents: PublicTeamModal } = useModal();
  const [publicTeam, setPublicTeam] = useState(true);

  useBgWhite();
  usePageTitle({
    title: "팀 관리",
  });
  const foundedDate = "2023-10-20";
  useEffect(() => {
    setCountFounded(differenceInCalendarDays(new Date(), foundedDate));
  }, []);

  return (
    <>
      <Container>
        <Header>
          <ProfileImage imgSrc={TEAM_INFO_MOCK.logo} />
          <TeamInfo>
            <h2>{TEAM_INFO_MOCK.teamName}</h2>
            <TeamInfoLabel>
              <span className="team-credit">Premium</span>
              <span className="team-univ">{TEAM_INFO_MOCK.univName}</span>
            </TeamInfoLabel>
            <div className="team-description">
              <p>
                <span>Since {foundedDate.split("-").join(".")}</span>
                <span>우리가 달려온 {countFounded}일</span>
              </p>
            </div>
          </TeamInfo>
        </Header>
        <TeamInfoSettings>
          <button type="button">기본 정보 수정</button>
          <button type="button">팀원 관리</button>
          <button type="button" onClick={showPublicTeamModal}>
            팀 공개 여부
          </button>
        </TeamInfoSettings>
        <AdminList />
      </Container>
      <PublicTeamModal
        buttons={[
          {
            mode: "OPTION1",
            name: "닫기",
            onClick: (close) => {
              close();
            },
          },
        ]}
      >
        <PublicHandlerContainer>
          <div className="handler-wrapper">
            <p>팀 공개 여부</p>
            <ToggleInput toggled={publicTeam} setToggle={setPublicTeam} />
          </div>
          <p className="description">
            비공개 팀이 되면 다른 사용자는 우리 팀을 볼 수 없으며, 아래의 제한이 생겨요.
            <ul className="information">
              <li>초대 링크로만 새 팀원을 영입할 수 있어요.</li>
              <li>다른 팀은 우리 팀에 교류전 제안을 할 수 없어요.</li>
              <li>단, 우리 팀에서 교류전을 제안하면 상대 팀은 우리 팀을 볼 수 있어요.</li>
              <li>팀 순위에서 제외돼요.</li>
            </ul>
          </p>
        </PublicHandlerContainer>
      </PublicTeamModal>
    </>
  );
}

const Container = styled(BaseContainer)`
  padding-bottom: calc(20px + var(--env-sab));
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const foundedAnimate = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  20% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(0, -1.8rem, 0);
  }
  70% {
    transform: translate3d(0, -1.8rem, 0);
  }
  75% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const TeamInfo = styled.div`
  display: flex;
  margin-top: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  h2 {
    ${FONTS.HEAD1};
  }
  div.team-description {
    ${FONTS.MD3};
    color: var(--gray700);
    height: 1.8rem;
    overflow: hidden;
    p {
      animation: ${foundedAnimate} 9.5s infinite;
      will-change: transform;
    }
    span {
      display: block;
      text-align: center;
    }
  }
`;
const TeamInfoLabel = styled.div`
  display: flex;
  gap: 4px;
  font-weight: 400;
  font-size: 1.4rem;
  color: var(--gray700);

  span {
    display: inline-flex;
    align-items: center;
    padding: 4px 8px;
    font-weight: 600;
    border-radius: 12px;
  }
  .team-credit {
    background-color: rgba(var(--point-rgb), 0.19);
    color: #f16616;
  }
  .team-univ {
    gap: 2px;
    background-color: rgba(var(--main-rgb), 0.1);
    color: var(--main);
    &::after {
      content: "✓";
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: var(--main);
      color: var(--gray0);
      font-size: 1.2rem;
      opacity: 0.8;
    }
  }
`;
const TeamInfoSettings = styled.div`
  display: flex;
  margin: 16px -4px 0;
  padding: 0 2px;
  justify-content: center;
  align-items: center;
  background-color: var(--gray200);
  border-radius: 10px;
  & > button {
    user-select: none;
    position: relative;
    ${FONTS.MD2};
    flex: 1;
    padding: 12px 0;
    font-weight: 400;
    ${BUTTON_ACTIVE("var(--gray300)")}

    &::after {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      display: block;
      margin: 12px 0;
      width: 1px;
      height: calc(100% - 24px);
      background-color: var(--gray400);
    }
    &:last-of-type {
      &::after {
        width: 0;
      }
    }
  }
`;

const PublicHandlerContainer = styled.div`
  ${FONTS.MD1};
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  div.handler-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      flex: 1;
    }
  }
  p.description {
    ${FONTS.MD2};
    font-weight: 400;
    color: var(--gray700);
    word-break: keep-all;
    ul.information {
      display: flex;
      flex-direction: column;
      gap: 3px;
      margin: 10px 0 0 10px;
      padding: 0 0 0 6px;
      color: var(--gray600);
      list-style-type: disc;
    }
  }
`;

export default AdminIndex;
