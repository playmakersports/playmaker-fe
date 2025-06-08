"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useHeader } from "@/hook/useHeader";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/session/useAuth";
import { usePopup } from "@/components/common/global/PopupProvider";
import axios from "axios";
import {
  baseContainerPaddingTop,
  baseDividedLineChild,
  flexColumnGap16,
  flexColumnGap24,
} from "@/styles/container.css";
import { BasicInput } from "@/components/common/input/BaseInput";
import { TextArea } from "@/components/common/TextArea";
import { ToggleSwitch } from "@/components/common/input/ToggleSwitch";
import InputWrapper from "@/components/common/input/InputWrapper";
import MainTab from "@/components/Main/MainTab";
import Button from "@/components/common/Button";
import { baseBackendURL } from "@/apis";

function TeamAdmin() {
  const { register, watch, setValue } = useForm();
  const teamId = useParams()["teamId"] as string;
  const router = useRouter();
  const { accessToken } = useAuth();
  const popup = usePopup();
  useHeader({
    title: "팀 관리",
    options: { titleAlign: "center" },
    subActions: {
      name: "저장",
      action: () => {},
    },
  });

  const handleActiveJoin = (value: string) => {
    setValue("activeJoin", value === "true");
  };

  const handleTeamDissolution = async () => {
    const confirm = await popup?.confirm(
      `해체된 팀은 복구할 수 없습니다.\n신중하게 결정해주세요. 팀을 해체하시겠습니까?\n[teamId: ${teamId}]`,
      {
        title: "팀 해체",
        buttonText: { yes: "네, 해체합니다" },
        showIcon: true,
        color: "red",
      }
    );

    if (confirm) {
      axios
        .delete(`${baseBackendURL}/api/teams/${teamId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(() => {
          popup?.alert("", { title: `팀이 해체되었습니다.\n홈 화면으로 이동합니다.` });
          router.push("/");
        })
        .catch((error) => {
          const status = error.response?.status;
          if (status === 403) {
            popup?.alert("", { title: "팀 해체 권한이 없습니다.[403]" });
          }
        });
    }
  };

  return (
    <section className={baseContainerPaddingTop}>
      <div className={flexColumnGap24}>
        <BasicInput type="text" title="팀 이름" required />
        <TextArea title="팀 소개" required />
        <ToggleSwitch
          size="large"
          text={{
            title: "팀 공개 여부",
            description: "팀을 다른 사람들에게 공개하시겠어요?",
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
            initialValue={watch("activeJoin")}
            nowValue={handleActiveJoin}
            items={[
              { value: "true", name: "모집 중" },
              { value: "false", name: "모집 중지" },
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
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "var(--gray100)",
          }}
        />
        <Button type="button" mode="red" fillType="light" onClick={handleTeamDissolution}>
          팀 해체하기
        </Button>
      </div>
    </section>
  );
}

export default TeamAdmin;
