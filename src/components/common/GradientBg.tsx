import styled from "@emotion/styled";
import React from "react";

function GradientBg({
  height = "100vh",
  position,
  opacity = 1,
}: {
  height?: string;
  position: "absolute" | "fixed";
  opacity?: number;
}) {
  return (
    <Background style={{ position, opacity, height }}>
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
  );
}

const Background = styled.div`
  width: 100%;
  max-width: 600px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  background: linear-gradient(to bottom, rgb(148, 144, 223, 0.1) 0%, rgb(148, 144, 223, 0.2) 100%);
  transition: opacity 0.6s;
  overflow: hidden;

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

export default GradientBg;