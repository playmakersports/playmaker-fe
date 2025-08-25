"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
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
  const [isProcessing, setIsProcessing] = useState(false);

  const handleError = useCallback((error: any, isNetworkError = false) => {
    const message = isNetworkError 
      ? "네트워크 연결에 문제가 있어요. 인터넷 연결을 확인해주세요."
      : `서버와의 통신 중 문제가 발생했어요.\n${error.message || "알 수 없는 오류가 발생했습니다."}`;
    
    popup?.alert(message, {
      title: "로그인 실패",
      showIcon: true,
      color: "red",
    });
    router.replace("/user");
  }, [popup, router]);

  useEffect(() => {
    if (isProcessing) return;
    
    const code = params.get("code") as string | null;
    const error = params.get("error") as string | null;
    
    // OAuth 에러 체크
    if (error) {
      let errorMessage = "로그인이 취소되었거나 오류가 발생했습니다.";
      if (error === "access_denied") {
        errorMessage = "로그인이 취소되었습니다.";
      }
      popup?.alert(errorMessage, {
        title: "로그인 취소",
        showIcon: true,
        color: "red",
      });
      router.replace("/user");
      return;
    }
    
    if (!code) {
      popup?.alert(`로그인에 필요한 정보가 없습니다.\n다시 시도해주세요.`, {
        title: "잘못된 접근",
        showIcon: true,
        color: "red",
      });
      router.replace("/user");
      return;
    }
    
    setIsProcessing(true);
    const googleUrl = `${baseBackendURL}${authAPI.GOOGLE}?code=${encodeURIComponent(code)}`;

    (async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10초 타임아웃
        
        const res = await fetch(googleUrl, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
        });
        
        clearTimeout(timeoutId);
        
        if (!res.ok) {
          let errorData;
          try {
            errorData = await res.json();
          } catch {
            errorData = { message: `HTTP ${res.status}: ${res.statusText}` };
          }
          handleError(errorData);
          return;
        }
        
        const data = await res.json();
        
        // 필수 데이터 유효성 검사
        if (!data.access_token || !data.refresh_token) {
          handleError({ message: "서버로부터 잘못된 데이터를 받았습니다." });
          return;
        }

        await setTokens(data);
        
        if (data.newUserYn === "Y") {
          router.replace("/register");
        } else {
          toast.trigger("환영합니다. 로그인되었습니다.", { type: "success" });
          router.replace("/home");
        }
      } catch (e: any) {
        console.error("Google OAuth error:", e);
        
        if (e.name === "AbortError") {
          handleError({ message: "요청 시간이 초과되었습니다. 다시 시도해주세요." });
        } else if (e instanceof TypeError && e.message.includes("fetch")) {
          handleError(e, true); // 네트워크 에러
        } else {
          handleError(e);
        }
      } finally {
        setIsProcessing(false);
      }
    })();
  }, [params, router, isProcessing, popup, toast, handleError]);

  return <Loading page />;
}
