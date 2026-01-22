import{j as a}from"./main-DdFHfJsj.js";import{u as e}from"./useHeader-ycHOJC5z.js";import{q as o,h as t}from"./container.css-CS477Ypa.js";import{s as l}from"./vanilla-extract-css.browser.esm-WxGd34AK.js";import{a as d}from"./styled-components.browser.esm-B_lRBw7u.js";import{F as r}from"./common-p2nbeD7y.js";const i=l({minHeight:"280px",borderRadius:"0 0 20px 20px",backgroundColor:"var(--background-light)",boxShadow:"var(--shadow-sm)"});function j(){return e({title:"전적 분석",options:{titleAlign:"center"},subIcons:[{svgIcon:a.jsx(a.Fragment,{}),description:"",onClick:""}]}),a.jsxs("div",{className:o,children:[a.jsx("div",{className:i}),a.jsx("div",{className:t,children:a.jsxs(c,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"match-name",children:"경기명"}),a.jsx("th",{children:"득점"}),a.jsx("th",{children:"실점"}),a.jsx("th",{children:"결과"})]})}),a.jsx("tbody",{children:n.map(s=>a.jsxs("tr",{children:[a.jsx("td",{className:"match-name",children:s.matchName}),a.jsx("td",{className:"goal",children:a.jsx("span",{children:s.goal})}),a.jsx("td",{className:"miss",children:a.jsx("span",{children:s.miss})}),a.jsx("td",{className:"result",style:{color:s.goal>s.miss?"var(--primary500)":"var(--gray300)"},children:s.goal>s.miss?"승":"패"})]},s.id))})]})})]})}const n=[{id:1,matchName:"2023-09-01",goal:35,miss:13},{id:2,matchName:"2023-09-01",goal:35,miss:63},{id:52,matchName:"2023-09-01",goal:35,miss:63},{id:32,matchName:"2023-09-01",goal:85,miss:10}],c=d.table`
  width: 100%;
  & > thead {
    ${r.caption1("medium")};
    text-align: left;
    color: var(--gray500);
    & > tr {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  & > tbody tr {
    ${r.body4("regular")};
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 0;
    color: var(--gray700);
    border-bottom: 1px solid var(--gray100);
    &:last-of-type {
      border-bottom: none;
    }
  }
  th,
  td {
    vertical-align: middle;
    width: 32px;
  }
  th.match-name,
  td.match-name {
    flex: 1;
  }
  td.goal > span,
  td.miss > span {
    ${r.body4("regular")};
    display: inline-block;
    width: 100%;
    border-radius: 6px;
    padding: 4px 0;
    color: var(--gray600);
    background-color: var(--gray50);
    border: 1px solid var(--gray100);
    text-align: center;
  }
  td.goal > span {
    background-color: var(--gray100);
  }
  td.result {
    ${r.body4("semibold")};
    text-align: center;
  }
`;export{j as component};
