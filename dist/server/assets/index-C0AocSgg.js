import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { u as useGet } from "./query-Ciubt76c.js";
import { u as useToast } from "./useToast-hwetiz13.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import { s as setTokens, b as clearTokens } from "./authToken-Bx9YTtw3.js";
import "@tanstack/react-query";
import "sonner";
import "styled-components";
import "./common-6ceLbjxn.js";
import "./AlertFilled-JvwFT9H1.js";
import "./Close20-w_89MMCP.js";
import "./fonts.css-vMQm04zv.js";
import "@vanilla-extract/css";
import "cookies-next";
import "axios";
function TestLogin() {
  const router = useRouter();
  const toast = useToast();
  const {
    data,
    isSuccess,
    isLoading,
    error
  } = useGet("/api/dev/test/random-token", {});
  useEffect(() => {
    if (isLoading) return;
    if (data?.access_token && isSuccess) {
      setTokens(data);
      toast.trigger("테스트 로그인에 성공했습니다", {
        type: "success"
      });
      router.navigate({
        to: "/home",
        replace: true
      });
    } else {
      window.alert("테스트 토큰 발급 실패");
      clearTokens();
      router.navigate({
        to: "/home",
        replace: true
      });
    }
  }, [isLoading]);
  if (isLoading) return /* @__PURE__ */ jsx(Loading, { page: true });
  return /* @__PURE__ */ jsx("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh"
  }, children: /* @__PURE__ */ jsx("p", { style: {
    fontSize: "1.6rem",
    textAlign: "center"
  }, children: error?.message }) });
}
export {
  TestLogin as component
};
