import { atom } from "jotai";

// 페이지 타이틀
export const atomPageTitle = atom<string>("");

// 배경화면 색상
export const atomTheme = atom<boolean>(false);
export const atomBackgroundGray = atom<boolean>(false);
