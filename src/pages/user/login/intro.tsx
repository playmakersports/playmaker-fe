import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import useBgWhite from "@/hook/useBgWhite";
import { useConfirm } from "@/components/common/global/ConfirmProvider";

import { FONTS } from "@/styles/common";
import LoginWrapper from "@/components/User/LoginWrapper";
import { InputCheckbox } from "@/components/common/SelectInput";
import JoinStep from "@/components/User/JoinStep";

function Intro() {
  useBgWhite();
  const router = useRouter();
  const confirm = useConfirm();
  const allCheckInput = useRef<HTMLInputElement>(null);
  const [checkedList, setCheckedList] = useState({
    essential01: false,
    essential02: false,
    essential03: false,
  });

  useEffect(() => {
    if (allCheckInput.current) {
      const isEveryChecked = Object.values(checkedList).every((v) => v);
      allCheckInput.current!.checked = isEveryChecked;
    }
  }, [checkedList]);

  if (router.query.agree === "T") {
    return <JoinStep />;
  }
  return (
    <LoginWrapper
      button={{
        text: "확인",
        onClick: async () => {
          if (checkedList.essential01 && checkedList.essential02) {
            router.push(`/user/login/intro?agree=${checkedList.essential03 ? "T" : "F"}`);
          } else {
            await confirm?.showConfirm("필수 약관에 모두 동의해야 합니다");
          }
        },
      }}
    >
      <Agreement>
        <AllCheck>
          <InputCheckbox
            id="allChecked"
            ref={allCheckInput}
            onChange={(event) => {
              const isChecked = event.target.checked;
              setCheckedList({
                essential01: isChecked,
                essential02: isChecked,
                essential03: isChecked,
              });
            }}
          />
          <label htmlFor="allChecked">약관 전체 동의</label>
        </AllCheck>
        <TermList>
          <li>
            <div>
              <InputCheckbox
                id="essential01"
                checked={checkedList.essential01}
                onChange={(event) => setCheckedList((prev) => ({ ...prev, essential01: event.target.checked }))}
              />
              <label htmlFor="essential01">[필수] 이용약관</label>
            </div>
            <button type="button">{">"}</button>
          </li>
          <li>
            <div>
              <InputCheckbox
                id="essential02"
                checked={checkedList.essential02}
                onChange={(event) => setCheckedList((prev) => ({ ...prev, essential02: event.target.checked }))}
              />
              <label htmlFor="essential02">[필수] 개인정보 수집 및 이용</label>
            </div>
            <button type="button">{">"}</button>
          </li>
          <li>
            <div>
              <InputCheckbox
                id="essential03"
                checked={checkedList.essential03}
                onChange={(event) => setCheckedList((prev) => ({ ...prev, essential03: event.target.checked }))}
              />
              <label htmlFor="essential03">[선택] 이벤트 및 할인쿠폰 정보 수신</label>
            </div>
            <button type="button">{">"}</button>
          </li>
        </TermList>
      </Agreement>
    </LoginWrapper>
  );
}

const Agreement = styled.div`
  margin: 0 -16px;
`;
const AllCheck = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--gray6);
  gap: 10px;

  label {
    ${FONTS.MD1W500}
  }
`;
const TermList = styled.ul`
  li {
    display: flex;
    padding: 14px 20px;
    justify-content: space-between;
    align-items: center;

    div {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      ${FONTS.MD2};
      font-weight: 400;
      color: var(--gray3);
    }
  }
`;

export default Intro;
