"use client";

import React, { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGet } from "@/apis/hook/query";
import { setCookie } from "cookies-next";

import Button from "@/components/common/Button";
import Loading from "@/components/common/Loading";

function TestLogin() {
  const router = useRouter();
  const { data, isSuccess, error } = useGet<{ access_token: string }>("/api/test/login/random", {});

  useEffect(() => {
    if (data) {
      setCookie("access-token", data.access_token, { secure: true });
    }
  }, [data]);

  return (
    <Suspense fallback={<Loading page />}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60vh" }}>
        <p style={{ fontSize: "1.6rem", textAlign: "center" }}>{error?.message}</p>
        {isSuccess && (
          <p
            style={{
              width: "100%",
              padding: "0 12px",
              wordBreak: "break-all",
              fontSize: "1.6rem",
              lineHeight: "2.2rem",
              textAlign: "center",
            }}
          >
            <code>{JSON.stringify(data)}</code>
            <Button type="button" mode="MAIN" fullWidth borderType onClick={() => router.replace(`/room/`)}>
              로그인 성공 마이페이지 이동
            </Button>
          </p>
        )}
      </div>
    </Suspense>
  );
}

export default TestLogin;
