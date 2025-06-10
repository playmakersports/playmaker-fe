import { setCookie, deleteCookie, getCookie } from "cookies-next";
import { useAtom, useSetAtom } from "jotai";
import { isOnboardingAtom, userAtom } from "./userAtom";

export const useAuth = () => {
  const setOnboarding = useSetAtom(isOnboardingAtom);
  const [userAtomValue, setUserAtom] = useAtom(userAtom);
  const accessToken = getCookie("access-token") ?? null;
  const isLogin = userAtomValue?.isLogin || accessToken === "TestToken";

  const setAuthToken = (newToken: string) => {
    // TODO: 추후 수정 반영
    setUserAtom((prev) => ({
      ...prev,
      username: null,
      role: null,
      nickname: null,
      isLogin: true,
    }));
    setOnboarding(true);

    return setCookie("access-token", newToken, {
      path: "/",
      // httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
  };

  const clearAuthToken = () => {
    setUserAtom((prev) => ({
      ...prev,
      username: null,
      role: null,
      nickname: null,
      isLogin: false,
    }));
    setOnboarding(false);

    return deleteCookie("access-token", {
      path: "/",
    });
  };

  return { isLogin, accessToken, setToken: setAuthToken, clearToken: clearAuthToken };
};
