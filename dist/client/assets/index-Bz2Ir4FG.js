import{r as f,j as o}from"./main-DdFHfJsj.js";import{c as x}from"./clsx-B-dksMZM.js";import{a as g}from"./styled-components.browser.esm-B_lRBw7u.js";import{u as k}from"./query-pooYvCqP.js";import{u as S}from"./useToast-DPQsexqB.js";import{a as q}from"./index.esm-BMv8ZhrT.js";import{u as L}from"./useHeader-ycHOJC5z.js";import{f as p}from"./fonts.css-GssQgTP4.js";import{a as m,s as V}from"./stage.css-DV7lXouU.js";import{L as N}from"./Loading-CRmktZOH.js";import{C as w}from"./Chip-COwdLxrV.js";import{c as C}from"./authToken-Qay5e6Bk.js";import"./common-p2nbeD7y.js";import"./AlertFilled-005YqH1n.js";import"./Close20-CLpDEKFn.js";import"./vanilla-extract-css.browser.esm-WxGd34AK.js";function U(){const l=S();L({title:"활동 지역",options:{titleAlign:"center"},subActions:{name:"저장",action:()=>{}}});const{setValue:c,watch:a}=q(),{data:t,isLoading:n}=k(`${C.CODES}/activeArea`),[i,v]=f.useState({key:"11",name:"서울특별시"}),s=a("location")??[],h=s.map(e=>({key:e,name:A(t,e)?.text})),[u,y]=f.useState(h),b=(e,r)=>{if(u.length>=2){l.trigger("위치는 최대 2개까지 선택 가능합니다.",{type:"error"});return}if(s.includes(e)){l.trigger("이미 선택한 지역입니다.",{type:"error"});return}y(d=>[...d,{key:e,name:`${i.name} ${r}`}]),c("location",[...s,e])},j=e=>{y(r=>r.filter(d=>d.key!==e)),c("location",s.filter(r=>r!==e))};return o.jsx("div",{className:m.container,children:o.jsxs("section",{className:V,style:{overflow:"hidden",padding:"40px var(--global-lr-padding) var(--safe-bottom-navigation)"},children:[o.jsxs("div",{style:{marginBottom:"-4px"},children:[o.jsx("h3",{className:m.title,children:"플레이어님의 활동 위치를 선택해주세요"}),o.jsx("p",{className:m.description,children:"주로 운동하시는 지역을 최대 2군데 선택해주세요"})]}),n?o.jsx("div",{style:{marginTop:"32px"},children:o.jsx(N,{})}):o.jsxs(K,{children:[o.jsx("div",{className:"location-selected",children:u.map(e=>o.jsx(w,{type:"primary",fillType:"light",size:"large",closeAction:()=>{j(e.key)},children:e.name},e.key))}),o.jsxs($,{className:p.body3.regular,children:[o.jsx("ul",{className:"parent",children:t?.map(e=>{const r=e.parent;return o.jsx("li",{onClick:()=>v({key:r.codeSequenceKey,name:r.codeValue}),className:x({active:i.key===r.codeSequenceKey,[p.body3.semibold]:i.key===r.codeSequenceKey}),role:"button",children:r.codeValue},r.codeSequenceKey)})}),o.jsx("ul",{className:"child",children:t?.find(e=>e.parent.codeSequenceKey===i.key)?.child?.map(e=>o.jsx("li",{role:"button",className:x(s.includes(e.codeSequenceKey)&&{active:!0,[p.body3.semibold]:!0}),onClick:()=>b(e.codeSequenceKey,e.codeValue),children:e.codeValue},`${e.codeSequenceKey}+${e.codeValue}`))})]})]})]})})}const K=g.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 -16px;
  border-bottom: 1px solid var(--gray200);
  div.location-selected {
    display: inline-flex;
    padding: 0 16px;
    gap: 12px;
  }
`,$=g.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--gray200);

  & > ul {
    flex: 1;

    &.parent {
      background-color: var(--gray50);
      border-right: 1px solid var(--gray200);
      & li {
        color: var(--gray400);
        &.active {
          background-color: var(--white);
          color: var(--primary500);
          &:active {
            background-color: var(--white);
          }
        }
        &:active {
          background-color: var(--gray100);
        }
      }
    }

    &.child {
      overflow-y: auto;
      & li {
        color: var(--gray500);
        &.active {
          color: var(--primary500);
        }
        &:active {
          background-color: var(--primary50);
        }
      }
    }
  }
  & li {
    cursor: pointer;
    user-select: none;
    padding: 12px 0;
    text-align: center;
  }
`;function A(l,c){const a=l?.find(n=>n.child.some(i=>i.codeSequenceKey===c));if(!a)return null;const t=a?.child?.find(n=>n.codeSequenceKey===c);return{parent:a.parent.codeValue,child:t?.codeValue,text:`${a.parent.codeValue} ${t?.codeValue}`}}export{U as component};
