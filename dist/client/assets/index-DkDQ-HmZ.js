import{R as Q,r as d,j as e}from"./main-DdFHfJsj.js";import{a as o}from"./styled-components.browser.esm-B_lRBw7u.js";import{a as Z}from"./index.esm-BMv8ZhrT.js";import{F as v,T as ee}from"./common-p2nbeD7y.js";import{B as s}from"./BaseInput-QIE2P0lY.js";import{u as te,s as ae}from"./useCalendar-DuUYv0vV.js";import{u as re}from"./useToast-DPQsexqB.js";import{u as ie,h as ne,f as oe,o as le}from"./container-CvJi3BRQ.js";import{a as Y,i as L,L as se}from"./LeftArrow-9PDewAU0.js";import{R as de}from"./RightArrow-dwaHOcVo.js";import{D as pe}from"./DownArrow-Biwl0eI3.js";import{N as _}from"./NumberFlowInput-BWRuvBSG.js";import{g as ce}from"./getYear-BVTrOhcD.js";import{g as ue}from"./getMonth-CwBXqN0c.js";import{i as z}from"./isToday-vGOu0Uy7.js";import{i as M}from"./isSameMonth-Cfx93zVn.js";import{i as me}from"./isSameDay-DubJbAPm.js";import{a as xe}from"./endOfMonth-mMwfNh2E.js";import{f as ge}from"./format-BUIW76fP.js";import{S as he}from"./SPORTS-DFED9l2s.js";import{B}from"./Button-BOrbA0iP.js";import{a as f}from"./SelectInput-4xvXY9NK.js";import{T as W}from"./TextArea-CjsgM-GX.js";import{D as E}from"./DropdownInput-DqlQBDw2.js";import"./clsx-B-dksMZM.js";import"./fonts.css-GssQgTP4.js";import"./vanilla-extract-css.browser.esm-WxGd34AK.js";import"./Wrapper-woxNXEhf.js";import"./InputWrapper-3IDnfKjB.js";import"./container.css-B1jfIjJ-.js";import"./Close20-CLpDEKFn.js";import"./Search-D9vcyU_9.js";import"./differenceInCalendarDays-YNEZ6MTG.js";import"./toDate-qOSwr3PX.js";import"./getDay-BBGk_gga.js";import"./addDays-CtYUbYF3.js";import"./AlertFilled-005YqH1n.js";import"./NumberFlow-client-48rw3j0J-CFpaRRO2.js";import"./Check-CjNx6COD.js";const N=Q.forwardRef((l,C)=>{const{children:A,error:$,description:I,defaultValue:x,title:S,delButton:O=!1,value:r,pickType:c="EVERYDAY",...p}=l,{trigger:y}=re(),[n,u]=d.useState(!1),{refs:b,floatingStyles:X}=ie({placement:"bottom-start",open:n,onOpenChange:u,middleware:[ne(),oe(),le(8)]}),V=d.useRef(null),{dayList:q,weekCalendarList:K,currentDate:g,setCurrentDate:j}=te(),w=d.useRef(null);d.useImperativeHandle(C,()=>w.current);const[R,T]=d.useState(()=>r?+r.split("-")[0]:x?+x.split("-")[0]:+ce(new Date)),[D,k]=d.useState(()=>r?+r.split("-")[1]:x?+x.split("-")[1]:+ue(new Date)+1);d.useEffect(()=>{const t=r||x||w.current?.value;if(t){const[a,i,F]=t.split("-");j(new Date(`${a}/${i}/${F}`)),T(+a),k(+i)}},[r,j]);const P=t=>{const a=t==="PREV"?ae(g,1):xe(g,1);t==="NEXT"&&c==="ONLY_PAST"&&M(a,new Date)&&Y(a)||t==="PREV"&&c==="ONLY_FUTURE"&&M(a,new Date)&&L(a)?j(new Date):j(a),T(a.getFullYear()),k(a.getMonth()+1)},U=()=>{u(!0)},G=t=>{const a=ge(t,"yyyy-MM-dd");w.current&&(w.current.value=a,p.onChange&&p.onChange({target:{value:a}}),u(!1),w.current.focus())},h=t=>{const a=t??new Date;j(a),T(a.getFullYear()),k(a.getMonth()+1)};return d.useEffect(()=>{const t=a=>{n&&V.current&&!V.current.contains(a.target)&&u(!1)};document.addEventListener("mouseup",t)},[n]),e.jsxs(fe,{ref:V,children:[e.jsxs("div",{ref:b.setReference,style:{position:"relative"},children:[e.jsx(s,{error:$,description:I,ref:w,type:"text",title:S,onButtonWrapClick:l.disabled?()=>{}:U,defaultValue:x&&`${R}-${D}-${+x.split("-")[2]}`,...p}),e.jsx("div",{className:"dropdown-icon",style:{top:S?"28px":"0"},"aria-disabled":l.disabled,onClick:l.disabled?()=>{}:U,children:e.jsx(pe,{})})]}),n&&e.jsxs(ve,{role:"dialog",ref:b.setFloating,style:X,children:[e.jsxs(ye,{children:[e.jsxs(be,{children:[e.jsxs("div",{className:"year",children:[e.jsx(_,{"aria-label":"연도 입력",pattern:"[0-9]*",inputMode:"numeric",value:R,maxLength:4,onFocus:t=>t.target.select(),onChange:t=>T(+t.target.value.slice(0,4)),onBlur:t=>{const a=Number(t.target.value);if(t.target.value!==""&&a>1900&&a<2999){const i=new Date(a,D,g.getDate());c==="ONLY_PAST"&&Y(i)?(h(),y("미래로 날짜를 설정할 수 없어요.",{type:"error"})):c==="ONLY_FUTURE"&&L(i)&&!z(i)?(h(),y("과거로 날짜를 설정할 수 없어요.",{type:"error"})):h(new Date(a,D-1,g.getDate()))}else h()}}),"년"]}),e.jsxs("div",{className:"month",children:[e.jsx(_,{min:1,max:12,"aria-label":"월 입력",pattern:"[0-9]*",inputMode:"numeric",style:{paddingRight:"1px",width:D<10?"12px":"20px",textAlign:D<10?"right":"left"},value:D,onFocus:t=>t.target.select(),onChange:t=>{Number(t.target.value)>=0&&Number(t.target.value)<13&&k(+t.target.value)},onBlur:t=>{const a=Number(t.target.value);if(t.target.value!==""&&a>0&&a<13){const i=new Date(R,a,g.getDate());c==="ONLY_PAST"&&Y(i)?(h(),y("미래로 날짜를 설정할 수 없어요.",{type:"error"})):c==="ONLY_FUTURE"&&L(i)&&!z(i)?(h(),y("과거로 날짜를 설정할 수 없어요.",{type:"error"})):h(new Date(R,a-1,g.getDate()))}else h()}}),"월"]})]}),e.jsxs(je,{children:[e.jsx("button",{type:"button",disabled:c==="ONLY_FUTURE"&&M(g,new Date),onClick:()=>P("PREV"),children:e.jsx(se,{})}),e.jsx("button",{type:"button",disabled:c==="ONLY_PAST"&&M(g,new Date),onClick:()=>P("NEXT"),children:e.jsx(de,{})})]})]}),e.jsxs(we,{children:[e.jsx(H,{className:"week-name-header",children:q.map(t=>e.jsx(De,{children:t},t))}),K.map((t,a)=>e.jsx(H,{children:t.map(i=>e.jsx(Ne,{tabIndex:i.nextMonth||i.previousMonth?-1:i.displayValue,type:"button",$isCurrentMonth:!(i.nextMonth||i.previousMonth),$isHoliday:i.holiday.isHoliday,className:me(i.date,g)?"current-date":"","aria-label":`${i.date.getMonth()+1}월 ${i.displayValue}일`,onClick:()=>{const F=i.date.getFullYear(),J=i.date.getMonth()+1;j(i.date),T(F),k(J),G(i.date)},children:i.displayValue},i.date.toString()))},a))]})]})]})});N.displayName="DateCalendarInput";const fe=o.div`
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
`,ve=o.div`
  position: absolute;
  margin: 0 -4px;
  width: 320px;
  min-width: 320px;
  padding: 16px;
  background-color: var(--background-light);
  border-radius: 10px;
  box-shadow: var(--shadow-lg);
  z-index: 50;
  color: var(--gray700);
`,ye=o.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
`,be=o.div`
  display: flex;
  gap: 8px;
  color: var(--gray900);
  ${v.body2("semibold")};

  & > div.year,
  & > div.month {
    display: flex;
    align-items: center;
  }
