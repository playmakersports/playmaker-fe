"use client";

import React, { useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";

import { InputProps } from "./Input";
import { InputStyledWrapper } from "./Wrapper";
import { FONTS } from "@/styles/common";
import InputWrapper from "./input/InputWrapper";

import CloseIcon from "@/assets/icon/common/Close.svg";

type FileInputProps = Omit<InputProps, "type" | "onButtonWrapClick" | "delButton"> & {
  maxSizeMB?: number;
};
export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>((props, ref) => {
  const { id, placeholder, title, required, information, error, maxSizeMB, description, ...rest } = props;
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
    <InputWrapper title={title} required={required} information={information}>
      <InputBox htmlFor={id} $isError={error}>
        <AttachTitle data-error={error}>파일 선택</AttachTitle>
        <FileName>
          {fileInfo.name ? (
            <span className="file-data">
              <span className="file-name">{fileInfo.name}</span>{" "}
              <span className="file-size">({(fileInfo.size / 1024 / 1024).toFixed(1)}MB)</span>
            </span>
          ) : (
            <span className="placeholder">
              {placeholder ?? ""} {maxSizeMB && `(${maxSizeMB}MB 이하)`}
            </span>
          )}
        </FileName>

        <input type="file" ref={inputRef} id={id} {...rest} onChange={handleFileChange} />
      </InputBox>
      <ClearIconArea
        type="button"
        $isUploaded={!!fileInfo.name}
        role="button"
        onClick={(event) => handleClearInputValue(event)}
        aria-label="입력값 초기화"
      >
        <CloseIcon />
      </ClearIconArea>
      {description && <Description data-error={error}>{description}</Description>}
    </InputWrapper>
  );
});
FileInput.displayName = "FileInput";

const IconArea = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 100%;
    height: auto;
    fill: var(--gray700);
  }
  &[role="button"] {
    cursor: pointer;
  }
`;
const ClearIconArea = styled(IconArea).attrs({ as: "button" })<{ $isUploaded: boolean }>`
  position: absolute;
  top: 0;
  margin: 10px 0;
  right: 12px;
  opacity: ${({ $isUploaded }) => ($isUploaded ? 1 : 0)};
  visibility: ${({ $isUploaded }) => ($isUploaded ? "visible" : "hidden")};
  transition: opacity 0.15s, visibility 0.1s;
  transition-delay: 0.1s;
  background-color: var(--background-light);
`;
const InputBox = styled(InputStyledWrapper).attrs({ as: "label" })`
  cursor: pointer;
  input {
    display: none;
  }
`;
const FileName = styled.div`
  ${FONTS.body4("regular")};
  display: flex;
  align-items: center;
  padding: 0 calc(12px - 8px);
  max-width: calc(100% - 24px);
  flex: 1;
  overflow: hidden;

  span.placeholder {
    color: var(--gray400);
  }

  span.file-data {
    display: flex;
    max-width: 100%;
    gap: 4px;
    overflow: hidden;
    color: var(--gray700);

    span.file-name {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 100%;
    }
    span.file-size {
      padding-right: 28px;
      flex-shrink: 0;
    }
  }
`;

const AttachTitle = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 10px 16px 10px 4px;
  height: 100%;
  color: var(--gray700);
  border-right: 1px solid var(--gray200);
  ${FONTS.body4("medium")};

  &[data-error="true"] {
    border-right-color: var(--red500);
  }
`;

const Description = styled.p`
  margin-top: 8px;
  ${FONTS.caption1("regular")};
  color: var(--gray400);

  &[data-error="true"] {
    color: var(--red500);
  }
`;
