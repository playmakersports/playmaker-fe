"use client";

import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

function UserIndex() {
  const token = getCookie("access-token");

  if (token) {
    redirect("/room/test");
  } else {
    redirect("/user/login");
  }
}

export default UserIndex;
