import { ApiTeamDetail } from "../types/team";
import { teamAPI } from "../url";
import { useGet } from "./query";

export const useTeamGet = (id: number) => {
  return useGet<ApiTeamDetail[]>(`${teamAPI.TEAMS}/${id}`);
};
export const useTeamListGet = () => {
  return useGet<ApiTeamDetail[]>(teamAPI.TEAMS);
};
