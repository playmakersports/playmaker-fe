"use client";
import { useEffect } from "react";
import { deleteCookie } from "cookies-next";
import { useSetUser } from "@/session/useSetUser";
import { useRouter } from "next/navigation";

function Logout() {
  const router = useRouter();
  const { logout } = useSetUser();
  useEffect(() => {
    deleteCookie("access-token", {
      path: "/",
    });
    logout();
    router.replace("/user");
    router.refresh();
  }, []);
}

export default Logout;
