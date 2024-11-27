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

const sendFCMNotification = async (data: NotificationData) => {
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
  const fcm_token = getCookie("fcm_token") as string;
  const notificationData = { ...data, token: fcm_token };
  const res = await admin.messaging().send(notificationData);

  return res;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { message } = req.body;
    await sendFCMNotification(message)
      .then((result) => res.status(200).json({ result }))
      .catch((error) => console.log(error));
  } else {
    res.status(405).end();
  }
};
