export type ApiTeamDetail = {
  id: number;
  teamName: string;
  teamColor: string | null;
  teamItem: string;
  createDate: string;
  activeArea: string;
  logoUrl: string | null;
  teamIntro: string | null;
  message: string | null;
  joinYn: "Y" | "N" | null;
  publicYn: "Y" | "N" | null;
  recruitingYn: "Y" | "N" | null;
  showAgeLimitYn: "Y" | "N" | null;
  showGenderYn: "Y" | "N" | null;
  showFoundingDateYn: "Y" | "N" | null;
  deleteScheduledDate: string | null;
  teamLeaderId: number;
  teamLeaderName: string;
  memberCount: number;
  foundingDate: string | null;
  university: string | null;
  ageMin: number | null;
  ageMax: number | null;
  genderRestriction: "MALE" | "FEMALE" | null; // 가능한 값이 있다면 명시
  hasGenerationSystem: "Y" | "N" | null;
};

export type ApiTeamJoinRequest = {
  requestId: number;
  teamId: number;
  teamName: string;
  memberId: number;
  memberName: string;
  status: string;
  message: string;
  requestDate: string;
};
