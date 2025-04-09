import React from "react";
import { useFormContext } from "react-hook-form";

import { stageFormWrapper, stageWrapper } from "./stage.css";
import { BasicInput } from "@/components/common/input/BaseInput";
import DateInput from "@/components/common/DateInput";
import InputWrapper from "@/components/common/input/InputWrapper";
import MainTab from "@/components/Main/MainTab";

function Stage2() {
  const { register, setValue } = useFormContext();

  const handleSexKey = (value: string) => {
    setValue("sexKey", value);
  };

  return (
    <div className={stageFormWrapper}>
      <div>
        <h3 className={stageWrapper.title}>플레이어님의 정보를 확인할게요</h3>
        <p className={stageWrapper.description}>필수 정보를 입력해 주세요</p>
      </div>
      <BasicInput type="text" title="이름" required {...register("name")} />
      <DateInput title="생년월일" required {...register("birth")} />
      <BasicInput
        type="tel"
        required
        title="휴대전화 번호"
        {...register("contact", {
          onChange: (event) =>
            (event.target.value = event.target.value
              .replace(/[^0-9]/g, "")
              .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)),
        })}
      />
      <InputWrapper title="성별" required>
        <MainTab
          type="filled"
          color="gray"
          size="medium"
          sameWidth
          nowValue={handleSexKey}
          items={[
            { value: "MALE", name: "남성" },
            { value: "FEMALE", name: "여성" },
          ]}
        />
      </InputWrapper>
    </div>
  );
}

export default Stage2;
