import admin, { ServiceAccount } from "firebase-admin";

// API 호출 시 전달할 데이터 타입
interface NotificationData {
  data: {
    title: string; // 제목
    body: string; // 내용
    image: string; // 이미지(아이콘)
    click_action: string; // url
    token: string; // 토큰
  };
}
export const sendFCMNotification = async (data: NotificationData) => {
  const serviceAccount: ServiceAccount = {
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
  };

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  // 푸시 알림 전송 대상 토큰
  const notificationData = {
    notification: {
      title: data.data.title,
      body: data.data.body,
      imageUrl: data.data.image,
    },
    token: data.data.token,
    webpush: {
      fcmOptions: {
        link: data.data.click_action,
      },
    },
  };

  // 푸시 알림 전송
  const res = await admin.messaging().send(notificationData);

  return res;
};
