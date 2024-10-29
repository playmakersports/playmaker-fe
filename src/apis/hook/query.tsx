import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { typedGet, typedPost } from "..";
import { ACCESS_TOKEN } from "@/atom/user";

type ContentType = "json" | "form-data";
const CONTENT_TYPE: Record<ContentType, string> = {
  json: "application/json",
  "form-data": "multipart/form-data",
};

type QueryConfig<T> = Omit<UseQueryOptions<T, unknown, T, [string, ...unknown[]]>, "queryKey" | "queryFn">;

export const useGet = <T,>(url: string, params?: Record<string, string>, config?: QueryConfig<T>) =>
  useQuery({
    queryKey: [url, ...(params ? Object.values(params) : [])],
    queryFn: async () => {
      const response = await typedGet<T>(url, { params: params || {} });
      return response.data;
    },
    ...config,
  });

interface MutationFnAsyncType {
  data: unknown;
  queryParams?: Record<string, string>;
}
export const usePost = <T,>(url: string, contentType: ContentType = "json") => {
  const access_token = useAtomValue(ACCESS_TOKEN);
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
          Authorization: `Bearer ${access_token}`,
          "Content-Type": CONTENT_TYPE[contentType],
        },
      });
      return response.data;
    },
  });
};
