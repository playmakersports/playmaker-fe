import{r as o,j as e}from"./main-DdFHfJsj.js";import{a as p}from"./styled-components.browser.esm-B_lRBw7u.js";import{u as k,h as y,f as v,o as j,a as b,b as O,c as S,D as _}from"./container-CvJi3BRQ.js";import{F as D}from"./common-p2nbeD7y.js";import{I}from"./Wrapper-woxNXEhf.js";import{D as M}from"./DownArrow-Biwl0eI3.js";import{f as F}from"./container.css-B1jfIjJ-.js";const N="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2851'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2851)'%3e%3cmask%20id='mask1_129_2851'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_129_2851)'%3e%3cpath%20d='M12%2019.2692C11.5875%2019.2692%2011.2344%2019.1223%2010.9408%2018.8285C10.6469%2018.5348%2010.5%2018.1817%2010.5%2017.7692C10.5%2017.3567%2010.6469%2017.0036%2010.9408%2016.7097C11.2344%2016.4161%2011.5875%2016.2692%2012%2016.2692C12.4125%2016.2692%2012.7656%2016.4161%2013.0592%2016.7097C13.3531%2017.0036%2013.5%2017.3567%2013.5%2017.7692C13.5%2018.1817%2013.3531%2018.5348%2013.0592%2018.8285C12.7656%2019.1223%2012.4125%2019.2692%2012%2019.2692ZM12%2013.5C11.5875%2013.5%2011.2344%2013.3531%2010.9408%2013.0592C10.6469%2012.7656%2010.5%2012.4125%2010.5%2012C10.5%2011.5875%2010.6469%2011.2344%2010.9408%2010.9407C11.2344%2010.6469%2011.5875%2010.5%2012%2010.5C12.4125%2010.5%2012.7656%2010.6469%2013.0592%2010.9407C13.3531%2011.2344%2013.5%2011.5875%2013.5%2012C13.5%2012.4125%2013.3531%2012.7656%2013.0592%2013.0592C12.7656%2013.3531%2012.4125%2013.5%2012%2013.5ZM12%207.73074C11.5875%207.73074%2011.2344%207.58391%2010.9408%207.29024C10.6469%206.99641%2010.5%206.64324%2010.5%206.23074C10.5%205.81824%2010.6469%205.46516%2010.9408%205.17149C11.2344%204.87766%2011.5875%204.73074%2012%204.73074C12.4125%204.73074%2012.7656%204.87766%2013.0592%205.17149C13.3531%205.46516%2013.5%205.81824%2013.5%206.23074C13.5%206.64324%2013.3531%206.99641%2013.0592%207.29024C12.7656%207.58391%2012.4125%207.73074%2012%207.73074Z'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";function L(d){const{title:r,icon:i=!1,options:h,children:t,maxHeight:f}=d,[c,l]=o.useState(!1);o.useRef(null);const{refs:a,context:m}=k({placement:"bottom-end",open:c,onOpenChange:l,middleware:[y(),v(),j(8)]}),C=b(m),{getFloatingProps:u}=O([C]),{isMounted:g,styles:x}=S(m,{duration:200,common:{right:0,transformOrigin:"top right"},initial:{opacity:0,transform:"scale(0.7) translate(-5px, -5px)"},open:{opacity:1,transform:"scale(1) translate(0,0)"},close:{opacity:0,transform:"scale(0.8) translate(-5px, -5px)"}}),n=()=>{l(s=>!s)};return e.jsxs(R,{"data-icon":i,children:[i?e.jsx("div",{ref:a.setReference,role:"button","aria-label":r,onClick:n,style:{cursor:"pointer",width:24,height:24,display:"flex",justifyContent:"center",alignItems:"center",transform:c?"scale(0.9)":"none",transition:"transform 0.25s ease-in-out"},children:e.jsx(N,{width:24,height:24,fill:"var(--gray700)"})}):t&&o.isValidElement(t)?o.cloneElement(t,{ref:a.setReference,onClick:s=>{n(),t.props.onClick&&t.props.onClick(s)}}):e.jsxs(A,{ref:a.setReference,onClick:n,children:[e.jsx("span",{className:"current-value",children:r}),e.jsx(M,{})]}),g&&e.jsx("div",{ref:a.setFloating,className:F.Box,style:{...x,maxHeight:f},...u(),children:e.jsx(_.List,{className:"scrollable-container",style:{overflow:"inherit"},children:h.map((s,w)=>e.jsx("button",{type:"button",onClick:s.action,"data-divided":s.divided,children:e.jsx("span",{className:"option-name",children:s.name})},w))})})]})}const R=p.div`
  position: relative;

  &[data-icon="true"] {
    width: 24px;
    height: 24px;
  }
`,A=p(I)`
  cursor: pointer;
  color: var(--gray700);
  background-color: var(--white);
  ${D.body4("regular")};

  span.current-value {
    user-select: none;
    flex: 1;
  }
  & svg {
    fill: var(--gray700);
  }
`;export{L as D,N as M};
