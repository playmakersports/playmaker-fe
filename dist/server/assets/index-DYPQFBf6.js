import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { M as MainTab } from "./MainTab-DOXli7NZ.js";
import { S as SUPPORT_SPORTS } from "./SPORTS-C8KNL8RQ.js";
import "jotai";
import "styled-components";
import "./common-6ceLbjxn.js";
function MySportsInfo() {
  const {
    register
  } = useForm();
  const [sports, setSports] = useState(SUPPORT_SPORTS[0].value);
  useHeader({
    title: "운동 종목별 정보 관리",
    options: {
      titleAlign: "center"
    },
    subActions: {
      name: "저장",
      action: () => {
      }
    }
  });
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(MainTab, { padding: 16, size: "large", type: "line", nowValue: setSports, sameWidth: true, items: SUPPORT_SPORTS.map((item) => ({
    value: item.value,
    name: item.name
  })) }) });
}
export {
  MySportsInfo as component
};
