import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { useRouter, useSearch } from "@tanstack/react-router";
import { u as useHeader, d as atomHeaderActions } from "./useHeader-yY41oJF1.js";
import { u as usePopup } from "./PopupProvider-CCXZDelm.js";
import { useSetAtom } from "jotai";
import { a as usePost } from "./query-Ciubt76c.js";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import { j as boardAPI } from "./authToken-Bx9YTtw3.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import { j as Route } from "./router-mwjOH7mt.js";
import { p as flexRowGap10, c as flexColumnGap16, k as flexRowGap4, l as flexAlignCenter, s as baseContainerPaddingTop } from "./container.css-C2ezn6CH.js";
import { style, globalStyle } from "@vanilla-extract/css";
import styled from "styled-components";
import { P as PlusIcon } from "./Plus-CBBY8JMW.js";
import { C as CloseIcon } from "./Close20-w_89MMCP.js";
import { u as useToast } from "./useToast-hwetiz13.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { D as DropDownBottomSheet } from "./DropDownBottomSheet-C7ERIVcp.js";
import { c as convertWebpImage } from "./webp-VRlAmM_r.js";
import "./common-6ceLbjxn.js";
import "./Button-cLlpCM0x.js";
import "@tanstack/react-query";
import "cookies-next";
import "axios";
import "@microsoft/clarity";
import "sonner";
import "./AlertFilled-JvwFT9H1.js";
import "./useModal--yzWVOVY.js";
import "./Portal-D4P9dmtA.js";
import "react-dom";
import "./DownArrow-CJuEPh4T.js";
import "./Check-xgghRidd.js";
const useEditorHandler = ({ initialContent, placeholder } = {}) => {
  const [imagesValue, setImages] = useState({
    list: [],
    position: "TOP"
  });
  const images = {
    getter: () => imagesValue,
    setter: (updateFn) => setImages(updateFn(imagesValue))
  };
  const editor = useEditor({
    enablePasteRules: false,
    // 붙여넣기할 때 마크다운 문법 무시
    content: initialContent ?? "",
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder
      }),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"]
      }),
      Highlight
    ]
  });
  return { editor, images };
};
const editorContainer = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  width: "100%",
  overscrollBehavior: "contain"
});
const editorTextAreaContainer = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  width: "100%"
});
globalStyle(`${editorContainer} .tiptap p.is-editor-empty:first-child::before`, {
  color: "var(--gray400)",
  content: "attr(data-placeholder)",
  float: "left",
  height: 0,
  pointerEvents: "none"
});
globalStyle(`${editorTextAreaContainer} div:focus-visible`, {
  outline: "none"
});
globalStyle(`${editorTextAreaContainer} > div > div[role="textbox"]`, {
  flex: 1,
  height: "100%",
  overflowY: "auto",
  paddingBottom: "32px"
});
const editorMenuContainer = style({
  display: "flex",
  gap: "4px",
  position: "sticky",
  top: "var(--safe-area-top)",
  margin: "0 -16px",
  padding: "6px 16px",
  overflowX: "auto",
  overflowY: "hidden",
  whiteSpace: "nowrap",
  transition: "all 0.2s",
  scrollbarWidth: "none",
  selectors: {
    "&.stuck": {
      padding: "10px 16px",
      backgroundColor: "var(--background-light)",
      borderBottom: "1px solid var(--gray200)",
      boxShadow: "var(--shadow-xs)",
      zIndex: 10
    }
  }
});
style({
  display: "flex",
  backgroundColor: "var(--gray100)",
  borderRadius: "4px",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px 10px"
});
const editorMenuButtonActive = style({
  backgroundColor: "var(--primary500)",
  color: "#fff"
});
globalStyle(`${editorMenuContainer} svg`, {
  width: "16px",
  height: "14px",
  fill: "var(--gray600)"
});
globalStyle(`${editorMenuButtonActive} svg`, {
  fill: "#fff"
});
const CameraIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_1332_12166'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1332_12166)'%3e%3cpath%20d='M12%2017.1152C13.1475%2017.1152%2014.1202%2016.7163%2014.9183%2015.9183C15.7163%2015.1202%2016.1152%2014.1475%2016.1152%2013C16.1152%2011.8525%2015.7163%2010.8798%2014.9183%2010.0818C14.1202%209.28375%2013.1475%208.88475%2012%208.88475C10.8525%208.88475%209.87975%209.28375%209.08175%2010.0818C8.28375%2010.8798%207.88475%2011.8525%207.88475%2013C7.88475%2014.1475%208.28375%2015.1202%209.08175%2015.9183C9.87975%2016.7163%2010.8525%2017.1152%2012%2017.1152ZM12%2015.6155C11.2615%2015.6155%2010.641%2015.3642%2010.1385%2014.8615C9.63583%2014.359%209.3845%2013.7385%209.3845%2013C9.3845%2012.2615%209.63583%2011.641%2010.1385%2011.1385C10.641%2010.6358%2011.2615%2010.3845%2012%2010.3845C12.7385%2010.3845%2013.359%2010.6358%2013.8615%2011.1385C14.3642%2011.641%2014.6155%2012.2615%2014.6155%2013C14.6155%2013.7385%2014.3642%2014.359%2013.8615%2014.8615C13.359%2015.3642%2012.7385%2015.6155%2012%2015.6155ZM4.30775%2020.5C3.80258%2020.5%203.375%2020.325%203.025%2019.975C2.675%2019.625%202.5%2019.1974%202.5%2018.6923V7.30775C2.5%206.80258%202.675%206.375%203.025%206.025C3.375%205.675%203.80258%205.5%204.30775%205.5H7.3615L9.2115%203.5H14.7885L16.6385%205.5H19.6923C20.1974%205.5%2020.625%205.675%2020.975%206.025C21.325%206.375%2021.5%206.80258%2021.5%207.30775V18.6923C21.5%2019.1974%2021.325%2019.625%2020.975%2019.975C20.625%2020.325%2020.1974%2020.5%2019.6923%2020.5H4.30775Z'%20/%3e%3c/g%3e%3c/svg%3e";
function EditorImages({ images }) {
  const toast = useToast();
  const [isLoadingAddImage, setIsLoadingAddImage] = useState(false);
  const imgInputRef = useRef(null);
  const { getter, setter } = images;
  const previewImg = () => {
    const files = imgInputRef.current?.files;
    const imgList = [];
    if (getter().list.length > 2) {
      toast.trigger("최대 3개까지 첨부 가능합니다", { type: "error" });
      return;
    }
    if (files) {
      const promises = Array.from(files).map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadstart = () => {
            setIsLoadingAddImage(true);
          };
          reader.onloadend = () => {
            if (reader.result) {
              resolve(reader.result.toString());
            } else {
              reject(new Error("Failed to read file"));
            }
          };
          reader.onerror = () => reject(new Error("Failed to read file"));
        });
      });
      Promise.all(promises).then((results) => {
        setIsLoadingAddImage(false);
        imgList.push(...results);
        setter((prev) => ({
          ...prev,
          list: [...prev.list, ...imgList]
        }));
      }).catch((error) => {
        console.error("Error reading files", error);
      });
    }
  };
  const removeImageItem = (index) => {
    toast.trigger(`이미지를 제거했습니다.`);
    setter((prev) => ({
      ...prev,
      list: prev.list.filter((_, i) => index !== i)
    }));
  };
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        style: { display: "none" },
        type: "file",
        accept: "image/*",
        id: "profileImgUpload",
        multiple: true,
        ref: imgInputRef,
        onChange: previewImg
      }
    ),
    /* @__PURE__ */ jsxs(ImageContainer, { className: flexRowGap10, children: [
      isLoadingAddImage && /* @__PURE__ */ jsx(LoadingWrapper, { children: /* @__PURE__ */ jsx(Loading, {}) }),
      /* @__PURE__ */ jsxs(ImageAddLabel, { htmlFor: "profileImgUpload", "aria-label": "이미지 추가 삽입", children: [
        /* @__PURE__ */ jsxs("div", { className: "icon-wrapper", children: [
          /* @__PURE__ */ jsx(CameraIcon, { width: 24, height: 24, fill: "var(--gray200)" }),
          /* @__PURE__ */ jsx("span", { className: "plus-icon", children: /* @__PURE__ */ jsx(PlusIcon, { width: 12, height: 12, fill: "var(--white)" }) })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: fonts.body4.medium, children: [
          getter().list.length,
          "/3"
        ] })
      ] }),
      getter()?.list.map((image, index) => /* @__PURE__ */ jsxs(ImageItem, { children: [
        /* @__PURE__ */ jsx("img", { src: image, alt: `첨부된 이미지 ${index}번`, width: 80, height: 80 }),
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => removeImageItem(index), "aria-label": `${index + 1}번 이미지 삭제`, children: /* @__PURE__ */ jsx(CloseIcon, { width: 14, height: 14 }) })
      ] }, `image-${index}`))
    ] })
  ] });
}
const Container = styled.div``;
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow-x: auto;
`;
const ImageAddLabel = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid var(--gray200);
  color: var(--gray400);
  background-color: var(--gray50);

  & > div.icon-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid var(--gray200);
    & > span.plus-icon {
      position: absolute;
      margin: -4px;
      bottom: 0;
      right: 0;
      width: 16px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--gray400);
      border-radius: 50%;
      border: 2px solid var(--white);
      box-sizing: content-box;
    }
  }
`;
const ImageItem = styled.div`
  position: relative;
  bottom: 0;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid var(--gray200);
  overflow: hidden;

  img {
    object-fit: cover;
  }

  button {
    position: absolute;
    width: 14px;
    height: 14px;
    margin: 6px;
    right: 0;
    top: 0;
    border-radius: 50%;
    background-color: rgba(15, 23, 42, 0.6);
    overflow: hidden;
    svg {
      fill: var(--white);
    }
  }
`;
const LoadingWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.1);
`;
function EditorUI({ editor, images }) {
  if (!editor) return /* @__PURE__ */ jsx(Loading, { page: true });
  return /* @__PURE__ */ jsxs("div", { className: clsx(editorContainer, flexColumnGap16), children: [
    /* @__PURE__ */ jsx("div", { id: "tiptap_Editor", className: editorTextAreaContainer, children: editor && /* @__PURE__ */ jsx(
      EditorContent,
      {
        editor,
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column"
        }
      }
    ) }),
    /* @__PURE__ */ jsx(EditorImages, { images })
  ] });
}
function EditorView({ teamId }) {
  useHeader({
    title: "글쓰기"
  });
  const { editor, images } = useEditorHandler({
    placeholder: `자유롭게 이야기를 남겨보세요!
