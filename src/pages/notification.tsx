import React from "react";
import styled from "@emotion/styled";

import { usePageTitle } from "@/hook/usePageTitle";
import { BaseContainer } from "@/components/common/Container";
import { BasicWhiteCard } from "@/components/common/Card";
import { FONTS } from "@/styles/common";
import Button from "@/components/common/Button";

function Notification() {
  usePageTitle("알림");

  return (
    <Container>
      <Card>
        <p>알림 내용</p>
        <div className="button-wrapper">
          <Button type="button" mode="OPTION2" autoHeight flex={1} onClick={() => console.log("")}>
            게시글 이동
          </Button>
          <Button type="button" mode="OPTION2" autoHeight flex={1} onClick={() => console.log("")}>
            읽음
          </Button>
        </div>
      </Card>
    </Container>
  );
}

const Container = styled(BaseContainer)``;
const Card = styled(BasicWhiteCard)`
  p {
    margin-bottom: 12px;
    ${FONTS.MD1W500};
  }
  .button-wrapper {
    display: flex;
    width: 100%;
    gap: 8px;
  }
`;

export default Notification;
