import { ApiSelectMember } from "../types/user";
import { profileAPI } from "../url";
import { useGet } from "./query";

export const useProfileGet = () => {
  // /api/users/me/profile
  return useGet<ApiSelectMember>(profileAPI.MY_PROFILE);
};
export const useMyFavTeam = () => {
  return useGet<ApiSelectMember>(profileAPI.FAV_TEAMS);
};
export const useMyFavArticle = () => {
  return useGet<ApiSelectMember>(profileAPI.FAV_ARTICLES);
};
