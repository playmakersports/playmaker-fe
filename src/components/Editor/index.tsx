"use client";

import React from "react";
import styled from "@emotion/styled";
import { EditorContent, Editor } from "@tiptap/react";

import EditorMenu from "./Menu";
import { EDITOR_ARTICLE_STYLE } from "@/styles/editor";

type Props = {
  editor: Editor | null;
};

function EditorUI({ editor }: Props) {
  return (
    <EditorContainer>
      <EditorMenu editor={editor} />
      <div id="editor">
        <EditorContent editor={editor} />
      </div>
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  #editor {
    margin-top: 16px;
    padding: 20px;
    border-radius: 8px;
    background-color: var(--card);

    div:focus-visible {
      outline: none;
    }
    .tiptap {
      height: 360px;
      overflow-y: auto;
      ${EDITOR_ARTICLE_STYLE}
    }
  }
`;

export default EditorUI;
