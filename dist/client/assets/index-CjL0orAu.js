import{r as h,u as S,w as F,j as e}from"./main-DdFHfJsj.js";import{c as a}from"./clsx-B-dksMZM.js";import{a as c}from"./styled-components.browser.esm-B_lRBw7u.js";import{u as L}from"./useHeader-ycHOJC5z.js";import{u as A}from"./useModal-bBiNf1JN.js";import{f as r}from"./fonts.css-GssQgTP4.js";import{h as D,l as i,k as o,p as x,m as E,i as z,r as y,o as G,v as u}from"./container.css-CS477Ypa.js";import{F as N}from"./common-p2nbeD7y.js";import{I as b}from"./SelectInput-4xvXY9NK.js";import{B as $}from"./Button-BOrbA0iP.js";import{a as H,p as U,b as f,c as W,d as J}from"./players.css-BeXwhklU.js";import{C as O}from"./Check-CjNx6COD.js";import{P as q}from"./People-DrJ6VCIV.js";import{R as K}from"./RightArrow-dwaHOcVo.js";import{M as Q}from"./Minus-qzPRJPNy.js";import{P as V}from"./Plus-CvtX-big.js";import{c as j}from"./color.css-0MNcmfUt.js";import{N as X}from"./NumberFlowInput-BWRuvBSG.js";import"./useToast-DPQsexqB.js";import"./Portal-CMVPEwGZ.js";import"./vanilla-extract-css.browser.esm-WxGd34AK.js";import"./NumberFlow-client-48rw3j0J-CFpaRRO2.js";import"./container.css-B1jfIjJ-.js";import"./AlertFilled-005YqH1n.js";import"./Close20-CLpDEKFn.js";function we(){const C=h.useRef(null),I=S(),[g,m]=h.useState(1),[n,p]=h.useState([]),{teamId:ee}=F.useParams();L({title:"기수 설정"});const{showModal:k,ModalComponents:w}=A(),l=[{teamId:"123",memberId:"123",memberName:"홍길동",batch:23}],R=l.length>0&&l.every(s=>n.includes(s.memberId)),M=(s,t)=>{p(d=>t?[...d,s]:d.filter(T=>T!==s))},B=s=>{if(s){const t=l.map(d=>d.memberId);p(t)}else p([])},P=()=>{k()};return e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:D,children:[e.jsxs("div",{className:a(x,i,E),style:{height:"52px",padding:"10px 0"},children:[n.length>0?e.jsxs("div",{className:a(o,i,r.body4.regular),children:[e.jsx(O,{width:20,height:20,fill:"var(--gray700)"}),e.jsxs("p",{children:[e.jsxs("span",{className:r.body4.medium,style:{color:"var(--primary500)"},children:[n.length,"명"]})," ","선택"]})]}):e.jsxs("div",{className:a(o,i,r.body4.regular),children:[e.jsx(q,{width:20,height:20,fill:"var(--gray700)"}),e.jsxs("p",{children:[e.jsxs("span",{className:r.body4.medium,style:{color:"var(--primary500)"},children:[l.length,"명"]}),"의 팀원이 있어요"]})]}),e.jsx("div",{className:x,children:e.jsx($,{type:"button",fillType:"default",size:"xsmall",onClick:P,children:"기수 설정"})})]}),e.jsx("div",{className:z,children:e.jsxs("div",{className:a(W,J),children:[e.jsxs("div",{className:a(y,i,H),children:[e.jsx(b,{id:"allCheckedBox",size:"MEDIUM",checked:R,onChange:s=>B(s.target.checked)}),"프로필"]}),e.jsx("div",{className:U,"data-header":"true"}),e.jsx("div",{className:a(o,i,f),children:"경력"})]})}),e.jsx("ul",{ref:C,children:l.map(s=>e.jsx(Y,{children:e.jsxs("div",{className:"item-top",children:[e.jsx(b,{size:"MEDIUM",className:"player-select",checked:n.includes(s.memberId),onChange:t=>M(s.memberId,t.target.checked)}),e.jsxs("div",{className:i,style:{flex:1},children:[e.jsxs("div",{className:y,style:{flex:1},children:[e.jsx(Z,{}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[e.jsx("p",{className:a(r.caption1.semibold,"position",j.primary500,o),children:"23기 회장"}),e.jsxs(_,{onClick:()=>I.navigate({to:`/p/${s.memberId}`}),children:[e.jsx("p",{className:"player-name",children:s.memberName}),e.jsx(K,{width:20,height:20,fill:"var(--gray700)"})]})]})]}),e.jsx("div",{className:a(r.body4.medium,f),children:"10년"})]})]})},s.memberId))})]}),e.jsx(w,{draggable:"all",title:"기수 설정",description:"선택한 회원들의 기수를 입력해 주세요.",buttons:[{mode:"primary",name:"확인",onClick:s=>{s()}}],children:e.jsxs("div",{className:a(x,u),style:{marginBottom:"12px"},children:[e.jsx(v,{type:"button",disabled:g<=1,onClick:()=>m(s=>s>1?s-1:1),children:e.jsx(Q,{})}),e.jsx("div",{className:G,style:{width:"55%"},children:e.jsxs("div",{className:a(r.head5.medium,u,o),children:[e.jsx("div",{className:u,style:{minWidth:"42px"},children:e.jsx(X,{min:1,width:"flexible",value:g,onChange:s=>m(+s.target.value)})}),e.jsx("span",{className:a(r.body1.regular,j.gray500),children:"기"})]})}),e.jsx(v,{type:"button",onClick:()=>m(s=>s+1),children:e.jsx(V,{})})]})})]})}const Y=c.li`
  user-select: none;
  padding: 20px 0;
  border-bottom: 1px solid var(--gray200);
  div.item-top {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  div.item-intro {
    ${N.body4("regular")};
    margin-top: 16px;
    margin-left: 32px;
    background-color: var(--gray50);
    border-radius: 8px;
    padding: 10px 12px;
    color: var(--gray600);
  }
`,Z=c.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: var(--gray100);
`,_=c.div`
  ${N.body3("medium")};
  display: flex;
  align-items: center;
`,v=c.button`
  margin: 0 2px;
  width: 36px;
  height: 36px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--gray50);
  border: 1px solid var(--gray200);
  svg {
    width: 100%;
    height: 100%;
    fill: var(--gray700);
  }
  &:active {
    background-color: var(--gray200);
    transition: scale 0.2s ease-in-out;
    svg {
      scale: 0.9;
    }
  }
  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
    &:active {
      background-color: var(--gray50);
    }
  }
`;export{we as component};
