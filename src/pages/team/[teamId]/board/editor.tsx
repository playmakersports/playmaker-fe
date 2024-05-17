"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";

import { BaseContainer } from "@/components/common/Container";
import { useEditorHandler } from "@/hook/useEditorHandler";
import EditorUI from "@/components/Editor";
import { FONTS } from "@/styles/common";
import Button from "@/components/common/Button";
import DropDown from "@/components/common/DropDown";

function ArticleEditor() {
  const [category, setCategory] = useState("");
  const editor = useEditorHandler();
  if (!editor) return null;

  const onClear = () => {
    if (!editor.isEmpty) {
      window.alert("내용이 모두 삭제됩니다?");
      editor.commands.clearContent();
      editor.commands.focus();
    }
  };
  const onSubmit = () => {
    console.log(editor.getHTML());
  };

  return (
    <Container>
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
      <Title type="text" placeholder="제목을 입력하세요." autoFocus />
      <EditorUI editor={editor} />
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
  gap: 24px;
`;
const Title = styled.input`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--card);
  ${FONTS.HEAD1};
  color: var(--text);
`;
const Buttons = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

export default ArticleEditor;
