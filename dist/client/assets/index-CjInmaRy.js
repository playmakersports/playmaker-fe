import{j as e,r as x,u as R}from"./main-DdFHfJsj.js";import{u as j,a as V,F as D}from"./index.esm-BMv8ZhrT.js";import{S as w,u as A}from"./StageWrapper-rbfUpfrx.js";import{u as M}from"./useHeader-ycHOJC5z.js";import{u as P}from"./PopupProvider-COaEMj1P.js";import{a as b}from"./styled-components.browser.esm-B_lRBw7u.js";import{S as $}from"./SPORTS-DFED9l2s.js";import{s as C,a as h,b as B}from"./stage.css-DV7lXouU.js";import{F}from"./common-p2nbeD7y.js";import{a as E,b as T,c as I,d as W}from"./container.css-CS477Ypa.js";import{B as G}from"./BaseInput-QIE2P0lY.js";import{T as O}from"./TextArea-CjsgM-GX.js";import{D as U}from"./DateInput-BXJ3MBjA.js";import{c as K}from"./webp-BHZ0NXZz.js";import{P as _}from"./Plus-CvtX-big.js";import{I as H}from"./InputWrapper-3IDnfKjB.js";import{c as k}from"./clsx-B-dksMZM.js";import{u as z,a as Y}from"./query-pooYvCqP.js";import{f as S}from"./fonts.css-GssQgTP4.js";import{L as q}from"./Loading-CRmktZOH.js";import{C as Z}from"./Chip-COwdLxrV.js";import{c as J,t as X}from"./authToken-Qay5e6Bk.js";import{c as Q}from"./color.css-0MNcmfUt.js";import{M as ee}from"./MainTab-EfPoyZn8.js";import{T as L}from"./ToggleSwitch-DVcByr_g.js";import{B as te}from"./BirthRangeInput-9E2oA303.js";import{u as re}from"./useToast-DPQsexqB.js";import{f as ae}from"./format-BUIW76fP.js";import"./Button-BOrbA0iP.js";import"./Badge-DEC00oXR.js";import"./vanilla-extract-css.browser.esm-WxGd34AK.js";import"./Wrapper-woxNXEhf.js";import"./Close20-CLpDEKFn.js";import"./Search-D9vcyU_9.js";import"./NumberFlow-client-48rw3j0J-CFpaRRO2.js";import"./useCalendar-DuUYv0vV.js";import"./isSameMonth-Cfx93zVn.js";import"./toDate-qOSwr3PX.js";import"./differenceInCalendarDays-YNEZ6MTG.js";import"./getDay-BBGk_gga.js";import"./addDays-CtYUbYF3.js";import"./endOfMonth-mMwfNh2E.js";import"./useModal-bBiNf1JN.js";import"./Portal-CMVPEwGZ.js";import"./LeftArrow-9PDewAU0.js";import"./RightArrow-dwaHOcVo.js";import"./getYear-BVTrOhcD.js";import"./getMonth-CwBXqN0c.js";import"./isToday-vGOu0Uy7.js";import"./isSameDay-DubJbAPm.js";import"./container.css-B1jfIjJ-.js";import"./Minus-qzPRJPNy.js";import"./Check-CjNx6COD.js";import"./swiper-B84kPD2B.js";import"./DownArrow-Biwl0eI3.js";import"./differenceInYears-CkZj1vKM.js";import"./AlertFilled-005YqH1n.js";function se({setStep:s}){const{register:a,watch:r}=j(),o=()=>{s("Stage2")};return e.jsx(w,{start:!0,onClickNext:o,length:5,current:1,disableNext:!r("teamItem"),children:e.jsxs("div",{className:C,children:[e.jsxs("div",{children:[e.jsx("h3",{className:h.title,children:"종목을 선택해 주세요"}),e.jsx("p",{className:h.description,children:"팀 생성할 스포츠 종목을 선택해주세요."})]}),e.jsx("div",{className:B,children:$.map(t=>e.jsxs(ie,{children:[e.jsx("input",{type:"radio",id:`${t.value}+${t.name}`,value:t.nameEng.toUpperCase(),style:{display:"none"},...a("teamItem",{maxLength:3})}),e.jsxs("label",{htmlFor:`${t.value}+${t.name}`,children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("img",{src:t.icon,alt:t.name,width:80,height:80})}),e.jsx("span",{className:"sports-name",children:t.name})]})]},t.value))})]})})}const ie=b.div`
  width: 100%;
  max-width: 110px;
  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    div.icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 110px;
      border-radius: 10px;
      border: 1px solid var(--gray200);
      transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    }
    span.sports-name {
      ${F.body3("medium")};
      padding: 10px 0;
      color: var(--gray600);
    }

    &:active div.icon-wrapper > img {
      transform: scale(0.95);
      transition: transform 0.2s ease-in-out;
    }
  }

  input:checked + label div.icon-wrapper {
    border: 2px solid var(--primary500);
  }
  input:checked + label span.sports-name {
    ${F.body3("semibold")};
    color: var(--primary500);
  }
`;function oe({setStep:s}){const{register:a,watch:r}=j(),o=()=>{s("Stage1")},t=()=>{s("Stage3")};return e.jsx(w,{onClickPrev:o,onClickNext:t,length:5,current:2,disableNext:!r("teamName"),children:e.jsxs("div",{className:C,children:[e.jsxs("div",{children:[e.jsx("h3",{className:h.title,children:"팀 프로필을 작성해주세요"}),e.jsx("p",{className:h.description,children:"새로 만들 팀 정보를 입력해 주세요."})]}),e.jsxs("div",{className:E,children:[e.jsx(G,{type:"text",title:"팀 이름",required:!0,...a("teamName",{required:!0})}),e.jsx(U,{title:"창단일",required:!0,...a("foundingDate")}),e.jsx(O,{title:"팀 소개",placeholder:`다른 플레이어들에게 보일 팀 소개글을 작성해 주세요
150자 이내 작성 가능합니다. (선택)`,required:!0,style:{height:"130px",resize:"none"},displayLength:!0,maxLength:150,...a("teamIntro",{required:!0})})]})]})})}const ne="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2792'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='-1'%20y='0'%20width='25'%20height='24'%3e%3crect%20x='-0.0961914'%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2792)'%3e%3cpath%20d='M5.21156%2020.5C4.70639%2020.5%204.27881%2020.325%203.92881%2019.975C3.57881%2019.625%203.40381%2019.1974%203.40381%2018.6923V5.30775C3.40381%204.80258%203.57881%204.375%203.92881%204.025C4.27881%203.675%204.70639%203.5%205.21156%203.5H18.5961C19.1012%203.5%2019.5288%203.675%2019.8788%204.025C20.2288%204.375%2020.4038%204.80258%2020.4038%205.30775V18.6923C20.4038%2019.1974%2020.2288%2019.625%2019.8788%2019.975C19.5288%2020.325%2019.1012%2020.5%2018.5961%2020.5H5.21156ZM7.37902%2015.7887C7.08079%2016.184%207.36281%2016.75%207.85801%2016.75H16.0306C16.525%2016.75%2016.8072%2016.1856%2016.5106%2015.79L14.4165%2012.9978C14.1783%2012.6801%2013.7027%2012.6773%2013.4607%2012.9922L11.1346%2016.0192L9.61575%2014.0769C9.37288%2013.7663%208.90156%2013.7704%208.6641%2014.0851L7.37902%2015.7887Z'%20/%3e%3c/g%3e%3c/svg%3e";function ce({setStep:s}){const{register:a,watch:r,setValue:o,formState:{isValid:t}}=j(),[l,u]=x.useState(""),m=async i=>{const c=i.currentTarget.files?.[0];if(c)try{const g=await K(c,{maxWidth:600,quality:.8}),N=new File([g],"team_logo.webp",{type:"image/webp"}),d=URL.createObjectURL(g);u(d),o("image",N)}catch(g){console.error("Error converting image to WebP:",g)}};x.useEffect(()=>{if(r("image")instanceof Blob){const i=r("image"),c=new FileReader;i&&(c.readAsDataURL(i),c.onloadend=()=>{c.result&&u(c.result.toString())})}},[]);const n=()=>{s("Stage2")},p=()=>{s("Stage4")},v=["FE110F","E35B62","FF480A","FFB813","FFD878","124DFF","07D9CC","66F51F","0FFF9B","0B8585","6512FF","BF61FD","D518F2","F866D9","cbd5e1"];return e.jsx(w,{onClickPrev:n,onClickNext:p,length:5,current:3,disableNext:!!r("watch"),children:e.jsxs("div",{className:C,children:[e.jsxs("div",{children:[e.jsx("h3",{className:h.title,children:"팀 로고와 색상을 선택해 주세요"}),e.jsx("p",{className:h.description,children:"팀을 대표하는 이미지와 색을 선택해 주세요!"})]}),e.jsxs("div",{className:T,children:[e.jsxs(le,{htmlFor:"profileImgUpload",children:[l?e.jsx(de,{src:l}):e.jsx(ne,{}),e.jsx("div",{className:"camera-icon-wrapper",children:e.jsx(_,{})})]}),e.jsx(H,{title:"팀 색상",required:!0,children:e.jsx(me,{children:v.map(i=>e.jsx("label",{style:{backgroundColor:`#${i}`},children:e.jsx("input",{type:"radio",style:{display:"none"},value:i,...a("teamColor",{required:!0})})},i))})})]}),e.jsx("input",{style:{display:"none"},type:"file",accept:"image/*",id:"profileImgUpload",...a("teamLogo",{onChange:m})})]})})}const le=b.label`
  cursor: pointer;
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: var(--gray50);
  border: 4px solid var(--background-light);
  outline: 4px solid var(--gray300);
  align-items: center;
  justify-content: center;
  user-select: none;

  svg {
    width: 36px;
    height: 36px;
    fill: var(--gray300);
  }
  .camera-icon-wrapper {
    position: absolute;
    display: flex;
    right: -10px;
    top: -10px;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: var(--primary500);
    border: 2px solid var(--background-light);
    svg {
      width: 20px;
      height: 20px;
      fill: #fff;
    }
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.25s;
  }
`,de=b.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
`,me=b.div`
  display: grid;
  padding: 16px;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid var(--gray200);
  gap: 24px;

  & > label {
    cursor: pointer;
    display: flex;
    margin: 0 auto;
    border-radius: 8px;
    width: 32px;
    height: 32px;

    &:has(input:checked) {
      outline: 3px solid var(--gray900);
    }
  }
