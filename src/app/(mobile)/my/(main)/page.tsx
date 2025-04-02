"use client";
import React, { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import MyTabHome from "./home/_page";

function MyTabMain() {
  const router = useRouter();

  useLayoutEffect(() => {
    const token = getCookie("access-token");
    if (!token) {
      router.replace("/user/login");
    }
  }, [router]);

  return <MyTabHome />;
}

export default MyTabMain;
