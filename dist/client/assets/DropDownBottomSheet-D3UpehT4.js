import{r as v,j as e}from"./main-DdFHfJsj.js";import{a as t}from"./styled-components.browser.esm-B_lRBw7u.js";import{u as y}from"./useModal-bBiNf1JN.js";import{T as w,F as o,B as j}from"./common-p2nbeD7y.js";import{D as c}from"./DownArrow-Biwl0eI3.js";import{C as b}from"./Check-CjNx6COD.js";const V=p=>{const{mode:x="default",title:l,information:S,options:i,defaultValue:u,getCurrentValue:g,placeholder:s}=p,{showModal:d,ModalComponents:m}=y(),[a,h]=v.useState(u??""),f=r=>{g(r),h(r)};return e.jsxs(e.Fragment,{children:[e.jsxs(C,{children:[l&&e.jsx("p",{className:"input-title",children:l}),x==="default"?e.jsxs(N,{onClick:d,children:[a?e.jsx("p",{className:"dropdown-current-value",children:i?.find(r=>r.value===a)?.name}):e.jsx("p",{className:"dropdown-placeholder",children:s}),e.jsx("i",{className:"arrow-icon",children:e.jsx(c,{})})]}):e.jsxs(T,{onClick:d,children:[a?e.jsx("div",{className:"dropdown-current-value",children:i?.find(r=>r.value===a)?.name}):e.jsx("div",{className:"dropdown-placeholder",children:s??"선택"}),e.jsx("i",{className:"arrow-icon",children:e.jsx(c,{})})]})]}),e.jsx(m,{draggable:"all",children:({closeModal:r})=>e.jsx(k,{children:i.map(n=>e.jsxs("label",{children:[n.name,e.jsx("input",{type:"radio",name:"dropdown-option",defaultChecked:a===n.value,value:n.value,onClick:()=>{f(n.value),r()}}),e.jsx(b,{})]},n.value))})})]})},C=t.div`
  .input-title {
    font-size: 1.4rem;
    margin-bottom: 4px;
    padding: 0 10px;
    font-weight: 500;
    color: var(--gray700);
    line-height: 2.4rem;
  }

  .input-information {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    padding: 0 8px;
    font-size: 1.2rem;
    color: var(--gray700);
    gap: 4px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`,N=t.div`
  cursor: pointer;
  ${w("var(--gray100)",{activeRange:3})}
  ${o.body4("regular")};
  font-weight: 400;
  user-select: none;
  display: flex;
  padding: 0 2px 0 6px;
  align-items: center;
  justify-content: space-between;
  color: var(--gray500);
  gap: 8px;
  border-radius: 4px;

  i.arrow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 24px;
    svg {
      width: 20px;
      height: 22px;
      fill: var(--gray500);
    }
  }
`,T=t.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 10px 12px;
  border: 1px solid var(--gray200);
  user-select: none;
  display: flex;
  justify-content: space-between;

  div.dropdown-current-value {
    user-select: none;
    ${o.body4("regular")}
  }
  div.dropdown-placeholder {
    user-select: none;
    ${o.body4("regular")};
    font-weight: 400;
    color: var(--gray400);
  }
  i.arrow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray700);
    svg {
      width: 20px;
      height: 20px;
    }
  }
`,k=t.div`
  display: flex;
  margin: 0 -6px;
  flex-direction: column;
  gap: 4px;

  label {
    user-select: none !important;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    color: var(--gray700);
    ${o.body3("regular")};
    ${j("var(--gray100)")};
    svg {
      fill: transparent;
    }
  }
  i,
  input[type="radio"] {
    display: none;
  }
  label:has(input:checked) {
    background-color: var(--gray50);
    svg {
      width: 24px;
      height: 24px;
      fill: var(--primary500);
    }
  }
`;export{V as D};
