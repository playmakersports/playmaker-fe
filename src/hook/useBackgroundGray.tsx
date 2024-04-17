import { useAtom } from "jotai";
import { useLayoutEffect } from "react";

import { atomBackgroundGray } from "@/atom/common";

function useBackgroundGray() {
  const [, setAtomGray] = useAtom(atomBackgroundGray);
  useLayoutEffect(() => {
    setAtomGray(true);
    return () => {
      setAtomGray(false);
    };
  }, []);
}

export default useBackgroundGray;
