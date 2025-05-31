"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/session/useAuth";
import { usePopup } from "@/components/common/global/PopupProvider";

import { baseBackendURL } from "@/apis";
import Loading from "@/components/common/Loading";

function GoogleLogin() {
  const router = useRouter();
  const popup = usePopup();
  const { setToken } = useAuth();
  const searchParams = useSearchParams();
  const code = searchParams.get("code") as string;
  const googleUrl = `${baseBackendURL}/api/login/goauth2?code=${encodeURIComponent(code)}`;

  const handleLogin = async () => {
    try {
      const response = await fetch(googleUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      await setToken(data.access_token);

      if (data.newUserYn === "Y") {
        router.replace("/user/apply/stage?from=google");
      } else {
        router.replace("/");
      }
    } catch (error) {
      await popup?.alert(`서버 통신에 실패했어요.`, { title: "로그인 실패", showIcon: true, color: "red" });
      throw new Error("Failed to fetch data");
    }
  };

  handleLogin();
  return <Loading page />;
}
export default GoogleLogin;
