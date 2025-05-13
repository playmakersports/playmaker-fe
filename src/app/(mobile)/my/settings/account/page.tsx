"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { useHeader } from "@/hook/useHeader";
import styled from "styled-components";
import useModal from "@/hook/useModal";

import { fonts } from "@/styles/fonts.css";
import {
  baseContainerPaddingTop,
  flexAlignCenter,
  flexColumnGap4,
  flexColumnGap40,
  flexRowGap4,
} from "@/styles/container.css";
import { settingsAccountButton } from "../_components/userSetting.css";

import RightArrow from "@/assets/icon/arrow/RightArrow.svg";
import AccountDelete from "../_components/AccountDelete";

function AccountSetting() {
  const { ModalComponents, showModal } = useModal();

  useHeader({
    title: "계정 관리",
    options: { titleAlign: "center" },
  });

  return (
    <>
      <section className={clsx(baseContainerPaddingTop, flexColumnGap40)}>
        <div className={flexColumnGap4}>
          <p className={clsx(fonts.body2.semibold, flexRowGap4, flexAlignCenter)} style={{ color: "var(--gray900)" }}>
            <span>playtest@gmail.com</span>
            <AccountLogo>
              <GoogleLogoSvg />
            </AccountLogo>
          </p>
          <p className={fonts.body4.regular} style={{ color: "var(--gray700)" }}>
            계정 연동일 2025.05.11
          </p>
        </div>
        <div className={flexColumnGap4}>
          <button type="button" className={settingsAccountButton}>
            <span>연동 계정 변경</span>
            <RightArrow width={20} height={20} fill="var(--gray600)" />
          </button>
          <button type="button" className={settingsAccountButton} onClick={() => showModal()}>
            <span>서비스 탈퇴</span>
            <RightArrow width={20} height={20} fill="var(--gray600)" />
          </button>
        </div>
      </section>
      <AccountDelete ModalComponents={ModalComponents} />
    </>
  );
}
const AccountLogo = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--gray200);

  & > svg {
    width: 16px;
    height: 16px;
  }
`;

const GoogleLogoSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3">
    <path
      fill="#4285f4"
      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
    />
    <path
      fill="#34a853"
      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
    />
    <path
      fill="#fbbc04"
      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
    />
    <path
      fill="#ea4335"
      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
    />
  </svg>
);

export default AccountSetting;
