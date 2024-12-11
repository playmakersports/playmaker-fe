import React, { useEffect } from "react";
import axios from "axios";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { baseBackendURL } from "@/apis";

function TokenRoute({ children }: { children: JSX.Element }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isLogin = true;
  const isAllowedPage = false;
  const isAllowed = true;

  useEffect(() => {
    const refreshAPI = axios.create({
      baseURL: baseBackendURL,
      headers: { "Content-Type": "application/json" }, // header의 Content-Type을 JSON 형식의 데이터를 전송한다
    });

    const interceptor = axios.interceptors.response.use(
      // 성공적인 응답 처리
      (response) => {
        // console.log('Starting Request', response)
        return response;
      },
      async (error) => {
        const originalConfig = error.config; // 기존에 수행하려고 했던 작업
        const msg = error.response.data.msg; // error msg from backend
        const status = error.response.status; // 현재 발생한 에러 코드
        // access_token 재발급
        if (status === 401) {
          if (msg == "Expired Access Token. 토큰이 만료되었습니다") {
            // console.log("토큰 재발급 요청");
            await axios
              .post(
                `${baseBackendURL}/api/token/reissue`,
                {},
                {
                  headers: {
                    Authorization: `${localStorage.getItem("Authorization")}`,
                    Refresh: `${localStorage.getItem("Refresh")}`,
                  },
                }
              )
              .then((res) => {
                // console.log("res : ", res);
                // 새 토큰 저장
                localStorage.setItem("Authorization", res.headers.authorization);
                localStorage.setItem("Refresh", res.headers.refresh);

                // 새로 응답받은 데이터로 토큰 만료로 실패한 요청에 대한 인증 시도 (header에 토큰 담아 보낼 때 사용)
                originalConfig.headers["authorization"] = "Bearer " + res.headers.authorization;
                originalConfig.headers["refresh"] = res.headers.refresh;

                // console.log("New access token obtained.");
                // 새로운 토큰으로 재요청
                return refreshAPI(originalConfig);
              })
              .catch(() => {
                console.error("An error occurred while refreshing the token:", error);
              });
          }
          // refresh_token 재발급과 예외 처리
          // else if(msg == "만료된 리프레시 토큰입니다") {
          else {
            localStorage.clear();
            router.push("/");
            // window.alert("토큰이 만료되어 자동으로 로그아웃 되었습니다.")
          }
        } else if (status == 400 || status == 404 || status == 409) {
          // window.alert(msg);
          // console.log(msg)
        }
        // console.error('Error response:', error);
        // 다른 모든 오류를 거부하고 처리
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, []);

  if (isLogin && isAllowedPage && !isAllowed) {
    // 로그인, 권한 필요한 페이지, 권한이 없을 때
    return <div>권한이 없는 접근입니다.</div>;
  }
  if (!isLogin && isAllowedPage) {
    // 로그아웃, 권한 필요한 페이지
    return <div>로그인 후 이용 가능합니다.</div>;
  }

  return children;
}

export default TokenRoute;
