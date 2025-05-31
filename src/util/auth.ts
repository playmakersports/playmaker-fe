import { VERCEL_BASE_URL } from "@/constants/baseUrl";

const k_auth_uri = "https://kauth.kakao.com/oauth/authorize";
const g_auth_uri = "https://accounts.google.com/o/oauth2/v2/auth";
const a_auth_uri = "https://appleid.apple.com/auth/authorize";

type Provider = "kakao" | "google" | "apple";
const AUTH_TARGET_URI = {
  kakao: k_auth_uri,
  google: g_auth_uri,
  apple: a_auth_uri,
};
const REST_APIKEY_ENV = {
  kakao: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
  google: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  apple: "",
};

const createOpenUri = (provider: Provider, redirectUri: string) => {
  const baseUri = AUTH_TARGET_URI[provider];
  const googleParams = {
    scope: "email openid profile",
  };
  const params = new URLSearchParams({
    client_id: REST_APIKEY_ENV[provider] ?? "",
    redirect_uri: redirectUri,
    response_type: "code",
    ...(provider === "google" ? googleParams : {}),
  });

  return `${baseUri}?${params.toString()}`;
};
export const oAuthSignInStart = (provider: Provider) => {
  const target_redirect_uri = `${VERCEL_BASE_URL}/user/login/${provider}`;
  const openUri = createOpenUri(provider, target_redirect_uri);
  window.open(openUri, "_self");
};
