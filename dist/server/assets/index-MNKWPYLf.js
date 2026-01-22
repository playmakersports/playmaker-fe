import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import clsx from "clsx";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import styled from "styled-components";
import { u as useModal } from "./useModal--yzWVOVY.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { g as flexColumnGap10, d as flexColumnGap4, k as flexRowGap4, l as flexAlignCenter, s as baseContainerPaddingTop, b as flexColumnGap40 } from "./container.css-C2ezn6CH.js";
import { i as settingsAccountButton } from "./userSetting.css-B3SV-hPj.js";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { u as useToast } from "./useToast-hwetiz13.js";
import { u as usePopup } from "./PopupProvider-CCXZDelm.js";
import { C as CheckIcon } from "./Check-xgghRidd.js";
import "jotai";
import "./Button-cLlpCM0x.js";
import "./common-6ceLbjxn.js";
import "./Portal-D4P9dmtA.js";
import "react-dom";
import "@vanilla-extract/css";
import "sonner";
import "./AlertFilled-JvwFT9H1.js";
import "./Close20-w_89MMCP.js";
function AccountDelete({ ModalComponents }) {
  const [checked, setChecked] = useState([]);
  const router = useRouter();
  const popup = usePopup();
  const { trigger } = useToast();
  const checkList = [
    "계정 정보은 모두 삭제 되고 다시 복구할 수 없어요.",
    "플메에서의 스포츠 기록을 복구할 수 없어요.",
    "단, 작성한 글과 댓글은 자동으로 삭제되지 않아요.",
    "팀에서 운영진을 맡고 있다면, 미리 변경해주세요.",
    "위 내용에 모두 동의하였으며, 탈퇴를 진행하겠습니다."
  ];
  return /* @__PURE__ */ jsxs(
    ModalComponents,
    {
      title: "서비스 탈퇴",
      draggable: "all",
      onClose: () => setChecked([]),
      buttons: [
        {
          name: "확인",
          onClick: async () => {
            const confirm = await popup?.confirm(
              `탈퇴 시 계정 정보 및 이용 기록은 모두 삭제되며, 삭제된 데이터는 복구가 불가능합니다.

정말 탈퇴하시겠어요?`,
              {
                title: "탈퇴하기",
                showIcon: true,
                color: "red",
                buttonText: {
                  yes: "네, 탈퇴할게요"
                }
              }
            );
            if (confirm) {
              router.navigate({ to: "/", replace: true });
              trigger("탈퇴가 완료되었습니다.", { type: "success" });
            }
          },
          disabled: !checked.every((v) => v) || checked.length !== checkList.length,
          mode: "red"
        }
      ],
      children: [
        /* @__PURE__ */ jsxs("div", { style: { padding: "10px 0 0", color: "var(--gray600)" }, children: [
          /* @__PURE__ */ jsx("p", { className: fonts.body3.regular, children: "플레이어님과 함께한 시간 감사했습니다." }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("p", { className: fonts.body3.regular, children: "서비스 탈퇴 전, 알려드릴 사항이 있어요. 꼭 확인 하시고 신중하게 결정해주세요." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: flexColumnGap10, style: { margin: "20px 0 0" }, children: checkList.map((item, index) => /* @__PURE__ */ jsxs(SelectVoteOption, { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              style: { visibility: "hidden" },
              type: "checkbox",
              onChange: (e) => {
                const newChecked = [...checked];
                newChecked[index] = e.target.checked;
                setChecked(newChecked);
              }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "checkbox", children: /* @__PURE__ */ jsx(CheckIcon, { width: 20, height: 20 }) }),
          /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, children: item })
        ] }, item)) })
      ]
    }
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
function AccountSetting() {
  const {
    ModalComponents,
    showModal
  } = useModal();
  useHeader({
    title: "계정 관리",
    options: {
      titleAlign: "center"
    }
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: clsx(baseContainerPaddingTop, flexColumnGap40), children: [
      /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, children: [
        /* @__PURE__ */ jsxs("p", { className: clsx(fonts.body2.semibold, flexRowGap4, flexAlignCenter), style: {
          color: "var(--gray900)"
        }, children: [
          /* @__PURE__ */ jsx("span", { children: "playtest@gmail.com" }),
          /* @__PURE__ */ jsx(AccountLogo, { children: /* @__PURE__ */ jsx(GoogleLogoSvg, {}) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: fonts.body4.regular, style: {
          color: "var(--gray700)"
        }, children: "계정 연동일 2025.05.11" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, children: [
        /* @__PURE__ */ jsxs("button", { type: "button", className: settingsAccountButton, children: [
          /* @__PURE__ */ jsx("span", { children: "연동 계정 변경" }),
          /* @__PURE__ */ jsx(RightArrowIcon, { width: 20, height: 20, fill: "var(--gray600)" })
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "button", className: settingsAccountButton, onClick: () => showModal(), children: [
          /* @__PURE__ */ jsx("span", { children: "서비스 탈퇴" }),
          /* @__PURE__ */ jsx(RightArrowIcon, { width: 20, height: 20, fill: "var(--gray600)" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(AccountDelete, { ModalComponents })
  ] });
}
const AccountLogo = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--gray200);

  & > svg {
    width: 16px;
    height: 16px;
  }
`;
const GoogleLogoSvg = () => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 533.5 544.3", children: [
  /* @__PURE__ */ jsx("path", { fill: "#4285f4", d: "M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" }),
  /* @__PURE__ */ jsx("path", { fill: "#34a853", d: "M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" }),
  /* @__PURE__ */ jsx("path", { fill: "#fbbc04", d: "M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" }),
  /* @__PURE__ */ jsx("path", { fill: "#ea4335", d: "M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" })
] });
export {
  AccountSetting as component
};
