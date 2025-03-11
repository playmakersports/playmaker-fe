import { cookies } from "next/headers";

export async function getServerCookie(): Promise<string | undefined> {
  return (await cookies()).get("access-token")?.value;
}

export async function setServerCookie(newToken: string): Promise<void> {
  (await cookies()).set("access-token", newToken, { path: "/", httpOnly: true, secure: true, sameSite: "lax" });
}

export async function deleteServerCookie(): Promise<void> {
  (await cookies()).delete("access-token");
}
