import { useGet } from "./query";
import { ApiCodeArea, ApiHomeResponse } from "../types/code";
import { commonAPI } from "../url";

export const useAreaGet = () => useGet<ApiCodeArea>(`${commonAPI.CODES}/activeArea`);
export const useHomeGet = () => useGet<ApiHomeResponse>(commonAPI.HOME);
