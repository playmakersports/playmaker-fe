"use client";
import { getAccessToken } from "@/session/authToken";
import { redirect } from "next/navigation";

function RootPage() {
  if (!!getAccessToken()) {
    redirect("/home");
  } else {
    redirect("/user");
  }
}

export default RootPage;
