"use client";
import React, { useEffect, useRef } from "react";
import { usePost } from "@/apis/hook/query";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { usePopup } from "@/components/common/global/PopupProvider";

import Loading from "@/components/common/Loading";
import { SetStepType } from "../../user/apply/stage/_components/StageWrapper";

function TeamCreateWelcome({ setStep }: SetStepType) {
  const { watch } = useFormContext();
  const router = useRouter();
  const popup = usePopup();
  const { mutate, isPending } = usePost<{
    id: number;
  }>("/api/teams");
  const hasPostedRef = useRef(false);

  useEffect(() => {
    const formValues = watch();
    if (!hasPostedRef.current) {
      mutate(
        {
          data: {
            teamName: formValues.teamName,
            teamColor: formValues.teamColor,
            teamItem: formValues.teamItem,
            activeArea: formValues.activeArea,
            logoUrl: formValues.logoUrl,
            teamIntro: formValues.teamIntro,
            message: formValues.message,
          },
        },
        {
          onSuccess: (data) => {
            popup?.alert("팀이 성공적으로 생성되었습니다.", {
              title: "팀 생성 완료",
              showIcon: true,
              color: "primary",
            });
            router.push(`/team/${data.id}`);
            console.log(data);
          },

          onError: (error) => {
            popup?.alert(`문제가 발생하였습니다. 다시 시도해주세요.(${error.name}, ${error.message})`, {
              title: "서버 오류",
              showIcon: true,
              color: "red",
            });
            setStep("Stage5");
          },
        }
      );
      hasPostedRef.current = true;
    }
  }, []);

  return <div>{isPending && <Loading page />}</div>;
}

export default TeamCreateWelcome;
