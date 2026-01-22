import{R as p,j as e}from"./main-DdFHfJsj.js";import{a as s}from"./styled-components.browser.esm-B_lRBw7u.js";import{F as d}from"./common-p2nbeD7y.js";import{C as x}from"./Check-CjNx6COD.js";const u=p.forwardRef(({size:r="LARGE",color:l="default",text:a,...c},t)=>{const o=r==="LARGE"?"24px":"20px";return e.jsxs(h,{children:[e.jsxs("div",{style:{position:"relative",display:"inline-block",width:o,height:o},children:[e.jsx(b,{type:"checkbox",ref:t,$color:l==="error",size:r,...c}),e.jsx("i",{style:{width:o,height:o},children:e.jsx(x,{})})]}),a&&e.jsxs("div",{className:"text-container","data-size":r,children:[e.jsx("label",{className:"title",htmlFor:c.id,children:a.title}),a.description&&e.jsx("p",{className:"description",children:a.description})]})]})});u.displayName="InputCheckBox";const g=p.forwardRef(({size:r="LARGE",color:l="default",text:a,buttonType:c=!1,...t},o)=>{const n=r==="LARGE"?"24px":"20px";return e.jsxs(h,{children:[e.jsxs("div",{style:{position:"relative",display:"inline-block",width:n,height:n},children:[e.jsx(y,{type:"radio","data-error":l==="error",ref:o,...t}),e.jsx(i,{})]}),a&&e.jsxs("div",{className:"text-container","data-size":r,children:[e.jsx("label",{className:"title",htmlFor:t.id,children:a.title}),a.description&&e.jsx("p",{className:"description",children:a.description})]})]})});g.displayName="InputRadio";const h=s.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  label.title {
    cursor: pointer;
    user-select: none;
    padding-right: 6px;
    color: var(--gray700);
  }
  p.description {
    margin-top: 4px;
    color: var(--gray400);
  }
  div.text-container[data-size="LARGE"] {
    label.title {
      ${d.body3("medium")};
    }
    p.description {
      ${d.body4("regular")};
    }
  }
  div.text-container[data-size="MEDIUM"] {
    label.title {
      ${d.body4("medium")};
    }
    p.description {
      ${d.caption1("regular")};
    }
  }
`,b=s.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;

  & + i {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({size:r})=>r==="LARGE"?"8px":"6px"};
    border: 1px solid ${({$color:r})=>r?"var(--red200)":"var(--gray200)"};
    background-color: #fff;
    svg {
      display: none;
      width: 100%;
      height: 100%;
    }
  }
  &:focus:not(:checked) + i {
    outline: 2px solid ${({$color:r})=>r?"var(--red300)":"var(--gray300)"};
  }
  &:focus + i {
    outline: 2px solid ${({$color:r})=>r?"var(--red300)":"var(--primary300)"};
  }
  &:checked + i {
    border: 1px solid transparent;
    background-color: ${({$color:r})=>r?"var(--red500)":"var(--primary500)"};
    svg {
      display: block;
      fill: var(--white);
    }
  }

  &:checked:disabled + i {
    border: 1px solid transparent;
    background-color: var(--gray200);
    svg {
      display: block;
      fill: var(--gray100);
    }
  }
  &:disabled + i {
    background-color: var(--gray50);
    border: 1px solid var(--gray200);
  }
`,i=s.div``,y=s.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;

  &[data-error="true"] {
    & + ${i} {
      border: 1px solid var(--red200);
    }
    &:checked + ${i} {
      background-color: var(--red500);
    }
    &:focus:checked + ${i} {
      outline: 3px solid var(--red100);
    }
  }

  & + ${i} {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid var(--gray200);
    background-color: transparent;
  }
  &:focus:not(:checked) + ${i} {
    outline: 3px solid var(--gray100);
  }
  &:focus:checked + ${i} {
    outline: 3px solid var(--primary100);
  }

  &:checked:disabled + ${i} {
    background-color: var(--gray200);
  }
  &:disabled + ${i} {
    background-color: var(--gray50);
  }
  &:checked + ${i} {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary500);
    border: 1px solid transparent;

    &::after {
      content: "";
      width: 8px;
      height: 8px;
      background-color: var(--white);
      border-radius: 50%;
    }
  }
`;export{u as I,g as a};
