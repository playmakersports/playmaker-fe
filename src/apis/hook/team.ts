import { ApiTeamDetail } from "../types/team";
import { useGet } from "./query";

export const useTeamGet = (id: number) => {
  return useGet<ApiTeamDetail[]>(`/api/teams/${id}`);
};
export const useTeamListGet = () => {
  return useGet<ApiTeamDetail[]>("/api/teams");
};
