"use client";
import React from "react";
import { useHeader } from "@/hook/useHeader";
import { useRouter } from "next/navigation";

import { fonts } from "@/styles/fonts.css";
import Button from "@/components/common/Button";
import { settingsHeaderProfile, settingsHeaderProfileImage } from "@/app/my/_components/userSetting.css";
import PersonIcon from "@/assets/icon/common/filled/Person.svg";

type Props = { imageUrl: string; username: string; subName?: string; isLoading?: boolean; isMyProfile?: boolean };
function ProfileTop(props: Props) {
  const { imageUrl, username, subName, isLoading, isMyProfile } = props;
  const router = useRouter();
  useHeader({ title: "프로필", options: { titleAlign: "center" } });

  if (isLoading)
    return (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
        <div className="skeleton-loading-ui" style={{ width: "48px", height: "48px", borderRadius: "10px" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
          <div className="skeleton-loading-ui" style={{ width: "110px", height: "20px", borderRadius: "5px" }} />
          <div className="skeleton-loading-ui" style={{ width: "72px", height: "16px", borderRadius: "5px" }} />
        </div>
        <div className="skeleton-loading-ui" style={{ width: "90px", height: "36px", borderRadius: "5px" }} />
      </div>
    );

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div className={settingsHeaderProfile} style={{ padding: 0 }}>
        <div className={settingsHeaderProfileImage}>
          {imageUrl ? (
            <img src={imageUrl} alt={username} className="profile-image" />
          ) : (
            <PersonIcon width={24} height={24} fill="var(--gray300)" />
          )}
        </div>
        <div className="profile">
          <div
            className={fonts.body3.semibold}
            style={{
              color: "var(--gray700)",
            }}
          >
            {username}
          </div>
          <div
            className={fonts.caption1.regular}
            style={{
              color: "var(--gray400)",
            }}
          >
            @{subName}
          </div>
        </div>
      </div>
      {isMyProfile && (
        <Button type="button" mode="gray" fillType="light" size="small" onClick={() => router.push("/my/info")}>
          프로필 수정
        </Button>
      )}
    </div>
  );
}

export default ProfileTop;
