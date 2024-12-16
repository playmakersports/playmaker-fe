import { atom } from "jotai";

type CreateTeamType = {
  teamName: string;
  activeArea: number; // 활동지역
  createDt: string; // 팀 창단일
  item: string; // 스포츠 종목 (농구: "1")
  maxBirthYear: number;
  minBirthYear: number;
  sex: "MALE" | "FEMALE" | "MIXTURE" | null;
  teamColor: string;
  teamIntro: string;
  university: string | null;
  gisuYn: "Y" | "N";
};

const initialTeamCreate: CreateTeamType = {
  teamName: "",
  activeArea: 0,
  createDt: "",
  item: "",
  maxBirthYear: 0,
  minBirthYear: 0,
  sex: null,
  teamColor: "",
  teamIntro: "",
  university: null,
  gisuYn: "N",
};

export const atomTeamCreateLogo = atom<File | null>(null);
export const atomTeamCreateBanner = atom<File | null>(null);
export const atomTeamCreate = atom<CreateTeamType>(initialTeamCreate);
export const resetAtomTeamCreate = atom(null, (get, set) => {
  set(atomTeamCreate, initialTeamCreate);
});
