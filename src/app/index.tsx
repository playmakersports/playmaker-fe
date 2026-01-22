"use client";
import { useEffect } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { getAccessToken } from "@/session/authToken";
import Loading from "@/components/common/Loading";

export const Route = createFileRoute("/")({
  component: RootPage,
});

function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = getAccessToken();

      if (token) {
        router.navigate({ to: "/home", replace: true });
      } else {
        router.navigate({ to: "/user", replace: true });
      }
    };

    checkAuth();
  }, [router]);

  return <Loading page />;
}
