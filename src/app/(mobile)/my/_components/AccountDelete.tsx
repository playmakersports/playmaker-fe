import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { ModalProps } from "@/hook/useModal";
import { useToast } from "@/hook/useToast";
import { usePopup } from "@/components/common/global/PopupProvider";

import { fonts } from "@/styles/fonts.css";
import { flexColumnGap10 } from "@/styles/container.css";
import CheckIcon from "@/assets/icon/common/Check.svg";

function AccountDelete({ ModalComponents }: { ModalComponents: (props: ModalProps) => React.JSX.Element | undefined }) {
  const [checked, setChecked] = useState<boolean[]>([]);
  const router = useRouter();
  const popup = usePopup();
  const { trigger } = useToast();
  const checkList = [
    "계정 정보은 모두 삭제 되고 다시 복구할 수 없어요.",
    "플메에서의 스포츠 기록을 복구할 수 없어요.",
    "단, 작성한 글과 댓글은 자동으로 삭제되지 않아요.",
    "팀에서 운영진을 맡고 있다면, 미리 변경해주세요.",
    "위 내용에 모두 동의하였으며, 탈퇴를 진행하겠습니다.",
  ];

  return (
    <ModalComponents
      title="서비스 탈퇴"
      draggable="all"
      onClose={() => setChecked([])}
      buttons={[
        {
          name: "확인",
          onClick: async () => {
            const confirm = await popup?.confirm(
              `탈퇴 시 계정 정보 및 이용 기록은 모두 삭제되며, 삭제된 데이터는 복구가 불가능합니다.\n
정말 탈퇴하시겠어요?`,
              {
                title: "탈퇴하기",
                showIcon: true,
                color: "red",
                buttonText: {
                  yes: "네, 탈퇴할게요",
                },
              }
            );

            if (confirm) {
              router.replace("/");
              trigger("탈퇴가 완료되었습니다.", { type: "success" });
            }
          },
          disabled: !checked.every((v) => v) || checked.length !== checkList.length,
          mode: "red",
        },
      ]}
    >
      <div style={{ padding: "10px 0 0", color: "var(--gray600)" }}>
        <p className={fonts.body3.regular}>플레이어님과 함께한 시간 감사했습니다.</p>
        <br />
        <p className={fonts.body3.regular}>
          서비스 탈퇴 전, 알려드릴 사항이 있어요. 꼭 확인 하시고 신중하게 결정해주세요.
        </p>
      </div>
      <div className={flexColumnGap10} style={{ margin: "20px -6px 0" }}>
        {checkList.map((item, index) => (
          <SelectVoteOption key={item}>
            <input
              style={{ visibility: "hidden" }}
              type="checkbox"
              onChange={(e) => {
                const newChecked = [...checked];
                newChecked[index] = e.target.checked;
                setChecked(newChecked);
              }}
            />
            <div className="checkbox">
              <CheckIcon width={20} height={20} />
            </div>
            <span className={fonts.body4.medium}>{item}</span>
          </SelectVoteOption>
        ))}
      </div>
    </ModalComponents>
  );
}

const SelectVoteOption = styled.label`
  cursor: pointer;
  flex: 1;
  display: flex;
  gap: 8px;
  padding: 10px 8px;
  border-radius: 6px;
  color: var(--gray500);
  background-color: var(--gray50);

  & > input {
    position: absolute;
    width: 1;
    height: 1;
    margin: -1px;
    overflow: hidden;
  }

  &:has(input:checked) {
    background-color: var(--red50);
    color: var(--red800);

    div.checkbox {
      background-color: var(--red500);
      border: transparent;
      & > svg {
        display: block;
        fill: var(--white);
      }
    }
  }
  div.checkbox {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background-color: var(--white);
    border: 1px solid var(--gray200);
    & > svg {
      display: none;
    }
  }
`;

export default AccountDelete;
