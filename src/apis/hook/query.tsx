import { useAuth } from "@/session/useAuth";
import { useMutation, useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";
import { typedGet, typedPost, typedPut } from "..";

type ContentType = "json" | "form-data";
const CONTENT_TYPE: Record<ContentType, string> = {
  json: "application/json",
  "form-data": "multipart/form-data",
};

type QueryConfig<T> = Omit<UseQueryOptions<T, Error, T, QueryKey>, "queryKey" | "queryFn">;

export const useGet = <T,>(url: string, params?: Record<string, string>, config?: QueryConfig<T>) => {
  const { accessToken } = useAuth();

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
  data: any;
  queryParams?: Record<string, string>;
}
export const usePost = (url: string, contentType: ContentType = "json") => {
  const { accessToken } = useAuth();

  return useMutation({
    mutationFn: async ({ data, queryParams }: MutationFnAsyncType) => {
      let finalUrl = url;
      if (queryParams) {
        const queryString = Object.entries(queryParams)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join("&");
        finalUrl += `?${queryString}`;
      }

      const headers: Record<string, string> = {
        Authorization: `Bearer ${accessToken}`,
      };

      // contentType이 json이면 Content-Type 지정, form-data는 생략
      if (contentType !== "form-data") {
        headers["Content-Type"] = CONTENT_TYPE[contentType];
      }

      const response = await typedPost<any>(finalUrl, data, { headers });
      return response.data;
    },
    mutationKey: [url],
  });
};

export const usePut = <T,>(url: string, contentType: ContentType = "json") => {
  const { accessToken } = useAuth();
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
