"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { usePageTitle } from "@/hook/usePageTitle";
import { useConfirm } from "@/components/common/global/ConfirmProvider";
import { usePost } from "@/apis/hook/query";

import { BaseContainer } from "@/components/common/Container";
import { useEditorHandler } from "@/hook/useEditorHandler";
import EditorUI from "@/components/Editor";
import Button from "@/components/common/Button";
import DropDown from "@/components/common/DropDown";
import { BasicInput } from "@/components/common/Input";
import Spinner from "@/components/common/Spinner";

function EditorView() {
  const { mutate, data, isError, error, isPending } = usePost("/api/board/create", "form-data");
  usePageTitle({ title: "글쓰기" });
  const confirm = useConfirm();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const teamId = params["teamId"];
  const type = searchParams.get("type");
  const via = searchParams.get("via");

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
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

  const onSubmit = async () => {
    const formData = new FormData();
    const jsonBlob = new Blob(
      [
        JSON.stringify({
          categoryNum: category,
          content: editor.getHTML(),
          teamId,
          title,
        }),
      ],
      {
        type: "application/json",
      }
    );
    formData.append("boardInfo", jsonBlob);

    mutate({
      data: formData,
    });
    if (isError) {
      await confirm?.showAlert(`글 올리기에 문제가 생겼어요\n잠시 후 다시 시도해주세요\n${error.message}`);
    }
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
      <BasicInput type="text" placeholder="제목" onChange={(e) => setTitle(e.target.value)} value={title} />
      <EditorUI editor={editor} poll={poll} images={images} />
      <Buttons>
        <Button type="button" size="large" flex={1} mode="primary" fillType="light" onClick={onClear}>
          초기화
        </Button>
        <Button type="button" size="large" flex={2} mode="primary" onClick={onSubmit}>
          <span className="spinner-wrapper">올리기 {isPending && <Spinner color="white" />}</span>
        </Button>
      </Buttons>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  span.spinner-wrapper {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
`;

export default EditorView;
