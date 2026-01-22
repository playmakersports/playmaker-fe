import { jsxs, jsx } from "react/jsx-runtime";
import React, { useRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { a as flexColumnGap20, h as baseContainer } from "./container.css-C2ezn6CH.js";
import { B as Badge } from "./Badge-CVtyNCaL.js";
import { M as MainTab } from "./MainTab-DOXli7NZ.js";
import { B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { I as InputStyledWrapper } from "./Wrapper-DpW65hF8.js";
import { F as FONTS } from "./common-6ceLbjxn.js";
import { I as InputWrapper } from "./InputWrapper-CgYCSwII.js";
import { C as CloseIcon } from "./Close20-w_89MMCP.js";
import { D as DropdownInput } from "./DropdownInput-18dVrCGm.js";
import { C as CheckIcon } from "./Check-xgghRidd.js";
import "jotai";
import "@vanilla-extract/css";
import "./Search-DrxoJQ2v.js";
import "./container.css-DZr6lpKA.js";
import "@floating-ui/react";
import "./container-B0RuEqwG.js";
import "./DownArrow-CJuEPh4T.js";
const FileInput = React.forwardRef((props, ref) => {
  const { id, placeholder, title, required, information, error, maxSizeMB, description, ...rest } = props;
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  const [fileInfo, setFileInfo] = useState({ name: "", size: 0 });
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileInfo({ name: event.target.files[0].name, size: event.target.files[0].size });
    } else {
      setFileInfo({ name: "", size: 0 });
    }
    if (props.onChange) {
      props.onChange(event);
    }
  };
  const handleClearInputValue = (event) => {
    event.stopPropagation();
    if (inputRef.current) {
      inputRef.current.value = "";
      setFileInfo({ name: "", size: 0 });
      if (props.onChange) {
        props.onChange({ target: { value: "" } });
      }
    }
  };
  return /* @__PURE__ */ jsxs(InputWrapper, { title, required, information, children: [
    /* @__PURE__ */ jsxs(InputBox, { htmlFor: id, $isError: error, children: [
      /* @__PURE__ */ jsx(AttachTitle, { "data-error": error, children: "파일 선택" }),
      /* @__PURE__ */ jsx(FileName, { children: fileInfo.name ? /* @__PURE__ */ jsxs("span", { className: "file-data", children: [
        /* @__PURE__ */ jsx("span", { className: "file-name", children: fileInfo.name }),
        " ",
        /* @__PURE__ */ jsxs("span", { className: "file-size", children: [
          "(",
          (fileInfo.size / 1024 / 1024).toFixed(1),
          "MB)"
        ] })
      ] }) : /* @__PURE__ */ jsxs("span", { className: "placeholder", children: [
        placeholder ?? "",
        " ",
        maxSizeMB && `(${maxSizeMB}MB 이하)`
      ] }) }),
      /* @__PURE__ */ jsx("input", { type: "file", ref: inputRef, id, ...rest, onChange: handleFileChange })
    ] }),
    /* @__PURE__ */ jsx(
      ClearIconArea,
      {
        type: "button",
        $isUploaded: !!fileInfo.name,
        role: "button",
        onClick: (event) => handleClearInputValue(event),
        "aria-label": "입력값 초기화",
        children: /* @__PURE__ */ jsx(CloseIcon, {})
      }
    ),
    description && /* @__PURE__ */ jsx(Description, { "data-error": error, children: description })
  ] });
});
FileInput.displayName = "FileInput";
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
const ClearIconArea = styled(IconArea).attrs({ as: "button" })`
  position: absolute;
  top: 0;
  margin: 10px 0;
  right: 12px;
  opacity: ${({ $isUploaded }) => $isUploaded ? 1 : 0};
  visibility: ${({ $isUploaded }) => $isUploaded ? "visible" : "hidden"};
  transition: opacity 0.15s, visibility 0.1s;
  transition-delay: 0.1s;
  background-color: var(--background-light);
`;
const InputBox = styled(InputStyledWrapper).attrs({ as: "label" })`
  cursor: pointer;
  input {
    display: none;
  }
`;
const FileName = styled.div`
  ${FONTS.body4("regular")};
  display: flex;
  align-items: center;
  padding: 0 calc(12px - 8px);
  max-width: calc(100% - 24px);
  flex: 1;
  overflow: hidden;

  span.placeholder {
    color: var(--gray400);
  }

  span.file-data {
    display: flex;
    max-width: 100%;
    gap: 4px;
    overflow: hidden;
    color: var(--gray700);

    span.file-name {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 100%;
    }
    span.file-size {
      padding-right: 28px;
      flex-shrink: 0;
    }
  }
`;
const AttachTitle = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 10px 16px 10px 4px;
  height: 100%;
  color: var(--gray700);
  border-right: 1px solid var(--gray200);
  ${FONTS.body4("medium")};

  &[data-error="true"] {
    border-right-color: var(--red500);
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
const QuestionIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2784'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2784)'%3e%3cpath%20d='M11.989%2017.6152C12.2745%2017.6152%2012.5157%2017.5168%2012.7125%2017.3198C12.9093%2017.1226%2013.0078%2016.8812%2013.0078%2016.5955C13.0078%2016.31%2012.9092%2016.0688%2012.712%2015.872C12.5148%2015.6753%2012.2735%2015.577%2011.988%2015.577C11.7025%2015.577%2011.4613%2015.6756%2011.2645%2015.8728C11.0677%2016.0699%2010.9692%2016.3113%2010.9692%2016.5968C10.9692%2016.8822%2011.0678%2017.1234%2011.265%2017.3203C11.4622%2017.5169%2011.7035%2017.6152%2011.989%2017.6152ZM11.316%2013.3226C11.2728%2013.714%2011.6%2014.0345%2011.9938%2014.0345C12.3804%2014.0345%2012.6842%2013.7235%2012.7572%2013.3439C12.7929%2013.1583%2012.8421%2012.9953%2012.9047%2012.8548C13.0363%2012.5606%2013.3552%2012.1706%2013.8615%2011.6848C14.3013%2011.2449%2014.6382%2010.8388%2014.872%2010.4663C15.106%2010.0939%2015.223%209.65417%2015.223%209.147C15.223%208.28617%2014.9137%207.61375%2014.2952%207.12975C13.6766%206.64592%2012.9448%206.404%2012.1%206.404C11.2653%206.404%2010.5747%206.62675%2010.028%207.07225C9.67252%207.36186%209.38328%207.68492%209.16029%208.04143C8.96119%208.35974%209.1379%208.75862%209.48635%208.8984C9.84539%209.04242%2010.2512%208.8557%2010.4773%208.54177C10.5623%208.42377%2010.6589%208.30693%2010.7673%208.19125C11.0621%207.87658%2011.4999%207.71925%2012.0808%207.71925C12.6718%207.71925%2013.1086%207.88108%2013.3913%208.20475C13.6741%208.52858%2013.8155%208.88467%2013.8155%209.273C13.8155%209.61283%2013.7187%209.92375%2013.525%2010.2057C13.3315%2010.4877%2013.0848%2010.7602%2012.7848%2011.023C12.1283%2011.6153%2011.7135%2012.0878%2011.5405%2012.4405C11.4311%2012.6632%2011.3563%2012.9572%2011.316%2013.3226ZM12.0017%2021.5C10.6877%2021.5%209.45267%2021.2507%208.2965%2020.752C7.14033%2020.2533%206.13467%2019.5766%205.2795%2018.7218C4.42433%2017.8669%203.74725%2016.8617%203.24825%2015.706C2.74942%2014.5503%202.5%2013.3156%202.5%2012.0017C2.5%2010.6877%202.74933%209.45267%203.248%208.2965C3.74667%207.14033%204.42342%206.13467%205.27825%205.2795C6.13308%204.42433%207.13833%203.74725%208.294%203.24825C9.44967%202.74942%2010.6844%202.5%2011.9983%202.5C13.3123%202.5%2014.5473%202.74933%2015.7035%203.248C16.8597%203.74667%2017.8653%204.42342%2018.7205%205.27825C19.5757%206.13308%2020.2528%207.13833%2020.7518%208.294C21.2506%209.44967%2021.5%2010.6844%2021.5%2011.9983C21.5%2013.3123%2021.2507%2014.5473%2020.752%2015.7035C20.2533%2016.8597%2019.5766%2017.8653%2018.7218%2018.7205C17.8669%2019.5757%2016.8617%2020.2528%2015.706%2020.7518C14.5503%2021.2506%2013.3156%2021.5%2012.0017%2021.5ZM12%2020C14.2333%2020%2016.125%2019.225%2017.675%2017.675C19.225%2016.125%2020%2014.2333%2020%2012C20%209.76667%2019.225%207.875%2017.675%206.325C16.125%204.775%2014.2333%204%2012%204C9.76667%204%207.875%204.775%206.325%206.325C4.775%207.875%204%209.76667%204%2012C4%2014.2333%204.775%2016.125%206.325%2017.675C7.875%2019.225%209.76667%2020%2012%2020Z'%20/%3e%3c/g%3e%3c/svg%3e";
function MySchool() {
  const [tab, setTab] = useState("find");
  useHeader({
    title: "학교 인증",
    options: {
      titleAlign: "center"
    },
    subActions: {
      name: "저장",
      action: () => {
        console.log("저장");
      }
    }
  });
  const {
    register,
    watch,
    setValue,
    handleSubmit
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return /* @__PURE__ */ jsxs("section", { className: clsx(baseContainer, flexColumnGap20), style: {
    paddingTop: "20px",
    height: "calc(100vh - var(--safe-area-top))"
  }, children: [
    /* @__PURE__ */ jsxs(School, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("img", { src: "/images/mock/seoul-tech-univ-logo.gif", alt: "", width: 40, height: 40 }),
        /* @__PURE__ */ jsx("span", { className: fonts.body2.semibold, children: "서울과학기술대학교" })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Badge, { size: "large", type: "info", icon: /* @__PURE__ */ jsx(CheckIcon, {}), children: "인증" }) })
    ] }),
    /* @__PURE__ */ jsxs(Question, { children: [
      /* @__PURE__ */ jsxs("p", { className: clsx("question-title", fonts.body4.medium), children: [
        /* @__PURE__ */ jsx(QuestionIcon, { width: 20, height: 20, fill: "var(--gray700)" }),
        "재학생 인증은 어디에 사용되나요?"
      ] }),
      /* @__PURE__ */ jsx("p", { className: clsx("question-content", fonts.caption1.regular), children: "대학부 대상 스포츠 대회 참가자의 재학 여부를 확인하기 위한 절차로, 모든 대학생 사용자가 반드시 인증하지 않아도 돼요." })
    ] }),
    /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit(onSubmit), style: {
      height: "100%"
    }, children: /* @__PURE__ */ jsxs("article", { className: flexColumnGap20, style: {
      margin: "0 -16px",
      height: "100%"
    }, children: [
      /* @__PURE__ */ jsx(MainTab, { sameWidth: true, padding: 16, type: "line", size: "large", nowValue: setTab, items: [{
        name: "학교 찾기",
        value: "find"
      }, {
        name: "재학생 인증",
        value: "detail"
      }] }),
      /* @__PURE__ */ jsx("div", { style: {
        overflow: "hidden",
        position: "relative",
        width: "100%",
        flex: 1
      }, children: /* @__PURE__ */ jsxs(TabContents, { $next: tab === "detail", children: [
        /* @__PURE__ */ jsx("div", { className: clsx("tab-page", baseContainer), style: {
          paddingBottom: 0
        }, children: /* @__PURE__ */ jsx(BasicInput, { type: "text", iconType: "search", placeholder: "찾으려는 학교 이름 입력..." }) }),
        /* @__PURE__ */ jsxs("div", { className: clsx("tab-page", baseContainer, flexColumnGap20), style: {
          paddingBottom: 0
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            gap: "12px"
          }, children: [
            /* @__PURE__ */ jsx("div", { style: {
              flex: 2
            }, children: /* @__PURE__ */ jsx(BasicInput, { title: "학번", type: "text", ...register("schoolIdNumber", {
              required: true,
              pattern: /^[0-9]+$/,
              onChange: (e) => setValue("schoolIdNumber", e.target.value.replace(/[^0-9]/g, ""))
            }) }) }),
            /* @__PURE__ */ jsx("div", { style: {
              flex: 1
            }, children: /* @__PURE__ */ jsx(DropdownInput, { placeholder: "선택", title: "학년", value: watch("grade"), onChange: (value) => setValue("grade", value), options: [{
              value: "1",
              name: "1학년"
            }, {
              value: "2",
              name: "2학년"
            }, {
              value: "3",
              name: "3학년"
            }, {
              value: "4",
              name: "4학년"
            }, {
              value: "5",
              name: "5학년"
            }, {
              value: "6",
              name: "6학년"
            }] }) })
          ] }),
          /* @__PURE__ */ jsx(FileInput, { maxSizeMB: 10, title: "재학증명서 첨부", accept: ".pdf, .jpg", ...register("fileUpload", {
            required: true
          }) })
        ] })
      ] }) })
    ] }) })
  ] });
}
const School = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  img {
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
  }
`;
const Question = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  background-color: var(--gray50);

  & > p.question-title {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--gray700);
  }
  & > p.question-content {
    margin: 4px 2px 0;
    color: var(--gray500);
  }
`;
const TabContents = styled.div`
  width: 200%;
  display: flex;
  flex-wrap: wrap;
  transition: transform 0.25s;
  transform: translateX(${({
  $next
}) => $next ? "-50%" : "0%"});

  & > div.tab-page {
    flex: 1;
  }
`;
export {
  MySchool as component
};
