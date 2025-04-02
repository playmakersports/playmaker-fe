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
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 20000); // 20 seconds

    try {
      const response = await fetch(googleUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        await popup?.alert(`서버 통신에 실패했어요.`, { title: "로그인 실패" });
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      await setToken(data.access_token);

      if (data.newUserYn === "Y") {
        router.replace("/user/apply?from=google");
      } else {
        router.replace("/");
      }
    } catch (error: any) {
      if (error.name === "AbortError") {
        await popup?.alert(`서버와의 통신에 문제가 생겼어요.\n잠시후 다시 시도해주세요.`, {
          title: "로그인 실패",
        });
      } else {
        throw error;
      }
    }
  };

  handleLogin();
  return <Loading page />;
}

export default GoogleLogin;
