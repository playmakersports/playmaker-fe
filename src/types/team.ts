import { BoardTypeEnums } from "@/apis/enums/enums";

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
  boardType: BoardTypeEnums;
  content: string;
  viewCount: number;
  imgUrl: string[];
  startDate: string;
  endDate: string;
  hasLiked: true;
  createAt: string;
  commentCount: number;
  priority: string | null;
};
// TODO: 임시 처리된 부분 API 변경시 반영해야 함.
export type GetTeamBoardListResponse = Array<TeamBoardItemType>;
// export type GetTeamBoardListResponse = {
//   board: Array<TeamBoardItemType>;
//   totalPages: number;
//   currentPage: number;
//   pageSize: number;
//   count: number;
// };
