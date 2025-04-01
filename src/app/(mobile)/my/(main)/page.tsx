import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCookie, hasCookie } from "cookies-next/server";

import MyTabHome from "./home/_page";

async function MyTabMain() {
  const token = await getCookie("access-token", { cookies });
  const hasToken = await hasCookie("access-token", { cookies });

  if (!hasToken && !token) {
    redirect("/user/login");
  }
  return <MyTabHome />;
}

export default MyTabMain;
