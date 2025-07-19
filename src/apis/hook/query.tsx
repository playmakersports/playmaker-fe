import { AxiosError, AxiosRequestConfig } from "axios";
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  QueryKey,
  useInfiniteQuery,
  UndefinedInitialDataInfiniteOptions,
} from "@tanstack/react-query";
import { typedGet, typedPost, typedPut } from "..";

type ContentType = "json" | "form-data";
type ResultPagination<T> = {
  maxPage: number;
  currentPage: number;
  items: T;
};
type QueryError = AxiosError<{
  errorCode: string;
  errorMessage: string;
  error: string;
  message: string;
  status: number;
  timestamp: number;
}>;
type QueryConfig<T> = Omit<UseQueryOptions<T, Error, T, QueryKey>, "queryKey" | "queryFn">;
const CONTENT_TYPE: Record<ContentType, string> = {
  json: "application/json",
  "form-data": "multipart/form-data",
};

type ParamsType = Record<string, string | number | undefined>;
export const useGet = <T,>(url: string, params?: ParamsType, config?: QueryConfig<T>) => {
  return useQuery<T>({
    queryKey: [url, JSON.stringify(params || {})] as QueryKey,
    queryFn: () => typedGet<T>(url, { params }).then((res) => res.data),
    ...config,
  });
};

export const useInfiniteGet = <T,>(
  url: string,
  params?: ParamsType,
  options?: UndefinedInitialDataInfiniteOptions<ResultPagination<T>>
) => {
  return useInfiniteQuery<ResultPagination<T>>({
    initialPageParam: 1,
    queryKey: [JSON.stringify(params || {})],
    queryFn: async ({ pageParam }) => {
      const res = await typedGet<ResultPagination<T>>(url, { params: { ...params, page: pageParam } });
      return res.data;
    },
    getNextPageParam: (lastPage) => {
      return lastPage?.maxPage === lastPage.currentPage ? undefined : lastPage.currentPage + 1;
    },
    ...options,
  });
};

interface MutationFnAsyncType {
  data: any;
  queryParams?: Record<string, string>;
}

export const usePost = <T,>(url: string, contentType: ContentType = "json") => {
  return useMutation<T, QueryError, MutationFnAsyncType>({
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
  return useMutation<T, QueryError, MutationFnAsyncType>({
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
