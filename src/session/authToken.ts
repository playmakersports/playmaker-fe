import { deleteCookie, getCookie, setCookie } from "cookies-next";

// 메모리 저장용
let inMemoryAccessToken: string | null = null;

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
  inMemoryAccessToken = data.access_token;
  setCookie("access_token", data.access_token);
  sessionStorage.setItem("refresh_token", data.refresh_token);
  const access_token_exp = data.expires_in || 3600; // 임시로 1시간 설정 처리
  const expiryMs = Date.now() + access_token_exp * 1000;
  setCookie("access_token_expiry", expiryMs.toString());
}

export function getAccessToken(): string | null {
  const expiry = parseInt(getCookie("access_token_expiry") as string, 10);
  if (Date.now() < expiry) {
    if (!inMemoryAccessToken) {
      inMemoryAccessToken = (getCookie("access_token") as string) || null;
    }
    return inMemoryAccessToken;
  }
  return null;
}

export function getRefreshToken(): string | null {
  return sessionStorage.getItem("refresh_token");
}

export function clearTokens() {
  inMemoryAccessToken = null;
  deleteCookie("access_token");
  sessionStorage.removeItem("refresh_token");
  sessionStorage.removeItem("access_token_expiry");
}
