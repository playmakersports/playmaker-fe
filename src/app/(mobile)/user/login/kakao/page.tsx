"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/session/useAuth";

import { baseBackendURL } from "@/apis";
import { useGet } from "@/apis/hook/query";
import { AuthResponse } from "@/types/auth";
import Loading from "@/components/common/Loading";

function KakaoLogin() {
  const router = useRouter();
  const { setToken } = useAuth();
  const searchParams = useSearchParams();
  const code = searchParams.get("code") as string;
  const kakaoUrl = `${baseBackendURL}/api/login/koauth2?code=${encodeURIComponent(code)}`;

  const { data } = useGet<AuthResponse>(kakaoUrl);
  console.log("logged-kakao:", data);

  if (data) {
    setToken(data.access_token);
    if (data.newUserYn === "Y") {
      // 가입되지 않은 회원
      router.replace("/user/apply?from=kakao");
    } else {
      // 가입된 회원
      router.replace("/");
    }
  }

  return <Loading page />;
}

export default KakaoLogin;
