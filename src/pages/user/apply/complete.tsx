import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/router";

import Button from "@/components/common/Button";
import { BaseContainer } from "@/components/common/Container";
import CharacterWelcome from "../../../components/User/Join/CharacterWelcome";

function JoinComplete() {
  const router = useRouter();

  return (
    <Container>
      <Contents>
        <Title>
          <CharacterWelcome name={router.query.name as string} gender={router.query.gender as "male" | "female"} />
        </Title>
        <Background>
          <svg
            className="blue-large"
            width="368"
            height="483"
            viewBox="0 0 368 483"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1862_2164)">
              <circle cx="126.5" cy="241.5" r="91.5" fill="#306DEF" fillOpacity="0.6" />
            </g>
            <defs>
              <filter
                id="filter0_f_1862_2164"
                x="-115"
                y="0"
                width="483"
                height="483"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_1862_2164" />
              </filter>
            </defs>
          </svg>
          <svg
            className="green"
            width="154"
            height="154"
            viewBox="0 0 154 154"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1862_2163)">
              <circle cx="77" cy="77" r="40" stroke="#20FF76" stroke-opacity="0.8" stroke-width="4" />
            </g>
            <defs>
              <filter
                id="filter0_f_1862_2163"
                x="0.853657"
                y="0.853657"
                width="152.293"
                height="152.293"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="17.0732" result="effect1_foregroundBlur_1862_2163" />
              </filter>
            </defs>
          </svg>
          <span className="blue-small" />
        </Background>
      </Contents>
      <ButtonWrapper>
        <Button type="button" mode="MAIN" onClick={() => router.push("/")} fullWidth>
          홈 화면
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

const ButtonShowAnimate = keyframes`
    from {
        opacity: 0;
        transform: translateY(35%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - var(--safe-area-top) - 1px);
`;
const ButtonWrapper = styled.div`
  opacity: 0;
  padding-bottom: calc(var(--env-sab) + 48px - 20px);
  animation: ${ButtonShowAnimate} 0.5s forwards;
  animation-delay: 0.75s;
`;
const Contents = styled.article`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  top: 0;

  svg {
    position: absolute;
  }
  .blue-large {
    margin-top: 23%;
    left: -5%;
  }
  .green {
    left: 50%;
    margin-top: 20%;
    transform: translateX(-50%);
  }
  .blue-small {
    position: absolute;
    width: min(55vw, 600px);
    max-width: 300px;
    height: 55vw;
    max-height: 300px;
    background-color: #92c5ff;
    margin-top: 35%;
    right: -5%;
    border-radius: 50%;
    box-shadow: 0 0 40px 32px #92c5ff;
    filter: blur(20px);
    opacity: 0.3;
  }
`;

const Title = styled.div`
  z-index: 1;
`;

export default JoinComplete;
