import{j as t}from"./main-DdFHfJsj.js";import{a as l}from"./styled-components.browser.esm-B_lRBw7u.js";import{F as o}from"./common-p2nbeD7y.js";function k(r){const{fillType:i="default",mode:c="primary",children:d,fullWidth:p,type:s,flex:g,disabled:u=!1,onClick:b,icon:e,size:a="medium"}=r,h=!d&&e;return t.jsx(v,{type:s??"button",onClick:b,flex:g,"data-fill-type":i,mode:f[c][i],$fullWidth:p,disabled:u,$fontStyle:n[a].font,style:{padding:h?n[a].onlyIconPadding:n[a].padding,height:n[a].height,borderRadius:a==="xlarge"?"10px":"8px"},children:t.jsxs("span",{children:[e&&t.jsx(y,{$iconSize:n[a].iconSize,children:e}),d]})})}const v=l.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({flex:r})=>r?`flex: ${r}`:""};
  width: ${({$fullWidth:r})=>r?"100%":"auto"};
  border: ${({mode:r})=>`1px solid ${r.border}`};
  background-color: ${({mode:r})=>r.background};
  color: ${({mode:r})=>r.color};
  white-space: nowrap;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  transition: all 0.2s;
  will-change: outline;
  ${({$fontStyle:r})=>r};

  &:disabled {
    cursor: not-allowed;
    &[data-fill-type="default"] {
      background-color: var(--gray300);
      color: var(--gray50);
      border-color: transparent;
    }
    &[data-fill-type="light"] {
      background-color: var(--gray100);
      color: var(--gray300);
      border-color: transparent;
    }
    &[data-fill-type="outline"] {
      background-color: var(--white);
      color: var(--gray300);
      border-color: var(--gray200);
    }
  }
  &:active {
    &[data-fill-type="outline"] {
      background-color: ${({mode:r})=>r.border.replace(/(\d+)/,"50")};
    }
  }
  &:active > span {
    transform: scale(0.95);
    transition: all 0.25s;
  }

  & > span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    svg {
      width: 100%;
      height: auto;
      fill: ${({mode:r})=>r.color};
    }
  }
`,y=l.i`
  width: ${({$iconSize:r})=>r};
  height: ${({$iconSize:r})=>r};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: auto;
    fill: currentColor;
  }
`,n={xsmall:{font:o.caption1("medium"),padding:"8px 12px",height:"32px",iconSize:"20px",onlyIconPadding:"6px"},small:{font:o.body4("medium"),padding:"8px 12px",height:"36px",iconSize:"20px",onlyIconPadding:"8px"},medium:{font:o.body4("medium"),padding:"10px 16px",height:"40px",iconSize:"20px",onlyIconPadding:"10px"},large:{font:o.body3("medium"),padding:"10px 16px",height:"44px",iconSize:"24px",onlyIconPadding:"10px"},xlarge:{font:o.body3("medium"),padding:"12px 18px",height:"48px",iconSize:"24px",onlyIconPadding:"12px"}},f={primary:{default:{background:"var(--primary500)",color:"var(--white)",border:"transparent"},light:{background:"var(--primary50)",color:"var(--primary600)",border:"transparent"},outline:{background:"transparent",color:"var(--primary600)",border:"var(--primary200)"}},gray:{default:{background:"var(--gray500)",color:"var(--white)",border:"transparent"},light:{background:"var(--gray100)",color:"var(--gray600)",border:"transparent"},outline:{background:"var(--white)",color:"var(--gray600)",border:"var(--gray200)"}},success:{default:{background:"var(--success500)",color:"var(--white)",border:"transparent"},light:{background:"var(--success50)",color:"var(--success600)",border:"transparent"},outline:{background:"var(--white)",color:"var(--success600)",border:"var(--success200)"}},info:{default:{background:"var(--info500)",color:"var(--white)",border:"transparent"},light:{background:"var(--info50)",color:"var(--info600)",border:"transparent"},outline:{background:"var(--white)",color:"var(--info600)",border:"var(--info200)"}},warning:{default:{background:"var(--warning500)",color:"var(--white)",border:"transparent"},light:{background:"var(--warning50)",color:"var(--warning600)",border:"transparent"},outline:{background:"var(--white)",color:"var(--warning600)",border:"var(--warning200)"}},red:{default:{background:"var(--red500)",color:"var(--white)",border:"transparent"},light:{background:"var(--red50)",color:"var(--red600)",border:"transparent"},outline:{background:"var(--white)",color:"var(--red600)",border:"var(--red200)"}}};export{k as B};
