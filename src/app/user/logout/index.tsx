"use client";
import { useEffect } from "react";
import { useRouter, createFileRoute } from "@tanstack/react-router";
import { clearTokens } from "@/session/authToken";
import Loading from "@/components/common/Loading";

export const Route = createFileRoute("/user/logout/")({
  component: LogoutPage,
});

function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    clearTokens();
    router.navigate({ to: "/user", replace: true });
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "/");
    }
  }, [router]);

  return <Loading page />;
}