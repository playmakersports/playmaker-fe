"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    const el = document.getElementById("portal");
    if (el) {
      setPortalElement(el);
      setMounted(true);
    }
  }, []);

  if (!mounted || !portalElement) return null;

  return ReactDOM.createPortal(children, portalElement);
}

export default Portal;
