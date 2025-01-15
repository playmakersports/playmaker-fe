export type SelectTeamResponse = {
  teamId: number;
  teamName: string;
  masterNm: string;
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
  countMember: number;
  status: number; // 0: 미로그인, 1: 신청가능(가입안된사람), 2: 신청중, 3: 가입불가(블랙), 4: 회원, 5: 운영진, 6: 부회장, 7: 회장
};

export type PostTeamBoardRequest = {
  boardInfo: {
    category: number;
    title: string;
    content: string;
    memberId: string;
    teamId: string;
  };
  image: File | null;
};

type GetTeamBoardListItems = {
  articleId: number;
  title: string;
  member: {
    memberId: number;
    username: string;
    image: string;
  };
  category: {
    teamId: number;
    categoryNum: number;
    categoryName: string;
    isDelete: "Y" | "N";
  };
  createAt: string;
  // viewCnt: number;
  // commentCnt: number;
  // likeCnt: number;
};
export type GetTeamBoardListResponse = {
  board: Array<GetTeamBoardListItems>;
  totalPages: number;
  currentPage: number;
  pageSize: number;
};
