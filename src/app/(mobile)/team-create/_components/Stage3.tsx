import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";

import StageWrapper, { SetStepType } from "../../user/apply/stage/_components/StageWrapper";
import { stageFormWrapper, stageWrapper } from "../../user/apply/stage/_components/stage.css";
import { convertWebpImage } from "@/util/webp";

import ImageIcon from "@/assets/icon/common/filled/Image.svg";
import PlusIcon from "@/assets/icon/common/Plus.svg";
import { flexColumnGap40 } from "@/styles/container.css";
import InputWrapper from "@/components/common/input/InputWrapper";

function TeamCreateStage3({ setStep }: SetStepType) {
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
      const file = watch("teamLogo");
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
    setStep("Stage2");
  };
  const handleNextStep = () => {
    setStep("Stage4");
  };

  const COLOR_LIST = [
    "FE110F",
    "E35B62",
    "FF480A",
    "FFB813",
    "FFD878",
    "124DFF",
    "07D9CC",
    "66F51F",
    "0FFF9B",
    "0B8585",
    "6512FF",
    "BF61FD",
    "D518F2",
    "F866D9",
    "cbd5e1",
  ];

  return (
    <StageWrapper
      onClickPrev={handlePrevStep}
      onClickNext={handleNextStep}
      length={5}
      current={3}
      disableNext={!!watch("watch")}
    >
      <div className={stageFormWrapper}>
        <div>
          <h3 className={stageWrapper.title}>팀 로고와 색상을 선택해 주세요</h3>
          <p className={stageWrapper.description}>팀을 대표하는 이미지와 색을 선택해 주세요!</p>
        </div>
        <div className={flexColumnGap40}>
          <ImageUpload htmlFor="profileImgUpload">
            {previewImage ? <PreviewImg src={previewImage} /> : <ImageIcon />}
            <div className="camera-icon-wrapper">
              <PlusIcon />
            </div>
          </ImageUpload>
          <InputWrapper title="팀 색상" required>
            <ColorWrapper>
              {COLOR_LIST.map((color) => (
                <label
                  key={color}
                  style={{
                    backgroundColor: `#${color}`,
                  }}
                >
                  <input
                    type="radio"
                    style={{ display: "none" }}
                    value={color}
                    {...register("teamColor", { required: true })}
                  />
                </label>
              ))}
            </ColorWrapper>
          </InputWrapper>
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
  border-radius: 50%;
  background-color: var(--gray50);
  border: 4px solid var(--background-light);
  outline: 4px solid var(--gray300);
  align-items: center;
  justify-content: center;
  user-select: none;

  svg {
    width: 36px;
    height: 36px;
    fill: var(--gray300);
  }
  .camera-icon-wrapper {
    position: absolute;
    display: flex;
    right: -10px;
    top: -10px;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: var(--primary500);
    border: 2px solid var(--background-light);
    svg {
      width: 20px;
      height: 20px;
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
  border-radius: 50%;
  overflow: hidden;
`;

const ColorWrapper = styled.div`
  display: grid;
  padding: 16px;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid var(--gray200);
  gap: 24px;

  & > label {
    cursor: pointer;
    display: flex;
    margin: 0 auto;
    border-radius: 8px;
    width: 32px;
    height: 32px;

    &:has(input:checked) {
      outline: 3px solid var(--gray900);
    }
  }
`;

export default TeamCreateStage3;
