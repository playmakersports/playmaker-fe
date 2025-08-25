import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { baseBackendURL } from "@/apis";
import { authAPI } from "@/apis/url";

// 클라이언트 사이드에서만 메모리 저장
let inMemoryAccessToken: string | null = null;

// 클라이언트 사이드 체크
const isClient = typeof window !== 'undefined';

type AuthData = {
  access_token: string;
  token_type: string | null;
  refresh_token: string;
  id_token: string | null;
  expires_in: number;
  refresh_token_expires_in: number;
  scope: string | null;
  newUserYn: "Y" | "N";
};
export async function setTokens(data: AuthData) {
  if (isClient) {
    inMemoryAccessToken = data.access_token;
  }
  
  const access_token_exp = data.expires_in || 3600;
  const refresh_token_exp = data.refresh_token_expires_in || 86400;
  const accessTokenExpiryMs = Date.now() + access_token_exp * 1000;
  const refreshTokenExpiryMs = Date.now() + refresh_token_exp * 1000;
  
  const cookieOptions = {
    maxAge: access_token_exp,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
  };
  
  const refreshCookieOptions = {
    maxAge: refresh_token_exp,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    httpOnly: true, // refresh token은 httpOnly로 보호
  };
  
  // Access token은 클라이언트에서 접근 가능 (API 호출용)
  setCookie("access_token", data.access_token, cookieOptions);
  setCookie("access_token_expiry", accessTokenExpiryMs.toString(), cookieOptions);
  
  // Refresh token은 httpOnly로 보호
  setCookie("refresh_token", data.refresh_token, refreshCookieOptions);
  setCookie("refresh_token_expiry", refreshTokenExpiryMs.toString(), refreshCookieOptions);
}

export async function getAccessToken(): Promise<string | null> {
  // 서버 사이드에서는 쿠키에서 직접 읽기
  if (!isClient) {
    const token = getCookie("access_token");
    const expiry = getCookie("access_token_expiry");
    
    if (!token || !expiry) return null;
    
    const expiryMs = parseInt(expiry as string, 10);
    if (isNaN(expiryMs) || Date.now() >= expiryMs) return null;
    
    return token as string;
  }
  
  // 클라이언트 사이드 처리
  const expiry = getCookie("access_token_expiry");
  if (!expiry) return null;
  
  const expiryMs = parseInt(expiry as string, 10);
  if (isNaN(expiryMs)) return null;
  
  // 토큰이 만료되지 않았다면 반환
  if (Date.now() < expiryMs) {
    if (!inMemoryAccessToken) {
      inMemoryAccessToken = (getCookie("access_token") as string) || null;
    }
    return inMemoryAccessToken;
  }
  
  // 토큰이 만료되었다면 갱신 시도
  const refreshed = await refreshAccessToken();
  return refreshed ? inMemoryAccessToken : null;
}

export function getRefreshToken(): string | null {
  // refresh token은 httpOnly이므로 서버 사이드에서만 접근 가능
  return getCookie("refresh_token") as string || null;
}

export function clearTokens() {
  if (isClient) {
    inMemoryAccessToken = null;
  }
  
  deleteCookie("access_token");
  deleteCookie("refresh_token");
  deleteCookie("access_token_expiry");
  deleteCookie("refresh_token_expiry");
}

export async function refreshAccessToken(): Promise<boolean> {
  // 클라이언트에서만 토큰 갱신 수행
  if (!isClient) return false;
  
  const refreshToken = getRefreshToken();
  if (!refreshToken) return false;
  
  const refreshExpiry = getCookie("refresh_token_expiry");
  if (refreshExpiry) {
    const refreshExpiryMs = parseInt(refreshExpiry as string, 10);
    if (!isNaN(refreshExpiryMs) && Date.now() >= refreshExpiryMs) {
      clearTokens();
      return false;
    }
  }
  
  try {
    const response = await fetch(`${baseBackendURL}${authAPI.REFRESH}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
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
