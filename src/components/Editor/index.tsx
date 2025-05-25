import "@/styles/editor.css";
import React from "react";
import { EditorContent, Editor } from "@tiptap/react";

import EditorMenu from "./Menu";
import EditorImages from "./Images";
import { EditorImageType, EditorOptionalStateControl } from "@/hook/useEditorHandler";
import { editorContainer, editorTextAreaContainer } from "./editor.css";
import Loading from "../common/Loading";
import clsx from "clsx";
import { flexColumnGap12 } from "@/styles/container.css";

type Props = {
  editor: Editor | null;
  images: EditorOptionalStateControl<EditorImageType>;
};

function EditorUI({ editor, images }: Props) {
  if (!editor) return <Loading page />;

  return (
    <div className={clsx(editorContainer, flexColumnGap12)}>
      <EditorImages images={images} />
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
    </div>
  );
}

export default EditorUI;
