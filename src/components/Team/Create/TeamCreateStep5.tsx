import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useAtom } from "jotai";

import StagePageContainer from "@/components/layouts/StagePageContainer";

import CameraIcon from "@/assets/icon/global/Camera.svg";
import { TEAM_COLORS } from "@/constants/teamValue";
import { hexToRgb } from "@/util/common";
import { FONTS } from "@/styles/common";
import { atomTeamCreate, atomTeamCreateLogo } from "@/atom/team";

function TeamCreateStep5({ setStep }: { setStep: (prev: number) => void }) {
  const logoImageInputRef = useRef<HTMLInputElement>(null);
  const [teamCreateValue, setTeamCreateValue] = useAtom(atomTeamCreate);
  const [teamLogoCreateValue, setTeamLogoCreateValue] = useAtom(atomTeamCreateLogo);

  const [logoPreview, setLogoPreview] = useState<string>("");
  const [logoImgFile, setLogoImgFile] = useState<File | null>(null);
  const [teamColor, setTeamColor] = useState("");

  const previewLogoImg = () => {
    const file = logoImageInputRef.current?.files?.[0];
    const reader = new FileReader();
    if (file) {
      setLogoImgFile(file);
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          setLogoPreview(reader.result.toString());
        }
      };
    }
  };

  return (
    <StagePageContainer
      stepper={true}
      headerAlign="center"
      title="팀 상징"
      description="팀 로고와 상징색을 선택하세요"
      button={{
        text: "다음",
        onClick: () => {
          setTeamCreateValue((prev) => ({ ...prev, teamColor }));
          setTeamLogoCreateValue(logoImgFile);
          setStep(6);
        },
      }}
    >
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        id="logoImgUpload"
        ref={logoImageInputRef}
        onChange={previewLogoImg}
      />

      <LogoRound targetColor={teamColor}>
        <LogoUpload htmlFor="logoImgUpload" src={logoPreview}>
          {!logoPreview && <CameraIcon />}
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
      <DisplayAboveBottom>거의 다 왔어요!</DisplayAboveBottom>
    </StagePageContainer>
  );
}

const LogoRound = styled.div<{ targetColor: string }>`
  display: flex;
  padding: 3px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 120px;
  height: 120px;
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
  width: 112px;
  height: 112px;

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

const Colors = styled.ul`
  display: grid;
  margin-top: 32px;
  padding: 20px 4px;
  grid-template-columns: repeat(5, 1fr);
  gap: 28px 8px;

  li {
    display: flex;
    justify-content: center;
  }
`;

const ColorButton = styled.button<{ targetColor: string }>`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ targetColor }) => targetColor};
  box-sizing: content-box;

  &.selected {
    outline: 4px solid #fff;
    box-shadow: 0 0 0 7px ${({ targetColor }) => targetColor};
    &::before {
      content: "✓";
      color: #fff;
      font-weight: 500;
      font-size: 2.2rem;
      opacity: 0.9;
    }
  }

  &:active {
    box-shadow: 0 0 20px 6px ${({ targetColor }) => `rgba(${hexToRgb(targetColor, "String")},0.35)`};
    transform: scale(0.97);
    transition: all 0.3s;
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
  ${FONTS.MD1W500};
  color: var(--purple300);
  border-radius: 10px;
  background-color: #fff;
  letter-spacing: 0.2px;
  animation: ${showAboveBottom} 0.65s forwards;
  opacity: 0;
  animation-delay: 0.15s;
  animation-timing-function: cubic-bezier(0.2, 0.7, 0.3, 1);
`;

export default TeamCreateStep5;
