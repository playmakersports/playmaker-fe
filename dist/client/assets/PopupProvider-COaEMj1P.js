import{r as i}from"./main-DdFHfJsj.js";import{l as a,a as t}from"./styled-components.browser.esm-B_lRBw7u.js";import{F as o}from"./common-p2nbeD7y.js";import"./Button-BOrbA0iP.js";const e=a`
  from{background:rgba(15, 23, 42, 0)};
  to{background:rgba(15, 23, 42, 0.35)};
`,r=a`
  from{transform: scale(0.9) translateY(30%); opacity: 0.4;};
  to{transform: scale(1) translateY(0);opacity: 1;};
`;t.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.35);
  z-index: 1010;
  animation: ${e} 0.35s;
`;t.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 12px;
  width: 100%;
  padding: 24px;
  max-width: 420px;
  min-width: 320px;
  height: max-content;
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  animation: ${r} 0.2s;
`;t.div`
  position: relative;
  color: var(--gray700);

  div.modal-icon {
    display: inline-flex;
    margin-bottom: 16px;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 8px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  div.modal-contents {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  h3.modal-title {
    white-space: pre-wrap;
    ${o.body2("semibold")};
  }
  p.modal-message {
    white-space: pre-wrap;
    ${o.body4("regular")};
  }
`;t.div`
  position: absolute;
  right: 0;
  top: 0;
`;t.div`
  display: flex;
  gap: 8px;
`;const n=i.createContext(null),c=()=>i.useContext(n);export{c as u};
