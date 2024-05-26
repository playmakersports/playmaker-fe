import { atomBgWhite } from "@/atom/common";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

function useBgWhite() {
  const setAtom = useSetAtom(atomBgWhite);

  useEffect(() => {
    setAtom(true);
    return () => {
      setAtom(false);
    };
  }, []);

  return null;
}

export default useBgWhite;
