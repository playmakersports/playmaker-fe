import React from "react";

import { useFormContext } from "react-hook-form";
import { stageFormWrapper, stageWrapper } from "./stage.css";
import { BasicInput } from "@/components/common/input/BaseInput";

function OptionalStage2() {
  const { register } = useFormContext();
  return (
    <div className={stageFormWrapper}>
      <div>
        <h3 className={stageWrapper.title}>신체정보를 입력해주세요</h3>
        <p className={stageWrapper.description}>키와 체중, 주로 사용하시는 손을 알려주세요! (선택)</p>
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <div style={{ flex: 1 }}>
          <BasicInput
            type="number"
            style={{ textAlign: "center" }}
            large={true}
            title="키"
            suffix="cm"
            {...register("height")}
          />
        </div>
        <div style={{ flex: 1 }}>
          <BasicInput
            type="number"
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

export default OptionalStage2;
