import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

type Props = { isPlaying?: boolean; imgSrc: string };
function ProfileImage({ isPlaying = false, imgSrc }: Props) {
  return (
    <Container>
      {isPlaying && <Playing />}
      <RoundWrapper playing={isPlaying}>
        <ProfileImg src={imgSrc} playing={isPlaying} alt="팀 프로필 이미지" />
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
  width: 80px;
  height: 80px;
`;
const RoundWrapper = styled.div<{ playing: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    display: ${({ playing }) => (playing ? "block" : "none")};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--main);
    background: linear-gradient(var(--main) 0%, #10bfff 45%, #90d621 95%);
    animation: ${rotateCircle} 2s linear infinite;
  }
`;
const ProfileImg = styled.img<{ playing: boolean }>`
  margin: ${({ playing }) => (playing ? "3px" : "0")};
  border: 7px solid var(--background-light);
  border: ${({ playing }) => (playing ? "" : "1px solid var(--gray7)")};
  width: calc(100% - 7px);
  height: calc(100% - 7px);
  z-index: 1;
  border-radius: 100%;
  object-fit: cover;
  background-color: #fff;
`;
const Playing = styled.p`
  position: absolute;
  padding: 4px 10px;
  border-radius: 12px;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--main);
  border-top: 3px solid var(--background-light);
  border-left: 3px solid var(--background-light);
  border-right: 3px solid var(--background-light);
  color: #fff;
  font-weight: 700;
  font-size: 1.4rem;
  z-index: 2;
  word-break: keep-all;
  &::before {
    content: "경기중";
  }
`;

export default ProfileImage;
