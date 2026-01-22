import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import styled from "styled-components";
import { Link, Outlet } from "@tanstack/react-router";
import { F as FONTS, T as TEXT_ACTIVE } from "./common-6ceLbjxn.js";
import { P as PersonIcon } from "./Person-BRhULpHA.js";
const Logotype = "/assets/Logotype-BfIUlyDj.svg";
function PcLayout({ children }) {
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs(Header, { children: [
      /* @__PURE__ */ jsxs(Menu, { children: [
        /* @__PURE__ */ jsxs("div", { className: "logo-area", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", "aria-label": "홈으로 이동. 협회 및 관계자 전용 화면에서 벗어납니다.", children: /* @__PURE__ */ jsx(Logotype, { width: 168, height: "auto", fill: "var(--gray900)" }) }),
          /* @__PURE__ */ jsx("p", { children: "협회 및 관계사 전용" })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "menu-item", children: /* @__PURE__ */ jsx(Link, { to: "/staff/competition", children: "대회 관리" }) }),
        /* @__PURE__ */ jsx("li", { className: "menu-item", children: /* @__PURE__ */ jsx(Link, { to: "/staff/payment", children: "결제 정보" }) })
      ] }),
      /* @__PURE__ */ jsx(Icons, { children: /* @__PURE__ */ jsx("button", { type: "button", "aria-label": "내 정보 이동", children: /* @__PURE__ */ jsx(PersonIcon, {}) }) })
    ] }),
    /* @__PURE__ */ jsx(Children, { children })
  ] });
}
const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    /* display: none; */
  }
`;
const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 16px 2vw;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;

  div.logo-area {
    margin-right: 32px;
    p {
      padding-left: 10px;
      margin-top: 2px;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 400;
    }
  }
  li.menu-item > a {
    padding: 1px 8px;
    color: var(--gray800);
    border-radius: 4px;
    ${FONTS.body3("regular")};
    ${TEXT_ACTIVE("var(--gray100)", { hover: true })};
  }
`;
const Icons = styled.div`
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    svg {
      width: 22px;
      height: auto;
      fill: var(--gray900);
    }
    border-radius: 4px;
    ${TEXT_ACTIVE("var(--gray100)", { hover: true })};
  }
`;
const Children = styled.main`
  padding: 0 2vw;
  height: calc(100vh - 60px);
  overflow-y: auto;
`;
function Layout() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PcLayout, { children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(PcAlert, { children: "현재 해상도에서 접근할 수 없는 페이지입니다." })
  ] });
}
const PcAlert = styled.section`
  display: none;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  @media (max-width: 960px) {
    display: flex;
  }
`;
export {
  Layout as component
};
