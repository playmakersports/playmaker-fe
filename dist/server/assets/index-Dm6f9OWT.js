import { jsxs, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import clsx from "clsx";
import { formatDate } from "date-fns";
import styled from "styled-components";
import { useRouter } from "@tanstack/react-router";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { u as usePopup } from "./PopupProvider-CCXZDelm.js";
import { a as useTeamJoinRequestGet, f as useTeamJoinApprovePost, g as useTeamJoinRejectPost } from "./team-CBj277QK.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { h as baseContainer, k as flexRowGap4, l as flexAlignCenter, p as flexRowGap10, m as flexSpaceBetween, i as innerChildContainer, r as flexRowGap12 } from "./container.css-C2ezn6CH.js";
import { F as FONTS } from "./common-6ceLbjxn.js";
import { I as InputCheckbox } from "./SelectInput-Dl1BIb6a.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import { a as playersListTableFlex1, p as playersListTableColumnDivider, b as playersListTableW70, c as playersListTableRow, d as playersListTableHead } from "./players.css-C3NE-92d.js";
import { C as CheckIcon } from "./Check-xgghRidd.js";
import { P as PeopleIcon } from "./People-dk9UROdd.js";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
import { useForm } from "react-hook-form";
import { u as useToast } from "./useToast-hwetiz13.js";
import { m as Route } from "./router-mwjOH7mt.js";
import "jotai";
import "./authToken-Bx9YTtw3.js";
import "cookies-next";
import "axios";
import "./query-Ciubt76c.js";
import "@tanstack/react-query";
import "@vanilla-extract/css";
import "sonner";
import "./AlertFilled-JvwFT9H1.js";
import "./Close20-w_89MMCP.js";
import "@microsoft/clarity";
function TeamJoinRequest() {
  useHeader({
    title: "가입 신청 목록"
  });
  const listRef = useRef(null);
  const toast = useToast();
  const popup = usePopup();
  const router = useRouter();
  const {
    teamId
  } = Route.useParams();
  const {
    register,
    watch,
    setValue
  } = useForm();
  const selectedPlayers = watch("players") ?? [];
  const {
    data: requestPlayers,
    refetch
  } = useTeamJoinRequestGet(teamId);
  const {
    mutate: mutateApprove
  } = useTeamJoinApprovePost(teamId, typeof selectedPlayers === "string" ? [selectedPlayers] : selectedPlayers);
  const {
    mutate: mutateReject
  } = useTeamJoinRejectPost(teamId, typeof selectedPlayers === "string" ? [selectedPlayers] : selectedPlayers);
  const handleApplyAccept = async () => {
    if (selectedPlayers.length > 0) {
      const confirm = await popup?.confirm("가입 승인 시점부터 활동이 가능합니다.", {
        title: "가입을 승인하시겠어요?",
        showIcon: true,
        color: "primary",
        buttonText: {
          yes: "승인"
        }
      });
      if (confirm) {
        mutateApprove({
          data: void 0
        }, {
          onSuccess: () => {
            toast.trigger("가입을 승인했어요");
            setValue("players", []);
            refetch();
          }
        });
      }
    }
  };
  const handleApplyReject = async () => {
    if (selectedPlayers.length > 0) {
      const confirm = await popup?.confirm("가입 거절 이후 7일간 재신청이 불가능합니다.", {
        title: "가입을 거절하시겠어요?",
        showIcon: true,
        color: "red",
        buttonText: {
          yes: "거절"
        }
      });
      if (confirm) {
        mutateReject({
          data: void 0
        }, {
          onSuccess: () => {
            toast.trigger("가입을 거절했어요");
            setValue("players", []);
            refetch();
          }
        });
      }
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: baseContainer, children: [
    /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap10, flexAlignCenter, flexSpaceBetween), style: {
      height: "52px",
      padding: "10px 0"
    }, children: [
      selectedPlayers.length > 0 ? /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap4, flexAlignCenter, fonts.body4.regular), children: [
        /* @__PURE__ */ jsx(CheckIcon, { width: 20, height: 20, fill: "var(--gray700)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsxs("span", { className: fonts.body4.medium, style: {
            color: "var(--primary500)"
          }, children: [
            selectedPlayers.length,
            "건"
          ] }),
          " ",
          "선택"
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap4, flexAlignCenter, fonts.body4.regular), children: [
        /* @__PURE__ */ jsx(PeopleIcon, { width: 20, height: 20, fill: "var(--gray700)" }),
        requestPlayers && requestPlayers?.length > 0 ? /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsxs("span", { className: fonts.body4.medium, style: {
            color: "var(--primary500)"
          }, children: [
            requestPlayers?.length,
            "건"
          ] }),
          "의 가입 신청이 있어요!"
        ] }) : /* @__PURE__ */ jsx("p", { children: "가입 신청자 없음" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: flexRowGap10, children: [
        /* @__PURE__ */ jsx(Button, { type: "button", disabled: selectedPlayers.length === 0, mode: "red", fillType: "light", size: "xsmall", onClick: handleApplyReject, children: "거절" }),
        /* @__PURE__ */ jsx(Button, { type: "button", disabled: selectedPlayers.length === 0, fillType: "default", size: "xsmall", onClick: handleApplyAccept, children: "승인" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: innerChildContainer, children: /* @__PURE__ */ jsxs("div", { className: clsx(playersListTableRow, playersListTableHead), children: [
      /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap12, flexAlignCenter, playersListTableFlex1), children: [
        /* @__PURE__ */ jsx(InputCheckbox, { id: "allCheckedBox", size: "MEDIUM" }),
        "프로필"
      ] }),
      /* @__PURE__ */ jsx("div", { className: playersListTableColumnDivider, "data-header": "true" }),
      /* @__PURE__ */ jsx("div", { className: clsx(flexRowGap4, flexAlignCenter, playersListTableW70), children: "경력" })
    ] }) }),
    /* @__PURE__ */ jsx("ul", { ref: listRef, children: requestPlayers?.map((player) => /* @__PURE__ */ jsxs(PlayerItem, { children: [
      /* @__PURE__ */ jsxs("div", { className: "item-top", children: [
        /* @__PURE__ */ jsx(InputCheckbox, { size: "MEDIUM", className: "player-select", value: player.memberId, ...register("players") }),
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
              /* @__PURE__ */ jsxs(Name, { onClick: () => router.navigate({
                to: `/p/${player.memberId}`
              }), children: [
                /* @__PURE__ */ jsx("p", { className: "player-name", children: player.memberName }),
                /* @__PURE__ */ jsx(RightArrowIcon, { width: 20, height: 20, fill: "var(--gray700)" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: fonts.caption1.medium, style: {
                color: "var(--gray400)"
              }, children: [
                formatDate(player.requestDate, "yyyy.MM.dd HH:mm"),
                " 신청"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: clsx(fonts.body4.medium, playersListTableW70), children: "10년" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "item-intro", children: player.message })
    ] }, player.memberId)) })
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
export {
  TeamJoinRequest as component
};
