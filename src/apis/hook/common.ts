import { ApiCodeArea } from "../types/code";
import { commonAPI } from "../url";
import { useGet } from "./query";

export const useAreaGet = () => useGet<ApiCodeArea>(`${commonAPI.CODES}/activeArea`);
