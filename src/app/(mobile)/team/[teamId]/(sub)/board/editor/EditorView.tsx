"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { usePageTitle } from "@/hook/usePageTitle";

import { BaseContainer } from "@/components/common/Container";
import { useEditorHandler } from "@/hook/useEditorHandler";
import EditorUI from "@/components/Editor";
import Button from "@/components/common/Button";
import DropDown from "@/components/common/DropDown";
import { BasicInput } from "@/components/common/Input";
import useBgWhite from "@/hook/useBgWhite";
import { useConfirm } from "@/components/common/global/ConfirmProvider";

function EditorView() {
  useBgWhite();
  usePageTitle({ title: "글 쓰기" });
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const teamId = params["teamId"];
  const type = searchParams.get("type");
  const via = searchParams.get("via");

  const confirm = useConfirm();
  const [category, setCategory] = useState("");
  const { editor, poll, images } = useEditorHandler();
  if (!editor) return null;

  const onClear = async () => {
    if (!editor.isEmpty) {
      const isConfirm = await confirm?.showConfirm("입력된 내용은 복구할 수 없습니다.\n초기화하시겠습니까?");
      if (isConfirm) {
        editor.commands.clearContent();
        editor.commands.focus();
      }
    }
  };
  const onSubmit = () => {
    console.log(editor.getHTML(), images.getter());
  };

  return (
    <Container>
      <DropDown
        getSelectedValue={setCategory}
        placeholder="카테고리 선택"
        defaultValue={category}
        options={[
          { name: "공지사항", value: "notice" },
          { name: "사진", value: "photo" },
          { name: "자유", value: "free" },
          { name: "가입인사", value: "intro" },
        ]}
      />
      <BasicInput type="text" placeholder="제목" />
      <EditorUI editor={editor} poll={poll} images={images} />
      <Buttons>
        <Button type="button" flex={1} mode="OPTION2" onClick={onClear}>
          초기화
        </Button>
        <Button type="button" flex={2} mode="MAIN" onClick={onSubmit}>
          올리기
        </Button>
      </Buttons>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Buttons = styled.div`
  display: flex;
  padding-bottom: var(--env-sab);
  gap: 8px;
  justify-content: space-between;
`;

export default EditorView;
