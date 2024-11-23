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
 * FCM 토큰 발급
 */
export const handleNotifyFCM = async () => {
  const messaging = getMessaging(app);
  await getToken(messaging, {
    vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPI_KEY,
  })
    .then(async (currentToken) => {
      if (!currentToken) {
        console.log("No Token");
      } else {
        window.alert("currentToken: " + currentToken);
        console.log("token: ", currentToken);
        return currentToken;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  onMessage(messaging, (payload: MessagePayload) => {
    console.log("Message received. ", payload);
    self.addEventListener("push", function (event: any) {
      if (payload.data && payload.notification) {
        const options = {
          body: payload.notification.body,
        };

        event.waitUntil((self as any).registration.showNotification(payload.notification.title, options));
      } else {
        console.log("This push event has no data.");
      }
    });
  });
};
