import { baseBackendURL } from "@/apis";
import { getAccessToken, getRefreshToken, setTokens } from "./authToken";

export async function authFetch(input: RequestInfo, init: RequestInit = {}): Promise<Response> {
  let token = getAccessToken();
  const headers = new Headers(init.headers);
  if (token) headers.set("Authorization", `Bearer ${token}`);

  let res = await fetch(input, { ...init, headers });

  if (res.status === 401) {
    const refresh_token = getRefreshToken();
    if (!refresh_token) throw new Error("리프레시 토큰 없음. 다시 로그인 필요");

    const refreshUri = `${baseBackendURL}/api/auth/refresh`;
    const rres = await fetch(refreshUri, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token }),
    });
    if (!rres.ok) throw new Error("토큰 갱신 실패");

    const newData = await rres.json();
    setTokens(newData);
    token = newData.access_token;

    headers.set("Authorization", `Bearer ${token}`);
    res = await fetch(input, { ...init, headers });
  }

  return res;
}
