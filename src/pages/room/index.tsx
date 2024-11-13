import React, { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

function UserIndex() {
  const router = useRouter();
  const token = getCookie("access-token");

  useEffect(() => {
    if (token) {
      router.replace("/room/test");
    } else {
      router.replace("/login");
    }
  }, []);

  return null;
}

export default UserIndex;
