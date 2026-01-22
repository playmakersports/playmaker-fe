import{u as g,a as h,r as y,j as e,p as f}from"./main-DdFHfJsj.js";import{a as i}from"./styled-components.browser.esm-B_lRBw7u.js";import{a as u}from"./COMPETITION-BDBWluQv.js";import{W as j,B as v}from"./Container-sz0ta-F3.js";import{u as D}from"./useHeader-ycHOJC5z.js";import{u as b}from"./useStickyMoment-CFyp6R01.js";import{a as n}from"./date-kF-GY4rH.js";import{B as a}from"./Badge-DEC00oXR.js";import{R as I}from"./RightArrow-dwaHOcVo.js";import{P as k}from"./Person-Dscbr2-V.js";import"./toDate-qOSwr3PX.js";import"./differenceInCalendarDays-YNEZ6MTG.js";import"./getYear-BVTrOhcD.js";import"./getMonth-CwBXqN0c.js";import"./getDay-BBGk_gga.js";import"./common-p2nbeD7y.js";function w(t){const{competitionId:o,competitionName:s,matchLocation:p,startDate:c,endDate:l}=t,m=g(),d=h({strict:!1})?.initial,r=y.useRef(null);D({title:t.competitionName,transparent:!0}),b(r);const x=()=>{m.navigate({to:`/competition/${o}?initial=ready`})};return e.jsx(C,{ref:r,children:e.jsxs(R,{children:[e.jsx("h2",{className:"competition-name",children:s}),e.jsxs(N,{children:[e.jsx(a,{type:"primary",children:"모집중"}),e.jsx(a,{type:"warning",children:"8강"}),e.jsx(a,{type:"info",children:"남자부"}),e.jsx(a,{type:"gray",children:"단체전"}),e.jsx(a,{type:"gray",children:"대학부"})]}),e.jsxs("ul",{className:"competition-detail",children:[e.jsx("li",{children:e.jsx("span",{children:p})}),e.jsx("li",{children:e.jsxs("span",{children:[n(c,{displayDateType:"kr",displayYear:"always",displayDayName:"hide"})," ","~"," ",n(l,{displayDateType:"kr",displayYear:"not-this-year",displayDayName:"hide"})]})}),e.jsxs("li",{children:[e.jsx(k,{}),e.jsxs("span",{children:[o,"팀 참여"]})]})]}),d==="ready"?e.jsx(e.Fragment,{}):e.jsxs(P,{type:"button",onClick:x,children:["대회 정보 자세히",e.jsx(I,{})]})]})})}const C=i.div`
  display: flex;
  gap: 24px;
  top: 0;
  transition: all 0.25s;
  background-color: var(--background-light);
`,N=i.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin: 0 -16px 10px;
  padding: 12px 16px;
  width: var(--mobile-max-width);
  border-top: 1px solid var(--gray200);
`,R=i.div`
  position: relative;
  flex: 1;
  display: inline-block;
  padding: 0 4px 8px;

  h2.competition-name {
    padding: 6px 0 14px;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.6rem;
  }
  ul.competition-detail {
    display: flex;
    padding: 0 2px;
    flex-direction: column;
    gap: 5px;

    li {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: var(--gray700);
      svg {
        fill: var(--gray800);
      }
    }
  }
`,P=i.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
  padding: 10px 0;
  color: var(--gray800);
  font-size: 1.4rem;
  font-weight: 500;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--gray500);
  }
`;function Q(){const t=u,{competitionId:o}=f.useParams();return e.jsxs(e.Fragment,{children:[e.jsx(B,{src:t.posterImg}),e.jsx(T,{children:e.jsx(w,{competitionId:t.competitionId,competitionName:t.competitionName,startDate:t.startDate,endDate:t.endDate,matchLocation:t.matchLocation})}),e.jsx(j,{})]})}const T=i(v)`
  padding-bottom: 0;
`,B=i.section`
  margin-top: calc(-1 * var(--safe-area-top));
  width: 100%;
  height: calc(232px + var(--env-sat));
  background-color: var(--gray600);
  background-image: url(${({src:t})=>t});
  background-size: cover;
  background-repeat: no-repeat;
`;export{Q as component};
