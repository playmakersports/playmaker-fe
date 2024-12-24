"use client";

import { FONTS } from "@/styles/common";
import styled from "styled-components";
import React from "react";

type Props = { label?: string; toggled: boolean; setToggle: React.Dispatch<React.SetStateAction<boolean>> };
function ToggleInput({ label, toggled, setToggle }: Props) {
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  if (label) {
    return (
      <LabelWrapper $isToggled={toggled}>
        <span onClick={() => setToggle((prev) => !prev)}>{label}</span>
        <Wrapper onClick={handleToggle} $isToggled={toggled}>
          <Circle $isToggled={toggled} />
        </Wrapper>
      </LabelWrapper>
    );
  }
  return (
    <Wrapper onClick={handleToggle} $isToggled={toggled}>
      <Circle $isToggled={toggled} />
    </Wrapper>
  );
}

const LabelWrapper = styled.div<{ $isToggled: boolean }>`
  ${FONTS.MD2};
  display: flex;
  align-items: center;
  gap: 6px;
  span {
    font-weight: 400;
    color: ${({ $isToggled }) => ($isToggled ? "var(--main)" : "var(--gray500)")};
    user-select: none;
    cursor: pointer;
    transition: color 0.3s;
  }
`;
const Wrapper = styled.div<{ $isToggled: boolean }>`
  width: 40px;
  height: 22px;
  border-radius: 12px;
  background-color: ${({ $isToggled }) => ($isToggled ? "var(--main)" : "var(--gray400)")};
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;
`;

const Circle = styled.div<{ $isToggled: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 2px;
  transform: ${({ $isToggled }) => ($isToggled ? "translateX(20px)" : "translateX(2px)")};
  will-change: transform;
  transition: transform 0.25s;
`;

export default ToggleInput;
