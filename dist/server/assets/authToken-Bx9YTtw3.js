import { setCookie, deleteCookie, getCookie } from "cookies-next";
import axios from "axios";
const boardAPI = {
  BOARDS: "/api/boards",
  DETAIL: "/api/boards/detail",
  COMMENT: "/api/comment"
};
const teamJoinAPI = {
  REQUEST: "/api/teams/join/request",
  APPROVE: (teamId, memberId) => `/api/teams/join/${teamId}/approve/${memberId}`,
  REJECT: (teamId, memberId) => `/api/teams/join/${teamId}/reject/${memberId}`,
  TEAM_REQ_LIST: (teamId) => `/api/teams/join/team/${teamId}/requests`,
  MY_REQUEST: `/api/teams/join/my-requests`
};
const profileAPI = {
  MY_PROFILE: "/api/users/me/profile"
};
const authAPI = {
  JOIN: "/api/auth/register",
  FITNESS: "/api/auth/fitness-profile",
  KAKAO: "/api/auth/kakao/callback",
  GOOGLE: "/api/auth/google/callback",
  APPLE: "/api/auth/apple/callback",
  REFRESH: "/api/auth/refresh"
};
const teamAPI = {
  TEAMS: "/api/teams",
  SETTING: {
    VISIBILITY: (teamId) => `/api/teams/${teamId}/settings/visibility`,
    RECRUIT: (teamId) => `/api/teams/${teamId}/settings/recruit`,
    PUBLIC: (teamId) => `/api/teams/${teamId}/settings/public`,
    BASIC: (teamId) => `/api/teams/${teamId}/settings/basic`
  }
};
const matchAPI = {
  matches: "/api/matches"
};
const commonAPI = {
  CODES: "/api/codes",
  HOME: "/api/home"
};
const baseBackendURL = "https://port-0-playermaker17-m6usflhbd2e8f971.sel4.cloudtype.app";
const axiosClient = axios.create({ baseURL: baseBackendURL });
axiosClient.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalReq = error.config;
    if (error.response?.status === 401 && !originalReq._retry) {
      originalReq._retry = true;
      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        clearTokens();
        return Promise.reject(error);
      }
      try {
        const res = await axios.post(authAPI.REFRESH, { refresh_token: refreshToken }, { baseURL: baseBackendURL });
        const data = res.data;
        await setTokens(data);
        originalReq.headers = {
          ...originalReq.headers,
          Authorization: `Bearer ${data.access_token}`
        };
        return axiosClient(originalReq);
      } catch (refreshError) {
        clearTokens();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
const typedGet = (path, config) => axiosClient.get(path, config);
const typedPost = (path, data, config) => axiosClient.post(path, data, config);
const typedPut = (path, data, config) => axiosClient.put(path, data, config);
const typedDelete = (path, config) => axiosClient.delete(path, config);
let inMemoryAccessToken = null;
const isClient = typeof window !== "undefined";
async function setTokens(data) {
  if (isClient) {
    inMemoryAccessToken = data.access_token;
  }
  const access_token_exp = data.expires_in || 3600;
  const refresh_token_exp = data.refresh_token_expires_in || 86400;
  const accessTokenExpiryMs = Date.now() + access_token_exp * 1e3;
  const refreshTokenExpiryMs = Date.now() + refresh_token_exp * 1e3;
  const cookieOptions = {
    maxAge: access_token_exp,
    secure: true,
    sameSite: "lax"
  };
  const refreshCookieOptions = {
    maxAge: refresh_token_exp,
    secure: true,
    sameSite: "lax",
    httpOnly: true
    // refresh token은 httpOnly로 보호
  };
  setCookie("access_token", data.access_token, cookieOptions);
  setCookie("access_token_expiry", accessTokenExpiryMs.toString(), cookieOptions);
  setCookie("refresh_token", data.refresh_token, refreshCookieOptions);
  setCookie("refresh_token_expiry", refreshTokenExpiryMs.toString(), refreshCookieOptions);
}
async function getAccessToken() {
  if (!isClient) {
    const token = getCookie("access_token");
    const expiry2 = getCookie("access_token_expiry");
    if (!token || !expiry2) return null;
    const expiryMs2 = parseInt(expiry2, 10);
    if (isNaN(expiryMs2) || Date.now() >= expiryMs2) return null;
    return token;
  }
  const expiry = getCookie("access_token_expiry");
  if (!expiry) return null;
  const expiryMs = parseInt(expiry, 10);
  if (isNaN(expiryMs)) return null;
  if (Date.now() < expiryMs) {
    if (!inMemoryAccessToken) {
      inMemoryAccessToken = getCookie("access_token") || null;
    }
    return inMemoryAccessToken;
  }
  const refreshed = await refreshAccessToken();
  return refreshed ? inMemoryAccessToken : null;
}
function getRefreshToken() {
  return getCookie("refresh_token") || null;
}
function clearTokens() {
  if (isClient) {
    inMemoryAccessToken = null;
  }
  deleteCookie("access_token");
  deleteCookie("refresh_token");
  deleteCookie("access_token_expiry");
  deleteCookie("refresh_token_expiry");
}
async function refreshAccessToken() {
  if (!isClient) return false;
  const refreshToken = getRefreshToken();
  if (!refreshToken) return false;
  const refreshExpiry = getCookie("refresh_token_expiry");
  if (refreshExpiry) {
    const refreshExpiryMs = parseInt(refreshExpiry, 10);
    if (!isNaN(refreshExpiryMs) && Date.now() >= refreshExpiryMs) {
      clearTokens();
      return false;
    }
  }
  try {
    const response = await fetch(`${baseBackendURL}${authAPI.REFRESH}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ refresh_token: refreshToken })
    });
    if (!response.ok) {
      clearTokens();
      return false;
    }
    const data = await response.json();
    await setTokens(data);
    return true;
  } catch (error) {
    console.error("Token refresh failed:", error);
    clearTokens();
    return false;
  }
}
export {
  authAPI as a,
  clearTokens as b,
  commonAPI as c,
  baseBackendURL as d,
  typedGet as e,
  typedPost as f,
  getAccessToken as g,
  typedPut as h,
  teamJoinAPI as i,
  boardAPI as j,
  typedDelete as k,
  matchAPI as m,
  profileAPI as p,
  setTokens as s,
  teamAPI as t
};
