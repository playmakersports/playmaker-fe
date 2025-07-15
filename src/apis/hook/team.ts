import { ApiBoardCommentItem, ApiBoardCommentRequest, ApiTeamDetail, ApiTeamJoinRequest } from "../types/team";
import { boardAPI, teamAPI, teamJoinAPI } from "../url";
import { useGet, usePost, usePut } from "./query";
import { typedDelete } from "..";

export const useTeamGet = (id: number | string) => {
  return useGet<ApiTeamDetail>(`${teamAPI.TEAMS}/${id}`);
};
export const useTeamListGet = () => {
  return useGet<ApiTeamDetail[]>(teamAPI.TEAMS);
};

export const useTeamJoinRequestGet = (id: number | string) => {
  return useGet<ApiTeamJoinRequest[]>(teamJoinAPI.TEAM_REQ_LIST(id));
};

export const useTeamBasicInfoPut = (teamId: number | string) => {
  return usePut(teamAPI.SETTING.BASIC(teamId));
};

export const useCommentGet = (boardId: string) => {
  return useGet<ApiBoardCommentItem[]>(boardAPI.COMMENT, { boardId });
};

export const useCommentPost = () => {
  return usePost<ApiBoardCommentRequest>(boardAPI.COMMENT);
};

export const axiosCommentDelete = (commentId: string) => {
  return typedDelete(`${boardAPI.COMMENT}?commentId=${commentId}`);
};
