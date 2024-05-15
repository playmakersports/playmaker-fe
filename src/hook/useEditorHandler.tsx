import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";

type Props = {
  initialContent?: string;
};

export const useEditorHandler = ({ initialContent }: Props = {}) =>
  useEditor({
    content: initialContent ?? "",
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
  });
