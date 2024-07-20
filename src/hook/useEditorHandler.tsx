import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";

type Props = {
  initialContent?: string;
};

export const useEditorHandler = ({ initialContent }: Props = {}) =>
  useEditor({
    enablePasteRules: false, // 붙여넣기할 때 마크다운 문법 무시
    content: initialContent ?? "",
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
  });
