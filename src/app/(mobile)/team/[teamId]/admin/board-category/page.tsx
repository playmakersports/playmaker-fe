"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { useHeader } from "@/hook/useHeader";
import { usePopup } from "@/components/common/global/PopupProvider";

import { FONTS } from "@/styles/common";
import { BaseContainer } from "@/components/common/Container";

import LockIcon from "@/assets/icon/common/filled/Lock.svg";
import DeleteAllIcon from "@/assets/icon/common/filled/Delete.svg";
import PencilIcon from "@/assets/icon/common/filled/Pencil.svg";

function BoardCategory() {
  const popup = usePopup();
  const [category, setCategory] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  useHeader({
    title: "카테고리 관리",
  });

  const handleDeleteItem = async (item: string) => {
    const isDelete = await popup?.confirm(
      `카테고리를 삭제할까요?\n기존 글은 자유글로 이동되어 남아있지만\n이 동작을 되돌릴 수 없어요.`,
      {
        buttonText: { yes: "그래도 삭제할게요", no: "취소" },
      }
    );
    if (isDelete) {
      setCategory((prev) => prev.filter((v) => v !== item));
    }
  };

  return (
    <Container>
      <div className="description">
        <p>
          <strong>최대 2개의 카테고리</strong>를 추가할 수 있어요.
        </p>
        <p>카테고리를 삭제하면 기존 글은 자유글로 모두 이동해요.</p>
      </div>
      <List>
        <li>
          공지사항 <span className="fixed">고정</span>
        </li>
        <li>
          자유글 <span className="fixed">고정</span>
        </li>
        <li>
          가입인사 <span className="fixed">고정</span>
        </li>
        <li>
          경기 <span className="fixed">고정</span>
        </li>
        {category.map((item) => (
          <li key={item}>
            {item}
            <div className="board-buttons">
              <button type="button">
                <PencilIcon />
              </button>
              <button type="button" onClick={() => handleDeleteItem(item)}>
                <DeleteAllIcon />
              </button>
            </div>
          </li>
        ))}
        {category.length < 2 && (
          <li className="custom">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setCategory((prev) => [...prev, inputValue]);
                setInputValue("");
              }}
            >
              <input
                type="text"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="새로운 카테고리 추가..."
              />
              <button type="submit">추가</button>
            </form>
          </li>
        )}
        <li>
          <span className="manager-board">
            운영진 <LockIcon />
          </span>
          <span className="fixed">고정</span>
        </li>
      </List>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  div.description {
    padding: 0 4px 8px;
    ${FONTS.body4("regular")};
    font-weight: 400;
    color: var(--gray800);
    strong {
      font-weight: 500;
      color: var(--main);
    }
  }
`;
const List = styled.ul`
  display: flex;
  margin: 12px 0px 0;
  flex-direction: column;
  gap: 10px;

  li {
    display: inline-flex;
    justify-content: space-between;
    user-select: none;
    ${FONTS.body3("regular")};
    padding: 18px 16px;
    background-color: var(--gray100);
    border-radius: 10px;
    border: 1px solid transparent;

    span.fixed {
      font-size: 1.4rem;
      font-weight: 400;
      color: var(--gray600);
    }
    div.board-buttons {
      display: flex;
      gap: 16px;
      button {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          width: 20px;
          height: 20px;
          fill: var(--gray800);
        }
      }
    }
  }

  li.custom {
    background-color: transparent;
    border: 1px solid var(--gray400);

    form {
      display: flex;
      width: 100%;
    }
    input {
      flex: 1;
    }
    button {
      /* 추가 버튼 */
      font-size: 1.4rem;
      margin: -8px 0;
      padding: 8px 16px;
      background-color: var(--main);
      color: #fff;
      border-radius: 6px;
    }
  }

  span.manager-board {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    svg {
      fill: var(--gray700);
    }
  }
`;

export default BoardCategory;
