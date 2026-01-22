import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { g as getAccessToken } from "./authToken-Bx9YTtw3.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import "cookies-next";
import "axios";
import "./fonts.css-vMQm04zv.js";
import "@vanilla-extract/css";
function RootPage() {
  const router = useRouter();
  useEffect(() => {
    const checkAuth = async () => {
      const token = getAccessToken();
      if (token) {
        router.navigate({
          to: "/home",
          replace: true
        });
      } else {
        router.navigate({
          to: "/user",
          replace: true
        });
      }
    };
    checkAuth();
  }, [router]);
  return /* @__PURE__ */ jsx(Loading, { page: true });
}
export {
  RootPage as component
};
