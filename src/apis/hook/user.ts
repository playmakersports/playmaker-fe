import { ApiSelectMember } from "../types/user";
import { useGet } from "./query";

export const useProfileGet = () => {
  // /api/users/me/profile
  return useGet<ApiSelectMember>("/api/test/login/selectmyprofile");
};
export const useMyFavTeam = () => {
  return useGet<ApiSelectMember>("/api/users/me/favorite-teams");
};
export const useMyFavArticle = () => {
  return useGet<ApiSelectMember>("/api/users/me/favorite-articles");
};
