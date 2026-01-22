import{r,j as s}from"./main-DdFHfJsj.js";import{a as n}from"./styled-components.browser.esm-B_lRBw7u.js";import{F as i}from"./common-p2nbeD7y.js";function L(g){const{color:c="gray",type:a,size:d="medium",items:p,nowValue:y,initialValue:v,sameWidth:x=!1}=g,o=r.useRef(null),[u,z]=r.useState(v??p[0].value),[R,m]=r.useState(0),[k,b]=r.useState(0),[w,S]=r.useState(!1),C=(e,t)=>{z(e),b(t.currentTarget.offsetLeft),y(e),m(t.currentTarget.clientWidth),t.currentTarget.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"})};r.useLayoutEffect(()=>{if(S(!0),o.current){const e=o.current.querySelector('[data-active="true"]');e&&(b(e.getBoundingClientRect().left-o.current.getBoundingClientRect().left),m(e.clientWidth))}},[p,u]);const f={gray:{color:"var(--gray700)",background:"var(--gray50)"},primary:{color:"var(--primary500)",background:"var(--primary50)"}},l={line:{color:e=>({background:"transparent",color:e.color,borderBottom:`2px solid ${e.color}`}),size:{large:{borderRadius:"0",padding:"10px 16px"},medium:{borderRadius:"0",padding:"10px 14px"},small:{borderRadius:"0",padding:"8px 12px"}}},light:{color:e=>({background:e.background,color:e.color}),size:{large:{borderRadius:"8px",padding:"10px 16px"},medium:{borderRadius:"8px",padding:"10px 14px"},small:{borderRadius:"8px",padding:"8px 12px"}}},filled:{color:e=>{const t=e.color.slice(0,10)==="var(--gray";return{backgroundColor:t?"var(--white)":e.color,color:t?e.color:"var(--white)"}},size:{large:{borderRadius:"8px",padding:"6px 16px"},medium:{borderRadius:"8px",padding:"6px 14px"},small:{borderRadius:"8px",padding:"5px 12px"}}}};return s.jsx($,{"data-size":d,style:{borderBottom:a==="line"?"1px solid var(--gray200)":"none",padding:a==="line"?`0 ${g.padding}px`:a==="filled"?"4px":"0",backgroundColor:a==="filled"?"var(--gray50)":"transparent",borderRadius:a==="filled"?"8px":"0"},children:s.jsxs(T,{ref:o,role:"tablist",children:[s.jsx(B,{style:{opacity:w?1:0,width:`${R}px`,transform:`translate3d(${k}px, 0, 0)`,boxShadow:a==="filled"&&c==="gray"?"var(--shadow-xs)":"none",flex:x?1:"",...l[a].size[d],...l[a].color(f[c])},"aria-disabled":"true","aria-hidden":"true","data-size":d,"data-type":a}),p.map(e=>s.jsx(h,{role:"tab",style:{...l[a].size[d],color:u===e.value?l[a].color(f[c]).color:"var(--gray500)",flex:x?1:""},"data-size":d,"data-active":u===e.value,"data-disabled":e.disabled,onClick:t=>{C(e.value,t)},children:e.name},e.value))]})})}const $=n.div`
  &[data-size="large"] {
    height: 44px;
  }
  &[data-size="medium"] {
    height: 40px;
  }
  &[data-size="small"] {
    height: 36px;
  }
`,T=n.ul`
  position: relative;
  display: flex;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`,h=n.li`
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s;
  user-select: none;

  &[data-size="small"] {
    ${i.body4("regular")};
    &[data-active="true"] {
      ${i.body4("medium")};
    }
  }
  &[data-size="medium"] {
    ${i.body4("regular")};
    &[data-active="true"] {
      ${i.body4("medium")};
    }
  }
  &[data-size="large"] {
    ${i.body3("regular")};
    &[data-active="true"] {
      ${i.body3("medium")};
    }
  }
  &[data-disabled="true"] {
    pointer-events: none;
    opacity: 0.45;
  }
  transition: color 0.2s;
`,B=n(h).attrs({as:"div"})`
  position: absolute;
  margin: 0;
  left: 0;
  transition: all 0.3s;
  will-change: transform;

  &[data-size="large"] {
    height: 44px;
    &[data-type="filled"] {
      height: 36px;
    }
  }
  &[data-size="medium"] {
    height: 40px;
    &[data-type="filled"] {
      height: 32px;
    }
  }
  &[data-size="small"] {
    height: 36px;
    &[data-type="filled"] {
      height: 28px;
    }
  }
`;export{L as M};
