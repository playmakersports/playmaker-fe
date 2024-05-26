import React from "react";
import { FONTS } from "@/styles/common";
import styled from "@emotion/styled";

import DeleteAllIcon from "@/assets/icon/global/DeleteAll.svg";
import SearchIcon from "@/assets/icon/global/Search.svg";

type Props = Partial<React.InputHTMLAttributes<HTMLInputElement>> & {
  search?: boolean;
  delButton?: () => void;
};
export function BasicInput(props: Props) {
  const { search, delButton } = props;

  return (
    <Wrapper>
      {search && <SearchIcon />}
      <Basic placeholder={props.placeholder ?? " "} {...props} />
      {delButton && <DeleteAllIcon role="button" className="clear-input-button" onClick={delButton} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 12px;
  gap: 10px;
  align-items: center;
  background-color: rgba(var(--gray-h5), 1);
  border-radius: 8px 10px;

  & > svg {
    fill: rgba(var(--gray-h3));
    width: 20px;
    height: 20px;
  }
`;

const Basic = styled.input`
  &[type="text"] {
    width: 100%;
    ${FONTS.MD1};
    font-size: 1.8rem;
    font-weight: 500;
    transition: all 0.2s;
    color: var(--black);

    &::placeholder {
      color: rgba(var(--gray-h2), 0.6);
    }

    & + .clear-input-button {
      display: none;
    }

    &:not(:placeholder-shown) + .clear-input-button {
      display: block;
    }
  }
`;
