import { useAtom } from "jotai";
import { ReactNode, useEffect } from "react";

import { atomPageTitle, atomPageSubTitle, atomHeaderTransparent, atomIcons } from "@/atom/common";

type HookProps = {
  title?: string;
  subTitle?: string;
  transparent?: boolean;
  subIcons?: Array<{
    svgIcon: ReactNode;
    linkTo: string;
  }>;
};

export const usePageTitle = (props: HookProps = {}) => {
  const { title, subTitle, transparent, subIcons } = props;
  const [getTitle, setTitle] = useAtom(atomPageTitle);
  const [getSubTitle, setSubTitle] = useAtom(atomPageSubTitle);
  const [getTransparent, setTransparent] = useAtom(atomHeaderTransparent);
  const [getSubIcons, setSubIcons] = useAtom(atomIcons);

  useEffect(() => {
    transparent && setTransparent(true);
    title && setTitle(title);
    subIcons && setSubIcons(subIcons);
    return () => {
      setTitle("");
      setTransparent(false);
      setSubIcons([]);
    };
  }, [title]);

  useEffect(() => {
    subTitle && setSubTitle(subTitle);
    return () => {
      setSubTitle("");
    };
  }, [subTitle]);

  return { getTitle, getSubTitle, getTransparent, getSubIcons };
};
