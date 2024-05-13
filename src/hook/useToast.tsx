import { atomToast } from "@/atom/common";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React, { useCallback, useEffect, useRef } from "react";

function useToast(time?: number) {
  const defaultTime = time ?? 3000;
  const setToastAtom = useSetAtom(atomToast);
  const toastAtom = useAtomValue(atomToast);
  const ref = useRef<number | null>(null);
  const showRef = useRef<number | null>(null);
  const notForcedClose = useRef<boolean | null>(true);

  const trigger = useCallback(
    (text: string, type?: "DEFAULT" | "ALERT") => {
      setToastAtom({ animate: true, show: true, text, type: type ?? "DEFAULT" });
      if (ref.current) clearTimeout(ref.current);
      if (showRef.current) clearTimeout(showRef.current);
      ref.current = window.setTimeout(() => {
        setToastAtom((prev) => ({ ...prev, animate: false }));
        notForcedClose.current = true;
      }, defaultTime);
      showRef.current = window.setTimeout(() => {
        setToastAtom((prev) => ({ ...prev, show: false }));
        notForcedClose.current = false;
      }, defaultTime + 300);
    },
    [defaultTime]
  );

  useEffect(() => {
    if (!toastAtom.animate && toastAtom.show && !notForcedClose.current) {
      showRef.current = window.setTimeout(() => {
        setToastAtom((prev) => ({ ...prev, show: false }));
        ref.current = null;
        showRef.current = null;
      }, 300);
    }
  }, [toastAtom]);

  const reset = useCallback(() => {
    setToastAtom({ animate: false, show: false, text: "" });
    if (ref.current) clearTimeout(ref.current);
    if (showRef.current) clearTimeout(showRef.current);
  }, []);

  return { trigger, reset };
}

export default useToast;
