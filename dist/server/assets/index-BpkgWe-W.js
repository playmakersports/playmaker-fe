import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import clsx from "clsx";
import { u as useGet } from "./query-Ciubt76c.js";
import { k as Route } from "./router-mwjOH7mt.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import { e as articleDetailHeader, f as commentListWrapper, g as commentItemUserAvatar, h as commentItemHasReply, i as boardEmptyCommentArea, S as Spinner, j as commentInputBottomWrapper, k as commentInputContainer, l as commentInputStyle, m as boardImagesGridContainer, n as boardImagesGridItem, o as boardImageViewerContainer, p as boardImageViewerItemList, q as boardImageViewerBullet } from "./Spinner-BA0cYQat.js";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { s as semantic, c as colors } from "./color.css-BLEreRIo.js";
import { k as flexRowGap4, r as flexRowGap12, e as flexColumnGap8, l as flexAlignCenter, n as flexRowGap8, h as baseContainer, j as baseDividedLineChild, d as flexColumnGap4 } from "./container.css-C2ezn6CH.js";
import { useState } from "react";
import { c as useCommentGet, d as useCommentPost, e as axiosCommentDelete } from "./team-CBj277QK.js";
import { u as useToast } from "./useToast-hwetiz13.js";
import { D as DropdownAction, M as MoreIcon } from "./DropdownAction-Cx0eD5A0.js";
import { S as SendIcon } from "./Send-CIkiv51_.js";
import { a as formattedDate, p as parsedServerDateTime } from "./date-DKPo_LKv.js";
import { j as boardAPI } from "./authToken-Bx9YTtw3.js";
/* empty css                */
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom } from "swiper/modules";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@microsoft/clarity";
import "@vanilla-extract/css";
import "jotai";
import "sonner";
import "styled-components";
import "./common-6ceLbjxn.js";
import "./AlertFilled-JvwFT9H1.js";
import "./Close20-w_89MMCP.js";
import "@floating-ui/react";
import "./Wrapper-DpW65hF8.js";
import "./container-B0RuEqwG.js";
import "./DownArrow-CJuEPh4T.js";
import "./container.css-DZr6lpKA.js";
import "date-fns";
import "cookies-next";
import "axios";
function ArticleTop(props) {
  const BOARD_TYPE_TITLE = {
    1: "공지사항",
    2: "자유게시판",
    3: "갤러리"
  };
  const { title, boardType, createBy, createAt } = props;
  useHeader({
    title: BOARD_TYPE_TITLE[boardType] ?? "게시판",
    options: { titleAlign: "center" }
  });
  const [createDate, createTime] = createAt.split("-");
  return /* @__PURE__ */ jsxs("div", { className: articleDetailHeader.container, children: [
    /* @__PURE__ */ jsxs("div", { className: articleDetailHeader.info, children: [
      /* @__PURE__ */ jsx("div", { style: { borderRadius: "50%", overflow: "hidden", width: "36px", height: "36px" }, children: /* @__PURE__ */ jsx("img", { src: createBy.imageUrl, alt: createBy.memberName, width: 36, height: 36 }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: fonts.caption1.medium, children: createBy.memberName }),
        /* @__PURE__ */ jsxs("div", { className: clsx(semantic.description, flexRowGap4), children: [
          createAt && /* @__PURE__ */ jsx("span", { className: "create-at", children: createDate.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3") }),
          createAt && /* @__PURE__ */ jsx("span", { className: "create-at-time", children: createTime })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("h3", { className: articleDetailHeader.title, children: title })
  ] });
}
function ArticleComment(props) {
  const { teamId, articleId, viewCount = 0 } = props;
  const [comment, setComment] = useState("");
  const toast = useToast();
  const { data, isLoading, refetch } = useCommentGet(`${articleId}`);
  const { mutate, isPending } = useCommentPost();
  const hasSafeArea = Number(getComputedStyle(document.documentElement).getPropertyValue("--env-sab").replace("px", "")) ?? 0;
  const onSubmitComment = () => {
    mutate(
      {
        data: {
          teamId,
          teamBoardId: articleId,
          content: comment
        }
      },
      {
        onSuccess: () => {
          toast.trigger("새 댓글을 달았어요.");
          setComment("");
          refetch();
        }
      }
    );
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap12, fonts.body4.medium), children: [
      /* @__PURE__ */ jsxs("span", { className: clsx(flexRowGap4, colors.gray500), children: [
        "댓글",
        /* @__PURE__ */ jsx("span", { className: colors.gray600, children: data?.length ?? 0 })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: clsx(flexRowGap4, colors.gray500), children: [
        "조회",
        /* @__PURE__ */ jsx("span", { className: colors.gray600, children: viewCount })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { position: "inherit", flex: 1, display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ jsxs("ul", { className: commentListWrapper, children: [
        data?.map((comment2) => /* @__PURE__ */ jsxs("li", { className: flexColumnGap8, children: [
          /* @__PURE__ */ jsxs("div", { className: clsx(flexAlignCenter, flexRowGap8), children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: commentItemUserAvatar,
                style: { backgroundImage: `url(${comment2.createBy.imageUrl})` }
              }
            ),
            /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, color: colors.gray800, style: { flex: 1 }, children: comment2.createBy.memberName }),
            comment2.author && /* @__PURE__ */ jsx("span", { className: "menu", children: /* @__PURE__ */ jsx(
              DropdownAction,
              {
                options: [
                  {
                    name: "수정",
                    action: () => console.log("수정")
                  },
                  {
                    name: "삭제",
                    action: async () => {
                      toast.trigger("삭제 중입니다. 잠시만 기다려주세요.", { type: "info" });
                      const response = await axiosCommentDelete(`${comment2.id}`);
                      if (response.status === 200) {
                        refetch();
                        toast.trigger("댓글을 삭제했어요.", { type: "success" });
                      }
                    }
                  }
                ],
                children: /* @__PURE__ */ jsx("button", { type: "button", children: /* @__PURE__ */ jsx(MoreIcon, { width: 20, height: 20 }) })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: flexRowGap8, children: [
            /* @__PURE__ */ jsx("div", { className: commentItemHasReply, "data-reply": false }),
            /* @__PURE__ */ jsxs("p", { className: clsx(flexColumnGap8, fonts.body4.regular), children: [
              /* @__PURE__ */ jsx("span", { children: comment2.content }),
              /* @__PURE__ */ jsx("span", { className: semantic.description, children: formattedDate(new Date(parsedServerDateTime(comment2.createAt)), {
                displayDateType: "kr",
                displayDayName: "hide",
                displayYear: "not-this-year",
                displayTime: "12h-kr",
                displaySimpleKR: true
              }) })
            ] })
          ] })
        ] }, comment2.id)),
        (data?.length === 0 || !data) && /* @__PURE__ */ jsx("div", { className: boardEmptyCommentArea, children: isLoading ? /* @__PURE__ */ jsx(Spinner, { size: 40 }) : `댓글이 없습니다.
첫 번째 댓글의 주인공이 되어보세요!` })
      ] }),
      /* @__PURE__ */ jsx("div", { className: commentInputBottomWrapper, "data-safe-area": hasSafeArea > 0, children: /* @__PURE__ */ jsxs("div", { className: commentInputContainer, children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: commentInputStyle,
            disabled: isPending,
            value: comment,
            onChange: (e) => setComment(e.target.value),
            placeholder: "댓글을 입력해 주세요"
          }
        ),
        isPending ? /* @__PURE__ */ jsx(Spinner, { size: 26 }) : /* @__PURE__ */ jsx("button", { type: "button", onClick: onSubmitComment, children: /* @__PURE__ */ jsx(SendIcon, { width: 26, height: 26 }) })
      ] }) })
    ] })
  ] });
}
function ImagesGrid({ images }) {
  const [showImage, setShowImage] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const onClickImage = (index) => {
    setShowImage(true);
    setCurrentSlide(index);
  };
  const handleCloseViewer = () => {
    setShowImage(false);
    setCurrentSlide(0);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: boardImagesGridContainer, style: { scrollbarWidth: "none" }, children: images.map((image, index) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: boardImagesGridItem,
        onClick: () => onClickImage(index),
        children: /* @__PURE__ */ jsx("img", { src: image, alt: `${index}번 이미지`, width: 80, height: 80 })
      },
      `${index}+image`
    )) }),
    showImage && /* @__PURE__ */ jsx("section", { className: boardImageViewerContainer, onClick: handleCloseViewer, children: /* @__PURE__ */ jsxs("div", { className: boardImageViewerItemList, onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsx(
        Swiper,
        {
          zoom: true,
          autoHeight: true,
          slidesPerView: 1,
          initialSlide: currentSlide,
          onSlideChange: (swipe) => setCurrentSlide(swipe.activeIndex),
          modules: [Zoom],
          children: images.map((image, index) => /* @__PURE__ */ jsx(SwiperSlide, { style: { textAlign: "center" }, children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "swiper-zoom-container",
              style: {
                minHeight: "55vh",
                height: "max-content",
                marginBottom: "-2px"
              },
              children: /* @__PURE__ */ jsx("img", { src: image, alt: "이미지", style: { width: "100%", height: "100%" } })
            }
          ) }, index))
        }
      ),
      /* @__PURE__ */ jsx("div", { className: boardImageViewerBullet, children: Array.from({ length: images.length }).map((_, index) => /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: currentSlide === index ? "var(--primary500)" : "var(--gray200)"
          }
        },
        `${index}+bullet`
      )) })
    ] }) })
  ] });
}
function ArticleId() {
  const {
    articleId
  } = Route.useParams();
  const {
    data
  } = useGet(boardAPI.DETAIL, {
    boardId: articleId
  });
  if (!data) return /* @__PURE__ */ jsx("div", { className: baseContainer, children: /* @__PURE__ */ jsx(Loading, { page: true }) });
  return /* @__PURE__ */ jsxs("section", { className: clsx(baseContainer, flexColumnGap4), style: {
    minHeight: "calc(100vh - var(--safe-area-top)",
    paddingBottom: "var(--safe-bottom)",
    gap: 0
  }, children: [
    /* @__PURE__ */ jsx(ArticleTop, { title: data.title, boardType: data.boardType, createBy: data.createBy, createAt: data.createAt }),
    /* @__PURE__ */ jsx("article", { id: "tiptap_Editor", dangerouslySetInnerHTML: {
      __html: data?.content.replace(/<(iframe|script)[\s\S]*?<\/\1>/gi, "").replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" class="editor-link" target="_blank" rel="noopener noreferrer">$1</a>')
    } }),
    data.imgUrl.length > 0 && /* @__PURE__ */ jsx(ImagesGrid, { images: data.imgUrl }),
    /* @__PURE__ */ jsx("div", { className: baseDividedLineChild, style: {
      margin: "16px -16px"
    } }),
    /* @__PURE__ */ jsx(ArticleComment, { teamId: data.teamId, articleId, viewCount: data.viewCount })
  ] });
}
export {
  ArticleId as component
};
