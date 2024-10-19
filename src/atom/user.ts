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
export const atomServiceApplyImage = atom<File | null>(null);
export const atomServiceApply = atom<ServiceApplyType>({
  birth: "",
  contact: "",
  memberType: "",
  nickname: "",
  preferredSport: "",
  selfIntro: "",
  sexKey: "",
  university: "",
  username: "",
});

export const ACCESS_TOKEN = atom<string>(
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6ZXJvemVyb2Jhc2VAZ21haWwuY29tIiwiaWQiOjIsImVtYWlsIjoiemVyb3plcm9iYXNlQGdtYWlsLmNvbSIsImlhdCI6MTcyOTMyMDU2MSwiZXhwIjoxNzI5MzI0MTYxfQ.oQ47UEmdmO8Q_K29GIDddSa5FXN1t2AashV6JuhrrTc"
);
