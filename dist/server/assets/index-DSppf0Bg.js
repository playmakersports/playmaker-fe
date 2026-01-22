import { jsxs, jsx } from "react/jsx-runtime";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { u as useGet, a as usePost } from "./query-Ciubt76c.js";
import { u as useModal } from "./useModal--yzWVOVY.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import { B as BaseContainer } from "./Container-AJHSCHjd.js";
import { B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import "jotai";
import "@tanstack/react-query";
import "./authToken-Bx9YTtw3.js";
import "cookies-next";
import "axios";
import "./fonts.css-vMQm04zv.js";
import "@vanilla-extract/css";
import "./common-6ceLbjxn.js";
import "./Portal-D4P9dmtA.js";
import "react-dom";
import "./container.css-C2ezn6CH.js";
import "clsx";
import "./Wrapper-DpW65hF8.js";
import "./InputWrapper-CgYCSwII.js";
import "./container.css-DZr6lpKA.js";
import "./Close20-w_89MMCP.js";
import "./Search-DrxoJQ2v.js";
function CodeControl() {
  useHeader({
    title: "코드 관리"
  });
  const {
    ModalComponents,
    showModal
  } = useModal();
  const [selectedUniv, setSelectedUniv] = useState();
  const [searchKey, setSearchKey] = useState({
    code: "",
    name: ""
  });
  const [params, setParams] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    reset
  } = useForm();
  const {
    data: univList,
    isLoading,
    isError,
    refetch
  } = useGet("/api/code/university", {
    keyformat: params
  });
  const {
    mutateAsync
  } = usePost(`/api/code/university/${searchKey}`);
  const onSubmit = async (data) => {
    await mutateAsync({
      data: {},
      queryParams: {
        alias: data.alias
      }
    }, {
      onSuccess: () => {
        refetch();
        reset();
      }
    });
  };
  const onChangeCode = (event) => {
    const newValue = event.target.value;
    setSearchKey((prev) => ({
      ...prev,
      code: newValue
    }));
  };
  const onChangeUnivName = (event) => {
    const newValue = event.target.value;
    setSearchKey((prev) => ({
      ...prev,
      name: newValue
    }));
  };
  const handleSearch = () => {
    setParams(`${searchKey.code}-${searchKey.name}`);
  };
  const handleClickUnivItem = (target) => {
    setSelectedUniv(target);
    setValue("alias", target.alias);
    showModal();
  };
  return /* @__PURE__ */ jsxs(BaseContainer, { children: [
    /* @__PURE__ */ jsxs(Contents, { children: [
      /* @__PURE__ */ jsxs(SearchBox, { children: [
        /* @__PURE__ */ jsxs("div", { className: "input-container", children: [
          /* @__PURE__ */ jsx("div", { style: {
            flex: 1
          }, children: /* @__PURE__ */ jsx(BasicInput, { type: "number", pattern: "[0-9]*", inputMode: "numeric", title: "코드", value: searchKey.code, onChange: onChangeCode }) }),
          /* @__PURE__ */ jsx("div", { style: {
            flex: 2
          }, children: /* @__PURE__ */ jsx(BasicInput, { type: "text", title: "대학명", value: searchKey.name, onChange: onChangeUnivName }) })
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "button", mode: "gray", onClick: handleSearch, children: "조회" })
      ] }),
      /* @__PURE__ */ jsxs(SearchData, { children: [
        /* @__PURE__ */ jsxs("li", { className: "table-head", children: [
          /* @__PURE__ */ jsx("span", { className: "code", children: "코드" }),
          /* @__PURE__ */ jsx("span", { className: "name", children: "대학명" }),
          /* @__PURE__ */ jsx("span", { className: "alias", children: "약칭" })
        ] }),
        isLoading && /* @__PURE__ */ jsx(Loading, {}),
        isError && /* @__PURE__ */ jsx("p", { style: {
          fontSize: "2rem"
        }, children: "Error" }),
        univList?.map((univ) => /* @__PURE__ */ jsxs("li", { className: selectedUniv?.code === univ.universityId ? "selected" : "", onClick: () => handleClickUnivItem({
          code: univ.universityId,
          alias: univ.universityAlias
        }), children: [
          /* @__PURE__ */ jsxs("span", { className: "code", children: [
            " ",
            univ.universityId,
            " "
          ] }),
          /* @__PURE__ */ jsx("span", { className: "name", children: univ.universityName }),
          /* @__PURE__ */ jsx("span", { className: "alias", children: univ.universityAlias ?? "(약어없음)" })
        ] }, univ.universityId))
      ] })
    ] }),
    /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsx(ModalComponents, { buttons: [{
      mode: "primary",
      name: "저장",
      onClick: () => {
      }
    }], children: /* @__PURE__ */ jsx(BasicInput, { type: "text", title: "약칭 입력", information: "약칭은 최대 8자까지 입력 가능합니다.", ...register("alias", {
      setValueAs: (value) => value.trim(),
      maxLength: 8
    }) }) }) })
  ] });
}
const Contents = styled.div`
  padding-bottom: 32px;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 16px 16px;
  border: 1px solid rgba(var(--main-rgb), 0.25);
  border-radius: 10px;
  div.input-container {
    display: flex;
    gap: 10px;
  }
`;
const SearchData = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 10px;

  li {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    line-height: 1.8rem;
    gap: 8px;
    border: 2px solid transparent;
    span {
      &.code {
        width: 50px;
        text-align: center;
      }
      &.name {
        flex: 2;
      }
      &.alias {
        flex: 1;
      }
      padding: 16px 6px;
      background-color: var(--gray50);
      border-radius: 6px;
      border: 2px solid transparent;
    }

    &.table-head > span {
      padding: 6px;
      text-align: center;
      font-weight: 500;
      background-color: var(--gray200);
    }
    &.selected > span {
      border: 2px solid var(--main);
      font-weight: 500;
      color: var(--main);
      background-color: #fff;
    }
  }
`;
export {
  CodeControl as component
};
