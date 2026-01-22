import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { u as useStickyMoment } from "./useStickyMoment-DIRi6KdR.js";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { h as baseContainer, i as innerChildContainer } from "./container.css-C2ezn6CH.js";
import { D as DropDownBottomSheet } from "./DropDownBottomSheet-C7ERIVcp.js";
import { setCookie, getCookie } from "cookies-next";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { a as usePost } from "./query-Ciubt76c.js";
import { F as FONTS } from "./common-6ceLbjxn.js";
import { u as usePopup } from "./PopupProvider-CCXZDelm.js";
import clsx from "clsx";
import { style, globalStyle } from "@vanilla-extract/css";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { S as SettingsIcon } from "./Settings-Bu3ta0zy.js";
import "jotai";
import "./useModal--yzWVOVY.js";
import "./Button-cLlpCM0x.js";
import "./Portal-D4P9dmtA.js";
import "react-dom";
import "./DownArrow-CJuEPh4T.js";
import "./Check-xgghRidd.js";
import "@tanstack/react-query";
import "./authToken-Bx9YTtw3.js";
import "axios";
const firebaseConfig = {
  apiKey: "AIzaSyCb34mKn7GABXRPWBg5WJjd4Ofg4SZs_Vo",
  authDomain: "playermaker-a5720.firebaseapp.com",
  projectId: "playermaker-a5720",
  storageBucket: "playermaker-a5720.firebasestorage.app",
  messagingSenderId: "776682212633",
  appId: "1:776682212633:web:c066627f235b691b160988",
  measurementId: "G-T2W0J0KEKZ"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const showNotification = (payload) => {
  if (self.Notification && self.Notification.permission === "granted") {
    if (payload.notification) {
      const title = payload.notification?.title ?? "PlayerMaker";
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(title, {
          body: payload.notification?.body ?? "",
          icon: payload.notification?.icon ?? ""
        });
      });
    }
  }
};
const handleNotifyFCM = async () => {
  const messaging = getMessaging(app);
  await getToken(messaging, {
    vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPI_KEY
  }).then(async (currentToken) => {
    if (currentToken) {
      setCookie("fcm_token", currentToken);
      return currentToken;
    }
  }).catch((error) => {
    console.error(error);
  });
  onMessage(messaging, (payload) => {
    showNotification(payload);
  });
};
const NotificationIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_407_4761'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_407_4761)'%3e%3cpath%20d='M5.24988%2018.8845C4.83573%2018.8845%204.5%2018.5488%204.5%2018.1346C4.5%2017.7205%204.83573%2017.3848%205.24988%2017.3848H6.30775V9.923C6.30775%208.57817%206.72283%207.38908%207.553%206.35575C8.383%205.32242%209.44867%204.6615%2010.75%204.373V3.75C10.75%203.40283%2010.8714%203.10767%2011.1143%202.8645C11.3571%202.6215%2011.6519%202.5%2011.9988%202.5C12.3458%202.5%2012.641%202.6215%2012.8845%202.8645C13.1282%203.10767%2013.25%203.40283%2013.25%203.75V4.373C14.5513%204.6615%2015.617%205.32242%2016.447%206.35575C17.2772%207.38908%2017.6923%208.57817%2017.6923%209.923V17.3848H18.7501C19.1643%2017.3848%2019.5%2017.7205%2019.5%2018.1346C19.5%2018.5488%2019.1643%2018.8845%2018.7501%2018.8845H5.24988ZM11.9983%2021.6923C11.5008%2021.6923%2011.0754%2021.5153%2010.7223%2021.1613C10.3689%2020.8073%2010.1923%2020.3817%2010.1923%2019.8845H13.8077C13.8077%2020.3833%2013.6306%2020.8093%2013.2762%2021.1625C12.9219%2021.5157%2012.4959%2021.6923%2011.9983%2021.6923Z'%20/%3e%3c/g%3e%3c/svg%3e";
function PushRequest() {
  const popup = usePopup();
  const [isGranted, setIsGranted] = useState(false);
  const { mutate, isSuccess } = usePost("/api/v1/fcm/send");
  const handleClickToPushActive = async () => {
    await Notification.requestPermission().then((permission) => {
      if (permission !== "granted") {
        popup?.alert(`Push 알림이 가능한 디바이스가 아니거나
허용할 수 없는 상태입니다.`);
      }
    });
  };
  const sendFCMNotification = async () => {
    const token = getCookie("fcm_token");
    const data = {
      title: "플메 - 푸시 테스트",
      body: "푸시 테스트입니다.",
      token
    };
    mutate({ data });
    if (isSuccess) {
      await popup?.alert("푸시 알림을 요청했습니다.");
    }
  };
  useEffect(() => {
    handleNotifyFCM();
    if (Notification.permission === "granted") {
      setIsGranted(true);
    }
  }, []);
  return /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("div", { className: "push-notice", children: [
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx(NotificationIcon, {}),
      "알림 테스트"
    ] }),
    isGranted ? /* @__PURE__ */ jsx("button", { onClick: sendFCMNotification, children: "테스트 Push" }) : /* @__PURE__ */ jsx("button", { onClick: handleClickToPushActive, children: "권한 요청" })
  ] }) });
}
const Container = styled.div`
  div.push-notice {
    display: flex;
    margin-bottom: 10px;
    padding: 8px 12px;
    align-items: center;
    justify-content: space-between;
    ${FONTS.body3("regular")};

    p {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      svg {
        width: 24px;
        height: 24px;
        transform: rotate(-10deg);
      }
    }
    button {
      padding: 3px 10px;
      border-radius: 6px;
      background-color: var(--main);
      color: var(--white);
      ${FONTS.body4("regular")}
      font-weight:400;

      &:active {
        background-color: var(--primary-m200);
      }
    }
  }
`;
const notificationItemContainer = style({
  display: "flex",
  gap: "10px",
  padding: "10px var(--global-lr-padding) 16px",
  selectors: {
    "&.unread": {
      backgroundColor: "rgba(231, 253, 235, 0.7)"
    }
  }
});
const notificationItemIcon = style({
  flexShrink: 0,
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  backgroundColor: "var(--white)"
});
globalStyle(`${notificationItemIcon} svg`, {
  width: "30px",
  height: "30px"
});
const notificationItemContents = style({
  userSelect: "none",
  paddingTop: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%"
});
const notificationItemContentsHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});
const CalendarIcon = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_556_2506'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='30'%20height='30'%3e%3crect%20width='30'%20height='30'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_556_2506)'%3e%3cpath%20d='M5%2011.25H25V23.75C25%2025.1307%2023.8807%2026.25%2022.5%2026.25H7.5C6.11929%2026.25%205%2025.1307%205%2023.75V11.25Z'%20fill='%23D4FCDB'/%3e%3cpath%20d='M7.5%2015C7.5%2014.3096%208.05964%2013.75%208.75%2013.75H11.25C11.9404%2013.75%2012.5%2014.3096%2012.5%2015V17.5C12.5%2018.1904%2011.9404%2018.75%2011.25%2018.75H8.75C8.05964%2018.75%207.5%2018.1904%207.5%2017.5V15Z'%20fill='%232BCE8A'/%3e%3cpath%20d='M8.625%202.75C8.625%202.61193%208.73693%202.5%208.875%202.5H10C10.1381%202.5%2010.25%202.61193%2010.25%202.75V6.6875C10.25%207.13623%209.88623%207.5%209.4375%207.5V7.5C8.98877%207.5%208.625%207.13623%208.625%206.6875V2.75Z'%20fill='%232BCE8A'/%3e%3cpath%20d='M19.875%202.75C19.875%202.61193%2019.9869%202.5%2020.125%202.5H21.25C21.3881%202.5%2021.5%202.61193%2021.5%202.75V6.6875C21.5%207.13623%2021.1362%207.5%2020.6875%207.5V7.5C20.2388%207.5%2019.875%207.13623%2019.875%206.6875V2.75Z'%20fill='%232BCE8A'/%3e%3cpath%20d='M5%208.75C5%207.36929%206.11929%206.25%207.5%206.25H22.5C23.8807%206.25%2025%207.36929%2025%208.75V11.25H5V8.75Z'%20fill='%237EF0A9'/%3e%3c/g%3e%3c/svg%3e";
const VoteIcon = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_556_2520'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='30'%20height='30'%3e%3crect%20width='30'%20height='30'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_556_2520)'%3e%3crect%20x='3.75'%20y='16.3008'%20width='22.5'%20height='1.25'%20fill='%2365A6FF'/%3e%3cpath%20d='M3.75%2017.5508H26.25V23.8008C26.25%2025.1815%2025.1307%2026.3008%2023.75%2026.3008H6.25C4.86929%2026.3008%203.75%2025.1815%203.75%2023.8008L3.75%2017.5508Z'%20fill='%23D6ECFF'/%3e%3cpath%20d='M3.75%2016.3008H26.25L24.441%2012.6827C24.0175%2011.8358%2023.1518%2011.3008%2022.2049%2011.3008H7.79509C6.84815%2011.3008%205.9825%2011.8358%205.55902%2012.6827L3.75%2016.3008Z'%20fill='%2383BDFF'/%3e%3crect%20x='16.5'%20y='2.5'%20width='7.27807'%20height='10.123'%20rx='1.25'%20transform='rotate(45%2016.5%202.5)'%20fill='%233281FF'/%3e%3c/g%3e%3c/svg%3e";
const AlertIcon = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_556_2534'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='30'%20height='30'%3e%3crect%20width='30'%20height='30'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_556_2534)'%3e%3cpath%20d='M9.71777%2018.9542C9.71777%2018.3285%2010.225%2017.8213%2010.8507%2017.8213H11.0395C11.6652%2017.8213%2012.1724%2018.3285%2012.1724%2018.9542V24.784C12.1724%2025.4097%2011.6652%2025.917%2011.0395%2025.917H10.8507C10.225%2025.917%209.71777%2025.4097%209.71777%2024.784V18.9542Z'%20fill='%23FFF5D2'/%3e%3cpath%20d='M12.5498%2018.4054L12.5498%209.32437L21.9908%204.60391L21.9908%2023.4858L12.5498%2018.4054Z'%20fill='%23FFF5D2'/%3e%3cpath%20d='M23.8794%2012.154C23.8794%2011.6337%2024.3012%2011.2119%2024.8215%2011.2119C26.1758%2011.2119%2027.2736%2012.3098%2027.2736%2013.6641V14.4244C27.2736%2015.7786%2026.1758%2016.8765%2024.8215%2016.8765C24.3012%2016.8765%2023.8794%2016.4547%2023.8794%2015.9344V12.154Z'%20fill='%23FFAF1F'/%3e%3crect%20x='3.10938'%20y='13.1006'%20width='5.66458'%20height='1.88819'%20rx='0.377639'%20fill='%23FFAF1F'/%3e%3cpath%20d='M4.99756%2013.1006C4.99756%2011.015%206.6883%209.32422%208.77394%209.32422H11.6062C12.1276%209.32422%2012.5503%209.74691%2012.5503%2010.2683V17.8211C12.5503%2018.3425%2012.1276%2018.7652%2011.6062%2018.7652H8.77395C6.68831%2018.7652%204.99756%2017.0744%204.99756%2014.9888V13.1006Z'%20fill='%23FFE8A5'/%3e%3cpath%20d='M10.6621%209.32422H12.1727C12.3812%209.32422%2012.5503%209.49329%2012.5503%209.70186V18.3875C12.5503%2018.5961%2012.3812%2018.7652%2012.1727%2018.7652H10.6621V9.32422Z'%20fill='%23FFD878'/%3e%3crect%20x='21.9912'%20y='3.68164'%20width='2.45465'%20height='20.726'%20rx='0.944096'%20fill='%23FFD878'/%3e%3c/g%3e%3c/svg%3e";
const UngroupIcon = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_556_2543'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='30'%20height='30'%3e%3crect%20width='30'%20height='30'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_556_2543)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.4893%2013.9542C19.0444%2012.6483%2017.1292%2011.853%2015.0282%2011.853C12.9273%2011.853%2011.0122%2012.6482%209.56732%2013.9541C9.42071%2013.7303%209.33545%2013.4627%209.33545%2013.1751C9.33545%2012.6906%209.47148%2012.2476%209.74353%2011.8464C10.0156%2011.4449%2010.4077%2011.095%2010.9199%2010.7965C11.4321%2010.4979%2012.0373%2010.274%2012.7354%2010.1248C13.4334%209.97538%2014.1964%209.90068%2015.0245%209.90068C15.8684%209.90068%2016.6394%209.97538%2017.3374%2010.1248C18.0354%2010.274%2018.6404%2010.4979%2019.1526%2010.7965C19.665%2011.095%2020.0545%2011.4449%2020.3212%2011.8464C20.5879%2012.2476%2020.7213%2012.6906%2020.7213%2013.1751C20.7213%2013.4627%2020.636%2013.7304%2020.4893%2013.9542ZM13.1275%208.34057C13.6515%208.86311%2014.2864%209.12438%2015.032%209.12438C15.7923%209.12438%2016.4296%208.86233%2016.944%208.33824C17.4583%207.81397%2017.7154%207.17912%2017.7154%206.4337C17.7154%205.67326%2017.458%205.03591%2016.943%204.52165C16.4279%204.00722%2015.7897%203.75%2015.0284%203.75C14.2819%203.75%2013.6474%204.00756%2013.1249%204.52268C12.6025%205.03763%2012.3413%205.67585%2012.3413%206.43732C12.3413%207.18378%2012.6034%207.8182%2013.1275%208.34057Z'%20fill='%23B26DEB'/%3e%3cpath%20d='M4.20381%2011.6395C3.4846%2012.0822%203.125%2012.6479%203.125%2013.3365C3.125%2014.0335%203.69002%2014.5986%204.38702%2014.5986H6.12077C6.92881%2014.5986%207.58385%2013.9435%207.58385%2013.1355C7.58385%2012.7706%207.63259%2012.4146%207.73006%2012.0675C7.8277%2011.7206%207.97735%2011.3859%208.17902%2011.0633C7.98253%2011.0288%207.78742%2011.0056%207.59368%2010.9936C7.39995%2010.9817%207.2076%2010.9758%207.01663%2010.9758C5.86079%2010.9758%204.92319%2011.197%204.20381%2011.6395Z'%20fill='%23CB8CF5'/%3e%3cpath%20d='M5.76341%209.45009C6.10913%209.79701%206.52592%209.97048%207.01378%209.97048C7.51649%209.97048%207.93785%209.79598%208.27787%209.44699C8.61807%209.09799%208.78816%208.68301%208.78816%208.20205C8.78816%207.70642%208.61625%207.28842%208.27244%206.94805C7.92879%206.60769%207.51019%206.4375%207.01663%206.4375C6.52945%206.4375%206.1124%206.60769%205.76548%206.94805C5.41838%207.28842%205.24484%207.70538%205.24484%208.19894C5.24484%208.68612%205.41769%209.10317%205.76341%209.45009Z'%20fill='%23CB8CF5'/%3e%3cpath%20d='M25.8348%2011.6395C26.554%2012.0822%2026.9136%2012.6479%2026.9136%2013.3365C26.9136%2014.0335%2026.3486%2014.5986%2025.6516%2014.5986H23.9178C23.1098%2014.5986%2022.4547%2013.9435%2022.4547%2013.1355C22.4547%2012.7706%2022.406%2012.4146%2022.3085%2012.0675C22.2109%2011.7206%2022.0612%2011.3859%2021.8596%2011.0633C22.056%2011.0288%2022.2512%2011.0056%2022.4449%2010.9936C22.6386%2010.9817%2022.831%2010.9758%2023.0219%2010.9758C24.1778%2010.9758%2025.1154%2011.197%2025.8348%2011.6395Z'%20fill='%23CB8CF5'/%3e%3cpath%20d='M24.2752%209.45009C23.9294%209.79701%2023.5127%209.97048%2023.0248%209.97048C22.5221%209.97048%2022.1007%209.79598%2021.7607%209.44699C21.4205%209.09799%2021.2504%208.68301%2021.2504%208.20205C21.2504%207.70642%2021.4223%207.28842%2021.7661%206.94805C22.1098%206.60769%2022.5284%206.4375%2023.0219%206.4375C23.5091%206.4375%2023.9262%206.60769%2024.2731%206.94805C24.6202%207.28842%2024.7937%207.70538%2024.7937%208.19894C24.7937%208.68612%2024.6209%209.10317%2024.2752%209.45009Z'%20fill='%23CB8CF5'/%3e%3ccircle%20cx='15.0283'%20cy='20'%20r='6.5625'%20fill='%23F2D9FD'/%3e%3cmask%20id='mask1_556_2543'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='7'%20y='12'%20width='16'%20height='16'%3e%3crect%20x='7.56787'%20y='12.5396'%20width='14.9211'%20height='14.9211'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_556_2543)'%3e%3cpath%20d='M13.1154%2022.5785C12.9326%2022.7613%2012.6364%2022.7617%2012.4529%2022.5795C12.2687%2022.3966%2012.2681%2022.0988%2012.4515%2021.915L14.3624%2020.0002L12.4532%2018.1004C12.269%2017.9171%2012.2692%2017.619%2012.4535%2017.4359C12.6366%2017.254%2012.9323%2017.2545%2013.1148%2017.4369L15.028%2019.3487L16.9261%2017.4386C17.1082%2017.2554%2017.4042%2017.2544%2017.5875%2017.4364C17.7715%2017.6192%2017.7716%2017.9169%2017.5878%2018.0998L15.678%2020.0002L17.5895%2021.9156C17.7726%2022.0991%2017.7719%2022.3963%2017.588%2022.579C17.4045%2022.7613%2017.1079%2022.7603%2016.9255%2022.5768L15.028%2020.6673L13.1154%2022.5785Z'%20fill='%238F40DE'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const DenyIcon = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_556_2557'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='30'%20height='30'%3e%3crect%20width='30'%20height='30'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_556_2557)'%3e%3crect%20x='6.46484'%20y='3.92334'%20width='17.0708'%20height='14.3343'%20rx='2.5'%20fill='%23FEF3EB'/%3e%3crect%20opacity='0.5'%20x='5.15137'%20y='7.83252'%20width='19.697'%20height='14.3343'%20rx='2.5'%20fill='%23FECBB2'/%3e%3crect%20x='3.83838'%20y='11.5825'%20width='22.3233'%20height='14.3343'%20rx='2.5'%20fill='%23FECBB2'/%3e%3cmask%20id='mask1_556_2557'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='4'%20y='8'%20width='22'%20height='22'%3e%3crect%20x='4.5'%20y='8.25'%20width='21'%20height='21'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_556_2557)'%3e%3cpath%20d='M12.3084%2022.379C12.0511%2022.6362%2011.6342%2022.6368%2011.376%2022.3804C11.1168%2022.1229%2011.1158%2021.7038%2011.374%2021.4452L14.0635%2018.7503L11.3764%2016.0764C11.1172%2015.8185%2011.1174%2015.3989%2011.3768%2015.1412C11.6345%2014.8852%2012.0507%2014.8858%2012.3076%2015.1426L15.0002%2017.8333L17.6716%2015.145C17.9278%2014.8872%2018.3445%2014.8858%2018.6024%2015.142C18.8614%2015.3992%2018.8616%2015.8181%2018.6028%2016.0756L15.915%2018.7503L18.6053%2021.446C18.863%2021.7042%2018.862%2022.1225%2018.6032%2022.3796C18.3449%2022.6362%2017.9275%2022.6348%2017.6708%2022.3766L15.0002%2019.6891L12.3084%2022.379Z'%20fill='%23F85040'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
function NotificationItem(props) {
  const CATEGORY_ICON = {
    공지사항: /* @__PURE__ */ jsx(AlertIcon, {}),
    투표: /* @__PURE__ */ jsx(VoteIcon, {}),
    탈퇴: /* @__PURE__ */ jsx(DenyIcon, {}),
    추방: /* @__PURE__ */ jsx(DenyIcon, {}),
    해체: /* @__PURE__ */ jsx(UngroupIcon, {}),
    일정: /* @__PURE__ */ jsx(CalendarIcon, {})
  };
  return /* @__PURE__ */ jsxs("div", { className: clsx(notificationItemContainer, { unread: !props.isRead }), children: [
    /* @__PURE__ */ jsx("div", { className: notificationItemIcon, children: CATEGORY_ICON[props.category] ? CATEGORY_ICON[props.category] : /* @__PURE__ */ jsx(AlertIcon, {}) }),
    /* @__PURE__ */ jsxs("div", { className: notificationItemContents, children: [
      /* @__PURE__ */ jsxs("p", { className: notificationItemContentsHeader, children: [
        /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, style: { color: "var(--gray500)" }, children: props.category }),
        /* @__PURE__ */ jsx("span", { className: fonts.caption1.regular, style: { color: "var(--gray400)" }, children: "1일 전" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "p",
          {
            className: fonts.body4.regular,
            style: {
              marginBottom: "2px",
              color: "var(--gray500)"
            },
            children: props.teamName
          }
        ),
        /* @__PURE__ */ jsx("p", { className: fonts.body3.medium, style: { color: "var(--gray700)" }, children: props.contents })
      ] })
    ] })
  ] });
}
function Notification$1() {
  useHeader({
    title: "알림",
    subIcons: [{
      svgIcon: /* @__PURE__ */ jsx(SettingsIcon, {}),
      onClick: "/my/notification",
      description: "알림 설정"
    }],
    options: {
      titleAlign: "center",
      hideBackButton: true
    }
  });
  const teamListRef = useRef(null);
  useStickyMoment(teamListRef, 40);
  const [filter, setFilter] = useState("all");
  return /* @__PURE__ */ jsxs("section", { className: baseContainer, children: [
    /* @__PURE__ */ jsx(PushRequest, {}),
    /* @__PURE__ */ jsx(Filter, { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(DropDownBottomSheet, { options: [{
      name: "전체",
      value: "all"
    }, {
      name: "운영 팀",
      value: "manage"
    }], defaultValue: "all", getCurrentValue: setFilter }) }) }),
    /* @__PURE__ */ jsx("div", { className: innerChildContainer, children: MOCK_NOTI_LIST.map((noti) => /* @__PURE__ */ jsx(NotificationItem, { notiId: noti.notiId, teamId: noti.teamId, articleId: noti.articleId, teamName: noti.teamName, category: noti.category, contents: noti.contents, date: noti.date, isRead: noti.readYn === "Y" }, noti.notiId)) })
  ] });
}
const Filter = styled.div`
  display: flex;
  justify-content: flex-end;
  & > div {
    width: 90px;
  }
`;
const MOCK_NOTI_LIST = [{
  notiId: 123,
  teamId: "1",
  articleId: "123",
  teamName: "SPABA",
  category: "공지사항",
  contents: "안녕하세요 여러분. 오늘의 공지사항을 알려드립니다.",
  date: "2025-04-14T11:54:50",
  readYn: "N"
}, {
  notiId: 1523,
  teamId: "1",
  articleId: "1423",
  teamName: "SPABA",
  category: "일정",
  contents: "새로운 '이번달 회식' 일정이 올라왔어요.",
  date: "2025-04-14T07:58:40",
  readYn: "N"
}, {
  notiId: 15253,
  teamId: "1",
  articleId: "2423",
  teamName: "SPABA",
  category: "투표",
  contents: "새로운 '2025 전국대학농구동아리대회' 일정이 올라왔어요. 참여 여부를 팀원들에게 알려주세요.",
  date: "2025-04-13T22:58:40",
  readYn: "N"
}, {
  notiId: 2123,
  teamId: "1",
  articleId: "623",
  teamName: "FC고고",
  category: "해체",
  contents: "팀이 해체됐어요.",
  date: "2025-01-18T11:09:20",
  readYn: "Y"
}, {
  notiId: 21423,
  teamId: "1",
  articleId: "623",
  teamName: "SPABA",
  category: "댓글 및 언급",
  contents: "16:40 부분에서 라인 위로 좀 더 올라가야 했어요.",
  date: "2025-01-17T21:58:20",
  readYn: "Y"
}, {
  notiId: 61423,
  teamId: "1",
  articleId: "623",
  teamName: "하이큐",
  category: "탈퇴",
  contents: "팀에서 탈퇴했어요.",
  date: "2025-01-17T21:58:20",
  readYn: "Y"
}];
export {
  Notification$1 as component
};
