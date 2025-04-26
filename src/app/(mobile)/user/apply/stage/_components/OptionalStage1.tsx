import React, { useState } from "react";

import { useFormContext } from "react-hook-form";
import { stageFormWrapper, stageWrapper } from "./stage.css";
import { BasicInput } from "@/components/common/input/BaseInput";
import DropdownInput from "@/components/common/input/DropdownInput";
import InputWrapper from "@/components/common/input/InputWrapper";
import MainTab from "@/components/Main/MainTab";

function OptionalStage1() {
  const { register, watch, setValue } = useFormContext();
  const [exp, setExp] = useState(!!watch("sports.basketball.experience") ? "write" : "0");

  const handlePosition = (value: string) => {
    setValue("sports.basketball.position", value);
  };

  return (
    <div className={stageFormWrapper}>
      <div>
        <h3 className={stageWrapper.title}>'농구'에 대한 정보를 입력해 주세요</h3>
        <p className={stageWrapper.description}>입력된 정보는 언제든지 수정 가능해요.</p>
      </div>
      <InputWrapper title="운동 기간">
        <div style={{ display: "flex", gap: "8px" }}>
          <div style={{ flex: 1 }}>
            <DropdownInput
              placeholder=""
              value={exp}
              onChange={(target) => {
                if (target === "0") {
                  setValue("sports.basketball.experience", 0);
                }
                setExp(target);
              }}
              options={[
                { name: "1년 미만", value: "0" },
                { name: "직접 입력", value: "write" },
              ]}
            />
          </div>
          <div style={{ flex: 2 }}>
            <BasicInput
              type="number"
              suffix="년"
              disabled={exp === "0"}
              {...register("sports.basketball.experience", {
                valueAsNumber: true,
              })}
            />
          </div>
        </div>
      </InputWrapper>
      <BasicInput
        title="윙스팬"
        type="number"
        suffix="cm"
        {...register("sports.basketball.wingspan", {
          valueAsNumber: true,
        })}
      />
      <InputWrapper title="포지션">
        <MainTab
          type="filled"
          color="gray"
          size="medium"
          sameWidth
          initialValue={watch("sports.basketball.position")}
          nowValue={handlePosition}
          items={[
            { value: "guard", name: "가드" },
            { value: "forward", name: "포워드" },
            { value: "center", name: "센터" },
          ]}
        />
      </InputWrapper>
    </div>
  );
}

export default OptionalStage1;
