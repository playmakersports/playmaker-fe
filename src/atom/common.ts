import React, { ReactNode } from "react";
import { atom } from "jotai";
import { ActionOptionsType } from "@/components/common/input/DropdownAction";

// 페이지 타이틀
export type HeaderSubIconType = {
  svgIcon: ReactNode;
  onClick: (() => void) | string;
  description: string;
};
export type HeaderOptionsType = {
  titleAlign?: "left" | "center";
  hideBackButton?: boolean;
};
export type HeaderTransparentType = { inactive: number } | boolean;
export const atomPageTitle = atom<string>("");
export const atomHeaderOnClickBack = atom<(() => () => void) | null>(null);
export const atomHeaderCustomArea = atom<React.ReactNode | null>(null);
export const atomHeaderIcons = atom<Array<HeaderSubIconType>>([]);
export const atomHeaderActions = atom<Array<ActionOptionsType> | Omit<ActionOptionsType, "divided">>([]);
export const atomHeaderTransparent = atom<HeaderTransparentType>(false);
export const atomHeaderOptions = atom<HeaderOptionsType>();
