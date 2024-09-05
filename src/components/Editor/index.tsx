"use client";

import React from "react";
import styled from "@emotion/styled";
import { EditorContent, Editor } from "@tiptap/react";

import EditorMenu from "./Menu";
import EditorMenuBottom from "./MenuBottom";
import { EDITOR_ARTICLE_STYLE } from "@/styles/editor";
import { ArticlePollType } from "./Poll";
import { EditorImageType, EditorOptionalStateControl } from "@/hook/useEditorHandler";

type Props = {
  editor: Editor | null;
  poll: EditorOptionalStateControl<ArticlePollType>;
  images: EditorOptionalStateControl<EditorImageType>;
};

function EditorUI({ editor, poll, images }: Props) {
  return (
    <EditorContainer>
      <div id="editorWrapper">
        {editor && <EditorMenu editor={editor} />}
        <div id="editor" className={editor?.isFocused ? "focused" : ""}>
          {editor && <EditorContent editor={editor} />}
        </div>
      </div>
      <EditorMenuBottom editor={editor} poll={poll} images={images} />
      <div id="make-scrollable" />
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overscroll-behavior: contain;

  #editorWrapper {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  #editor {
    flex: 1;
    width: 100%;
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
      min-height: 360px;
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
