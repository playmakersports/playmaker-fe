import{u as s,j as t}from"./main-DdFHfJsj.js";import{a}from"./styled-components.browser.esm-B_lRBw7u.js";import{s as l,a as n}from"./display-CJakH6Xg.js";import{S as p,a as d,F as i}from"./common-p2nbeD7y.js";import{c,a as m}from"./date-kF-GY4rH.js";import{B as x}from"./BaseInput-QIE2P0lY.js";import{B as u}from"./Button-BOrbA0iP.js";import{P as D}from"./Plus-CvtX-big.js";import"./toDate-qOSwr3PX.js";import"./differenceInCalendarDays-YNEZ6MTG.js";import"./getYear-BVTrOhcD.js";import"./getMonth-CwBXqN0c.js";import"./getDay-BBGk_gga.js";import"./clsx-B-dksMZM.js";import"./fonts.css-GssQgTP4.js";import"./vanilla-extract-css.browser.esm-WxGd34AK.js";import"./Wrapper-woxNXEhf.js";import"./InputWrapper-3IDnfKjB.js";import"./container.css-B1jfIjJ-.js";import"./Close20-CLpDEKFn.js";import"./Search-D9vcyU_9.js";function V(){const r=s(),o={CLOSED:"종료",PENDING:"진행중",BEFORE:"진행예정"};return t.jsxs(f,{children:[t.jsxs(h,{children:[t.jsx(y,{children:t.jsx(x,{type:"text",placeholder:"대회명으로 찾기",iconType:"search"})}),t.jsx(E,{children:t.jsx("ul",{className:"list-inner",ref:e=>n(e,"vertical"),onScroll:e=>l(e,"vertical"),children:v.map(e=>t.jsxs(I,{children:[t.jsxs("p",{className:"competition-header",children:[t.jsx("span",{className:"competition-title",children:e.title}),t.jsx(O,{className:e.status,children:e.status==="BEFORE"?`D-${c(e.startDate)}`:o[e.status]})]}),t.jsx("p",{className:"competition-date",children:m(e.startDate,{displayDateType:".",displayYear:"always",displayDayName:"hide"})})]},e.competitionId))})}),t.jsx(g,{children:t.jsx(u,{type:"button",mode:"primary",onClick:()=>{r.navigate({to:"/pc/staff/competition/create"})},fullWidth:!0,children:t.jsxs("span",{className:"button-inner",children:[t.jsx(D,{fill:"#fff"}),"새 대회 만들기"]})})})]}),t.jsx(S,{children:"상세정보"})]})}const f=a.section`
  display: flex;
  gap: 24px;
  height: 100%;
  overflow: hidden;
`,h=a.aside`
  display: flex;
  max-width: 18vw;
  min-width: 240px;
  padding: 12px 14px 0 4px;
  flex-direction: column;
  border-right: 1px solid var(--gray300);
`,g=a.div`
  margin: 16px 0 20px;
  span.button-inner {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
`,y=a.div`
  display: flex;
  padding: 12px 0 0 0;
  flex-direction: column;
  gap: 8px;
`,E=a.div`
  flex: 1;
  margin: 16px 0 0;
  ${p("256,256,256")}
  ul.list-inner {
    display: flex;
    height: 100%;
    flex-direction: column;
    overflow-y: scroll;
    ${d};
  }
`,I=a.li`
  cursor: pointer;
  padding: 16px 10px;
  border-bottom: 1px solid var(--gray200);
  p.competition-header {
    ${i.body3("regular")};
    display: flex;
    align-items: center;
    gap: 4px;
    span.competition-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  p.competition-date {
    ${i.body4("regular")};
    font-weight: 400;
    color: var(--gray600);
  }
  &:last-of-type {
    border: none;
  }
  &:hover {
    background-color: var(--gray50);
  }
`,S=a.article`
  ${i.body4("regular")};
  flex: 1;
  padding-top: 20px;
  font-weight: 400;
`,O=a.span`
  ${i.body4("regular")};
  font-size: 1.3rem;
  line-height: 1.2rem;
  padding: 4px;
  border-radius: 4px;
  background-color: var(--primary50);
  color: var(--primary600);
  word-break: keep-all;
  &.BEFORE {
    font-weight: 600;
    background-color: var(--red100);
    color: var(--red500);
  }
  &.CLOSED {
    background-color: var(--gray200);
    color: var(--gray700);
  }
`,v=[{competitionId:1,status:"BEFORE",title:"전국대학생농구대회",startDate:"2024-11-26"},{competitionId:2,status:"PENDING",title:"홍익대학교배 대학생대회",startDate:"2024-11-09"},{competitionId:3,status:"PENDING",title:"제20회 U-리그 대회",startDate:"2023-10-30"},{competitionId:4,status:"CLOSED",title:"제1회 대학동아리연합농구대회",startDate:"2023-09-01"},{competitionId:5,status:"CLOSED",title:"전국대학생농구대회",startDate:"2023-05-15"},{competitionId:6,status:"CLOSED",title:"제19회 U-리그 대회",startDate:"2023-04-30"},{competitionId:7,status:"CLOSED",title:"제14회 대학아마추어농구대회",startDate:"2023-04-01"},{competitionId:8,status:"CLOSED",title:"전국대학생농구대회",startDate:"2022-06-08"},{competitionId:9,status:"CLOSED",title:"전국대학생농구대회",startDate:"2022-06-09"},{competitionId:10,status:"CLOSED",title:"제13회 대학아마추어농구대회",startDate:"2022-05-10"},{competitionId:11,status:"CLOSED",title:"제18회 U-리그 대회",startDate:"2022-04-10"},{competitionId:12,status:"CLOSED",title:"전국대학생농구대회",startDate:"2022-03-30"},{competitionId:13,status:"CLOSED",title:"전국대학생농구대회",startDate:"2022-02-30"},{competitionId:14,status:"CLOSED",title:"전국대학생농구대회",startDate:"2021-10-30"},{competitionId:15,status:"CLOSED",title:"전국대학생농구대회",startDate:"2021-10-15"}];export{V as component};
