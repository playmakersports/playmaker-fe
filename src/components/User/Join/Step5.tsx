import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/router";

import { FONTS } from "@/styles/common";
import Button from "@/components/common/Button";
import LogoSymbol from "@/assets/logo/LogoSymbol.svg";
import { BaseContainer } from "@/components/common/Container";

function Step5() {
  const router = useRouter();
  return (
    <Container>
      <Contents>
        <Title>
          <LogoSymbol />
          <p>환영합니다</p>
          <p>플메와 함께 달려볼까요</p>
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
              <circle cx="126.5" cy="241.5" r="91.5" fill="#306DEF" fill-opacity="0.4" />
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
              <circle cx="77" cy="77" r="40" stroke="#20FF76" stroke-opacity="0.5" stroke-width="4" />
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
          <svg
            className="blue-small"
            width="372"
            height="469"
            viewBox="0 0 460 469"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1862_2160)">
              <circle cx="234.5" cy="234.5" r="84.5" fill="#92C5FF" fill-opacity="0.4" />
            </g>
            <defs>
              <filter
                id="filter0_f_1862_2160"
                x="0"
                y="0"
                width="469"
                height="469"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_1862_2160" />
              </filter>
            </defs>
          </svg>
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

const TextShowAnimate = keyframes`
    from {
        opacity: 0;
        transform: translateY(-35%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
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
  animation-delay: 1.55s;
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
  width: 100vw;
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
    right: -15%;
  }
`;

const Title = styled.h3`
  ${FONTS.HEAD2};
  text-align: center;
  font-size: 2.4rem;
  line-height: 3.8rem;

  svg {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
  }

  p {
    opacity: 0;
    animation: ${TextShowAnimate} 0.4s forwards;
    color: var(--main);
    user-select: none;

    &:first-of-type {
      animation-delay: 0.35s;
    }
    &:last-of-type {
      animation-delay: 0.95s;
    }
  }
`;

export default Step5;
