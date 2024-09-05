import React, { useState } from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";

import { ArticlePollType } from "@/components/Editor/Poll";

type Props = {
  initialContent?: string;
};
export type EditorOptionalStateControl<T> = {
  getter: () => T;
  setter: (updateFn: (prev: T) => T) => void;
};
export type EditorImageType = { list: string[]; position: "TOP" | "BOTTOM" };

export const useEditorHandler = ({ initialContent }: Props = {}) => {
  const [pollValue, setPoll] = useState<ArticlePollType>({
    pollDue: false,
    endDate: "",
    endTime: "00:00",
    pollTitle: "",
    pollOptions: [
      { value: "", order: 0 },
      { value: "", order: 1 },
    ],
    multiple: false,
    anonymous: false,
  });
  const [imagesValue, setImages] = useState<EditorImageType>({
    list: [],
    position: "TOP",
  });

  const poll = {
    getter: () => pollValue,
    setter: (updateFn: (prev: ArticlePollType) => ArticlePollType) => setPoll(updateFn(pollValue)),
  };
  const images = {
    getter: () => imagesValue,
    setter: (updateFn: (prev: EditorImageType) => EditorImageType) => setImages(updateFn(imagesValue)),
  };

  const editor = useEditor({
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

  return { editor, poll, images };
};
