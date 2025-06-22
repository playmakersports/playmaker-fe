import { ApiTeamDetail, ApiTeamJoinRequest } from "../types/team";
import { teamAPI, teamJoinAPI } from "../url";
import { useGet, usePut } from "./query";

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
