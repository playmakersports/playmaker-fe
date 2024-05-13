import { atom } from "jotai";

// 페이지 타이틀
export const atomPageTitle = atom<string>("");

// 배경화면 색상
export const atomBackgroundGray = atom<boolean>(false);

// 토스트 메시지
export const atomToast = atom<{ animate: boolean; show: boolean; text: string; type?: "DEFAULT" | "ALERT" }>({
  animate: false,
  show: false,
  text: "",
});
