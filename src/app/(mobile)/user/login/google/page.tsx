"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { setTokens } from "@/session/authToken";
import { useToast } from "@/hook/useToast";
import { usePopup } from "@/components/common/global/PopupProvider";
import { baseBackendURL } from "@/apis";
import { authAPI } from "@/apis/url";
import Loading from "@/components/common/Loading";

export default function GoogleLoginPage() {
  const params = useSearchParams();
  const router = useRouter();
  const toast = useToast();
  const popup = usePopup();

  const handleError = (error: any) => {
    popup?.alert(`서버와의 통신 중 문제가 발생했어요.\n${error.message}`, {
      title: "로그인 실패",
      showIcon: true,
      color: "red",
    });
    router.replace("/user");
  };

  useEffect(() => {
    const code = params.get("code") as string | null;
    if (!code) {
      popup?.alert(`로그인이 불가능한 접근입니다.\n다시 확인 해주세요.`, {
        title: "잘못된 접근",
        showIcon: true,
        color: "red",
      });
      router.replace("/user");
      return;
    }
    const googleUrl = `${baseBackendURL}${authAPI.GOOGLE}?code=${encodeURIComponent(code)}`;

    (async () => {
      try {
        const res = await fetch(googleUrl, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) {
          const err = await res.json();
          handleError(err);
          throw new Error(err.message ?? "로그인 실패");
        }
        const data = await res.json();
        setTokens(data);
        // router.replace("/");

        if (data.newUserYn === "Y") {
          router.replace("/register?from=google");
        } else {
          toast.trigger("환영합니다. 로그인되었습니다.", { type: "success" });
          router.replace("/home");
        }
      } catch (e: any) {
        console.error(e);
        handleError(e);
      }
    })();
  }, [params, router]);

  return <Loading page />;
}
