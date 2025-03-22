import { useEffect, useRef, useState } from "react";
import { Editor } from "@tiptap/react";
import styled from "styled-components";
import { BUTTON_ACTIVE } from "@/styles/common";

import RightArrow from "@/assets/icon/arrow/RightArrow.svg";
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
  const [showStyle, setShowStyle] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mainContainerEl = document.getElementById("main_Container") as HTMLDivElement;
    const headerHeight = +getComputedStyle(document.documentElement)
      .getPropertyValue("--header-height")
      .replace("px", "");
    const safeAreaTop = +getComputedStyle(document.documentElement).getPropertyValue("--env-sat").replace("px", "");

    const handleScroll = () => {
      containerRef.current!.classList.toggle(
        "stuck",
        containerRef.current?.getBoundingClientRect().top === headerHeight + safeAreaTop
      );
    };
    mainContainerEl!.addEventListener("scroll", handleScroll);
    return () => {
      mainContainerEl!.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  if (!editor) {
    return null;
  }

  return (
    <Container ref={containerRef}>
      <button
        tabIndex={-1}
        type="button"
        className={`toggle-button ${showStyle && "active"}`}
        onClick={() => setShowStyle((prev) => !prev)}
      >
        제목 <RightArrow />
      </button>
      <HideMenu $isShow={showStyle}>
        <button
          tabIndex={-1}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
        >
          대제목
        </button>
        <button
          tabIndex={-1}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        >
          중제목
        </button>
        <button
          tabIndex={-1}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
        >
          소제목
        </button>
      </HideMenu>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <BoldText />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <ItalicText />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
      >
        <UnderlineText />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <DeleteText />
      </button>
      <button
        tabIndex={-1}
        id="highlight-button"
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        disabled={!editor.can().chain().focus().toggleHighlight().run()}
        className={editor.isActive("highlight") ? "is-active" : ""}
      >
        <HighlightText />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <Quote />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
      >
        <AlignLeft />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}
      >
        <AlignCenter />
      </button>
      <button
        tabIndex={-1}
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
      >
        <AlignRight />
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  padding: 6px 12px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  transition: all 0.2s;

  &.stuck {
    margin: 0 -16px;
    padding: 6px 13px;
    background-color: var(--background-light);
    border-bottom: 1px solid var(--gray300);
    z-index: 10;
  }
  button {
    /* MenuBottom과 통일 */
    display: flex;
    margin-right: 3px;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    font-size: 1.5rem;
    ${BUTTON_ACTIVE("var(--gray300)", 6)};
    transition: all 0.1s;
    border: 1px solid transparent;

    &.is-active {
      font-weight: 500;
      transform: scale(0.95);
      background-color: var(--main);
      color: #fff;
      svg {
        fill: #fff;
      }
    }
  }

  .toggle-button {
    padding: 2px 8px;
    margin: 4px 2px 4px 0;
    font-size: 1.4rem;
    background-color: var(--gray200);

    svg {
      width: 16px;
      height: 16px;
      margin-left: -1px;
      transition: transform 0.2s;
    }
    &.active {
      font-weight: 600;
      color: var(--gray700);
      background-color: var(--gray100);
      svg {
        fill: var(--gray600);
        transform: rotate(-180deg);
      }
    }
  }

  svg {
    width: 18px;
    height: 20px;
    fill: var(--gray800);
  }
  #highlight-button svg {
    fill: #000;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const HideMenu = styled.div<{ $isShow: boolean }>`
  transform: translateX(${({ $isShow }) => ($isShow ? "0" : "-60px")});
  display: flex;
  visibility: ${({ $isShow }) => ($isShow ? "visible" : "hidden")};
  margin-right: 6px;
  gap: 4px;
  width: ${({ $isShow }) => ($isShow ? "100%" : "0%")};
  opacity: ${({ $isShow }) => ($isShow ? 1 : 0)};
  transition: all 0.2s;
  border-right: 1px solid var(--gray300);
  & > button:last-of-type {
    margin-right: 10px;
  }
`;

export default EditorMenu;
