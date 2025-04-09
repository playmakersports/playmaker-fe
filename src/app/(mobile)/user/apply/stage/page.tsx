"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useFunnel } from "@/hook/useFunnel";
import { useHeader } from "@/hook/useHeader";
import { usePopup } from "@/components/common/global/PopupProvider";
import { useRouter } from "next/navigation";

import StageWrapper from "./_components/StageWrapper";
import Stage1 from "./_components/Stage1";
import Stage2 from "./_components/Stage2";
import Stage3 from "./_components/Stage3";
import Stage4 from "./_components/Stage4";

const stages = ["Stage1", "Stage2", "Stage3", "Stage4", "Stage5", "Stage6"];
function JoinStage() {
  const popup = usePopup();
  const router = useRouter();
  useHeader({
    title: "회원가입",
    onClickBack: () => {
      const handleConfirm = async () => {
        const confirmValue = await popup?.confirm(`입력된 정보는 저장되지 않고, 다시 복구할 수 없습니다.`, {
          showIcon: true,
          title: "회원가입을 취소하시겠습니까?",
          buttonText: {
            yes: "네, 취소할게요",
            no: "아니오",
          },
        });

        if (confirmValue) {
          router.replace("/");
        }
      };
      handleConfirm();
    },
  });
  const methods = useForm({
    defaultValues: { required1: false, required2: false, event1: false, sexKey: "MALE" },
  });
  const { Funnel, Step, currentStep, setStep } = useFunnel({
    initialStep: stages[0],
  });
  const currentStepIndex = stages.indexOf(currentStep);

  const handleNextStep = () => {
    if (!stages[currentStepIndex + 1]) return;
    if (currentStepIndex === 0) {
      const isEveryChecked = [methods.getValues("required1"), methods.getValues("required2")].every((v) => v);
      if (!isEveryChecked) {
        popup?.alert("필수 약관에 동의하셔야 가입할 수 있어요.", {
          showIcon: true,
          title: "약관 동의",
        });
        return;
      }
    }
    setStep(stages[currentStepIndex + 1]);
  };
  const handlePrevStep = () => {
    if (!stages[currentStepIndex - 1]) return;
    setStep(stages[currentStepIndex - 1]);
  };

  return (
    <StageWrapper
      onClickNext={handleNextStep}
      onClickPrev={handlePrevStep}
      start={currentStepIndex === 0}
      last={currentStepIndex === stages.length - 1}
      length={stages.length}
      current={currentStepIndex + 1}
    >
      <FormProvider {...methods}>
        <Funnel>
          <Step name={stages[0]}>
            <Stage1 />
          </Step>
          <Step name={stages[1]}>
            <Stage2 />
          </Step>
          <Step name={stages[2]}>
            <Stage3 />
          </Step>
          <Step name={stages[3]}>
            <Stage4 />
          </Step>
        </Funnel>
      </FormProvider>
    </StageWrapper>
  );
}

export default JoinStage;
