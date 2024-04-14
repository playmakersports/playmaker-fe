import React from "react";
import { useRouter } from "next/router";

function KakaoLogin() {
  const router = useRouter();
  const KAKAO_API_CODE = router.query.code;
  console.log(KAKAO_API_CODE);

  return <div>KakaoLogin</div>;
}

export default KakaoLogin;
