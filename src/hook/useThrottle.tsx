import { useRef } from "react";

export const useThrottle = (callback: () => void, delay: number) => {
  const lastCall = useRef(0);

  return () => {
    const now = Date.now();
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      callback();
    }
  };
};
