import { jsx, jsxs } from "react/jsx-runtime";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
const LoadingAnimatedSvg = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%20style='margin:%20auto;%20background:%200px%200px;%20display:%20block;%20shape-rendering:%20auto;'%3e%3ccircle%20cx='84'%20cy='50'%20r='10'%20fill='%2324954D'%3e%3canimate%20attributeName='r'%20repeatCount='indefinite'%20dur='0.3968253968253968s'%20calcMode='spline'%20keyTimes='0;1'%20values='11;0'%20keySplines='0%200.5%200.5%201'%20begin='0s'%3e%3c/animate%3e%3canimate%20attributeName='fill'%20repeatCount='indefinite'%20dur='1.5873015873015872s'%20calcMode='discrete'%20keyTimes='0;0.25;0.5;0.75;1'%20values='%2324954D;%2335B256;%2349CF60;%2374E27C;%2394F093'%20begin='0s'%3e%3c/animate%3e%3c/circle%3e%3ccircle%20cx='16'%20cy='50'%20r='10'%20fill='%2335B256'%3e%3canimate%20attributeName='r'%20repeatCount='indefinite'%20dur='1.5873015873015872s'%20calcMode='spline'%20keyTimes='0;0.25;0.5;0.75;1'%20values='0;0;11;11;11'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201'%20begin='0s'%3e%3c/animate%3e%3canimate%20attributeName='cx'%20repeatCount='indefinite'%20dur='1.5873015873015872s'%20calcMode='spline'%20keyTimes='0;0.25;0.5;0.75;1'%20values='16;16;16;50;84'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201'%20begin='0s'%3e%3c/animate%3e%3c/circle%3e%3ccircle%20cx='50'%20cy='50'%20r='10'%20fill='%2349CF60'%3e%3canimate%20attributeName='r'%20repeatCount='indefinite'%20dur='1.5873015873015872s'%20calcMode='spline'%20keyTimes='0;0.25;0.5;0.75;1'%20values='0;0;11;11;11'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.3968253968253968s'%3e%3c/animate%3e%3canimate%20attributeName='cx'%20repeatCount='indefinite'%20dur='1.5873015873015872s'%20calcMode='spline'%20keyTimes='0;0.25;0.5;0.75;1'%20values='16;16;16;50;84'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.3968253968253968s'%3e%3c/animate%3e%3c/circle%3e%3ccircle%20cx='84'%20cy='50'%20r='10'%20fill='%2374E27C'%3e%3canimate%20attributeName='r'%20repeatCount='indefinite'%20dur='1.5873015873015872s'%20calcMode='spline'%20keyTimes='0;0.25;0.5;0.75;1'%20values='0;0;11;11;11'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.7936507936507936s'%3e%3c/animate%3e%3canimate%20attributeName='cx'%20repeatCount='indefinite'%20dur='1.5873015873015872s'%20calcMode='spline'%20keyTimes='0;0.25;0.5;0.75;1'%20values='16;16;16;50;84'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-0.7936507936507936s'%3e%3c/animate%3e%3c/circle%3e%3ccircle%20cx='16'%20cy='50'%20r='10'%20fill='%2394F093'%3e%3canimate%20attributeName='r'%20repeatCount='indefinite'%20dur='1.5873015873015872s'%20calcMode='spline'%20keyTimes='0;0.25;0.5;0.75;1'%20values='0;0;11;11;11'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-1.1904761904761905s'%3e%3c/animate%3e%3canimate%20attributeName='cx'%20repeatCount='indefinite'%20dur='1.5873015873015872s'%20calcMode='spline'%20keyTimes='0;0.25;0.5;0.75;1'%20values='16;16;16;50;84'%20keySplines='0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201;0%200.5%200.5%201'%20begin='-1.1904761904761905s'%3e%3c/animate%3e%3c/circle%3e%3c/svg%3e";
function Loading(props) {
  if (props.page) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          width: "100%",
          height: "100%",
          background: "rgba(256, 256, 256, 0.05)",
          zIndex: 100
        },
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "180px",
              minHeight: "100px",
              gap: "0",
              borderRadius: "999px",
              backdropFilter: "blur(5px)",
              background: "rgba(256, 256, 256, 0.3)",
              border: "1px solid rgba(0, 0, 0, 0.045)"
            },
            children: [
              /* @__PURE__ */ jsx(LoadingAnimatedSvg, { width: 110, height: 90, style: { margin: 0 } }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: fonts.body3.semibold,
                  style: {
                    color: "var(--primary600)"
                  },
                  children: props.text
                }
              )
            ]
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsx("div", { style: { display: "block", margin: "0 auto", height: "120px" }, children: /* @__PURE__ */ jsx(LoadingAnimatedSvg, { width: 80, height: 120 }) });
}
export {
  Loading as L
};
