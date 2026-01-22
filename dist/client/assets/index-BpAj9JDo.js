import{u as ae,c as A,r as T,j as e,L as H,R as pe,o as he}from"./main-DdFHfJsj.js";import{a as ue,u as ge}from"./query-pooYvCqP.js";import{a as h,l as xe}from"./styled-components.browser.esm-B_lRBw7u.js";import{u as ye}from"./useHeader-ycHOJC5z.js";import{F as D,T as fe}from"./common-p2nbeD7y.js";import{A as je}from"./AlertFilled-005YqH1n.js";import{a as te}from"./addDays-CtYUbYF3.js";import{a as ve,e as be}from"./endOfMonth-mMwfNh2E.js";import{c as Ne,f as b,s as Ie}from"./format-BUIW76fP.js";import{t as u}from"./toDate-qOSwr3PX.js";import{d as we,b as Me}from"./differenceInCalendarDays-YNEZ6MTG.js";import{d as ne,g as re,b as ke,a as De}from"./date-kF-GY4rH.js";import{c as S,d as Te}from"./differenceInYears-CkZj1vKM.js";import{h as ie,o as R,p as oe,a as W,g as Ce,k as L,r as Ae,c as le,n as B,d as _,l as G,y as O,f as C,j as M}from"./container.css-CS477Ypa.js";import{t as $e,a as Se,b as k,c as ce,d as Le,e as Ee,f as U,g as Y,h as Re,i as We,j as Be,k as Fe,l as He,m as Pe,n as _e,o as Ge,p as Oe,R as Ue,q as Ye,r as ze,s as z,u as x,v as f}from"./RecentVoteCard-TrQpIsuT.js";import{f as i}from"./fonts.css-GssQgTP4.js";import{L as Ve}from"./LocationPin-CV31ahKG.js";import{I as qe}from"./IdCard-CvEBO6pD.js";import{P as Je}from"./People-DrJ6VCIV.js";import{C as $}from"./Calendar-DWVqCeg-.js";import{c as m}from"./clsx-B-dksMZM.js";import{C as Ke}from"./Chip-COwdLxrV.js";import{B as de}from"./Badge-DEC00oXR.js";import{C as Xe}from"./Clock-BfCcfOFC.js";import{H as Qe}from"./Heart-Dxn4mtws.js";import{C as Ze}from"./Chat-Dqfdndef.js";import{G as j}from"./GroupTitle-CYuITqE8.js";import{S as es,a as ss}from"./swiper-B84kPD2B.js";import{B as F}from"./Button-BOrbA0iP.js";import{P as V,a as q,T as J,d as K,e as X,C as Q}from"./Cheer-RVoW6XSs.js";import{i as as,t as ts}from"./authToken-Qay5e6Bk.js";import{F as ns}from"./FloatButton-BKHzPqe1.js";import{u as rs}from"./useModal-bBiNf1JN.js";import{T as is}from"./TextArea-CjsgM-GX.js";import{u as os}from"./PopupProvider-COaEMj1P.js";import{L as ls}from"./Loading-CRmktZOH.js";import"./getYear-BVTrOhcD.js";import"./getMonth-CwBXqN0c.js";import"./getDay-BBGk_gga.js";import"./vanilla-extract-css.browser.esm-WxGd34AK.js";import"./index.esm-BMv8ZhrT.js";import"./common-DjdCxSrg.js";import"./Check-CjNx6COD.js";import"./RightDirection-CpAsiIe1.js";import"./Close20-CLpDEKFn.js";import"./Portal-CMVPEwGZ.js";import"./NumberFlow-client-48rw3j0J-CFpaRRO2.js";import"./Wrapper-woxNXEhf.js";import"./InputWrapper-3IDnfKjB.js";import"./container.css-B1jfIjJ-.js";function v(s,n){const{years:t=0,months:a=0,weeks:o=0,days:c=0,hours:d=0,minutes:l=0,seconds:r=0}=n,p=u(s),g=a||t?ve(p,a+t*12):p,N=c||o?te(g,c+o*7):g,I=l+d*60,w=(r+I*60)*1e3;return Ne(s,N.getTime()+w)}function cs(s,n){const t=u(s),a=u(n),o=t.getFullYear()-a.getFullYear(),c=t.getMonth()-a.getMonth();return o*12+c}function me(s,n){const t=u(s),a=u(n),o=Z(t,a),c=Math.abs(we(t,a));t.setDate(t.getDate()-o*c);const d=+(Z(t,a)===-o),l=o*(c-d);return l===0?0:l}function Z(s,n){const t=s.getFullYear()-n.getFullYear()||s.getMonth()-n.getMonth()||s.getDate()-n.getDate()||s.getHours()-n.getHours()||s.getMinutes()-n.getMinutes()||s.getSeconds()-n.getSeconds()||s.getMilliseconds()-n.getMilliseconds();return t<0?-1:t>0?1:t}function ds(s,n,t){const a=ne(s,n)/Me;return re(t?.roundingMethod)(a)}function ms(s){const n=u(s);return n.setHours(23,59,59,999),n}function ps(s){const n=u(s);return+ms(n)==+be(n)}function hs(s,n){const t=u(s),a=u(n),o=S(t,a),c=Math.abs(cs(t,a));let d;if(c<1)d=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-o*c);let l=S(t,a)===-o;ps(u(s))&&c===1&&S(s,a)===1&&(l=!1),d=o*(c-Number(l))}return d===0?0:d}function us(s,n,t){const a=ne(s,n)/1e3;return re(t?.roundingMethod)(a)}function gs(s){const n=u(s.start),t=u(s.end),a={},o=Te(t,n);o&&(a.years=o);const c=v(n,{years:a.years}),d=hs(t,c);d&&(a.months=d);const l=v(c,{months:a.months}),r=me(t,l);r&&(a.days=r);const p=v(l,{days:a.days}),g=ds(t,p);g&&(a.hours=g);const N=v(p,{hours:a.hours}),I=ke(t,N);I&&(a.minutes=I);const P=v(N,{minutes:a.minutes}),w=us(t,P);return w&&(a.seconds=w),a}function xs({list:s}){const n=ae(),a=A({strict:!1}).teamId,[o,c]=T.useState(0),d=3e3;return T.useEffect(()=>{const l=setInterval(()=>{c(r=>r===s.length?0:(r+1)%s.length)},d);return()=>clearInterval(l)},[]),e.jsx(ys,{children:e.jsx(fs,{children:s.map((l,r)=>{const p=gs({start:new Date(l.createAt),end:new Date}),g=!p.years&&!p.months&&!p.days;return e.jsx(js,{onClick:()=>n.navigate({to:`/team/${a}/board/${l.articleId}`}),className:o===r?"current":o===0&&s.length-1===r||o-1===r?"prev":"next",children:e.jsxs(vs,{children:[e.jsxs("p",{children:[e.jsxs("span",{className:"category",children:[e.jsx(je,{})," 공지"]}),e.jsx("span",{className:"title",children:l.title})]}),e.jsx("span",{className:"create-at",children:g?p.hours??!1?`${p.hours}시간 전`:(p.hours??!0)&&(p.minutes??!1)?`${p.minutes}분 전`:"방금":l.createAt.split("T")[0]})]})},l.articleId)})})})}const ys=h.div`
  padding: 10px 12px;
  background-color: var(--primary50);
  border-radius: 8px;
`,fs=h.div`
  position: relative;
  display: flex;
  height: 1.8rem;
  overflow: hidden;
  align-items: center;
`,js=h.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 1.8rem;
  transform: translate3d(0, -100%, 0);
  align-items: center;

  &.prev {
    transform: translate3d(0, -100%, 0);
    transition: transform 0.4s ease;
  }
  &.current {
    transform: translate3d(0, 0, 0);
    transition: transform 0.4s ease;
  }
  &.next {
    transform: translate3d(0, 100%, 0);
  }

  p {
    display: flex;
    gap: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .category {
    ${D.caption1("semibold")};
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--primary500);
    svg {
      width: 18px;
      height: 18px;
      fill: var(--primary500);
    }
  }
  .title {
    ${D.caption1("medium")};
    color: var(--gray700);
  }
  .create-at {
    ${D.caption1("regular")};
    color: var(--gray400);
  }
