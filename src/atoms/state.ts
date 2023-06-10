import { atom } from "jotai";

interface ILoggedStateType {
    username: string | undefined;
    nickname: string | undefined;
}

export const darkMode = atom<boolean>(false);
export const loggedState = atom<ILoggedStateType>({ username: undefined, nickname: undefined });
