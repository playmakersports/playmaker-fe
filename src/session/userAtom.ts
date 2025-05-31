import { atom } from "jotai";

export type UserSessionData = {
  username: string;
  role: string;
  nickname: string;
};
export const userAtom = atom<UserSessionData | null>(null);
