import React from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

function UserIndex() {
  const router = useRouter();
  const token = getCookie("access-token");

  if (token) {
    router.replace("/room/test");
    return null;
  } else {
    router.replace("/login");
    return null;
  }
}

export default UserIndex;
