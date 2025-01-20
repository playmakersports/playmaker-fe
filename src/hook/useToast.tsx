import { atomToast } from "@/atom/common";
import { useAtomValue, useSetAtom } from "jotai";
import { useCallback, useEffect, useRef } from "react";

function useToast(time?: number) {
  const defaultTime = time ?? 1400;
  const setToastAtom = useSetAtom(atomToast);
  const toastAtom = useAtomValue(atomToast);
  const ref = useRef<number | null>(null);
  const showRef = useRef<number | null>(null);

  const trigger = useCallback(
    (text: string, type?: "DEFAULT" | "ALERT" | "CONFIRM") => {
      setToastAtom({ animate: true, show: true, text, type: type ?? "DEFAULT" });
      if (ref.current) clearTimeout(ref.current);
      if (showRef.current) clearTimeout(showRef.current);
      ref.current = window.setTimeout(() => {
        setToastAtom((prev) => ({ ...prev, animate: false }));
      }, defaultTime);
      showRef.current = window.setTimeout(() => {
        setToastAtom((prev) => ({ ...prev, show: false }));
      }, defaultTime + 300);
    },
    [defaultTime]
  );

  useEffect(() => {
    if (!toastAtom.animate && toastAtom.show) {
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
