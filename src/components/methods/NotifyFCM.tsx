import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCb34mKn7GABXRPWBg5WJjd40fg4SZs_Vo",
  authDomain: "playermaker-a5720.firebaseapp.com",
  projectId: "playermaker-a5720",
  storageBucket: "playermaker-a5720.firebasestorage.app",
  messagingSenderId: "776682212633",
  appId: "1:776682212633 :web: c066627f235b691b160988",
  measurementId: "G-T2W0J0KEKZ",
};

export default function NotifyFCM() {
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  // const messaging = getMessaging(app);

  return <></>;
}