`,je=o.div`
  display: flex;
  gap: 12px;
  button {
    width: 28px;
    height: 28px;
    border-radius: 4px;

    svg {
      width: 100%;
      height: 100%;
      fill: var(--gray700);
    }
    &:not(:disabled) {
      ${ee("var(--gray100)",{activeRange:2})}
    }
    &:disabled {
      cursor: not-allowed;
      svg {
        fill: var(--gray300);
      }
    }
  }
`,we=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,H=o.div`
  display: flex;
  justify-content: space-between;

  &.week-name-header {
    display: inline-flex;
    align-items: center;
    margin-bottom: -8px;
  }
`,De=o.div`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--gray400);
  ${v.body4("medium")};
`,Ne=o.button`
  width: 40px;
  height: 40px;
  text-align: center;
  border: 1px solid transparent;
  /* color: ${({$isHoliday:l})=>l?"var(--red400)":"var(--gray700)"}; */
  color: ${({$isCurrentMonth:l})=>l?"var(--gray700)":"var(--gray300)"};
  border-radius: 10px;
  ${v.body3("medium")};

  &[aria-invalid] {
    visibility: hidden;
  }
  &:hover {
    background-color: var(--gray50);
  }
  &:active {
    background-color: var(--gray100);
  }
  &.current-date {
    background-color: var(--main);
    transform: scale(1.03);
    color: var(--white);
    ${v.body3("semibold")};
  }
