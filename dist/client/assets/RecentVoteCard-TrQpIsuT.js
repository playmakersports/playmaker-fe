import{c as f,j as a,L as v}from"./main-DdFHfJsj.js";import{c as i}from"./clsx-B-dksMZM.js";import{a as C}from"./styled-components.browser.esm-B_lRBw7u.js";import{a as k}from"./index.esm-BMv8ZhrT.js";import{B as w}from"./Button-BOrbA0iP.js";import{f as r}from"./fonts.css-GssQgTP4.js";import{i as j,p as n,l as o,k as c,c as l,d as M,n as R}from"./container.css-CS477Ypa.js";import{h as x}from"./common-DjdCxSrg.js";import{s as e,g}from"./vanilla-extract-css.browser.esm-WxGd34AK.js";import{C as p}from"./Check-CjNx6COD.js";import{C as B}from"./Calendar-DWVqCeg-.js";import{C as D}from"./Clock-BfCcfOFC.js";import{R as N}from"./RightDirection-CpAsiIe1.js";const K=e({display:"flex",flexDirection:"column",justifyContent:"flex-end",width:"100%",height:"180px",objectFit:"cover",backgroundColor:"var(--gray100)",backgroundSize:"cover",backgroundPosition:"top center"}),Q=e({padding:"12px 20px",display:"flex",justifyContent:"space-between",gap:"12px",backdropFilter:"blur(5px)",backgroundColor:"rgba(0,0,0,0.1)","@media":{"screen and (max-width: 360px)":{padding:"12px 8px",gap:"6px"}}}),S=e([r.caption1.regular,{display:"flex",gap:"4px",alignItems:"center",color:"var(--white)",opacity:"0.85","@media":{"screen and (max-width: 360px)":{fontSize:"1.15rem !important"}}}]);g(`${S} > svg`,{width:"18px",height:"18px",fill:"var(--white)"});const U=e({display:"flex",flexDirection:"column",gap:"4px",color:"var(--gray700)"}),X=e({display:"flex",paddingBottom:"10px",flexDirection:"column",gap:"16px"}),Y=e({paddingBottom:"20px",borderBottom:"1px solid var(--gray100)",selectors:{"&:last-of-type":{borderBottom:"none"},"&:active":{backgroundColor:"var(--gray50)"}}}),Z=e({display:"inline-flex",gap:"4px",alignItems:"center",color:"var(--gray400)"}),_=e({margin:"20px auto 0",display:"flex",maxWidth:"300px",justifyContent:"space-between",alignItems:"center",gap:"10px",color:"var(--gray700)"}),aa=e([r.body2.regular,{display:"flex",alignItems:"center",padding:"8px 14px",borderRadius:"8px",gap:"10px",backgroundColor:"var(--gray50)"}]),ea=e([r.body4.medium,{maxWidth:"54px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}]),ra=e({minWidth:"28px",textAlign:"center"}),ta=e({backgroundColor:"#D4FCDB",background:`linear-gradient(90deg,  #D4FCDB 0%, rgba(${x("#D4FCDB")},0.2) 100%)`}),oa=e({backgroundColor:"#FEE8D8",background:`linear-gradient(90deg, rgba(${x("#FEE8D8")},0.2) 0%, #FEE8D8 100%)`}),ia=e([r.caption1.medium,{padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--gray700)",color:"var(--white)"}]),na=e({backgroundColor:"var(--primary500)"}),sa=e({backgroundColor:"var(--red500)"});e({width:"24px",height:"24px",background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"3px",transition:"all 0.25s",selectors:{"&:active":{boxShadow:"0 0 0 4px var(--gray50)",backgroundColor:"var(--gray50)",transform:"scale(0.97)"}}});e({width:"100%",height:"100%",selectors:{'&[data-filled="true"]':{fill:"var(--red500) !important"}}});const da=e([j,{padding:"20px 0",background:"var(--gray50)"}]),ca=e({scrollbarWidth:"none"}),la=e({width:"280px !important",borderRadius:"10px",padding:"16px",backgroundColor:"var(--white)",border:"1px solid var(--gray200)",marginRight:"var(--global-lr-padding)",selectors:{"&:first-of-type":{marginLeft:"var(--global-lr-padding)"}}}),I=e({paddingBottom:"10px",marginBottom:"10px",borderBottom:"1px dashed var(--gray200)"}),pa=e({width:"52px",height:"52px",borderRadius:"8px",backgroundColor:"var(--gray100)",objectFit:"cover",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",overflow:"hidden"}),ma=e([n,o,{borderBottom:"1px dashed var(--gray200)",paddingBottom:"12px"}]),T=e({flex:1,maxWidth:"55px",textAlign:"center"});g(`${T} svg`,{width:"20px",height:"20px",marginBottom:"12px"});function xa({voteId:t,scheduleId:h,title:u,content:b,date:s}){const{register:d}=k(),y=f({strict:!1}).teamId;return a.jsxs(a.Fragment,{children:[a.jsxs(v,{to:`/team/${y}/schedule?feat=view|${h}`,className:i(n,I,o),style:{justifyContent:"space-between"},children:[a.jsxs("div",{className:n,children:[a.jsxs("span",{style:{color:"var(--gray600)"},className:i(r.caption1.medium,c,o),children:[a.jsx(B,{width:18,height:18,fill:"var(--gray600)"})," ",s]}),a.jsxs("span",{style:{color:"var(--gray600)"},className:i(r.caption1.medium,c,o),children:[a.jsx(D,{width:18,height:18,fill:"var(--gray600)"})," ",s]})]}),a.jsx(N,{width:20,height:20,fill:"var(--gray400)"})]}),a.jsxs("div",{className:l,children:[a.jsxs("div",{className:M,children:[a.jsx("p",{style:{color:"var(--gray800)"},className:r.body3.medium,children:u}),a.jsx("p",{style:{color:"var(--gray400)"},className:r.caption1.medium,children:b})]}),a.jsxs("div",{className:l,children:[a.jsxs("div",{className:R,children:[a.jsxs(m,{children:[a.jsx("input",{style:{visibility:"hidden"},type:"radio",id:`${t}-attend`,...d(`${t}-Vote`)}),a.jsx("div",{className:"checkbox",children:a.jsx(p,{width:20,height:20})}),a.jsx("span",{className:r.body4.medium,children:"참석"})]}),a.jsxs(m,{children:[a.jsx("input",{style:{visibility:"hidden"},type:"radio",id:`${t}-no-attend`,...d(`${t}-Vote`)}),a.jsx("div",{className:"checkbox",children:a.jsx(p,{width:20,height:20})}),a.jsx("span",{className:r.body4.medium,children:"불참석"})]})]}),a.jsx(w,{type:"button",mode:"primary",size:"small",children:"확인"})]})]})]})}const m=C.label`
  cursor: pointer;
  flex: 1;
  display: flex;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  color: var(--gray400);

  & > input {
    position: absolute;
    width: 1;
    height: 1;
    margin: -1px;
    overflow: hidden;
  }

  &:active {
    background-color: var(--gray50);
  }

  &:has(input:checked) {
    background-color: rgba(231, 253, 235, 0.5);
    color: var(--gray700);

    div.checkbox {
      background-color: var(--primary500);
      border: transparent;
      & > svg {
        display: block;
        fill: var(--white);
      }
    }
  }
  div.checkbox {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    border: 1px solid var(--gray200);
    & > svg {
      display: none;
    }
  }
`;export{xa as R,m as S,Q as a,S as b,U as c,Z as d,_ as e,ea as f,ra as g,ia as h,sa as i,na as j,aa as k,oa as l,ta as m,Y as n,pa as o,ca as p,la as q,da as r,ma as s,K as t,T as u,X as v};
