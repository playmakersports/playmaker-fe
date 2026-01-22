import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
function Portal({ children, inactiveScroll = false }) {
  const [mounted, setMounted] = useState(false);
  const [portalElement, setPortalElement] = useState(null);
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
      const preventScroll = (e) => e.preventDefault();
      document.addEventListener("touchmove", preventScroll, { passive: false });
      return () => {
        document.body.style.overflow = originalOverflow;
        document.removeEventListener("touchmove", preventScroll);
      };
    }
    return () => {
    };
  }, [inactiveScroll]);
  if (!mounted || !portalElement) return null;
  return ReactDOM.createPortal(children, portalElement);
}
export {
  Portal as P
};
