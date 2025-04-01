import { setCookie, deleteCookie, getCookie } from "cookies-next";

export const useAuth = () => {
  const accessToken = getCookie("access-token") ?? null;

  const setAuthToken = (newToken: string) =>
    setCookie("access-token", newToken, {
      path: "/",
      // httpOnly: true,
      secure: true,
      sameSite: "none",
    });

  const clearAuthToken = () =>
    deleteCookie("access-token", {
      path: "/",
    });

  return {
    accessToken,
    setToken: setAuthToken,
    clearToken: clearAuthToken,
  };
};
