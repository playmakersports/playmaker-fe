"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGet } from "@/apis/hook/query";
import { setCookie } from "cookies-next";

import Button from "@/components/common/Button";
import Loading from "@/components/common/Loading";

function TestLogin() {
  const router = useRouter();
  const { data, isSuccess, isLoading, error } = useGet<{ access_token: string }>("/api/test/login/random", {});

  useEffect(() => {
    if (data) {
      setCookie("access-token", data.access_token, { secure: true });
    }
  }, [data]);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "40vh" }}>
      {isLoading && <Loading />}
      <p style={{ fontSize: "1.6rem", textAlign: "center" }}>{error?.message}</p>
      {isSuccess && (
        <p style={{ fontSize: "1.6rem", textAlign: "center" }}>
          <code>{JSON.stringify(data)}</code>
          <Button type="button" mode="MAIN" fullWidth borderType onClick={() => router.replace(`/room/`)}>
            로그인 성공 마이페이지 이동
          </Button>
        </p>
      )}
    </div>
  );
}

export default TestLogin;
