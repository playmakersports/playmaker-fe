"use client";

import React, { useEffect, useRef } from "react";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useGet } from "@/apis/hook/query";
import { useAuth } from "@/session/useAuth";

import { isOnboardingAtom } from "@/session/userAtom";
import Loading from "@/components/common/Loading";

function TestLogin() {
  const router = useRouter();
  const { setToken, clearToken } = useAuth();
  const setOnboarding = useSetAtom(isOnboardingAtom);
  const { data, isSuccess, isLoading, error } = useGet<{ access_token: string }>("/api/test/login/random", {});
  const once = useRef(false);

  useEffect(() => {
    if (once.current === false) {
      if (isSuccess) {
        setToken(data.access_token);
      } else {
        const confirm = window.confirm(
          `서버 통신 문제로 테스트 토큰이 발급되지 않았습니다.\n로그인 화면으로 돌아가시겠습니까?`
        );
        if (confirm) {
          clearToken();
          setOnboarding(false);
        } else {
          setToken("TestToken");
        }
        router.replace("/");
      }
      once.current = true;
    }
  }, [isSuccess]);

  if (isLoading) return <Loading page />;
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60vh" }}>
      <p style={{ fontSize: "1.6rem", textAlign: "center" }}>{error?.message}</p>
    </div>
  );
}

export default TestLogin;
