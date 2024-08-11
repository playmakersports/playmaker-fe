"use client";

import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { EditorContent, Editor } from "@tiptap/react";

import EditorMenu from "./Menu";
import { EDITOR_ARTICLE_STYLE } from "@/styles/editor";
import EditorMenuBottom from "./MenuBottom";

type Props = {
  editor: Editor | null;
};

function EditorUI({ editor }: Props) {
  useEffect(() => {
    if (editor && editor.isFocused) {
      document.body.style.overflow = "hidden";
      document.body.style.pointerEvents = "none";
      document.getElementById("main_Container")!.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.removeProperty("pointer-events");
      document.getElementById("main_Container")!.style.overflowY = "auto";
    };
  }, [editor]);

  return (
    <EditorContainer>
      <div style={{ position: "relative" }}>
        {editor && <EditorMenu editor={editor} />}
        <div id="editor" className={editor?.isFocused ? "focused" : ""}>
          {editor && <EditorContent editor={editor} />}
        </div>
      </div>
      <EditorMenuBottom editor={editor} />
      <div id="make-scrollable" />
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overscroll-behavior: contain;

  #editor {
    width: 100%;
    height: auto;
    padding: 10px 12px;
    border: 1px solid var(--gray7);
    border-radius: 8px;
    overscroll-behavior: contain;

    &.focused {
      border: 1px solid var(--main);
    }
    div:focus-visible {
      outline: none;
    }
    .tiptap {
      min-height: 280px;
      overflow-y: auto;
      ${EDITOR_ARTICLE_STYLE}
    }
  }

  #make-scrollable {
    position: absolute;
    left: 0;
    width: 1px;
    height: calc(100% + 1px); // height를 100%보다 1px높게 잡아 실제로 scroll이 되도록 만듭니다.
  }
`;

export default EditorUI;
