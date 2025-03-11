import { setCookie, deleteCookie, getCookie } from "cookies-next";
import { atom, useAtom } from "jotai";

const accessTokenAtom = atom<string | null>(null);

export const useAuth = () => {
  const [accessToken, setToken] = useAtom(accessTokenAtom);

  const setAuthToken = (newToken: string) => {
    setCookie("access-token", newToken, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
    setToken(newToken);
  };

  const clearAuthToken = () => {
    deleteCookie("access-token", {
      path: "/",
      expires: new Date(0),
    });
    setToken(null);
  };

  return {
    accessToken,
    setToken: setAuthToken,
    clearToken: clearAuthToken,
  };
};
