import{r,j as a}from"./main-DdFHfJsj.js";import{a as o}from"./styled-components.browser.esm-B_lRBw7u.js";import{S as j,a as w}from"./swiper-B84kPD2B.js";import{u as z}from"./useToast-DPQsexqB.js";import{u as B}from"./useModal-bBiNf1JN.js";import{I as F}from"./Wrapper-woxNXEhf.js";import{F as n}from"./common-p2nbeD7y.js";import{D as b}from"./DownArrow-Biwl0eI3.js";import{d as y}from"./differenceInYears-CkZj1vKM.js";import{g as L}from"./getYear-BVTrOhcD.js";function X({getYearRange:N,defaultValue:x,title:m}){const{trigger:f}=z(),{showModal:u,ModalComponents:k}=B(),v=L(new Date)-14,[t,I]=r.useState(x?.[0]||0),[i,M]=r.useState(x?.[1]||0),[p,Y]=r.useState([]),[g,$]=r.useState([]),C=r.useRef(null),D=r.useRef(null),l=r.useCallback((e,s)=>e>s?Array.from({length:e-s+1},(E,h)=>e-h):Array.from({length:s-e+1},(E,h)=>e+h),[]);r.useEffect(()=>{Y(l(v,1940))},[l]),r.useEffect(()=>{$(l(v,t||1940))},[t,l]);const A=e=>{if(t&&i){if(t>i){f("연장자는 연소자보다 나이가 많아야 합니다.",{type:"warning"});return}N([t,i]),e()}else f("출생연도를 모두 선택해주세요.",{type:"warning"})},[c,R]=r.useState(!1);return r.useEffect(()=>{const e=setInterval(()=>{R(s=>!s)},3e3);return()=>{clearInterval(e)}},[]),a.jsxs(a.Fragment,{children:[a.jsxs(P,{children:[m&&a.jsx("div",{className:"input-title",children:m}),a.jsxs(T,{children:[a.jsxs(S,{onClick:u,children:[t?a.jsxs("div",{className:"selected-value",children:[t,"년생"]}):a.jsx("div",{className:"placeholder",children:"연장자 출생연도"}),a.jsx("i",{className:"arrow-icon",children:a.jsx(b,{})})]}),a.jsx("div",{className:"separator"}),a.jsxs(S,{onClick:u,children:[i?a.jsxs("div",{className:"selected-value",children:[i,"년생"]}):a.jsx("div",{className:"placeholder",children:"연소자 출생연도"}),a.jsx("i",{className:"arrow-icon",children:a.jsx(b,{})})]})]})]}),a.jsx(k,{title:"나이 제한",description:"출생연도로 팀 가입을 제한할 수 있어요.",buttons:[{mode:"primary",name:"저장",onClick:A}],children:a.jsxs(W,{children:[a.jsx("div",{className:"background-selected",children:"~"}),a.jsx(j,{direction:"vertical",freeMode:!0,slidesPerView:5,centeredSlides:!0,onSwiper:e=>C.current=e,onSlideChange:e=>I(p[e.activeIndex]),initialSlide:p.findIndex(e=>e===t)||0,style:{flex:1},children:p.map(e=>a.jsx(w,{children:t===e?a.jsxs(d,{children:[a.jsxs("span",{className:"age-year","data-switch":c,children:[e,"년생"]}),a.jsxs("span",{className:"age-info","data-switch":!c,children:[y(new Date,new Date(`${e}-01-01`))+1,"세"]})]}):a.jsx(d,{children:a.jsxs("span",{className:"age-year",children:[e,"년생"]})})},`min-${e}`))}),a.jsx(j,{direction:"vertical",freeMode:!0,slidesPerView:5,centeredSlides:!0,onSwiper:e=>D.current=e,onSlideChange:e=>M(g[e.activeIndex]),initialSlide:g.findIndex(e=>e===i)||0,style:{flex:1},children:g.map(e=>a.jsx(w,{children:i===e?a.jsxs(d,{children:[a.jsxs("span",{className:"age-year","data-switch":c,children:[e,"년생"]}),a.jsxs("span",{className:"age-info","data-switch":!c,children:[y(new Date,new Date(`${e}-01-01`))+1,"세"]})]}):a.jsx(d,{children:a.jsxs("span",{className:"age-year",children:[e,"년생"]})})},`max-${e}`))})]})})]})}const P=o.div`
  .input-title {
    font-size: 1.4rem;
    margin-bottom: 4px;
    padding: 0 10px;
    font-weight: 500;
    color: var(--gray700);
    line-height: 2.4rem;
  }
`,T=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div.separator {
    width: 24px;
    height: 1px;
    background-color: var(--gray400);
  }
`,S=o(F)`
  user-select: none;
  display: flex;
  justify-content: space-between;

  div.selected-value {
    ${n.body4("regular")};
  }
  div.placeholder {
    ${n.body4("regular")};
    color: var(--gray400);
  }
  i.arrow-icon {
    display: flex;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
      fill: var(--gray700);
    }
  }
`,W=o.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 0 12px;
  height: 300px;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 32px;
    left: 0;
    z-index: 2;
  }

  &::before {
    top: 0;
    background: linear-gradient(to bottom, var(--background-light), rgba(var(--background-light-rgb), 0));
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top, var(--background-light), rgba(var(--background-light-rgb), 0));
  }

  div.background-selected {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: var(--primary50);
    z-index: 1;
    border-radius: 8px;
    transform: translateY(-50%);
    opacity: 0.65;
    ${n.head5("medium")};
    color: var(--primary600);
  }
`,d=o.div`
  user-select: none;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas: "overlap";

  padding: 8px 0;
  width: 100%;
  height: 100%;
  text-align: center;
  ${n.body3("regular")};
  color: var(--gray500);
  letter-spacing: -0.1px;
  transition: color 0.3s ease, font-size 0.3s ease;

  span.age-year {
    grid-area: overlap;
  }
  span.age-info {
    grid-area: overlap;
    display: flex;
    justify-content: center;
  }
  .swiper-slide-active & {
    ${n.body1("semibold")};
    color: var(--primary600);

    span {
      transition: opacity 0.3s ease;
    }
    span[data-switch="true"] {
      opacity: 1;
    }
    span[data-switch="false"] {
      opacity: 0;
    }
  }
`;export{X as B};
