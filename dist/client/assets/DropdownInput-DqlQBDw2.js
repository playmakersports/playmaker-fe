import{r as l,j as r}from"./main-DdFHfJsj.js";import{a as p}from"./styled-components.browser.esm-B_lRBw7u.js";import{u as z,a as K,b as N,D as w,h as T,f as U,o as L}from"./container-CvJi3BRQ.js";import{F as c}from"./common-p2nbeD7y.js";import{I as W}from"./InputWrapper-3IDnfKjB.js";import{I as q}from"./Wrapper-woxNXEhf.js";import{C as B}from"./Check-CjNx6COD.js";import{D as H}from"./DownArrow-Biwl0eI3.js";function te(j){const{title:u,required:O=!1,information:D,value:a,onChange:k,options:d,placeholder:f,description:m,optionsTitle:v,disabled:x=!1,error:g=!1,size:h="medium"}=j,[s,o]=l.useState(!1),y=l.useRef(null),i=l.useRef([]),{refs:b,floatingStyles:C,middlewareData:I,context:S}=z({placement:"bottom-start",open:s,onOpenChange:o,middleware:[T(),U(),L(8)]}),$=K(S),{getFloatingProps:E}=N([$]);l.useEffect(()=>{const e=t=>{s&&y.current&&!y.current.contains(t.target)&&o(!1)};document.addEventListener("mouseup",e)},[s]);const R=e=>{e.key==="Escape"&&o(!1),e.key==="ArrowDown"&&(e.preventDefault(),i.current[0].focus())},A=(e,t)=>{e.key==="Escape"&&o(!1),e.key==="ArrowDown"?(e.preventDefault(),i.current[t+1]?.focus()):e.key==="ArrowUp"&&(e.preventDefault(),i.current[t-1]?.focus())},F=()=>{x||o(e=>!e)};return r.jsxs(W,{title:u,required:O,information:D,children:[r.jsxs(P,{type:"button","aria-label":`,${u??""} ${f} 옵션 열기. 현재 선택된 항목 - ${d.find(e=>e.value===a)?.name??"없음"}`,role:"menu",ref:b.setReference,"data-error":g,"aria-disabled":x,"data-state":a===""?"placeholder":"","data-size":h,onClick:F,onKeyUp:R,children:[r.jsx("span",{className:"current-value",children:a===""?f:d.find(e=>e.value===a)?.name}),r.jsx(J,{children:r.jsx(H,{})})]}),m&&r.jsx(V,{"data-error":g,children:m}),s&&r.jsxs(w.Box,{ref:b.setFloating,"data-size":h,style:{...C,visibility:I.hide?.referenceHidden?"hidden":"visible"},...E(),children:[v&&r.jsx(G,{children:v}),r.jsx(w.List,{children:d.map((e,t)=>r.jsxs("button",{"aria-label":e.name,role:"option","aria-selected":e.value===a,type:"button",onClick:()=>{k(e.value),o(!1)},"data-active":e.value===a,ref:n=>{n&&(i.current[t]=n)},onKeyUp:n=>A(n,t),children:[r.jsx("span",{className:"option-name",children:e.name}),r.jsx("span",{className:"icon",children:r.jsx(B,{})})]},e.value))})]})]})}const P=p(q).attrs({as:"button"})`
  cursor: pointer;
  min-width: max-content;
  color: var(--gray700);
  background-color: var(--white);
  ${c.body4("regular")};

  span.current-value {
    user-select: none;
    flex: 1;
    font-variant-numeric: tabular-nums;
  }
  & svg {
    fill: var(--gray700);
  }
  &[data-state="placeholder"] {
    color: var(--gray400);
  }
  &[aria-disabled="true"] {
    cursor: not-allowed;
    color: var(--gray300);
    border-color: var(--gray200);
    background-color: var(--gray50);
    & svg {
      fill: var(--gray300);
    }
  }
  &[data-error="true"] {
    border-color: var(--red500);
  }
  &[data-size="small"] {
    ${c.body4("medium")};
    width: fit-content;
    height: 32px;
    padding: 0 8px 0 12px;
    gap: 4px;
  }
`,V=p.p`
  margin-top: 8px;
  ${c.caption1("regular")};
  color: var(--gray400);

  &[data-error="true"] {
    color: var(--red500);
  }
`,G=p.div`
  margin: 0 -4px;
  padding: 10px 14px;
  width: calc(100% + 8px);
  border-bottom: 1px solid var(--gray200);
  text-align: left;
  ${c.body4("semibold")}
`,J=p.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  & > svg {
    width: 100%;
    height: auto;
    fill: var(--gray700);
  }
`;export{te as D};
