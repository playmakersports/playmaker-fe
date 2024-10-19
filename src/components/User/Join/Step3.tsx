import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";

import { StepFormWrapper } from "@/components/common/global/Text";
import PersonIcon from "@/assets/icon/global/Person.svg";
import CameraIcon from "@/assets/icon/global/Camera.svg";
import StagePageContainer from "@/components/layouts/StagePageContainer";
import { atomServiceApply, atomServiceApplyImage } from "@/atom/user";

function Step3({ setStep }: { setStep: (prev: number) => void }) {
  const { register } = useForm();
  const imgInputRef = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<string>("");
  const [reqImgFile, setReqImgFile] = useState<File | null>(null);
  // const [getter, setter] = useAtom(atomServiceApply);
  const [getterImg, setterImg] = useAtom(atomServiceApplyImage);

  const previewImg = () => {
    const file = imgInputRef.current?.files?.[0];
    const reader = new FileReader();
    if (file) {
      setReqImgFile(file);
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          setImgFile(reader.result.toString());
        }
      };
    }
  };

  return (
    <StagePageContainer
      stepper
      button={{
        text: "다음",
        onClick: () => {
          setStep(4);
          setterImg(reqImgFile);
        },
      }}
    >
      <StepFormWrapper>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          id="profileImgUpload"
          ref={imgInputRef}
          onChange={previewImg}
        />
        <ImageUpload htmlFor="profileImgUpload">
          {imgFile ? <PreviewImg src={imgFile} /> : <PersonIcon />}
          <div className="camera-icon-wrapper">
            <CameraIcon />
          </div>
        </ImageUpload>
      </StepFormWrapper>
    </StagePageContainer>
  );
}

const ImageUpload = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  margin: 40px auto 0;
  width: 152px;
  height: 152px;
  border-radius: 50%;
  background-color: var(--gray300);
  align-items: center;
  justify-content: center;
  user-select: none;

  svg {
    width: 96px;
    height: 96px;
    fill: var(--gray400);
  }
  .camera-icon-wrapper {
    position: absolute;
    display: flex;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--main);
    border: 4px solid var(--background-light);
    svg {
      width: 24px;
      height: 24px;
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

export default Step3;
