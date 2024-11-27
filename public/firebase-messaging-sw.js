importScripts("https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCb34mKn7GABXRPWBg5WJjd4Ofg4SZs_Vo",
  authDomain: "playermaker-a5720.firebaseapp.com",
  projectId: "playermaker-a5720",
  storageBucket: "playermaker-a5720.firebasestorage.app",
  messagingSenderId: "776682212633",
  appId: "1:776682212633:web:c066627f235b691b160988",
  measurementId: "G-T2W0J0KEKZ",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  if (!(self.Notification && self.Notification.permission === "granted")) {
    return;
  }

  console.log("background", payload);
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon,
    image: payload.data.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
