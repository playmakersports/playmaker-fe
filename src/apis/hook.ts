import { useMutation, useQuery } from "@tanstack/react-query";
import { baseUrl } from "./endpoint";
import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";

type BaseResponseType<T = any> = {
    status: string;
    message: string;
    data: T;
    error: string;
};

type ErrorResponseDataType = {
    errorCode: string;
    errorMessage: string;
};

export const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

const typedGet = <T>(path: string, config?: AxiosRequestConfig) => apiClient.get<BaseResponseType<T>>(path, config);
const typedMutate = <T>(
    method: Omit<Method, "get" | "GET">,
    path: string,
    data?: unknown,
    config?: AxiosRequestConfig
) => {
    if (method === "POST") return apiClient.post<BaseResponseType<T>>(path, data, config);
    if (method === "PUT") return apiClient.put<BaseResponseType<T>>(path, data, config);
    if (method === "PATCH") return apiClient.patch<BaseResponseType<T>>(path, data, config);
};

export const useQueryGet = <T>(url: string, params?: any, config?: AxiosRequestConfig) =>
    useQuery([url, ...Object.values(params)], async (params) => {
        const res = await typedGet<T>(url, { params, ...config });
        return res.data.data;
    });
export const useQueryMutate = <T>(method: Omit<Method, "get" | "GET">, url: string, config?: AxiosRequestConfig) =>
    useMutation<unknown, AxiosError<ErrorResponseDataType>, any>(async (data: T) => {
        const res = await typedMutate<T>(method, url, data, config);
        return res?.data.data;
    });