`;function m({title:l,children:C}){return e.jsxs(Ce,{children:[e.jsx("p",{className:"input-title",children:l}),e.jsx(Te,{children:C})]})}const Ce=o.div`
  .input-title {
    font-size: 1.4rem;
    margin-bottom: 4px;
    padding: 0 10px;
    font-weight: 500;
    color: var(--gray700);
    line-height: 2.4rem;
  }

  .input-information {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    padding: 0 8px;
    font-size: 1.2rem;
    color: var(--gray700);
    gap: 4px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`,Te=o.div`
  display: flex;
  gap: 10px;
`;function xt(){const[l,C]=d.useState(""),[A,$]=d.useState(""),[I,x]=d.useState(""),[S,O]=d.useState(""),{register:r,handleSubmit:c,formState:{errors:p}}=Z(),y=n=>{console.log(n)};return e.jsxs(ke,{children:[e.jsx("h2",{children:"새 대회 만들기"}),e.jsxs("form",{onSubmit:c(y),children:[e.jsx("section",{className:"poster",children:e.jsx("label",{children:"포스터 이미지 첨부"})}),e.jsxs("section",{className:"form-flex2",children:[e.jsxs(m,{title:"종목 및 대회명",children:[e.jsx("div",{style:{width:"220px"},children:e.jsx(E,{placeholder:"종목 선택",value:l,onChange:C,options:he.map(n=>({name:n.name,value:n.value}))})}),e.jsx(s,{type:"text",tabIndex:1,...r("title",{required:!0}),placeholder:"대회명을 입력하세요"})]}),e.jsxs("section",{className:"form-grid-2",children:[e.jsxs(m,{title:"모집 기간",children:[e.jsx(N,{tabIndex:3,placeholder:"모집 시작일",...r("applyStartDate",{valueAsDate:!0})}),e.jsx(N,{tabIndex:4,error:!!p.applyEndDate,description:p.applyEndDate?p.applyEndDate.message:"",placeholder:"모집 종료일",...r("applyEndDate",{valueAsDate:!0,validate:(n,u)=>{const b=u.applyStartDate;return new Date(n)<new Date(b)?(console.log(p),"종료일은 시작일 이후여야 합니다."):!0}})})]}),e.jsxs(m,{title:"대회 기간",children:[e.jsx(N,{tabIndex:5,placeholder:"대회 시작일",...r("startDate",{valueAsDate:!0})}),e.jsx(N,{tabIndex:6,error:!!p.endDate,description:p.endDate?p.endDate.message:"",placeholder:"대회 종료일",...r("endDate",{valueAsDate:!0,validate:(n,u)=>{const b=u.startDate;return new Date(n)<new Date(b)?"종료일은 시작일 이후여야 합니다.":!0}})})]}),e.jsx(s,{type:"text",title:"장소",...r("place")}),e.jsx(s,{type:"text",title:"주최",disabled:!0,information:"로그인된 계정의 소속 팀으로 자동입력됩니다.",...r("host")}),e.jsx(s,{type:"text",title:"주관",...r("organizer")}),e.jsx(s,{type:"text",title:"협찬",...r("sponsor")}),e.jsx("h3",{className:"group-title",children:"대회 방식"}),e.jsxs(m,{title:"참가 팀 수",children:[e.jsx(E,{placeholder:"선택",value:A,onChange:$,options:[{name:"12명",value:"12"},{name:"20명",value:"20"},{name:"직접 입력",value:"-1"}]}),e.jsx(s,{type:"number",disabled:A!=="-1"})]}),e.jsx("h3",{className:"group-title",children:"참가 조건"}),e.jsxs(m,{title:"성별",children:[e.jsx(f,{buttonType:!0,...r("gender"),value:"mixed",id:"mixed",text:{title:"제한 없음"}}),e.jsx(f,{buttonType:!0,...r("gender"),value:"male",id:"male",text:{title:"남성"}}),e.jsx(f,{buttonType:!0,...r("gender"),value:"female",id:"female",text:{title:"여성"}})]}),e.jsxs(m,{title:"국적",children:[e.jsx(f,{buttonType:!0,...r("nationality"),value:"korean",id:"korean",text:{title:"대한민국 국적만"}}),e.jsx(f,{buttonType:!0,...r("nationality"),value:"foreigner",id:"foreigner",text:{title:"외국인 허용"}})]}),e.jsxs(m,{title:"출신",children:[e.jsx(f,{buttonType:!0,...r("experience"),value:"amateur",id:"amateur",text:{title:"아마추어만"}}),e.jsx(f,{buttonType:!0,...r("experience"),value:"athlete",id:"athlete",text:{title:"고교 이후 선출 허용"}})]}),e.jsxs(m,{title:"연령",children:[e.jsx(E,{value:I,onChange:x,placeholder:"나이 방식",options:[{name:"만나이",value:"global"},{name:"한국식 나이",value:"korean-age"}]}),e.jsx(s,{type:"number",placeholder:"최소 연령",...r("ageRangeMin")}),e.jsx(s,{type:"number",placeholder:"최대 연령",...r("ageRangeMax")})]}),e.jsx("article",{className:"grid-merge",children:e.jsx(W,{title:"기타 참가 조건"})}),e.jsx("h3",{className:"group-title",children:"참가비"}),e.jsxs("section",{className:"grid-merge form-grid-column",children:[e.jsx("div",{style:{width:"132px",marginRight:"-8px"},children:e.jsx(E,{title:"계좌번호",placeholder:"은행 선택",value:S,onChange:O,options:[{name:"신한은행",value:"shinhan"},{name:"KB국민은행",value:"kookmin"},{name:"하나은행",value:"hana"},{name:"우리은행",value:"woori"},{name:"기업은행",value:"ibk"},{name:"NH농협",value:"nh"},{name:"카카오뱅크",value:"kakao"},{name:"케이뱅크",value:"kbank"},{name:"토스뱅크",value:"toss"}]})}),e.jsx("div",{className:"form-flex2",children:e.jsx(m,{title:"ㅤ",children:e.jsx(s,{type:"text",placeholder:"하이픈 없이 숫자만 입력하세요",...r("accountNum",{setValueAs:n=>n.replaceAll("-","").trim()})})})}),e.jsx("div",{className:"form-flex1",children:e.jsx(s,{type:"text",title:"계좌 예금주",...r("accountOwnerName")})})]}),e.jsx(s,{delButton:!1,suffix:"원",type:"text",style:{textAlign:"right"},title:"금액",...r("attendPay",{onChange:n=>{const u=n.target.value.replace(/[^0-9]/g,"");n.target.value=u.replace(/\B(?=(\d{3})+(?!\d))/g,",")},setValueAs:n=>+n.replaceAll(",","").trim()})}),e.jsx(m,{title:"입금 기한",children:e.jsx(N,{placeholder:"입금 마감일",...r("payEndDate",{valueAsDate:!0})})}),e.jsx(W,{title:"환불 규정",...r("refundInfo")})]})]}),e.jsxs(Se,{children:[e.jsxs("div",{className:"bottom-left-side",children:[e.jsx(B,{type:"button",mode:"gray",fullWidth:!0,children:"임시저장"}),e.jsx(B,{type:"button",mode:"gray",fillType:"outline",fullWidth:!0,children:"불러오기"})]}),e.jsx("div",{className:"bottom-right-side",children:e.jsx(B,{type:"submit",mode:"primary",fullWidth:!0,children:"작성 완료"})})]})]})]})}const ke=o.section`
  padding: 32px 60px 132px;
  @media (max-width: 1000px) {
    padding: 32px 8px;
  }

  h2 {
    ${v.body1("semibold")};
    padding: 0 2px;
    margin-bottom: 20px;
    font-size: 2.4rem;
  }
  h3.group-title {
    grid-column: 1 / 3;
    ${v.body1("semibold")};
    margin: 24px 0 0;
    font-size: 2rem;
  }
  form {
    display: flex;
    gap: 24px;

    section.poster {
      label {
        position: sticky;
        top: 20px;
        ${v.body4("regular")};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: min(20vw, 260px);
        height: min(30vw, 390px);
        border: 1px solid var(--gray100);
        background-color: var(--gray50);
        border-radius: 10px;
        color: var(--gray700);
      }
    }

    section {
      display: flex;
      gap: 24px 36px;
    }
    .form-grid-column {
      gap: 24px 20px;
    }
    .form-grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
      }
    }
    .form-flex2 {
      flex: 2;
      flex-direction: column;
    }
    .form-flex1 {
      flex: 1;
      flex-direction: column;
    }
    .grid-merge {
      grid-column: 1 / 3;
    }
  }
`,Se=o.footer`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 80px 24px;
  left: 0;
  bottom: 0;
  width: 100%;
  gap: 60px;
  background-color: var(--background-light);
  border-top: 1px solid var(--gray200);
  z-index: 40;

  div.bottom-left-side {
    flex: 0.25;
    display: flex;
    gap: 10px;
  }
  div.bottom-right-side {
    flex: 0.2;
  }
`;export{xt as component};
