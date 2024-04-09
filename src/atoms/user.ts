import { atom } from "jotai";

export type LoggedStateType = {
    username: string | undefined;
    nickname: string | undefined;
};
export type JoinStateType = {
    userId: string;
    activeArea: string;
    activeTime: string;
    birth: string;
    contact: string;
    email: string;
    gameStyle: string;
    nickname: string;
    password: string;
    pfUrl: string;
    position: string;
    preferredSoccerTeam: string;
    proposalYn: string;
    selfIntro: string;
    sex?: "MALE" | "FEMALE";
    username: string;
};

export const darkMode = atom<boolean>(false);
export const loggedState = atom<LoggedStateType>({ username: undefined, nickname: undefined });
export const joinState = atom<JoinStateType>({
    userId: "",
    activeArea: "",
    activeTime: "",
    birth: "",
    contact: "",
    email: "",
    gameStyle: "",
    nickname: "",
    password: "",
    pfUrl: "",
    position: "",
    preferredSoccerTeam: "",
    proposalYn: "",
    selfIntro: "",
    username: "",
});