최대 1,000자까지 작성 가능합니다.`
  });
  const [title, setTitle] = useState("");
  const [boardType, setBoardType] = useState("");
  const router = useRouter();
  const { mutateAsync, isPending } = usePost(boardAPI.BOARDS, "form-data");
  const setActions = useSetAtom(atomHeaderActions);
  const onSubmit = async () => {
    const formData = new FormData();
    const boardInfo = {
      teamId: Number(teamId),
      title,
      category: null,
      content: editor?.getHTML(),
      startDate: null,
      endDate: null
    };
    formData.append("boardInfo", new Blob([JSON.stringify(boardInfo)], { type: "application/json" }));
    formData.append("boardType", boardType);
    if (images.getter().list.length > 0) {
      for (let [index, imageBase64] of images.getter().list.entries()) {
        const mimeMatch = imageBase64.match(/^data:(.*?);base64,/);
        const mime = mimeMatch ? mimeMatch[1] : "image/png";
        const byteString = atob(imageBase64.split(",")[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mime });
        const file = new File([blob], `image-${index}.${mime.split("/")[1]}`, { type: mime });
        const webpBlob = await convertWebpImage(file, { maxWidth: 880, quality: 0.85 });
        const webpFile = new File([webpBlob], `board-image-${index}.webp`, { type: "image/webp" });
        formData.append("image", webpFile);
      }
    }
    try {
      const response = await mutateAsync({
        data: formData
      });
      if (!response.id) {
        router.navigate({ to: `/team/${teamId}/board` });
        return;
      }
      router.navigate({ to: `/team/${teamId}/board/${response.id}`, replace: true });
    } catch (e) {
      popup?.alert(`${e.response.data.message}
