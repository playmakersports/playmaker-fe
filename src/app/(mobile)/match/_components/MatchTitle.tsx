"use client";

import React, { useRef, useState, useEffect } from "react";
import { usePageTitle } from "@/hook/usePageTitle";
import styled from "styled-components";
import { FONTS } from "@/styles/common";

function MatchTitle({ competitionName }: { competitionName: string }) {
  usePageTitle({ scrollBgColor: [100, "transparent", "var(--background-light)"] });
  const innerRef = useRef<HTMLParagraphElement>(null);
  const [swipeWidth, setSwipeWidth] = useState(0);

  useEffect(() => {
    if (innerRef.current) {
      console.log(innerRef.current.offsetWidth, window.innerWidth, innerRef.current.offsetWidth - window.innerWidth);
      setSwipeWidth(innerRef.current.offsetWidth - window.innerWidth);
    }
  }, []);

  return (
    <Wrapper $swipeWidth={swipeWidth}>
      <p className="inner" ref={innerRef}>
        {competitionName}
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $swipeWidth: number }>`
  position: relative;
  margin: -4px auto 10px;
  padding: 12px 0;
  width: 100%;
  text-align: center;
  border-radius: 50px;
  background-color: rgba(var(--gray0-rgb), 0.5);
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    z-index: 2;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 100%;
    background: linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    z-index: 2;
  }

  p.inner {
    ${FONTS.MD2};
    padding: 0 20px;
    white-space: nowrap;
    display: inline-block;
    animation: ${({ $swipeWidth }) => ($swipeWidth > 0 ? "scroll 8s linear infinite" : "none")};
    animation-delay: 0.9s;
    color: var(--gray700);
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(-${({ $swipeWidth }) => $swipeWidth + 32}px);
    }
    50% {
      transform: translateX(-${({ $swipeWidth }) => $swipeWidth + 32}px);
    }
    85% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default MatchTitle;