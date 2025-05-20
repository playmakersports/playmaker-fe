"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type PortalProps = {
  children: React.ReactNode;
  inactiveScroll?: boolean;
};

function Portal({ children, inactiveScroll = false }: PortalProps) {
  const [mounted, setMounted] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    const el = document.getElementById("portal");
    if (el) {
      el.style.position = "relative";
      setPortalElement(el);
      setMounted(true);
    }

    if (inactiveScroll) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // 모바일 터치스크롤 방지
      const preventScroll = (e: TouchEvent) => e.preventDefault();
      document.addEventListener("touchmove", preventScroll, { passive: false });

      return () => {
        document.body.style.overflow = originalOverflow;
        document.removeEventListener("touchmove", preventScroll);
      };
    }

    return () => {};
  }, [inactiveScroll]);

  if (!mounted || !portalElement) return null;

  return ReactDOM.createPortal(children, portalElement);
}

export default Portal;
