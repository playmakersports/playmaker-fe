import React from "react";

/**
 * 스크롤에 따라 좌우에 글라디언트 마스킹 처리
 * onScroll에서 해당 함수 처리 후
 * SCROLL_MASKED_GRADIENT를 요소에 추가
 */
export const scrollMaskedHandler = (event: React.UIEvent, type: "horizontal" | "vertical") => {
  if (!event) return null;
  const eleWidth = event.currentTarget.clientWidth;
  const eleHeight = event.currentTarget.clientHeight;
  const scrollLeft = event.currentTarget.scrollLeft;
  const scrollTop = event.currentTarget.scrollTop;
  const scrollWidth = event.currentTarget.scrollWidth;
  const scrollHeight = event.currentTarget.scrollHeight;

  if (type === "horizontal" && eleWidth < scrollWidth) {
    event.currentTarget.classList.toggle("prev-scroll-mask", scrollWidth - scrollLeft < scrollWidth - 10);
    event.currentTarget.classList.toggle("next-scroll-mask", scrollWidth - scrollLeft > eleWidth + 10);
  }

  if (type === "vertical" && eleHeight < scrollHeight) {
    event.currentTarget.classList.toggle("top-scroll-mask", scrollHeight - scrollTop < scrollHeight - 10);
    event.currentTarget.classList.toggle("bottom-scroll-mask", scrollHeight - scrollTop > eleHeight + 10);
  }
};

export const scrollMaskedHandlerRef = (ref: HTMLElement | null, type: "horizontal" | "vertical") => {
  if (!ref) return undefined;

  if (type === "horizontal" && ref.clientWidth < ref.scrollWidth) {
    ref.classList.add("next-scroll-mask");
  }

  if (type === "vertical" && ref.clientHeight < ref.scrollHeight) {
    ref.classList.add("bottom-scroll-mask");
  }
};
