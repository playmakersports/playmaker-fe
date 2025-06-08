"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useHeader } from "@/hook/useHeader";
import { useAuth } from "@/session/useAuth";
import { useProfileGet } from "@/apis/hook/user";

import { fonts } from "@/styles/fonts.css";
import { baseContainer } from "@/styles/container.css";
import { settingsHeaderProfile, settingsHeaderProfileImage } from "./_components/userSetting.css";
import Button from "@/components/common/Button";
import UserSetting from "./_components/UserSetting";

import PersonIcon from "@/assets/icon/common/filled/Person.svg";

function MySettings() {
  const router = useRouter();
  const { setToken } = useAuth();
  const { data } = useProfileGet();
  useHeader({
    title: "설정",
    subActions: [
      { name: "계정 관리", action: () => router.push("/my/account") },
      { name: "로그인 (DEV)", action: () => router.push("/user/login") },
      {
        name: "TEST TOKEN",
        action: () => {
          const promptToken = prompt("토큰을 입력해주세요");
          if (promptToken) {
            setToken(promptToken);
            router.refresh();
          }
        },
      },
    ],
  });

  return (
    <section className={baseContainer}>
      <div className={settingsHeaderProfile}>
        <div className={settingsHeaderProfileImage}>
          {data?.imageUrl ? (
            <img src={data?.imageUrl} alt={data?.userName} className="profile-image" />
          ) : (
            <PersonIcon width={24} height={24} fill="var(--gray300)" />
          )}
        </div>
        <div className="profile" style={{ flex: 1 }}>
          <div
            className={fonts.body3.medium}
            style={{
              color: "var(--gray700)",
            }}
          >
            {data?.userName}
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
        <Button type="button" mode="gray" fillType="light" size="small" onClick={() => router.push("/p/my")}>
          프로필 보기
        </Button>
      </div>
      <UserSetting />
    </section>
  );
}

export default MySettings;
