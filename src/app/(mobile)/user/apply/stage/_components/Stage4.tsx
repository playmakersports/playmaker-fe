"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";

import { convertWebpImage } from "@/util/webp";
import { stageFormWrapper, stageWrapper } from "./stage.css";
import { BasicInput } from "@/components/common/input/BaseInput";
import { TextArea } from "@/components/common/TextArea";
import StageWrapper, { SetStepType } from "./StageWrapper";

import PersonIcon from "@/assets/icon/common/filled/Person.svg";
import PlusIcon from "@/assets/icon/common/Plus.svg";

function Stage4({ setStep }: SetStepType) {
  const {
    register,
    watch,
    setValue,
    formState: { isValid },
  } = useFormContext();
  const [previewImage, setPreviewImage] = useState("");

  const handlePreviewImg = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (!file) return;

    try {
      const webpBlob = await convertWebpImage(file, { maxWidth: 600, quality: 0.8 });
      const webpFile = new File([webpBlob], "profile.webp", { type: "image/webp" });
      const previewBase64 = URL.createObjectURL(webpBlob);
      setPreviewImage(previewBase64);
      setValue("image", webpFile);
    } catch (error) {
      console.error("Error converting image to WebP:", error);
    }
  };

  useEffect(() => {
    if (watch("image")) {
      const file = watch("image")[0];
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          if (reader.result) {
            setPreviewImage(reader.result.toString());
          }
        };
      }
    }
  }, []);

  const handlePrevStep = () => {
    setStep("Stage3");
  };
  const handleNextStep = () => {
    setStep("Stage5");
  };

  return (
    <StageWrapper
      onClickPrev={handlePrevStep}
      onClickNext={handleNextStep}
      length={5}
      current={4}
      disableNext={!isValid}
    >
      <div className={stageFormWrapper}>
        <div>
          <h3 className={stageWrapper.title}>프로필을 작성해주세요</h3>
          <p className={stageWrapper.description}></p>
        </div>
        <ImageUpload htmlFor="profileImgUpload">
          {previewImage ? <PreviewImg src={previewImage} /> : <PersonIcon />}
          <div className="camera-icon-wrapper">
            <PlusIcon />
          </div>
        </ImageUpload>
        {/* <BasicInput type="text" title="닉네임" required {...register("nickname", { required: true })} /> */}
        <TextArea
          title="자기소개"
          placeholder={`다른 플레이어들에게 보일 자기소개를 작성해 주세요\n200자 이내 작성 가능합니다.`}
          required
          style={{ height: "130px", resize: "none" }}
          displayLength
          maxLength={200}
          {...register("selfIntro", { required: true })}
        />
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          id="profileImgUpload"
          {...register("image", {
            onChange: handlePreviewImg,
          })}
        />
      </div>
    </StageWrapper>
  );
}

const ImageUpload = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 88px;
  height: 88px;
  border-radius: 14px;
  background-color: var(--gray50);
  align-items: center;
  justify-content: center;
  user-select: none;

  svg {
    width: 44px;
    height: 44px;
    fill: var(--gray300);
  }
  .camera-icon-wrapper {
    position: absolute;
    display: flex;
    right: -6px;
    top: -6px;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: var(--primary500);
    border: 2px solid var(--background-light);
    svg {
      width: 14px;
      height: 14px;
      fill: #fff;
    }
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.25s;
  }
`;

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  overflow: hidden;
`;

export default Stage4;
