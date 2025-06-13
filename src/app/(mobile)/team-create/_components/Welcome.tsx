"use client";
import React, { useEffect, useRef } from "react";
import { usePost } from "@/apis/hook/query";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { usePopup } from "@/components/common/global/PopupProvider";

import Loading from "@/components/common/Loading";
import { SetStepType } from "../../register/_components/StageWrapper";
import { teamAPI } from "@/apis/url";

function TeamCreateWelcome({ setStep }: SetStepType) {
  const { watch } = useFormContext();
  const router = useRouter();
  const popup = usePopup();
  const { mutate, isPending } = usePost<{
    id: number;
  }>(teamAPI.TEAMS, "form-data");
  const hasPostedRef = useRef(false);

  useEffect(() => {
    const formValues = watch();
    const formData = new FormData();
    const requestDto = {
      hasGenerationSystem: formValues.hasGenerationSystem ? "Y" : "N",
      teamColor: formValues.teamColor,
      message: formValues.message,
      teamName: formValues.teamName,
      genderRestriction: formValues.genderRestriction ?? null,
      foundingDate: formValues.foundingDate.replaceAll("-", ""),
      university: null,
      teamIntro: formValues.teamIntro,
      teamItem: formValues.teamItem,
      activeArea: formValues.activeArea,
      ageMax: 0,
      ageMin: 0,
    };

    formData.append("requestDto", new Blob([JSON.stringify(requestDto)], { type: "application/json" }));
    if (formValues.image instanceof File) {
      formData.append("logoFile", formValues.image);
    }

    if (!hasPostedRef.current) {
      mutate(
        {
          data: formData,
        },
        {
          onSuccess: (data) => {
            popup?.alert("팀이 성공적으로 생성되었습니다.", {
              title: "팀 생성 완료",
              showIcon: true,
              color: "primary",
            });
            router.push(`/team/${data.id}`);
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
