"use client";
import React from "react";
import { useFunnel } from "@/hook/useFunnel";
import { FormProvider, useForm } from "react-hook-form";
import { useToast } from "@/hook/useToast";
import { useRouter } from "next/navigation";

import StageWrapper from "../stage/_components/StageWrapper";
import OptionalStage1 from "../stage/_components/OptionalStage1";
import OptionalStage2 from "../stage/_components/OptionalStage2";

const stages = ["Stage1", "Stage2"];
function JoinOptional() {
  const { trigger } = useToast();
  const router = useRouter();
  const methods = useForm({
    defaultValues: { required1: false, required2: false, event1: false, sexKey: "MALE" },
  });
  const { Funnel, Step, currentStep, setStep } = useFunnel({
    initialStep: stages[0],
  });
  const currentStepIndex = stages.indexOf(currentStep);

  const handleNextStep = () => {
    if (!stages[currentStepIndex + 1]) return;
    setStep(stages[currentStepIndex + 1]);
  };
  const handlePrevStep = () => {
    if (!stages[currentStepIndex - 1]) return;
    setStep(stages[currentStepIndex - 1]);
  };
  const handleCompleteStep = () => {
    trigger("스포츠 정보가 업데이트 되었습니다.", { type: "success" });
    router.replace("/");
  };

  return (
    <StageWrapper
      onClickNext={handleNextStep}
      onClickPrev={handlePrevStep}
      onClickLast={handleCompleteStep}
      start={currentStepIndex === 0}
      last={currentStepIndex === stages.length - 1}
      length={stages.length}
      current={currentStepIndex + 1}
    >
      <FormProvider {...methods}>
        <Funnel>
          <Step name={stages[0]}>
            <OptionalStage1 />
          </Step>
          <Step name={stages[1]}>
            <OptionalStage2 />
          </Step>
        </Funnel>
      </FormProvider>
    </StageWrapper>
  );
}

export default JoinOptional;
