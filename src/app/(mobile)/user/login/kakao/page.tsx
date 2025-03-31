"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/session/useAuth";

import { baseBackendURL } from "@/apis";
import Loading from "@/components/common/Loading";

function KakaoLogin() {
  const router = useRouter();
  const { setToken } = useAuth();
  const searchParams = useSearchParams();
  const code = searchParams.get("code") as string;
  const googleUrl = `${baseBackendURL}/api/login/koauth2?code=${encodeURIComponent(code)}`;

  const handleLogin = async () => {
    const response = await fetch(googleUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    await setToken(data.access_token);
    if (data.newUserYn === "Y") {
      router.replace("/user/apply?from=kakao");
    } else {
      router.replace("/");
    }
  };

  handleLogin();
  return <Loading page />;
}

export default KakaoLogin;
