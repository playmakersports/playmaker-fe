import { setCookie } from "cookies-next";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, MessagePayload, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCb34mKn7GABXRPWBg5WJjd4Ofg4SZs_Vo",
  authDomain: "playermaker-a5720.firebaseapp.com",
  projectId: "playermaker-a5720",
  storageBucket: "playermaker-a5720.firebasestorage.app",
  messagingSenderId: "776682212633",
  appId: "1:776682212633:web:c066627f235b691b160988",
  measurementId: "G-T2W0J0KEKZ",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

/**
 * 알림 데이터 설정
 * @param payload
 */
const showNotification = (payload: MessagePayload) => {
  if (self.Notification && self.Notification.permission === "granted") {
    if (payload.notification) {
      const title = payload.notification?.title ?? "PlayerMaker";
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(title, {
          body: payload.notification?.body ?? "",
          icon: payload.notification?.icon ?? "",
        });
      });
    }
  }
};

/**
 * FCM 토큰 발급
 */
export const handleNotifyFCM = async () => {
  const messaging = getMessaging(app);
  await getToken(messaging, {
    vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPI_KEY,
  })
    .then(async (currentToken) => {
      if (currentToken) {
        setCookie("fcm_token", currentToken);
        return currentToken;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  onMessage(messaging, (payload) => {
    showNotification(payload);
  });
};
