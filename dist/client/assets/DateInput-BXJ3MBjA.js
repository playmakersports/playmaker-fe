import{R as B,r as f,j as r}from"./main-DdFHfJsj.js";import{a as s}from"./styled-components.browser.esm-B_lRBw7u.js";import{u as H,s as z}from"./useCalendar-DuUYv0vV.js";import{u as X}from"./useModal-bBiNf1JN.js";import{u as W}from"./useToast-DPQsexqB.js";import{B as K}from"./BaseInput-QIE2P0lY.js";import{F as D,T as q}from"./common-p2nbeD7y.js";import{L as G,a as S,i as Y}from"./LeftArrow-9PDewAU0.js";import{R as J}from"./RightArrow-dwaHOcVo.js";import{g as Q}from"./getYear-BVTrOhcD.js";import{g as Z}from"./getMonth-CwBXqN0c.js";import{f as E}from"./format-BUIW76fP.js";import{i as L}from"./isToday-vGOu0Uy7.js";import{i as w}from"./isSameMonth-Cfx93zVn.js";import{i as ee}from"./isSameDay-DubJbAPm.js";import{a as te}from"./endOfMonth-mMwfNh2E.js";const k=s.input`
  width: 100%;
  color: var(--gray700);
  text-align: right;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  padding: 1px;
  &:focus {
    padding: 0px;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;s.input`
  appearance: none;
  width: 100%;
  height: 2px;

  background: ${({min:o,max:$,value:l})=>{const v=(l-o)/($-o)*100;return`linear-gradient(to right, var(--primary500) 0%, var(--primary500) ${v}%, var(--gray200) ${v}%, var(--gray200) 100%)`}};
  border-radius: 4px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background-color: var(--white);
    border: 1px solid var(--gray300);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--shadow-xs);
  }
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background-color: var(--white);
    border: 1px solid var(--gray300);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--shadow-xs);
  }
`;const ae=B.forwardRef((o,$)=>{const{defaultValue:l,title:v,error:V,description:A,value:p,pickType:i="EVERYDAY",plainStyle:O=!1,bottomSheetHeader:C,...u}=o,{ModalComponents:_,showModal:N}=X(),{trigger:y}=W(),{dayList:U,weekCalendarList:I,currentDate:d,setCurrentDate:g}=H(),n=f.useRef(null);f.useImperativeHandle($,()=>n.current);const[j,m]=f.useState(()=>p?+p.split("-")[0]:l?+l.split("-")[0]:+Q(new Date)),[b,h]=f.useState(()=>p?+p.split("-")[1]:l?+l.split("-")[1]:+Z(new Date)+1);f.useEffect(()=>{const e=p||l||n.current?.value;if(e){const[t,a,x]=e.split("-");g(new Date(`${t}/${a}/${x}`)),m(+t),h(+a)}},[p,g]);const c=e=>{if(e){const[t,a,x]=e.split("/");g(new Date(`${t}/${a}/${x}`)),m(+t),h(+a)}else g(new Date),m(new Date().getFullYear()),h(new Date().getMonth()+1)},T=e=>{const t=e==="PREV"?z(d,1):te(d,1);e==="NEXT"&&i==="ONLY_PAST"&&w(t,new Date)&&S(t)||e==="PREV"&&i==="ONLY_FUTURE"&&w(t,new Date)&&Y(t)?g(new Date):g(t),m(t.getFullYear()),h(t.getMonth()+1)};return r.jsxs(r.Fragment,{children:[O?r.jsx("input",{type:"text",name:u.name,ref:n,onClick:()=>N(),readOnly:!0,...u}):r.jsx(K,{ref:n,type:"text",name:u.name,title:v,error:V,description:A,onButtonWrapClick:()=>N(),...u}),r.jsx(_,{title:C?.title,description:C?.description,draggable:"all",buttons:[{mode:"primary",disabled:!(p||l||n.current&&n.current.value),name:p||l||n.current&&n.current.value?`${E(d,"yyyy년 M월 d일")}로 설정`:"날짜를 선택하세요",onClick:e=>{if(n.current){const t=E(d,"yyyy-MM-dd");n.current.value=t,u.onChange&&u.onChange({target:{name:o.name,value:t}})}n.current?.focus(),e()}}],children:r.jsxs(re,{children:[r.jsxs(ne,{children:[r.jsxs(oe,{children:[r.jsxs("div",{className:"year",children:[r.jsx(k,{type:"number","aria-label":"연도 입력",pattern:"[0-9]*",inputMode:"numeric",value:j,maxLength:4,onFocus:e=>e.target.select(),onChange:e=>m(+e.target.value.slice(0,4)),onBlur:e=>{const t=Number(e.target.value);if(e.target.value!==""&&t>1900&&t<2999){const a=new Date(t,b-1,1);i==="ONLY_PAST"&&a>new Date?(c(),y("미래로 날짜를 설정할 수 없어요.",{type:"error"})):i==="ONLY_FUTURE"&&a<new Date?(c(),y("과거로 날짜를 설정할 수 없어요.",{type:"error"})):c(`${t}/${b}/01`)}else c()}}),"년"]}),r.jsxs("div",{className:"month",children:[r.jsx(k,{type:"number","aria-label":"월 입력",pattern:"[0-9]*",inputMode:"numeric",style:{paddingRight:"1px",width:b<10?"12px":"20px",textAlign:b<10?"right":"left"},value:b,onFocus:e=>e.target.select(),onChange:e=>h(+e.target.value),onBlur:e=>{const t=Number(e.target.value);if(e.target.value!==""&&t>0&&t<13){const a=new Date(j,t-1,d.getDate());i==="ONLY_PAST"&&a>new Date?(c(),y("미래로 날짜를 설정할 수 없어요.",{type:"error"})):i==="ONLY_FUTURE"&&a<new Date&&!L(a)?(c(),y("과거로 날짜를 설정할 수 없어요.",{type:"error"})):c(`${j}/${t}/${d.getDate()}`)}else c()}}),"월"]})]}),r.jsxs(ie,{children:[r.jsx("button",{type:"button",disabled:i==="ONLY_FUTURE"&&w(d,new Date),onClick:()=>T("PREV"),children:r.jsx(G,{})}),r.jsx("button",{type:"button",disabled:i==="ONLY_PAST"&&w(d,new Date),onClick:()=>T("NEXT"),children:r.jsx(J,{})})]})]}),r.jsxs(se,{children:[r.jsx(F,{children:U.map(e=>r.jsx(le,{children:e},e))}),I.map((e,t)=>r.jsx(F,{children:e.map(a=>r.jsx(de,{type:"button",disabled:i==="ONLY_PAST"&&S(a.date)||i==="ONLY_FUTURE"&&Y(a.date)&&!L(a.date),$isCurrentMonth:!(a.nextMonth||a.previousMonth),$isHoliday:a.holiday.isHoliday,className:ee(a.date,d)&&n.current&&n.current.value?"current-date":"","aria-label":`${a.date.getMonth()+1}월 ${a.displayValue}일`,onClick:()=>{const x=a.date.getFullYear(),R=a.date.getMonth()+1,P=a.date.getDate();g(a.date),m(x),h(R);const M=`${x}/${String(R).padStart(2,"0")}/${String(P).padStart(2,"0")}`;n.current&&(n.current.value=M.replaceAll("/","-")),u.onChange&&u.onChange({target:{value:M.replaceAll("/","-")}}),c(M)},children:a.displayValue},a.date.toString()))},t))]})]})})]})});ae.displayName="DateInput";const re=s.div`
  position: relative;
  color: var(--gray700);
