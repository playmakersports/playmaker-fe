import{u as p,j as e}from"./main-DdFHfJsj.js";import{u as d}from"./useHeader-ycHOJC5z.js";import{s as x}from"./authToken-Qay5e6Bk.js";import{u}from"./user-CDUu4AMT.js";import{f as n}from"./fonts.css-GssQgTP4.js";import{j as a,h as g}from"./container.css-CS477Ypa.js";import{s as r,a as o,b as h,c as f}from"./userSetting.css-DLGE2DUf.js";import{B as j}from"./Button-BOrbA0iP.js";import{a as v}from"./styled-components.browser.esm-B_lRBw7u.js";import{B as y,F as c}from"./common-p2nbeD7y.js";import{R as m}from"./RightArrow-dwaHOcVo.js";import{P as N}from"./Person-Dscbr2-V.js";import"./query-pooYvCqP.js";import"./vanilla-extract-css.browser.esm-WxGd34AK.js";function l({list:s}){return e.jsx(C,{children:s.map((t,i)=>e.jsxs("li",{onClick:t.onClick,children:[e.jsx("span",{className:"title-wrapper",children:t.title}),t.subText?e.jsxs("span",{className:"status-wrapper",children:[t.subText,e.jsx(m,{width:24,height:24,fill:"var(--gray700)"})]}):e.jsx("span",{className:"status-wrapper",children:e.jsx(m,{width:24,height:24,fill:"var(--gray700)"})})]},i))})}function k(){const s=p();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:a}),e.jsxs("div",{className:r,children:[e.jsx("h4",{className:o,children:"기본 정보"}),e.jsx(l,{list:[{title:"내 프로필 수정",onClick:()=>s.navigate({to:"/my/info"})},{title:"활동 지역",onClick:()=>s.navigate({to:"/my/location"})}]})]}),e.jsx("div",{className:a}),e.jsxs("div",{className:r,children:[e.jsx("h4",{className:o,children:"소속 팀"}),e.jsx(l,{list:[{title:"소속 팀 관리",onClick:()=>s.navigate({to:"/my/team-list"})}]})]}),e.jsx("div",{className:a}),e.jsxs("div",{className:r,children:[e.jsx("h4",{className:o,children:"내 운동 정보"}),e.jsx(l,{list:[{title:"신체 정보 관리",onClick:()=>s.navigate({to:"/my/physical"})},{title:"운동 종목별 정보 관리",onClick:()=>s.navigate({to:"/my/sports"})}]})]}),e.jsx("div",{className:a}),e.jsx("div",{className:r,children:e.jsx(l,{list:[{title:"알림 설정",onClick:()=>s.navigate({to:"/my/notification"})},{title:"공지사항",onClick:()=>s.navigate({to:"/my/notice"})},{title:"약관 정보",onClick:()=>{}},{title:"앱 버전 확인",onClick:()=>{}},{title:"로그아웃",onClick:()=>{s.navigate({to:"/user/logout",replace:!0})}}]})})]})}const C=v.ul`
  display: flex;
  flex-direction: column;
  margin: -4px -10px 0;
  gap: calc(20px - 4px - 4px);
  li {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;

    display: flex;
    padding: 4px 10px;
    align-items: center;
    justify-content: space-between;
    ${y("var(--gray50)")}
  }
  span.title-wrapper {
    ${c.body3("medium")};
    color: var(--gray700);
  }
  span.status-wrapper {
    ${c.body4("regular")};
    display: inline-flex;
    align-items: center;
    color: var(--gray500);
    gap: 4px;
  }
`;function F(){const s=p(),{data:t}=u();return d({title:"설정",subActions:[{name:"계정 관리",action:()=>s.navigate({to:"/my/account"})},{name:"TEST TOKEN",action:()=>{const i=prompt("토큰을 입력해주세요");i&&(x({access_token:i,refresh_token:i,expires_in:4e3,refresh_token_expires_in:4e3}),s.invalidate())}}]}),e.jsxs("section",{className:g,children:[e.jsxs("div",{className:h,children:[e.jsx("div",{className:f,children:t?.imageUrl?e.jsx("img",{src:t?.imageUrl,alt:t?.userName,className:"profile-image"}):e.jsx(N,{width:24,height:24,fill:"var(--gray300)"})}),e.jsxs("div",{className:"profile",style:{flex:1},children:[e.jsx("div",{className:n.body3.medium,style:{color:"var(--gray700)"},children:t?.userName}),e.jsx("div",{className:n.caption1.regular,style:{color:"var(--gray400)"},children:"@test"})]}),e.jsx(j,{type:"button",mode:"gray",fillType:"light",size:"small",onClick:()=>s.navigate({to:"/p/my"}),children:"프로필 보기"})]}),e.jsx(k,{})]})}export{F as component};
