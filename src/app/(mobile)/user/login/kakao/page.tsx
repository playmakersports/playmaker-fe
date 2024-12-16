import React from "react";
import { redirect } from "next/navigation";
import { setCookie } from "cookies-next";

import { baseBackendURL } from "@/apis";

async function KakaoLogin({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const kakaoUrl = `${baseBackendURL}/api/login/koauth2?code=${encodeURIComponent(`${code}`)}`;
  const data = await fetch(kakaoUrl);
  const response = await data.json();

  if (response) {
    setCookie("access-token", response.access_token, { secure: true });

    if (response.newUserYn === "Y") {
      // 가입되지 않은 회원
      redirect("/user/apply?from=kakao");
    } else {
      // 가입된 회원
      redirect("/");
    }
  }

  return <>{data.status}</>;
}

export default KakaoLogin;