`,vs=h.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 2rem;
  user-select: none;

  ${fe("transparent",{scalable:!0})};
`;function bs({text:s="",imgSrc:n}){return e.jsxs(Is,{children:[s&&e.jsx(ks,{"data-text":s}),e.jsx(ws,{$playing:s!=="",children:e.jsx(Ms,{src:n,$playing:s!=="",alt:"팀 프로필 이미지"})})]})}const Ns=xe`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
`,Is=h.div`
  position: relative;
  width: 58px;
  height: 58px;
`,ws=h.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  border-radius: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    display: ${({$playing:s})=>s?"block":"none"};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--main);
    background: linear-gradient(var(--main) 0%, #10bfff 45%, #90d621 95%);
    animation: ${Ns} 2s linear infinite;
  }
`,Ms=h.img`
  margin: ${({$playing:s})=>s?"3px":"0"};
  border: 4px solid var(--background-light);
  border: ${({$playing:s})=>s?"":"1px solid var(--gray300)"};
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  z-index: 1;
  border-radius: 100%;
  object-fit: cover;
  background-color: #fff;
`,ks=h.p`
  ${D.caption1("semibold")};
  font-size: 1.2rem;
  position: absolute;
  padding: 3px 8px;
  border-radius: 6px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary500);
  border: 2px solid var(--background-light);
  color: #fff;
  z-index: 2;
  word-break: keep-all;
  &::before {
    content: attr(data-text);
  }
