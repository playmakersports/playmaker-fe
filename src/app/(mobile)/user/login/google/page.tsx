"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { setCookie } from "cookies-next";

import { baseBackendURL } from "@/apis";
import { useGet } from "@/apis/hook/query";
import { AuthResponse } from "@/types/auth";
import Loading from "@/components/common/Loading";

function GoogleLogin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const googleUrl = `${baseBackendURL}/api/login/goauth2?code=${encodeURIComponent(`${code}`)}`;

  const { data } = useGet<AuthResponse>(googleUrl);

  if (data) {
    setCookie("access-token", data.access_token, { secure: true });
    if (data.newUserYn === "Y") {
      // 가입되지 않은 회원
      router.replace("/user/apply?from=google");
    } else {
      // 가입된 회원
      router.replace("/");
    }
  }

  return <Loading page />;
}

export default GoogleLogin;
