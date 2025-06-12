"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/session/useAuth";
import { useSetUser } from "@/session/useSetUser";
import { useToast } from "@/hook/useToast";
import { usePopup } from "@/components/common/global/PopupProvider";

import { baseBackendURL } from "@/apis";
import Loading from "@/components/common/Loading";
import { authAPI } from "@/apis/url";

function KakaoLogin() {
  const router = useRouter();
  const { login } = useSetUser();
  const popup = usePopup();
  const toast = useToast();
  const { setToken } = useAuth();
  const searchParams = useSearchParams();
  const code = searchParams.get("code") as string;
  const kakaoUrl = `${baseBackendURL}${authAPI.KAKAO}?code=${encodeURIComponent(code)}`;

  const handleLogin = async () => {
    try {
      const response = await fetch(kakaoUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      await setToken(data.access_token);

      if (data.newUserYn === "Y") {
        // 신규 회원일 경우, 회원가입 화면으로 연결
        router.replace("/user/apply/stage?from=kakao");
      } else {
        // TODO: 반영 예정
        // login({
        //   username: data.username,
        //   nickname: data.nickname,
        //   role: data.role,
        // });
        toast.trigger("환영합니다. 로그인되었습니다.", { type: "success" });
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

export default KakaoLogin;