`;function Ds(s){const n="https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";return ye({title:s.teamName}),e.jsxs(e.Fragment,{children:[e.jsx("section",{className:$e,style:{backgroundImage:`url(${n})`},children:e.jsxs("ul",{className:Se,children:[e.jsxs("li",{className:k,children:[e.jsx(Ve,{}),s.activeArea]}),e.jsxs("li",{className:k,children:[e.jsx(qe,{})," ",s.teamLeaderName]}),e.jsxs("li",{className:k,children:[e.jsx(Je,{})," ",s.memberCount,"명"]}),e.jsxs("li",{className:k,children:[e.jsx($,{})," ",b(s.foundingDate??s.createDate,"yy-MM-dd")," 창단"]})]})}),e.jsxs("section",{className:ie,style:{paddingBottom:"20px"},children:[e.jsxs(Ts,{children:[e.jsx(bs,{text:s.recruitingYn==="Y"?"모집중":"",imgSrc:s.logoUrl??"a.png"}),e.jsxs("div",{className:ce,children:[e.jsx("h2",{className:i.body3.semibold,style:{color:"var(--gray900)"},children:s.teamName}),e.jsx("p",{className:i.body4.regular,children:s.teamIntro})]})]}),e.jsx(xs,{list:[{title:"8월 1주차 교류전 참가 여부 투표",articleId:"5",createAt:"2025-04-19T13:00"},{title:"2024년 하계 단결 MT - 투표 진행중",articleId:"1",createAt:"2025-04-19T23:58"},{title:"2024년 6월 회비 결산",articleId:"32",createAt:"2025-04-19T22:57"}]})]})]})}const Ts=h.section`
  display: flex;
  gap: 12px;
  padding: 28px 0 20px;
