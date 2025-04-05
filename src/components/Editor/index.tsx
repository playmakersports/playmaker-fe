import "@/styles/editor.css";
import React from "react";
import { EditorContent, Editor } from "@tiptap/react";

import EditorMenu from "./Menu";
import EditorMenuBottom from "./MenuBottom";
import { ArticlePollType } from "./Poll";
import { EditorImageType, EditorOptionalStateControl } from "@/hook/useEditorHandler";
import { editorContainer, editorTextAreaContainer } from "./editor.css";

type Props = {
  editor: Editor | null;
  poll: EditorOptionalStateControl<ArticlePollType>;
  images: EditorOptionalStateControl<EditorImageType>;
};

function EditorUI({ editor, poll, images }: Props) {
  return (
    <div className={editorContainer}>
      {editor && <EditorMenu editor={editor} />}
      <div id="tiptap_Editor" className={editorTextAreaContainer} data-focus={editor?.isFocused}>
        {editor && <EditorContent editor={editor} />}
      </div>
      <EditorMenuBottom editor={editor} poll={poll} images={images} />
    </div>
  );
}

export default EditorUI;
