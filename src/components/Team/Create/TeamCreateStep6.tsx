"use client";
import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { usePost } from "@/apis/hook/query";
import { usePopup } from "@/components/common/global/PopupProvider";

import { FONTS } from "@/styles/common";
import StagePageContainer from "@/components/layouts/StagePageContainer";
import { atomTeamCreate, atomTeamCreateLogo } from "@/atom/team";
import CameraIcon from "@/assets/icon/common/filled/Image.svg";

function TeamCreateStep6() {
  const router = useRouter();
  const popup = usePopup();
  const coverImageInputRef = useRef<HTMLInputElement>(null);

  const teamCreateValue = useAtomValue(atomTeamCreate);
  const teamLogoValue = useAtomValue(atomTeamCreateLogo);

  const { mutateAsync, data, error } = usePost<{ teamId: string }>("/api/team/create", "form-data");

  const [coverPreview, setCoverPreview] = useState<string>("");
  const [coverImgFile, setCoverImgFile] = useState<File | null>(null);

  const previewCoverImg = () => {
    const file = coverImageInputRef.current?.files?.[0];
    const reader = new FileReader();
    if (file) {
      setCoverImgFile(file);
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          setCoverPreview(reader.result.toString());
        }
      };
    }
  };

  const onSubmitForm = async () => {
    router.push("/team/create/pending");
    try {
      await mutateAsync({
        data: {
          ...teamCreateValue,
          image: teamLogoValue,
          banner: coverImgFile,
        },
      });
      router.replace(`/team/create/success?teamId=${data?.teamId}`);
    } catch {
      const errorConfirm = await popup?.confirm(`팀 생성에 실패했어요\n${error?.message}`, {
        buttonText: { yes: "홈 화면 이동", no: "닫기" },
      });
      if (errorConfirm) {
        router.replace("/");
      } else {
        router.back();
      }
    }
  };

  return (
    <StagePageContainer
      stepper={true}
      headerAlign="center"
      title="팀 대표 이미지"
      description="팀을 대표하는 이미지를 선택하세요"
      button={{
        text: "다음",
        onClick: onSubmitForm,
      }}
    >
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        id="coverImgUpload"
        ref={coverImageInputRef}
        onChange={previewCoverImg}
      />

      <CoverUpload htmlFor="coverImgUpload" $src={coverPreview}>
        {coverPreview ? (
          <div className="camera-icon-wrapper changed">
            <CameraIcon />
            이미지 교체
          </div>
        ) : (
          <div className="camera-icon-wrapper">
            <CameraIcon />
            이미지 첨부
          </div>
        )}
      </CoverUpload>
      <DisplayAboveBottom>이제 마지막 단계에요!</DisplayAboveBottom>
    </StagePageContainer>
  );
}

const CoverUpload = styled.label<{ $src: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 28px 0 0;
  height: 230px;
  background: ${({ $src }) => `url(${$src})`};
  border: 1px solid var(--gray100);
  background-color: var(--gray50);
  background-size: 100%;
  background-position: center;
  border-radius: 20px;

  div.camera-icon-wrapper {
    ${FONTS.body4("regular")};
    display: flex;
    width: 88px;
    height: 88px;
    gap: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--gray500);
    &.changed {
      backdrop-filter: blur(3px);
      background-color: rgba(0, 0, 0, 0.08);
      border-radius: 50%;
      color: var(--white);
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      svg {
        fill: var(--white);
      }
    }
  }
  svg {
    width: 28px;
    height: 28px;
    fill: var(--gray400);
  }
`;

const showAboveBottom = keyframes`
  from {
    transform: translate3d(-50%, 20%, 0);
  } to {
    opacity: 1;
    visibility: visible;
    transform: translate3d(-50%, 0, 0);
  }
`;
const DisplayAboveBottom = styled.div`
  user-select: none;
  position: fixed;
  margin-bottom: 12px;
  left: 50%;
  bottom: calc(var(--env-sab) + 60px);
  padding: 8px 20px;
  width: max-content;
  ${FONTS.body3("regular")};
  color: var(--purple300);
  border-radius: 10px;
  background-color: #fff;
  letter-spacing: 0.2px;
  animation: ${showAboveBottom} 0.65s forwards;
  opacity: 0;
  animation-delay: 0.15s;
  animation-timing-function: cubic-bezier(0.2, 0.7, 0.3, 1);
`;

export default TeamCreateStep6;
