"use client";
import React from "react";
import { usePageTitle } from "@/hook/usePageTitle";

import UserSetting from "@/app/(mobile)/(navigation)/my/settings/_components/UserSetting";
import { BaseContainer } from "@/components/common/Container";

function MySettings() {
  usePageTitle({ title: "내 설정" });

  return (
    <BaseContainer>
      <UserSetting />
    </BaseContainer>
  );
}

export default MySettings;
