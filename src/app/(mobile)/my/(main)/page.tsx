import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import MyTabHome from "./home/_page";

async function MyTabMain() {
  const cookie = await cookies();
  const token = cookie.get("access-token")?.value;

  if (token) {
    return <MyTabHome />;
  } else {
    redirect("/user/login");
  }
}

export default MyTabMain;
