import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRouter } from "@tanstack/react-router";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { s as setTokens } from "./authToken-Bx9YTtw3.js";
import { u as useProfileGet } from "./user-D6JVBRgW.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { j as baseDividedLineChild, h as baseContainer } from "./container.css-C2ezn6CH.js";
import { s as settingsGroupWrapper, a as settingsGroupTitle, b as settingsHeaderProfile, c as settingsHeaderProfileImage } from "./userSetting.css-B3SV-hPj.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import styled from "styled-components";
import { B as BUTTON_ACTIVE, F as FONTS } from "./common-6ceLbjxn.js";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
import { P as PersonIcon } from "./Person-BRhULpHA.js";
import "jotai";
import "react";
import "cookies-next";
import "axios";
import "./query-Ciubt76c.js";
import "@tanstack/react-query";
import "@vanilla-extract/css";
function GroupList({ list }) {
  return /* @__PURE__ */ jsx(Group, { children: list.map((item, idx) => /* @__PURE__ */ jsxs("li", { onClick: item.onClick, children: [
    /* @__PURE__ */ jsx("span", { className: "title-wrapper", children: item.title }),
    item.subText ? /* @__PURE__ */ jsxs("span", { className: "status-wrapper", children: [
      item.subText,
      /* @__PURE__ */ jsx(RightArrowIcon, { width: 24, height: 24, fill: "var(--gray700)" })
    ] }) : /* @__PURE__ */ jsx("span", { className: "status-wrapper", children: /* @__PURE__ */ jsx(RightArrowIcon, { width: 24, height: 24, fill: "var(--gray700)" }) })
  ] }, idx)) });
}
function UserSetting() {
  const router = useRouter();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: baseDividedLineChild }),
    /* @__PURE__ */ jsxs("div", { className: settingsGroupWrapper, children: [
      /* @__PURE__ */ jsx("h4", { className: settingsGroupTitle, children: "기본 정보" }),
      /* @__PURE__ */ jsx(
        GroupList,
        {
          list: [
            { title: "내 프로필 수정", onClick: () => router.navigate({ to: `/my/info` }) },
            { title: "활동 지역", onClick: () => router.navigate({ to: `/my/location` }) }
            // NOTE: 초기 버전에서는 학교 인증 및 계정 관리 제외
            // {
            //   title: "학교 인증",
            //   onClick: () => router.push(`/my/school`),
            //   subText: <span style={{ color: "var(--red500)" }}>인증 필요</span>,
            // },
            // { title: "계정 관리", onClick: () => router.push(`/my/account`) },
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: baseDividedLineChild }),
    /* @__PURE__ */ jsxs("div", { className: settingsGroupWrapper, children: [
      /* @__PURE__ */ jsx("h4", { className: settingsGroupTitle, children: "소속 팀" }),
      /* @__PURE__ */ jsx(GroupList, { list: [{ title: "소속 팀 관리", onClick: () => router.navigate({ to: `/my/team-list` }) }] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: baseDividedLineChild }),
    /* @__PURE__ */ jsxs("div", { className: settingsGroupWrapper, children: [
      /* @__PURE__ */ jsx("h4", { className: settingsGroupTitle, children: "내 운동 정보" }),
      /* @__PURE__ */ jsx(
        GroupList,
        {
          list: [
            { title: "신체 정보 관리", onClick: () => router.navigate({ to: `/my/physical` }) },
            { title: "운동 종목별 정보 관리", onClick: () => router.navigate({ to: `/my/sports` }) }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: baseDividedLineChild }),
    /* @__PURE__ */ jsx("div", { className: settingsGroupWrapper, children: /* @__PURE__ */ jsx(
      GroupList,
      {
        list: [
          {
            title: "알림 설정",
            onClick: () => router.navigate({ to: `/my/notification` })
          },
          {
            title: "공지사항",
            onClick: () => router.navigate({ to: `/my/notice` })
          },
          {
            title: "약관 정보",
            onClick: () => {
            }
          },
          {
            title: "앱 버전 확인",
            onClick: () => {
            }
          },
          {
            title: "로그아웃",
            onClick: () => {
              router.navigate({ to: "/user/logout", replace: true });
            }
          }
        ]
      }
    ) })
  ] });
}
const Group = styled.ul`
  display: flex;
  flex-direction: column;
  margin: -4px -10px 0;
  gap: calc(20px - 4px - 4px);
  li {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;

    display: flex;
    padding: 4px 10px;
    align-items: center;
    justify-content: space-between;
    ${BUTTON_ACTIVE("var(--gray50)")}
  }
  span.title-wrapper {
    ${FONTS.body3("medium")};
    color: var(--gray700);
  }
  span.status-wrapper {
    ${FONTS.body4("regular")};
    display: inline-flex;
    align-items: center;
    color: var(--gray500);
    gap: 4px;
  }
`;
function MySettings() {
  const router = useRouter();
  const {
    data
  } = useProfileGet();
  useHeader({
    title: "설정",
    subActions: [{
      name: "계정 관리",
      action: () => router.navigate({
        to: "/my/account"
      })
    }, {
      name: "TEST TOKEN",
      action: () => {
        const promptToken = prompt("토큰을 입력해주세요");
        if (promptToken) {
          setTokens({
            access_token: promptToken,
            refresh_token: promptToken,
            expires_in: 4e3,
            refresh_token_expires_in: 4e3
          });
          router.invalidate();
        }
      }
    }]
  });
  return /* @__PURE__ */ jsxs("section", { className: baseContainer, children: [
    /* @__PURE__ */ jsxs("div", { className: settingsHeaderProfile, children: [
      /* @__PURE__ */ jsx("div", { className: settingsHeaderProfileImage, children: data?.imageUrl ? /* @__PURE__ */ jsx("img", { src: data?.imageUrl, alt: data?.userName, className: "profile-image" }) : /* @__PURE__ */ jsx(PersonIcon, { width: 24, height: 24, fill: "var(--gray300)" }) }),
      /* @__PURE__ */ jsxs("div", { className: "profile", style: {
        flex: 1
      }, children: [
        /* @__PURE__ */ jsx("div", { className: fonts.body3.medium, style: {
          color: "var(--gray700)"
        }, children: data?.userName }),
        /* @__PURE__ */ jsx("div", { className: fonts.caption1.regular, style: {
          color: "var(--gray400)"
        }, children: "@test" })
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "button", mode: "gray", fillType: "light", size: "small", onClick: () => router.navigate({
        to: "/p/my"
      }), children: "프로필 보기" })
    ] }),
    /* @__PURE__ */ jsx(UserSetting, {})
  ] });
}
export {
  MySettings as component
};
