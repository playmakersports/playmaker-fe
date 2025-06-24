"use client";
import React, { useState } from "react";
import { useToast } from "@/hook/useToast";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useHeader } from "@/hook/useHeader";

import TeamDissolution from "./TeamDissolution";
import { BasicInput } from "@/components/common/input/BaseInput";
import { TextArea } from "@/components/common/TextArea";
import { ToggleSwitch } from "@/components/common/input/ToggleSwitch";
import InputWrapper from "@/components/common/input/InputWrapper";
import MainTab from "@/components/Main/MainTab";
import BirthRangeInput from "@/components/common/BirthRangeInput";

import { useTeamBasicInfoPut } from "@/apis/hook/team";
import { ApiTeamDetail } from "@/apis/types/team";
import { baseDividedLineChild, flexColumnGap16, flexColumnGap24 } from "@/styles/container.css";

function TeamBasicInfoAdmin(props: ApiTeamDetail) {
  const router = useRouter();
  const toast = useToast();
  const teamId = useParams()?.teamId as string;
  const { mutate } = useTeamBasicInfoPut(teamId);
  const [ageRange, setAgeRange] = useState<number[]>([]);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      teamName: props.teamName,
      teamIntro: props.teamIntro,
      publicYn: props.publicYn === "Y",
      recruitingYn: props.recruitingYn === "Y",
    },
  });

  const handleActiveJoin = (value: string) => {
    setValue("recruitingYn", value === "Y", { shouldDirty: true });
  };

  const onSubmit = handleSubmit((data) => {
    mutate(
      {
        data: {
          teamName: data.teamName,
          teamIntro: data.teamIntro,
          publicYn: data.publicYn,
          recruitingYn: data.recruitingYn,
        },
      },
      {
        onSuccess: () => {
          toast.trigger("팀 정보가 저장되었습니다.", { type: "success" });
          router.push(`/team/${teamId}`);
          //   queryClient.invalidateQueries({ queryKey: [`${teamAPI.TEAMS}/${teamId}`] });
        },
        onError: (error) => {
          toast.trigger(`에러: ${error.response?.data.errorMessage}`, { type: "error" });
        },
      }
    );
  });

  useHeader({
    title: "팀 관리",
    options: { titleAlign: "center" },
    subActions: {
      name: "저장",
      disabled: !isDirty,
      action: () => {
        onSubmit();
      },
    },
  });

  return (
    <div className={flexColumnGap24}>
      <BasicInput type="text" title="팀 이름" {...register("teamName")} required />
      <TextArea title="팀 소개" {...register("teamIntro")} required />
      <ToggleSwitch
        {...register("publicYn")}
        size="large"
        text={{
          title: "팀 공개 여부",
          description: `팀을 비공개하면 팀원만 우리 팀에 접근할 수 있어요.\n외부인은 초대 링크를 통해서만 가입할 수 있어요.`,
          first: true,
          textOnlySize: "medium",
        }}
        showIcon
      />
      <div className={baseDividedLineChild} />
      <InputWrapper title="팀 모집 설정">
        <MainTab
          type="filled"
          color="gray"
          size="medium"
          sameWidth
          initialValue={watch("recruitingYn") ? "Y" : "N"}
          nowValue={handleActiveJoin}
          items={[
            { value: "Y", name: "모집 중" },
            { value: "N", name: "모집 중지" },
          ]}
        />
      </InputWrapper>
      <div className={flexColumnGap16}>
        <ToggleSwitch
          size="large"
          text={{
            title: "나이 제한",
            description: "팀에 가입할 수 있는 나이를 제한할 수 있어요.",
            first: true,
            textOnlySize: "medium",
          }}
          showIcon
        />
        <BirthRangeInput getYearRange={setAgeRange} />
      </div>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "var(--gray100)",
        }}
      />
      <TeamDissolution />
    </div>
  );
}

export default TeamBasicInfoAdmin;
