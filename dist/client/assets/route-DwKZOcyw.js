import{j as e,R as fe,r as c,u as Z,c as Y,a as je,O as be}from"./main-DdFHfJsj.js";import{c as m}from"./clsx-B-dksMZM.js";import{u as $}from"./useModal-bBiNf1JN.js";import{a as le}from"./index.esm-BMv8ZhrT.js";import{u as ne}from"./useToast-DPQsexqB.js";import{f as a}from"./fonts.css-GssQgTP4.js";import{c as K,d as H,n as N,l as h,a as R,f as D,m as S,k as L,w as de,r as se,g as Ne,p as we}from"./container.css-CS477Ypa.js";import{D as ce}from"./DropdownInput-DqlQBDw2.js";import{T as me}from"./ToggleSwitch-DVcByr_g.js";import{a as A,D as O}from"./DateInput-BXJ3MBjA.js";import{a as V}from"./styled-components.browser.esm-B_lRBw7u.js";import{F as k}from"./common-p2nbeD7y.js";import{B as Ce}from"./Button-BOrbA0iP.js";import{B as pe}from"./BaseInput-QIE2P0lY.js";import{I as Se}from"./Wrapper-woxNXEhf.js";import{t as Ie,c as ke,a as Te}from"./container.css-B1jfIjJ-.js";import{D as z}from"./DownArrow-Biwl0eI3.js";import{t as he}from"./toDate-qOSwr3PX.js";import{s as X}from"./vanilla-extract-css.browser.esm-WxGd34AK.js";import{C as q}from"./Calendar-DWVqCeg-.js";import{L as J}from"./LocationPin-CV31ahKG.js";import{C as Q}from"./Clock-BfCcfOFC.js";import{R as P}from"./RightArrow-dwaHOcVo.js";import{i as ue}from"./LeftArrow-9PDewAU0.js";import{s as Me}from"./calendar.css-BtNQ_QGc.js";import{D as G}from"./DropdownAction-H5tcoaaV.js";import{S as ie}from"./RecentVoteCard-TrQpIsuT.js";import{B as Re}from"./Badge-DEC00oXR.js";import{C as oe}from"./Check-CjNx6COD.js";import{S as $e}from"./Send-CulGUB5Y.js";import{u as De}from"./PopupProvider-COaEMj1P.js";import"./Portal-CMVPEwGZ.js";import"./AlertFilled-005YqH1n.js";import"./Close20-CLpDEKFn.js";import"./container-CvJi3BRQ.js";import"./InputWrapper-3IDnfKjB.js";import"./Minus-qzPRJPNy.js";import"./useCalendar-DuUYv0vV.js";import"./isSameMonth-Cfx93zVn.js";import"./format-BUIW76fP.js";import"./differenceInCalendarDays-YNEZ6MTG.js";import"./getDay-BBGk_gga.js";import"./addDays-CtYUbYF3.js";import"./endOfMonth-mMwfNh2E.js";import"./getYear-BVTrOhcD.js";import"./getMonth-CwBXqN0c.js";import"./isToday-vGOu0Uy7.js";import"./isSameDay-DubJbAPm.js";import"./Search-D9vcyU_9.js";import"./common-DjdCxSrg.js";import"./RightDirection-CpAsiIe1.js";function _(t){return he(t).getHours()}function Ve(t){return he(t).getMinutes()}function Be(t){const{mode:n,title:g,children:u}=t;if(n==="bottom-sheet"){const{BottomSheetContainer:p,onClickConfirm:o,bottomSheetTitle:r,bottomSheetDescription:b}=t;return e.jsx(p,{draggable:"all",title:r??g,description:b,buttons:[{name:"확인",onClick:y=>{o(),y()},mode:"primary"}],children:e.jsx("div",{style:{margin:"28px 0 12px"},children:u})})}else{const{position:p,showTimeModal:o}=t;if(o)return e.jsx("div",{className:Ie,style:{left:p.x==="left"?0:"auto",right:p.x==="right"?0:"auto",top:p.y==="top"?"100%":"auto",bottom:p.y==="bottom"?"100%":"auto"},children:u})}}const ee=fe.forwardRef((t,n)=>{const{ModalComponents:g,showModal:u}=$(),{plainStyle:p=!1,mode:o="modal",error:r,description:b,defaultValue:y,title:d}=t,[l,w]=c.useState(!1),[M,I]=c.useState({x:"left",y:"top"}),T=c.useRef(null),f=c.useRef(null);c.useImperativeHandle(n,()=>f.current);const j=y?(s=>{const[i,C]=s.split(":"),E=+i<12;return{hour:E?i:`${+i-12}`,minute:C,am:E}})(y):null,[x,v]=c.useState(()=>j?{am:j.am,hour:j.hour,minute:j.minute}:{am:_(new Date)<12,hour:_(new Date)<12?String(_(new Date)).padStart(2,"0"):String(_(new Date)-12).padStart(2,"0"),minute:String(Ve(new Date)).padStart(2,"0")}),F=()=>{if(o==="bottom-sheet")u();else{const s=T.current?.getBoundingClientRect();s&&(s.left>window.innerWidth/2?I(i=>({...i,x:"right"})):I(i=>({...i,x:"left"})),s.top>window.innerHeight/2?I(i=>({...i,y:"bottom"})):I(i=>({...i,y:"top"})))}w(!0)},ye=()=>{f.current&&(f.current.value=""),w(s=>!s)},te=()=>{if(f.current){const s=`${String(+x.hour+(!x.am&&+x.hour<12?12:0)-(x.am&&+x.hour==12?12:0)).padStart(2,"0")}:${x.minute.padStart(2,"0")}`;f.current.value=s,f.current&&(f.current.value=s,t.onChange?.({target:{name:t.name,value:s}}))}if(o==="modal")w(!1);else return};c.useEffect(()=>{const s=i=>{l&&T.current&&!T.current.contains(i.target)&&w(!1)};return document.addEventListener("mouseup",s),()=>{document.removeEventListener("mouseup",s)}},[l]);const ve=()=>t.mode==="bottom-sheet"?{bottomSheetTitle:t.bottomSheetTitle,bottomSheetDescription:t.bottomSheetDescription}:{},ae=()=>{if(t.mode==="bottom-sheet"){const{bottomSheetTitle:s,bottomSheetDescription:i,plainStyle:C,...E}=t;return{...E}}else{const{plainStyle:s,...i}=t;return i}};return e.jsxs(Le,{ref:T,children:[p?e.jsx("input",{type:"text",name:t.name,id:t.id,ref:f,onClick:t.disabled?()=>{}:F,readOnly:!0,...ae()}):e.jsxs("div",{style:{position:"relative"},className:"input-wrapper",children:[e.jsx(pe,{type:"text",error:r,name:t.name,id:t.id,description:b,ref:f,title:d,onButtonWrapClick:t.disabled?()=>{}:F,...ae()}),e.jsx("div",{className:"dropdown-icon",style:{top:d?"28px":"0"},"aria-disabled":t.disabled,onClick:t.disabled?()=>{}:F,children:e.jsx(z,{})})]}),e.jsxs(Be,{mode:o,title:d,BottomSheetContainer:g,onClickConfirm:te,position:M,showTimeModal:l,...ve(),children:[e.jsxs(He,{"data-view-mode":o,children:[e.jsxs(U,{children:[e.jsxs("div",{className:"input-wrapper",children:[e.jsx("label",{className:"modal-input-label",htmlFor:`${t.id}-hourInput`,children:"시"}),e.jsx(W,{children:e.jsx(A,{type:"text",id:`${t.id}-hourInput`,pattern:"[0-9]*",inputMode:"numeric",disabled:t.disabled,value:x.hour,onFocus:s=>s.target.select(),onChange:s=>{const i=s.target.value;if(+i>23)return null;v(C=>({...C,hour:i}))},onBlur:s=>{const i=s.target.value;+i>12?v(C=>({...C,am:!1,hour:String(+i-12).padStart(2,"0")})):+i==0?v(C=>({...C,am:!0,hour:"12"})):v(C=>({...C,hour:i.padStart(2,"0")}))}})})]}),e.jsx("span",{className:"cologne","data-view-mode":o,children:":"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("label",{className:"modal-input-label",htmlFor:`${t.id}-minuteInput`,children:"분"}),e.jsx(W,{children:e.jsx(A,{type:"text",id:`${t.id}-minuteInput`,pattern:"[0-9]*",inputMode:"numeric",value:x.minute,disabled:t.disabled,onFocus:s=>s.target.select(),onChange:s=>{if(+s.target.value>59)return null;v(i=>({...i,minute:s.target.value}))},onBlur:s=>v(i=>({...i,minute:s.target.value.padStart(2,"0")}))})})]})]}),e.jsxs(xe,{type:"button","data-view-mode":o,disabled:t.disabled,onClick:()=>{x.hour==="12"?v(s=>({...s,am:!s.am})):x.hour==="00"?v(s=>({...s,am:!1,hour:"12"})):v(s=>({...s,am:!s.am}))},children:[e.jsx("span",{"data-active":x.am,children:"오전"}),e.jsx("span",{"data-active":!x.am,children:"오후"}),e.jsx("span",{className:"active-background",style:{transform:o==="modal"?`translateY(${x.am?"0":"32px"})`:`translateX(${x.am?"0":"calc(100% + 8px)"})`}})]})]}),o==="modal"&&e.jsxs(Fe,{children:[e.jsx("button",{type:"button",className:"reset-button",onClick:ye,children:"초기화"}),e.jsx(Ce,{type:"button",mode:"primary",fillType:"default",onClick:te,children:"확인"})]})]})]})});ee.displayName="TimeInput";const Le=V.div`
  position: relative;
  div.dropdown-icon {
    position: absolute;
    height: 40px;
    display: flex;
    align-items: center;
    right: 12px;
    top: 0;
    svg {
      width: 20px;
      height: 20px;
      fill: var(--gray700);
    }
    &[aria-disabled="true"] {
      svg {
        fill: var(--gray300);
      }
    }
  }

  button.am-pm-button {
    margin-right: 2px;
    border-radius: 2px;
    &:hover {
      background-color: var(--gray100);
      outline: 3px solid var(--gray100);
    }
    &:disabled {
      color: var(--gray400);
    }
  }
`,U=V.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  color: var(--gray700);
  gap: 12px;

  div.input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  label.modal-input-label {
    ${k.body4("medium")}
  }
  span.cologne {
    display: inline-flex;
    align-items: center;
    &[data-view-mode="bottom-sheet"] {
      height: 72px;
    }
    &[data-view-mode="modal"] {
      height: 40px;
    }
  }
