import { RefObject, useEffect } from "react";

function useStickyMoment(ref: RefObject<any>, top?: number, className?: string) {
  useEffect(() => {
    const headerHeight = +getComputedStyle(document.documentElement)
      .getPropertyValue("--header-height")
      .replace("px", "");
    const safeAreaTop = +getComputedStyle(document.documentElement).getPropertyValue("--env-sat").replace("px", "");

    const handleScroll = () => {
      if (ref.current) {
        ref.current.style.top = `calc(var(--header-height) + ${top ?? 0}px)`;
        ref.current!.classList.toggle(
          className ?? "stuck",
          ref.current?.getBoundingClientRect().top - 12 < headerHeight + safeAreaTop
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, className]);

  return null;
}

export default useStickyMoment;
