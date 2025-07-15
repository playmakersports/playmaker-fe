import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function RootPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  const expiry = parseInt(cookieStore.get("access_token_expiry")?.value || "", 10);

  if (token && expiry && Date.now() < expiry) {
    redirect("/home");
  }
  redirect("/user");
}