`;function E(s){const{matchId:n,competitionName:t,matchDate:a,homeInfo:o,awayInfo:c}=s,d=o.score>c.score,l=o.score<c.score,r=o.score===c.score;return e.jsx(H,{to:`/match/${n}`,children:e.jsxs("div",{className:R,children:[e.jsxs("div",{className:ce,children:[e.jsx("p",{className:i.body4.medium,children:t}),e.jsxs("p",{className:m(Le,i.caption1.regular),children:[e.jsx($,{fill:"var(--gray400)",width:18,height:18})," ",a]})]}),e.jsxs("div",{className:Ee,children:[e.jsxs(ee,{children:[e.jsx("img",{src:o.imgUrl,alt:o.name,width:40,height:40}),e.jsx("span",{className:U,children:o.name})]}),e.jsxs("div",{className:m(Fe,{[Pe]:d,[He]:l}),children:[e.jsx("span",{className:Y,style:{color:d?"var(--primary500)":void 0,fontWeight:d?600:void 0,opacity:d||r?1:.3},children:o.score}),e.jsxs("span",{className:m(Re,{[Be]:d,[We]:l}),children:[d?"WIN":l?"LOSE":"DRAW","!"]}),e.jsx("span",{className:Y,style:{color:l?"var(--red500)":void 0,fontWeight:l?600:void 0,opacity:l||r?1:.3},children:c.score})]}),e.jsxs(ee,{children:[e.jsx("img",{src:c.imgUrl,alt:c.name,width:40,height:40}),e.jsx("span",{className:U,children:c.name})]})]})]})})}const ee=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  & > img {
    border-radius: 100%;
    object-fit: cover;
    border: 1px solid var(--gray200);
  }
`;function Cs(s){const{activeDate:n,setActiveDate:t,schedulesList:a}=s,o=ae(),d=A({strict:!1}).teamId,l=r=>{o.navigate({to:`/team/${d}/schedule?feat=view|${r}`})};return T.useEffect(()=>{t(b(new Date,"yyyy-MM-dd"))},[]),e.jsxs(e.Fragment,{children:[e.jsx(As,{children:Es().map((r,p)=>e.jsxs($s,{type:"button",onClick:()=>t(r),className:n===r?"active-day":"",children:[e.jsx("span",{className:m("date-name",i.caption1.medium),children:Ls[p]}),e.jsx("span",{className:m("date-number",i.body4.medium),children:+r.split("-")[2]})]},r))}),e.jsx(Ss,{className:m(W),children:a.map((r,p)=>{const g=me(new Date,new Date(r.startDate));return e.jsxs("li",{onClick:()=>l(r.scheduleId),className:_e,children:[e.jsxs("div",{className:"head-line",children:[e.jsx(Ke,{type:"primary",fillType:"light",children:r.scheduleCategory}),e.jsx("span",{className:m("subtitle",i.body4.medium),children:r.scheduleTitle})]}),e.jsxs("div",{className:"sub-line",children:[e.jsxs("p",{className:m(oe),children:[e.jsxs("span",{className:m("date-wrapper",i.caption1.regular),children:[e.jsx($,{}),r.startDate]}),e.jsxs("span",{className:m("date-wrapper",i.caption1.regular),children:[e.jsx(Xe,{}),r.time]})]}),e.jsxs(de,{type:"primary",fillType:g===0?"filled":"light",size:"medium",children:["D",g===0?"-DAY":g]})]})]},p)})})]})}const As=h.div`
  display: flex;
  user-select: none;
`,$s=h.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  transition: all 0.2s var(--animation-cubic);

  span.date-name {
    // 요일명
    display: block;
    height: 24px;
    color: var(--gray400);
  }
  span.date-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    text-align: center;
    border-radius: 6px;
  }

  &.active-day {
    span.date-number {
      background: var(--primary500);
      color: #fff;
    }
  }

  &:active {
    transform: scale(0.95);
    span.date-number {
      background: var(--gray50);
    }
  }
