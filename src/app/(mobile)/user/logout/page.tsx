"use client";
import { useEffect } from "react";
import { deleteCookie } from "cookies-next";
import { useSetUser } from "@/session/useSetUser";
import { redirect } from "next/navigation";

function Logout() {
  const { logout } = useSetUser();
  useEffect(() => {
    deleteCookie("access-token", {
      path: "/",
    });
    logout();
  }, []);

  redirect("/user");
}

export default Logout;
