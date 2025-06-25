"use client";
import React from "react";
import clsx from "clsx";
import { useHeader } from "@/hook/useHeader";
import { useForm } from "react-hook-form";
import {
  baseContainerPaddingTop,
  baseDividedLineChild,
  flexColumnGap20,
  flexColumnGap24,
  flexColumnGap4,
  flexRowGap10,
} from "@/styles/container.css";
import { fonts } from "@/styles/fonts.css";
import { ToggleSwitch } from "@/components/common/input/ToggleSwitch";
import { settingsMyNotificationItem } from "../_components/userSetting.css";

function NotificationSetting() {
  const { register } = useForm();
  useHeader({
    title: "알림 설정",
    options: { titleAlign: "center" },
    subActions: {
      name: "저장",
      action: () => {},
    },
  });

  const notificationList = [
    {
      title: "새로운 일정",
      description: "팀에서 업로드되는 새로운 일정을 알려드려요.",
      registerName: "newSchedule",
    },
    {
      title: "투표",
      description: "팀에서 업로드되는 일정 참여 여부에 대해 알려드려요.",
      registerName: "vote",
    },
    {
      title: "공지사항",
      description: "플레이어메이커의 다양한 공지사항을 알려드려요.",
      registerName: "serviceNotice",
    },
    {
      title: "팀 해체",
      description: "팀의 해체 정보에 대해 알려드려요.",
      registerName: "teamDissolution",
    },
    {
      title: "탈퇴, 추방 내역",
      description: "가입 되어있던 팀의 탈퇴 및 추방 내역에 대해 알려드려요.",
      registerName: "withdrawal",
    },
  ];
  return (
    <div className={clsx(baseContainerPaddingTop, flexColumnGap24)}>
      <div className={flexColumnGap4}>
        <p className={fonts.body2.semibold} style={{ color: "var(--gray900)" }}>
          정보 알림
        </p>
        <p className={fonts.body4.regular} style={{ color: "var(--gray700)" }}>
          내 활동에 대한 알림을 보내드려요.
        </p>
      </div>
      <div className={baseDividedLineChild} />
      <div className={flexColumnGap20}>
        {notificationList.map((noti) => (
          <div key={noti.registerName} className={clsx(settingsMyNotificationItem, flexRowGap10)}>
            <div style={{ flex: 1 }} className={flexColumnGap4}>
              <p className={fonts.body4.semibold} style={{ color: "var(--gray700)" }}>
                {noti.title}
              </p>
              <p className={fonts.caption1.regular} style={{ color: "var(--gray400)" }}>
                {noti.description}
              </p>
            </div>
            <ToggleSwitch size="large" {...register(noti.registerName)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationSetting;
