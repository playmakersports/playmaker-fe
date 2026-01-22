import{R as z,r as c,j as e}from"./main-DdFHfJsj.js";import{a as r}from"./styled-components.browser.esm-B_lRBw7u.js";import{u as B}from"./useHeader-ycHOJC5z.js";import{a as S}from"./index.esm-BMv8ZhrT.js";import{c as n}from"./clsx-B-dksMZM.js";import{f as u}from"./fonts.css-GssQgTP4.js";import{a as f,h as C}from"./container.css-CS477Ypa.js";import{B as M}from"./Badge-DEC00oXR.js";import{M as $}from"./MainTab-EfPoyZn8.js";import{B as b}from"./BaseInput-QIE2P0lY.js";import{I as F}from"./Wrapper-woxNXEhf.js";import{F as v}from"./common-p2nbeD7y.js";import{I as q}from"./InputWrapper-3IDnfKjB.js";import{C as T}from"./Close20-CLpDEKFn.js";import{D as R}from"./DropdownInput-DqlQBDw2.js";import{C as A}from"./Check-CjNx6COD.js";import"./vanilla-extract-css.browser.esm-WxGd34AK.js";import"./Search-D9vcyU_9.js";import"./container.css-B1jfIjJ-.js";import"./container-CvJi3BRQ.js";import"./DownArrow-Biwl0eI3.js";const w=z.forwardRef((a,p)=>{const{id:s,placeholder:m,title:o,required:h,information:x,error:i,maxSizeMB:y,description:j,...I}=a,l=c.useRef(null);c.useImperativeHandle(p,()=>l.current);const[d,g]=c.useState({name:"",size:0}),k=t=>{t.target.files&&t.target.files.length>0?g({name:t.target.files[0].name,size:t.target.files[0].size}):g({name:"",size:0}),a.onChange&&a.onChange(t)},N=t=>{t.stopPropagation(),l.current&&(l.current.value="",g({name:"",size:0}),a.onChange&&a.onChange({target:{value:""}}))};return e.jsxs(q,{title:o,required:h,information:x,children:[e.jsxs(_,{htmlFor:s,$isError:i,children:[e.jsx(E,{"data-error":i,children:"파일 선택"}),e.jsx(D,{children:d.name?e.jsxs("span",{className:"file-data",children:[e.jsx("span",{className:"file-name",children:d.name})," ",e.jsxs("span",{className:"file-size",children:["(",(d.size/1024/1024).toFixed(1),"MB)"]})]}):e.jsxs("span",{className:"placeholder",children:[m??""," ",y&&`(${y}MB 이하)`]})}),e.jsx("input",{type:"file",ref:l,id:s,...I,onChange:k})]}),e.jsx(Z,{type:"button",$isUploaded:!!d.name,role:"button",onClick:t=>N(t),"aria-label":"입력값 초기화",children:e.jsx(T,{})}),j&&e.jsx(V,{"data-error":i,children:j})]})});w.displayName="FileInput";const U=r.div`
  display: flex;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 100%;
    height: auto;
    fill: var(--gray700);
  }
  &[role="button"] {
    cursor: pointer;
  }
`,Z=r(U).attrs({as:"button"})`
  position: absolute;
  top: 0;
  margin: 10px 0;
  right: 12px;
  opacity: ${({$isUploaded:a})=>a?1:0};
  visibility: ${({$isUploaded:a})=>a?"visible":"hidden"};
  transition: opacity 0.15s, visibility 0.1s;
  transition-delay: 0.1s;
  background-color: var(--background-light);
`,_=r(F).attrs({as:"label"})`
  cursor: pointer;
  input {
    display: none;
  }
`,D=r.div`
  ${v.body4("regular")};
  display: flex;
  align-items: center;
  padding: 0 calc(12px - 8px);
  max-width: calc(100% - 24px);
  flex: 1;
  overflow: hidden;

  span.placeholder {
    color: var(--gray400);
  }

  span.file-data {
    display: flex;
    max-width: 100%;
    gap: 4px;
    overflow: hidden;
    color: var(--gray700);

    span.file-name {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 100%;
    }
    span.file-size {
      padding-right: 28px;
      flex-shrink: 0;
    }
  }
`,E=r.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 10px 16px 10px 4px;
  height: 100%;
  color: var(--gray700);
  border-right: 1px solid var(--gray200);
  ${v.body4("medium")};

  &[data-error="true"] {
    border-right-color: var(--red500);
  }
