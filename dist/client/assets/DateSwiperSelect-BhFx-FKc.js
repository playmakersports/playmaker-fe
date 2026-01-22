import{R as B,r as o,j as t}from"./main-DdFHfJsj.js";import{a as L}from"./styled-components.browser.esm-B_lRBw7u.js";import{S as Y,a as M}from"./swiper-B84kPD2B.js";import{u as H}from"./useModal-bBiNf1JN.js";import{B as W}from"./BaseInput-QIE2P0lY.js";import{F as N}from"./common-p2nbeD7y.js";import{t as g}from"./toDate-qOSwr3PX.js";import{c as R,f as I}from"./format-BUIW76fP.js";import{g as k,i as U}from"./isSameMonth-Cfx93zVn.js";function q(r,s){const a=g(r),d=g(s);return a.getFullYear()===d.getFullYear()}function G(r,s){const a=g(r),d=a.getFullYear(),m=a.getDate(),p=R(r,0);p.setFullYear(d,s,15),p.setHours(0,0,0,0);const x=k(p);return a.setMonth(s,Math.min(m,x)),a}function J(r,s){const a=g(r);return a.setDate(s),a}function K(r,s){const a=g(r);return isNaN(+a)?R(r,NaN):(a.setFullYear(s),a)}const Q=B.forwardRef((r,s)=>{const{children:a,defaultValue:d,title:m,error:p,description:x,value:Z,pickType:h="EVERYDAY",plainStyle:_=!1,bottomSheetHeader:C,...c}=r,{ModalComponents:V,showModal:y}=H(),[b,v]=o.useState([]),[j,E]=o.useState([1,2,3,4,5,6,7,8,9,10,11,12]),[w,D]=o.useState([]),i=o.useRef(null);o.useImperativeHandle(s,()=>i.current);const[n,f]=o.useState(new Date);o.useEffect(()=>{i.current&&i.current.value&&f(new Date(i.current.value)),d&&f(new Date(d))},[]);const l=o.useCallback((e,u)=>e>u?Array.from({length:e-u+1},(z,S)=>e-S):Array.from({length:u-e+1},(z,S)=>e+S),[]),$=()=>{h==="ONLY_PAST"&&(q(n,new Date)?(E(l(1,new Date().getMonth()+1)),U(n,new Date)&&D(l(1,new Date().getDate()))):(E(l(1,12)),D(l(1,k(n)))))};o.useEffect(()=>{if(h==="ONLY_PAST"){v(l(new Date().getFullYear(),1940));return}if(h==="ONLY_FUTURE"){v(l(new Date().getFullYear(),new Date().getFullYear()+50));return}h==="EVERYDAY"&&v(l(1940,new Date().getFullYear()+50))},[l]);const A=e=>{f(K(n,b[e]))},O=e=>{f(G(n,j[e]-1))},P=e=>{f(J(n,w[e]))};o.useEffect(()=>{D(l(1,k(n))),$()},[n]);const T=e=>{if(i.current){const u=I(n,"yyyy-MM-dd");i.current.value=u,c.onChange&&c.onChange({target:{name:r.name,value:u}})}i.current?.focus(),e()};return t.jsxs(t.Fragment,{children:[!a&&(_?t.jsx("input",{type:"text",name:c.name,ref:i,onClick:()=>y(),readOnly:!0,...c}):t.jsx(W,{ref:i,type:"text",name:c.name,title:m,error:p,description:x,onButtonWrapClick:()=>y(),...c})),a&&t.jsxs(t.Fragment,{children:[a(y),t.jsx("input",{type:"text",name:c.name,ref:i,readOnly:!0,style:{display:"none",width:"1px",height:"1px",position:"fixed",top:"-100%",left:"-100%"},...c})]}),t.jsx(V,{title:C?.title,description:C?.description,draggable:"bar",buttons:[{mode:"primary",disabled:!(n||d||i.current&&i.current.value),name:`${I(n,"yyyy년 M월 d일")}로 설정`,onClick:T}],children:t.jsxs(X,{children:[t.jsxs("div",{className:"background-selected",children:[t.jsx("span",{children:"년"}),t.jsx("span",{children:"월"}),t.jsx("span",{children:"일"})]}),t.jsx(Y,{direction:"vertical",freeMode:!0,slidesPerView:5,centeredSlides:!0,onSlideChange:e=>A(e.activeIndex),initialSlide:b.findIndex(e=>e===Number(n.getFullYear()))||0,style:{flex:1},children:b.map(e=>t.jsx(M,{children:t.jsx(F,{children:t.jsx("span",{className:"age-year",children:e})})},`min-${e}`))}),t.jsx(Y,{direction:"vertical",freeMode:!0,slidesPerView:5,centeredSlides:!0,onSlideChange:e=>O(e.activeIndex),initialSlide:j.findIndex(e=>e===Number(n.getMonth()+1))||0,style:{flex:1},children:j.map(e=>t.jsx(M,{children:t.jsx(F,{children:t.jsx("span",{className:"age-year",children:e})})},`min-${e}`))}),t.jsx(Y,{direction:"vertical",freeMode:!0,slidesPerView:5,centeredSlides:!0,onSlideChange:e=>P(e.activeIndex),initialSlide:w.findIndex(e=>e===Number(n.getDate()))||0,style:{flex:1},children:w.map(e=>t.jsx(M,{children:t.jsx(F,{children:t.jsx("span",{className:"age-year",children:e})})},`min-${e}`))})]})})]})});Q.displayName="DateSwiperSelect";const X=L.div`
  position: relative;
  user-select: none;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 0 12px;
  height: 300px;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 32px;
    left: 0;
    z-index: 2;
  }

  &::before {
    top: 0;
    background: linear-gradient(to bottom, var(--background-light), rgba(var(--background-light-rgb), 0));
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top, var(--background-light), rgba(var(--background-light-rgb), 0));
  }

  div.background-selected {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgba(var(--main-rgb), 0.1);
    z-index: 1;
    border-radius: 8px;
    transform: translateY(-50%);
    ${N.body2("medium")};
    color: var(--primary600);
    & > span {
      flex: 1;
      padding-left: 24px;
      text-align: center;
      &:first-child {
        padding-left: 60px;
      }
    }
  }
`,F=L.div`
  user-select: none;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas: "overlap";

  padding: 8px 0;
  width: 100%;
  height: 100%;
  text-align: center;
  ${N.body3("regular")};
  color: var(--gray500);
  letter-spacing: -0.1px;
  transition: color 0.3s ease, font-size 0.3s ease;

  span.age-year {
    grid-area: overlap;
  }
  span.age-info {
    grid-area: overlap;
    display: flex;
    justify-content: center;
  }
  .swiper-slide-active & {
    ${N.body1("semibold")};
    color: var(--primary600);

    span {
      transition: opacity 0.3s ease;
    }
    span[data-switch="true"] {
      opacity: 1;
    }
    span[data-switch="false"] {
      opacity: 0;
    }
  }
`;export{Q as D};
