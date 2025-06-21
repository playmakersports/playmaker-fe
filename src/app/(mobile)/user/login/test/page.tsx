"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useGet } from "@/apis/hook/query";
// import { useAuth } from "@/session/useAuth";
import { useSetUser } from "@/session/useSetUser";

import Loading from "@/components/common/Loading";
import { setTokens, clearTokens, getAccessToken } from "@/session/authToken";

function TestLogin() {
  const router = useRouter();
  const { logout } = useSetUser();

  // const { setToken, clearToken } = useAuth();

  const { data, isSuccess, isLoading, error } = useGet<{ access_token: string } & any>(
    "/api/dev/test/random-token",
    {}
  );
  const once = useRef(false);

  useEffect(() => {
    if (once.current === false) {
      if (isSuccess) {
        // setToken(data.access_token);
        setTokens(data);
        router.replace("/home");
      } else {
        const confirm = window.confirm(
          `서버 통신 문제로 테스트 토큰이 발급되지 않았습니다.\n로그인 화면으로 돌아가시겠습니까?`
        );
        if (confirm) {
          clearTokens();
          logout();
        } else {
          setTokens({
            access_token: "test-access-token-123player-maker",
            refresh_token: "test-refresh-token-123player-maker",
            expires_in: 3600,
            token_type: null,
            scope: null,
            refresh_token_expires_in: 10,
            id_token: null,
            newUserYn: "N",
          });
          console.log("test-token", getAccessToken());
          router.replace("/home");
        }
        // router.replace("/user");
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
