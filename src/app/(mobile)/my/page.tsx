"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useHeader } from "@/hook/useHeader";

import { fonts } from "@/styles/fonts.css";
import { baseContainer } from "@/styles/container.css";
import { settingsHeaderProfile, settingsHeaderProfileImage } from "./_components/userSetting.css";
import Button from "@/components/common/Button";
import UserSetting from "./_components/UserSetting";

import PersonIcon from "@/assets/icon/common/filled/Person.svg";

function MySettings() {
  const router = useRouter();
  useHeader({
    title: "설정",
    subActions: [
      { name: "계정 관리", action: () => router.push("/my/account") },
      { name: "로그인 (DEV)", action: () => router.push("/user/login") },
    ],
  });

  return (
    <section className={baseContainer}>
      <div className={settingsHeaderProfile}>
        <div className={settingsHeaderProfileImage}>
          <PersonIcon width={24} height={24} fill="var(--gray300)" />
        </div>
        <div className="profile" style={{ flex: 1 }}>
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
        <Button type="button" mode="gray" fillType="light" size="small" onClick={() => router.push("/p/123")}>
          프로필 보기
        </Button>
      </div>
      <UserSetting />
    </section>
  );
}

export default MySettings;