`,W=V(Se)`
  width: 90px;

  ${A} {
    padding: 0;
    text-align: left;
    ${k.body4("regular")};
  }
`,xe=V.button`
  position: relative;
  display: flex;
  padding: 4px;
  flex-direction: column;
  width: 60px;
  height: 100%;
  background-color: var(--gray50);
  border-radius: 10px;
  & > span {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    z-index: 1;

    &[data-active="true"] {
      color: var(--gray700);
      ${k.body4("medium")};
    }
    &[data-active="false"] {
      color: var(--gray500);
      ${k.body4("regular")};
    }
  }

  span.active-background {
    position: absolute;
    margin: 4px;
    top: 0;
    left: 0;
    width: calc(100% - 8px);
    height: 32px;
    border-radius: 6px;
    background-color: var(--white);
    z-index: 0;
    box-shadow: var(--shadow-sm);
    transition: transform 0.2s;
  }

  &[data-view-mode="bottom-sheet"] {
    flex-direction: row;
    gap: 8px;
    width: 100%;
    height: 44px;
    & > span {
      flex: 1;
      height: 36px;

      &[data-active="true"] {
        ${k.body3("medium")};
      }
      &[data-active="false"] {
        ${k.body3("regular")};
      }
    }
    span.active-background {
      width: calc(50% - 8px);
    }
  }
