import { i as teamJoinAPI, t as teamAPI, j as boardAPI, k as typedDelete } from "./authToken-Bx9YTtw3.js";
import { u as useGet, a as usePost, b as usePut } from "./query-Ciubt76c.js";
const useTeamPlyerGet = (id) => {
  return useGet(`${teamAPI.TEAMS}/${id}/members`);
};
const useTeamJoinRequestGet = (id) => {
  return useGet(teamJoinAPI.TEAM_REQ_LIST(id));
};
const useTeamJoinApprovePost = (teamId, ids) => {
  return usePost(teamJoinAPI.APPROVE(teamId, ids.join("|")));
};
const useTeamJoinRejectPost = (teamId, ids) => {
  return usePost(teamJoinAPI.REJECT(teamId, ids.join("|")));
};
const useTeamBasicInfoPut = (teamId) => {
  return usePut(teamAPI.SETTING.BASIC(teamId));
};
const useCommentGet = (boardId) => {
  return useGet(boardAPI.COMMENT, { boardId });
};
const useCommentPost = () => {
  return usePost(boardAPI.COMMENT);
};
const axiosCommentDelete = (commentId) => {
  return typedDelete(`${boardAPI.COMMENT}?commentId=${commentId}`);
};
export {
  useTeamJoinRequestGet as a,
  useTeamBasicInfoPut as b,
  useCommentGet as c,
  useCommentPost as d,
  axiosCommentDelete as e,
  useTeamJoinApprovePost as f,
  useTeamJoinRejectPost as g,
  useTeamPlyerGet as u
};
