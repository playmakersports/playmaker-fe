"use client";

import { atomBackgroundBluely } from "@/atom/common";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

function useBgBluely() {
  const setAtom = useSetAtom(atomBackgroundBluely);

  useEffect(() => {
    setAtom(true);
    return () => {
      setAtom(false);
    };
  }, []);

  return null;
}

export default useBgBluely;
