import React from "react";
import { Editor } from "@tiptap/react";
import styled from "@emotion/styled";

import { BUTTON_ACTIVE, FONTS, TEXT_ACTIVE } from "@/styles/common";
import ImageIcon from "@/assets/icon/editor/Image.svg";
import PollIcon from "@/assets/icon/editor/Poll.svg";
import Undo from "@/assets/icon/editor/Undo.svg";
import Redo from "@/assets/icon/editor/Redo.svg";
import useModal from "@/hook/useModal";
import Poll from "./Poll";

type Props = {
  editor: Editor | null;
};

function EditorMenuBottom({ editor }: Props) {
  const { ModalComponents, showModal } = useModal();

  if (!editor) {
    return null;
  }

  return (
    <>
      <Container>
        <OptionGroup>
          <EditorButton type="button" onClick={showModal}>
            <PollIcon width={20} height={20} /> 투표
          </EditorButton>
          <EditorButton type="button">
            <ImageIcon width={20} height={20} /> 이미지
          </EditorButton>
        </OptionGroup>
        <OptionGroup>
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            <Undo width={16} height={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            <Redo width={16} height={16} />
          </button>
        </OptionGroup>
      </Container>
      <ModalComponents
        title="투표 설정"
        buttons={[
          { mode: "OPTION2", name: "취소", onClick: () => {} },
          { mode: "MAIN", name: "완료", onClick: () => {} },
        ]}
      >
        <Poll />
      </ModalComponents>
    </>
  );
}

const Container = styled.div`
  margin: 8px -16px 0;
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
`;
const OptionGroup = styled.div`
  display: flex;
  gap: 16px;

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    ${FONTS.MD2};
    padding: 0 4px;
    border-radius: 8px;
    ${TEXT_ACTIVE("var(--gray6)", { focus: true })};
  }
`;
const EditorButton = styled.button`
  gap: 4px;
`;

export default EditorMenuBottom;
