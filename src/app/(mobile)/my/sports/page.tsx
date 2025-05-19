"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHeader } from "@/hook/useHeader";
import MainTab from "@/components/Main/MainTab";
import { SUPPORT_SPORTS } from "@/constants/SPORTS";

function MySportsInfo() {
  const { register } = useForm();
  const [sports, setSports] = useState(SUPPORT_SPORTS[0].value);

  useHeader({
    title: "운동 종목별 정보 관리",
    options: { titleAlign: "center" },
    subActions: {
      name: "저장",
      action: () => {},
    },
  });

  return (
    <div>
      <MainTab
        padding={16}
        size="large"
        type="line"
        nowValue={setSports}
        sameWidth={true}
        items={SUPPORT_SPORTS.map((item) => ({ value: item.value, name: item.name }))}
      />
    </div>
  );
}

export default MySportsInfo;
