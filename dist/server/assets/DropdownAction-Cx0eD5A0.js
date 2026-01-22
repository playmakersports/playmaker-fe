import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, cloneElement, isValidElement } from "react";
import styled from "styled-components";
import { useFloating, hide, flip, offset, useDismiss, useInteractions, useTransitionStyles } from "@floating-ui/react";
import { F as FONTS } from "./common-6ceLbjxn.js";
import { I as InputStyledWrapper } from "./Wrapper-DpW65hF8.js";
import { D as DropdownAsset } from "./container-B0RuEqwG.js";
import { D as DownArrowIcon } from "./DownArrow-CJuEPh4T.js";
import { f as dropdownAsset } from "./container.css-DZr6lpKA.js";
const MoreIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2851'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2851)'%3e%3cmask%20id='mask1_129_2851'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_129_2851)'%3e%3cpath%20d='M12%2019.2692C11.5875%2019.2692%2011.2344%2019.1223%2010.9408%2018.8285C10.6469%2018.5348%2010.5%2018.1817%2010.5%2017.7692C10.5%2017.3567%2010.6469%2017.0036%2010.9408%2016.7097C11.2344%2016.4161%2011.5875%2016.2692%2012%2016.2692C12.4125%2016.2692%2012.7656%2016.4161%2013.0592%2016.7097C13.3531%2017.0036%2013.5%2017.3567%2013.5%2017.7692C13.5%2018.1817%2013.3531%2018.5348%2013.0592%2018.8285C12.7656%2019.1223%2012.4125%2019.2692%2012%2019.2692ZM12%2013.5C11.5875%2013.5%2011.2344%2013.3531%2010.9408%2013.0592C10.6469%2012.7656%2010.5%2012.4125%2010.5%2012C10.5%2011.5875%2010.6469%2011.2344%2010.9408%2010.9407C11.2344%2010.6469%2011.5875%2010.5%2012%2010.5C12.4125%2010.5%2012.7656%2010.6469%2013.0592%2010.9407C13.3531%2011.2344%2013.5%2011.5875%2013.5%2012C13.5%2012.4125%2013.3531%2012.7656%2013.0592%2013.0592C12.7656%2013.3531%2012.4125%2013.5%2012%2013.5ZM12%207.73074C11.5875%207.73074%2011.2344%207.58391%2010.9408%207.29024C10.6469%206.99641%2010.5%206.64324%2010.5%206.23074C10.5%205.81824%2010.6469%205.46516%2010.9408%205.17149C11.2344%204.87766%2011.5875%204.73074%2012%204.73074C12.4125%204.73074%2012.7656%204.87766%2013.0592%205.17149C13.3531%205.46516%2013.5%205.81824%2013.5%206.23074C13.5%206.64324%2013.3531%206.99641%2013.0592%207.29024C12.7656%207.58391%2012.4125%207.73074%2012%207.73074Z'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
function DropdownAction(props) {
  const { title, icon = false, options, children, maxHeight } = props;
  const [showOptions, setShowOptions] = useState(false);
  useRef(null);
  const { refs, context } = useFloating({
    placement: "bottom-end",
    open: showOptions,
    onOpenChange: setShowOptions,
    middleware: [hide(), flip(), offset(8)]
  });
  const dismiss = useDismiss(context);
  const { getFloatingProps } = useInteractions([dismiss]);
  const { isMounted, styles } = useTransitionStyles(context, {
    duration: 200,
    common: {
      right: 0,
      transformOrigin: `top right`
    },
    initial: {
      opacity: 0,
      transform: "scale(0.7) translate(-5px, -5px)"
    },
    open: {
      opacity: 1,
      transform: "scale(1) translate(0,0)"
    },
    close: {
      opacity: 0,
      transform: "scale(0.8) translate(-5px, -5px)"
    }
  });
  const onClickShowOptions = () => {
    setShowOptions((prev) => !prev);
  };
  return /* @__PURE__ */ jsxs(Container, { "data-icon": icon, children: [
    icon ? /* @__PURE__ */ jsx(
      "div",
      {
        ref: refs.setReference,
        role: "button",
        "aria-label": title,
        onClick: onClickShowOptions,
        style: {
          cursor: "pointer",
          width: 24,
          height: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: showOptions ? "scale(0.9)" : "none",
          transition: "transform 0.25s ease-in-out"
        },
        children: /* @__PURE__ */ jsx(MoreIcon, { width: 24, height: 24, fill: "var(--gray700)" })
      }
    ) : children && isValidElement(children) ? cloneElement(children, {
      ref: refs.setReference,
      onClick: (e) => {
        onClickShowOptions();
        if (children.props.onClick) {
          children.props.onClick(e);
        }
      }
    }) : /* @__PURE__ */ jsxs(ValueContainer, { ref: refs.setReference, onClick: onClickShowOptions, children: [
      /* @__PURE__ */ jsx("span", { className: "current-value", children: title }),
      /* @__PURE__ */ jsx(DownArrowIcon, {})
    ] }),
    isMounted && /* @__PURE__ */ jsx(
      "div",
      {
        ref: refs.setFloating,
        className: dropdownAsset.Box,
        style: {
          // ...floatingStyles,
          ...styles,
          maxHeight
        },
        ...getFloatingProps(),
        children: /* @__PURE__ */ jsx(DropdownAsset.List, { className: "scrollable-container", style: { overflow: "inherit" }, children: options.map((option, index) => /* @__PURE__ */ jsx("button", { type: "button", onClick: option.action, "data-divided": option.divided, children: /* @__PURE__ */ jsx("span", { className: "option-name", children: option.name }) }, index)) })
      }
    )
  ] });
}
const Container = styled.div`
  position: relative;

  &[data-icon="true"] {
    width: 24px;
    height: 24px;
  }
`;
const ValueContainer = styled(InputStyledWrapper)`
  cursor: pointer;
  color: var(--gray700);
  background-color: var(--white);
  ${FONTS.body4("regular")};

  span.current-value {
    user-select: none;
    flex: 1;
  }
  & svg {
    fill: var(--gray700);
  }
`;
export {
  DropdownAction as D,
  MoreIcon as M
};
