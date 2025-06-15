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
export function setTokens(data: AuthData) {
  inMemoryAccessToken = data.access_token;
  sessionStorage.setItem("access_token", data.access_token);
  sessionStorage.setItem("refresh_token", data.refresh_token);
  const access_token_exp = data.expires_in || 3600; // 임시로 1시간 설정 처리
  const expiryMs = Date.now() + access_token_exp * 1000;
  sessionStorage.setItem("access_token_expiry", expiryMs.toString());
}

export function getAccessToken(): string | null {
  const expiry = parseInt(sessionStorage.getItem("access_token_expiry") ?? "0", 10);
  if (Date.now() < expiry) {
    if (!inMemoryAccessToken) {
      inMemoryAccessToken = sessionStorage.getItem("access_token");
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
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("refresh_token");
  sessionStorage.removeItem("access_token_expiry");
}
