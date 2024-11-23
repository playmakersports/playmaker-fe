import React, { useState } from "react";
import styled from "@emotion/styled";
import { FONTS } from "@/styles/common";

type ButtonsProps = { svg: React.ReactNode; bgColor: string; text: string; onClick: () => void };
type Props = {
  left: [ButtonsProps, ButtonsProps];
  children: React.ReactNode;
  right: ButtonsProps;
};
function SwipeSelector(props: Props) {
  const { children, left, right } = props;
  const [width, setWidth] = useState(0);
  const [activeButton, setActiveButton] = useState(false);
  const [touchX, setTouchX] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    const startTarget = e.changedTouches[0].pageX;
    setTouchStartX(startTarget);
  };

  const handleShowButton = (targetX: number) => {
    if (touchStartX < targetX) {
      setTouchX(width / 2 + 10);
      setActiveButton(true);
    } else {
      setTouchX(-1 * (width / 2 - 60));
      setActiveButton(true);
    }
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const targetX = e.changedTouches[0].pageX;
    if (!activeButton && Math.abs(touchStartX - targetX) > 20) {
      handleShowButton(targetX);
    } else {
      setTouchX(0);
      setTouchStartX(0);
      setActiveButton(false);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const targetX = e.changedTouches[0].pageX;
    if (!activeButton && Math.abs(touchStartX - targetX) > 20 && targetX % 4 === 0) {
      setTouchX(touchStartX < targetX ? targetX : -1 * (width - targetX));
    }
  };

  return (
    <Container ref={(ref) => setWidth(ref?.clientWidth ?? 0)} moveX={touchX}>
      <div className="inner-wrapper">
        <Buttons bgColor={left[0].bgColor}>
          {left.map((btn) => (
            <Button key={btn.bgColor} bgColor={btn.bgColor} onClick={btn.onClick}>
              {btn.svg}
              <span>{btn.text}</span>
            </Button>
          ))}
        </Buttons>
        <Displayed onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          {children}
        </Displayed>
        <Buttons bgColor={right.bgColor}>
          <Button bgColor={right.bgColor} onClick={right.onClick}>
            {right.svg}
            <span>{right.text}</span>
          </Button>
        </Buttons>
      </div>
    </Container>
  );
}

const Container = styled.div<{ moveX: number }>`
  position: relative;
  left: calc(-50% - 150px / 2);
  ${FONTS.MD1};
  .inner-wrapper {
    width: calc(200% + 150px);
    display: flex;
    flex-wrap: nowrap;
    transform: translate3d(${({ moveX }) => moveX}px, 0, 0);
    transition: transform 0.3s;
    overflow: hidden;
  }
  user-select: none;

  &:last-of-type {
    .inner-wrapper {
      border-bottom: none;
    }
  }
`;

const Displayed = styled.div`
  flex-shrink: 0;
  width: min(var(--mobile-max-width), 100vw);
  padding: 16px;
  background-color: var(--background-light);
`;
const Buttons = styled.div<{ bgColor: string }>`
  position: relative;
  display: inline-flex;
  justify-content: flex-end;
  width: 50%;
  background-color: ${({ bgColor }) => bgColor};
  &:last-of-type {
    justify-content: flex-start;
  }
  &:first-of-type::after {
    content: "";
    position: absolute;
    right: 0;
    width: 10px;
    height: 100%;
    background: var(--background-light);
    border-radius: 10px 0 0 10px;
  }
  &:last-of-type::before {
    content: "";
    position: absolute;
    left: 0;
    width: 10px;
    height: 100%;
    background: var(--background-light);
    border-radius: 0 10px 10px 0;
  }
`;
const Button = styled.button<{ bgColor: string }>`
  display: flex;
  padding: 0 22px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background-color: ${({ bgColor }) => bgColor};
  color: var(--gray0);
  font-size: 1.4rem;
  font-weight: 500;

  svg {
    width: 24px;
    height: 24px;
  }

  &:nth-child(1) {
    padding-left: 42px;
  }
  &:nth-child(2) {
    padding-right: 32px;
  }
`;

export default SwipeSelector;
