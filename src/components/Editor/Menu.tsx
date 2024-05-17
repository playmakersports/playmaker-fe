"use client";

import { useEffect, useRef, useState } from "react";
import { Editor } from "@tiptap/react";
import styled from "@emotion/styled";
import { BUTTON_ACTIVE } from "@/styles/common";

import RightToggleArrow from "@/assets/icon/arrow/toggle/RightToggle.svg";
import BoldText from "@/assets/icon/editor/BoldText.svg";
import UnderlineText from "@/assets/icon/editor/UnderlineText.svg";
import DeleteText from "@/assets/icon/editor/DeleteText.svg";
import HighlightText from "@/assets/icon/editor/HighlightText.svg";
import Quote from "@/assets/icon/editor/Quote.svg";
import AlignLeft from "@/assets/icon/editor/AlignLeft.svg";
import AlignCenter from "@/assets/icon/editor/AlignCenter.svg";
import AlignRight from "@/assets/icon/editor/AlignRight.svg";

type Props = {
  editor: Editor | null;
};

function EditorMenu({ editor }: Props) {
  const [showStyle, setShowStyle] = useState(false);

  if (!editor) {
    return null;
  }

  return (
    <Container focused={editor.isFocused}>
      <button
        type="button"
        className={`toggle-button ${showStyle && "active"}`}
        onClick={() => setShowStyle((prev) => !prev)}
      >
        제목 <RightToggleArrow />
      </button>
      <HideMenu show={showStyle}>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
        >
          대제목
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        >
          중제목
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
        >
          소제목
        </button>
      </HideMenu>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <BoldText />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <UnderlineText />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <DeleteText />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        disabled={!editor.can().chain().focus().toggleHighlight().run()}
        className={editor.isActive("highlight") ? "is-active" : ""}
      >
        <HighlightText />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <Quote />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
      >
        <AlignLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}
      >
        <AlignCenter />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
      >
        <AlignRight />
      </button>

      <button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().chain().focus().undo().run()}>
        실행취소
      </button>
      <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().chain().focus().redo().run()}>
        되돌리기
      </button>
      <button type="button">이미지(준비)</button>
      <button type="button">투표(준비)</button>
    </Container>
  );
}

const Container = styled.div<{ focused: boolean }>`
  display: flex;
  position: sticky;
  top: 0;
  gap: 4px;
  margin-left: -2px;
  padding-left: 22px;
  margin-left: -16px;
  margin-right: -16px;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    font-size: 1.6rem;
    ${BUTTON_ACTIVE("var(--gray4)")};
    transition: all 0.1s;
    border: 1px solid transparent;

    &.is-active {
      font-weight: 700;
      transform: scale(0.95);
      background-color: var(--gray4);
    }
  }

  .toggle-button {
    padding: 2px 10px;
    margin: 4px 2px 4px 0;
    font-size: 1.4rem;
    border: 1px solid var(--text);
    svg {
      width: 16px;
      height: 16px;
      margin-left: -1px;
      transition: transform 0.2s;
    }
    &.active {
      font-weight: 700;
      opacity: 0.5;
      svg {
        transform: rotate(-180deg);
      }
    }
  }

  svg {
    width: 20px;
    height: 24px;
    fill: var(--text);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const HideMenu = styled.div<{ show: boolean }>`
  transform: translateX(${({ show }) => (show ? "0" : "-60px")});
  display: flex;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  padding-right: 4px;
  margin-right: ${({ show }) => (show ? "8px" : "-6px")};
  gap: 4px;
  width: ${({ show }) => (show ? "100%" : "0%")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 0.2s;
  border-right: 1px solid var(--gray3);
`;

export default EditorMenu;
