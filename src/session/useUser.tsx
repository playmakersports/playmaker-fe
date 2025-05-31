import { useAtomValue } from "jotai";
import { userAtom } from "./userAtom";

export const useUser = () => {
  const user = useAtomValue(userAtom);
  const isLogin = !!user;

  return { isLogin, user };
};
