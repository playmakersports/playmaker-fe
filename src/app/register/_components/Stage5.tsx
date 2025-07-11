import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useToast } from "@/hook/useToast";
import { useFormContext } from "react-hook-form";
import { usePost } from "@/apis/hook/query";
import { usePopup } from "@/components/common/global/PopupProvider";
import { userAtom } from "@/session/userAtom";
import { useSetAtom } from "jotai";

import { FONTS } from "@/styles/common";
import { stageFavSportsGrid, stageFormWrapper, stageWrapper } from "./stage.css";
import { SUPPORT_SPORTS } from "@/constants/SPORTS";
import StageWrapper, { SetStepType } from "./StageWrapper";
import Loading from "@/components/common/Loading";
import { authAPI } from "@/apis/url";

function Stage5({ setStep }: SetStepType) {
  const { register, watch } = useFormContext();
  const setUserAtom = useSetAtom(userAtom);
  const { trigger } = useToast();
  const popup = usePopup();

  const { mutateAsync, isPending } = usePost(authAPI.JOIN, "form-data");
  const selectedSports = watch("preferredSport") ?? [];

  const handleSubmitForm = async () => {
    const formValues = watch();
    const formData = new FormData();
    const userInfo = {
      username: formValues.username,
      contact: formValues.contact,
      birth: formValues.birth.replaceAll("-", ""),
      university: null,
      sexKey: formValues.sexKey,
      activeAreas: formValues.activeAreas,
      preferredSports: selectedSports,
      selfIntro: formValues.selfIntro,
    };

    formData.append("userInfo", new Blob([JSON.stringify(userInfo)], { type: "application/json" }));
    if (formValues.image instanceof File) {
      formData.append("image", formValues.image);
    }

    try {
      await mutateAsync({
        data: formData,
      });
      setUserAtom({
        username: formValues.username,
        role: "",
        nickname: "",
        isLogin: true,
      });
      setStep("Welcome");
    } catch (error) {
      popup?.alert("가입에 실패했습니다. 다시 시도해주세요.", {
        showIcon: true,
        title: "가입 실패",
        color: "red",
      });
    }
  };

  const handlePrevStep = () => {
    setStep("Stage4");
  };
  const handleNextStep = () => {
    handleSubmitForm();
  };

  useEffect(() => {
    if (selectedSports.length > 3) {
      trigger("최대 3개까지 선택할 수 있어요.", { type: "error" });
    }
  }, [selectedSports]);

  return (
    <StageWrapper
      last={true}
      onClickPrev={handlePrevStep}
      onClickLast={handleNextStep}
      length={5}
      current={5}
      disableNext={!(selectedSports.length > 0) || selectedSports.length > 3}
    >
      {isPending && <Loading page />}
      <div className={stageFormWrapper}>
        <div>
          <h3 className={stageWrapper.title}>관심 스포츠를 선택해 주세요</h3>
          <p className={stageWrapper.description}>최대 3개까지 선택할 수 있어요</p>
        </div>
        <div className={stageFavSportsGrid}>
          {SUPPORT_SPORTS.map((item) => (
            <SportsButton key={item.value}>
              <input
                type="checkbox"
                id={`${item.value}+${item.name}`}
                value={item.value}
                style={{ display: "none" }}
                {...register("preferredSport", {
                  maxLength: 3,
                })}
              />
              <label htmlFor={`${item.value}+${item.name}`}>
                <div className="icon-wrapper">
                  <Image src={item.icon} alt={item.name} width={80} height={80} />
                </div>
                <span className="sports-name">{item.name}</span>
              </label>
            </SportsButton>
          ))}
        </div>
      </div>
    </StageWrapper>
  );
}

const SportsButton = styled.div`
  width: 100%;
  max-width: 110px;
  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    div.icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 110px;
      border-radius: 10px;
      border: 1px solid var(--gray200);
      transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    }
    span.sports-name {
      ${FONTS.body3("medium")};
      padding: 10px 0;
      color: var(--gray600);
    }

    &:active div.icon-wrapper > img {
      transform: scale(0.95);
      transition: transform 0.2s ease-in-out;
    }
  }

  input:checked + label div.icon-wrapper {
    border: 2px solid var(--primary500);
  }
  input:checked + label span.sports-name {
    ${FONTS.body3("semibold")};
    color: var(--primary500);
  }
`;

export default Stage5;
