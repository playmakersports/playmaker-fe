import { useAtom } from "jotai";
import { useEffect } from "react";

import { atomPageTitle, atomPageSubTitle, atomHeaderTransparent } from "@/atom/common";

export const usePageTitle = (title?: string, subTitle?: string, transparent?: boolean) => {
  const [getTitle, setTitle] = useAtom(atomPageTitle);
  const [getSubTitle, setSubTitle] = useAtom(atomPageSubTitle);
  const [getTransparent, setTransparent] = useAtom(atomHeaderTransparent);

  useEffect(() => {
    transparent && setTransparent(true);
    title && setTitle(title);
    return () => {
      setTitle("");
      setTransparent(false);
    };
  }, [title]);

  useEffect(() => {
    subTitle && setSubTitle(subTitle);
    return () => {
      setSubTitle("");
    };
  }, [subTitle]);

  return { getTitle, getSubTitle, getTransparent };
};
