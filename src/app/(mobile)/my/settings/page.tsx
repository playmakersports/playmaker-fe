"use client";
import React from "react";
import { useHeader } from "@/hook/useHeader";

import UserSetting from "@/app/(mobile)/my/settings/_components/UserSetting";
import { BaseContainer } from "@/components/common/Container";

function MySettings() {
  useHeader({ title: "내 설정" });

  return (
    <BaseContainer>
      <UserSetting />
    </BaseContainer>
  );
}

export default MySettings;
