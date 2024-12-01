import { getCookie } from "cookies-next";
import admin, { ServiceAccount } from "firebase-admin";
import { NextApiRequest, NextApiResponse } from "next";

interface NotificationData {
  data: {
    title: string;
    body: string;
    image: string;
    click_action: string;
  };
}

// const sendFCMNotification = async (data: NotificationData) => {
const serviceAccount: ServiceAccount = {
  projectId: "playermaker-a5720",
  privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
  clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
// const fcm_token = getCookie("fcm_token") as string;
// const notificationData = { ...data, token: fcm_token };
// const res = await admin.messaging().send(notificationData);

// return res;
// };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token, title, body, image, click_action } = req.body;

  try {
    const message = {
      data: {
        title,
        body,
        image,
        click_action,
      },
      token,
    };

    const response = await admin.messaging().send(message);
    return res.status(200).json({ success: true, response });
  } catch (error) {
    console.error("Error sending FCM notification:", error);
    return res.status(500).json({ error: "Failed to send notification" });
  }
}
