import { useAtom } from "jotai";
import { useEffect } from "react";

import { atomBackgroundGray } from "@/atom/common";

function useBackgroundGray() {
  const [, setAtomGray] = useAtom(atomBackgroundGray);
  useEffect(() => {
    setAtomGray(true);
    return () => {
      setAtomGray(false);
    };
  }, []);
}

export default useBackgroundGray;
