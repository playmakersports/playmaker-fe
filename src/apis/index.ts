import axios, { AxiosRequestConfig } from "axios";

export const baseBackendURL = "https://port-0-playermaker17-m6usflhbd2e8f971.sel4.cloudtype.app";

const axiosClient = axios.create({
  baseURL: baseBackendURL,
});

export const typedGet = <T>(path: string, config?: any) => axiosClient.get<T>(path, config);

export const typedPost = <T>(path: string, data?: unknown, config?: AxiosRequestConfig) =>
  axiosClient.post<T>(path, data, config);

export const typedPut = <T>(path: string, data?: unknown, config?: AxiosRequestConfig) =>
  axiosClient.put<T>(path, data, config);

export const typedPatch = <T>(path: string, data?: unknown, config?: AxiosRequestConfig) =>
  axiosClient.patch<T>(path, data, config);
