"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useFunnel } from "@/hook/useFunnel";
import { useHeader } from "@/hook/useHeader";
import { usePopup } from "@/components/common/global/PopupProvider";
import { useRouter } from "next/navigation";

import TeamCreateStage1 from "./_components/Stage1";
import TeamCreateStage2 from "./_components/Stage2";
import TeamCreateStage3 from "./_components/Stage3";
import TeamCreateStage4 from "./_components/Stage4";
import TeamCreateStage5 from "./_components/Stage5";
import TeamCreateWelcome from "./_components/Welcome";

const stages = ["Stage1", "Stage2", "Stage3", "Stage4", "Stage5", "Welcome"];
function TeamCreate() {
  const popup = usePopup();
  const router = useRouter();
  useHeader({
    onClickBack: () => {
      const handleConfirm = async () => {
        const confirmValue = await popup?.confirm(`입력된 정보는 저장되지 않고, 다시 복구할 수 없습니다.`, {
          showIcon: true,
          title: "팀 만들기를 취소하시겠습니까?",
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
  const methods = useForm();
  const { Funnel, Step, setStep } = useFunnel({
    initialStep: stages[0],
  });

  return (
    <FormProvider {...methods}>
      <Funnel>
        <Step name={stages[0]}>
          <TeamCreateStage1 setStep={setStep} />
        </Step>
        <Step name={stages[1]}>
          <TeamCreateStage2 setStep={setStep} />
        </Step>
        <Step name={stages[2]}>
          <TeamCreateStage3 setStep={setStep} />
        </Step>
        <Step name={stages[3]}>
          <TeamCreateStage4 setStep={setStep} />
        </Step>
        <Step name={stages[4]}>
          <TeamCreateStage5 setStep={setStep} />
        </Step>
        <Step name={stages[5]}>
          <TeamCreateWelcome setStep={setStep} />
        </Step>
      </Funnel>
    </FormProvider>
  );
}

export default TeamCreate;
