import{j as l}from"./main-DdFHfJsj.js";import{a as s}from"./styled-components.browser.esm-B_lRBw7u.js";import{F as i}from"./common-p2nbeD7y.js";function f(r){const{type:c,size:a="medium",fillType:t="light",icon:n,nSquare:e=!1,children:d}=r,g=e?{width:o[a].nSquareSize,height:o[a].nSquareSize}:{};return l.jsxs(p,{style:{padding:e?`${o[a].padding.split(" ")[0]} 0`:o[a].padding,...g},$fonts:o[a].fonts,$colors:u[c][t],children:[n&&l.jsx("span",{className:"icon",style:{width:a==="small"?"12px":"14px",height:a==="small"?"12px":"14px"},children:n}),d]})}const p=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: ${({$colors:r})=>r.background};
  color: ${({$colors:r})=>r.color};
  border-radius: 6px;
  ${({$fonts:r})=>r};

  span.icon {
    display: inline-flex;
    align-items: center;
    & > svg {
      width: 100%;
      height: auto;
    }
  }
  svg {
    fill: ${({$colors:r})=>r.color} !important;
  }
`,o={small:{fonts:i.caption1("medium"),padding:"1px 8px",nSquareSize:"20px"},medium:{fonts:i.caption1("medium"),padding:"3px 8px",nSquareSize:"24px"},large:{fonts:i.body4("medium"),padding:"4px 10px",nSquareSize:"28px"}},u={gray:{filled:{background:"var(--gray700)",color:"var(--white)"},light:{background:"var(--gray100)",color:"var(--gray700)"}},primary:{filled:{background:"var(--main)",color:"var(--white)"},light:{background:"var(--primary50)",color:"var(--primary600)"}},success:{filled:{background:"var(--success500)",color:"var(--white)"},light:{background:"var(--success50)",color:"var(--success600)"}},info:{filled:{background:"var(--info500)",color:"var(--white)"},light:{background:"var(--info50)",color:"var(--info600)"}},warning:{filled:{background:"var(--warning500)",color:"var(--white)"},light:{background:"var(--warning50)",color:"var(--warning600)"}},red:{filled:{background:"var(--red500)",color:"var(--white)"},light:{background:"var(--red50)",color:"var(--red600)"}},purple:{filled:{background:"var(--purple500)",color:"var(--white)"},light:{background:"var(--purple50)",color:"var(--purple600)"}},magenta:{filled:{background:"var(--magenta500)",color:"var(--white)"},light:{background:"var(--magenta50)",color:"var(--magenta600)"}}};export{f as B};
