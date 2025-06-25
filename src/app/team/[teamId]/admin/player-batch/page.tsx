"use client";
import React, { useRef, useState } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { useHeader } from "@/hook/useHeader";
import useModal from "@/hook/useModal";
import { useRouter, useParams } from "next/navigation";

import { fonts } from "@/styles/fonts.css";
import {
  baseCardContainer,
  baseContainer,
  flexAlignCenter,
  flexCenterJA,
  flexRowGap10,
  flexRowGap12,
  flexRowGap4,
  flexRowGap8,
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
import MinusIcon from "@/assets/icon/common/Minus.svg";
import PlusIcon from "@/assets/icon/common/Plus.svg";
import { colors } from "@/styles/color.css";
import { NumberFlowInput } from "@/components/common/input/NumberFlowInput";
import { useToast } from "@/hook/useToast";

function TeamPlayerBatch() {
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();
  const toast = useToast();
  const [batchNum, setBatchNum] = useState(1);
  const [selected, setSelected] = useState<(number | string | null)[]>([]);
  const { teamId } = useParams();
  useHeader({
    title: "기수 설정",
  });
  const { showModal, ModalComponents } = useModal();
  //   const { data } = useTeamJoinRequestGet(`${teamId}`);

  const players = [{ teamId: "123", memberId: "123", memberName: "홍길동", batch: 23 }];
  const allChecked = players.length > 0 && players.every((player) => selected.includes(player.memberId));

  const handleSingleCheck = (id: number | string | null, checked: boolean) => {
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

  const handleBatchModal = () => {
    showModal();
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
                  {selected.length}명
                </span>{" "}
                선택
              </p>
            </div>
          ) : (
            <div className={clsx(flexRowGap4, flexAlignCenter, fonts.body4.regular)}>
              <PeopleIcon width={20} height={20} fill="var(--gray700)" />
              <p>
                <span className={fonts.body4.medium} style={{ color: "var(--primary500)" }}>
                  {players.length}명
                </span>
                의 팀원이 있어요
              </p>
            </div>
          )}
          <div className={flexRowGap10}>
            <Button type="button" fillType="default" size="xsmall" onClick={handleBatchModal}>
              기수 설정
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
                      <p className={clsx(fonts.caption1.semibold, "position", colors.primary500, flexRowGap4)}>
                        23기 회장
                      </p>
                      <Name onClick={() => router.push(`/p/${player.memberId}`)}>
                        <p className="player-name">{player.memberName}</p>
                        <RightArrow width={20} height={20} fill="var(--gray700)" />
                      </Name>
                    </div>
                  </div>
                  <div className={clsx(fonts.body4.medium, playersListTableW70)}>10년</div>
                </div>
              </div>
            </PlayerItem>
          ))}
        </ul>
      </section>
      <ModalComponents
        draggable="all"
        title="기수 설정"
        description="선택한 회원들의 기수를 입력해 주세요."
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
        <div className={clsx(flexRowGap10, flexCenterJA)} style={{ marginBottom: "12px" }}>
          <NumberButton
            type="button"
            disabled={batchNum <= 1}
            onClick={() =>
              setBatchNum((prev) => {
                if (prev > 1) return prev - 1;
                return 1;
              })
            }
          >
            <MinusIcon />
          </NumberButton>
          <div className={baseCardContainer} style={{ width: "55%" }}>
            <div className={clsx(fonts.head5.medium, flexCenterJA, flexRowGap4)}>
              <div className={flexCenterJA} style={{ minWidth: "42px" }}>
                <NumberFlowInput
                  min={1}
                  width="flexible"
                  value={batchNum}
                  onChange={(e) => setBatchNum(+e.target.value)}
                />
              </div>
              <span className={clsx(fonts.body1.regular, colors.gray500)}>기</span>
            </div>
          </div>
          <NumberButton type="button" onClick={() => setBatchNum((prev) => prev + 1)}>
            <PlusIcon />
          </NumberButton>
        </div>
      </ModalComponents>
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

const NumberButton = styled.button`
  margin: 0 2px;
  width: 36px;
  height: 36px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--gray50);
  border: 1px solid var(--gray200);
  svg {
    width: 100%;
    height: 100%;
    fill: var(--gray700);
  }
  &:active {
    background-color: var(--gray200);
    transition: scale 0.2s ease-in-out;
    svg {
      scale: 0.9;
    }
  }
  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
    &:active {
      background-color: var(--gray50);
    }
  }
`;

export default TeamPlayerBatch;
