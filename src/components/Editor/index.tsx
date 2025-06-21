import "@/styles/editor.css";
import React from "react";
import clsx from "clsx";
import { EditorContent, Editor } from "@tiptap/react";
import { EditorImageType, EditorOptionalStateControl } from "@/hook/useEditorHandler";

import { flexColumnGap16 } from "@/styles/container.css";
import { editorContainer, editorTextAreaContainer } from "./editor.css";
import EditorImages from "./Images";
import Loading from "../common/Loading";

type Props = {
  editor: Editor | null;
  images: EditorOptionalStateControl<EditorImageType>;
};

function EditorUI({ editor, images }: Props) {
  if (!editor) return <Loading page />;

  return (
    <div className={clsx(editorContainer, flexColumnGap16)}>
      {/* NOTE: 에디터는 추후 기능 정의 후 추가 예정 */}
      {/* {editor && <EditorMenu editor={editor} />} */}
      <div id="tiptap_Editor" className={editorTextAreaContainer}>
        {editor && (
          <EditorContent
            editor={editor}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          />
        )}
      </div>
      <EditorImages images={images} />
    </div>
  );
}

export default EditorUI;
