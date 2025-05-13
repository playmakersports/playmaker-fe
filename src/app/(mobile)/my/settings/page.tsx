"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useHeader } from "@/hook/useHeader";

import { fonts } from "@/styles/fonts.css";
import { baseContainer } from "@/styles/container.css";
import { settingsHeaderProfile, settingsHeaderProfileImage } from "./_components/userSetting.css";
import UserSetting from "@/app/(mobile)/my/settings/_components/UserSetting";

import PersonIcon from "@/assets/icon/common/filled/Person.svg";

function MySettings() {
  const router = useRouter();
  useHeader({
    title: "설정",
    subActions: [{ name: "계정 관리", action: () => router.push("/my/settings/account") }],
  });

  return (
    <section className={baseContainer}>
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
    </section>
  );
}

export default MySettings;
