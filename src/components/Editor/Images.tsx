import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Editor } from "@tiptap/react";
import Image from "next/image";
import { EditorImageType, EditorOptionalStateControl } from "@/hook/useEditorHandler";

import Loading from "../common/Loading";

import CameraIcon from "@/assets/icon/common/filled/Camera.svg";
import Undo from "@/assets/icon/editor/Undo.svg";
import Redo from "@/assets/icon/editor/Redo.svg";
import Plus from "@/assets/icon/common/Plus.svg";
import CloseIcon from "@/assets/icon/common/Close20.svg";
import { useToast } from "@/hook/useToast";
import { fonts } from "@/styles/fonts.css";
import { flexRowGap10 } from "@/styles/container.css";

type Props = {
  images: EditorOptionalStateControl<EditorImageType>;
};

function EditorImages({ images }: Props) {
  const toast = useToast();
  const [isLoadingAddImage, setIsLoadingAddImage] = useState(false);
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

  const removeImageItem = (index: number) => {
    toast.trigger(`이미지를 제거했습니다.`);
    // if (isRemove) {
    setter((prev) => ({
      ...prev,
      list: prev.list.filter((_, i) => index !== i),
    }));
    // }
  };

  return (
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
      {/* <div>
        <div>
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
        </div>
      </div> */}
      <ImageContainer className={flexRowGap10}>
        {isLoadingAddImage && (
          <LoadingWrapper>
            <Loading />
          </LoadingWrapper>
        )}
        <ImageAddLabel htmlFor="profileImgUpload" aria-label="이미지 추가 삽입">
          <div className="icon-wrapper">
            <CameraIcon width={24} height={24} fill="var(--gray200)" />
            <span className="plus-icon">
              <Plus width={12} height={12} fill="var(--white)" />
            </span>
          </div>
          <span className={fonts.body4.medium}>{getter().list.length}/3</span>
        </ImageAddLabel>

        {getter()?.list.map((image, index) => (
          <ImageItem key={`image-${index}`}>
            <Image src={image} alt={`첨부된 이미지 ${index}번`} width={80} height={80} />
            <button type="button" onClick={() => removeImageItem(index)} aria-label={`${index + 1}번 이미지 삭제`}>
              <CloseIcon width={14} height={14} />
            </button>
          </ImageItem>
        ))}
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div``;
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow-x: auto;
`;

const ImageAddLabel = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid var(--gray200);
  color: var(--gray400);
  background-color: var(--gray50);

  & > div.icon-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid var(--gray200);
    & > span.plus-icon {
      position: absolute;
      margin: -4px;
      bottom: 0;
      right: 0;
      width: 16px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--gray400);
      border-radius: 50%;
      border: 2px solid var(--white);
      box-sizing: content-box;
    }
  }
`;
const ImageItem = styled.div`
  position: absolute;
  bottom: 0;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid var(--gray200);
  overflow: hidden;

  img {
    object-fit: cover;
  }

  button {
    position: absolute;
    width: 14px;
    height: 14px;
    margin: 6px;
    right: 0;
    top: 0;
    border-radius: 50%;
    background-color: rgba(15, 23, 42, 0.6);
    overflow: hidden;
    svg {
      fill: var(--white);
    }
  }
`;
const LoadingWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default EditorImages;
