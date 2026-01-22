import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { useRouter } from "@tanstack/react-router";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { u as useModal } from "./useModal--yzWVOVY.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { h as baseContainer, k as flexRowGap4, l as flexAlignCenter, p as flexRowGap10, m as flexSpaceBetween, i as innerChildContainer, r as flexRowGap12, o as baseCardContainer, v as flexCenterJA } from "./container.css-C2ezn6CH.js";
import { F as FONTS } from "./common-6ceLbjxn.js";
import { I as InputCheckbox } from "./SelectInput-Dl1BIb6a.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import { a as playersListTableFlex1, p as playersListTableColumnDivider, b as playersListTableW70, c as playersListTableRow, d as playersListTableHead } from "./players.css-C3NE-92d.js";
import { C as CheckIcon } from "./Check-xgghRidd.js";
import { P as PeopleIcon } from "./People-dk9UROdd.js";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
import { M as MinusIcon } from "./Minus-Dzq7_5JU.js";
import { P as PlusIcon } from "./Plus-CBBY8JMW.js";
import { c as colors } from "./color.css-BLEreRIo.js";
import { N as NumberFlowInput } from "./NumberFlowInput-CIrknTNT.js";
import "./useToast-hwetiz13.js";
import { l as Route } from "./router-mwjOH7mt.js";
import "jotai";
import "./Portal-D4P9dmtA.js";
import "react-dom";
import "@vanilla-extract/css";
import "@number-flow/react";
import "./container.css-DZr6lpKA.js";
import "sonner";
import "./AlertFilled-JvwFT9H1.js";
import "./Close20-w_89MMCP.js";
import "@microsoft/clarity";
function TeamPlayerBatch() {
  const listRef = useRef(null);
  const router = useRouter();
  const [batchNum, setBatchNum] = useState(1);
  const [selected, setSelected] = useState([]);
  const {
    teamId
  } = Route.useParams();
  useHeader({
    title: "기수 설정"
  });
  const {
    showModal,
    ModalComponents
  } = useModal();
  const players = [{
    teamId: "123",
    memberId: "123",
    memberName: "홍길동",
    batch: 23
  }];
  const allChecked = players.length > 0 && players.every((player) => selected.includes(player.memberId));
  const handleSingleCheck = (id, checked) => {
    setSelected((prev) => checked ? [...prev, id] : prev.filter((pid) => pid !== id));
  };
  const handleAllCheck = (checked) => {
    if (checked) {
      const allIds = players.map((p) => p.memberId);
      setSelected(allIds);
    } else {
      setSelected([]);
    }
  };
  const handleBatchModal = () => {
    showModal();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: baseContainer, children: [
      /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap10, flexAlignCenter, flexSpaceBetween), style: {
        height: "52px",
        padding: "10px 0"
      }, children: [
        selected.length > 0 ? /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap4, flexAlignCenter, fonts.body4.regular), children: [
          /* @__PURE__ */ jsx(CheckIcon, { width: 20, height: 20, fill: "var(--gray700)" }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsxs("span", { className: fonts.body4.medium, style: {
              color: "var(--primary500)"
            }, children: [
              selected.length,
              "명"
            ] }),
            " ",
            "선택"
          ] })
        ] }) : /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap4, flexAlignCenter, fonts.body4.regular), children: [
          /* @__PURE__ */ jsx(PeopleIcon, { width: 20, height: 20, fill: "var(--gray700)" }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsxs("span", { className: fonts.body4.medium, style: {
              color: "var(--primary500)"
            }, children: [
              players.length,
              "명"
            ] }),
            "의 팀원이 있어요"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: flexRowGap10, children: /* @__PURE__ */ jsx(Button, { type: "button", fillType: "default", size: "xsmall", onClick: handleBatchModal, children: "기수 설정" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: innerChildContainer, children: /* @__PURE__ */ jsxs("div", { className: clsx(playersListTableRow, playersListTableHead), children: [
        /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap12, flexAlignCenter, playersListTableFlex1), children: [
          /* @__PURE__ */ jsx(InputCheckbox, { id: "allCheckedBox", size: "MEDIUM", checked: allChecked, onChange: (e) => handleAllCheck(e.target.checked) }),
          "프로필"
        ] }),
        /* @__PURE__ */ jsx("div", { className: playersListTableColumnDivider, "data-header": "true" }),
        /* @__PURE__ */ jsx("div", { className: clsx(flexRowGap4, flexAlignCenter, playersListTableW70), children: "경력" })
      ] }) }),
      /* @__PURE__ */ jsx("ul", { ref: listRef, children: players.map((player) => /* @__PURE__ */ jsx(PlayerItem, { children: /* @__PURE__ */ jsxs("div", { className: "item-top", children: [
        /* @__PURE__ */ jsx(InputCheckbox, { size: "MEDIUM", className: "player-select", checked: selected.includes(player.memberId), onChange: (e) => handleSingleCheck(player.memberId, e.target.checked) }),
        /* @__PURE__ */ jsxs("div", { className: flexAlignCenter, style: {
          flex: 1
        }, children: [
          /* @__PURE__ */ jsxs("div", { className: flexRowGap12, style: {
            flex: 1
          }, children: [
            /* @__PURE__ */ jsx(ProfileImage, {}),
            /* @__PURE__ */ jsxs("div", { style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }, children: [
              /* @__PURE__ */ jsx("p", { className: clsx(fonts.caption1.semibold, "position", colors.primary500, flexRowGap4), children: "23기 회장" }),
              /* @__PURE__ */ jsxs(Name, { onClick: () => router.navigate({
                to: `/p/${player.memberId}`
              }), children: [
                /* @__PURE__ */ jsx("p", { className: "player-name", children: player.memberName }),
                /* @__PURE__ */ jsx(RightArrowIcon, { width: 20, height: 20, fill: "var(--gray700)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: clsx(fonts.body4.medium, playersListTableW70), children: "10년" })
        ] })
      ] }) }, player.memberId)) })
    ] }),
    /* @__PURE__ */ jsx(ModalComponents, { draggable: "all", title: "기수 설정", description: "선택한 회원들의 기수를 입력해 주세요.", buttons: [{
      mode: "primary",
      name: "확인",
      onClick: (close) => {
        close();
      }
    }], children: /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap10, flexCenterJA), style: {
      marginBottom: "12px"
    }, children: [
      /* @__PURE__ */ jsx(NumberButton, { type: "button", disabled: batchNum <= 1, onClick: () => setBatchNum((prev) => {
        if (prev > 1) return prev - 1;
        return 1;
      }), children: /* @__PURE__ */ jsx(MinusIcon, {}) }),
      /* @__PURE__ */ jsx("div", { className: baseCardContainer, style: {
        width: "55%"
      }, children: /* @__PURE__ */ jsxs("div", { className: clsx(fonts.head5.medium, flexCenterJA, flexRowGap4), children: [
        /* @__PURE__ */ jsx("div", { className: flexCenterJA, style: {
          minWidth: "42px"
        }, children: /* @__PURE__ */ jsx(NumberFlowInput, { min: 1, width: "flexible", value: batchNum, onChange: (e) => setBatchNum(+e.target.value) }) }),
        /* @__PURE__ */ jsx("span", { className: clsx(fonts.body1.regular, colors.gray500), children: "기" })
      ] }) }),
      /* @__PURE__ */ jsx(NumberButton, { type: "button", onClick: () => setBatchNum((prev) => prev + 1), children: /* @__PURE__ */ jsx(PlusIcon, {}) })
    ] }) })
  ] });
}
const PlayerItem = styled.li`
  user-select: none;
  padding: 20px 0;
  border-bottom: 1px solid var(--gray200);
  div.item-top {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  div.item-intro {
    ${FONTS.body4("regular")};
    margin-top: 16px;
    margin-left: 32px;
    background-color: var(--gray50);
    border-radius: 8px;
    padding: 10px 12px;
    color: var(--gray600);
  }
`;
const ProfileImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: var(--gray100);
`;
const Name = styled.div`
  ${FONTS.body3("medium")};
  display: flex;
  align-items: center;
`;
const NumberButton = styled.button`
  margin: 0 2px;
  width: 36px;
  height: 36px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--gray50);
  border: 1px solid var(--gray200);
  svg {
    width: 100%;
    height: 100%;
    fill: var(--gray700);
  }
  &:active {
    background-color: var(--gray200);
    transition: scale 0.2s ease-in-out;
    svg {
      scale: 0.9;
    }
  }
  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
    &:active {
      background-color: var(--gray50);
    }
  }
`;
export {
  TeamPlayerBatch as component
};
