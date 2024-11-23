import React from "react";
import styled from "@emotion/styled";
import { NextApiRequest, NextApiResponse } from "next";
import { sendFCMNotification } from "./NotificationFCMFunc";

function PushRequestModal() {
  const handleClickToPushActive = () => {
    Notification.requestPermission().then((permission) => {
      if (permission !== "granted") {
        // 푸시 거부됐을 때 처리할 내용
        console.log("푸시 거부됨");
      } else {
        // 푸시 승인됐을 때 처리할 내용
        console.log("푸시 승인됨");
      }
    });
  };

  const sendFCMHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      const { message } = req.body;
      await sendFCMNotification(message)
        .then((result) => res.status(200).json({ result }))
        .catch((error) => console.log(error));
    } else {
      res.status(405).end();
    }
  };

  return (
    <Container>
      <button onClick={handleClickToPushActive}>푸시 알림 허용</button>
      {/* <button onClick={}>푸시 알림 허용</button> */}
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px;
  font-size: 1.5rem;
  z-index: 999;
  button {
    padding: 12px 20px;
    background-color: var(--main);
    color: #fff;
    border-radius: 5px;
  }
`;

export default PushRequestModal;
