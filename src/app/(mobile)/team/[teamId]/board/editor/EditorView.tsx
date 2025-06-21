"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useHeader } from "@/hook/useHeader";
import { usePopup } from "@/components/common/global/PopupProvider";
import { usePost } from "@/apis/hook/query";

import { useEditorHandler } from "@/hook/useEditorHandler";
import EditorUI from "@/components/Editor";
import Spinner from "@/components/common/Spinner";
import { baseContainerPaddingTop, flexAlignCenter, flexColumnGap16, flexRowGap4 } from "@/styles/container.css";
import { fonts } from "@/styles/fonts.css";
import { boardAPI } from "@/apis/url";
import { DropDownBottomSheet } from "@/components/common/DropDownBottomSheet";

function EditorView() {
  const { editor, images } = useEditorHandler({
    placeholder: `자유롭게 이야기를 남겨보세요!\n최대 1,000자까지 작성 가능합니다.`,
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
  
      /> */}
      <div className={flexColumnGap16} style={{ flex: 1 }}>
        <div style={{ margin: "0 -4px" }}>
          <DropDownBottomSheet
            mode="card"
            defaultValue={category}
            getCurrentValue={setCategory}
            placeholder="카테고리 선택"
            options={[
              { name: "공지사항", value: "1" },
              { name: "자유게시판", value: "2" },
              { name: "갤러리", value: "3" },
            ]}
          />
        </div>
        <div className={flexColumnGap16}>
          <input
            type="text"
            className={fonts.body2.semibold}
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
