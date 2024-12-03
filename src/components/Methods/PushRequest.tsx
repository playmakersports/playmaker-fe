import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { handleNotifyFCM } from "./NotifyFCM";
import { getCookie } from "cookies-next";
import { usePost } from "@/apis/hook/query";
import { FONTS } from "@/styles/common";
import { useConfirm } from "../common/global/ConfirmProvider";

import NotificationIcon from "@/assets/icon/global/NoticeBell.svg";

interface FcmNotification {
  notification: {
    title: string;
    body: string;
    image: string;
  };
  token: string;
}
function PushRequest() {
  const confirm = useConfirm();
  const [isGranted, setIsGranted] = useState(false);
  const { mutate, isSuccess } = usePost<FcmNotification>("/api/v1/fcm/send");

  const handleClickToPushActive = async () => {
    await Notification.requestPermission().then((permission) => {
      if (permission !== "granted") {
        confirm?.showAlert(`Push 알림이 가능한 디바이스가 아니거나\n허용할 수 없는 상태입니다.`);
      }
    });
  };

  const sendFCMNotification = async () => {
    const token = getCookie("fcm_token") as string;
    const data = {
      title: "플메 - 푸시 테스트",
      body: "푸시 테스트입니다.",
      token: token,
    };

    mutate({ data });
    if (isSuccess) {
      await confirm?.showAlert("푸시 알림을 요청했습니다.");
    }
  };

  useEffect(() => {
    handleNotifyFCM();
    if (Notification.permission === "granted") {
      setIsGranted(true);
    }
  }, []);

  return (
    <Container>
      <div className="push-notice">
        <p>
          <NotificationIcon />
          우리 지역•학교의 스포츠 소식을 받아보세요
        </p>
        {isGranted ? (
          <button onClick={sendFCMNotification}>테스트 Push</button>
        ) : (
          <button onClick={handleClickToPushActive}>Push 요청</button>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  div.push-notice {
    display: flex;
    margin-bottom: 10px;
    padding: 8px 12px;
    align-items: center;
    justify-content: space-between;
    ${FONTS.MD1W500};

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
      color: var(--gray0);
      ${FONTS.MD2}
      font-weight:400;

      &:active {
        background-color: var(--primary-m200);
      }
    }
  }
`;

export default PushRequest;
