"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { BaseContainer } from "@/components/common/Container";
import Loading from "@/components/common/Loading";
import { baseBackendURL } from "@/apis";

function KakaoLogin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [apiState, setApiState] = useState("");
  const KAKAO_API_CODE = searchParams.get("code");
  const target = `${baseBackendURL}/api/login/koauth2?code=${KAKAO_API_CODE}`;

  useEffect(() => {
    setApiState("LOADING");
    if (KAKAO_API_CODE) {
      axios
        .get(target)
        .then((res) => {
          if (res.status === 200) {
            setApiState("SUCCESS");
            localStorage.setItem("Authorization", res.data.access_token);
            localStorage.setItem("Refresh", res.data.refresh_token);
            router.replace("/user/apply?from=kakao");
          }
        })
        .catch((err) => {
          setApiState(`ERROR: ${err.code}`);
        });
    }
  }, [KAKAO_API_CODE]);

  return <BaseContainer>{apiState === "LOADING" && <Loading />}</BaseContainer>;
}

export default KakaoLogin;
