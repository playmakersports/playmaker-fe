"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import clsx from "clsx";
import { isPast } from "date-fns";
import useModal from "@/hook/useModal";
import { useForm } from "react-hook-form";
import { useToast } from "@/hook/useToast";

import { fonts } from "@/styles/fonts.css";
import {
  flexAlignCenter,
  flexColumnGap12,
  flexColumnGap16,
  flexColumnGap20,
  flexColumnGap30,
  flexColumnGap4,
  flexRowGap4,
  flexRowGap8,
  flexSpaceBetween,
} from "@/styles/container.css";
import DropdownInput from "@/components/common/input/DropdownInput";
import { ToggleSwitch } from "@/components/common/input/ToggleSwitch";
import DateInput from "@/components/common/DateInput";
import TimeInput from "@/components/common/input/TimeInput";
import TeamFindList from "../../_components/TeamFindList";

import CalendarIcon from "@/assets/icon/common/outlined/Calendar.svg";
import LocationPinIcon from "@/assets/icon/common/outlined/LocationPin.svg";
import ClockIcon from "@/assets/icon/common/outlined/Clock.svg";
import RightArrow from "@/assets/icon/arrow/RightArrow.svg";

function NewSchedule() {
  const router = useRouter();
  const teamId = useParams()["teamId"];
  const { ModalComponents, showModal } = useModal();
  const { ModalComponents: TeamListModalComponents, showModal: showTeamListModal } = useModal();
  const { register, watch, setValue } = useForm();
  const toast = useToast();
  const isOpenRef = useRef(false);

  const [category, setCategory] = useState("훈련");
  const [selectedTeam, setSelectedTeam] = useState({ teamId: "", teamName: "" });
  const formDate = watch("date");
  const formActiveVote = watch("activeVote");

  useEffect(() => {
    if (!isOpenRef.current) {
      showModal();
      isOpenRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (isPast(formDate) && formActiveVote) {
      toast.trigger("과거 일정으로 참석 투표를 할 수 없습니다.", { type: "error" });
      setTimeout(() => {
        setValue("activeVote", false);
      }, 0);
    }
  }, [formDate, formActiveVote]);

  return (
    <>
      <ModalComponents
        onClose={() => {
          router.replace(`/team/${teamId}/schedule`);
        }}
        draggable="all"
        buttons={[
          { name: "취소", onClick: (close) => close(), mode: "gray", fillType: "outline" },
          {
            name: "저장",
            onClick: (close) => {
              close();
              toast.trigger("일정이 저장되었습니다.", { type: "success" });
            },
            mode: "primary",
            fillType: "default",
          },
        ]}
      >
        <div className={flexColumnGap20}>
          <div className={flexColumnGap12}>
            <DropdownInput
              size="small"
              placeholder="카테고리"
              value={category}
              onChange={setCategory}
              options={[
                { value: "훈련", name: "훈련" },
                { value: "교류전", name: "교류전" },
                { value: "팀 이벤트", name: "팀 이벤트" },
                // { value: "대회", name: "대회" },
              ]}
            />
            <div className={flexColumnGap4} style={{ gap: "8px", color: "var(--gray700)" }}>
              <input
                type="text"
                className={fonts.body1.semibold}
                {...register("title")}
                placeholder="일정 제목을 입력해 주세요"
              />
              <input
                type="text"
                className={fonts.body4.regular}
                {...register("description")}
                placeholder="일정 내용을 입력해 주세요"
              />
            </div>
          </div>

          <div className={flexColumnGap12}>
            <div className={clsx(flexRowGap8, fonts.body4.regular)} style={{ color: "var(--gray500)" }}>
              <CalendarIcon width={20} height={20} fill="var(--gray500)" />{" "}
              <DateInput
                bottomSheetHeader={{ title: "날짜 선택", description: "해당 날짜에 일정이 생성됩니다." }}
                plainStyle
                className={fonts.body4.regular}
                placeholder="날짜 선택"
                {...register("date")}
              />
            </div>
            <div className={clsx(flexRowGap8, fonts.body4.regular)} style={{ color: "var(--gray500)" }}>
              <LocationPinIcon width={20} height={20} fill="var(--gray500)" />
              <input type="text" className={fonts.body4.regular} {...register("location")} placeholder="장소 선택" />
            </div>
            <div className={clsx(flexRowGap8, fonts.body4.regular)} style={{ color: "var(--gray500)" }}>
              <ClockIcon width={20} height={20} fill="var(--gray500)" />

              <TimeInput
                bottomSheetTitle="시간 선택"
                bottomSheetDescription="일정이 시작될 시간을 입력해 주세요."
                placeholder="시간 선택"
                mode="bottom-sheet"
                {...register("time")}
                plainStyle
              />
            </div>
          </div>
          {category === "교류전" && (
            <>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "var(--gray200)",
                }}
              />
              <div className={clsx(flexAlignCenter, flexSpaceBetween, flexRowGap4)}>
                <span className={fonts.body4.medium}>대결 상대팀</span>
                <span className={flexAlignCenter} onClick={() => showTeamListModal()}>
                  <span className={fonts.body4.regular}>{selectedTeam.teamName}</span>
                  <RightArrow width={24} height={24} fill="var(--gray700)" />
                </span>
              </div>
            </>
          )}
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "var(--gray200)",
            }}
          />
          <div className={flexColumnGap16}>
            <div className={clsx(flexAlignCenter, flexSpaceBetween)}>
              <span className={fonts.body4.medium}>참석 여부 투표</span>
              <ToggleSwitch size="large" {...register("activeVote")} />
            </div>
            <div
              className={clsx(flexAlignCenter, flexSpaceBetween)}
              style={{ display: watch("activeVote") ? "flex" : "none" }}
            >
              <span className={fonts.body4.medium}>투표 마감 날짜</span>
              <span className={flexAlignCenter}>
                <DateInput
                  pickType="ONLY_FUTURE"
                  plainStyle
                  className={fonts.body4.regular}
                  style={{
                    cursor: "pointer",
                    width: "108px",
                    paddingRight: "28px",
                    marginRight: "-24px",
                    zIndex: 1,
                  }}
                  placeholder=""
                  {...register("voteEndDate")}
                />
                <RightArrow width={24} height={24} fill="var(--gray700)" />
              </span>
            </div>
          </div>
        </div>
      </ModalComponents>
      <TeamListModalComponents
        draggable="bar"
        title="대결 상대팀 검색"
        description="대결하고 싶은 상대팀을 검색하고, 선택해 주세요."
      >
        {(close) => (
          <div className={flexColumnGap30} style={{ gap: "32px", marginTop: "-12px" }}>
            <TeamFindList onChange={setSelectedTeam} closeModal={close} />
          </div>
        )}
      </TeamListModalComponents>
    </>
  );
}

export default NewSchedule;
