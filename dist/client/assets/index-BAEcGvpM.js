import{r as P,u as k,x as A,j as e}from"./main-DdFHfJsj.js";import{c as r}from"./clsx-B-dksMZM.js";import{a as n}from"./styled-components.browser.esm-B_lRBw7u.js";import{u as M}from"./useHeader-ycHOJC5z.js";import{u as D}from"./PopupProvider-COaEMj1P.js";import{a as L,f as q,g as z}from"./team-CntK-dsS.js";import{f as t}from"./fonts.css-GssQgTP4.js";import{h as B,l as i,k as m,p as h,m as E,i as F,r as u}from"./container.css-CS477Ypa.js";import{F as j}from"./common-p2nbeD7y.js";import{I as f}from"./SelectInput-4xvXY9NK.js";import{B as y}from"./Button-BOrbA0iP.js";import{a as G,p as H,b as g,c as J,d as S}from"./players.css-BeXwhklU.js";import{C as $}from"./Check-CjNx6COD.js";import{P as U}from"./People-DrJ6VCIV.js";import{R as O}from"./RightArrow-dwaHOcVo.js";import{a as V}from"./index.esm-BMv8ZhrT.js";import{u as W}from"./useToast-DPQsexqB.js";import{f as K}from"./format-BUIW76fP.js";import"./authToken-Qay5e6Bk.js";import"./query-pooYvCqP.js";import"./vanilla-extract-css.browser.esm-WxGd34AK.js";import"./AlertFilled-005YqH1n.js";import"./Close20-CLpDEKFn.js";import"./differenceInCalendarDays-YNEZ6MTG.js";import"./toDate-qOSwr3PX.js";function Re(){M({title:"가입 신청 목록"});const v=P.useRef(null),c=W(),d=D(),b=k(),{teamId:l}=A.useParams(),{register:N,watch:R,setValue:p}=V(),s=R("players")??[],{data:o,refetch:x}=L(l),{mutate:w}=q(l,typeof s=="string"?[s]:s),{mutate:I}=z(l,typeof s=="string"?[s]:s),T=async()=>{s.length>0&&await d?.confirm("가입 승인 시점부터 활동이 가능합니다.",{title:"가입을 승인하시겠어요?",showIcon:!0,color:"primary",buttonText:{yes:"승인"}})&&w({data:void 0},{onSuccess:()=>{c.trigger("가입을 승인했어요"),p("players",[]),x()}})},C=async()=>{s.length>0&&await d?.confirm("가입 거절 이후 7일간 재신청이 불가능합니다.",{title:"가입을 거절하시겠어요?",showIcon:!0,color:"red",buttonText:{yes:"거절"}})&&I({data:void 0},{onSuccess:()=>{c.trigger("가입을 거절했어요"),p("players",[]),x()}})};return e.jsxs("section",{className:B,children:[e.jsxs("div",{className:r(h,i,E),style:{height:"52px",padding:"10px 0"},children:[s.length>0?e.jsxs("div",{className:r(m,i,t.body4.regular),children:[e.jsx($,{width:20,height:20,fill:"var(--gray700)"}),e.jsxs("p",{children:[e.jsxs("span",{className:t.body4.medium,style:{color:"var(--primary500)"},children:[s.length,"건"]})," ","선택"]})]}):e.jsxs("div",{className:r(m,i,t.body4.regular),children:[e.jsx(U,{width:20,height:20,fill:"var(--gray700)"}),o&&o?.length>0?e.jsxs("p",{children:[e.jsxs("span",{className:t.body4.medium,style:{color:"var(--primary500)"},children:[o?.length,"건"]}),"의 가입 신청이 있어요!"]}):e.jsx("p",{children:"가입 신청자 없음"})]}),e.jsxs("div",{className:h,children:[e.jsx(y,{type:"button",disabled:s.length===0,mode:"red",fillType:"light",size:"xsmall",onClick:C,children:"거절"}),e.jsx(y,{type:"button",disabled:s.length===0,fillType:"default",size:"xsmall",onClick:T,children:"승인"})]})]}),e.jsx("div",{className:F,children:e.jsxs("div",{className:r(J,S),children:[e.jsxs("div",{className:r(u,i,G),children:[e.jsx(f,{id:"allCheckedBox",size:"MEDIUM"}),"프로필"]}),e.jsx("div",{className:H,"data-header":"true"}),e.jsx("div",{className:r(m,i,g),children:"경력"})]})}),e.jsx("ul",{ref:v,children:o?.map(a=>e.jsxs(Q,{children:[e.jsxs("div",{className:"item-top",children:[e.jsx(f,{size:"MEDIUM",className:"player-select",value:a.memberId,...N("players")}),e.jsxs("div",{className:i,style:{flex:1},children:[e.jsxs("div",{className:u,style:{flex:1},children:[e.jsx(X,{}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[e.jsxs(Y,{onClick:()=>b.navigate({to:`/p/${a.memberId}`}),children:[e.jsx("p",{className:"player-name",children:a.memberName}),e.jsx(O,{width:20,height:20,fill:"var(--gray700)"})]}),e.jsxs("p",{className:t.caption1.medium,style:{color:"var(--gray400)"},children:[K(a.requestDate,"yyyy.MM.dd HH:mm")," 신청"]})]})]}),e.jsx("div",{className:r(t.body4.medium,g),children:"10년"})]})]}),e.jsx("div",{className:"item-intro",children:a.message})]},a.memberId))})]})}const Q=n.li`
  user-select: none;
  padding: 20px 0;
  border-bottom: 1px solid var(--gray200);
  div.item-top {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  div.item-intro {
    ${j.body4("regular")};
    margin-top: 16px;
    margin-left: 32px;
    background-color: var(--gray50);
    border-radius: 8px;
    padding: 10px 12px;
    color: var(--gray600);
  }
`,X=n.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: var(--gray100);
`,Y=n.div`
  ${j.body3("medium")};
  display: flex;
  align-items: center;
`;export{Re as component};
