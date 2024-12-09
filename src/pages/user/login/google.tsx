import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

import { baseBackendURL } from "@/apis";
import { BaseContainer } from "@/components/common/Container";
import Loading from "@/components/common/Loading";

function Google() {
  const router = useRouter();
  const [result, setResult] = useState("");
  const [apiState, setApiState] = useState("");
  const GOOGLE_API_CODE = router.query.code;
  const target = `${baseBackendURL}/api/login/goauth2?code=${encodeURIComponent(`${GOOGLE_API_CODE}`)}`;

  useEffect(() => {
    setApiState("LOADING");
    if (GOOGLE_API_CODE) {
      axios
        .get(target)
        .then((res) => {
          if (res.status === 200) {
            setApiState("SUCCESS");
            setResult(JSON.stringify(res));
            setCookie("access-token", res.data.access_token, { secure: true });
            localStorage.setItem("Refresh", res.data.refresh_token);
            router.push({ pathname: "/user/apply", query: { from: "google" } });
          }
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

export default Google;
