export type ApiCodeUniversity = {
  universityId: string;
  universityName: string;
  universityAlias: string;
}[];

export type ApiSelectMember = {
  userName: string;
  contact: string;
  birth: string;
  sexKey: "MALE" | "FEMALE";
  university: string;
  memberType: string | null;
  preferredSports: string[];
  activeAreas: string[] | null;
  selfIntro: string | null;
  imageUrl: string;
  fitLib: {
    exDuration: number;
    posKey: number;
    height: number;
    weight: number;
    wingSpan: number;
  } | null;
  team: Array<{
    teamId: number | string | null;
    teamName: string;
    logoUrl: string;
  }> | null;
};
