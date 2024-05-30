import React from "react";

/**
 * 스크롤에 따라 좌우에 글라디언트 마스킹 처리
 * onScroll에서 해당 함수 처리 후
 * SCROLL_MASKED_GRADIENT를 요소에 추가
 */
export const scrollMaskedHandler = (event: React.UIEvent) => {
  if (!event) return null;
  const eleWidth = event.currentTarget.clientWidth;
  const scrollLeft = event.currentTarget.scrollLeft;
  const scrollWidth = event.currentTarget.scrollWidth;

  if (eleWidth < scrollWidth) {
    event.currentTarget.classList.toggle("prev-scroll-mask", scrollWidth - scrollLeft < scrollWidth - 10);
    event.currentTarget.classList.toggle("next-scroll-mask", scrollWidth - scrollLeft > eleWidth + 10);
  }
};

export const scrollMaskedHandlerRef = (ref: HTMLElement | null) => {
  if (!ref) return undefined;
  if (ref.clientWidth < ref.scrollWidth) {
    ref.classList.add("next-scroll-mask");
  }
};
