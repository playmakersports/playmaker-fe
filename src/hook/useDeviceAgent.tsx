import { useEffect, useState } from "react";

function useDeviceAgent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
  }, []);

  return { isMobile };
}

export default useDeviceAgent;