${e.message}`, {
        title: "게시글 등록 실패",
        showIcon: true,
        color: "red"
      });
    }
  };
  const popup = usePopup();
  const searchParams = useSearch({ strict: false });
  searchParams?.type;
  useEffect(() => {
    if (!editor) return;
    setActions({
      name: /* @__PURE__ */ jsx("span", { className: clsx(flexRowGap4, flexAlignCenter), style: { justifyContent: "center" }, children: "등록" }),
      action: () => {
        if (isPending) return;
        onSubmit();
      }
    });
  }, [editor, title, images]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: baseContainerPaddingTop,
      style: {
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - var(--safe-area-top))"
      },
      children: [
        isPending && /* @__PURE__ */ jsx(Loading, { page: true, text: "글 등록 중" }),
        /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, style: { flex: 1 }, children: [
          /* @__PURE__ */ jsx("div", { style: { margin: "0 -4px" }, children: /* @__PURE__ */ jsx(
            DropDownBottomSheet,
            {
              mode: "card",
              defaultValue: boardType,
              getCurrentValue: setBoardType,
              placeholder: "카테고리 선택",
              options: [
                { name: "공지사항", value: "1" },
                { name: "자유게시판", value: "2" },
                { name: "갤러리", value: "3" }
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "editor-title-input",
                type: "text",
                className: fonts.body2.semibold,
                placeholder: "제목을 입력해주세요",
                value: title,
                onChange: (e) => setTitle(e.target.value),
                autoFocus: true,
                autoComplete: "off",
                inputMode: "search"
              }
            ),
            /* @__PURE__ */ jsx("div", { style: { backgroundColor: "var(--gray200)", width: "100%", height: "1px" } })
          ] }),
          /* @__PURE__ */ jsx(EditorUI, { editor, images })
        ] })
      ]
    }
  );
}
function TeamEditor() {
  const {
    teamId
  } = Route.useParams();
  return /* @__PURE__ */ jsx(EditorView, { teamId });
}
export {
  TeamEditor as component
};