`;function pe({setStep:s}){const{setValue:a,watch:r}=j(),{data:o,isLoading:t}=z(`${J.CODES}/activeArea`),l=()=>{s("Stage3")},u=()=>{s("Stage5")},[m,n]=x.useState({key:"11",name:"서울특별시"}),p=r("activeArea"),v={key:p?.key??null,name:he(o,p?.key)?.text??""},[i,c]=x.useState(v),g=(d,f)=>{c({key:d,name:`${m.name} ${f}`}),a("activeArea",d)},N=()=>{c(void 0),a("activeArea","")};return e.jsx(w,{onClickPrev:l,onClickNext:u,length:5,current:4,children:e.jsxs("div",{className:C,style:{overflow:"hidden",margin:"0 -16px",padding:"0 16px"},children:[e.jsxs("div",{style:{marginBottom:"-4px"},children:[e.jsx("h3",{className:h.title,children:"팀의 활동 지역을 선택해 주세요"}),e.jsx("p",{className:h.description,children:"주로 운동하시는 지역을 1곳 선택해주세요"})]}),t?e.jsx("div",{style:{marginTop:"32px"},children:e.jsx(q,{})}):e.jsxs(ue,{children:[e.jsx("div",{className:"location-selected",children:p&&e.jsx(Z,{type:"primary",fillType:"light",size:"large",closeAction:()=>{N()},children:i?.name})}),e.jsxs(ge,{className:S.body3.regular,children:[e.jsx("ul",{className:"parent",children:o?.map(d=>{const f=d.parent;return e.jsx("li",{onClick:()=>n({key:f.codeSequenceKey,name:f.codeValue}),className:k({active:m.key===f.codeSequenceKey,[S.body3.semibold]:m.key===f.codeSequenceKey}),role:"button",children:f.codeValue},f.codeSequenceKey)})}),e.jsx("ul",{className:"child",children:o?.find(d=>d.parent.codeSequenceKey===m.key)?.child?.map(d=>e.jsx("li",{role:"button",className:k(p===d.codeSequenceKey&&{active:!0,[S.body3.semibold]:!0}),onClick:()=>g(d.codeSequenceKey,d.codeValue),children:d.codeValue},`${d.codeSequenceKey}+${d.codeValue}`))})]})]})]})})}const ue=b.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 -16px;
  border-bottom: 1px solid var(--gray200);
  div.location-selected {
    display: inline-flex;
    padding: 0 16px;
    gap: 12px;
  }
`,ge=b.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--gray200);

  & > ul {
    flex: 1;

    &.parent {
      background-color: var(--gray50);
      border-right: 1px solid var(--gray200);
      & li {
        color: var(--gray400);
        &.active {
          background-color: var(--white);
          color: var(--primary500);
          &:active {
            background-color: var(--white);
          }
        }
        &:active {
          background-color: var(--gray100);
        }
      }
    }

    &.child {
      overflow-y: auto;
      & li {
        color: var(--gray500);
        &.active {
          color: var(--primary500);
        }
        &:active {
          background-color: var(--primary50);
        }
      }
    }
  }
  & li {
    cursor: pointer;
    user-select: none;
    padding: 12px 0;
    text-align: center;
  }
