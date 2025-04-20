"use client";
import React from "react";
import { useHeader } from "@/hook/useHeader";

import { baseContainer } from "@/styles/container.css";
import {
  settingsHeaderProfileImage,
  settingsMyInfoFormWrapper,
  settingsMyInfoHeaderProfile,
} from "../_components/userSetting.css";
import PersonIcon from "@/assets/icon/common/filled/Person.svg";
import { fonts } from "@/styles/fonts.css";
import { BasicInput } from "@/components/common/input/BaseInput";

function MySettingInfo() {
  useHeader({
    title: "내 정보 관리",
    subActions: {
      name: "저장",
      action: () => {},
    },
    options: {
      titleAlign: "center",
    },
  });
  return (
    <form className={baseContainer}>
      <div className={settingsMyInfoHeaderProfile}>
        <div className={settingsHeaderProfileImage}>
          <PersonIcon width={24} height={24} fill="var(--gray300)" />
        </div>
        <div className="profile">
          <p className={fonts.body3.medium} style={{ color: "var(--gray700)" }}>
            사용자
          </p>
          <p className={fonts.body4.regular} style={{ color: "var(--gray400)" }}>
            @test
          </p>
        </div>
      </div>
      <div className={settingsMyInfoFormWrapper}>
        <BasicInput type="text" title="이름" disabled />
        <BasicInput type="text" title="생년월일" disabled />
        <BasicInput type="text" title="연락처" />
      </div>
    </form>
  );
}

export default MySettingInfo;
