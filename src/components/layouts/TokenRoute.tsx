import React from "react";

function TokenRoute({ children }: { children: JSX.Element }) {
  const isLogin = true;
  const isAllowedPage = false;
  const isAllowed = true;

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
