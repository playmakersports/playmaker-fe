import { useAtom } from "jotai";
import { ReactNode, useEffect } from "react";

import {
  atomPageTitle,
  atomPageSubTitle,
  atomHeaderTransparent,
  atomIcons,
  atomHeaderScrolledBgColor,
} from "@/atom/common";

type HookProps = {
  title?: string;
  subTitle?: string;
  transparent?: boolean;
  scrollBgColor?: [number, string, string];
  subIcons?: Array<{
    svgIcon: ReactNode;
    linkTo: string;
    description: string;
  }>;
};

export const usePageTitle = (props: HookProps = {}) => {
  const { title, subTitle, transparent, scrollBgColor, subIcons } = props;
  const [titleValue, setTitle] = useAtom(atomPageTitle);
  const [subTitleValue, setSubTitle] = useAtom(atomPageSubTitle);
  const [isTransparent, setTransparent] = useAtom(atomHeaderTransparent);
  const [scrollBgColorValue, setScrollBgColor] = useAtom(atomHeaderScrolledBgColor);
  const [subIconsValue, setSubIcons] = useAtom(atomIcons);

  useEffect(() => {
    title && setTitle(title);
    transparent && setTransparent(true);
    subIcons && setSubIcons(subIcons);

    return () => {
      setTitle("");
      setTransparent(false);
      setSubIcons([]);
    };
  }, [title]);

  useEffect(() => {
    scrollBgColor &&
      setScrollBgColor({ trigger: scrollBgColor[0], beforeBg: scrollBgColor[1], afterBg: scrollBgColor[2] });
    return () => {
      setScrollBgColor(null);
    };
  }, [scrollBgColor]);

  useEffect(() => {
    subTitle && setSubTitle(subTitle);
    return () => {
      setSubTitle("");
    };
  }, [setSubTitle]);

  return {
    titleValue,
    subTitleValue,
    isTransparent,
    scrollBgColorValue,
    subIconsValue,
  };
};
