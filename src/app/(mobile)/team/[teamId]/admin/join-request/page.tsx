"use client";
import React, { useRef, useState } from "react";
import clsx from "clsx";
import { formatDate } from "date-fns";
import styled from "styled-components";
import { useHeader } from "@/hook/useHeader";
import { usePopup } from "@/components/common/global/PopupProvider";
import useModal from "@/hook/useModal";
import { useRouter, useParams } from "next/navigation";
import { useTeamJoinRequestGet } from "@/apis/hook/team";

import { fonts } from "@/styles/fonts.css";
import {
  baseContainer,
  flexAlignCenter,
  flexRowGap10,
  flexRowGap12,
  flexRowGap4,
  flexSpaceBetween,
  innerChildContainer,
} from "@/styles/container.css";
import { FONTS } from "@/styles/common";

import { TextArea } from "@/components/common/TextArea";
import { InputCheckbox } from "@/components/common/input/SelectInput";
import Button from "@/components/common/Button";
import {
  playersListTableColumnDivider,
  playersListTableFlex1,
  playersListTableHead,
  playersListTableRow,
  playersListTableW70,
} from "../../players/_components/players.css";

import CheckIcon from "@/assets/icon/common/Check.svg";
import PeopleIcon from "@/assets/icon/common/outlined/People.svg";
import RightArrow from "@/assets/icon/arrow/RightArrow.svg";

function TeamJoinRequest() {
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();
  const [selected, setSelected] = useState<(number | null)[]>([]);
  const { teamId } = useParams();
  useHeader({
    title: "가입 신청 목록",
  });
  const popup = usePopup();
  const { showModal: showDenyModal, ModalComponents: DenyModal } = useModal();
  const { data } = useTeamJoinRequestGet(`${teamId}`);

  const players = data ?? [];
  const allChecked = players.length > 0 && players.every((player) => selected.includes(player.memberId));

  const handleSingleCheck = (id: number | null, checked: boolean) => {
    setSelected((prev) => (checked ? [...prev, id] : prev.filter((pid) => pid !== id)));
  };
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const allIds = players.map((p) => p.memberId);
      setSelected(allIds);
    } else {
      setSelected([]);
    }
  };

  const handleApplyAccept = () => {
    popup?.confirm("가입 승인 시점부터 활동이 가능합니다.", {
      title: "가입을 승인하시겠어요?",
      showIcon: true,
      color: "primary",
      buttonText: { yes: "네, 승인합니다" },
    });
  };
  return (
    <>
      <section className={baseContainer}>
        <div
          className={clsx(flexRowGap10, flexAlignCenter, flexSpaceBetween)}
          style={{ height: "52px", padding: "10px 0" }}
        >
          {selected.length > 0 ? (
            <div className={clsx(flexRowGap4, flexAlignCenter, fonts.body4.regular)}>
              <CheckIcon width={20} height={20} fill="var(--gray700)" />
              <p>
                <span className={fonts.body4.medium} style={{ color: "var(--primary500)" }}>
                  {selected.length}건
                </span>{" "}
                선택
              </p>
            </div>
          ) : (
            <div className={clsx(flexRowGap4, flexAlignCenter, fonts.body4.regular)}>
              <PeopleIcon width={20} height={20} fill="var(--gray700)" />
              <p>
                <span className={fonts.body4.medium} style={{ color: "var(--primary500)" }}>
                  {players.length}건
                </span>
                의 가입 신청이 있어요!
              </p>
            </div>
          )}
          <div className={flexRowGap10}>
            <Button type="button" mode="red" fillType="light" size="xsmall" onClick={showDenyModal}>
              거절
            </Button>
            <Button type="button" fillType="default" size="xsmall" onClick={handleApplyAccept}>
              승인
            </Button>
          </div>
        </div>

        <div className={innerChildContainer}>
          <div
            className={clsx(playersListTableRow, playersListTableHead)}
            // ref={headRef}
          >
            <div className={clsx(flexRowGap12, flexAlignCenter, playersListTableFlex1)}>
              <InputCheckbox
                id="allCheckedBox"
                size="MEDIUM"
                checked={allChecked}
                onChange={(e) => handleAllCheck(e.target.checked)}
              />
              프로필
            </div>
            <div className={playersListTableColumnDivider} data-header="true" />
            <div className={clsx(flexRowGap4, flexAlignCenter, playersListTableW70)}>경력</div>
          </div>
        </div>

        <ul ref={listRef}>
          {players.map((player) => (
            <PlayerItem key={player.memberId}>
              <div className="item-top">
                <InputCheckbox
                  size="MEDIUM"
                  className="player-select"
                  checked={selected.includes(player.memberId)}
                  onChange={(e) => handleSingleCheck(player.memberId, e.target.checked)}
                />
                <div className={flexAlignCenter} style={{ flex: 1 }}>
                  <div className={flexRowGap12} style={{ flex: 1 }}>
                    <ProfileImage></ProfileImage>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <Name onClick={() => router.push(`/p/${player.memberId}`)}>
                        <p className="player-name">{player.memberName}</p>
                        <RightArrow width={20} height={20} fill="var(--gray700)" />
                      </Name>
                      <p className={fonts.caption1.medium} style={{ color: "var(--gray400)" }}>
                        {formatDate(player.requestDate, "yyyy.MM.dd HH:mm")} 신청
                      </p>
                    </div>
                  </div>
                  <div className={clsx(fonts.body4.medium, playersListTableW70)}>10년</div>
                </div>
              </div>
              <div className="item-intro">{player.message}</div>
            </PlayerItem>
          ))}
        </ul>
      </section>
      <DenyModal
        title="가입 거절"
        buttons={[
          {
            mode: "primary",
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

const PlayerItem = styled.li`
  user-select: none;
  padding: 20px 0;
  border-bottom: 1px solid var(--gray200);
  div.item-top {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  div.item-intro {
    ${FONTS.body4("regular")};
    margin-top: 16px;
    margin-left: 32px;
    background-color: var(--gray50);
    border-radius: 8px;
    padding: 10px 12px;
    color: var(--gray600);
  }
`;
const ProfileImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: var(--gray100);
`;
const Name = styled.div`
  ${FONTS.body3("medium")};
  display: flex;
  align-items: center;
`;

export default TeamJoinRequest;
