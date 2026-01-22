import{j as e,L as i,O as r}from"./main-DdFHfJsj.js";import{a as t}from"./styled-components.browser.esm-B_lRBw7u.js";import{F as s,T as n}from"./common-p2nbeD7y.js";import{P as o}from"./Person-Dscbr2-V.js";const l="/assets/Logotype-BfIUlyDj.svg";function c({children:a}){return e.jsxs(d,{children:[e.jsxs(x,{children:[e.jsxs(p,{children:[e.jsxs("div",{className:"logo-area",children:[e.jsx(i,{to:"/","aria-label":"홈으로 이동. 협회 및 관계자 전용 화면에서 벗어납니다.",children:e.jsx(l,{width:168,height:"auto",fill:"var(--gray900)"})}),e.jsx("p",{children:"협회 및 관계사 전용"})]}),e.jsx("li",{className:"menu-item",children:e.jsx(i,{to:"/staff/competition",children:"대회 관리"})}),e.jsx("li",{className:"menu-item",children:e.jsx(i,{to:"/staff/payment",children:"결제 정보"})})]}),e.jsx(h,{children:e.jsx("button",{type:"button","aria-label":"내 정보 이동",children:e.jsx(o,{})})})]}),e.jsx(m,{children:a})]})}const d=t.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    /* display: none; */
  }
`,x=t.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 16px 2vw;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
`,p=t.ul`
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
    ${s.body3("regular")};
    ${n("var(--gray100)",{hover:!0})};
  }
`,h=t.div`
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
    ${n("var(--gray100)",{hover:!0})};
  }
`,m=t.main`
  padding: 0 2vw;
  height: calc(100vh - 60px);
  overflow-y: auto;
`;function v(){return e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx(r,{})}),e.jsx(g,{children:"현재 해상도에서 접근할 수 없는 페이지입니다."})]})}const g=t.section`
  display: none;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  @media (max-width: 960px) {
    display: flex;
  }
`;export{v as component};
