import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { BACK_END_REQUEST_URL } from "@/constants/baseUrl";

function KakaoLogin() {
  const router = useRouter();
  const [result, setResult] = useState("");
  const KAKAO_API_CODE = router.query.code;
  const target = `${BACK_END_REQUEST_URL}/login/oauth2?code=${KAKAO_API_CODE}`;

  useEffect(() => {
    if (KAKAO_API_CODE) {
      axios.get(target).then((res) => setResult(JSON.stringify(res)));
    }
  }, [router.query]);

  return (
    <div style={{ fontSize: "1.8rem", lineHeight: "3.2rem" }}>
      response:
      <code
        style={{
          display: "block",
          margin: "0 20px",
          padding: "12px",
          fontFamily: "monospace",
          background: "#ececec",
          wordBreak: "break-all",
        }}
      >
        {result}
      </code>
    </div>
  );
}

export default KakaoLogin;
