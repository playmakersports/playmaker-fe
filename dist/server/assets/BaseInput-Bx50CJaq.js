import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState, useRef, useImperativeHandle } from "react";
import styled from "styled-components";
import clsx from "clsx";
import { F as FONTS } from "./common-6ceLbjxn.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { I as InputStyledWrapper } from "./Wrapper-DpW65hF8.js";
import { I as InputWrapper } from "./InputWrapper-CgYCSwII.js";
import { C as CloseIcon } from "./Close20-w_89MMCP.js";
import { S as SearchIcon } from "./Search-DrxoJQ2v.js";
const MailIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2841'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2841)'%3e%3cpath%20d='M4.30775%2019.5C3.80258%2019.5%203.375%2019.325%203.025%2018.975C2.675%2018.625%202.5%2018.1974%202.5%2017.6923V6.30775C2.5%205.80258%202.675%205.375%203.025%205.025C3.375%204.675%203.80258%204.5%204.30775%204.5H19.6923C20.1974%204.5%2020.625%204.675%2020.975%205.025C21.325%205.375%2021.5%205.80258%2021.5%206.30775V17.6923C21.5%2018.1974%2021.325%2018.625%2020.975%2018.975C20.625%2019.325%2020.1974%2019.5%2019.6923%2019.5H4.30775ZM10.9226%2011.8688C11.5794%2012.2888%2012.4206%2012.2888%2013.0774%2011.8688L20%207.44225L19.8463%206L12.3224%2010.7945C12.1258%2010.9199%2011.8742%2010.9199%2011.6776%2010.7945L4.15375%206L4%207.44225L10.9226%2011.8688Z'%20/%3e%3c/g%3e%3c/svg%3e";
const EyeIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2835'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2835)'%3e%3cpath%20d='M12.0023%2015.577C13.1355%2015.577%2014.0979%2015.1804%2014.8896%2014.3872C15.6812%2013.5941%2016.0771%2012.6309%2016.0771%2011.4978C16.0771%2010.3646%2015.6805%209.40217%2014.8873%208.6105C14.0942%207.81883%2013.131%207.423%2011.9978%207.423C10.8647%207.423%209.90224%207.81958%209.11058%208.61275C8.31891%209.40592%207.92307%2010.3691%207.92307%2011.5023C7.92307%2012.6354%208.31966%2013.5978%209.11282%2014.3895C9.90599%2015.1812%2010.8692%2015.577%2012.0023%2015.577ZM12.0001%2014.2C11.2501%2014.2%2010.6126%2013.9375%2010.0876%2013.4125C9.56258%2012.8875%209.30007%2012.25%209.30007%2011.5C9.30007%2010.75%209.56258%2010.1125%2010.0876%209.5875C10.6126%209.0625%2011.2501%208.8%2012.0001%208.8C12.7501%208.8%2013.3876%209.0625%2013.9126%209.5875C14.4376%2010.1125%2014.7001%2010.75%2014.7001%2011.5C14.7001%2012.25%2014.4376%2012.8875%2013.9126%2013.4125C13.3876%2013.9375%2012.7501%2014.2%2012.0001%2014.2ZM12.0013%2018.5C9.70182%2018.5%207.60657%2017.8657%205.71557%2016.597C4.056%2015.4837%202.78051%2014.0389%201.88909%2012.2625C1.6483%2011.7827%201.64831%2011.2173%201.88907%2010.7375C2.78038%208.96109%204.05538%207.51626%205.71407%206.403C7.60424%205.13433%209.69916%204.5%2011.9988%204.5C14.2983%204.5%2016.3936%205.13433%2018.2846%206.403C19.9442%207.51626%2021.2196%208.96109%2022.1111%2010.7375C22.3518%2011.2173%2022.3518%2011.7827%2022.1111%2012.2625C21.2198%2014.0389%2019.9448%2015.4837%2018.2861%2016.597C16.3959%2017.8657%2014.301%2018.5%2012.0013%2018.5ZM12.0001%2017C13.8834%2017%2015.6126%2016.5042%2017.1876%2015.5125C18.6792%2014.5733%2019.8382%2013.324%2020.6646%2011.7644C20.7523%2011.599%2020.7523%2011.401%2020.6646%2011.2356C19.8382%209.67603%2018.6792%208.42667%2017.1876%207.4875C15.6126%206.49583%2013.8834%206%2012.0001%206C10.1167%206%208.38757%206.49583%206.81257%207.4875C5.32095%208.42667%204.16194%209.67603%203.33554%2011.2356C3.24789%2011.401%203.24789%2011.599%203.33554%2011.7644C4.16194%2013.324%205.32095%2014.5733%206.81257%2015.5125C8.38757%2016.5042%2010.1167%2017%2012.0001%2017Z'%20/%3e%3c/g%3e%3c/svg%3e";
const EyeClosedIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2833'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2833)'%3e%3cmask%20id='mask1_129_2833'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_129_2833)'%3e%3cpath%20d='M15.7731%2012.973L14.6501%2011.85C14.8001%2011.0218%2014.5638%2010.2773%2013.9413%209.61625C13.319%208.95542%2012.5552%208.7%2011.6501%208.85L10.5271%207.727C10.7527%207.62567%2010.9842%207.54967%2011.2213%207.499C11.4585%207.44834%2011.7181%207.423%2012.0001%207.423C13.1347%207.423%2014.0979%207.81884%2014.8896%208.6105C15.6812%209.40217%2016.0771%2010.3653%2016.0771%2011.5C16.0771%2011.782%2016.0517%2012.0448%2016.0011%2012.2885C15.9504%2012.532%2015.8744%2012.7602%2015.7731%2012.973ZM18.9538%2016.0845L17.8501%2015.05C18.4834%2014.5667%2019.0459%2014.0375%2019.5376%2013.4625C19.9701%2012.9567%2020.3477%2012.3897%2020.6706%2011.7614C20.7548%2011.5976%2020.7532%2011.4031%2020.6672%2011.2403C19.8414%209.67854%2018.6899%208.42762%2017.2126%207.4875C15.6542%206.49584%2013.9167%206%2012.0001%206C11.5167%206%2011.0417%206.03334%2010.5751%206.1C10.1084%206.16667%209.65007%206.26667%209.20007%206.4L8.03482%205.23475C8.66682%204.98342%209.31233%204.79817%209.97132%204.679C10.6303%204.55967%2011.3066%204.5%2012.0001%204.5C14.3436%204.5%2016.457%205.14617%2018.3403%206.4385C19.9906%207.57091%2021.2496%209.00648%2022.1173%2010.7452C22.3546%2011.2205%2022.3549%2011.7797%2022.1161%2012.2542C21.8077%2012.8671%2021.4443%2013.4497%2021.0261%2014.002C20.4394%2014.7763%2019.7487%2015.4705%2018.9538%2016.0845ZM20.2875%2021.3432C19.9967%2021.634%2019.5255%2021.635%2019.2336%2021.3452L15.7156%2017.8538C15.2027%2018.0436%2014.6344%2018.1988%2014.0106%2018.3193C13.3869%2018.4398%2012.7167%2018.5%2012.0001%2018.5C9.65007%2018.5%207.53666%2017.8538%205.65982%2016.5615C4.01664%2015.4302%202.75913%2013.9962%201.8873%2012.2597C1.6473%2011.7816%201.64681%2011.2181%201.88951%2010.7414C2.19544%2010.1405%202.55537%209.56939%202.96932%209.028C3.55399%208.26317%204.19757%207.6%204.90007%207.0385L2.65346%204.76694C2.36436%204.47463%202.36569%204.00369%202.65643%203.71302C2.94827%203.42126%203.42136%203.42128%203.71315%203.71308L20.2875%2020.2874C20.579%2020.5789%2020.579%2021.0516%2020.2875%2021.3432ZM5.95407%208.09225C5.42574%208.51275%204.91191%209.01825%204.41257%209.60875C3.97782%2010.1227%203.61522%2010.6671%203.32475%2011.2418C3.24297%2011.4037%203.24598%2011.595%203.33066%2011.7553C4.15656%2013.3191%205.30887%2014.5715%206.78757%2015.5125C8.34591%2016.5042%2010.0834%2017%2012.0001%2017C12.4552%2017%2012.9085%2016.9615%2013.3598%2016.8845C13.811%2016.8077%2014.1937%2016.7283%2014.5078%2016.6463L13.2423%2015.35C13.0718%2015.4192%2012.8744%2015.4743%2012.6501%2015.5153C12.4257%2015.5564%2012.2091%2015.577%2012.0001%2015.577C10.8654%2015.577%209.90224%2015.1812%209.11058%2014.3895C8.31891%2013.5978%207.92307%2012.6347%207.92307%2011.5C7.92307%2011.2975%207.94366%2011.0857%207.98483%2010.8645C8.02583%2010.6433%208.08091%2010.4411%208.15007%2010.2578L5.95407%208.09225Z'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const BasicInput = React.forwardRef((props, ref) => {
  const {
    type,
    title,
    iconType,
    error = false,
    delButton = false,
    onButtonWrapClick,
    required,
    information,
    description,
    suffix,
    large = false,
    ...rest
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  const handleClearInputValue = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
      if (props.onChange) {
        props.onChange({ target: { value: "" } });
      }
    }
  };
  const onClickShowPassword = () => {
    setShowPassword((prev) => !prev);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const ICON_TYPE = {
    search: /* @__PURE__ */ jsx(SearchIcon, {}),
    email: /* @__PURE__ */ jsx(MailIcon, {}),
    calendar: /* @__PURE__ */ jsx(SearchIcon, {})
  };
  const isShowSideIconDivider = delButton && (suffix || type === "password");
  return /* @__PURE__ */ jsxs(InputWrapper, { information, title, required, children: [
    /* @__PURE__ */ jsxs(ValueContainer, { $isError: error, style: { height: large ? "72px" : "40px" }, children: [
      iconType && /* @__PURE__ */ jsx(IconArea, { children: ICON_TYPE[iconType] }),
      onButtonWrapClick ? /* @__PURE__ */ jsx(ButtonWrapInput, { type: "button", onClick: onButtonWrapClick, children: /* @__PURE__ */ jsx(
        "input",
        {
          ref: inputRef,
          type,
          readOnly: true,
          placeholder: props.placeholder ?? " ",
          "aria-disabled": "true",
          tabIndex: -1,
          className: clsx(large ? fonts.head6.medium : fonts.body4.regular),
          ...rest
        }
      ) }) : /* @__PURE__ */ jsx(
        StyledInput,
        {
          ref: inputRef,
          className: clsx(large ? fonts.head6.medium : fonts.body4.regular),
          type: type === "password" && showPassword ? "text" : type,
          placeholder: props.placeholder ?? " ",
          pattern: type === "number" || type === "tel" ? "[0-9]*" : void 0,
          inputMode: type === "number" || type === "tel" ? "numeric" : void 0,
          ...rest
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "dropdown-icons", children: [
        delButton && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(ClearIcon, { role: "button", onClick: handleClearInputValue, "aria-label": "입력값 초기화", children: /* @__PURE__ */ jsx(CloseIcon, {}) }),
          isShowSideIconDivider && /* @__PURE__ */ jsx("div", { className: "divider", style: { height: "16px", backgroundColor: "var(--gray200)" } })
        ] }),
        suffix && /* @__PURE__ */ jsx(
          "span",
          {
            className: "input-suffix",
            "data-large": large,
            style: { color: props.disabled ? "var(--gray300)" : void 0 },
            children: suffix
          }
        ),
        type === "password" && /* @__PURE__ */ jsx(IconArea, { role: "button", onClick: onClickShowPassword, children: showPassword ? /* @__PURE__ */ jsx(EyeIcon, {}) : /* @__PURE__ */ jsx(EyeClosedIcon, {}) })
      ] })
    ] }),
    description && /* @__PURE__ */ jsx(Description, { "data-error": error, children: description })
  ] });
});
BasicInput.displayName = "BasicInput";
const ValueContainer = styled(InputStyledWrapper)`
  justify-content: space-between;
  color: var(--gray700);

  div.dropdown-icons {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
  span.input-suffix {
    ${FONTS.body4("regular")};
    color: var(--gray400); /* placeholder일 때, */

    &[data-large="true"] {
      ${FONTS.body2("regular")};
    }
  }
`;
const IconArea = styled.div`
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
`;
const ClearIcon = styled(IconArea)`
  width: 1px;
  opacity: 0;
  transition: all 0.15s;
  transition-delay: 0.2s;
  & + div.divider {
    width: 0;
    transition: width 0.1s;
    transition-delay: 0.15s;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  color: var(--gray700);

  &::placeholder {
    color: var(--gray400);
  }

  &:not(:placeholder-shown) + div.dropdown-icons > span.input-suffix {
    /* 값이 있을 때, suffix 색상 */
    color: var(--gray700);
  }
  &:not(:placeholder-shown):focus + div.dropdown-icons > ${ClearIcon} {
    width: 20px;
    opacity: 1;
    & + div.divider {
      width: 1px;
    }
  }
  &:disabled {
    & + div.dropdown-icons > ${ClearIcon} {
      display: none;
    }
  }
`;
const ButtonWrapInput = styled(StyledInput).attrs({ as: "button" })`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input {
    color: var(--gray700);
    &::placeholder {
      color: var(--gray400);
    }
    &:disabled {
      color: var(--gray400);
    }
  }

  & + ${IconArea} {
    display: none !important;
  }
`;
const Description = styled.p`
  margin-top: 8px;
  ${FONTS.caption1("regular")};
  color: var(--gray400);

  &[data-error="true"] {
    color: var(--red500);
  }
`;
export {
  BasicInput as B,
  EyeIcon as E
};
