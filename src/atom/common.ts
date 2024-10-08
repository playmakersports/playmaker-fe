import { atom } from "jotai";
import { ReactNode } from "react";

// 페이지 타이틀
export const atomPageTitle = atom<string>("");
export const atomPageSubTitle = atom<string>("");
export const atomHeaderTransparent = atom<boolean>(false);
export const atomIcons = atom<
  Array<{
    svgIcon: ReactNode;
    linkTo: string;
    description: string;
  }>
>([]);

// 배경색 조정
export const atomBgWhite = atom<boolean>(false);

// 토스트 메시지
export const atomToast = atom<{ animate: boolean; show: boolean; text: string; type?: "DEFAULT" | "ALERT" }>({
  animate: false,
  show: false,
  text: "",
});
