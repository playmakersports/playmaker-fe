import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Editor } from "@tiptap/react";
import useModal from "@/hook/useModal";
import { useConfirm } from "../common/global/ConfirmProvider";
import Image from "next/image";
import { EditorImageType, EditorOptionalStateControl } from "@/hook/useEditorHandler";

import { FONTS, TEXT_ACTIVE } from "@/styles/common";
import Poll, { ArticlePollType } from "./Poll";
import { InputRadio } from "../common/input/SelectInput";
import Loading from "../common/Loading";

import ImageIcon from "@/assets/icon/editor/Image.svg";
import PollIcon from "@/assets/icon/editor/Poll.svg";
import Undo from "@/assets/icon/editor/Undo.svg";
import Redo from "@/assets/icon/editor/Redo.svg";
import Plus from "@/assets/icon/common/Plus.svg";
import DeleteAllIcon from "@/assets/icon/common/filled/Delete.svg";

type Props = {
  editor: Editor | null;
  poll: EditorOptionalStateControl<ArticlePollType>;
  images: EditorOptionalStateControl<EditorImageType>;
};

function EditorMenuBottom({ editor, poll, images }: Props) {
  const [isLoadingAddImage, setIsLoadingAddImage] = useState(false);
  const { ModalComponents, showModal } = useModal();
  const confirm = useConfirm();
  const imgInputRef = useRef<HTMLInputElement>(null);
  const { getter, setter } = images;

  const previewImg = () => {
    const files = imgInputRef.current?.files;
    const imgList: string[] = [];

    if (files) {
      const promises = Array.from(files).map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadstart = () => {
            setIsLoadingAddImage(true);
          };
          reader.onloadend = () => {
            if (reader.result) {
              resolve(reader.result.toString());
            } else {
              reject(new Error("Failed to read file"));
            }
          };
          reader.onerror = () => reject(new Error("Failed to read file"));
        });
      });

      Promise.all(promises)
        .then((results) => {
          setIsLoadingAddImage(false);
          imgList.push(...results);
          setter((prev) => ({
            ...prev,
            list: [...prev.list, ...imgList],
          }));
        })
        .catch((error) => {
          console.error("Error reading files", error);
        });
    }
  };

  const removeImageItem = async (index: number) => {
    const isRemove = await confirm?.showConfirm(`이미지(#${index + 1})를 제거할까요?`);
    if (isRemove) {
      setter((prev) => ({
        ...prev,
        list: prev.list.filter((_, i) => index !== i),
      }));
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <>
      <Container>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          id="profileImgUpload"
          multiple={true}
          ref={imgInputRef}
          onChange={previewImg}
        />
        <ButtonContainer>
          <OptionGroup>
            <EditorButton type="button" onClick={showModal} aria-label="투표 생성">
              <PollIcon width={20} height={20} /> 투표
            </EditorButton>
            {getter() && getter().list.length > 0 && (
              <ImagePosition>
                <ImageIcon width={20} height={20} /> <span aria-disabled>위치</span>
                <div className="position-options" aria-label="이미지 삽입 위치 선택">
                  <InputRadio size="MEDIUM" name="position" id="TOP" text={{ title: "상단" }} />
                  <InputRadio size="MEDIUM" name="position" id="BOTTOM" text={{ title: "하단" }} />
                </div>
              </ImagePosition>
            )}
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
        </ButtonContainer>
        <ImageContainer>
          {isLoadingAddImage && (
            <LoadingWrapper>
              <Loading />
            </LoadingWrapper>
          )}
          {getter()?.list.map((image, index) => (
            <ImageItem key={`image-${index}`}>
              <Image src={image} alt={`첨부된 이미지 ${index}번`} width={150} height={110} />
              <button type="button" onClick={() => removeImageItem(index)} aria-label={`${index + 1}번 이미지 삭제`}>
                <DeleteAllIcon width={24} height={24} />
              </button>
            </ImageItem>
          ))}
          {getter() && getter().list.length > 0 ? (
            <label className="image-exist" htmlFor="profileImgUpload" aria-label="이미지 삽입">
              <Plus width={24} height={24} />
            </label>
          ) : (
            <label className="image-empty" htmlFor="profileImgUpload" aria-label="이미지 추가 삽입">
              <ImageIcon width={20} height={20} /> 이미지 삽입
            </label>
          )}
        </ImageContainer>
      </Container>
      <ModalComponents
        draggable="bar"
        title="투표 설정"
        buttons={[
          {
            mode: "primary",
            fillType: "light",
            name: "취소",
            onClick: (close) => {
              close();
            },
          },
          { mode: "primary", name: "완료", onClick: () => {} },
        ]}
      >
        <Poll />
      </ModalComponents>
    </>
  );
}

const Container = styled.div``;
const ButtonContainer = styled.div`
  margin: 8px -16px 0;
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
`;
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  margin: 8px 0 12px;
  padding: 8px 12px;
  align-items: center;
  background-color: var(--gray200);
  border-radius: 8px;
  overflow-x: auto;

  &:has(label.image-exist) {
    background: transparent;
    border: 1px solid var(--gray300);
    gap: 12px;
  }
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  label.image-exist {
    padding: 0 12px;
    height: 110px;
    background-color: var(--gray300);
    border-radius: 4px;
    font-size: 2rem;
    svg {
      fill: var(--gray700);
    }
  }
  label.image-empty {
    display: inline-flex;
    user-select: none;
    flex: 1;
    align-items: center;
    padding: 12px 0;
    font-size: 1.6rem;
    gap: 8px;
    color: var(--gray700);
    svg {
      fill: var(--gray700);
    }
  }
`;
const OptionGroup = styled.div`
  display: flex;
  gap: 12px;

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    ${FONTS.MD2};
    padding: 0 4px;
    border-radius: 8px;
    color: var(--gray800);
    ${TEXT_ACTIVE("var(--gray200)", { focus: true })};

    &:disabled {
      opacity: 0.2;
    }
  }
  svg {
    fill: var(--gray800);
  }
`;
const EditorButton = styled.button`
  gap: 4px;
`;
const ImageItem = styled.div`
  position: relative;
  img {
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  button {
    position: absolute;
    width: 22px;
    height: 22px;
    margin: 6px;
    right: 0;
    top: 0;
    border-radius: 50%;
    outline: 2px solid #ffffff;
    overflow: hidden;
    svg {
      margin: -1px;
      fill: var(--gray700);
      background-color: #fff;
    }
  }
`;
const LoadingWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`;
const ImagePosition = styled.div`
  display: inline-flex;
  align-items: center;
  ${FONTS.MD2};
  padding: 0 4px;
  gap: 4px;
  div.position-options {
    display: flex;
    margin-left: 4px;
    gap: 12px;
  }
`;

export default EditorMenuBottom;