`,Ss=h.ul`
  li.today {
    border-color: var(--primary500);
  }
  div.head-line {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
    span.subtitle {
      color: var(--gray700);
    }
  }
  div.sub-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span.date-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      color: var(--gray400);
    }
    svg {
      width: 18px;
      height: 18px;
      fill: var(--gray400);
    }
  }
`,Ls=["일","월","화","수","목","금","토"];function Es(){const n=Ie(new Date,{weekStartsOn:0});return Array.from({length:7},(a,o)=>{const c=te(n,o);return b(c,"yyyy-MM-dd")})}function Rs(){const n=A({strict:!1}).teamId,t=Ws;return e.jsx(e.Fragment,{children:t.map((a,o)=>e.jsxs(pe.Fragment,{children:[e.jsxs(H,{style:{justifyContent:"space-between",alignItems:"flex-end"},className:m(Ae),to:`/team/${n}/board/${a.articleId}`,children:[e.jsxs("div",{className:Ce,children:[e.jsx("div",{children:e.jsx(de,{size:"medium",type:"gray",fillType:"light",children:a.category})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx("p",{className:i.body4.medium,style:{color:"var(--gray700)"},children:a.title}),e.jsxs("p",{className:m(oe,i.caption1.regular),style:{color:"var(--gray400)"},children:[e.jsxs("span",{className:L,children:[e.jsx($,{width:18,height:18,fill:"var(--gray400)"}),De(a.writtenAt,{displayDateType:".",displayDayName:"hide",displayYear:"always",displayTime:"hide"})]}),e.jsxs("span",{className:L,children:[e.jsx(Qe,{width:18,height:18,fill:"var(--gray400)"}),"23"]}),e.jsxs("span",{className:L,children:[e.jsx(Ze,{width:18,height:18,fill:"var(--gray400)"}),"5"]})]})]})]}),e.jsx("div",{className:Ge})]}),t.length-1===o||e.jsx("div",{"aria-disabled":!0,style:{width:"100%",height:"1px",backgroundColor:"var(--gray200)"}})]},a.articleId))})}const Ws=[{articleId:"1",title:"게시판 제목1",category:"공지사항",writtenBy:"포이프",writtenAt:"2024-10-13T15:20"},{articleId:"2",title:"게시글 제목2",category:"공지사항",writtenBy:"포이프",writtenAt:"2024-10-15T08:20"},{articleId:"3",title:"게시글 제목3",category:"공지사항",writtenBy:"포이프",writtenAt:"2024-10-17T22:20"}];function Bs(){return e.jsxs("div",{className:m(ze,le),children:[e.jsxs("p",{className:i.body3.medium,style:{color:"var(--gray900)",padding:"0 16px"},children:["사용자 님의 ",e.jsx("span",{style:{color:"var(--primary500)"},children:"참여 의사"}),"를 기다리고 있어요!"]}),e.jsx("div",{className:Oe,children:se.length>0&&e.jsx(es,{slidesPerView:"auto",freeMode:!0,children:se.map(s=>e.jsx(ss,{className:m(Ye),children:e.jsx(Ue,{title:s.title,scheduleId:s.scheduleId,content:s.content,date:s.date,voteId:s.voteId})},s.voteId))})})]})}const se=[{voteId:"123",scheduleId:"123",title:"저녁 번개 참석자 모집",date:"2025.04.18",content:"과기대 앞 돼지고기집"},{voteId:"1423",scheduleId:"5123",title:"하계 훈련 참가자",date:"2025.05.31",content:"필참"}];function y(s){const{playerId:n,name:t,level:a,profileImg:o,position:c,birthDate:d,gisu:l}=s,r={5:{name:"회장",color:"#ff8c00",value:"president"},4:{name:"부회장",color:"#0fd1c1",value:"vice"},3:{name:"운영진",color:"#8984E5",value:"staff"},2:{name:"매니저",color:"#A0BCF8",value:"manager"},1:{name:"팀원",color:"",value:"member"}};return e.jsxs(Fs,{children:[e.jsx(Hs,{style:{backgroundImage:`url(${o})`}}),e.jsxs(Ps,{children:[a>1&&e.jsx("p",{className:m(i.caption1.regular,"position"),children:r[a].name}),e.jsx("p",{className:m(i.body3.semibold,"player-name"),children:t})]}),e.jsxs(_s,{className:B,children:[e.jsxs("li",{children:[e.jsx("span",{className:i.caption1.medium,style:{color:"var(--gray400)"},children:"포지션"}),e.jsx("span",{className:i.body4.semibold,style:{color:"var(--gray700)"},children:c})]}),l&&e.jsxs("li",{children:[e.jsx("span",{className:i.caption1.medium,style:{color:"var(--gray400)"},children:"기수"}),e.jsxs("span",{className:i.body4.semibold,style:{color:"var(--gray700)"},children:[l,"기"]})]}),e.jsxs("li",{children:[e.jsx("span",{className:i.caption1.medium,style:{color:"var(--gray400)"},children:"출석률"}),e.jsx("span",{className:i.body4.semibold,style:{color:"var(--gray700)"},children:"30%"})]})]})]})}const Fs=h.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
`,Hs=h.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--gray100);
  width: 48px;
  height: 48px;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
