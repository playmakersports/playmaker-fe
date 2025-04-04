import "@/styles/editor.css";
import React from "react";
import styled from "styled-components";
import { EditorContent, Editor } from "@tiptap/react";

import EditorMenu from "./Menu";
import EditorMenuBottom from "./MenuBottom";
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
      {editor && <EditorMenu editor={editor} />}
      <div id="tiptap_Editor" data-focus={editor?.isFocused}>
        {editor && <EditorContent editor={editor} />}
      </div>
      <EditorMenuBottom editor={editor} poll={poll} images={images} />
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overscroll-behavior: contain;

  #tiptap_Editor {
    flex: 1;
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid var(--gray200);

    &[data-focus="true"] {
      border-color: var(--gray300);
    }
    div:focus-visible {
      outline: none;
    }
    .tiptap {
      min-height: 360px;
      overflow-y: auto;
    }
  }
`;

export default EditorUI;
