"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useHeader } from "@/hook/useHeader";
import { usePopup } from "@/components/common/global/PopupProvider";
import { usePost } from "@/apis/hook/query";

import { useEditorHandler } from "@/hook/useEditorHandler";
import EditorUI from "@/components/Editor";
import Button from "@/components/common/Button";
import DropdownInput from "@/components/common/input/DropdownInput";
import Spinner from "@/components/common/Spinner";
import {
  baseContainerPaddingTop,
  flexAlignCenter,
  flexColumnGap10,
  flexColumnGap20,
  flexRowGap4,
} from "@/styles/container.css";
import { fonts } from "@/styles/fonts.css";
import { boardAPI } from "@/apis/url";

function EditorView() {
  const { editor, images } = useEditorHandler({
    placeholder: "내용을 입력해주세요...",
  });
  const { mutate, data, isError, error, isPending } = usePost(boardAPI.BOARDS);
  const onSubmit = async () => {
    mutate({
      data: {
        boardInfo: {
          teamId,
          title,
          category: category,
          content: editor?.getHTML(),
        },
      },
    });
    if (isError) {
      await popup?.alert(`문제가 발생했습니다. 잠시 후 다시 시도해주세요\n${error.message}`, {
        title: "게시글 등록 실패",
        showIcon: true,
        color: "red",
      });
    }
  };
  useHeader({
    title: "글쓰기",
    subActions: {
      name: (
        <span className={clsx(flexRowGap4, flexAlignCenter)} style={{ justifyContent: "center" }}>
          {isPending && <Spinner size={24} />}
          등록
        </span>
      ),
      action: () => {
        if (isPending) return;
        onSubmit();
      },
    },
  });

  const popup = usePopup();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const teamId = params["teamId"];
  const type = searchParams.get("type");

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");

  const onClear = async () => {
    if (!editor?.isEmpty) {
      const isConfirm = await popup?.confirm("입력된 내용은 복구할 수 없습니다.\n초기화하시겠습니까?");
      if (isConfirm) {
        editor?.commands.clearContent();
        editor?.commands.focus();
      }
    }
  };

  return (
    <section
      className={baseContainerPaddingTop}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - var(--safe-area-top))",
      }}
    >
      {/* <DropdownInput
        value={category}
        onChange={setCategory}
        placeholder="카테고리 선택"
        options={[
          { name: "공지사항", value: "notice" },
          { name: "사진", value: "photo" },
          { name: "자유", value: "free" },
          { name: "가입인사", value: "intro" },
        ]}
      /> */}
      <div className={flexColumnGap20} style={{ flex: 1 }}>
        <div className={flexColumnGap10}>
          <input
            type="text"
            className={fonts.body1.medium}
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <div style={{ backgroundColor: "var(--gray200)", width: "100%", height: "1px" }} />
        </div>
        <EditorUI editor={editor} images={images} />
      </div>
    </section>
  );
}

export default EditorView;
