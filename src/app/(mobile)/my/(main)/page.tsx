"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { getCookie, hasCookie } from "cookies-next";
import MyTabHome from "./home/_page";

function MyTabMain() {
  const router = useRouter();
  const token = getCookie("access-token");
  const hasToken = hasCookie("access-token");

  if (!hasToken && !token) {
    router.replace("/user/login");
  }
  return <MyTabHome />;
}

export default MyTabMain;
