"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useFunnel } from "@/hook/useFunnel";
import { useHeader } from "@/hook/useHeader";
import { usePopup } from "@/components/common/global/PopupProvider";
import { useRouter } from "next/navigation";

import { AuthJoinFormRequest } from "@/types/auth";
import Stage1 from "./_components/Stage1";
import Stage2 from "./_components/Stage2";
import Stage3 from "./_components/Stage3";
import Stage4 from "./_components/Stage4";
import Stage5 from "./_components/Stage5";
import Welcome from "./_components/Welcome";
import OptionalStage1 from "./_components/OptionalStage1";
import OptionalStage2 from "./_components/OptionalStage2";

type JoinFormType = AuthJoinFormRequest & {
  required1: boolean;
  required2: boolean;
  event1: boolean;
};

const stages = ["Stage1", "Stage2", "Stage3", "Stage4", "Stage5", "Option1", "Option2", "Welcome"];
function JoinStage() {
  const popup = usePopup();
  const router = useRouter();
  useHeader({
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
          router.replace("/user/logout");
        }
      };
      handleConfirm();
    },
  });
  const methods = useForm<JoinFormType>({
    defaultValues: { required1: false, required2: false, event1: false, sexKey: "MALE" },
  });
  const { Funnel, Step, setStep } = useFunnel({
    initialStep: stages[0],
  });

  return (
    <FormProvider {...methods}>
      <Funnel>
        <Step name={stages[0]}>
          <Stage1 setStep={setStep} />
        </Step>
        <Step name={stages[1]}>
          <Stage2 setStep={setStep} />
        </Step>
        <Step name={stages[2]}>
          <Stage3 setStep={setStep} />
        </Step>
        <Step name={stages[3]}>
          <Stage4 setStep={setStep} />
        </Step>
        <Step name={stages[4]}>
          <Stage5 setStep={setStep} />
        </Step>
        <Step name={stages[4]}>
          <Stage5 setStep={setStep} />
        </Step>
        <Step name={stages[5]}>
          <OptionalStage1 setStep={setStep} />
        </Step>
        <Step name={stages[6]}>
          <OptionalStage2 setStep={setStep} />
        </Step>
        <Step name={stages[7]}>
          <Welcome setStep={setStep} />
        </Step>
      </Funnel>
    </FormProvider>
  );
}

export default JoinStage;
