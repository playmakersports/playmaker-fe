import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { usePopup } from "@/components/common/global/PopupProvider";
import { useRouter } from "next/router";
import { usePost } from "@/apis/hook/query";
import { useToast } from "@/hook/useToast";

import { fonts } from "@/styles/fonts.css";
import { stageFormWrapper, stageWrapper } from "./stage.css";
import { flexColumnGap10, flexColumnGap20 } from "@/styles/container.css";

import Loading from "@/components/common/Loading";
import MainTab from "@/components/Main/MainTab";
import { BasicInput } from "@/components/common/input/BaseInput";
import DropdownInput from "@/components/common/input/DropdownInput";
import InputWrapper from "@/components/common/input/InputWrapper";
import StageWrapper, { SetStepType } from "./StageWrapper";

function OptionalStage2({ setStep }: SetStepType) {
  const { register, watch, setValue } = useFormContext();
  const router = useRouter();
  const popup = usePopup();
  const toast = useToast();

  const [exp, setExp] = useState(!!watch("basketball.exDuration") ? "write" : "0");
  const { mutateAsync, isPending } = usePost("/api/login/updatefitlib");

  const handleSubmitForm = async () => {
    const formValues = watch();
    try {
      await mutateAsync({
        data: {
          fitlib: {
            exDuration: formValues.basketball.exDuration,
            wingSpan: formValues.basketball.wingSpan,
            posKey: formValues.basketball.posKey,
            height: formValues.height,
            weight: formValues.weight,
          },
        },
      });
      router.push("/");
      toast.trigger("스포츠 정보가 저장되었습니다.", { type: "success" });
    } catch (error) {
      popup?.alert("스포츠 정보 저장에 실패했습니다. 다시 시도해주세요.", {
        showIcon: true,
        title: "가입 실패",
        color: "red",
      });
      return;
    }
  };

  const handlePosition = (value: string) => {
    setValue("basketball.posKey", value);
  };
  const handlePrevStep = () => {
    setStep("Option1");
  };
  const handleNextStep = () => {
    handleSubmitForm();
  };

  return (
    <StageWrapper
      onClickPrev={handlePrevStep}
      onClickLast={handleNextStep}
      current={-1}
      length={6}
      last={true}
      currentStageName="선택사항"
    >
      <div className={stageFormWrapper}>
        {isPending && <Loading page />}
        <div>
          <h3 className={stageWrapper.title}>플레이어님의 스포츠 정보를 입력해 주세요.</h3>
          <p className={stageWrapper.description}>세부 정보를 입력하시면, 맞춤 팀을 추천드려요!</p>
        </div>
        <div
          className={flexColumnGap10}
          style={{
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div className={flexColumnGap20}>
            <MainTab
              type="line"
              size="large"
              nowValue={() => {}}
              initialValue="basketball"
              sameWidth
              items={[
                { value: "volleyball", name: "배구", disabled: true },
                { value: "baseball", name: "야구", disabled: true },
                { value: "basketball", name: "농구" },
              ]}
            />
            <InputWrapper title="운동 기간">
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ flex: 1 }}>
                  <DropdownInput
                    placeholder=""
                    value={exp}
                    onChange={(target) => {
                      if (target === "0") {
                        setValue("basketball.exDuration", 0);
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
                    {...register("basketball.exDuration", {
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
              {...register("basketball.wingSpan", {
                valueAsNumber: true,
              })}
            />
            <InputWrapper title="포지션">
              <MainTab
                type="filled"
                color="gray"
                size="medium"
                sameWidth
                initialValue={watch("basketball.posKey")}
                nowValue={handlePosition}
                items={[
                  { value: "guard", name: "가드" },
                  { value: "forward", name: "포워드" },
                  { value: "center", name: "센터" },
                ]}
              />
            </InputWrapper>
          </div>
          <p
            className={fonts.body4.medium}
            style={{
              margin: "0 -20px",
              padding: "16px 0",
              textAlign: "center",
              backgroundColor: "var(--gray50)",
              color: "var(--gray400)",
            }}
          >
            * 농구 외의 종목은 추후 업데이트 될 예정입니다.
          </p>
        </div>
      </div>
    </StageWrapper>
  );
}

export default OptionalStage2;
