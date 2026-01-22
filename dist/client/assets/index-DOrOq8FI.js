import{r as o,j as e,L as h}from"./main-DdFHfJsj.js";import{a as n}from"./styled-components.browser.esm-B_lRBw7u.js";import{c as r}from"./clsx-B-dksMZM.js";import{u as j}from"./useHeader-ycHOJC5z.js";import{u as g}from"./useStickyMoment-CFyp6R01.js";import{u as v}from"./useModal-bBiNf1JN.js";import{u as b}from"./PopupProvider-COaEMj1P.js";import{F as N}from"./common-p2nbeD7y.js";import{B as T}from"./Button-BOrbA0iP.js";import{f as t}from"./fonts.css-GssQgTP4.js";import{e as I,p as k,a as R,c as w,d as C}from"./players.css-BeXwhklU.js";import{r as A,l as s,z as L,k as S,m as l,a as P}from"./container.css-CS477Ypa.js";import{R as B}from"./RightArrow-dwaHOcVo.js";import{S as D}from"./Settings-Dwzf_Tbo.js";import"./Portal-CMVPEwGZ.js";import"./vanilla-extract-css.browser.esm-WxGd34AK.js";const M=[{playerId:2e3,applyDate:"2024-11-14",profileImg:"",name:"백종원",birth:"2000-03-20",univ:"서울과기대",certificated:!1,introduce:"팀에서 잘할 자신 있습니다. 꼭 뽑아주세요.",recentRank:{title:"2023 전국농구대회",rank:"1위"},activeTeam:[{teamName:"SPBABA",sports:"농구"}]},{playerId:7840,applyDate:"2024-11-13",profileImg:"",name:"안성재",birth:"1997-06-22",univ:"홍익대",certificated:!0,introduce:"팀에서 잘할 자신 있습니다. 꼭 뽑아주세요.",recentRank:{title:"2023 전국농구대회",rank:"1위"},activeTeam:[{teamName:"ATAT",sports:"미식축구"},{teamName:"달려라",sports:"러닝"}]},{playerId:2849,applyDate:"2024-11-12",profileImg:"",name:"김플메",birth:"1998-06-22",univ:"홍익대",certificated:!0,introduce:"팀에서 잘할 자신 있습니다. 꼭 뽑아주세요.",recentRank:{title:"2023 전국농구대회",rank:"1위"},activeTeam:[{teamName:"달려라",sports:"러닝"}]}];function ee(){const i=o.useRef(null),{ModalComponents:m,showModal:c}=v(),[d,p]=o.useState({playerId:null,playerName:null}),x=b();g(i),j({title:"권한 설정"});const u=M,f=({playerId:a,playerName:y})=>{p({playerId:a,playerName:y}),c()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:r(w,C),ref:i,children:[e.jsx("div",{className:r(A,s,I),children:"프로필"}),e.jsx("div",{className:k,"data-header":"true"}),e.jsx("div",{className:r(s,R),children:"이름"})]}),e.jsx("ul",{children:u.map(a=>e.jsx(F,{children:e.jsxs("div",{className:r(s),style:{flex:1},children:[e.jsxs("div",{className:L,style:{flex:1},children:[e.jsx(G,{}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[e.jsx("p",{className:t.caption1.semibold,children:"23기"}),e.jsxs(h,{to:`/p/${a.playerId}`,className:r(S,s),children:[e.jsx("p",{className:t.body3.medium,children:a.name}),e.jsx(B,{width:20,height:20,fill:"var(--gray700)"})]})]})]}),e.jsx(T,{type:"button",mode:"gray",size:"small",fillType:"outline",icon:e.jsx(D,{}),onClick:()=>{f({playerId:a.playerId,playerName:a.name})},children:"권한 변경"})]})},a.playerId))}),e.jsx(m,{title:"권한 변경",buttons:[{name:"취소",mode:"gray",fillType:"outline",onClick:a=>{a()}},{name:"저장",mode:"primary",fillType:"default",onClick:a=>{x?.confirm("",{title:`${d.playerName}님에게 권한을 부여합니다.`,buttonText:{yes:"네, 부여할게요",no:"아니요"},showIcon:!0}),a()}}],children:e.jsxs("div",{className:r(P,t.body4.regular),children:[e.jsx("div",{className:r(s,l),children:e.jsx("label",{children:"회장"})}),e.jsx("div",{className:r(s,l),children:e.jsx("label",{children:"부회장"})}),e.jsx("div",{className:r(s,l),children:e.jsx("label",{children:"운영진"})}),e.jsx("div",{className:r(s,l),children:e.jsx("label",{children:"팀원"})})]})})]})}const F=n.li`
  user-select: none;
  padding: 20px 16px;
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
  &:nth-child(2n) {
    background-color: var(--gray50);
  }
`,G=n.div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: var(--gray100);
`;export{ee as component};
