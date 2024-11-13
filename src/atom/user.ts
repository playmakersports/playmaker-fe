import { atom } from "jotai";

type ServiceApplyType = {
  birth: string;
  contact: string;
  memberType: string;
  nickname: string;
  preferredSport: string;
  selfIntro: string;
  sexKey: string;
  university: string;
  username: string;
};

const initialServiceApply: ServiceApplyType = {
  birth: "",
  contact: "",
  memberType: "",
  nickname: "",
  preferredSport: "",
  selfIntro: "",
  sexKey: "",
  university: "",
  username: "",
};

export const atomServiceApplyImage = atom<File | null>(null);
export const atomServiceApply = atom<ServiceApplyType>(initialServiceApply);
export const resetAtomServiceApply = atom(null, (get, set) => {
  set(atomServiceApply, initialServiceApply);
});
