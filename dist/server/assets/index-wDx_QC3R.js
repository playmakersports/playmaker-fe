import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import clsx from "clsx";
import { useRouter } from "@tanstack/react-router";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { u as useTeamPlyerGet, a as useTeamJoinRequestGet } from "./team-CBj277QK.js";
import styled from "styled-components";
import { u as useStickyMoment } from "./useStickyMoment-DIRi6KdR.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { i as innerChildContainer, k as flexRowGap4, l as flexAlignCenter, g as flexColumnGap10, m as flexSpaceBetween, s as baseContainerPaddingTop, a as flexColumnGap20 } from "./container.css-C2ezn6CH.js";
import { p as playersListTableColumnDivider, a as playersListTableFlex1, b as playersListTableW70, c as playersListTableRow, d as playersListTableHead } from "./players.css-C3NE-92d.js";
import { T as TeamPlayerAuthStatusName } from "./enums-D9SRQWnw.js";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
import { B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import { P as PeopleIcon } from "./People-dk9UROdd.js";
import { d as Route } from "./router-mwjOH7mt.js";
import "jotai";
import "./authToken-Bx9YTtw3.js";
import "cookies-next";
import "axios";
import "./query-Ciubt76c.js";
import "@tanstack/react-query";
import "@vanilla-extract/css";
import "./common-6ceLbjxn.js";
import "./Wrapper-DpW65hF8.js";
import "./InputWrapper-CgYCSwII.js";
import "./container.css-DZr6lpKA.js";
import "./Close20-w_89MMCP.js";
import "./Search-DrxoJQ2v.js";
import "@microsoft/clarity";
const UpDownArrow = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_1706_23030'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1706_23030)'%3e%3cpath%20d='M11.9999%2021.6537L6.88137%2016.5351C6.5858%2016.2396%206.5858%2015.7603%206.88137%2015.4648C7.17651%2015.1696%207.65487%2015.1691%207.95062%2015.4637L11.9999%2019.4962L16.0493%2015.4637C16.345%2015.1691%2016.8234%2015.1696%2017.1185%2015.4648C17.4141%2015.7603%2017.4141%2016.2396%2017.1185%2016.5351L11.9999%2021.6537ZM7.95817%208.52844C7.66545%208.81992%207.19308%208.82282%206.89681%208.53495C6.594%208.24073%206.59051%207.75562%206.88906%207.45707L11.9999%202.34619L17.1108%207.45707C17.4094%207.75562%2017.4059%208.24073%2017.1031%208.53495C16.8068%208.82282%2016.3344%208.81992%2016.0417%208.52844L11.9999%204.50369L7.95817%208.52844Z'%20/%3e%3c/g%3e%3c/svg%3e";
const CrownIcon = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1.5'%20y='1.5'%20width='27'%20height='27'%20rx='13.5'%20/%3e%3cmask%20id='mask0_773_7076'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='3'%20width='24'%20height='24'%3e%3crect%20x='3'%20y='3'%20width='24'%20height='24'%20fill='%23FFC957'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_773_7076)'%3e%3cpath%20d='M8.71599%2021L7.4339%2013.6255C7.40252%2013.6314%207.36722%2013.6368%207.32799%2013.6417C7.28876%2013.6466%207.25345%2013.649%207.22207%2013.649C6.87811%2013.649%206.58844%2013.5302%206.35306%2013.2926C6.11769%2013.0549%206%2012.7663%206%2012.4269C6%2012.0823%206.11769%2011.7895%206.35306%2011.5483C6.58844%2011.3073%206.87834%2011.1867%207.22277%2011.1867C7.56705%2011.1867%207.8597%2011.3073%208.10072%2011.5483C8.3419%2011.7895%208.46249%2012.0823%208.46249%2012.4269C8.46249%2012.5145%208.4552%2012.5959%208.4406%2012.671C8.42617%2012.746%208.40326%2012.8167%208.37187%2012.8831L11.3503%2014.1468L14.22%2010.2307C14.0656%2010.1232%2013.941%209.98178%2013.8462%209.8065C13.7515%209.63123%2013.7041%209.44246%2013.7041%209.24019C13.7041%208.89576%2013.8246%208.60295%2014.0656%208.36177C14.3066%208.12059%2014.5993%208%2014.9438%208C15.2881%208%2015.5809%208.12043%2015.8224%208.3613C16.0638%208.60201%2016.1844%208.89443%2016.1844%209.23854C16.1844%209.44489%2016.1371%209.63499%2016.0423%209.80886C15.9475%209.98256%2015.8229%2010.1232%2015.6685%2010.2307L18.5382%2014.1468L21.5166%2012.8831C21.4925%2012.8189%2021.4714%2012.7482%2021.4533%2012.671C21.4351%2012.594%2021.426%2012.5126%2021.426%2012.4269C21.426%2012.0823%2021.5437%2011.7895%2021.7791%2011.5483C22.0144%2011.3073%2022.3044%2011.1867%2022.6488%2011.1867C22.9931%2011.1867%2023.2858%2011.3073%2023.527%2011.5483C23.768%2011.7895%2023.8885%2012.0823%2023.8885%2012.4269C23.8885%2012.7654%2023.7678%2013.0537%2023.5263%2013.2919C23.2848%2013.53%2022.9915%2013.649%2022.6464%2013.649C22.6188%2013.649%2022.5877%2013.6451%2022.5532%2013.6372C22.5189%2013.6294%2022.485%2013.6255%2022.4515%2013.6255L21.1725%2021H8.71599Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e";
const FlagCircle = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1.5'%20y='1.5'%20width='27'%20height='27'%20rx='13.5'%20/%3e%3cmask%20id='mask0_773_7077'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='3'%20y='3'%20width='24'%20height='24'%3e%3crect%20x='3'%20y='3'%20width='24'%20height='24'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_773_7077)'%3e%3cpath%20d='M9%208V22H10.75V16.75H12.5848C13.3795%2016.75%2014.1506%2017.0205%2014.7712%2017.517L15.0413%2017.733C15.6619%2018.2295%2016.433%2018.5%2017.2277%2018.5H20.375C21.3415%2018.5%2022.125%2017.7165%2022.125%2016.75V11.5C22.125%2010.5335%2021.3415%209.75%2020.375%209.75H18.4527C17.658%209.75%2016.8869%209.47952%2016.2663%208.98304L15.9962%208.76696C15.3756%208.27048%2014.6045%208%2013.8098%208H9Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e";
function PlayersList({ playersList }) {
  const headRef = useRef(null);
  useStickyMoment(headRef);
  const UpDownSortArrow = ({ type }) => {
    return /* @__PURE__ */ jsx("button", { type: "button", style: { width: "18px", height: "18px" }, children: /* @__PURE__ */ jsx(UpDownArrow, { width: 18, height: 18, fill: "var(--gray400)" }) });
  };
  return /* @__PURE__ */ jsxs("div", { className: innerChildContainer, children: [
    /* @__PURE__ */ jsxs("div", { className: clsx(playersListTableRow, playersListTableHead), ref: headRef, children: [
      /* @__PURE__ */ jsx("div", { style: { width: "54px" }, children: "프로필" }),
      /* @__PURE__ */ jsx("div", { className: playersListTableColumnDivider, "data-header": "true" }),
      /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap4, flexAlignCenter, playersListTableFlex1), children: [
        "이름 ",
        /* @__PURE__ */ jsx(UpDownSortArrow, { type: "name" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: playersListTableColumnDivider, "data-header": "true" }),
      /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap4, flexAlignCenter, playersListTableW70), children: [
        "포지션 ",
        /* @__PURE__ */ jsx(UpDownSortArrow, { type: "position" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: playersListTableColumnDivider, "data-header": "true" }),
      /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap4, flexAlignCenter, playersListTableW70), children: [
        "출석률 ",
        /* @__PURE__ */ jsx(UpDownSortArrow, { type: "attendance" })
      ] })
    ] }),
    playersList?.map((player) => /* @__PURE__ */ jsxs("div", { className: playersListTableRow, children: [
      /* @__PURE__ */ jsx(Image, { children: ["MASTER", "ASSISTANT", "STAFF"].includes(player.auth) && /* @__PURE__ */ jsx(
        Staff,
        {
          style: {
            backgroundColor: PLAYER_LEVEL_COLORS[player.auth]
          },
          children: player.auth === "MASTER" ? /* @__PURE__ */ jsx(CrownIcon, { width: 24, height: 24 }) : /* @__PURE__ */ jsx(FlagCircle, { width: 24, height: 24 })
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: playersListTableFlex1, children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: clsx(fonts.caption1.semibold, flexAlignCenter, flexRowGap4),
            style: { color: "var(--primary500)" },
            children: [
              player.generation !== null ? /* @__PURE__ */ jsxs(Fragment, { children: [
                player.generation,
                "기",
                /* @__PURE__ */ jsx("span", { className: "bullet" })
              ] }) : null,
              TeamPlayerAuthStatusName[player.auth]
            ]
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: clsx(fonts.body3.medium, flexAlignCenter), children: [
          player.username,
          " ",
          /* @__PURE__ */ jsx(RightArrowIcon, { width: 20, height: 20, fill: "var(--gray700)" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: playersListTableColumnDivider }),
      /* @__PURE__ */ jsx("div", { className: playersListTableColumnDivider })
    ] }, player.memberId))
  ] });
}
const Image = styled.div`
  position: relative;
  margin-right: 12px;
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: var(--gray100);
`;
const Staff = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -8px;
  bottom: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--background-light);
  box-sizing: content-box;
  &[data-size="small"] {
    display: none;
  }
`;
const PLAYER_LEVEL_COLORS = {
  MASTER: "#ff8c00",
  ASSISTANT: "#0fd1c1",
  STAFF: "#8984E5",
  MEMBER: "",
  APPLICABLE: "",
  APPLY: ""
};
function PlayerList() {
  const router = useRouter();
  const {
    teamId
  } = Route.useParams();
  const {
    data: playersList
  } = useTeamPlyerGet(teamId);
  const {
    data: requestPlayers
  } = useTeamJoinRequestGet(teamId);
  const joinRequestCount = requestPlayers?.length || 0;
  const [sortTab, setSortTab] = useState("name");
  const [sortType, setSortType] = useState("");
  useHeader({
    title: "팀원",
    subActions: [{
      name: "권한 설정",
      action: () => {
        router.navigate({
          to: `/team/${teamId}/admin/role`
        });
      }
    }, {
      name: "팀원 퇴출",
      action: () => {
        router.navigate({
          to: `/team/${teamId}/admin/block`
        });
      }
    }, {
      name: "기수 설정",
      action: () => {
        router.navigate({
          to: `/team/${teamId}/admin/player-batch`
        });
      }
    }]
  });
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { className: clsx(baseContainerPaddingTop, flexColumnGap20), children: [
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap10, children: [
      /* @__PURE__ */ jsx(BasicInput, { type: "text", iconType: "search", placeholder: "이름으로 찾기" }),
      /* @__PURE__ */ jsxs("div", { className: clsx(flexSpaceBetween), children: [
        /* @__PURE__ */ jsxs("p", { className: clsx(fonts.body4.regular, flexRowGap4), style: {
          color: "var(--gray500)"
        }, children: [
          /* @__PURE__ */ jsx(PeopleIcon, { width: 20, height: 20, fill: "var(--gray600)" }),
          playersList?.length,
          "명"
        ] }),
        /* @__PURE__ */ jsxs(Button, { type: "button", mode: joinRequestCount > 0 ? "primary" : "gray", fillType: joinRequestCount > 0 ? "default" : "outline", size: "xsmall", onClick: () => router.navigate({
          to: `/team/${teamId}/admin/join-request`
        }), children: [
          "가입 신청 ",
          joinRequestCount > 0 ? `${joinRequestCount}건` : "없음"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(PlayersList, { playersList })
  ] }) });
}
export {
  PlayerList as component
};
