import React, { RefObject, useEffect } from "react";

function useStickyMoment(ref: RefObject<any>, className?: string) {
  useEffect(() => {
    const mainContainerEl = document.getElementById("main_Container") as HTMLDivElement;
    const headerHeight = +getComputedStyle(document.documentElement)
      .getPropertyValue("--header-height")
      .replace("px", "");
    const safeAreaTop = +getComputedStyle(document.documentElement).getPropertyValue("--env-sat").replace("px", "");

    const handleScroll = () => {
      ref.current!.classList.toggle(
        className ?? "stuck",
        ref.current?.getBoundingClientRect().top === headerHeight + safeAreaTop
      );
    };
    mainContainerEl!.addEventListener("scroll", handleScroll);
    return () => {
      mainContainerEl!.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return null;
}

export default useStickyMoment;
