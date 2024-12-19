import React, { useState } from "react";
import styled from "styled-components";
import { ModalProps } from "@/hook/useModal";

import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import CheckIcon from "@/assets/icon/global/CheckIcon.svg";

type Props = {
  ModalContainer: (props: ModalProps) => React.JSX.Element | undefined;
  playerInfo?: {
    defaultLevel: number;
    playerId: string;
    playerName: string;
    playerImg: string;
  };
};

const MEMBER_LEVEL = [
  { value: "5", name: "회장" },
  { value: "4", name: "부회장" },
  { value: "3", name: "운영진" },
  { value: "2", name: "매니저" },
];
function PlayerRoleModal({ ModalContainer, playerInfo }: Props) {
  const [selectedOption, setSelectedOption] = useState("");
  const unChangedLevel = selectedOption === "" || +selectedOption === playerInfo?.defaultLevel;

  return (
    <ModalContainer
      draggable="all"
      buttons={[
        {
          name: "확인",
          mode: "MAIN",
          disabled: unChangedLevel,
          onClick: () => {},
        },
      ]}
    >
      <Header>
        <h3>권한 설정</h3>
        <p>
          <img src={playerInfo?.playerImg} alt="" />
          {playerInfo?.playerName}
        </p>
      </Header>

      <Inner>
        {MEMBER_LEVEL.map((option) => (
          <label key={option.value}>
            {option.name}
            <input
              type="radio"
              name="dropdown-option"
              defaultChecked={playerInfo?.defaultLevel === +option.value ? true : false}
              value={option.value}
              onClick={() => {
                setSelectedOption(option.value);
              }}
            />
            <i>
              <CheckIcon />
            </i>
          </label>
        ))}
      </Inner>
    </ModalContainer>
  );
}

const Header = styled.div`
  display: flex;
  margin: 0 -16px;
  padding: 0 24px 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray200);

  h3 {
    ${FONTS.HEAD2};
    font-size: 1.8rem;
  }

  p {
    display: flex;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 8px;
      background-color: var(--gray100);
    }
  }
`;

const Inner = styled.div`
  ${FONTS.MD1W500};
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;

  label {
    user-select: none;
    display: flex;
    justify-content: space-between;
    padding: 16px 12px;
    color: var(--gray700);

    ${BUTTON_ACTIVE("var(--gray100)")}
  }
  i,
  input[type="radio"] {
    display: none;
  }
  label:has(input:checked) {
    color: var(--gray900);

    i {
      display: flex;
      padding: 2px;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      background-color: var(--main);
      border-radius: 50%;
      svg {
        width: 14px;
        height: 14px;
      }
    }
  }
`;

export default PlayerRoleModal;
