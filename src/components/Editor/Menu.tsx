import { useRef } from "react";
import { Editor } from "@tiptap/react";
import clsx from "clsx";
import { fonts } from "@/styles/fonts.css";
import useStickyMoment from "@/hook/useStickyMoment";
import { editorMenuContainer, editorMenuButton, editorMenuButtonActive } from "./editor.css";

import BoldText from "@/assets/icon/editor/BoldText.svg";
import ItalicText from "@/assets/icon/editor/ItalicText.svg";
import UnderlineText from "@/assets/icon/editor/UnderlineText.svg";
import DeleteText from "@/assets/icon/editor/DeleteText.svg";
import HighlightText from "@/assets/icon/editor/HighlightText.svg";
import Quote from "@/assets/icon/editor/Quote.svg";
import AlignLeft from "@/assets/icon/editor/AlignLeft.svg";
import AlignCenter from "@/assets/icon/editor/AlignCenter.svg";
import AlignRight from "@/assets/icon/editor/AlignRight.svg";

type Props = {
  editor: Editor | null;
};

function EditorMenu({ editor }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  useStickyMoment(containerRef);

  if (!editor) {
    return null;
  }

  return (
    <div ref={containerRef} className={editorMenuContainer}>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={clsx(
          { [editorMenuButtonActive]: editor.isActive("heading", { level: 1 }) },
          editorMenuButton,
          fonts.caption1.regular
        )}
      >
        대제목
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={clsx(
          { [editorMenuButtonActive]: editor.isActive("heading", { level: 2 }) },
          editorMenuButton,
          fonts.caption1.regular
        )}
      >
        중제목
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={clsx(
          { [editorMenuButtonActive]: editor.isActive("heading", { level: 3 }) },
          editorMenuButton,
          fonts.caption1.regular
        )}
      >
        소제목
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={clsx({ [editorMenuButtonActive]: editor.isActive("bold") }, editorMenuButton)}
      >
        <BoldText />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={clsx({ [editorMenuButtonActive]: editor.isActive("italic") }, editorMenuButton)}
      >
        <ItalicText />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={clsx({ [editorMenuButtonActive]: editor.isActive("underline") }, editorMenuButton)}
      >
        <UnderlineText />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={clsx({ [editorMenuButtonActive]: editor.isActive("strike") }, editorMenuButton)}
      >
        <DeleteText />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        disabled={!editor.can().chain().focus().toggleHighlight().run()}
        className={clsx({ [editorMenuButtonActive]: editor.isActive("highlight") }, editorMenuButton)}
      >
        <HighlightText fill="var(--gray700) !important" />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={clsx({ [editorMenuButtonActive]: editor.isActive("blockquote") }, editorMenuButton)}
      >
        <Quote />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={clsx({ [editorMenuButtonActive]: editor.isActive({ textAlign: "left" }) }, editorMenuButton)}
      >
        <AlignLeft />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={clsx({ [editorMenuButtonActive]: editor.isActive({ textAlign: "center" }) }, editorMenuButton)}
      >
        <AlignCenter />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={clsx({ [editorMenuButtonActive]: editor.isActive({ textAlign: "right" }) }, editorMenuButton)}
      >
        <AlignRight />
      </button>
    </div>
  );
}

export default EditorMenu;
