import { setCookie, deleteCookie, getCookie } from "cookies-next";

export const useAuth = () => {
  const accessToken = getCookie("access-token") ?? null;

  const setAuthToken = (newToken: string) => {
    setCookie("access-token", newToken, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
  };

  const clearAuthToken = () => {
    deleteCookie("access-token", {
      path: "/",
      expires: new Date(0),
    });
    setCookie("access-token", null);
  };

  return {
    accessToken,
    setToken: setAuthToken,
    clearToken: clearAuthToken,
  };
};
