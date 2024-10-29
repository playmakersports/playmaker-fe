import { atom } from "jotai";

type CreateTeamType = {
  teamName: string;
  teamType: "univ" | "basic" | null;
  sports: string;
  teamIntro: string;
  teamFoundedAt: string;
  teamLogo: string;
  teamBanner: string;
  teamGender: "male" | "female" | "mixed" | null;
  teamColor: string;
  locationSido: string;
  locationSigungu: string;
  birthYearMin: number;
  birthYearMax: number;
  generation: boolean;
};

const initialTeamCreate: CreateTeamType = {
  teamName: "",
  teamType: null,
  sports: "",
  teamIntro: "",
  teamFoundedAt: "",
  teamLogo: "",
  teamBanner: "",
  teamGender: null,
  teamColor: "",
  locationSido: "",
  locationSigungu: "",
  birthYearMin: 0,
  birthYearMax: 0,
  generation: false,
};

export const atomTeamCreateLogo = atom<File | null>(null);
export const atomTeamCreateBanner = atom<File | null>(null);
export const atomTeamCreate = atom<CreateTeamType>(initialTeamCreate);
export const resetAtomTeamCreate = atom(null, (get, set) => {
  set(atomTeamCreate, initialTeamCreate);
});
