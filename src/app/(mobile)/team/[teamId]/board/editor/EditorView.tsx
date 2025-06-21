"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { useHeader } from "@/hook/useHeader";
import { usePopup } from "@/components/common/global/PopupProvider";
import { useSetAtom } from "jotai";
import { usePost } from "@/apis/hook/query";
import { useEditorHandler } from "@/hook/useEditorHandler";

import { boardAPI } from "@/apis/url";
import Spinner from "@/components/common/Spinner";
import EditorUI from "@/components/Editor";
import { atomHeaderActions } from "@/atom/common";
import { DropDownBottomSheet } from "@/components/common/DropDownBottomSheet";
import { fonts } from "@/styles/fonts.css";
import { baseContainerPaddingTop, flexAlignCenter, flexColumnGap16, flexRowGap4 } from "@/styles/container.css";

function EditorView() {
  useHeader({
    title: "글쓰기",
  });
  const { editor, images } = useEditorHandler({
    placeholder: `자유롭게 이야기를 남겨보세요!\n최대 1,000자까지 작성 가능합니다.`,
  });
  const router = useRouter();
  const { mutate, data, isError, error, isPending } = usePost(boardAPI.BOARDS);
  const setActions = useSetAtom(atomHeaderActions);
  const onSubmit = () => {
    mutate(
      {
        data: {
          boardInfo: {
            teamId,
            title,
            boardType,
            content: editor?.getHTML(),
          },
        },
      },
      {
        onSuccess: (data: { teamId: string | number; id: string | number; boardId?: string | number } | any) => {
          router.push(`/team/${data.teamId}/board/${data.boardId ?? data.id}`);
        },
        onError: (err) => {
          popup?.alert(`문제가 발생했습니다. 잠시 후 다시 시도해주세요\n${err.message}`, {
            title: "게시글 등록 실패",
            showIcon: true,
            color: "red",
          });
        },
      }
    );
  };

  const popup = usePopup();
  const params = useParams();
  const searchParams = useSearchParams();
  const teamId = params["teamId"];
  const type = searchParams.get("type");

  const [boardType, setBoardType] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (!editor) return;
    setActions({
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
    });
  }, [editor]);

  return (
    <section
      className={baseContainerPaddingTop}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - var(--safe-area-top))",
      }}
    >
      <div className={flexColumnGap16} style={{ flex: 1 }}>
        <div style={{ margin: "0 -4px" }}>
          <DropDownBottomSheet
            mode="card"
            defaultValue={boardType}
            getCurrentValue={setBoardType}
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
