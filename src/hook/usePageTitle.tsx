import { useAtom } from "jotai";
import { useEffect } from "react";

import { atomPageTitle } from "@/atom/common";

export const usePageTitle = (title?: string) => {
  const [getTitle, setTitle] = useAtom(atomPageTitle);
  useEffect(() => {
    title && setTitle(title);
    return () => {
      setTitle("");
    };
  }, []);

  return getTitle;
};
