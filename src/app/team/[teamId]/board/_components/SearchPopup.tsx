import React, { useEffect } from "react";
import { useSetAtom } from "jotai";
import clsx from "clsx";

import { fonts } from "@/styles/fonts.css";
import { semantic } from "@/styles/color.css";
import { flexAlignCenter, flexColumnGap16, flexRowGap10 } from "@/styles/container.css";
import { atomHeaderDisplay } from "@/atom/common";
import { BasicInput } from "@/components/common/input/BaseInput";
import LeftDirection from "@/assets/icon/arrow/LeftDirection.svg";

function SearchPopup({ setShow }: { setShow: React.Dispatch<React.SetStateAction<boolean>> }) {
  const setDisplayHeader = useSetAtom(atomHeaderDisplay);
  const [keyword, setKeyword] = React.useState("");

  useEffect(() => {
    setDisplayHeader(false);
    return () => {
      setDisplayHeader(true);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        marginTop: "calc(var(--header-height) * -1)",
        padding: "0 var(--global-lr-padding)",
        width: "100%",
        maxWidth: "var(--mobile-max-width)",
        height: "100%",
        zIndex: 901,
        backgroundColor: "var(--background-light)",
      }}
    >
      <div className={clsx(flexRowGap10, flexAlignCenter)} style={{ height: "var(--header-height)" }}>
        <button type="button" aria-label="검색창 닫기" onClick={() => setShow(false)}>
          <LeftDirection width={24} height={24} />
        </button>
        <div style={{ flex: 1 }}>
          <BasicInput
            width="100%"
            iconType="search"
            delButton={true}
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="검색어를 입력하세요."
            autoFocus={true}
            className={fonts.body3.regular}
          />
        </div>
      </div>
      <div className={flexColumnGap16} style={{ marginTop: "16px" }}>
        <p className={fonts.body4.medium}>최근 검색어</p>
        <p className={semantic.description} style={{ textAlign: "center" }}>
          최근 검색 내역이 없습니다.
        </p>
      </div>
    </div>
  );
}

export default SearchPopup;
