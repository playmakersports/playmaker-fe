import React from "react";
import { redirect } from "next/navigation";
import { setCookie } from "cookies-next";

import { baseBackendURL } from "@/apis";

async function GoogleLogin({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const googleUrl = `${baseBackendURL}/api/login/goauth2?code=${encodeURIComponent(`${code}`)}`;
  const data = await fetch(googleUrl);
  const response = await data.json();

  if (response) {
    setCookie("access-token", response.access_token, { secure: true });

    if (response.newUserYn === "Y") {
      // 가입되지 않은 회원
      redirect("/user/apply?from=google");
    } else {
      // 가입된 회원
      redirect("/");
    }
  }

  return <>{data.status}</>;
}

export default GoogleLogin;
