import React, { useCallback, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/router";

import { FONTS } from "@/styles/common";
import Button from "../common/Button";

type Props = {
  showInfo: { show: boolean; playerId: string; x?: number; y?: number };
  handleClose: () => void;
};
function ProfileTag(props: Props) {
  const { showInfo, handleClose } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const outSideClick = useCallback((e: any) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      document.getElementById("main_Container")!.style.overflowY = "auto";
      handleClose();
    }
  }, []);

  useEffect(() => {
    if (showInfo.show) {
      document.getElementById("main_Container")!.style.overflowY = "hidden";
    }
    document.addEventListener("mousedown", outSideClick);
    return () => {};
  }, [showInfo]);

  return (
    <Container ref={containerRef} showInfo={showInfo}>
      <div className="arrow" />
      <Wrapper>
        <div className="profile-image"></div>
        <div className="profile-info">
          <p className="profile-name">손수철</p>
          <p>1995.07.05</p>
          <div className="button-wrapper">
            <Button
              type="button"
              mode="MAIN"
              onClick={() => router.push(`/room/${showInfo.playerId}`)}
              autoHeight
              flex={3}
            >
              프로필 이동
            </Button>
            <Button type="button" mode="OPTION2" onClick={() => console.log("통계")} autoHeight flex={1}>
              통계
            </Button>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}

const ShowProfile = keyframes`
from { transform: scale(0.5); opacity: 0.5; };
to { transform: scale(1); opacity: 1; };
`;
const Container = styled.div<{ showInfo: Props["showInfo"] }>`
  position: fixed;
  display: ${({ showInfo }) => (showInfo.show ? "block" : "none")};
  bottom: -100%;
  margin-top: 8px;
  left: 16px;
  top: ${({ showInfo }) => showInfo.y}px;
  width: calc(100vw - 32px);
  height: max-content;
  border-radius: 12px;
  background-color: var(--background-light);
  border: 1px solid var(--neutral-n40);
  z-index: 10;
  animation: ${ShowProfile} 0.25s;
  transform-origin: ${({ showInfo }) => showInfo.x}px top;

  .arrow {
    position: absolute;
    left: ${({ showInfo }) => showInfo.x}px;
    width: 16px;
    height: 16px;
    background-color: var(--background-light);
    border-top: 1px solid var(--neutral-n40);
    border-left: 1px solid var(--neutral-n40);
    transform: rotate(45deg) translateX(-76%);
    box-shadow: -8px -8px 12px 2px rgba(141, 141, 141, 0.1);
  }
`;

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  gap: 12px;

  .profile-image {
    flex-shrink: 0;
    width: calc(100px - 32px);
    height: calc(100px - 32px);
    border: 1px solid var(--gray300);
    border-radius: 100%;
  }
  .profile-info {
    padding: 1px 0;
    width: 100%;
    ${FONTS.MD1W500};
    p.profile-name {
      font-weight: 600;
      font-size: 1.8rem;
    }
    p {
      font-weight: 400;
      font-size: 1.6rem;
    }
  }

  .button-wrapper {
    display: flex;
    margin-top: 8px;
    gap: 8px;
  }
`;

export default ProfileTag;
