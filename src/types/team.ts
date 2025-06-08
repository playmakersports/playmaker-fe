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
