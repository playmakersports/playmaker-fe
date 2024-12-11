"use client";

import { useAtom } from "jotai";
import { ReactNode, useEffect } from "react";

import {
  atomPageTitle,
  atomPageSubTitle,
  atomHeaderTransparent,
  atomIcons,
  atomHeaderScrolledBgColor,
  atomHeaderScrolledShadow,
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
  scrolledShadow?: boolean;
};

export const usePageTitle = (props: HookProps = {}) => {
  const { title, subTitle, transparent, scrollBgColor, subIcons, scrolledShadow } = props;
  const [titleValue, setTitle] = useAtom(atomPageTitle);
  const [subTitleValue, setSubTitle] = useAtom(atomPageSubTitle);
  const [isTransparent, setTransparent] = useAtom(atomHeaderTransparent);
  const [scrollBgColorValue, setScrollBgColor] = useAtom(atomHeaderScrolledBgColor);
  const [subIconsValue, setSubIcons] = useAtom(atomIcons);
  const [scrolledShadowValue, setScrolledShadow] = useAtom(atomHeaderScrolledShadow);

  useEffect(() => {
    title && setTitle(title);
    transparent && setTransparent(true);
    subIcons && setSubIcons(subIcons);
    if (scrolledShadow === false) {
      setScrolledShadow(false);
    }

    return () => {
      setTitle("");
      setTransparent(false);
      setSubIcons([]);
      setScrolledShadow(true);
    };
  }, [title, transparent, scrolledShadow]);

  useEffect(() => {
    scrollBgColor &&
      setScrollBgColor({ trigger: scrollBgColor[0], beforeBg: scrollBgColor[1], afterBg: scrollBgColor[2] });
    return () => {
      setScrollBgColor(null);
    };
  }, []);

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
    scrolledShadowValue,
  };
};
