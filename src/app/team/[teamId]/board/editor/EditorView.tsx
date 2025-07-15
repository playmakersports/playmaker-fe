"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import { useHeader } from "@/hook/useHeader";
import { usePopup } from "@/components/common/global/PopupProvider";
import { useSetAtom } from "jotai";
import { usePost } from "@/apis/hook/query";
import { useEditorHandler } from "@/hook/useEditorHandler";

import { boardAPI } from "@/apis/url";
import Loading from "@/components/common/Loading";
import EditorUI from "@/components/Editor";
import { atomHeaderActions } from "@/atom/common";
import { DropDownBottomSheet } from "@/components/common/DropDownBottomSheet";
import { fonts } from "@/styles/fonts.css";
import { baseContainerPaddingTop, flexAlignCenter, flexColumnGap16, flexRowGap4 } from "@/styles/container.css";
import { convertWebpImage } from "@/util/webp";

function EditorView({ teamId }: { teamId: string }) {
  useHeader({
    title: "글쓰기",
  });
  const { editor, images } = useEditorHandler({
    placeholder: `자유롭게 이야기를 남겨보세요!\n최대 1,000자까지 작성 가능합니다.`,
  });
  const [title, setTitle] = useState("");
  const [boardType, setBoardType] = useState("");

  const router = useRouter();
  const { mutateAsync, isPending } = usePost<{ id: number }>(boardAPI.BOARDS, "form-data");
  const setActions = useSetAtom(atomHeaderActions);

  const onSubmit = async () => {
    const formData = new FormData();
    const boardInfo = {
      teamId: Number(teamId),
      title: title,
      category: null,
      content: editor?.getHTML(),
      startDate: null,
      endDate: null,
    };

    formData.append("boardInfo", new Blob([JSON.stringify(boardInfo)], { type: "application/json" }));
    formData.append("boardType", boardType);
    if (images.getter().list.length > 0) {
      for (let [index, imageBase64] of images.getter().list.entries()) {
        // base64에서 MIME 타입 추출 (예: "image/png")
        const mimeMatch = imageBase64.match(/^data:(.*?);base64,/);
        const mime = mimeMatch ? mimeMatch[1] : "image/png"; // 기본값: image/png

        // base64 → Blob
        const byteString = atob(imageBase64.split(",")[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mime });

        // Blob → File
        const file = new File([blob], `image-${index}.${mime.split("/")[1]}`, { type: mime });

        // webp 변환
        const webpBlob = await convertWebpImage(file, { maxWidth: 880, quality: 0.85 });
        const webpFile = new File([webpBlob], `board-image-${index}.webp`, { type: "image/webp" });

        formData.append("image", webpFile);
      }
    }

    try {
      const response = await mutateAsync({
        data: formData,
      });
      if (!response.id) {
        router.push(`/team/${teamId}/board`);
        return;
      }
      router.replace(`/team/${teamId}/board/${response.id}`);
    } catch (e: any) {
      popup?.alert(`${e.response.data.message}\n${e.message}`, {
        title: "게시글 등록 실패",
        showIcon: true,
        color: "red",
      });
    }
  };

  const popup = usePopup();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  useEffect(() => {
    if (!editor) return;
    setActions({
      name: (
        <span className={clsx(flexRowGap4, flexAlignCenter)} style={{ justifyContent: "center" }}>
          등록
        </span>
      ),
      action: () => {
        if (isPending) return;
        onSubmit();
      },
    });
  }, [editor, title, images]);

  return (
    <section
      className={baseContainerPaddingTop}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - var(--safe-area-top))",
      }}
    >
      {isPending && <Loading page text="글 등록 중" />}
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
