"use client";

import React from "react";
import styled from "styled-components";

import { usePageTitle } from "@/hook/usePageTitle";
import { BaseContainer } from "@/components/common/Container";
import { BasicWhiteCard } from "@/components/common/Card";
import { FONTS } from "@/styles/common";
import PushRequest from "@/components/Methods/PushRequest";

function Notification() {
  usePageTitle({ title: "알림" });

  return (
    <Container>
      <PushRequest />
      <Card>
        <p className="push-text">알림 내용</p>
        <p className="push-info">
          <span>2024.12.03 12:35</span>
          <button type="button" onClick={() => {}}>
            삭제
          </button>
        </p>
      </Card>
    </Container>
  );
}

const Container = styled(BaseContainer)``;
const Card = styled(BasicWhiteCard)`
  p.push-text {
    margin-bottom: 10px;
    ${FONTS.MD1W500};
    font-weight: 400;
  }
  p.push-info {
    ${FONTS.MD3};
    font-weight: 400;
    text-align: right;
    color: var(--gray600);

    button {
      font-weight: 500;
      margin-left: 8px;
      padding-left: 8px;
      border-left: 1px solid var(--gray300);
    }
  }
`;

export default Notification;
