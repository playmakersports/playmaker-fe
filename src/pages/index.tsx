import { useRouter } from "next/router";
import Button from "@/components/common/Button";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1 style={{ fontSize: "3rem" }}>main</h1>
      <Button mode="OPTION1" onClick={() => router.push("/user/login")}>
        로그인 화면
      </Button>
    </div>
  );
}
