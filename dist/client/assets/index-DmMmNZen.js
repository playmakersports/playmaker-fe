import{r,j as e}from"./main-DdFHfJsj.js";import{a as o}from"./styled-components.browser.esm-B_lRBw7u.js";import{a as L}from"./index.esm-BMv8ZhrT.js";import{u as A}from"./useHeader-ycHOJC5z.js";import{u as E,a as M}from"./query-pooYvCqP.js";import{u as U}from"./useModal-bBiNf1JN.js";import{B as V}from"./Button-BOrbA0iP.js";import{B as P}from"./Container-sz0ta-F3.js";import{B as i}from"./BaseInput-QIE2P0lY.js";import{L as $}from"./Loading-CRmktZOH.js";import"./authToken-Qay5e6Bk.js";import"./fonts.css-GssQgTP4.js";import"./vanilla-extract-css.browser.esm-WxGd34AK.js";import"./common-p2nbeD7y.js";import"./Portal-CMVPEwGZ.js";import"./container.css-CS477Ypa.js";import"./clsx-B-dksMZM.js";import"./Wrapper-woxNXEhf.js";import"./InputWrapper-3IDnfKjB.js";import"./container.css-B1jfIjJ-.js";import"./Close20-CLpDEKFn.js";import"./Search-D9vcyU_9.js";function le(){A({title:"코드 관리"});const{ModalComponents:c,showModal:d}=U(),[p,m]=r.useState(),[s,l]=r.useState({code:"",name:""}),[x,u]=r.useState(""),{register:h,handleSubmit:f,setValue:g,reset:y}=L(),{data:j,isLoading:v,isError:b,refetch:C}=E("/api/code/university",{keyformat:x}),{mutateAsync:S}=M(`/api/code/university/${s}`),N=async a=>{await S({data:{},queryParams:{alias:a.alias}},{onSuccess:()=>{C(),y()}})},k=a=>{const t=a.target.value;l(n=>({...n,code:t}))},w=a=>{const t=a.target.value;l(n=>({...n,name:t}))},B=()=>{u(`${s.code}-${s.name}`)},I=a=>{m(a),g("alias",a.alias),d()};return e.jsxs(P,{children:[e.jsxs(z,{children:[e.jsxs(K,{children:[e.jsxs("div",{className:"input-container",children:[e.jsx("div",{style:{flex:1},children:e.jsx(i,{type:"number",pattern:"[0-9]*",inputMode:"numeric",title:"코드",value:s.code,onChange:k})}),e.jsx("div",{style:{flex:2},children:e.jsx(i,{type:"text",title:"대학명",value:s.name,onChange:w})})]}),e.jsx(V,{type:"button",mode:"gray",onClick:B,children:"조회"})]}),e.jsxs(q,{children:[e.jsxs("li",{className:"table-head",children:[e.jsx("span",{className:"code",children:"코드"}),e.jsx("span",{className:"name",children:"대학명"}),e.jsx("span",{className:"alias",children:"약칭"})]}),v&&e.jsx($,{}),b&&e.jsx("p",{style:{fontSize:"2rem"},children:"Error"}),j?.map(a=>e.jsxs("li",{className:p?.code===a.universityId?"selected":"",onClick:()=>I({code:a.universityId,alias:a.universityAlias}),children:[e.jsxs("span",{className:"code",children:[" ",a.universityId," "]}),e.jsx("span",{className:"name",children:a.universityName}),e.jsx("span",{className:"alias",children:a.universityAlias??"(약어없음)"})]},a.universityId))]})]}),e.jsx("form",{onSubmit:f(N),children:e.jsx(c,{buttons:[{mode:"primary",name:"저장",onClick:()=>{}}],children:e.jsx(i,{type:"text",title:"약칭 입력",information:"약칭은 최대 8자까지 입력 가능합니다.",...h("alias",{setValueAs:a=>a.trim(),maxLength:8})})})})]})}const z=o.div`
  padding-bottom: 32px;
`,K=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 16px 16px;
  border: 1px solid rgba(var(--main-rgb), 0.25);
  border-radius: 10px;
  div.input-container {
    display: flex;
    gap: 10px;
  }
`,q=o.ul`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 10px;

  li {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    line-height: 1.8rem;
    gap: 8px;
    border: 2px solid transparent;
    span {
      &.code {
        width: 50px;
        text-align: center;
      }
      &.name {
        flex: 2;
      }
      &.alias {
        flex: 1;
      }
      padding: 16px 6px;
      background-color: var(--gray50);
      border-radius: 6px;
      border: 2px solid transparent;
    }

    &.table-head > span {
      padding: 6px;
      text-align: center;
      font-weight: 500;
      background-color: var(--gray200);
    }
    &.selected > span {
      border: 2px solid var(--main);
      font-weight: 500;
      color: var(--main);
      background-color: #fff;
    }
  }
`;export{le as component};
