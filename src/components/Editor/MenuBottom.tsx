import React from "react";
import { Editor } from "@tiptap/react";
import styled from "@emotion/styled";

import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
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
        <ReUndo>
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            <Undo />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            <Redo />
          </button>
        </ReUndo>
        <DashedWrapper onClick={showModal}>
          <PollIcon width={20} height={20} /> 투표 넣기
        </DashedWrapper>
        <DashedWrapper>
          <ImageIcon width={20} height={20} /> 이미지 넣기
        </DashedWrapper>
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

const ReUndo = styled.div`
  margin-top: -16px;
  display: flex;
  justify-content: flex-end;

  button {
    /* Menu와 통일 */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    font-size: 1.6rem;
    ${BUTTON_ACTIVE("var(--gray4)")};
    transition: all 0.1s;
    border: 1px solid transparent;

    &.is-active {
      font-weight: 700;
      transform: scale(0.95);
      background-color: var(--gray4);
    }

    svg {
      fill: var(--text);
    }
  }
`;
const Container = styled.div`
  margin: 20px 0 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const DashedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60px;
  border: 1px dashed var(--gray2);
  border-radius: 12px;
  color: var(--gray1);
  gap: 8px;
  ${FONTS.MD1};
  svg {
    fill: var(--gray2);
  }
  ${BUTTON_ACTIVE("transparent")};
`;

export default EditorMenuBottom;
