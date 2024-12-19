"use client";

import React, { useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";

import { InputProps } from "./Input";
import { InputStyledWrapper } from "./Wrapper";
import { FONTS } from "@/styles/common";

import ClipIcon from "@/assets/icon/global/Clip.svg";
import DeleteAllIcon from "@/assets/icon/global/DeleteAll.svg";
import QuestionIcon from "@/assets/icon/global/Question.svg";

type FileInputProps = Omit<InputProps, "type" | "information" | "search" | "onButtonWrapClick" | "delButton"> & {
  maxSizeMB?: number;
};
export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>((props, ref) => {
  const { id, title, errorText, medium = false, maxSizeMB, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);
  const [fileInfo, setFileInfo] = useState({ name: "", size: 0 });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileInfo({ name: event.target.files[0].name, size: event.target.files[0].size });
    } else {
      setFileInfo({ name: "", size: 0 });
    }
    if (props.onChange) {
      props.onChange(event);
    }
  };

  const handleClearInputValue = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    if (inputRef.current) {
      inputRef.current.value = "";
      setFileInfo({ name: "", size: 0 });
      if (props.onChange) {
        props.onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
      }
    }
  };

  return (
    <Container style={{ width: "100%" }}>
      {title && <p className="input-title">{title}</p>}
      <InputBox htmlFor={id}>
        {fileInfo.name ? (
          <span className="file-data">
            <span className="file-name">{fileInfo.name}</span>{" "}
            <span className="file-size">({(fileInfo.size / 1024 / 1024).toFixed(1)}MB)</span>
          </span>
        ) : (
          <span className="placeholder">파일 첨부 {maxSizeMB && `(${maxSizeMB}MB 이하)`}</span>
        )}
        <input type="file" ref={inputRef} id={id} {...rest} onChange={handleFileChange} />
        {!fileInfo.name && (
          <IconArea>
            <ClipIcon />
          </IconArea>
        )}
        <ClearIconArea
          type="button"
          isUploaded={!!fileInfo.name}
          role="button"
          onClick={(event) => handleClearInputValue(event)}
          aria-label="입력값 초기화"
        >
          <DeleteAllIcon />
        </ClearIconArea>
      </InputBox>
      {rest.accept && (
        <Acceptable>
          <span className="acceptable-title">
            <QuestionIcon />
            파일 형식
          </span>
          {rest.accept.split(",").map((type) => (
            <span className="file-accept" key={type}>
              {type}
            </span>
          ))}
        </Acceptable>
      )}
    </Container>
  );
});
FileInput.displayName = "FileInput";

const Container = styled.div`
  .input-title {
    font-size: 1.4rem;
    margin-bottom: 4px;
    padding: 0 10px;
    font-weight: 500;
    color: var(--gray700);
    line-height: 2.4rem;
  }
`;

const IconArea = styled.div`
  position: absolute;
  display: inline-flex;
  right: 8px;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;
const ClearIconArea = styled(IconArea).attrs({ as: "button" })<{ isUploaded: boolean }>`
  cursor: pointer;
  opacity: ${({ isUploaded }) => (isUploaded ? 1 : 0)};
  visibility: ${({ isUploaded }) => (isUploaded ? "visible" : "hidden")};
  transition: opacity 0.15s, visibility 0.1s;
  transition-delay: 0.1s;
  background-color: var(--background-light);
  svg {
    fill: var(--gray500);
  }
`;
const InputBox = styled(InputStyledWrapper).attrs({ as: "label" })`
  position: relative;
  cursor: pointer;
  ${FONTS.MD1};
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--black);

  input {
    display: none;
  }
  span.placeholder {
    color: var(--gray600);
  }
  span.file-data {
    display: flex;
    max-width: calc(100% - 32px);
    gap: 4px;
    span.file-name {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

const Acceptable = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 6px;
  padding: 0 8px;
  font-size: 1.3rem;
  color: var(--point);
  gap: 6px;

  span.acceptable-title {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  span.file-accept {
    margin-right: -2px;
    font-size: 1.2rem;
    padding: 2px 4px;
    background-color: rgba(var(--point-rgb), 0.08);
    color: var(--point);
    border-radius: 2px;
    font-weight: 500;
  }
  svg {
    width: 16px;
    height: 16px;
    fill: var(--point);
  }
`;
