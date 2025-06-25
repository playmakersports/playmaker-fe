"use client";
import React from "react";
import { useHeader } from "@/hook/useHeader";
import clsx from "clsx";
import { useForm } from "react-hook-form";

import { baseContainer } from "@/styles/container.css";
import { BasicInput } from "@/components/common/input/BaseInput";
import { stageFormWrapper, stageWrapper } from "@/app/register/_components/stage.css";

function MyPhysical() {
  const { register } = useForm();
  useHeader({
    title: "신체 정보 관리",
    options: { titleAlign: "center" },
    subActions: {
      name: "저장",
      action: () => {},
    },
  });

  return (
    <div className={clsx(baseContainer, stageFormWrapper)} style={{ paddingTop: "40px" }}>
      <div>
        <h3 className={stageWrapper.title}>신체정보를 입력해주세요</h3>
        <p className={stageWrapper.description}>키와 체중, 주로 사용하시는 손을 알려주세요!</p>
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <div style={{ flex: 1 }}>
          <BasicInput
            type="text"
            style={{ textAlign: "center" }}
            large={true}
            title="키"
            suffix="cm"
            {...register("height")}
          />
        </div>
        <div style={{ flex: 1 }}>
          <BasicInput
            type="text"
            style={{ textAlign: "center" }}
            large={true}
            title="체중"
            suffix="kg"
            {...register("weight")}
          />
        </div>
      </div>
    </div>
  );
}

export default MyPhysical;
