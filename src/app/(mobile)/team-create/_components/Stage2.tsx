import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";

import StageWrapper, { SetStepType } from "../../user/apply/stage/_components/StageWrapper";
import { stageFormWrapper, stageWrapper } from "../../user/apply/stage/_components/stage.css";
import { convertWebpImage } from "@/util/webp";

import PersonIcon from "@/assets/icon/common/filled/Person.svg";
import PlusIcon from "@/assets/icon/common/Plus.svg";
import { BasicInput } from "@/components/common/input/BaseInput";
import { TextArea } from "@/components/common/TextArea";
import DateInput from "@/components/common/DateInput";
import { flexColumnGap20 } from "@/styles/container.css";

function TeamCreateStage2({ setStep }: SetStepType) {
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
      const webpFile = new File([webpBlob], "team_logo.webp", { type: "image/webp" });
      const previewBase64 = URL.createObjectURL(webpBlob);
      setPreviewImage(previewBase64);
      setValue("teamLogo", webpFile);
    } catch (error) {
      console.error("Error converting image to WebP:", error);
    }
  };

  useEffect(() => {
    if (watch("teamLogo")) {
      const file = watch("teamLogo")[0];
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
    setStep("Stage1");
  };
  const handleNextStep = () => {
    setStep("Stage3");
  };

  return (
    <StageWrapper
      onClickPrev={handlePrevStep}
      onClickNext={handleNextStep}
      length={4}
      current={2}
      disableNext={!!watch("watch")}
    >
      <div className={stageFormWrapper}>
        <div>
          <h3 className={stageWrapper.title}>팀 프로필을 작성해주세요</h3>
          <p className={stageWrapper.description}>새로 만들 팀 정보를 입력해 주세요.</p>
        </div>
        <ImageUpload htmlFor="profileImgUpload">
          {previewImage ? <PreviewImg src={previewImage} /> : <PersonIcon />}
          <div className="camera-icon-wrapper">
            <PlusIcon />
          </div>
        </ImageUpload>
        <div className={flexColumnGap20}>
          <BasicInput type="text" title="팀 이름" required {...register("name", { required: true })} />
          <DateInput title="창단일" required />
          <TextArea
            title="팀 소개"
            placeholder={`다른 플레이어들에게 보일 팀 소개글을 작성해 주세요\n150자 이내 작성 가능합니다. (선택)`}
            required
            style={{ height: "130px", resize: "none" }}
            displayLength
            maxLength={150}
            {...register("introduce", { required: true })}
          />
        </div>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          id="profileImgUpload"
          {...register("teamLogo", {
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

export default TeamCreateStage2;
