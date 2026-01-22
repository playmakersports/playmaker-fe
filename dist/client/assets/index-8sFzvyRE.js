import{r as b,u as j,j as e}from"./main-DdFHfJsj.js";import{c as l}from"./clsx-B-dksMZM.js";import{u as v}from"./useHeader-ycHOJC5z.js";import{a as h}from"./styled-components.browser.esm-B_lRBw7u.js";import{u as y}from"./useModal-bBiNf1JN.js";import{f as r}from"./fonts.css-GssQgTP4.js";import{g as w,d as n,k,l as C,s as N,b as A}from"./container.css-CS477Ypa.js";import{i as d}from"./userSetting.css-DLGE2DUf.js";import{R as p}from"./RightArrow-dwaHOcVo.js";import{u as M}from"./useToast-DPQsexqB.js";import{u as G}from"./PopupProvider-COaEMj1P.js";import{C as R}from"./Check-CjNx6COD.js";import"./Button-BOrbA0iP.js";import"./common-p2nbeD7y.js";import"./Portal-CMVPEwGZ.js";import"./vanilla-extract-css.browser.esm-WxGd34AK.js";import"./AlertFilled-005YqH1n.js";import"./Close20-CLpDEKFn.js";function z({ModalComponents:t}){const[s,a]=b.useState([]),x=j(),m=G(),{trigger:g}=M(),i=["계정 정보은 모두 삭제 되고 다시 복구할 수 없어요.","플메에서의 스포츠 기록을 복구할 수 없어요.","단, 작성한 글과 댓글은 자동으로 삭제되지 않아요.","팀에서 운영진을 맡고 있다면, 미리 변경해주세요.","위 내용에 모두 동의하였으며, 탈퇴를 진행하겠습니다."];return e.jsxs(t,{title:"서비스 탈퇴",draggable:"all",onClose:()=>a([]),buttons:[{name:"확인",onClick:async()=>{await m?.confirm(`탈퇴 시 계정 정보 및 이용 기록은 모두 삭제되며, 삭제된 데이터는 복구가 불가능합니다.

정말 탈퇴하시겠어요?`,{title:"탈퇴하기",showIcon:!0,color:"red",buttonText:{yes:"네, 탈퇴할게요"}})&&(x.navigate({to:"/",replace:!0}),g("탈퇴가 완료되었습니다.",{type:"success"}))},disabled:!s.every(o=>o)||s.length!==i.length,mode:"red"}],children:[e.jsxs("div",{style:{padding:"10px 0 0",color:"var(--gray600)"},children:[e.jsx("p",{className:r.body3.regular,children:"플레이어님과 함께한 시간 감사했습니다."}),e.jsx("br",{}),e.jsx("p",{className:r.body3.regular,children:"서비스 탈퇴 전, 알려드릴 사항이 있어요. 꼭 확인 하시고 신중하게 결정해주세요."})]}),e.jsx("div",{className:w,style:{margin:"20px 0 0"},children:i.map((o,u)=>e.jsxs(H,{children:[e.jsx("input",{style:{visibility:"hidden"},type:"checkbox",onChange:f=>{const c=[...s];c[u]=f.target.checked,a(c)}}),e.jsx("div",{className:"checkbox",children:e.jsx(R,{width:20,height:20})}),e.jsx("span",{className:r.body4.medium,children:o})]},o))})]})}const H=h.label`
  cursor: pointer;
  flex: 1;
  display: flex;
  gap: 8px;
  padding: 10px 8px;
  border-radius: 6px;
  color: var(--gray500);
  background-color: var(--gray50);

  & > input {
    position: absolute;
    width: 1;
    height: 1;
    margin: -1px;
    overflow: hidden;
  }

  &:has(input:checked) {
    background-color: var(--red50);
    color: var(--red800);

    div.checkbox {
      background-color: var(--red500);
      border: transparent;
      & > svg {
        display: block;
        fill: var(--white);
      }
    }
  }
  div.checkbox {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background-color: var(--white);
    border: 1px solid var(--gray200);
    & > svg {
      display: none;
    }
  }
`;function _(){const{ModalComponents:t,showModal:s}=y();return v({title:"계정 관리",options:{titleAlign:"center"}}),e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:l(N,A),children:[e.jsxs("div",{className:n,children:[e.jsxs("p",{className:l(r.body2.semibold,k,C),style:{color:"var(--gray900)"},children:[e.jsx("span",{children:"playtest@gmail.com"}),e.jsx(S,{children:e.jsx(I,{})})]}),e.jsx("p",{className:r.body4.regular,style:{color:"var(--gray700)"},children:"계정 연동일 2025.05.11"})]}),e.jsxs("div",{className:n,children:[e.jsxs("button",{type:"button",className:d,children:[e.jsx("span",{children:"연동 계정 변경"}),e.jsx(p,{width:20,height:20,fill:"var(--gray600)"})]}),e.jsxs("button",{type:"button",className:d,onClick:()=>s(),children:[e.jsx("span",{children:"서비스 탈퇴"}),e.jsx(p,{width:20,height:20,fill:"var(--gray600)"})]})]})]}),e.jsx(z,{ModalComponents:t})]})}const S=h.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--gray200);

  & > svg {
    width: 16px;
    height: 16px;
  }
`,I=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 533.5 544.3",children:[e.jsx("path",{fill:"#4285f4",d:"M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"}),e.jsx("path",{fill:"#34a853",d:"M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"}),e.jsx("path",{fill:"#fbbc04",d:"M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"}),e.jsx("path",{fill:"#ea4335",d:"M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"})]});export{_ as component};
