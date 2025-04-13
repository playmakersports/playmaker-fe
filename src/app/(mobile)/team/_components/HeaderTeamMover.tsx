"use client";
import React, { useEffect, useRef, useState } from "react";

import { fonts } from "@/styles/fonts.css";
import Portal from "@/components/common/global/Portal";
import { headerListContainer, headerListItem, headerMoverButton, headerMoverContainer } from "./headerMover.css";

import DownArrow from "@/assets/icon/arrow/DownArrow.svg";

function HeaderTeamMover({ title }: { title: string }) {
  const [showList, setShowList] = useState(false);
  const teamListRef = useRef<HTMLDivElement>(null);

  const handleCloseList = () => {
    setShowList(false);
  };

  useEffect(() => {
    if (showList) {
      (teamListRef.current?.childNodes[0] as HTMLButtonElement).focus();
    }
  }, [showList]);

  return (
    <div className={headerMoverContainer}>
      <button type="button" className={headerMoverButton} onClick={() => setShowList((prev) => !prev)}>
        <h3 className={fonts.body2.semibold}>{title}</h3>
        {title && <DownArrow width={24} height={24} fill="var(--gray700)" />}
      </button>
      <Portal>
        <div
          ref={teamListRef}
          className={headerListContainer}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          style={{
            visibility: showList ? "visible" : "hidden",
            opacity: showList ? 1 : 0,
            transform: `translateX(-50%) translateY(${showList ? 0 : "-24px"})`,
          }}
        >
          <button type="button" onFocus={() => console.log("focus")} className={headerListItem}>
            팀이름1
          </button>
          <button type="button" className={headerListItem}>
            팀이름2
          </button>
        </div>
        <div
          onClick={handleCloseList}
          style={{
            position: "fixed",
            visibility: showList ? "visible" : "hidden",
            opacity: showList ? 1 : 0,
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 0,
            width: "var(--mobile-max-width)",
            height: "calc(100vh - var(--safe-area-top))",
            backgroundColor: "rgba(15, 23, 42, 0.4)",
            zIndex: 900,
            transition: "opacity 0.3s",
          }}
        ></div>
      </Portal>
    </div>
  );
}

export default HeaderTeamMover;
