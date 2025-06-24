"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { clearTokens } from "@/session/authToken";
import Loading from "@/components/common/Loading";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        // 1) 백엔드에 로그아웃 요청 (쿠키 clear)
        // await fetch('/api/auth/logout', {
        //   method: 'POST',
        //   credentials: 'include', // 쿠키 전송
        // });

        // 2) 클라이언트 저장 방식일 경우, local/sessionStorage 등에서 토큰 제거
        clearTokens();

        // 3) 메인 페이지나 로그인 페이지로 리다이렉트
        router.replace("/user");
      } catch (e) {
        console.error("로그아웃 중 오류:", e);
        // 그래도 리다이렉트 처리
        router.replace("/user");
      }
    })();
  }, [router]);

  return <Loading page />;
}
