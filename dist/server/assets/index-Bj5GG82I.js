import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
import styled from "styled-components";
import clsx from "clsx";
import { Link } from "@tanstack/react-router";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { u as useStickyMoment } from "./useStickyMoment-DIRi6KdR.js";
import { u as useModal } from "./useModal--yzWVOVY.js";
import { u as usePopup } from "./PopupProvider-CCXZDelm.js";
import { F as FONTS } from "./common-6ceLbjxn.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { e as playersListTableW54, p as playersListTableColumnDivider, a as playersListTableFlex1, c as playersListTableRow, d as playersListTableHead } from "./players.css-C3NE-92d.js";
import { r as flexRowGap12, l as flexAlignCenter, z as flexRowGap24, k as flexRowGap4, m as flexSpaceBetween, a as flexColumnGap20 } from "./container.css-C2ezn6CH.js";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
import { S as SettingsIcon } from "./Settings-Bu3ta0zy.js";
import "jotai";
import "./Portal-D4P9dmtA.js";
import "react-dom";
import "@vanilla-extract/css";
const TEAM_APPLY_LIST = [
  {
    playerId: 2e3,
    applyDate: "2024-11-14",
    profileImg: "",
    name: "백종원",
    birth: "2000-03-20",
    univ: "서울과기대",
    certificated: false,
    introduce: "팀에서 잘할 자신 있습니다. 꼭 뽑아주세요.",
    recentRank: { title: "2023 전국농구대회", rank: "1위" },
    activeTeam: [{ teamName: "SPBABA", sports: "농구" }]
  },
  {
    playerId: 7840,
    applyDate: "2024-11-13",
    profileImg: "",
    name: "안성재",
    birth: "1997-06-22",
    univ: "홍익대",
    certificated: true,
    introduce: "팀에서 잘할 자신 있습니다. 꼭 뽑아주세요.",
    recentRank: { title: "2023 전국농구대회", rank: "1위" },
    activeTeam: [
      { teamName: "ATAT", sports: "미식축구" },
      { teamName: "달려라", sports: "러닝" }
    ]
  },
  {
    playerId: 2849,
    applyDate: "2024-11-12",
    profileImg: "",
    name: "김플메",
    birth: "1998-06-22",
    univ: "홍익대",
    certificated: true,
    introduce: "팀에서 잘할 자신 있습니다. 꼭 뽑아주세요.",
    recentRank: { title: "2023 전국농구대회", rank: "1위" },
    activeTeam: [{ teamName: "달려라", sports: "러닝" }]
  }
];
function TeamAdminRole() {
  const headRef = useRef(null);
  const {
    ModalComponents,
    showModal
  } = useModal();
  const [selectedPlayer, setSelectedPlayer] = useState({
    playerId: null,
    playerName: null
  });
  const popup = usePopup();
  useStickyMoment(headRef);
  useHeader({
    title: "권한 설정"
  });
  const players = TEAM_APPLY_LIST;
  const onClickRoleChangeButton = ({
    playerId,
    playerName
  }) => {
    setSelectedPlayer({
      playerId,
      playerName
    });
    showModal();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: clsx(playersListTableRow, playersListTableHead), ref: headRef, children: [
      /* @__PURE__ */ jsx("div", { className: clsx(flexRowGap12, flexAlignCenter, playersListTableW54), children: "프로필" }),
      /* @__PURE__ */ jsx("div", { className: playersListTableColumnDivider, "data-header": "true" }),
      /* @__PURE__ */ jsx("div", { className: clsx(flexAlignCenter, playersListTableFlex1), children: "이름" })
    ] }),
    /* @__PURE__ */ jsx("ul", { children: players.map((player) => /* @__PURE__ */ jsx(PlayerItem, { children: /* @__PURE__ */ jsxs("div", { className: clsx(flexAlignCenter), style: {
      flex: 1
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: flexRowGap24, style: {
        flex: 1
      }, children: [
        /* @__PURE__ */ jsx(ProfileImage, {}),
        /* @__PURE__ */ jsxs("div", { style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }, children: [
          /* @__PURE__ */ jsx("p", { className: fonts.caption1.semibold, children: "23기" }),
          /* @__PURE__ */ jsxs(Link, { to: `/p/${player.playerId}`, className: clsx(flexRowGap4, flexAlignCenter), children: [
            /* @__PURE__ */ jsx("p", { className: fonts.body3.medium, children: player.name }),
            /* @__PURE__ */ jsx(RightArrowIcon, { width: 20, height: 20, fill: "var(--gray700)" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "button", mode: "gray", size: "small", fillType: "outline", icon: /* @__PURE__ */ jsx(SettingsIcon, {}), onClick: () => {
        onClickRoleChangeButton({
          playerId: player.playerId,
          playerName: player.name
        });
      }, children: "권한 변경" })
    ] }) }, player.playerId)) }),
    /* @__PURE__ */ jsx(ModalComponents, { title: "권한 변경", buttons: [{
      name: "취소",
      mode: "gray",
      fillType: "outline",
      onClick: (close) => {
        close();
      }
    }, {
      name: "저장",
      mode: "primary",
      fillType: "default",
      onClick: (close) => {
        popup?.confirm("", {
          title: `${selectedPlayer.playerName}님에게 권한을 부여합니다.`,
          buttonText: {
            yes: "네, 부여할게요",
            no: "아니요"
          },
          showIcon: true
        });
        close();
      }
    }], children: /* @__PURE__ */ jsxs("div", { className: clsx(flexColumnGap20, fonts.body4.regular), children: [
      /* @__PURE__ */ jsx("div", { className: clsx(flexAlignCenter, flexSpaceBetween), children: /* @__PURE__ */ jsx("label", { children: "회장" }) }),
      /* @__PURE__ */ jsx("div", { className: clsx(flexAlignCenter, flexSpaceBetween), children: /* @__PURE__ */ jsx("label", { children: "부회장" }) }),
      /* @__PURE__ */ jsx("div", { className: clsx(flexAlignCenter, flexSpaceBetween), children: /* @__PURE__ */ jsx("label", { children: "운영진" }) }),
      /* @__PURE__ */ jsx("div", { className: clsx(flexAlignCenter, flexSpaceBetween), children: /* @__PURE__ */ jsx("label", { children: "팀원" }) })
    ] }) })
  ] });
}
const PlayerItem = styled.li`
  user-select: none;
  padding: 20px 16px;
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
  &:nth-child(2n) {
    background-color: var(--gray50);
  }
`;
const ProfileImage = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: var(--gray100);
`;
export {
  TeamAdminRole as component
};
