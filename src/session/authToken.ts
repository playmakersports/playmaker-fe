// 메모리 저장 + sessionStorage 조합
let inMemoryAccessToken: string | null = null;

export function setTokens(data: { access_token: string; refresh_token: string; expires_in: number }) {
  inMemoryAccessToken = data.access_token;
  sessionStorage.setItem("refresh_token", data.refresh_token);
  const expiryMs = Date.now() + data.expires_in * 1000;
  sessionStorage.setItem("access_token_expiry", expiryMs.toString());
}

export function getAccessToken(): string | null {
  const expiry = parseInt(sessionStorage.getItem("access_token_expiry") ?? "0", 10);
  if (Date.now() < expiry && inMemoryAccessToken) {
    return inMemoryAccessToken;
  }
  return null;
}

export function getRefreshToken(): string | null {
  return sessionStorage.getItem("refresh_token");
}

export function clearTokens() {
  inMemoryAccessToken = null;
  sessionStorage.removeItem("refresh_token");
  sessionStorage.removeItem("access_token_expiry");
}
