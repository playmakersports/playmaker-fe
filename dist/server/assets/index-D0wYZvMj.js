import { jsx, Fragment } from "react/jsx-runtime";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { h as baseContainer } from "./container.css-C2ezn6CH.js";
import "jotai";
import "react";
import "@vanilla-extract/css";
function TeamLeaderBoard() {
  useHeader({
    title: "팀 리더보드",
    options: {
      titleAlign: "center"
    },
    subIcons: [{
      svgIcon: /* @__PURE__ */ jsx(Fragment, {}),
      description: "",
      onClick: ""
    }]
  });
  return /* @__PURE__ */ jsx("div", { className: baseContainer, children: "TeamLeaderBoard" });
}
export {
  TeamLeaderBoard as component
};
