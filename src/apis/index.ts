import axios, { AxiosRequestConfig } from "axios";

export const baseBackendURL = "https://port-0-playmaker-be-e9btb72blgj562lo.sel3.cloudtype.app";

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
