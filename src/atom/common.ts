import { ActionOptionsType } from "@/components/common/input/DropdownAction";
import { atom } from "jotai";
import { ReactNode } from "react";

// 페이지 타이틀
export type HeaderSubIconType = {
  svgIcon: ReactNode;
  onClick: (() => void) | string;
  description: string;
};
export type HeaderTransparentType = { inactive: number } | boolean;
export const atomPageTitle = atom<string>("");
export const atomHeaderIcons = atom<Array<HeaderSubIconType>>([]);
export const atomHeaderActions = atom<Array<ActionOptionsType>>([]);
export const atomHeaderTransparent = atom<HeaderTransparentType>(false);
