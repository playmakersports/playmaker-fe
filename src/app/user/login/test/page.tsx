"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGet } from "@/apis/hook/query";
import { useToast } from "@/hook/useToast";

import Loading from "@/components/common/Loading";
import { setTokens, clearTokens } from "@/session/authToken";

function TestLogin() {
  const router = useRouter();
  const toast = useToast();

  const { data, isSuccess, isLoading, error } = useGet<{ access_token: string } & any>(
    "/api/dev/test/random-token",
    {}
  );

  useEffect(() => {
    if (isLoading) return;
    if (data?.access_token && isSuccess) {
      setTokens(data);
      toast.trigger("테스트 로그인에 성공했습니다", { type: "success" });
      router.replace("/home");
    } else {
      window.alert("테스트 토큰 발급 실패");
      clearTokens();
      router.replace("/home");
    }
  }, [isLoading]);

  if (isLoading) return <Loading page />;
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60vh" }}>
      <p style={{ fontSize: "1.6rem", textAlign: "center" }}>{error?.message}</p>
    </div>
  );
}

export default TestLogin;
