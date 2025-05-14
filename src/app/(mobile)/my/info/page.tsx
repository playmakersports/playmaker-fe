"use client";
import React from "react";
import { useHeader } from "@/hook/useHeader";

import { baseContainer, flexAlignCenter, flexRowGap16 } from "@/styles/container.css";
import {
  settingsHeaderProfileImage,
  settingsMyInfoFormWrapper,
  settingsMyInfoHeaderProfile,
} from "../_components/userSetting.css";
import PersonIcon from "@/assets/icon/common/filled/Person.svg";
import { fonts } from "@/styles/fonts.css";
import { BasicInput } from "@/components/common/input/BaseInput";
import { ToggleSwitch } from "@/components/common/input/ToggleSwitch";
import InputWrapper from "@/components/common/input/InputWrapper";
import { TextArea } from "@/components/common/TextArea";

function MySettingInfo() {
  useHeader({
    title: "내 프로필 수정",
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
        <div className={flexRowGap16}>
          <div style={{ flex: 1 }}>
            <BasicInput type="text" title="이름" disabled />
          </div>
          <InputWrapper title="공개">
            <div
              className={flexAlignCenter}
              style={{
                display: "flex",
                height: "40px",
              }}
            >
              <ToggleSwitch size="large" showIcon />
            </div>
          </InputWrapper>
        </div>
        <div className={flexRowGap16}>
          <div style={{ flex: 1 }}>
            <BasicInput type="text" title="생년월일" disabled />
          </div>
          <InputWrapper title="공개">
            <div
              className={flexAlignCenter}
              style={{
                display: "flex",
                height: "40px",
              }}
            >
              <ToggleSwitch size="large" showIcon />
            </div>
          </InputWrapper>
        </div>
        <div className={flexRowGap16}>
          <div style={{ flex: 1 }}>
            <BasicInput type="text" title="연락처" />
          </div>
          <InputWrapper title="공개">
            <div
              className={flexAlignCenter}
              style={{
                display: "flex",
                height: "40px",
              }}
            >
              <ToggleSwitch size="large" showIcon />
            </div>
          </InputWrapper>
        </div>
        <div className={flexRowGap16}>
          <div style={{ flex: 1 }}>
            <BasicInput type="text" title="성별" disabled />
          </div>
          <InputWrapper title="공개">
            <div
              className={flexAlignCenter}
              style={{
                display: "flex",
                height: "40px",
              }}
            >
              <ToggleSwitch size="large" showIcon />
            </div>
          </InputWrapper>
        </div>
        <TextArea title="자기소개" height={150} />
      </div>
    </form>
  );
}

export default MySettingInfo;
