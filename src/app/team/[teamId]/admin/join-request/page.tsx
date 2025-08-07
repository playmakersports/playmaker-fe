"use client";
import React, { useRef } from "react";
import clsx from "clsx";
import { formatDate } from "date-fns";
import styled from "styled-components";
import { useHeader } from "@/hook/useHeader";
import { usePopup } from "@/components/common/global/PopupProvider";
import { useRouter, useParams } from "next/navigation";
import { useTeamJoinApprovePost, useTeamJoinRejectPost, useTeamJoinRequestGet } from "@/apis/hook/team";

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
import { useForm } from "react-hook-form";
import { useToast } from "@/hook/useToast";

function TeamJoinRequest() {
  useHeader({
    title: "가입 신청 목록",
  });

  const listRef = useRef<HTMLUListElement>(null);
  const toast = useToast();
  const popup = usePopup();
  const router = useRouter();
  const { teamId } = useParams();
  const { register, watch, setValue } = useForm();
  const selectedPlayers = watch("players") ?? [];

  const { data: requestPlayers, refetch } = useTeamJoinRequestGet(teamId as string);
  const { mutate: mutateApprove } = useTeamJoinApprovePost(
    teamId as string,
    typeof selectedPlayers === "string" ? [selectedPlayers] : selectedPlayers
  );
  const { mutate: mutateReject } = useTeamJoinRejectPost(
    teamId as string,
    typeof selectedPlayers === "string" ? [selectedPlayers] : selectedPlayers
  );

  const handleApplyAccept = async () => {
    if (selectedPlayers.length > 0) {
      const confirm = await popup?.confirm("가입 승인 시점부터 활동이 가능합니다.", {
        title: "가입을 승인하시겠어요?",
        showIcon: true,
        color: "primary",
        buttonText: { yes: "승인" },
      });

      if (confirm) {
        mutateApprove(
          { data: undefined },
          {
            onSuccess: () => {
              toast.trigger("가입을 승인했어요");
              setValue("players", []);
              refetch();
            },
          }
        );
      }
    }
  };

  const handleApplyReject = async () => {
    if (selectedPlayers.length > 0) {
      const confirm = await popup?.confirm("가입 거절 이후 7일간 재신청이 불가능합니다.", {
        title: "가입을 거절하시겠어요?",
        showIcon: true,
        color: "red",
        buttonText: { yes: "거절" },
      });

      if (confirm) {
        mutateReject(
          { data: undefined },
          {
            onSuccess: () => {
              toast.trigger("가입을 거절했어요");
              setValue("players", []);
              refetch();
            },
          }
        );
      }
    }
  };

  return (
    <section className={baseContainer}>
      <div
        className={clsx(flexRowGap10, flexAlignCenter, flexSpaceBetween)}
        style={{ height: "52px", padding: "10px 0" }}
      >
        {selectedPlayers.length > 0 ? (
          <div className={clsx(flexRowGap4, flexAlignCenter, fonts.body4.regular)}>
            <CheckIcon width={20} height={20} fill="var(--gray700)" />
            <p>
              <span className={fonts.body4.medium} style={{ color: "var(--primary500)" }}>
                {selectedPlayers.length}건
              </span>{" "}
              선택
            </p>
          </div>
        ) : (
          <div className={clsx(flexRowGap4, flexAlignCenter, fonts.body4.regular)}>
            <PeopleIcon width={20} height={20} fill="var(--gray700)" />
            {requestPlayers && requestPlayers?.length > 0 ? (
              <p>
                <span className={fonts.body4.medium} style={{ color: "var(--primary500)" }}>
                  {requestPlayers?.length}건
                </span>
                의 가입 신청이 있어요!
              </p>
            ) : (
              <p>가입 신청자 없음</p>
            )}
          </div>
        )}
        <div className={flexRowGap10}>
          <Button
            type="button"
            disabled={selectedPlayers.length === 0}
            mode="red"
            fillType="light"
            size="xsmall"
            onClick={handleApplyReject}
          >
            거절
          </Button>
          <Button
            type="button"
            disabled={selectedPlayers.length === 0}
            fillType="default"
            size="xsmall"
            onClick={handleApplyAccept}
          >
            승인
          </Button>
        </div>
      </div>

      <div className={innerChildContainer}>
        <div className={clsx(playersListTableRow, playersListTableHead)}>
          <div className={clsx(flexRowGap12, flexAlignCenter, playersListTableFlex1)}>
            <InputCheckbox id="allCheckedBox" size="MEDIUM" />
            프로필
          </div>
          <div className={playersListTableColumnDivider} data-header="true" />
          <div className={clsx(flexRowGap4, flexAlignCenter, playersListTableW70)}>경력</div>
        </div>
      </div>

      <ul ref={listRef}>
        {requestPlayers?.map((player) => (
          <PlayerItem key={player.memberId}>
            <div className="item-top">
              <InputCheckbox size="MEDIUM" className="player-select" value={player.memberId} {...register("players")} />
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
