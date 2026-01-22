import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { P as PlusIcon } from "./Plus-CBBY8JMW.js";
function PlusFloat({ linkTo, blind, replace = false }) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      preload: "intent",
      replace,
      to: linkTo,
      style: {
        backgroundColor: "var(--primary500)",
        borderRadius: "50%",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        marginBottom: "16px",
        right: "calc(50vw - var(--mobile-max-width) / 2 + var(--global-lr-padding))",
        bottom: "var(--safe-bottom-navigation)",
        boxShadow: "var(--shadow-sm)",
        zIndex: 5
      },
      children: [
        blind && /* @__PURE__ */ jsx("span", { className: "blind", children: blind }),
        /* @__PURE__ */ jsx(PlusIcon, { width: 24, height: 24, fill: "var(--white)" })
      ]
    }
  );
}
export {
  PlusFloat as P
};
