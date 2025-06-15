import { AxiosRequestConfig } from "axios";
import { useMutation, useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";
import { typedGet, typedPost, typedPut } from "..";

type ContentType = "json" | "form-data";
type QueryConfig<T> = Omit<UseQueryOptions<T, Error, T, QueryKey>, "queryKey" | "queryFn">;
const CONTENT_TYPE: Record<ContentType, string> = {
  json: "application/json",
  "form-data": "multipart/form-data",
};

export const useGet = <T,>(url: string, params?: Record<string, string>, config?: QueryConfig<T>) => {
  return useQuery<T>({
    queryKey: [url, JSON.stringify(params || {})] as QueryKey,
    queryFn: () => typedGet<T>(url, { params }).then((res) => res.data),
    ...config,
  });
};

interface MutationFnAsyncType {
  data: any;
  queryParams?: Record<string, string>;
}

export const usePost = <T,>(url: string, contentType: ContentType = "json") => {
  return useMutation<T, Error, MutationFnAsyncType>({
    mutationKey: [url],
    mutationFn: async ({ data, queryParams }) => {
      const finalUrl = queryParams ? `${url}?${new URLSearchParams(queryParams).toString()}` : url;

      const config: AxiosRequestConfig = {};
      if (contentType === "json") {
        config.headers = { "Content-Type": CONTENT_TYPE.json };
      }

      const response = await typedPost<T>(finalUrl, data, config);
      return response.data;
    },
  });
};

export const usePut = <T,>(url: string, contentType: ContentType = "json") => {
  return useMutation<T, Error, MutationFnAsyncType>({
    mutationKey: [url],
    mutationFn: async ({ data, queryParams }) => {
      const finalUrl = queryParams ? `${url}?${new URLSearchParams(queryParams).toString()}` : url;

      const config: AxiosRequestConfig = {};

      if (contentType === "json") {
        config.headers = {
          "Content-Type": CONTENT_TYPE.json,
        };
      }

      const response = await typedPut<T>(finalUrl, data, config);
      return response.data;
    },
  });
};
