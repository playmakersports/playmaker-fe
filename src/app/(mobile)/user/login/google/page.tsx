import React from "react";
import { redirect } from "next/navigation";
import { setCookie } from "cookies-next";

import { baseBackendURL } from "@/apis";

async function Google({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const googleUrl = `${baseBackendURL}/api/login/goauth2?code=${encodeURIComponent(`${code}`)}`;
  const data = await fetch(googleUrl);
  const response = await data.json();

  if (response) {
    setCookie("access-token", response.access_token, { secure: true });
    redirect("/user/apply?from=google");
  }

  return <>{data.status}</>;
}

export default Google;
