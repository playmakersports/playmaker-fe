import { redirect } from "next/navigation";
import { baseBackendURL } from "@/apis";
import { AuthResponse } from "@/types/auth";
import { setServerCookie } from "@/session/server-cookie";

type SearchParams = Promise<{ code: string | undefined }>;
export default async function GoogleLogin(props: { searchParams: SearchParams }) {
  const code = (await props.searchParams).code;
  if (!code) {
    // params에 코드가 없을 경우
    return <p>Authorization code is missing.</p>;
  }

  const googleUrl = `${baseBackendURL}/api/login/goauth2?code=${encodeURIComponent(code)}`;

  try {
    const response = await fetch(googleUrl, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to authenticate");
    }

    const data: AuthResponse = await response.json();
    setServerCookie(data.access_token);

    if (data.newUserYn === "Y") {
      // 가입되지 않은 회원 -> 회원가입 페이지로 리디렉트
      redirect("/user/apply?from=google");
    } else {
      // 가입된 회원 -> 메인 페이지로 리디렉트
      redirect("/");
    }
  } catch (error) {
    return <p>Authentication failed. Please try again.</p>;
  }
}
