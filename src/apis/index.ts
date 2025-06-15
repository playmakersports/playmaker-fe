import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { getAccessToken, getRefreshToken, setTokens, clearTokens } from "@/session/authToken";
import { authAPI } from "./url";

export const baseBackendURL = "https://port-0-playermaker17-m6usflhbd2e8f971.sel4.cloudtype.app";
const axiosClient = axios.create({ baseURL: baseBackendURL });

// 1) 요청 전 토큰 자동 주입
axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log("token:", token, "\nconfig:", config);
  return config;
});

// 2) 응답에서 401 자동 처리 (리프레시 & 재요청)
// axiosClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalReq = error.config;
//     if (error.response?.status === 401 && !originalReq._retry) {
//       originalReq._retry = true;

//       const refreshToken = getRefreshToken();
//       if (!refreshToken) {
//         clearTokens();
//         return Promise.reject(error);
//       }

//       try {
//         const res = await axios.post(authAPI.REFRESH, { refresh_token: refreshToken }, { baseURL: baseBackendURL });
//         const data = res.data;
//         setTokens(data);

//         originalReq.headers = {
//           ...originalReq.headers,
//           Authorization: `Bearer ${data.access_token}`,
//         };

//         return axiosClient(originalReq);
//       } catch (refreshError) {
//         clearTokens();
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export const typedGet = <T>(path: string, config?: AxiosRequestConfig) => axiosClient.get<T>(path, config);
export const typedPost = <T>(path: string, data?: unknown, config?: AxiosRequestConfig) =>
  axiosClient.post<T>(path, data, config);
export const typedPut = <T>(path: string, data?: unknown, config?: AxiosRequestConfig) =>
  axiosClient.put<T>(path, data, config);
export const typedPatch = <T>(path: string, data?: unknown, config?: AxiosRequestConfig) =>
  axiosClient.patch<T>(path, data, config);
