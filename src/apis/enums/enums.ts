export type MatchTypeEnums = "TRAINING" | "UNOFFICIAL" | "OFFICIAL";

export enum BoardTypeEnums {
  "NOTICE" = 1, // 1 공지사항
  "FREE" = 2, // 2 자유게시판
  "GALLERY" = 3, // 3 갤러리
}

export type TeamPlayerAuthStatus = "APPLICABLE" | "APPLY" | "MEMBER" | "STAFF" | "ASSISTANT" | "MASTER";
export const TeamPlayerAuthStatusName: Record<TeamPlayerAuthStatus, string> = {
  APPLICABLE: "가입가능",
  APPLY: "가입 신청",
  MEMBER: "팀원",
  STAFF: "운영진",
  ASSISTANT: "부회장",
  MASTER: "회장",
};
