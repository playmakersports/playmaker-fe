"use client";
import { useAuth } from "@/session/useAuth";
import { redirect } from "next/navigation";

function RootPage() {
  const { isLogin } = useAuth();
  if (isLogin) {
    redirect("/home");
  } else {
    redirect("/user");
  }
}

export default RootPage;
