"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { setCookie } from "cookies-next";

import { baseBackendURL } from "@/apis";
import { BaseContainer } from "@/components/common/Container";

function Google() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [apiState, setApiState] = useState("");
  const GOOGLE_API_CODE = searchParams.get("code");
  const target = `${baseBackendURL}/api/login/goauth2?code=${encodeURIComponent(`${GOOGLE_API_CODE}`)}`;

  useEffect(() => {
    setApiState("LOADING");
    if (GOOGLE_API_CODE) {
      axios
        .get(target)
        .then((res) => {
          if (res.status === 200) {
            setApiState("SUCCESS");
            setCookie("access-token", res.data.access_token, { secure: true });
            localStorage.setItem("Refresh", res.data.refresh_token);
            router.replace("/user/apply?from=google");
          }
        })
        .catch((err) => {
          setApiState(`ERROR: ${err.code}`);
        });
    }
  }, [GOOGLE_API_CODE]);

  return <BaseContainer>{apiState}</BaseContainer>;
}

export default Google;
