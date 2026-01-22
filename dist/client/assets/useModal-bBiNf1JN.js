import{r as a,j as o}from"./main-DdFHfJsj.js";import{f as B}from"./fonts.css-GssQgTP4.js";import{a as d,l as D}from"./styled-components.browser.esm-B_lRBw7u.js";import{B as F}from"./Button-BOrbA0iP.js";import{F as A}from"./common-p2nbeD7y.js";import{P}from"./Portal-CMVPEwGZ.js";import{d as R}from"./container.css-CS477Ypa.js";let S=0;const E=300;function O(r){const{disabledDimOut:T=!1,setShow:w,draggable:s=!1,onClose:i,children:c,header:x,expanded:g,buttons:y}=r,b=a.useRef(null),[u,M]=a.useState(!1),[e,n]=a.useState(!1),[l,f]=a.useState(0),[h,j]=a.useState(0),[$,k]=a.useState(!1),v=()=>{n(!1),i&&i(),setTimeout(()=>{w(!1)},E)};a.useEffect(()=>(M(!0),S++,S===1&&(document.body.style.overflow="hidden",document.body.style.touchAction="none"),()=>{S--,M(!1),S===0&&(document.body.style.overflow="auto",document.body.style.touchAction="auto")}),[]),a.useEffect(()=>{if(u){const t=requestAnimationFrame(()=>{n(!0)});return()=>cancelAnimationFrame(t)}},[u]);const Y={onTouchStart:t=>{t.stopPropagation(),s&&(f(t.touches[0].clientY),k(!0))},onTouchMove:t=>{if(t.stopPropagation(),!s||!$)return;const m=t.touches[0].clientY-l,p=t.target.closest(".scrollable-container");p&&!(p.scrollTop===0)&&m>0||m>0&&j(m)},onTouchEnd:t=>{if(t.stopPropagation(),!s)return;k(!1);const m=t.changedTouches[0].clientY-l,p=t.target.closest(".scrollable-container");let C=!0;p&&(C=p.scrollTop<-30),m>70&&C?(v(),j(-window.innerHeight/2)):j(0)}};return a.useEffect(()=>{b.current&&b.current.focus()},[]),o.jsxs(o.Fragment,{children:[o.jsx(H,{$isShow:e,onClick:T?()=>{}:v}),o.jsxs(_,{onContextMenu:t=>t.preventDefault(),style:{userSelect:$&&h?"none":"auto",transition:$?"none":`all ${E}ms`,transform:s&&h>0?`translate3d(-50%, calc(${e?0:"100%"}% + ${Math.ceil(h)}px), 0)`:`translate3d(-50%, ${e?0:"100%"}, 0)`},$isShow:e,$expanded:!!g,role:"dialog","aria-modal":"true",tabIndex:-1,"aria-labelledby":"BottomModalHeader",...s==="all"?Y:{},children:[(g||!!s)&&o.jsx(z,{...s==="bar"?Y:{}}),o.jsxs(W,{children:[x&&o.jsx(G,{id:"BottomModalHeader",children:x}),o.jsx("div",{children:typeof c=="function"?c(v):c})]}),y&&o.jsx(q,{children:y.map(t=>o.jsx(F,{type:"button",size:"large",mode:t.mode,fillType:t.fillType,disabled:t.disabled,onClick:()=>{t.onClick(v)},flex:t.flex??1,children:t.name},t.name))})]})]})}const N=D`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,H=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  /* z-index: 999; */
  opacity: ${({$isShow:r})=>r?1:0};
  transition: opacity 0.2s;
`,z=d.div`
  display: flex;
  justify-content: center;
  margin: -16px 0 0;
  padding: 12px 0 20px;

  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 6px;
    background-color: var(--gray200);
    border-radius: 999px;
  }
`,G=d.header`
  color: var(--gray700);
  ${A.body3("semibold")};
  opacity: 0.5;
  transform: translateY(20px);
  animation: ${N} 0.2s ease-in-out forwards;
  animation-delay: 0.1s;
`,W=d.div`
  margin: 0 0 20px;
  max-height: 75dvh;
  color: inherit;
  ${A.caption1("regular")};

  & > div {
    opacity: 0.5;
    transform: translateY(max(5%, 16px));
    animation: ${N} 0.2s ease-in-out forwards;
    animation-delay: 0.165s;
  }
`,_=d.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px var(--global-lr-padding) calc(28px + env(safe-area-inset-bottom) / 2);
  width: var(--mobile-max-width);
  left: 50%;
  bottom: 0;
  min-height: ${({$expanded:r})=>r?"90vh":"auto"};
  /* z-index: 1000; */
  background: var(--background-light);
  border-radius: 16px 16px 0 0;
  opacity: ${({$isShow:r})=>r?1:0};
  transform-origin: center left;
  box-shadow: var(--shadow-md);
  will-change: transform;
`,q=d.div`
  display: flex;
  gap: 8px;
`;function ae(r={}){const T=a.useId(),w=a.useRef(0),[s,i]=a.useState([]),[c,x]=a.useState({}),[g,y]=a.useState(""),b=()=>{const e=r.key??`${T}-${w.current++}`;return i(n=>[...n,{key:e,visible:!0}]),y(e),e},u=e=>{i(n=>n.map(l=>l.key===e?{...l,visible:!1}:l)),setTimeout(()=>{i(n=>n.filter(l=>l.key!==e))},250)};return{ModalComponents:a.useCallback(e=>o.jsx(o.Fragment,{children:s.map(({key:n,visible:l})=>l?o.jsx(P,{children:o.jsx(O,{draggable:e.draggable,disabledDimOut:e.disabledDimOut,header:e.title&&o.jsxs("div",{className:R,style:{marginBottom:"32px"},children:[o.jsx("h4",{className:B.body2.semibold,style:{color:"var(--gray900)"},children:e.title}),e.description&&o.jsx("span",{className:B.body4.regular,style:{color:"var(--gray400)"},children:e.description})]}),onClose:e.onClose,setShow:f=>{f||u(n)},buttons:e.buttons,expanded:e.expanded,children:typeof e.children=="function"?e.children({closeModal:()=>u(n),setState:f=>x(h=>({...h,[n]:f}))}):e.children})},n):null)}),[s]),showModal:b,modalState:c,key:g}}export{ae as u};
