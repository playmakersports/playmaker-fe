import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { BaseContainer } from "@/components/common/Container";
import Loading from "@/components/common/Loading";
import { baseBackendURL } from "@/apis";

function KakaoLogin() {
  const router = useRouter();
  const [apiState, setApiState] = useState("");
  const KAKAO_API_CODE = router.query.code;
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
            router.push({ pathname: "/user/apply", query: { from: "kakao" } });
          }
        })
        .catch((err) => {
          setApiState(`ERROR: ${err.code}`);
        });
    }
  }, [router.query]);

  return <BaseContainer>{apiState === "LOADING" && <Loading />}</BaseContainer>;
}

export default KakaoLogin;
