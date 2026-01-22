import { jsxs, jsx } from "react/jsx-runtime";
import styled from "styled-components";
import { useRouter } from "@tanstack/react-router";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { R as RightDirectionArrow } from "./RightDirection-DCcZ277n.js";
function GroupTitle({ children, icon, link }) {
  const router = useRouter();
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs("h4", { className: fonts.body2.semibold, children: [
      icon,
      children
    ] }),
    link && /* @__PURE__ */ jsx(ArrowButton, { type: "button", onClick: () => router.navigate({ to: link }), children: /* @__PURE__ */ jsx(RightDirectionArrow, {}) })
  ] });
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    display: inline-flex;
    align-items: center;
    user-select: none;
    gap: 8px;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;
const ArrowButton = styled.button`
  svg {
    width: 24px;
    height: 24px;
    fill: var(--gray700);
  }
`;
export {
  GroupTitle as G
};
