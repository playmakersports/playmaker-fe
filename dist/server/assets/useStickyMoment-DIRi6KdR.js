import { useEffect } from "react";
function useStickyMoment(ref, top, className) {
  useEffect(() => {
    const headerHeight = +getComputedStyle(document.documentElement).getPropertyValue("--header-height").replace("px", "");
    const safeAreaTop = +getComputedStyle(document.documentElement).getPropertyValue("--env-sat").replace("px", "");
    const handleScroll = () => {
      if (ref.current) {
        ref.current.style.top = `calc(var(--safe-area-top) + ${top ?? 0}px)`;
        ref.current.classList.toggle(
          "stuck",
          ref.current?.getBoundingClientRect().top - 12 < headerHeight + safeAreaTop + (top ?? 0)
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
export {
  useStickyMoment as u
};
