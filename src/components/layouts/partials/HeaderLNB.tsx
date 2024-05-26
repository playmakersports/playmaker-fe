import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { FONTS } from "@/styles/common";

import HomeIcon from "@/assets/icon/global/Home.svg";
import PersonIcon from "@/assets/icon/global/Person.svg";
import NoticeBellIcon from "@/assets/icon/global/NoticeBell.svg";
import { useRouter } from "next/router";

function HeaderLNB({ handleLnbState }: { handleLnbState: [boolean, (prev: boolean) => void] }) {
  const lnbRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [showLnb, setShowLnb] = handleLnbState;
  const [delayedLnb, setDelayedLnb] = useState(true);

  const lnbContents = [
    { text: "메인", icon: <HomeIcon />, link: "/" },
    { text: "라커룸", icon: <PersonIcon />, link: "/room" },
    { text: "알림", icon: <NoticeBellIcon />, link: "/notification" },
  ];

  const hideLnb = () => {
    setDelayedLnb(false);
    setTimeout(() => setShowLnb(false), 300);
  };
  useEffect(() => {
    const outSideClick = (e: any) => {
      if (showLnb && lnbRef.current && !lnbRef.current.contains(e.target)) {
        hideLnb();
      }
    };
    document.addEventListener("mousedown", outSideClick);
    return () => {
      document.removeEventListener("mousedown", outSideClick);
    };
  }, [showLnb]);

  return (
    <LNB delayedLnb={delayedLnb} ref={lnbRef}>
      <ul>
        {lnbContents.map((content, index) => (
          <Item
            key={content.link}
            className={delayedLnb ? `active-animation` : "hide-animation"}
            index={index}
            role="button"
            onClick={() => {
              router.push(content.link);
              hideLnb();
            }}
          >
            {content.icon}
            {content.text}
          </Item>
        ))}
      </ul>
      <Backdrop />
    </LNB>
  );
}

const pageIn = keyframes`
    from {
    transform: translate3d(120%,0,0);
    }
    to {
    transform: translate3d(0%,0,0);
    }
`;
const pageOut = keyframes`
    to {
    transform: translate3d(120%,0,0);
    }
    from {
    transform: translate3d(0%,0,0);
    }
`;

const Backdrop = styled.div`
  position: absolute;
  top: -28px;
  right: -40px;
  width: 80px;
  height: 100%;
  background-color: rgba(var(--lnb-back-drop-rgb), 0.5);
  box-shadow: 0 0 40px 40px rgba(var(--lnb-back-drop-rgb), 0.5);
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  user-select: none;
`;
const LNB = styled.div<{ delayedLnb: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;

  ${Backdrop} {
    opacity: ${({ delayedLnb }) => (delayedLnb ? 1 : 0)};
    transition: all 0.3s;
  }
  ul {
    position: relative;
    margin-top: calc(var(--safe-area-top) + 8px);
    padding: 0 16px 12px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
    z-index: 1001;
  }
`;

const Item = styled.li<{ index: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 20px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  text-align: right;
  ${FONTS.MD1W500};
  font-size: 1.8rem;

  transform: translateX(120%);
  background-color: rgba(var(--card-rgb), 0.7);
  border-radius: 16px;
  box-shadow: 0 0 8px 8px rgba(var(--lnb-back-drop-rgb), 0.1);
  backdrop-filter: blur(12px);

  &:active {
    scale: 0.95;
  }
  transition: scale 0.2s;
  &.active-animation {
    animation: ${pageIn} 0.3s forwards;
    animation-delay: ${({ index }) => index * 0.05}s;
  }
  &.hide-animation {
    animation: ${pageOut} 0.3s forwards;
  }
  svg {
    width: 16px;
    height: 16px;
    fill: var(--text);
  }

  user-select: none;
`;

export default HeaderLNB;