`,Ps=h.div`
  flex: 1;
  p.position {
    color: var(--primary500);
  }
  p.player-name {
    color: var(--gray900);
    word-break: keep-all;
  }
`,_s=h.ul`
  li {
    display: flex;
    padding: 8px;
    align-items: center;
    flex-direction: column;
    min-width: 65px;
    max-width: 80px;
    background-color: var(--gray50);
    border-radius: 6px;
  }
`;function Gs(){return e.jsxs(e.Fragment,{children:[e.jsx(y,{playerId:"123",name:"홍길동",level:5,profileImg:"https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",position:"가드",birthDate:"1999-12-21",gisu:1}),e.jsx(y,{playerId:"3123",name:"홍길동",level:4,profileImg:"https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",position:"가드",birthDate:"2000-01-01",gisu:1}),e.jsx(y,{playerId:"31523",name:"홍길동",level:3,profileImg:"https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",position:"가드",birthDate:"2000-01-01",gisu:2}),e.jsx(y,{playerId:"31273",name:"홍길동",level:3,profileImg:"https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",position:"가드",birthDate:"2000-01-01",gisu:3}),e.jsx(y,{playerId:"131273",name:"홍길동",level:2,profileImg:"https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",position:"센터",birthDate:"2000-01-01",gisu:3}),e.jsx(y,{playerId:"94",name:"홍길동",level:0,profileImg:"https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",position:"가드",birthDate:"2000-01-01",gisu:3})]})}function Os(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:m(R,C),children:[e.jsxs("div",{className:z,children:[e.jsx("span",{className:i.body3.semibold,children:"교류전 전적"}),e.jsx("span",{className:i.caption1.regular,style:{color:"var(--gray400)"},children:"최근 3개월 내 진행된 팀 교류전 성적 승률"})]}),e.jsxs("div",{className:B,children:[e.jsx(V,{size:124,percentage:77,rate:1,stroke:{track:20,progress:12},color:{track:"var(--primary50)"},direction:"right-to-left",children:e.jsxs("div",{className:m(i.body1.semibold,_,G),style:{color:"var(--gray900)",gap:0},children:[e.jsx("div",{className:q,style:{margin:0,backgroundColor:"var(--primary50)"},children:e.jsx(J,{width:24,height:24,fill:"var(--primary500)"})}),"87%"]})}),e.jsxs("div",{className:O,style:{flex:1,padding:"0 4px"},children:[e.jsxs("div",{className:x,children:[e.jsx(K,{fill:"var(--primary500)"}),e.jsx("p",{className:i.caption1.medium,style:{color:"var(--gray400)"},children:"승리"}),e.jsx("p",{className:i.body3.semibold,children:"59"})]}),e.jsxs("div",{className:x,children:[e.jsx(X,{fill:"var(--red500)"}),e.jsx("p",{className:i.caption1.medium,style:{color:"var(--gray400)"},children:"패배"}),e.jsx("p",{className:i.body3.semibold,children:"59"})]}),e.jsxs("div",{className:x,children:[e.jsx(Q,{fill:"var(--gray400)"}),e.jsx("p",{className:i.caption1.medium,style:{color:"var(--gray400)"},children:"무승부"}),e.jsx("p",{className:i.body3.semibold,children:"59"})]})]})]})]}),e.jsxs("div",{className:m(R,C),children:[e.jsxs("div",{className:z,children:[e.jsx("span",{className:i.body3.semibold,children:"대회 전적"}),e.jsx("span",{className:i.caption1.regular,style:{color:"var(--gray400)"},children:"최근 3개월 내 진행된 팀 대회 성적 승률"})]}),e.jsxs("div",{className:B,children:[e.jsx(V,{size:124,percentage:77,rate:1,stroke:{track:20,progress:12},color:{track:"var(--primary50)"},direction:"right-to-left",children:e.jsxs("div",{className:m(i.body1.semibold,_,G),style:{color:"var(--gray900)",gap:0},children:[e.jsx("div",{className:q,style:{margin:0,backgroundColor:"var(--primary50)"},children:e.jsx(J,{width:24,height:24,fill:"var(--primary500)"})}),"87%"]})}),e.jsxs("div",{className:O,style:{flex:1,padding:"0 4px"},children:[e.jsxs("div",{className:x,children:[e.jsx(K,{fill:"var(--primary500)"}),e.jsx("p",{className:i.caption1.medium,style:{color:"var(--gray400)"},children:"승리"}),e.jsx("p",{className:i.body3.semibold,children:"59"})]}),e.jsxs("div",{className:x,children:[e.jsx(X,{fill:"var(--red500)"}),e.jsx("p",{className:i.caption1.medium,style:{color:"var(--gray400)"},children:"패배"}),e.jsx("p",{className:i.body3.semibold,children:"59"})]}),e.jsxs("div",{className:x,children:[e.jsx(Q,{fill:"var(--gray400)"}),e.jsx("p",{className:i.caption1.medium,style:{color:"var(--gray400)"},children:"무승부"}),e.jsx("p",{className:i.body3.semibold,children:"59"})]})]})]})]})]})}function Us(){const[s,n]=T.useState(""),a=A({strict:!1}).teamId;return e.jsxs("section",{className:m(ie,W),children:[e.jsx(Bs,{}),e.jsxs("div",{className:f,children:[e.jsx(j,{link:`/team/${a}/schedule`,children:"다가오는 일정"}),e.jsx(Cs,{activeDate:s,setActiveDate:n,schedulesList:[{scheduleId:"",startDate:"2025-04-20",time:"13:50",scheduleCategory:"훈련",scheduleTitle:"팀 훈련"},{scheduleId:"",startDate:"2025-04-23",time:"18:50",scheduleCategory:"훈련",scheduleTitle:"교류전 (VS 성균관대)"}]}),e.jsx(F,{type:"button",mode:"gray",fillType:"outline",size:"medium",children:"더보기"})]}),e.jsx("div",{className:M}),e.jsxs("div",{className:f,children:[e.jsx(j,{link:`/team/${a}/matches`,children:"최근 경기"}),e.jsxs("div",{className:C,children:[e.jsx(E,{matchId:"123",competitionName:"2025년 4월 20일 교류전",matchDate:"2025-04-20",homeInfo:{name:"성균관대학교",imgUrl:"https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",score:91},awayInfo:{name:"고려대학교",imgUrl:"https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",score:78}}),e.jsx(E,{matchId:"1223",competitionName:"2025년 4월 20일 교류전",matchDate:"2025-04-20",homeInfo:{name:"성균관대학교",imgUrl:"https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",score:91},awayInfo:{name:"고려대학교",imgUrl:"https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",score:98}}),e.jsx(E,{matchId:"1223",competitionName:"2025년 4월 20일 교류전",matchDate:"2025-04-20",homeInfo:{name:"성균관대학교",imgUrl:"https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",score:91},awayInfo:{name:"고려대학교",imgUrl:"https://e7.pngegg.com/pngimages/343/759/png-clipart-sungkyunkwan-university-seoul-national-university-of-science-and-technology-research-university-others-miscellaneous-text.png",score:91}})]}),e.jsx(F,{type:"button",mode:"gray",fillType:"outline",size:"medium",children:"더보기"})]}),e.jsx("div",{className:M}),e.jsxs("div",{className:f,children:[e.jsx(j,{link:`/team/${a}/board`,children:"팀 게시판"}),e.jsx("div",{className:le,children:e.jsx(Rs,{})})]}),e.jsx("div",{className:M}),e.jsxs("div",{className:f,children:[e.jsx(j,{link:`/team/${a}/statistics`,children:"팀 데이터"}),e.jsx("div",{className:C,children:e.jsx(Os,{})})]}),e.jsx("div",{className:M}),e.jsxs("div",{className:f,children:[e.jsx(j,{link:`/team/${a}/players`,children:"팀원 "}),e.jsx("div",{className:W,children:e.jsx(Gs,{})})]}),e.jsx(H,{to:`/team/${a}/video/1`,children:"경기 영상"})]})}function Ys({teamId:s}){const{mutate:n}=ue(as.REQUEST),t=os(),{showModal:a,ModalComponents:o,modalState:c}=rs({key:"join-request-modal"}),d=l=>{n({data:{teamId:s,message:c?.["join-request-modal"]}},{onSuccess:()=>{t?.alert(`가입 신청을 해주셔서 감사합니다.
운영진의 승인까지 잠시만 기다려주세요.`,{title:"가입 신청 완료",color:"primary",showIcon:!0}),l()},onError:r=>{if(r.response?.data){const p=r.response.data.error==="E415"?"운영진의 가입 승인까지 잠시만 기다려주세요.":`잠시후 다시 시도해주세요. [${r.status}]`;t?.alert(`${p}
Occurred Date ${b(new Date,"yyyy-MM-dd HH:mm:ss")}`,{title:r.response?.data.message,color:"red",showIcon:!0}),r.response.data.error==="E415"&&l();return}t?.alert(`잠시후 다시 시도해주세요. [${r.status}]
Occurred Date ${b(new Date,"yyyy-MM-dd HH:mm:ss")}`,{title:"에러",color:"red",showIcon:!0})}})};return e.jsxs(e.Fragment,{children:[e.jsx(ns,{children:e.jsx(F,{type:"button",mode:"primary",size:"xlarge",fullWidth:!0,onClick:a,children:"팀 가입 신청"})}),e.jsx(o,{title:"팀 가입 신청",description:"가입을 위한 메시지를 남겨보세요",buttons:[{name:"신청",onClick:l=>{d(l)},mode:"primary"}],children:({setState:l})=>e.jsx(is,{title:"가입 요청 메시지",placeholder:"최대 80자까지 작성할 수 있어요.",height:100,maxLength:80,onChange:r=>l(r.target.value),displayLength:!0})})]})}function Oa(){const{teamId:s}=he.useParams(),{data:n,isLoading:t}=ge(`${ts.TEAMS}/${s}`);return t||!n?e.jsx(ls,{page:!0}):e.jsxs(e.Fragment,{children:[e.jsx(Ds,{...n}),e.jsx(Us,{}),n.joinYn==="Y"&&e.jsx(Ys,{teamId:s})]})}export{Oa as component};
