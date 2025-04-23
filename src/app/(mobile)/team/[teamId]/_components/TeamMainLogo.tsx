import { FONTS } from "@/styles/common";
import React from "react";
import styled, { keyframes } from "styled-components";

type Props = { isPlaying?: boolean; imgSrc: string };
function TeamMainLogo({ isPlaying = false, imgSrc }: Props) {
  return (
    <Container>
      {isPlaying && <Playing />}
      <RoundWrapper $playing={isPlaying}>
        <ProfileImg src={imgSrc} $playing={isPlaying} alt="팀 프로필 이미지" />
      </RoundWrapper>
    </Container>
  );
}

const rotateCircle = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
`;

const Container = styled.div`
  position: relative;
  width: 58px;
  height: 58px;
`;
const RoundWrapper = styled.div<{ $playing: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  border-radius: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    display: ${({ $playing }) => ($playing ? "block" : "none")};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--main);
    background: linear-gradient(var(--main) 0%, #10bfff 45%, #90d621 95%);
    animation: ${rotateCircle} 2s linear infinite;
  }
`;
const ProfileImg = styled.img<{ $playing: boolean }>`
  margin: ${({ $playing }) => ($playing ? "3px" : "0")};
  border: 4px solid var(--background-light);
  border: ${({ $playing }) => ($playing ? "" : "1px solid var(--gray300)")};
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  z-index: 1;
  border-radius: 100%;
  object-fit: cover;
  background-color: #fff;
`;
const Playing = styled.p`
  ${FONTS.caption1("semibold")};
  font-size: 1.2rem;
  position: absolute;
  padding: 3px 8px;
  border-radius: 6px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary500);
  border: 2px solid var(--background-light);
  color: #fff;
  z-index: 2;
  word-break: keep-all;
  &::before {
    content: "경기중";
  }
`;

export default TeamMainLogo;
