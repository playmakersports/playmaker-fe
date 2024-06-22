import React, { useState } from "react";
import styled from "@emotion/styled";
import { FONTS } from "@/styles/common";

import NoticeBellIcon from "@/assets/icon/global/NoticeBell.svg";

function PlayerSelector() {
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
      setTouchX(width / 2 - 30);
      setActiveButton(true);
    } else {
      setTouchX(-1 * (width / 2 - 30));
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
        <Buttons bgColor="var(--main)">
          <Button bgColor="var(--main)">
            <NoticeBellIcon fill="#fff" />
          </Button>
          <Button bgColor="orange">
            <NoticeBellIcon fill="#fff" />
          </Button>
        </Buttons>
        <Displayed onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <p className="profile-image"></p>
          <div className="profile-info-right">
            <p>이름</p>
            <p>1999.09.09 | 남자 | 리베로</p>
          </div>
        </Displayed>
        <Buttons bgColor="var(--sub1)">
          <Button bgColor="var(--sub1)">
            <NoticeBellIcon fill="#fff" />
          </Button>
        </Buttons>
      </div>
    </Container>
  );
}

const Container = styled.div<{ moveX: number }>`
  position: relative;
  left: -50%;
  ${FONTS.MD1};
  .inner-wrapper {
    width: 200%;
    display: flex;
    flex-wrap: nowrap;
    transform: translate3d(${({ moveX }) => moveX}px, 0, 0);
    transition: transform 0.3s;
    border-bottom: 1px solid #d9d9d9;
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
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  width: 100%;
  .profile-image {
    width: 44px;
    height: 44px;
    border: 1px solid rgba(var(--gray-h4));
    border-radius: 100%;
  }
  .profile-info-right {
  }
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
    background: linear-gradient(to left, rgba(78, 78, 78, 0.2) 0%, rgba(78, 78, 78, 0) 100%);
  }
  &:last-of-type::before {
    content: "";
    position: absolute;
    left: 0;
    width: 10px;
    height: 100%;
    background: linear-gradient(to right, rgba(78, 78, 78, 0.2) 0%, rgba(78, 78, 78, 0) 100%);
  }
`;
const Button = styled.button<{ bgColor: string }>`
  width: 72px;
  background-color: ${({ bgColor }) => bgColor};
  svg {
    width: 20px;
    height: 20px;
  }
`;

export default PlayerSelector;
