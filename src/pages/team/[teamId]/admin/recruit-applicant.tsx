import React, { useState } from "react";
import styled from "@emotion/styled";
import useBgWhite from "@/hook/useBgWhite";
import { usePageTitle } from "@/hook/usePageTitle";
import useModal from "@/hook/useModal";

import { countDayDiff, formattedDate } from "@/util/date";
import { BaseContainer } from "@/components/common/Container";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import { FONTS } from "@/styles/common";
import { BasicInput } from "@/components/common/Input";
import { TEAM_APPLY_LIST } from "@/constants/mock/TEAM_APPLY";

import CheckIcon from "@/assets/icon/global/CheckIcon.svg";
import BottomArrowIcon from "@/assets/icon/arrow/BottomArrow.svg";
import { TextArea } from "@/components/common/TextArea";

function RecruitApplicant() {
  useBgWhite();
  usePageTitle({
    subTitle: "JUMP",
    title: "가입 신청 목록",
  });
  const { showModal: showAcceptModal, ModalComponents: AcceptModal } = useModal();
  const { showModal: showDenyModal, ModalComponents: DenyModal } = useModal();

  return (
    <>
      <Container>
        <div className="search-wrapper">
          <BasicInput type="text" search placeholder="이름으로 검색할 수 있어요" />
        </div>
        <List>
          {TEAM_APPLY_LIST.map((player) => (
            <li key={player.playerId}>
              <input type="checkbox" aria-disabled id={`player-${player.playerId}`} />
              <PlayerInner htmlFor={`player-${player.playerId}`} role="button">
                <ProfileImage></ProfileImage>
                <Name>
                  {10 + countDayDiff(player.applyDate) < 6 && (
                    <p className="deny">{10 + countDayDiff(player.applyDate)}일 뒤 자동 거절</p>
                  )}
                  <p className="player-name">{player.name}</p>
                  <p className="player-tags">
                    <Badge type="gray">{player.birth.split("-")[0]}년생</Badge>
                    <Badge type="main">
                      {player.univ}
                      {player.certificated && <CheckIcon />}
                    </Badge>
                  </p>
                </Name>
                <i>
                  <BottomArrowIcon />
                </i>
              </PlayerInner>
              <PlayerDetail>
                <p className="introduce">{player.introduce}</p>
                <div className="sub-details">
                  <div className="sub-detail">
                    <strong>신청일</strong>
                    <p>
                      {formattedDate(player.applyDate, {
                        displayDateType: ".",
                        displayDayName: "hide",
                        displayYear: "always",
                        displayTime: "hide",
                      })}
                    </p>
                  </div>
                  <div className="sub-detail">
                    <strong>최근 수상</strong>
                    <p>
                      {player.recentRank.title} {player.recentRank.rank}
                    </p>
                  </div>
                  <div className="sub-detail">
                    <strong>활동 팀</strong>
                    <p className="active-team-list">
                      {player.activeTeam.map((team, idx) => (
                        <span key={idx}>
                          {team.teamName} <span className="team-sports">{team.sports}</span>
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="buttons">
                  <Button type="button" flex={1} mode="WARN" autoHeight onClick={() => showDenyModal()}>
                    거절
                  </Button>
                  <Button type="button" flex={2} mode="MAIN" autoHeight onClick={() => showAcceptModal()}>
                    수락
                  </Button>
                </div>
              </PlayerDetail>
            </li>
          ))}
        </List>
      </Container>
      <AcceptModal
        title="가입 수락"
        buttons={[
          {
            mode: "MAIN",
            name: "확인",
            onClick: (close) => {
              close();
            },
          },
        ]}
      >
        <TextArea title="환영 메시지" maxLength={50} displayLength />
        <BasicInput
          type="number"
          title="기수"
          information={{ text: "기수제로 운영되는 팀은 필수로 입력해야 해요." }}
          required
        />
      </AcceptModal>
      <DenyModal
        title="가입 거절"
        buttons={[
          {
            mode: "MAIN",
            name: "확인",
            onClick: (close) => {
              close();
            },
          },
        ]}
      >
        <TextArea title="거절 메시지" maxLength={50} displayLength />
      </DenyModal>
    </>
  );
}

const Container = styled(BaseContainer)`
  padding-bottom: calc(24px + var(--env-sab));
  div.search-wrapper {
    margin: 0 0 20px;
  }
`;

const PlayerInner = styled.label`
  cursor: pointer;
  user-select: none;
  display: flex;
  max-height: 60px;
  align-items: center;
  gap: 16px;

  i > svg {
    width: 24px;
    height: 24px;
    fill: var(--gray600);
  }

  &:focus {
    background-color: var(--gray50);
  }
`;
const ProfileImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--gray100);
`;
const Name = styled.div`
  flex: 1;
  p.deny {
    font-size: 1.3rem;
    line-height: 1.6rem;
    font-weight: 500;
    color: var(--point);
  }
  p.player-name {
    ${FONTS.MD1};
    margin-bottom: 4px;
  }
  p.player-tags {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--gray600);
    span {
      margin-right: 4px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;
const PlayerDetail = styled.div`
  display: flex;
  overflow: hidden;
  height: 0px;
  padding: 4px;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 0.25s, height 0.2s;

  p.introduce {
    ${FONTS.MD2};
    margin: 12px 0 8px;
    font-size: 1.3rem;
    font-weight: 400;
    padding: 8px 12px;
    background-color: rgba(var(--sub2-rgb), 0.5);
    border-radius: 5px;
  }
  div.sub-details {
    display: flex;
    margin: 0 2px;
    flex-direction: column;
    gap: 6px;
  }
  div.sub-detail {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin: 0 4px;
    strong {
      ${FONTS.MD3};
      font-weight: 600;
      color: var(--gray600);
    }
    p {
      ${FONTS.MD2};
      font-weight: 400;
      color: var(--gray900);
    }
    p.active-team-list {
      display: inline-flex;
      gap: 6px;
      & > span {
        display: inline-flex;
        align-items: center;
        gap: 2px;
      }

      span.team-sports {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--main);
      }
    }
  }
  div.buttons {
    margin-top: 12px;
    display: flex;
    gap: 10px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  input {
    display: none;
  }
  li {
    transition: all 0.3s;
  }
  li:has(input:checked) {
    margin: 10px 8px;
    padding: 16px 12px;
    border-radius: 12px;
    box-shadow: 0 0 12px 4px var(--gray100);
    transform: scale(1.05);
  }
  input:checked + ${PlayerInner} > i > svg {
    transform: rotate(180deg);
  }
  input:checked + ${PlayerInner} + ${PlayerDetail} {
    height: 192px;
    opacity: 1;
  }
`;

export default RecruitApplicant;
