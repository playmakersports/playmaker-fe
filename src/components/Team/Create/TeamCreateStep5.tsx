import React, { useRef, useState } from "react";
import styled from "@emotion/styled";

import { FONTS } from "@/styles/common";
import StagePageContainer from "@/components/layouts/StagePageContainer";

import CameraIcon from "@/assets/icon/global/Camera.svg";
import { TEAM_COLORS } from "@/constants/teamValue";
import { BasicWhiteCard } from "@/components/common/Card";
import { hexToRgb } from "@/util/common";

function TeamCreateStep5({ setStep }: { setStep: (prev: number) => void }) {
  const coverImageInputRef = useRef<HTMLInputElement>(null);
  const logoImageInputRef = useRef<HTMLInputElement>(null);
  const [coverImgFile, setCoverImgFile] = useState<string>("");
  const [logoImgFile, setLogoImgFile] = useState<string>("");
  const [teamColor, setTeamColor] = useState("");

  const previewCoverImg = () => {
    const file = coverImageInputRef.current?.files?.[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          setCoverImgFile(reader.result.toString());
        }
      };
    }
  };
  const previewLogoImg = () => {
    const file = logoImageInputRef.current?.files?.[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          setLogoImgFile(reader.result.toString());
        }
      };
    }
  };

  return (
    <StagePageContainer
      stepper={true}
      title={`팀 이미지와 색상을\n선택해주세요`}
      button={{
        text: "다음",
        onClick: () => setStep(4),
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
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        id="logoImgUpload"
        ref={logoImageInputRef}
        onChange={previewLogoImg}
      />
      <CoverUpload htmlFor="coverImgUpload" src={coverImgFile}>
        {!coverImgFile && (
          <div className="camera-icon-wrapper">
            <CameraIcon />팀 커버 이미지를 넣어주세요
          </div>
        )}
      </CoverUpload>
      <LogoRound targetColor={teamColor}>
        <LogoUpload htmlFor="logoImgUpload" src={logoImgFile}>
          {!logoImgFile && <CameraIcon />}
        </LogoUpload>
      </LogoRound>
      <Colors>
        {Object.values(TEAM_COLORS).map((color) => (
          <li key={color}>
            <ColorButton
              type="button"
              className={color === teamColor ? "selected" : ""}
              onClick={() => setTeamColor(color)}
              targetColor={color}
            ></ColorButton>
          </li>
        ))}
      </Colors>
    </StagePageContainer>
  );
}

const CoverUpload = styled.label<{ src: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 28px -16px 0;
  width: calc(100% + 32px);
  height: 180px;
  background: ${({ src }) => `url(${src})`};
  background-color: var(--gray200);
  background-size: 100%;
  background-position: center;

  .camera-icon-wrapper {
    ${FONTS.MD3};
    display: flex;
    padding-bottom: 8px;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    color: var(--gray500);
  }
  svg {
    width: 24px;
    height: 24px;
    fill: var(--gray500);
  }
`;
const LogoRound = styled.div<{ targetColor: string }>`
  display: flex;
  padding: 3px;
  margin: -40px auto 0;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 96px;
  height: 96px;
  border: 4px solid ${({ targetColor }) => targetColor};
  box-sizing: content-box;
  background-color: var(--background-light);
  transition: border 0.3s;
`;
const LogoUpload = styled.label<{ src: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 88px;
  height: 88px;

  background: ${({ src }) => `url(${src})`};
  border: 1px solid var(--gray300);
  background-color: var(--gray200);
  background-size: cover;
  background-position: center;

  svg {
    width: 24px;
    height: 24px;
    fill: var(--gray500);
  }
`;

const Colors = styled(BasicWhiteCard.withComponent("ul"))`
  display: grid;
  margin-top: 20px;
  padding: 20px;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px 8px;

  li {
    display: flex;
    justify-content: center;
  }
`;

const ColorButton = styled.button<{ targetColor: string }>`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ targetColor }) => targetColor};
  box-sizing: content-box;

  &.selected {
    width: 28px;
    height: 28px;
    outline: 2px solid ${({ targetColor }) => targetColor};
    border: 2px solid var(--background-light);
    &::before {
      content: "✓";
      color: #fff;
      font-weight: 600;
      font-size: 1.6rem;
      opacity: 0.9;
    }
  }

  &:active {
    box-shadow: 0 0 20px 6px ${({ targetColor }) => `rgba(${hexToRgb(targetColor, "String")},0.35)`};
    transform: scale(0.97);
    transition: all 0.3s;
  }
`;
export default TeamCreateStep5;
