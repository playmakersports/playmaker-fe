"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";
import useBgWhite from "@/hook/useBgWhite";
import { usePageTitle } from "@/hook/usePageTitle";

import { BaseContainer } from "@/components/common/Container";
import ToggleInput from "@/components/common/ToggleInput";
import { FONTS } from "@/styles/common";
import { TextArea } from "@/components/common/TextArea";
import DateInput from "@/components/common/DateInput";
import FloatButton from "@/components/common/FloatButton";
import Button from "@/components/common/Button";

function RecruitPost() {
  useBgWhite();
  const [activePost, setActivePost] = useState(false);
  usePageTitle({
    subTitle: "JUMP",
    title: "모집 공고 올리기",
  });

  return (
    <Container>
      <div className="post-header">
        <div>
          <span>공고 올리기 활성화</span>
          <ToggleInput toggled={activePost} setToggle={setActivePost} />
        </div>
        <p>활성화하면 전체 팀 목록에서 우리 팀이 우선 노출돼요.</p>
      </div>
      <form className={activePost ? "" : "inactive"}>
        <TextArea disabled={!activePost} title="모집 소개글" />
        <DateInput
          disabled={!activePost}
          pickType="ONLY_FUTURE"
          title="모집 마감일"
          displayIcon
          information={{ text: "오늘을 기준으로 최장 14일까지 선택할 수 있어요." }}
        />
      </form>
      <FloatButton>
        <Button type="submit" mode="MAIN" fullWidth onClick={() => {}}>
          저장
        </Button>
      </FloatButton>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div.post-header {
    width: 100%;
    padding: 8px 8px 16px;

    div {
      ${FONTS.MD1W500};
      margin-bottom: 8px;
      font-weight: 400;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    p {
      ${FONTS.MD2};
      font-weight: 400;
      color: var(--gray700);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &.inactive {
      opacity: 0.6;
      pointer-events: none;
    }
  }
`;

export default RecruitPost;