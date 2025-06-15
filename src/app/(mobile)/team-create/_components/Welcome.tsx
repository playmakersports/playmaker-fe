"use client";
import React, { useEffect, useRef } from "react";
import { formatDate } from "date-fns";
import { usePost } from "@/apis/hook/query";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import { useToast } from "@/hook/useToast";
import { usePopup } from "@/components/common/global/PopupProvider";

import Loading from "@/components/common/Loading";
import { SetStepType } from "../../register/_components/StageWrapper";
import { teamAPI } from "@/apis/url";

function TeamCreateWelcome({ setStep }: SetStepType) {
  const { watch } = useFormContext();
  const router = useRouter();
  const toast = useToast();
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
            toast?.trigger("새로운 팀을 만들었습니다.", {
              type: "success",
            });
            router.replace(`/team/${data.id}`);
          },

          onError: (error) => {
            let errorResponse: { code: string | null; message: string } | undefined = undefined;
            if (error?.response) {
              errorResponse = {
                code: error.response.data.errorCode,
                message: error.response.data.errorMessage,
              };
            } else {
              errorResponse = {
                code: null,
                message: error.message,
              };
            }
            popup?.alert(
              `${errorResponse?.message}${
                errorResponse.code ? `[${errorResponse.code}]` : ""
              }\nOccurred Time ${formatDate(new Date(), "yyyy-MM-dd hh:mm:ss")}`,
              {
                title: "서버와의 통신 중 문제가 발생했습니다",
                showIcon: true,
                color: "red",
              }
            );
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
