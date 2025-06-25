"use client";
import React from "react";

import { fonts } from "@/styles/fonts.css";
import Portal from "@/components/common/global/Portal";
import { headerListContainer, headerListItem, headerMoverButton, headerMoverContainer } from "./headerMover.css";

import DownArrow from "@/assets/icon/arrow/DownArrow.svg";

type Props = {
  title?: string;
  showList: boolean;
  setShowList: React.Dispatch<React.SetStateAction<boolean>>;
  list: { name: string; action: () => void }[];
  onCloseList?: () => void;
};
function HeaderMainDropdown({ title, showList, setShowList, list, onCloseList }: Props) {
  const handleCloseList = () => {
    setShowList(false);
    onCloseList && onCloseList();
  };

  return (
    <div className={headerMoverContainer}>
      <button type="button" className={headerMoverButton} onClick={() => setShowList((prev) => !prev)}>
        <h3 className={fonts.body2.semibold}>{title}</h3>
        {title && (
          <DownArrow
            width={24}
            height={24}
            style={{
              fill: "var(--gray700)",
            }}
          />
        )}
      </button>
      <Portal inactiveScroll={showList}>
        <div
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
          {list.map((item, index) => (
            <button type="button" key={`${item.name}+${index}`} onClick={item.action} className={headerListItem}>
              {item.name}
            </button>
          ))}
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

export default HeaderMainDropdown;
