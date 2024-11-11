import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { useGet } from "@/apis/hook/query";

import { baseBackendURL } from "@/apis";
import { ACCESS_TOKEN } from "@/atom/user";
import Button from "@/components/common/Button";
import Loading from "@/components/common/Loading";

function TestLogin() {
  const router = useRouter();
  const [, setAccessToken] = useAtom(ACCESS_TOKEN);
  const target = `${baseBackendURL}/api/test/login/random`;
  const { data, isSuccess, isLoading, error } = useGet<{ access_token: string }>(target, {});

  useEffect(() => {
    if (isSuccess) {
      setAccessToken(data.access_token);
    }
  }, [isSuccess]);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "40vh" }}>
      {isLoading && <Loading />}
      <p style={{ fontSize: "1.6rem", textAlign: "center" }}>{error?.message}</p>
      {isSuccess && (
        <p style={{ fontSize: "1.6rem", textAlign: "center" }}>
          <code>{JSON.stringify(data)}</code>
          <Button type="button" mode="MAIN" fullWidth borderType onClick={() => router.push(`/room/`)}>
            로그인 성공 마이페이지 이동
          </Button>
        </p>
      )}
    </div>
  );
}

export default TestLogin;
