import { useSetAtom } from "jotai";
import { isOnboardingAtom, userAtom, UserSessionData } from "./userAtom";
import { useAuth } from "./useAuth";

export const useSetUser = () => {
  const setUser = useSetAtom(userAtom);
  const setOnboarding = useSetAtom(isOnboardingAtom);
  const { clearToken } = useAuth();

  const login = (userData: UserSessionData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setOnboarding(false);
    clearToken();
  };

  const updateUser = (updatedFields: Partial<UserSessionData>) => {
    setUser((prev) => (prev ? { ...prev, ...updatedFields } : null));
  };

  return { login, logout, updateUser };
};
