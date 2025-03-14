"use client";
import { useAuth } from "@/session/useAuth";
import { redirect } from "next/navigation";

function UserIndex() {
  const token = useAuth().accessToken;

  if (token) {
    redirect("/my");
  } else {
    redirect("/user/login");
  }
}

export default UserIndex;
