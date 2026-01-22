import { useQuery, useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { e as typedGet, f as typedPost, h as typedPut } from "./authToken-Bx9YTtw3.js";
const CONTENT_TYPE = {
  json: "application/json"
};
const useGet = (url, params, config) => {
  return useQuery({
    queryKey: [url, ...Object.values(params ?? [])],
    queryFn: () => typedGet(url, { params }).then((res) => res.data),
    ...config
  });
};
const useInfiniteGet = (url, params, options) => {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [url, ...Object.values(params ?? [])],
    queryFn: async ({ pageParam }) => {
      const res = await typedGet(url, { params: { ...params, page: pageParam } });
      return res.data;
    },
    getNextPageParam: (lastPage) => {
      return lastPage?.maxPage === lastPage.currentPage ? void 0 : lastPage.currentPage + 1;
    },
    ...options
  });
};
const usePost = (url, contentType = "json") => {
  return useMutation({
    mutationKey: [url],
    mutationFn: async ({ data, queryParams }) => {
      const finalUrl = queryParams ? `${url}?${new URLSearchParams(queryParams).toString()}` : url;
      const config = {};
      if (contentType === "json") {
        config.headers = { "Content-Type": CONTENT_TYPE.json };
      }
      const response = await typedPost(finalUrl, data, config);
      return response.data;
    }
  });
};
const usePut = (url, contentType = "json") => {
  return useMutation({
    mutationKey: [url],
    mutationFn: async ({ data, queryParams }) => {
      const finalUrl = queryParams ? `${url}?${new URLSearchParams(queryParams).toString()}` : url;
      const config = {};
      if (contentType === "json") {
        config.headers = {
          "Content-Type": CONTENT_TYPE.json
        };
      }
      const response = await typedPut(finalUrl, data, config);
      return response.data;
    }
  });
};
export {
  usePost as a,
  usePut as b,
  useInfiniteGet as c,
  useGet as u
};
