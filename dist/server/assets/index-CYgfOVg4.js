import { jsx } from "react/jsx-runtime";
import { useSearch, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { d as baseBackendURL, a as authAPI, s as setTokens } from "./authToken-Bx9YTtw3.js";
import { u as useToast } from "./useToast-hwetiz13.js";
import { u as usePopup } from "./PopupProvider-CCXZDelm.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import "cookies-next";
import "axios";
import "sonner";
import "styled-components";
import "./common-6ceLbjxn.js";
import "./AlertFilled-JvwFT9H1.js";
import "./Close20-w_89MMCP.js";
import "./Button-cLlpCM0x.js";
import "./fonts.css-vMQm04zv.js";
import "@vanilla-extract/css";
function KakaoLoginPage() {
  const {
    code
  } = useSearch({
    from: "/user/login/kakao/"
  });
  const router = useRouter();
  const toast = useToast();
  const popup = usePopup();
  const handleError = (error) => {
    popup?.alert(`서버와의 통신 중 문제가 발생했어요.
${error.message}`, {
      title: "로그인 실패",
      showIcon: true,
      color: "red"
    });
    router.navigate({
      to: "/user",
      replace: true
    });
  };
  useEffect(() => {
    if (!code) {
      popup?.alert(`로그인이 불가능한 접근입니다.
다시 확인 해주세요.`, {
        title: "잘못된 접근",
        showIcon: true,
        color: "red"
      });
      router.navigate({
        to: "/user",
        replace: true
      });
      return;
    }
    const kakaoUrl = `${baseBackendURL}${authAPI.KAKAO}?code=${encodeURIComponent(code)}`;
    (async () => {
      try {
        const res = await fetch(kakaoUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (!res.ok) {
          const err = await res.json();
          handleError(err);
          throw new Error(err.message ?? "로그인 실패");
        }
        const data = await res.json();
        setTokens(data);
        if (data.newUserYn === "Y") {
          router.navigate({
            to: "/register",
            replace: true
          });
        } else {
          toast.trigger("환영합니다. 로그인되었습니다.", {
            type: "success"
          });
          router.navigate({
            to: "/home",
            replace: true
          });
        }
      } catch (e) {
        console.error(e);
        handleError(e);
      }
    })();
  }, [code, router]);
  return /* @__PURE__ */ jsx(Loading, { page: true });
}
export {
  KakaoLoginPage as component
};
