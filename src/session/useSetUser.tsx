import { useSetAtom } from "jotai";
import { userAtom, UserSessionData } from "./userAtom";
import { useAuth } from "./useAuth";

export const useSetUser = () => {
  const setUser = useSetAtom(userAtom);
  const { clearToken } = useAuth();

  const login = (userData: UserSessionData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    clearToken();
  };

  const updateUser = (updatedFields: Partial<UserSessionData>) => {
    setUser((prev) => (prev ? { ...prev, ...updatedFields } : null));
  };

  return { login, logout, updateUser };
};
