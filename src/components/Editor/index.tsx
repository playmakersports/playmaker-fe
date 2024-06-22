"use client";

import React from "react";
import styled from "@emotion/styled";
import { EditorContent, Editor } from "@tiptap/react";

import EditorMenu from "./Menu";
import { EDITOR_ARTICLE_STYLE } from "@/styles/editor";
import EditorMenuBottom from "./MenuBottom";

type Props = {
  editor: Editor | null;
};

function EditorUI({ editor }: Props) {
  return (
    <EditorContainer>
      <div style={{ position: "relative" }}>
        {editor && <EditorMenu editor={editor} />}
        <div id="editor">{editor && <EditorContent editor={editor} />}</div>
      </div>
      <EditorMenuBottom editor={editor} />
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  #editor {
    padding: 20px;
    border-radius: 8px;
    background-color: var(--card);

    div:focus-visible {
      outline: none;
    }
    .tiptap {
      min-height: 280px;
      overflow-y: auto;
      ${EDITOR_ARTICLE_STYLE}
    }
  }
`;

export default EditorUI;
