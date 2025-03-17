import { atom } from "jotai";
import { ReactNode } from "react";

// 페이지 타이틀
export const atomPageTitle = atom<string>("");
export const atomPageSubTitle = atom<string>("");
export const atomHeaderTransparent = atom<boolean>(false);
export const atomHeaderScrolledShadow = atom<boolean>(true);
export const atomHeaderScrolledBgColor = atom<{
  trigger: number;
  beforeBg: string;
  afterBg: string;
} | null>(null);

export const atomIcons = atom<
  Array<{
    svgIcon: ReactNode;
    linkTo: string;
    description: string;
  }>
>([]);

// 배경색 조정
export const atomBackgroundBluely = atom<boolean>(false);
