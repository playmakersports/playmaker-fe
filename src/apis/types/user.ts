export type ApiCodeUniversity = {
  universityId: string;
  universityName: string;
  universityAlias: string;
}[];

export type ApiSelectMember = {
  birth: string;
  contact: string;
  imageUrl: string;
  memberType: "대학생" | "일반";
  nickname: string;
  preferredSport: string;
  selfIntro: string;
  sexKey: "남성" | "여성";
  team: Array<{
    logoUrl: string;
    teamId: number;
    teamName: string;
  }>;
  university: string;
  username: string;
};