`,ne=s.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
`,oe=s.div`
  display: flex;
  gap: 8px;
  ${D.body2("semibold")};

  ${k} {
    padding: 0;
    text-align: left;
    max-width: 46px;
    border-radius: 0;
    ${D.body2("semibold")};
  }
`,ie=s.div`
  display: flex;
  gap: 12px;
  button {
    width: 28px;
    height: 28px;
    border-radius: 4px;

    svg {
      width: 100%;
      height: 100%;
    }
    &:not(:disabled) {
      ${q("var(--gray100)",{activeRange:2})}
    }
    &:disabled {
      cursor: not-allowed;
      svg {
        fill: var(--gray300);
      }
    }
  }
`,se=s.div`
  display: flex;
  margin-bottom: 20px; // Bottom Sheet default 20px + Calendar 20px = 40px
  flex-direction: column;
`,F=s.div`
  --cal-gap: 4px;
  display: flex;
  justify-content: space-between;
  height: calc((min(100vw, var(--mobile-max-width)) - 32px - (var(--cal-gap) * 7)) / 7);
  gap: var(--cal-gap);
  ${D.body2("medium")};
`,le=s.div`
  flex: 1;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--gray400);
  ${D.body4("medium")};
`,de=s.button`
  position: relative;
  flex: 1;
  text-align: center;
  border: 1px solid transparent;
  color: ${({$isCurrentMonth:o})=>o?"var(--gray700)":"var(--gray300)"};
  /* color: ${({$isHoliday:o})=>o?"var(--red400)":"var(--gray600)"}; */
  opacity: ${({$isCurrentMonth:o})=>o?1:.5};
  border-radius: 10px;

  &[aria-invalid] {
    visibility: hidden;
  }
  &:hover {
    background-color: var(--gray50);
  }
  &:focus {
    background-color: var(--gray200);
  }
  &:active {
    background-color: var(--gray100);
  }
  &:disabled {
    cursor: not-allowed;
    color: var(--gray300);
    &:hover,
    &:focus,
    &:active {
    }
    background-color: transparent;
    transform: scale(1);
  }
  &.current-date {
    background-color: var(--main);
    transform: scale(1.03);
    color: #fff;
    font-weight: 600; // semibold
  }
`;export{ae as D,k as a};
