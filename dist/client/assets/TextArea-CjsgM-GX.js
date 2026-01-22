import{R as b,r as o,j as r}from"./main-DdFHfJsj.js";import{F as t}from"./common-p2nbeD7y.js";import{a}from"./styled-components.browser.esm-B_lRBw7u.js";import{N as v}from"./NumberFlow-client-48rw3j0J-CFpaRRO2.js";import{I as j}from"./Wrapper-woxNXEhf.js";import{I as R}from"./InputWrapper-3IDnfKjB.js";const T=b.forwardRef((s,h)=>{const{title:u,required:x,error:l,displayLength:n,description:i,information:m,onChange:p,...e}=s,[f,y]=o.useState(0),c=o.useRef(null);return o.useImperativeHandle(h,()=>c.current),r.jsxs(R,{title:u,required:x,information:m,children:[r.jsxs(g,{$isError:l,style:{height:e.height??"auto"},children:[n&&r.jsxs(I,{children:[r.jsx(v,{value:f,willChange:!0,format:{useGrouping:!1}}),e.maxLength&&`/${e.maxLength}`]}),r.jsx($,{style:{height:"100%",resize:"none"},ref:c,placeholder:s.placeholder??" ",onChange:d=>{p&&p(d),n&&y(d.target.value.length)},...e})]}),i&&r.jsx(L,{"data-error":l,children:i})]})});T.displayName="TextArea";const g=a(j)`
  height: auto;
  &:has(textarea:disabled) {
    background-color: var(--gray50);
    border-color: var(--gray200);
  }
`,$=a.textarea`
  width: 100%;
  padding: 10px 0;

  ${t.body4("regular")};
  color: var(--gray700);

  ${g}:has(&:focus) {
    border-color: var(--gray300);
  }
  &::placeholder {
    color: var(--gray400);
  }
  &:disabled {
    color: var(--gray300);
  }
`,I=a.div`
  position: absolute;
  padding: 2px 4px;
  margin: 4px 8px;
  right: 0;
  bottom: 0;
  ${t.caption1("regular")};
  color: var(--gray400);
  backdrop-filter: blur(8px);
  background-color: rgba(256, 256, 256, 0.7);
  border-radius: 20px;
`,L=a.p`
  margin-top: 8px;
  ${t.caption1("regular")};
  color: var(--gray400);

  &[data-error="true"] {
    color: var(--red500);
  }
`;export{T};
