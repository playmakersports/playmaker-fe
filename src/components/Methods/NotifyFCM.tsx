import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCb34mKn7GABXRPWBg5WJjd40fg4SZs_Vo",
  authDomain: "playermaker-a5720.firebaseapp.com",
  projectId: "playermaker-a5720",
  storageBucket: "playermaker-a5720.firebasestorage.app",
  messagingSenderId: "776682212633",
  appId: "1:776682212633 :web: c066627f235b691b160988",
  measurementId: "G-T2W0J0KEKZ",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

/**
 * FCM 토큰 발급
 */
export const NotifyFCM = async () => {
  const messaging = getMessaging(app);
  await getToken(messaging, {
    vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPI_KEY,
  })
    .then(async (currentToken) => {
      window.alert(currentToken);
      if (!currentToken) {
        // 토큰 생성 불가시 처리할 내용, 주로 브라우저 푸시 허용이 안된 경우에 해당한다.
        console.log("No Token");
      } else {
        console.log("token: ", currentToken);
        return currentToken;
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
