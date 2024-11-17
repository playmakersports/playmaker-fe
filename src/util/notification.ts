import { getMessaging, getToken } from "firebase/messaging";
// import { messaging } from "@/components/Methods/NotifyFCM";

export async function handleAllowNotification() {
  await Notification.requestPermission();
  registerServiceWorker();
  try {
    await getDeviceToken();
  } catch (error) {
    console.error(error);
  }
}

async function getDeviceToken() {
  const messaging = getMessaging();
  const token = await getToken(messaging, {
    vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
  });
  console.log("토큰: ", token);
  alert("토큰: " + token);
}

function registerServiceWorker() {
  navigator.serviceWorker
    .register("firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Service Worker 등록 성공:", registration);
      alert(`Service Worker 등록 성공:, ${registration}`);
    })
    .catch(function (error) {
      console.log("Service Worker 등록 실패:", error);
      alert(`Service Worker 등록 실패:, ${error}`);
    });
}
