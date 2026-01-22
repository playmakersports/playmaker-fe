import{R as p,j as i}from"./main-DdFHfJsj.js";import{a as s}from"./styled-components.browser.esm-B_lRBw7u.js";import{F as a}from"./common-p2nbeD7y.js";import{M as h}from"./Minus-qzPRJPNy.js";import{C as g}from"./Check-CjNx6COD.js";const w=p.forwardRef(({size:e="large",color:o="default",showIcon:l=!1,text:r,...t},n)=>{const d=e==="large"?{width:"44px",height:"24px"}:{width:"36px",height:"20px"},c=e==="large"?"18px":"14px";return i.jsxs(v,{children:[i.jsxs("div",{style:{position:"relative",display:"inline-block",order:r&&r.first?2:1,...d},children:[i.jsx(m,{type:"checkbox",ref:n,$color:o==="error",size:e,...t}),i.jsx("div",{className:"switch-wrapper",children:i.jsx("div",{className:"switch-circle",style:{width:c,height:c},children:i.jsxs(x,{"data-show":l,children:[i.jsx(h,{className:"switch-icon minus"}),i.jsx(g,{className:"switch-icon check"})]})})})]}),r&&i.jsxs("div",{className:"text-container","data-size":r.textOnlySize??e,style:{order:r.first?1:2},children:[i.jsx("label",{className:"title",htmlFor:t.id,children:r.title}),r.description&&i.jsx("p",{className:"description",children:r.description})]})]})});w.displayName="ToggleSwitchCheckBox";const v=s.div`
  display: flex;
  justify-content: space-between;
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
  div.text-container[data-size="large"] {
    label.title {
      ${a.body3("medium")};
    }
    p.description {
      ${a.body4("regular")};
      white-space: pre-wrap;
    }
  }
  div.text-container[data-size="medium"] {
    label.title {
      ${a.body4("medium")};
    }
    p.description {
      ${a.caption1("regular")};
      white-space: pre-wrap;
    }
  }
`,m=s.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;

  & + div.switch-wrapper {
    display: flex;
    padding: 3px;
    width: 100%;
    height: 100%;
    align-items: center;
    border-radius: 999px;
    border: none;
    background-color: var(--gray200);
    transition: background-color 0.25s ease-in-out;

    div.switch-circle {
      background-color: var(--white);
      border-radius: 50%;
      box-shadow: var(--shadow-xs);
    }
    svg.switch-icon {
      width: 100%;
      height: 100%;
      fill: transparent;
    }

    svg.switch-icon.minus {
      display: block;
      fill: var(--gray400);
    }
    svg.switch-icon.check {
      display: none;
    }
  }
  &:focus:not(:checked) + div.switch-wrapper {
    outline: 2px solid var(--gray300);
  }
  &:focus + div.switch-wrapper {
    outline: 2px solid ${({$color:e})=>e?"var(--red300)":"var(--primary300)"};
  }
  &:checked + div.switch-wrapper {
    justify-content: flex-end;
    background-color: ${({$color:e})=>e?"var(--red500)":"var(--primary500)"};
    svg {
      fill: var(--white);
    }

    svg.switch-icon.minus {
      display: none;
    }
    svg.switch-icon.check {
      display: block;
      fill: ${({$color:e})=>e?"var(--red500)":"var(--primary500)"};
    }
  }

  &:disabled + div.switch-wrapper {
    background-color: var(--gray200);
    div.switch-circle {
      background-color: var(--gray100);
    }
  }
  &:checked:disabled + div.switch-wrapper {
    svg {
      fill: var(--gray200);
    }
  }
`,x=s.span`
  align-items: center;
  justify-content: center;

  &[data-show="false"] {
    display: none;
  }
  &[data-show="true"] {
    display: flex;
  }
`;export{w as T};
