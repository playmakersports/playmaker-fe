import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { handleNotifyFCM } from "./NotifyFCM";
import { getCookie } from "cookies-next";

function PushRequestModal() {
  const [showPushButton, setShowPushButton] = useState(true);

  const hideButton = () => {
    setShowPushButton(false);
  };
  const handleClickToPushActive = () => {
    Notification.requestPermission().then((permission) => {
      if (permission !== "granted") {
        // 푸시 거부됐을 때 처리할 내용
        window.alert("승인 거부");
      } else {
        // 푸시 승인됐을 때 처리할 내용
        hideButton();
      }
    });
  };

  const sendFCMNotification = async () => {
    const token = getCookie("fcm_token") as string;

    const data = {
      token: token,
      title: "푸시 테스트",
      body: "푸시 테스트입니다.",
      image: "",
      click_action: "",
    };

    try {
      const res = await fetch("/api/fcm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        window.alert("푸시 전송 성공");
      } else {
        window.alert(`푸시 전송 실패: ${result.error}`);
      }
    } catch (error) {
      console.error("Error sending notification:", error);
      window.alert("푸시 전송 중 오류 발생");
    }
  };

  useEffect(() => {
    handleNotifyFCM();
  }, []);

  if (showPushButton) {
    return (
      <Container>
        <button onClick={handleClickToPushActive}>푸시 허용</button>
        <button onClick={sendFCMNotification}>푸시 보내기</button>
        <button onClick={hideButton}>닫기</button>
      </Container>
    );
  }
  return null;
}

const Container = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: var(--env-sat);
  padding: 12px 0;
  z-index: 9999;
  button {
    font-weight: 500;
    font-size: 1.3rem;
    padding: 8px 12px;
    background-color: var(--gray400);
    color: #fff;
    border-radius: 8px;
    opacity: 0.25;
    &:hover {
      opacity: 1;
    }
    &:first-of-type {
      margin-right: 12px;
    }
  }
`;

export default PushRequestModal;