`,V=r.p`
  margin-top: 8px;
  ${v.caption1("regular")};
  color: var(--gray400);

  &[data-error="true"] {
    color: var(--red500);
  }
`,W="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2784'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2784)'%3e%3cpath%20d='M11.989%2017.6152C12.2745%2017.6152%2012.5157%2017.5168%2012.7125%2017.3198C12.9093%2017.1226%2013.0078%2016.8812%2013.0078%2016.5955C13.0078%2016.31%2012.9092%2016.0688%2012.712%2015.872C12.5148%2015.6753%2012.2735%2015.577%2011.988%2015.577C11.7025%2015.577%2011.4613%2015.6756%2011.2645%2015.8728C11.0677%2016.0699%2010.9692%2016.3113%2010.9692%2016.5968C10.9692%2016.8822%2011.0678%2017.1234%2011.265%2017.3203C11.4622%2017.5169%2011.7035%2017.6152%2011.989%2017.6152ZM11.316%2013.3226C11.2728%2013.714%2011.6%2014.0345%2011.9938%2014.0345C12.3804%2014.0345%2012.6842%2013.7235%2012.7572%2013.3439C12.7929%2013.1583%2012.8421%2012.9953%2012.9047%2012.8548C13.0363%2012.5606%2013.3552%2012.1706%2013.8615%2011.6848C14.3013%2011.2449%2014.6382%2010.8388%2014.872%2010.4663C15.106%2010.0939%2015.223%209.65417%2015.223%209.147C15.223%208.28617%2014.9137%207.61375%2014.2952%207.12975C13.6766%206.64592%2012.9448%206.404%2012.1%206.404C11.2653%206.404%2010.5747%206.62675%2010.028%207.07225C9.67252%207.36186%209.38328%207.68492%209.16029%208.04143C8.96119%208.35974%209.1379%208.75862%209.48635%208.8984C9.84539%209.04242%2010.2512%208.8557%2010.4773%208.54177C10.5623%208.42377%2010.6589%208.30693%2010.7673%208.19125C11.0621%207.87658%2011.4999%207.71925%2012.0808%207.71925C12.6718%207.71925%2013.1086%207.88108%2013.3913%208.20475C13.6741%208.52858%2013.8155%208.88467%2013.8155%209.273C13.8155%209.61283%2013.7187%209.92375%2013.525%2010.2057C13.3315%2010.4877%2013.0848%2010.7602%2012.7848%2011.023C12.1283%2011.6153%2011.7135%2012.0878%2011.5405%2012.4405C11.4311%2012.6632%2011.3563%2012.9572%2011.316%2013.3226ZM12.0017%2021.5C10.6877%2021.5%209.45267%2021.2507%208.2965%2020.752C7.14033%2020.2533%206.13467%2019.5766%205.2795%2018.7218C4.42433%2017.8669%203.74725%2016.8617%203.24825%2015.706C2.74942%2014.5503%202.5%2013.3156%202.5%2012.0017C2.5%2010.6877%202.74933%209.45267%203.248%208.2965C3.74667%207.14033%204.42342%206.13467%205.27825%205.2795C6.13308%204.42433%207.13833%203.74725%208.294%203.24825C9.44967%202.74942%2010.6844%202.5%2011.9983%202.5C13.3123%202.5%2014.5473%202.74933%2015.7035%203.248C16.8597%203.74667%2017.8653%204.42342%2018.7205%205.27825C19.5757%206.13308%2020.2528%207.13833%2020.7518%208.294C21.2506%209.44967%2021.5%2010.6844%2021.5%2011.9983C21.5%2013.3123%2021.2507%2014.5473%2020.752%2015.7035C20.2533%2016.8597%2019.5766%2017.8653%2018.7218%2018.7205C17.8669%2019.5757%2016.8617%2020.2528%2015.706%2020.7518C14.5503%2021.2506%2013.3156%2021.5%2012.0017%2021.5ZM12%2020C14.2333%2020%2016.125%2019.225%2017.675%2017.675C19.225%2016.125%2020%2014.2333%2020%2012C20%209.76667%2019.225%207.875%2017.675%206.325C16.125%204.775%2014.2333%204%2012%204C9.76667%204%207.875%204.775%206.325%206.325C4.775%207.875%204%209.76667%204%2012C4%2014.2333%204.775%2016.125%206.325%2017.675C7.875%2019.225%209.76667%2020%2012%2020Z'%20/%3e%3c/g%3e%3c/svg%3e";function x2(){const[a,p]=c.useState("find");B({title:"학교 인증",options:{titleAlign:"center"},subActions:{name:"저장",action:()=>{console.log("저장")}}});const{register:s,watch:m,setValue:o,handleSubmit:h}=S(),x=i=>{console.log(i)};return e.jsxs("section",{className:n(C,f),style:{paddingTop:"20px",height:"calc(100vh - var(--safe-area-top))"},children:[e.jsxs(H,{children:[e.jsxs("div",{children:[e.jsx("img",{src:"/images/mock/seoul-tech-univ-logo.gif",alt:"",width:40,height:40}),e.jsx("span",{className:u.body2.semibold,children:"서울과학기술대학교"})]}),e.jsx("div",{children:e.jsx(M,{size:"large",type:"info",icon:e.jsx(A,{}),children:"인증"})})]}),e.jsxs(O,{children:[e.jsxs("p",{className:n("question-title",u.body4.medium),children:[e.jsx(W,{width:20,height:20,fill:"var(--gray700)"}),"재학생 인증은 어디에 사용되나요?"]}),e.jsx("p",{className:n("question-content",u.caption1.regular),children:"대학부 대상 스포츠 대회 참가자의 재학 여부를 확인하기 위한 절차로, 모든 대학생 사용자가 반드시 인증하지 않아도 돼요."})]}),e.jsx("form",{onSubmit:h(x),style:{height:"100%"},children:e.jsxs("article",{className:f,style:{margin:"0 -16px",height:"100%"},children:[e.jsx($,{sameWidth:!0,padding:16,type:"line",size:"large",nowValue:p,items:[{name:"학교 찾기",value:"find"},{name:"재학생 인증",value:"detail"}]}),e.jsx("div",{style:{overflow:"hidden",position:"relative",width:"100%",flex:1},children:e.jsxs(Q,{$next:a==="detail",children:[e.jsx("div",{className:n("tab-page",C),style:{paddingBottom:0},children:e.jsx(b,{type:"text",iconType:"search",placeholder:"찾으려는 학교 이름 입력..."})}),e.jsxs("div",{className:n("tab-page",C,f),style:{paddingBottom:0},children:[e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx("div",{style:{flex:2},children:e.jsx(b,{title:"학번",type:"text",...s("schoolIdNumber",{required:!0,pattern:/^[0-9]+$/,onChange:i=>o("schoolIdNumber",i.target.value.replace(/[^0-9]/g,""))})})}),e.jsx("div",{style:{flex:1},children:e.jsx(R,{placeholder:"선택",title:"학년",value:m("grade"),onChange:i=>o("grade",i),options:[{value:"1",name:"1학년"},{value:"2",name:"2학년"},{value:"3",name:"3학년"},{value:"4",name:"4학년"},{value:"5",name:"5학년"},{value:"6",name:"6학년"}]})})]}),e.jsx(w,{maxSizeMB:10,title:"재학증명서 첨부",accept:".pdf, .jpg",...s("fileUpload",{required:!0})})]})]})})]})})]})}const H=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  img {
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
  }
`,O=r.div`
  padding: 12px 16px;
  border-radius: 8px;
  background-color: var(--gray50);

  & > p.question-title {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--gray700);
  }
  & > p.question-content {
    margin: 4px 2px 0;
    color: var(--gray500);
  }
`,Q=r.div`
  width: 200%;
  display: flex;
  flex-wrap: wrap;
  transition: transform 0.25s;
  transform: translateX(${({$next:a})=>a?"-50%":"0%"});

  & > div.tab-page {
    flex: 1;
  }
`;export{x2 as component};
