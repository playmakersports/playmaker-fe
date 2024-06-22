import { atom } from "jotai";

// 페이지 타이틀
export const atomPageTitle = atom<string>("");
export const atomHeaderTransparent = atom<boolean>(false);

// 배경색 조정
export const atomBgWhite = atom<boolean>(false);

// 토스트 메시지
export const atomToast = atom<{ animate: boolean; show: boolean; text: string; type?: "DEFAULT" | "ALERT" }>({
  animate: false,
  show: false,
  text: "",
});
