"use client";
import React from "react";
import { useHeader } from "@/hook/useHeader";

import { fonts } from "@/styles/fonts.css";
import UserSetting from "@/app/(mobile)/my/settings/_components/UserSetting";
import { BaseContainer } from "@/components/common/Container";
import { settingsHeaderProfile, settingsHeaderProfileImage } from "./_components/userSetting.css";
import PersonIcon from "@/assets/icon/common/filled/Person.svg";

function MySettings() {
  useHeader({ title: "설정" });

  return (
    <BaseContainer>
      <div className={settingsHeaderProfile}>
        <div className={settingsHeaderProfileImage}>
          <PersonIcon width={24} height={24} fill="var(--gray300)" />
        </div>
        <div className="profile">
          <div
            className={fonts.body3.medium}
            style={{
              color: "var(--gray700)",
            }}
          >
            이름
          </div>
          <div
            className={fonts.caption1.regular}
            style={{
              color: "var(--gray400)",
            }}
          >
            @test
          </div>
        </div>
      </div>
      <UserSetting />
    </BaseContainer>
  );
}

export default MySettings;
