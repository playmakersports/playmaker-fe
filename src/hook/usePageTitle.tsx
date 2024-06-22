import { useAtom } from "jotai";
import { useEffect } from "react";

import { atomPageTitle, atomHeaderTransparent } from "@/atom/common";

export const usePageTitle = (title?: string, transparent?: boolean) => {
  const [getTitle, setTitle] = useAtom(atomPageTitle);
  const [getTransparent, setTransparent] = useAtom(atomHeaderTransparent);

  useEffect(() => {
    transparent && setTransparent(true);
    title && setTitle(title);
    return () => {
      setTitle("");
      setTransparent(false);
    };
  }, []);

  return { getTitle, getTransparent };
};
