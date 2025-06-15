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
