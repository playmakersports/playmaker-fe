import React from "react";
import styled from "styled-components";
import { fonts } from "@/styles/fonts.css";
import SearchIcon from "@/assets/icon/common/Search.svg";
import CloseIcon from "@/assets/icon/common/Close24.svg";
import Chip from "@/components/common/Chip";

function SearchPopup({ setShow }: { setShow: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [keyword, setKeyword] = React.useState("");
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        zIndex: 900,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "28px 20px 20px",
          backgroundColor: "var(--background-light)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <div
          role="dialog"
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="검색어를 입력하세요..."
            autoFocus={true}
            className={fonts.body3.regular}
          />
          <button
            type="button"
            aria-label="검색"
            disabled={!keyword}
            style={{ wordBreak: "keep-all", opacity: keyword ? 1 : 0.4 }}
          >
            <Chip type={keyword ? "primary" : "gray"} fillType="filled" size="large">
              <SearchIcon /> 검색
            </Chip>
          </button>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <button type="button" onClick={() => setShow(false)}>
            <span className="blind">검색창 닫기</span>
            <CloseIcon width={32} height={32} fill="var(--gray400)" />
          </button>
        </div>
      </div>
      <div
        onClick={() => setShow(false)}
        style={{
          flex: 3,
          backgroundColor: "rgba(256,256,256,0.5)",
        }}
      ></div>
    </div>
  );
}

const Input = styled.input`
  width: 100%;
  padding: 2px 8px;
  border-bottom: 2px solid var(--gray300);
  color: var(--gray700);
  &:focus {
    border-color: var(--gray400);
  }
  &:not(:placeholder-shown) {
    border-color: var(--primary500);
  }
`;

export default SearchPopup;
