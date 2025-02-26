import { useMutation, useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";
import { typedGet, typedPost, typedPut } from "..";
import { getCookie } from "cookies-next";

type ContentType = "json" | "form-data";
const CONTENT_TYPE: Record<ContentType, string> = {
  json: "application/json",
  "form-data": "multipart/form-data",
};

type QueryConfig<T> = Omit<UseQueryOptions<T, Error, T, QueryKey>, "queryKey" | "queryFn">;

export const useGet = <T,>(url: string, params?: Record<string, string>, config?: QueryConfig<T>) => {
  const accessToken = getCookie("access-token");
  return useQuery<T>({
    queryKey: [url, ...(params ? Object.values(params) : [])] as QueryKey,
    queryFn: async () => {
      const response = await typedGet<T>(url, {
        params: params || {},
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    },
    ...config,
  });
};

interface MutationFnAsyncType {
  data: unknown;
  queryParams?: Record<string, string>;
}
export const usePost = <T,>(url: string, contentType: ContentType = "json") => {
  const accessToken = getCookie("access-token");
  return useMutation({
    mutationFn: async ({ data, queryParams }: MutationFnAsyncType) => {
      let finalUrl = url;
      if (queryParams) {
        const queryString = Object.entries(queryParams)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join("&");
        finalUrl += `?${queryString}`;
      }

      const response = await typedPost<T>(finalUrl, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": CONTENT_TYPE[contentType],
        },
      });
      return response.data;
    },
    mutationKey: [url],
  });
};
export const usePut = <T,>(url: string, contentType: ContentType = "json") => {
  const accessToken = getCookie("access-token");
  return useMutation({
    mutationFn: async ({ data, queryParams }: MutationFnAsyncType) => {
      let finalUrl = url;
      if (queryParams) {
        const queryString = Object.entries(queryParams)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join("&");
        finalUrl += `?${queryString}`;
      }

      const response = await typedPut<T>(finalUrl, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": CONTENT_TYPE[contentType],
        },
      });
      return response.data;
    },
    mutationKey: [url],
  });
};
