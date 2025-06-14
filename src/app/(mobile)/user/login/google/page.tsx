"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/session/useAuth";
import { useSetUser } from "@/session/useSetUser";
import { useToast } from "@/hook/useToast";
import { usePopup } from "@/components/common/global/PopupProvider";

import { baseBackendURL } from "@/apis";
import Loading from "@/components/common/Loading";
import { authAPI } from "@/apis/url";

function GoogleLogin() {
  const router = useRouter();
  const { login, logout } = useSetUser();
  const popup = usePopup();
  const toast = useToast();
  const { setToken } = useAuth();
  const searchParams = useSearchParams();
  const code = searchParams.get("code") as string;
  const googleUrl = `${baseBackendURL}${authAPI.GOOGLE}?code=${encodeURIComponent(code)}`;

  // 요청 성공시에, param 업데이트로 다시 호출되는 현상 제어
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const hasLoggedIn = sessionStorage.getItem("google_logged_in");
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
        document.cookie = `refresh_token=${data.refresh_token}; path=/; max-age=604800; secure; sameSite=Lax`;
        sessionStorage.setItem("google_logged_in", "true");

        if (data.newUserYn === "Y") {
          // 신규 회원일 경우, 회원가입 화면으로 연결
          router.replace("/register?from=google");
        } else {
          // TODO: 반영 예정
          // login({
          //   username: data.username,
          //   nickname: data.nickname,
          //   role: data.role,
          // });
          toast.trigger("환영합니다. 로그인되었습니다.", { type: "success" });
          router.replace("/home");
        }
        setHasRun(true);
      } catch (error) {
        await popup?.alert(`서버 통신에 실패했어요.\n${error}`, {
          title: "로그인 실패",
          showIcon: true,
          color: "red",
        });
        router.replace("/");
        logout();
      }
    };

    if (code && !hasRun && !hasLoggedIn) {
      handleLogin();
    }
  }, [code]);

  return <Loading page />;
}
export default GoogleLogin;
