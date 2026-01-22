import{j as e,R as g,u as b,c as j}from"./main-DdFHfJsj.js";import{a as n}from"./styled-components.browser.esm-B_lRBw7u.js";import{u as C}from"./useHeader-ycHOJC5z.js";import{F as s,C as I}from"./common-p2nbeD7y.js";import{a as d}from"./date-kF-GY4rH.js";import{B as c}from"./Container-sz0ta-F3.js";import{a as v}from"./index.esm-BMv8ZhrT.js";import{u as w}from"./useToast-DPQsexqB.js";import{B as N}from"./Button-BOrbA0iP.js";import{B as A}from"./Card-BNWG98vS.js";import{F as T}from"./FloatButton-BKHzPqe1.js";import{I as $}from"./SelectInput-4xvXY9NK.js";import"./toDate-qOSwr3PX.js";import"./differenceInCalendarDays-YNEZ6MTG.js";import"./getYear-BVTrOhcD.js";import"./getMonth-CwBXqN0c.js";import"./getDay-BBGk_gga.js";import"./AlertFilled-005YqH1n.js";import"./Close20-CLpDEKFn.js";import"./Check-CjNx6COD.js";function D(r){C({title:"대회 신청"});const{title:i,place:l,startDate:a,endDate:t}=r;return e.jsx(c,{children:e.jsxs(k,{children:[e.jsx("h2",{children:i}),e.jsxs("ul",{className:"info-list",children:[e.jsx("li",{children:l}),e.jsxs("li",{children:[d(a,{displayDateType:".",displayYear:"always",displayDayName:"short-with-parenthesis"})," ","-"," ",d(t,{displayDateType:".",displayYear:"not-this-year",displayDayName:"short-with-parenthesis"})]})]})]})})}const k=n.div`
  padding: 20px;
  background-color: var(--background);
  border-radius: 10px;

  h2 {
    ${s.body3("semibold")};
  }
  ul.info-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 16px;
    ${s.body4("regular")};
    color: var(--gray600);

    li {
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }

    svg {
      width: 14px;
      height: 14px;
    }
  }
`,x=g.forwardRef(({type:r,value:i,children:l,id:a,...t},p)=>e.jsxs(e.Fragment,{children:[e.jsx(B,{type:r,ref:p,id:a,value:i,...t}),e.jsx(m,{htmlFor:a,role:"button",children:l})]}));x.displayName="CardInput";const m=n(A).attrs({as:"label"})`
  cursor: pointer;
  ${s.body3("regular")};
  width: 100%;
  font-weight: 400;
  ${I}
`,B=n.input`
  display: none;
  &:checked + ${m} {
    font-weight: 500;
    padding: 17px 19px; // border 2px 고려
    border: 2px solid var(--main);
    color: var(--main);
  }
  &:disabled + ${m} {
    transform: translateY(0);
    box-shadow: none;
  }
`;function R(){const{trigger:r}=w(),i=b(),a=j({strict:!1}).competitionId,{register:t,watch:p,handleSubmit:u}=v(),h=p("ReCheckTeam")&&!!p("teamId"),f=[{teamName:"SPABA1",teamId:123,teamLogo:""},{teamName:"SPABA2",teamId:233,teamLogo:""},{teamName:"SPABA3",teamId:533,teamLogo:""}],y=o=>{console.log(o),r("참가 신청이 완료됐어요",{type:"success"}),i.navigate({to:`/competition/${a}`,replace:!0})};return e.jsxs(S,{children:[e.jsxs("form",{className:"inner-wrapper",onSubmit:u(y),children:[e.jsx("p",{className:"info-title",children:"출전할 팀을 선택해주세요"}),e.jsx(F,{children:f.map(o=>e.jsx("li",{children:e.jsx(x,{type:"radio",value:`${o.teamId}`,id:`${o.teamId}`,...t("teamId"),children:e.jsxs("p",{className:"card-inner",children:[e.jsx("span",{className:"team-logo"}),e.jsx("span",{className:"team-name",children:o.teamName})]})})},o.teamId))}),e.jsx(T,{children:e.jsx(N,{type:"submit",mode:"primary",disabled:!h,fullWidth:!0,children:"신청"})})]}),e.jsx($,{id:"ReCheckTeam",text:{title:"위 선택한 팀으로 신청합니다"},...t("ReCheckTeam")})]})}const S=n(c)`
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  form.inner-wrapper {
    flex: 1;
    overflow-y: auto;
    padding: 0 12px;
  }
  p.info-title {
    ${s.body3("semibold")};
  }
`,F=n.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 18px;

  li {
    display: flex;
    p.card-inner {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }

  span.team-logo {
    display: block;
    width: 60px;
    height: 60px;
    background-color: var(--gray100);
    border-radius: 50%;
  }
  span.team-name {
    ${s.body3("semibold")};
    font-size: 1.8rem;
  }
`;function ae(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"calc(100vh - var(--safe-area-top) - 64px - var(--env-sab))"},children:[e.jsx(D,{title:"제 2회 한국유소년 스포츠 연맹 대학 농구 친선전 KUSE 경기",place:"서울과학기술대학교 체육관",startDate:"2024-12-30",endDate:"2025-01-03"}),e.jsx(R,{})]})}export{ae as component};
