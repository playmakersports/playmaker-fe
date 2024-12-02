importScripts("https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyCb34mKn7GABXRPWBg5WJjd4Ofg4SZs_Vo",
  authDomain: "playermaker-a5720.firebaseapp.com",
  projectId: "playermaker-a5720",
  storageBucket: "playermaker-a5720.firebasestorage.app",
  messagingSenderId: "776682212633",
  appId: "1:776682212633:web:c066627f235b691b160988",
  measurementId: "G-T2W0J0KEKZ",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const setNotificationData = (payload) => {
  const { title, body, icon, image } = payload.data;
  return {
    notificationTitle: title,
    notificationOptions: { body, icon, image },
  };
};

const showNotification = (payload) => {
  if (self.Notification && self.Notification.permission === "granted") {
    const { notificationTitle, notificationOptions } = setNotificationData(payload);
    self.registration.showNotification(notificationTitle, notificationOptions);
  }
};

messaging.onBackgroundMessage(showNotification);
