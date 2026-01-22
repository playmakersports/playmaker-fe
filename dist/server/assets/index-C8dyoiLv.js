import { jsx } from "react/jsx-runtime";
import { useSearch, useRouter } from "@tanstack/react-router";
import { useState, useCallback, useEffect } from "react";
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
function GoogleLoginPage() {
  const {
    code,
    error
  } = useSearch({
    from: "/user/login/google/"
  });
  const router = useRouter();
  const toast = useToast();
  const popup = usePopup();
  const [isProcessing, setIsProcessing] = useState(false);
  const handleError = useCallback((error2, isNetworkError = false) => {
    const message = isNetworkError ? "네트워크 연결에 문제가 있어요. 인터넷 연결을 확인해주세요." : `서버와의 통신 중 문제가 발생했어요.
${error2.message || "알 수 없는 오류가 발생했습니다."}`;
    popup?.alert(message, {
      title: "로그인 실패",
      showIcon: true,
      color: "red"
    });
    router.navigate({
      to: "/user",
      replace: true
    });
  }, [popup, router]);
  useEffect(() => {
    if (isProcessing) return;
    if (error) {
      let errorMessage = "로그인이 취소되었거나 오류가 발생했습니다.";
      if (error === "access_denied") {
        errorMessage = "로그인이 취소되었습니다.";
      }
      popup?.alert(errorMessage, {
        title: "로그인 취소",
        showIcon: true,
        color: "red"
      });
      router.navigate({
        to: "/user",
        replace: true
      });
      return;
    }
    if (!code) {
      popup?.alert(`로그인에 필요한 정보가 없습니다.
다시 시도해주세요.`, {
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
    setIsProcessing(true);
    const googleUrl = `${baseBackendURL}${authAPI.GOOGLE}?code=${encodeURIComponent(code)}`;
    (async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 1e4);
        const res = await fetch(googleUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (!res.ok) {
          let errorData;
          try {
            errorData = await res.json();
          } catch {
            errorData = {
              message: `HTTP ${res.status}: ${res.statusText}`
            };
          }
          handleError(errorData);
          return;
        }
        const data = await res.json();
        if (!data.access_token || !data.refresh_token) {
          handleError({
            message: "서버로부터 잘못된 데이터를 받았습니다."
          });
          return;
        }
        await setTokens(data);
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
        console.error("Google OAuth error:", e);
        if (e.name === "AbortError") {
          handleError({
            message: "요청 시간이 초과되었습니다. 다시 시도해주세요."
          });
        } else if (e instanceof TypeError && e.message.includes("fetch")) {
          handleError(e, true);
        } else {
          handleError(e);
        }
      } finally {
        setIsProcessing(false);
      }
    })();
  }, [code, error, router, isProcessing, popup, toast, handleError]);
  return /* @__PURE__ */ jsx(Loading, { page: true });
}
export {
  GoogleLoginPage as component
};
