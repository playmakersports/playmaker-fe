import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCookie, hasCookie } from "cookies-next/server";

import MyTabHome from "./home/_page";

async function MyTabMain() {
  const token = await getCookie("access-token", { cookies });
  const hasToken = await hasCookie("access-token", { cookies });

  if (hasToken && !!token) {
    return <MyTabHome />;
  } else {
    redirect("/user/login");
  }
}

export default MyTabMain;
