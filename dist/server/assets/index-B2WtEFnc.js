import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { b as clearTokens } from "./authToken-Bx9YTtw3.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import "cookies-next";
import "axios";
import "./fonts.css-vMQm04zv.js";
import "@vanilla-extract/css";
function LogoutPage() {
  const router = useRouter();
  useEffect(() => {
    clearTokens();
    router.navigate({
      to: "/user",
      replace: true
    });
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "/");
    }
  }, [router]);
  return /* @__PURE__ */ jsx(Loading, { page: true });
}
export {
  LogoutPage as component
};
