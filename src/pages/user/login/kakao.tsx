import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { BACK_END_REQUEST_URL } from "@/constants/baseUrl";
import { BaseContainer } from "@/components/common/Container";
import Loading from "@/components/common/Loading";

function KakaoLogin() {
  const router = useRouter();
  const [result, setResult] = useState("");
  const [apiState, setApiState] = useState("");
  const KAKAO_API_CODE = router.query.code;
  const target = `${BACK_END_REQUEST_URL}/login/oauth2?code=${KAKAO_API_CODE}`;

  useEffect(() => {
    setApiState("LOADING");
    if (KAKAO_API_CODE) {
      axios
        .get(target)
        .then((res) => {
          setApiState(res.status === 200 ? "SUCCESS" : "");
          setResult(JSON.stringify(res));
        })
        .catch((err) => {
          setApiState(`ERROR: ${err.code}`);
        });
    }
  }, [router.query]);

  return (
    <BaseContainer>
      {apiState === "LOADING" && <Loading />}
      {apiState.split(":")[0] === "ERROR" && <div style={{ fontWeight: 800, fontSize: "1.6rem" }}>{apiState}</div>}
      {apiState === "SUCCESS" && (
        <code
          style={{
            display: "block",
            marginTop: "12px",
            padding: "12px",
            fontFamily: "monospace",
            background: "#ececec",
            wordBreak: "break-all",
          }}
        >
          {result}
        </code>
      )}
    </BaseContainer>
  );
}

export default KakaoLogin;
