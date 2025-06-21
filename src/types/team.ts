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

export type TeamBoardItemType = {
  id: number | string;
  teamId: number | string;
  createBy: {
    memberId: number | string;
    memberName: string;
    imageUrl: string;
  };
  title: string;
  category: string;
  boardType: string | number;
  content: string;
  viewCount: number;
  startDate: string;
  endDate: string;
  hasLiked: true;
  createAt: string;
  commentCount: number;
};
export type GetTeamBoardListResponse = {
  board: Array<TeamBoardItemType>;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  count: number;
};
