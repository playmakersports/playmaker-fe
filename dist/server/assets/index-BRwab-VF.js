import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { u as useGet } from "./query-Ciubt76c.js";
import { u as useToast } from "./useToast-hwetiz13.js";
import { useForm } from "react-hook-form";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { a as stageWrapper, s as stageFormWrapper } from "./stage.css-BcVhTwyI.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import { C as Chip } from "./Chip-Bq9i_bIn.js";
import { c as commonAPI } from "./authToken-Bx9YTtw3.js";
import "@tanstack/react-query";
import "sonner";
import "./common-6ceLbjxn.js";
import "./AlertFilled-JvwFT9H1.js";
import "./Close20-w_89MMCP.js";
import "jotai";
import "@vanilla-extract/css";
import "cookies-next";
import "axios";
function MyLocation() {
  const toast = useToast();
  useHeader({
    title: "활동 지역",
    options: {
      titleAlign: "center"
    },
    subActions: {
      name: "저장",
      action: () => {
      }
    }
  });
  const {
    setValue,
    watch
  } = useForm();
  const {
    data,
    isLoading
  } = useGet(`${commonAPI.CODES}/activeArea`);
  const [sido, setSido] = useState({
    key: "11",
    name: "서울특별시"
  });
  const formLocation = watch("location") ?? [];
  const formLocationDisplayValues = formLocation.map((key) => ({
    key,
    name: findAreaByCodeSequenceKey(data, key)?.text
  }));
  const [locations, setLocations] = useState(formLocationDisplayValues);
  const onClickLocation = (locationKey, name) => {
    if (locations.length >= 2) {
      toast.trigger("위치는 최대 2개까지 선택 가능합니다.", {
        type: "error"
      });
      return;
    }
    if (formLocation.includes(locationKey)) {
      toast.trigger("이미 선택한 지역입니다.", {
        type: "error"
      });
      return;
    }
    setLocations((prev) => [...prev, {
      key: locationKey,
      name: `${sido.name} ${name}`
    }]);
    setValue("location", [...formLocation, locationKey]);
  };
  const onRemoveLocation = (locationKey) => {
    setLocations((prev) => prev.filter((location) => location.key !== locationKey));
    setValue("location", formLocation.filter((key) => key !== locationKey));
  };
  return /* @__PURE__ */ jsx("div", { className: stageWrapper.container, children: /* @__PURE__ */ jsxs("section", { className: stageFormWrapper, style: {
    overflow: "hidden",
    padding: "40px var(--global-lr-padding) var(--safe-bottom-navigation)"
  }, children: [
    /* @__PURE__ */ jsxs("div", { style: {
      marginBottom: "-4px"
    }, children: [
      /* @__PURE__ */ jsx("h3", { className: stageWrapper.title, children: "플레이어님의 활동 위치를 선택해주세요" }),
      /* @__PURE__ */ jsx("p", { className: stageWrapper.description, children: "주로 운동하시는 지역을 최대 2군데 선택해주세요" })
    ] }),
    isLoading ? /* @__PURE__ */ jsx("div", { style: {
      marginTop: "32px"
    }, children: /* @__PURE__ */ jsx(Loading, {}) }) : /* @__PURE__ */ jsxs(Location, { children: [
      /* @__PURE__ */ jsx("div", { className: "location-selected", children: locations.map((location) => /* @__PURE__ */ jsx(Chip, { type: "primary", fillType: "light", size: "large", closeAction: () => {
        onRemoveLocation(location.key);
      }, children: location.name }, location.key)) }),
      /* @__PURE__ */ jsxs(List, { className: fonts.body3.regular, children: [
        /* @__PURE__ */ jsx("ul", { className: "parent", children: data?.map((item) => {
          const parent = item.parent;
          return /* @__PURE__ */ jsx("li", { onClick: () => setSido({
            key: parent.codeSequenceKey,
            name: parent.codeValue
          }), className: clsx({
            active: sido.key === parent.codeSequenceKey,
            [fonts.body3.semibold]: sido.key === parent.codeSequenceKey
          }), role: "button", children: parent.codeValue }, parent.codeSequenceKey);
        }) }),
        /* @__PURE__ */ jsx("ul", { className: "child", children: data?.find((item) => item.parent.codeSequenceKey === sido.key)?.child?.map((item) => /* @__PURE__ */ jsx("li", { role: "button", className: clsx(formLocation.includes(item.codeSequenceKey) && {
          active: true,
          [fonts.body3.semibold]: true
        }), onClick: () => onClickLocation(item.codeSequenceKey, item.codeValue), children: item.codeValue }, `${item.codeSequenceKey}+${item.codeValue}`)) })
      ] })
    ] })
  ] }) });
}
const Location = styled.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 -16px;
  border-bottom: 1px solid var(--gray200);
  div.location-selected {
    display: inline-flex;
    padding: 0 16px;
    gap: 12px;
  }
`;
const List = styled.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--gray200);

  & > ul {
    flex: 1;

    &.parent {
      background-color: var(--gray50);
      border-right: 1px solid var(--gray200);
      & li {
        color: var(--gray400);
        &.active {
          background-color: var(--white);
          color: var(--primary500);
          &:active {
            background-color: var(--white);
          }
        }
        &:active {
          background-color: var(--gray100);
        }
      }
    }

    &.child {
      overflow-y: auto;
      & li {
        color: var(--gray500);
        &.active {
          color: var(--primary500);
        }
        &:active {
          background-color: var(--primary50);
        }
      }
    }
  }
  & li {
    cursor: pointer;
    user-select: none;
    padding: 12px 0;
    text-align: center;
  }
`;
function findAreaByCodeSequenceKey(data, targetKey) {
  const item = data?.find((item2) => item2.child.some((child2) => child2.codeSequenceKey === targetKey));
  if (!item) return null;
  const child = item?.child?.find((child2) => child2.codeSequenceKey === targetKey);
  return {
    parent: item.parent.codeValue,
    child: child?.codeValue,
    text: `${item.parent.codeValue} ${child?.codeValue}`
  };
}
export {
  MyLocation as component
};