`;function he(s,a){const r=s?.find(t=>t.child.some(l=>l.codeSequenceKey===a));if(!r)return null;const o=r?.child?.find(t=>t.codeSequenceKey===a);return{parent:r.parent.codeValue,child:o?.codeValue,text:`${r.parent.codeValue} ${o?.codeValue}`}}function xe({setStep:s}){const{register:a,setValue:r,watch:o}=j(),[t,l]=x.useState(!1),[u,m]=x.useState(!1),[n,p]=x.useState(),v=g=>{r("genderRestriction",g)},i=()=>{s("Stage4")},c=()=>{t||r("genderRestriction",null),u?(r("ageMin",n?.[1]||0),r("ageMax",n?.[0]||0)):(r("ageMin",0),r("ageMax",0)),s("Welcome")};return e.jsx(w,{last:!0,onClickPrev:i,onClickLast:c,length:5,current:5,children:e.jsxs("div",{className:C,children:[e.jsxs("div",{children:[e.jsx("h3",{className:h.title,children:"추가 정보를 작성해주세요"}),e.jsx("p",{className:h.description,children:"거의 다 왔어요!"})]}),e.jsxs("div",{className:T,children:[e.jsxs("div",{className:I,children:[e.jsx(L,{size:"large",text:{title:"나이 제한",description:"팀에 가입할 수 있는 나이를 제한할 수 있어요.",first:!0},showIcon:!0,checked:u,onChange:g=>{m(g.target.checked),g.target.checked||(r("ageMin",0),r("ageMax",0))}}),e.jsx("div",{style:u?void 0:{pointerEvents:"none",opacity:.55},children:e.jsx(te,{getYearRange:p})})]}),e.jsx(L,{size:"large",text:{title:"기수제 운영",description:"팀 소속 선수를 기수로 관리할 수 있어요.",first:!0},showIcon:!0,...a("hasGenerationSystem")}),e.jsxs("div",{className:I,children:[e.jsxs("div",{className:W,children:[e.jsx("div",{className:S.body3.medium,children:"성별 제한"}),e.jsx("div",{className:k(S.body4.regular,Q.gray400),children:"팀에 가입할 수 있는 성별을 제한할 수 있어요."})]}),e.jsx(ee,{type:"filled",color:"gray",size:"medium",sameWidth:!0,initialValue:o("genderRestriction"),nowValue:v,items:[{value:"MIXED",name:"혼성"},{value:"FEMALE",name:"여성"},{value:"MALE",name:"남성"}]})]})]})]})})}function fe({setStep:s}){const{watch:a}=j(),r=R(),o=re(),t=P(),{mutate:l,isPending:u}=Y(X.TEAMS,"form-data"),m=x.useRef(!1);return x.useEffect(()=>{const n=a(),p=new FormData,v={hasGenerationSystem:n.hasGenerationSystem?"Y":"N",teamColor:n.teamColor,message:n.message,teamName:n.teamName,genderRestriction:n.genderRestriction??null,foundingDate:n.foundingDate.replaceAll("-",""),university:null,teamIntro:n.teamIntro,teamItem:n.teamItem,activeArea:n.activeArea,ageMax:0,ageMin:0};p.append("requestDto",new Blob([JSON.stringify(v)],{type:"application/json"})),n.image instanceof File&&p.append("logoFile",n.image),m.current||(l({data:p},{onSuccess:i=>{o?.trigger("새로운 팀을 만들었습니다.",{type:"success"}),r.navigate({to:`/team/${i.id}`,replace:!0})},onError:i=>{let c;i?.response?c={code:i.response.data.errorCode,message:i.response.data.errorMessage}:c={code:null,message:i.message},t?.alert(`${c?.message}${c.code?`[${c.code}]`:""}
Occurred Time ${ae(new Date,"yyyy-MM-dd HH:mm:ss")}`,{title:"서버와의 통신 중 문제가 발생했습니다",showIcon:!0,color:"red"}),s("Stage5")}}),m.current=!0)},[]),e.jsx("div",{children:u&&e.jsx(q,{page:!0})})}const y=["Stage1","Stage2","Stage3","Stage4","Stage5","Welcome"];function bt(){const s=P(),a=R();M({onClickBack:()=>{(async()=>await s?.confirm("입력된 정보는 저장되지 않고, 다시 복구할 수 없습니다.",{showIcon:!0,title:"팀 만들기를 취소하시겠습니까?",buttonText:{yes:"네, 취소할게요",no:"아니오"}})&&a.navigate({to:"/",replace:!0}))()}});const r=V(),{Funnel:o,Step:t,setStep:l}=A({initialStep:y[0]});return e.jsx(D,{...r,children:e.jsxs(o,{children:[e.jsx(t,{name:y[0],children:e.jsx(se,{setStep:l})}),e.jsx(t,{name:y[1],children:e.jsx(oe,{setStep:l})}),e.jsx(t,{name:y[2],children:e.jsx(ce,{setStep:l})}),e.jsx(t,{name:y[3],children:e.jsx(pe,{setStep:l})}),e.jsx(t,{name:y[4],children:e.jsx(xe,{setStep:l})}),e.jsx(t,{name:y[5],children:e.jsx(fe,{setStep:l})})]})})}export{bt as component};
