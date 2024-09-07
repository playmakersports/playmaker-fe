"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";

import { BaseContainer } from "@/components/common/Container";
import { useEditorHandler } from "@/hook/useEditorHandler";
import EditorUI from "@/components/Editor";
import Button from "@/components/common/Button";
import DropDown from "@/components/common/DropDown";
import { BasicInput } from "@/components/common/Input";
import useBgWhite from "@/hook/useBgWhite";
import { useConfirm } from "@/components/common/global/ConfirmProvider";
import MetaTitle from "@/components/layouts/MetaTitle";

function ArticleEditor() {
  useBgWhite();
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
      <MetaTitle title="글쓰기" />
      <DropDown
        id="category"
        getSelectedValue={setCategory}
        defaultValue=""
        options={[
          { name: "카테고리 선택", value: "" },
          { name: "공지사항", value: "notice" },
          { name: "사진", value: "photo" },
          { name: "일정", value: "schedule" },
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
  padding-bottom: var(--env-sab);
`;
const Buttons = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

export default ArticleEditor;
