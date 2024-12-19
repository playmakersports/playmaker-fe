export type SelectTeamResponse = {
  teamId: number;
  teamName: string;
  createDt: string;
  item: string;
  logoUrl: string;
  bgUrl: string;
  joinYn: "Y" | "N";
  activeArea: string;
  university: string;
  teamIntro: string;
  maxBirthYear: number | null;
  minBirthYear: number | null;
  publicYn: "Y" | "N";
  myTeamYn: "Y" | "N";
};