`,He=V.div`
  display: flex;

  &[data-view-mode="modal"] {
    height: 72px;
    gap: 20px;
    align-items: flex-end;
    justify-content: space-between;
  }
  &[data-view-mode="bottom-sheet"] {
    flex-direction: column;
    height: auto;
    gap: 24px;

    ${xe} {
      order: 1;
    }
    ${U} {
      order: 2;
    }

    ${U} {
      ${k.head6("medium")};
    }
    ${W} {
      width: 100%;
      height: 72px;
    }
    ${A} {
      padding: 20px 12px;
      text-align: center;
      ${k.head6("medium")};
    }
  }
`,Fe=V.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;

  button.reset-button {
    ${k.body3("medium")};
    color: var(--primary600);
  }
`,Ee=X({userSelect:"none",paddingBottom:"16px",paddingRight:"4px",marginBottom:"16px",borderBottom:"1px solid var(--gray200)",selectors:{"&:last-child":{borderBottom:"none"}}}),_e=X([a.body4.medium,{padding:"8px 14px",border:"1px solid var(--gray200)",borderRadius:"8px",color:"var(--gray700)",selectors:{"&:active":{backgroundColor:"var(--gray50)"}}}]),re=X({width:"24px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"4px",transition:"background-color 0.2s, box-shadow 0.2s",selectors:{"&:active":{backgroundColor:"var(--gray100)",boxShadow:"0 0 0 6px var(--gray100)"}}});function Ae({text:t,keyword:n}){if(!n)return t;const g=t.split(new RegExp(`(${n})`,"gi"));return e.jsx(e.Fragment,{children:g.map((u,p)=>u.toLowerCase()===n.toLowerCase()?e.jsx("span",{style:{display:"inline-block",color:"var(--primary500)"},children:u},p):u)})}function ge(t){const{onChange:n,closeModal:g}=t,[u,p]=c.useState(""),o=[{teamName:"서울대학교 농구동아리",leader:"김이프",teamId:"1232"},{teamName:"어반농구",leader:"김이프",teamId:"654"},{teamName:"SPABA",leader:"김이프",teamId:"745"},{teamName:"SPAPA",leader:"김이프",teamId:"7475"},{teamName:"BALL",leader:"김이프",teamId:"23423423"}];return e.jsxs(e.Fragment,{children:[e.jsx(pe,{iconType:"search",type:"text",placeholder:"팀 이름 입력",value:u,onChange:r=>p(r.target.value)}),e.jsxs("div",{className:K,style:{height:"360px"},children:[e.jsxs("p",{className:a.body4.regular,style:{color:"var(--gray400)"},children:["검색결과 ",`(${o.length}건)`]}),e.jsx("ul",{style:{overflowY:"auto"},children:o.map(r=>e.jsxs("li",{className:m(N,h,Ee),children:[e.jsxs("div",{className:H,style:{flex:1},children:[e.jsx("span",{className:a.body3.medium,children:e.jsx(Ae,{text:r.teamName,keyword:u})}),e.jsxs("span",{className:a.caption1.regular,style:{color:"var(--gray400)"},children:["팀 리더: ",r.leader]})]}),e.jsx("button",{type:"button",className:_e,onClick:()=>{n({teamId:r.teamId,teamName:r.teamName}),g()},children:"선택"})]},r.teamId))})]})]})}function Oe(){const t=Z(),n=Y({strict:!1}).teamId,{ModalComponents:g,showModal:u}=$(),{ModalComponents:p,showModal:o}=$(),{register:r,watch:b,setValue:y}=le(),d=ne(),l=c.useRef(!1),[w,M]=c.useState("훈련"),[I,T]=c.useState({teamId:"",teamName:""}),f=b("date"),B=b("activeVote");return c.useEffect(()=>{l.current||(u(),l.current=!0)},[]),c.useEffect(()=>{ue(f)&&B&&(d.trigger("과거 일정으로 참석 투표를 할 수 없습니다.",{type:"error"}),setTimeout(()=>{y("activeVote",!1)},0))},[f,B]),e.jsxs(e.Fragment,{children:[e.jsx(g,{onClose:()=>{t.navigate({to:`/team/${n}/schedule`,replace:!0})},draggable:"all",buttons:[{name:"취소",onClick:j=>j(),mode:"gray",fillType:"outline"},{name:"저장",onClick:j=>{j(),d.trigger("일정이 저장되었습니다.",{type:"success"})},mode:"primary",fillType:"default"}],children:e.jsxs("div",{className:R,children:[e.jsxs("div",{className:D,children:[e.jsx(ce,{size:"small",placeholder:"카테고리",value:w,onChange:M,options:[{value:"훈련",name:"훈련"},{value:"교류전",name:"교류전"},{value:"팀 이벤트",name:"팀 이벤트"}]}),e.jsxs("div",{className:H,style:{gap:"8px",color:"var(--gray700)"},children:[e.jsx("input",{type:"text",className:a.body1.semibold,...r("title"),placeholder:"일정 제목을 입력해 주세요"}),e.jsx("input",{type:"text",className:a.body4.regular,...r("description"),placeholder:"일정 내용을 입력해 주세요"})]})]}),e.jsxs("div",{className:D,children:[e.jsxs("div",{className:m(N,a.body4.regular),style:{color:"var(--gray500)"},children:[e.jsx(q,{width:20,height:20,fill:"var(--gray500)"})," ",e.jsx(O,{bottomSheetHeader:{title:"날짜 선택",description:"해당 날짜에 일정이 생성됩니다."},plainStyle:!0,className:a.body4.regular,placeholder:"날짜 선택",...r("date")})]}),e.jsxs("div",{className:m(N,a.body4.regular),style:{color:"var(--gray500)"},children:[e.jsx(J,{width:20,height:20,fill:"var(--gray500)"}),e.jsx("input",{type:"text",className:a.body4.regular,...r("location"),placeholder:"장소 선택"})]}),e.jsxs("div",{className:m(N,a.body4.regular),style:{color:"var(--gray500)"},children:[e.jsx(Q,{width:20,height:20,fill:"var(--gray500)"}),e.jsx(ee,{bottomSheetTitle:"시간 선택",bottomSheetDescription:"일정이 시작될 시간을 입력해 주세요.",placeholder:"시간 선택",mode:"bottom-sheet",...r("time"),plainStyle:!0})]})]}),w==="교류전"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"100%",height:"1px",backgroundColor:"var(--gray200)"}}),e.jsxs("div",{className:m(h,S,L),children:[e.jsx("span",{className:a.body4.medium,children:"대결 상대팀"}),e.jsxs("span",{className:h,onClick:()=>o(),children:[e.jsx("span",{className:a.body4.regular,children:I.teamName}),e.jsx(P,{width:24,height:24,fill:"var(--gray700)"})]})]})]}),e.jsx("div",{style:{width:"100%",height:"1px",backgroundColor:"var(--gray200)"}}),e.jsxs("div",{className:K,children:[e.jsxs("div",{className:m(h,S),children:[e.jsx("span",{className:a.body4.medium,children:"참석 여부 투표"}),e.jsx(me,{size:"large",...r("activeVote")})]}),e.jsxs("div",{className:m(h,S),style:{display:b("activeVote")?"flex":"none"},children:[e.jsx("span",{className:a.body4.medium,children:"투표 마감 날짜"}),e.jsxs("span",{className:h,children:[e.jsx(O,{pickType:"ONLY_FUTURE",plainStyle:!0,className:a.body4.regular,style:{cursor:"pointer",width:"108px",paddingRight:"28px",marginRight:"-24px",zIndex:1},placeholder:"",...r("voteEndDate")}),e.jsx(P,{width:24,height:24,fill:"var(--gray700)"})]})]})]})]})}),e.jsx(p,{draggable:"bar",title:"대결 상대팀 검색",description:"대결하고 싶은 상대팀을 검색하고, 선택해 주세요.",children:({closeModal:j})=>e.jsx("div",{className:de,style:{gap:"32px",marginTop:"-12px"},children:e.jsx(ge,{onChange:T,closeModal:j})})})]})}const Pe="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2774'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2774)'%3e%3cpath%20d='M7.30775%2020.5C6.80908%2020.5%206.38308%2020.3234%206.02975%2019.9702C5.67658%2019.6169%205.5%2019.1909%205.5%2018.6922V6.49998C5.5%206.22384%205.27614%205.99998%205%205.99998C4.72386%205.99998%204.5%205.77612%204.5%205.49998V5.24998C4.5%204.83577%204.83579%204.49998%205.25%204.49998H9C9%204.01148%209.396%203.61548%209.8845%203.61548H14.1155C14.604%203.61548%2015%204.01148%2015%204.49998H18.75C19.1642%204.49998%2019.5%204.83577%2019.5%205.24998C19.5%205.66419%2019.1642%205.99998%2018.75%205.99998H18.5V18.6922C18.5%2019.1974%2018.325%2019.625%2017.975%2019.975C17.625%2020.325%2017.1974%2020.5%2016.6923%2020.5H7.30775ZM17%205.99998H7V18.6922C7%2018.7821%207.02883%2018.8558%207.0865%2018.9135C7.14417%2018.9711%207.21792%2019%207.30775%2019H16.6923C16.7692%2019%2016.8398%2018.9679%2016.9038%2018.9037C16.9679%2018.8397%2017%2018.7692%2017%2018.6922V5.99998ZM9.404%2016.2501C9.404%2016.6642%209.73973%2017%2010.1539%2017C10.568%2017%2010.9037%2016.6642%2010.9037%2016.2501V8.74985C10.9037%208.33571%2010.568%207.99998%2010.1539%207.99998C9.73973%207.99998%209.404%208.33571%209.404%208.74985V16.2501ZM13.0962%2016.2501C13.0962%2016.6642%2013.432%2017%2013.8461%2017C14.2603%2017%2014.596%2016.6642%2014.596%2016.2501V8.74985C14.596%208.33571%2014.2603%207.99998%2013.8461%207.99998C13.432%207.99998%2013.0962%208.33571%2013.0962%208.74985V16.2501Z'%20/%3e%3c/g%3e%3c/svg%3e",Ge="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_411_6209'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_411_6209)'%3e%3cpath%20d='M5%2018.4C5%2018.7314%205.26863%2019%205.6%2019H6.01297C6.1721%2019%206.32471%2018.9368%206.43724%2018.8243L16.498%208.7635L15.2365%207.502L5.17574%2017.5628C5.06321%2017.6753%205%2017.8279%205%2017.987V18.4ZM4.5%2020.5C3.94772%2020.5%203.5%2020.0523%203.5%2019.5V17.5298C3.5%2017.2646%203.60542%2017.0101%203.79305%2016.8226L16.6905%203.93075C16.8417%203.79342%2017.0086%203.68733%2017.1913%203.6125C17.3741%203.5375%2017.5658%203.5%2017.7663%203.5C17.9668%203.5%2018.1609%203.53558%2018.3488%203.60675C18.5367%203.67792%2018.7032%203.79108%2018.848%203.94625L20.0693%205.18275C20.2244%205.32758%2020.335%205.49425%2020.401%205.68275C20.467%205.87125%2020.5%206.05975%2020.5%206.24825C20.5%206.44942%2020.4657%206.64133%2020.397%206.824C20.3283%207.00683%2020.2191%207.17383%2020.0693%207.325L7.17735%2020.2074C6.98983%2020.3947%206.73559%2020.5%206.4705%2020.5H4.5ZM15.8562%208.14375L15.2365%207.502L16.498%208.7635L15.8562%208.14375Z'%20/%3e%3c/g%3e%3c/svg%3e";function ze({scheduleId:t}){const n=Z(),g=Y({strict:!1}).teamId,{ModalComponents:u,showModal:p}=$(),[o,r]=c.useState(!0),b=c.useRef(!1),y={훈련:"gray",교류전:"primary",팀:"info",대회:"purple"};c.useEffect(()=>{b.current||(p(),b.current=!0)},[]);const d={category:"훈련",title:"훈련 1",place:"장소 1",date:"2025-05-26",time:"15:00",people:[{userId:"1",username:"홍길동",img:"https://picsum.photos/seed/picsum/300"},{userId:"2",username:"김철수",img:"https://picsum.photos/seed/picsum/300"}],comments:[{commentsId:"1245",profileImg:"https://picsum.photos/seed/picsum/100",name:"홍길동",date:"2025-05-20 22:50",text:"서초 종합 운동장 입구에서 만나나요? 서초역에서 만나서 같이 가실분?"},{commentsId:"16245",profileImg:"https://picsum.photos/seed/picsum/40",name:"김영희",date:"2025-05-20 22:57",text:"저 나중에 그 근처에서 같이 가니깐요~"},{commentsId:"616245",profileImg:"https://picsum.photos/seed/picsum/40",name:"김영희",date:"2025-05-20 22:57",text:"저 나중에 그 근처에서 같이 가니깐요~"},{commentsId:"1025",profileImg:"https://picsum.photos/seed/picsum/10",name:"김영희",date:"2025-05-20 22:57",text:"저 나중에 그 근처에서 같이 가니깐요~"},{commentsId:"87975",profileImg:"https://picsum.photos/seed/picsum/40",name:"김이프",date:"2025-05-20 22:57",text:"저 나중에 그 근처에서 같이 가니깐요~"},{commentsId:"17055",profileImg:"https://picsum.photos/seed/picsum/10",name:"김영희",date:"2025-05-20 22:57",text:"저 나중에 그 근처에서 같이 가니깐요~"},{commentsId:"9875",profileImg:"https://picsum.photos/seed/picsum/40",name:"김이프",date:"2025-05-20 22:57",text:"저 나중에 그 근처에서 같이 가니깐요~"},{commentsId:"19905",profileImg:"https://picsum.photos/seed/picsum/10",name:"김영희",date:"2025-05-20 22:57",text:"저 나중에 그 근처에서 같이 가니깐요~"},{commentsId:"41975",profileImg:"https://picsum.photos/seed/picsum/40",name:"김이프",date:"2025-05-20 22:57",text:"저 나중에 그 근처에서 같이 가니깐요~"}]};return e.jsx(u,{onClose:()=>{r(!0),n.navigate({to:`/team/${g}/schedule`,replace:!0})},draggable:"all",buttons:o?[{name:"경기 내용 보러가기",onClick:()=>{},mode:"primary"}]:void 0,children:e.jsxs("div",{className:R,children:[e.jsxs("div",{className:R,style:{display:o?"flex":"none"},children:[e.jsxs("div",{className:D,children:[e.jsxs("div",{className:m(S,h),children:[e.jsx(Re,{size:"medium",type:y[d?.category],fillType:"light",children:d?.category}),e.jsxs("div",{className:m(se,h),children:[e.jsx("button",{type:"button",className:re,onClick:()=>{n.navigate({to:`/team/${g}/schedule?feat=edit|${t}`})},children:e.jsx(Ge,{width:24,height:24,fill:"var(--gray700)"})}),e.jsx("button",{type:"button",className:re,children:e.jsx(Pe,{width:24,height:24,fill:"var(--gray700)"})})]})]}),e.jsxs("div",{className:H,style:{gap:"8px",color:"var(--gray700)"},children:[e.jsx("div",{className:a.body2.semibold,children:d?.title}),e.jsx("div",{className:a.body4.regular,children:"부원들끼리 서초구 종합 운동장에 모여 리그 챔피언 배구 경기를 관전합니다. 어떻게 경기가 진행되는지 잘 살펴봅시다!"})]})]}),e.jsxs("div",{className:D,children:[e.jsxs("div",{className:m(N,a.body4.regular),style:{color:"var(--gray500)"},children:[e.jsx(q,{width:20,height:20,fill:"var(--gray500)"})," ",d?.date]}),e.jsxs("div",{className:m(N,a.body4.regular),style:{color:"var(--gray500)"},children:[e.jsx(J,{width:20,height:20,fill:"var(--gray500)"})," ",d?.place]}),e.jsxs("div",{className:m(N,a.body4.regular),style:{color:"var(--gray500)"},children:[e.jsx(Q,{width:20,height:20,fill:"var(--gray500)"})," ",d?.time]})]}),e.jsx("div",{style:{width:"100%",height:"1px",backgroundColor:"var(--gray200)"}}),e.jsxs("div",{className:Ne,children:[e.jsxs("div",{className:S,children:[e.jsx("p",{className:a.body4.medium,style:{color:"var(--gray700)"},children:"참석 여부"}),e.jsxs("div",{className:se,style:{color:"var(--gray700)"},children:[e.jsx(G,{maxHeight:"200px",options:d?.people.map(l=>({name:e.jsxs("p",{className:h,children:[e.jsx("img",{src:l.img,alt:l.username,style:{width:"20px",height:"20px",borderRadius:"50%",marginRight:"8px"}}),l.username]}),action:()=>{}})),children:e.jsxs("div",{className:h,style:{cursor:"pointer"},children:[e.jsxs("span",{className:L,children:[e.jsx("span",{className:a.body4.medium,children:"참석"})," ",e.jsx("span",{className:a.body4.medium,style:{color:"var(--primary500)"},children:"18"})]}),e.jsx(z,{width:24,height:24,fill:"var(--gray600)"})]})}),e.jsx(G,{maxHeight:"200px",options:d?.people.map(l=>({name:e.jsxs("p",{className:h,children:[e.jsx("img",{src:l.img,alt:l.username,style:{width:"20px",height:"20px",borderRadius:"50%",marginRight:"8px"}}),l.username]}),action:()=>{}})),children:e.jsxs("div",{className:h,style:{cursor:"pointer"},children:[e.jsxs("span",{className:L,children:[e.jsx("span",{className:a.body4.medium,children:"불참석"})," ",e.jsx("span",{className:a.body4.medium,style:{color:"var(--primary500)"},children:"8"})]}),e.jsx(z,{width:24,height:24,fill:"var(--gray600)"})]})})]})]}),e.jsxs("div",{className:N,children:[e.jsxs(ie,{children:[e.jsx("input",{style:{visibility:"hidden"},type:"radio",name:"vote"}),e.jsx("div",{className:"checkbox",children:e.jsx(oe,{width:20,height:20})}),e.jsx("span",{className:a.body4.medium,children:"참석"})]}),e.jsxs(ie,{children:[e.jsx("input",{style:{visibility:"hidden"},type:"radio",name:"vote"}),e.jsx("div",{className:"checkbox",children:e.jsx(oe,{width:20,height:20})}),e.jsx("span",{className:a.body4.medium,children:"불참석"})]})]})]}),e.jsx("div",{style:{width:"100%",height:"1px",backgroundColor:"var(--gray200)"}})]}),e.jsxs("div",{className:R,children:[e.jsxs("div",{className:S,children:[e.jsxs("p",{className:a.body4.medium,style:{color:"var(--gray700)"},children:["댓글 ",e.jsxs("span",{style:{color:"var(--gray400)"},children:["(",d?.comments.length,"개)"]})]}),e.jsx("button",{type:"button",className:a.body4.regular,style:{color:"var(--gray700)",textDecoration:"underline"},onClick:()=>r(l=>!l),children:o?"펼쳐보기":"간략히"})]}),e.jsx("div",{className:m(R,Me,"scrollable-container"),"data-fold":o,children:d?.comments.map(l=>e.jsxs("div",{className:we,children:[e.jsx("img",{src:l.profileImg,alt:"",width:28,height:28,style:{borderRadius:"50%"}}),e.jsxs("div",{className:H,style:{gap:"6px",flex:1,color:"var(--gray700)"},children:[e.jsxs("div",{className:S,children:[e.jsx("div",{className:a.body4.semibold,children:l.name}),e.jsxs("div",{className:m(a.caption1.regular,L,h),style:{color:"var(--gray400)"},children:[e.jsx("span",{children:l.date}),e.jsx(G,{icon:!0,options:[{name:"수정",action:()=>{}},{name:"삭제",action:()=>{}}]})]})]}),e.jsx("div",{className:a.body4.regular,children:l.text})]})]},l.commentsId))}),!o&&e.jsxs("div",{className:ke,style:{marginBottom:"-20px"},children:[e.jsx("input",{type:"text",className:Te,placeholder:"댓글을 입력해 주세요"}),e.jsx($e,{fill:"var(--gray300)",width:24,height:24})]})]})]})})}function Ue({scheduleId:t}){const n=Z(),g=De(),u=Y({strict:!1}).teamId,{ModalComponents:p,showModal:o}=$(),{ModalComponents:r,showModal:b}=$(),{register:y,watch:d,setValue:l}=le(),w=ne(),M=c.useRef(!1),[I,T]=c.useState("훈련"),[f,B]=c.useState({teamId:"",teamName:""}),j=d("date"),x=d("activeVote");return c.useEffect(()=>{M.current||(o(),M.current=!0)},[]),c.useEffect(()=>{ue(j)&&x&&(w.trigger("과거 일정으로 참석 투표를 할 수 없습니다.",{type:"error"}),setTimeout(()=>{l("activeVote",!1)},0))},[j,x]),e.jsxs(e.Fragment,{children:[e.jsx(p,{onClose:()=>{n.navigate({to:`/team/${u}/schedule`,replace:!0})},draggable:"all",buttons:[{name:"취소",onClick:v=>v(),mode:"gray",fillType:"outline"},{name:"수정",onClick:async v=>{await g?.confirm(`해당 내용으로 일정을 수정하시겠어요?
수정 일정 적용 시, 팀원에게 알림이 전송됩니다.`,{title:"일정 수정",buttonText:{yes:"네, 수정할게요",no:"취소"}})&&(v(),w.trigger("일정이 저장되었습니다.",{type:"success"}))},mode:"primary",fillType:"default"}],children:e.jsxs("div",{className:R,children:[e.jsxs("div",{className:D,children:[e.jsx(ce,{size:"small",placeholder:"카테고리",value:I,onChange:T,options:[{value:"훈련",name:"훈련"},{value:"교류전",name:"교류전"},{value:"팀 이벤트",name:"팀 이벤트"}]}),e.jsxs("div",{className:H,style:{gap:"8px",color:"var(--gray700)"},children:[e.jsx("input",{type:"text",className:a.body1.semibold,...y("title"),placeholder:"일정 제목을 입력해 주세요"}),e.jsx("input",{type:"text",className:a.body4.regular,...y("description"),placeholder:"일정 내용을 입력해 주세요"})]})]}),e.jsxs("div",{className:D,children:[e.jsxs("div",{className:m(N,a.body4.regular),style:{color:"var(--gray500)"},children:[e.jsx(q,{width:20,height:20,fill:"var(--gray500)"})," ",e.jsx(O,{bottomSheetHeader:{title:"날짜 선택",description:"해당 날짜에 일정이 생성됩니다."},plainStyle:!0,className:a.body4.regular,placeholder:"날짜 선택",...y("date")})]}),e.jsxs("div",{className:m(N,a.body4.regular),style:{color:"var(--gray500)"},children:[e.jsx(J,{width:20,height:20,fill:"var(--gray500)"}),e.jsx("input",{type:"text",className:a.body4.regular,...y("location"),placeholder:"장소 선택"})]}),e.jsxs("div",{className:m(N,a.body4.regular),style:{color:"var(--gray500)"},children:[e.jsx(Q,{width:20,height:20,fill:"var(--gray500)"}),e.jsx(ee,{bottomSheetTitle:"시간 선택",bottomSheetDescription:"일정이 시작될 시간을 입력해 주세요.",placeholder:"시간 선택",mode:"bottom-sheet",...y("time"),plainStyle:!0})]})]}),I==="교류전"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"100%",height:"1px",backgroundColor:"var(--gray200)"}}),e.jsxs("div",{className:m(h,S,L),children:[e.jsx("span",{className:a.body4.medium,children:"대결 상대팀"}),e.jsxs("span",{className:h,onClick:()=>b(),children:[e.jsx("span",{className:a.body4.regular,children:f.teamName}),e.jsx(P,{width:24,height:24,fill:"var(--gray700)"})]})]})]}),e.jsx("div",{style:{width:"100%",height:"1px",backgroundColor:"var(--gray200)"}}),e.jsxs("div",{className:K,children:[e.jsxs("div",{className:m(h,S),children:[e.jsx("span",{className:a.body4.medium,children:"참석 여부 투표"}),e.jsx(me,{size:"large",...y("activeVote")})]}),e.jsxs("div",{className:m(h,S),style:{display:d("activeVote")?"flex":"none"},children:[e.jsx("span",{className:a.body4.medium,children:"투표 마감 날짜"}),e.jsxs("span",{className:h,children:[e.jsx(O,{pickType:"ONLY_FUTURE",plainStyle:!0,className:a.body4.regular,style:{cursor:"pointer",width:"108px",paddingRight:"28px",marginRight:"-24px",zIndex:1},placeholder:"",...y("voteEndDate")}),e.jsx(P,{width:24,height:24,fill:"var(--gray700)"})]})]})]})]})}),e.jsx(r,{draggable:"bar",title:"대결 상대팀 검색",description:"대결하고 싶은 상대팀을 검색하고, 선택해 주세요.",children:({closeModal:v})=>e.jsx("div",{className:de,style:{gap:"32px",marginTop:"-12px"},children:e.jsx(ge,{onChange:B,closeModal:v})})})]})}function zt(){const{feat:t}=je({from:"/team/$teamId/schedule"}),n=t?.startsWith("view")||t?.startsWith("edit")?t.split("|")[1]:null;return e.jsxs(e.Fragment,{children:[t==="new"&&e.jsx(Oe,{}),t?.startsWith("view")&&e.jsx(ze,{scheduleId:n}),t?.startsWith("edit")&&e.jsx(Ue,{scheduleId:n}),e.jsx(be,{})]})}export{zt as component};
