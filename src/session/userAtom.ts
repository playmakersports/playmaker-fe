import { atom } from "jotai";

export type UserSessionData = {
  username: string | null;
  role: string | null;
  nickname: string | null;
  isLogin: boolean;
};
export const userAtom = atom<UserSessionData | null>(null);
export const isOnboardingAtom = atom<boolean>(false);
