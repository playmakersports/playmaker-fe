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
      const config: Record<string, any> = {};
      if (contentType !== "form-data") {
        config.headers = { "Content-Type": CONTENT_TYPE[contentType] };
      }
      const finalUrl = queryParams ? `${url}?${new URLSearchParams(queryParams).toString()}` : url;

      return typedPost<T>(finalUrl, data, config).then((res) => res.data);
    },
  });
};

export const usePut = <T,>(url: string, contentType: ContentType = "json") => {
  return useMutation<T, Error, MutationFnAsyncType>({
    mutationKey: [url],
    mutationFn: async ({ data, queryParams }) => {
      const config: Record<string, any> = {
        headers: { "Content-Type": CONTENT_TYPE[contentType] },
      };
      const finalUrl = queryParams ? `${url}?${new URLSearchParams(queryParams).toString()}` : url;

      return typedPut<T>(finalUrl, data, config).then((res) => res.data);
    },
  });
};
