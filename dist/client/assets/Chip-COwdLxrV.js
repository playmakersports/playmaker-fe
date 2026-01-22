import{j as e}from"./main-DdFHfJsj.js";import{F as o}from"./common-p2nbeD7y.js";import{a as s}from"./styled-components.browser.esm-B_lRBw7u.js";import{C as p}from"./Close20-CLpDEKFn.js";function w(r){const{children:n,type:i="primary",size:t="medium",fillType:d="filled",disabled:l=!1,closeAction:a}=r,c=g=>{g.stopPropagation(),a&&a()};return e.jsxs(v,{"data-close":!!a,"data-disabled":l,$colors:b[i][d],$size:u[t],children:[n,a&&e.jsx(p,{onClick:c})]})}const v=s.span`
  display: inline-flex;
  min-width: max-content;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 6px;
  background-color: ${({$colors:r})=>r.background};
  color: ${({$colors:r})=>r.color};
  border: 1px solid ${({$colors:r})=>r.border};
  padding: ${({$size:r})=>`${r.paddingTB}px ${r.paddingLR}px`};
  ${({$size:r})=>r.fonts};

  &[data-close="true"] {
    padding-right: ${({$size:r})=>r.paddingLR-2}px;
  }
  &[data-disabled="true"] {
    background-color: var(--gray50);
    border-color: var(--gray200);
    color: var(--gray300);
    & > svg {
      fill: var(--gray300);
    }
  }

  & > svg {
    cursor: pointer;
    width: ${({$size:r})=>r.iconSize};
    height: ${({$size:r})=>r.iconSize};
    fill: ${({$colors:r})=>r.color};
  }
`,u={small:{fonts:o.caption1("medium"),paddingTB:1,paddingLR:6,iconSize:"14px"},medium:{fonts:o.caption1("medium"),paddingTB:3,paddingLR:8,iconSize:"16px"},large:{fonts:o.body4("medium"),paddingTB:4,paddingLR:8,iconSize:"20px"}},b={gray:{filled:{background:"var(--gray700)",color:"var(--white)",border:"transparent"},light:{background:"var(--gray100)",color:"var(--gray700)",border:"transparent"},outline:{background:"var(--white)",color:"var(--gray700)",border:"var(--gray200)"}},primary:{filled:{background:"var(--main)",color:"var(--white)",border:"transparent"},light:{background:"var(--primary50)",color:"var(--primary600)",border:"transparent"},outline:{background:"var(--white)",color:"var(--primary600)",border:"var(--primary300)"}},success:{filled:{background:"var(--success500)",color:"var(--white)",border:"transparent"},light:{background:"var(--success50)",color:"var(--success600)",border:"transparent"},outline:{background:"var(--white)",color:"var(--success600)",border:"var(--success300)"}},info:{filled:{background:"var(--info500)",color:"var(--white)",border:"transparent"},light:{background:"var(--info50)",color:"var(--info600)",border:"transparent"},outline:{background:"var(--white)",color:"var(--info600)",border:"var(--info200)"}},warning:{filled:{background:"var(--warning500)",color:"var(--white)",border:"transparent"},light:{background:"var(--warning50)",color:"var(--warning600)",border:"transparent"},outline:{background:"var(--white)",color:"var(--warning600)",border:"var(--warning300)"}},red:{filled:{background:"var(--red500)",color:"var(--white)",border:"transparent"},light:{background:"var(--red50)",color:"var(--red600)",border:"transparent"},outline:{background:"var(--white)",color:"var(--red600)",border:"var(--red200)"}},purple:{filled:{background:"var(--purple500)",color:"var(--white)",border:"transparent"},light:{background:"var(--purple50)",color:"var(--purple600)",border:"transparent"},outline:{background:"var(--white)",color:"var(--purple600)",border:"var(--purple200)"}},magenta:{filled:{background:"var(--magenta500)",color:"var(--white)",border:"transparent"},light:{background:"var(--magenta50)",color:"var(--magenta600)",border:"transparent"},outline:{background:"var(--white)",color:"var(--magenta600)",border:"var(--magenta200)"}}};export{w as C};
