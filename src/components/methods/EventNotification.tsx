import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { EventSourcePolyfill, NativeEventSource } from "event-source-polyfill";

import { ACCESS_TOKEN } from "@/atom/user";
import { BACK_END_REQUEST_URL } from "@/constants/baseUrl";

function EventNotification() {
  const HEARTBEAT_TIMEOUT = 360000;
  const accessToken = useAtomValue(ACCESS_TOKEN);

  useEffect(() => {
    const EventSource = EventSourcePolyfill || NativeEventSource;

    if (accessToken) {
      const eventSource = new EventSource(`${BACK_END_REQUEST_URL}/api/event/emitter`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        heartbeatTimeout: HEARTBEAT_TIMEOUT,
      });

      eventSource.addEventListener("message", (event: any) => {
        console.log(event);
      });
      eventSource.onopen = (event: any) => {
        console.log("on-open", event);
      };
      eventSource.onmessage = async (event: any) => {
        const res = await event.data;
        console.log("on-message", JSON.parse(res));
      };
      eventSource.onerror = (event: any) => {
        console.log("on-err", event);
        console.log("token", accessToken);
      };
    }

    return () => {};
  }, [accessToken]);

  return null;
}

export default EventNotification;
