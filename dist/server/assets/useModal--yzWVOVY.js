import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect, useId, useCallback } from "react";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import styled, { keyframes } from "styled-components";
import { B as Button } from "./Button-cLlpCM0x.js";
import { F as FONTS } from "./common-6ceLbjxn.js";
import { P as Portal } from "./Portal-D4P9dmtA.js";
import { d as flexColumnGap4 } from "./container.css-C2ezn6CH.js";
let bodyScrollLockCount = 0;
const ANIMATION_RUNNING_TIME = 300;
function BottomSheet(props) {
  const { disabledDimOut = false, setShow, draggable = false, onClose, children, header, expanded, buttons } = props;
  const modalRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const closeBottomSheet = () => {
    setShowModal(false);
    onClose && onClose();
    setTimeout(() => {
      setShow(false);
    }, ANIMATION_RUNNING_TIME);
  };
  useEffect(() => {
    setMounted(true);
    bodyScrollLockCount++;
    if (bodyScrollLockCount === 1) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    }
    return () => {
      bodyScrollLockCount--;
      setMounted(false);
      if (bodyScrollLockCount === 0) {
        document.body.style.overflow = "auto";
        document.body.style.touchAction = "auto";
      }
    };
  }, []);
  useEffect(() => {
    if (mounted) {
      const id = requestAnimationFrame(() => {
        setShowModal(true);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [mounted]);
  const handleTouchStart = (e) => {
    e.stopPropagation();
    if (!draggable) return;
    setTouchStartY(e.touches[0].clientY);
    setIsDragging(true);
  };
  const handleTouchMove = (e) => {
    e.stopPropagation();
    if (!draggable || !isDragging) return;
    const deltaY = e.touches[0].clientY - touchStartY;
    const target = e.target;
    const scrollable = target.closest(".scrollable-container");
    if (scrollable) {
      const isAtTop = scrollable.scrollTop === 0;
      if (!isAtTop && deltaY > 0) {
        return;
      }
    }
    if (deltaY > 0) {
      setTranslateY(deltaY);
    }
  };
  const handleTouchEnd = (e) => {
    e.stopPropagation();
    if (!draggable) return;
    setIsDragging(false);
    const deltaY = e.changedTouches[0].clientY - touchStartY;
    const target = e.target;
    const scrollable = target.closest(".scrollable-container");
    let isAtTop = true;
    if (scrollable) {
      isAtTop = scrollable.scrollTop < -30;
    }
    const shouldClose = deltaY > 70 && isAtTop;
    if (shouldClose) {
      closeBottomSheet();
      setTranslateY(-window.innerHeight / 2);
    } else {
      setTranslateY(0);
    }
  };
  const draggableEvent = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  };
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Backdrop, { $isShow: showModal, onClick: disabledDimOut ? () => {
    } : closeBottomSheet }),
    /* @__PURE__ */ jsxs(
      Wrapper,
      {
        onContextMenu: (e) => e.preventDefault(),
        style: {
          userSelect: isDragging && translateY ? "none" : "auto",
          transition: !isDragging ? `all ${ANIMATION_RUNNING_TIME}ms` : "none",
          transform: draggable && translateY > 0 ? `translate3d(-50%, calc(${showModal ? 0 : "100%"}% + ${Math.ceil(translateY)}px), 0)` : `translate3d(-50%, ${showModal ? 0 : "100%"}, 0)`
        },
        $isShow: showModal,
        $expanded: !!expanded,
        role: "dialog",
        "aria-modal": "true",
        tabIndex: -1,
        "aria-labelledby": "BottomModalHeader",
        ...draggable === "all" ? draggableEvent : {},
        children: [
          (expanded || !!draggable) && /* @__PURE__ */ jsx(Bar, { ...draggable === "bar" ? draggableEvent : {} }),
          /* @__PURE__ */ jsxs(Contents, { children: [
            header && /* @__PURE__ */ jsx(Header, { id: "BottomModalHeader", children: header }),
            /* @__PURE__ */ jsx("div", { children: typeof children === "function" ? children(closeBottomSheet) : children })
          ] }),
          buttons && /* @__PURE__ */ jsx(ButtonWrapper, { children: buttons.map((button) => /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              size: "large",
              mode: button.mode,
              fillType: button.fillType,
              disabled: button.disabled,
              onClick: () => {
                button.onClick(closeBottomSheet);
              },
              flex: button.flex ?? 1,
              children: button.name
            },
            button.name
          )) })
        ]
      }
    )
  ] });
}
const fadeIn = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  /* z-index: 999; */
  opacity: ${({ $isShow }) => $isShow ? 1 : 0};
  transition: opacity 0.2s;
`;
const Bar = styled.div`
  display: flex;
  justify-content: center;
  margin: -16px 0 0;
  padding: 12px 0 20px;

  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 6px;
    background-color: var(--gray200);
    border-radius: 999px;
  }
`;
const Header = styled.header`
  color: var(--gray700);
  ${FONTS.body3("semibold")};
  opacity: 0.5;
  transform: translateY(20px);
  animation: ${fadeIn} 0.2s ease-in-out forwards;
  animation-delay: 0.1s;
`;
const Contents = styled.div`
  margin: 0 0 20px;
  max-height: 75dvh;
  color: inherit;
  ${FONTS.caption1("regular")};

  & > div {
    opacity: 0.5;
    transform: translateY(max(5%, 16px));
    animation: ${fadeIn} 0.2s ease-in-out forwards;
    animation-delay: 0.165s;
  }
`;
const Wrapper = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px var(--global-lr-padding) calc(28px + env(safe-area-inset-bottom) / 2);
  width: var(--mobile-max-width);
  left: 50%;
  bottom: 0;
  min-height: ${({ $expanded }) => $expanded ? "90vh" : "auto"};
  /* z-index: 1000; */
  background: var(--background-light);
  border-radius: 16px 16px 0 0;
  opacity: ${({ $isShow }) => $isShow ? 1 : 0};
  transform-origin: center left;
  box-shadow: var(--shadow-md);
  will-change: transform;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
function useModal(props = {}) {
  const idPrefix = useId();
  const idRef = useRef(0);
  const [modals, setModals] = useState([]);
  const [modalState, setModalState] = useState({});
  const [key, setKey] = useState("");
  const showModal = () => {
    const key2 = props.key ?? `${idPrefix}-${idRef.current++}`;
    setModals((prev) => [...prev, { key: key2, visible: true }]);
    setKey(key2);
    return key2;
  };
  const hideModal = (key2) => {
    setModals((prev) => prev.map((m) => m.key === key2 ? { ...m, visible: false } : m));
    setTimeout(() => {
      setModals((prev) => prev.filter((m) => m.key !== key2));
    }, 250);
  };
  const ModalComponents = useCallback(
    (props2) => {
      return /* @__PURE__ */ jsx(Fragment, { children: modals.map(
        ({ key: key2, visible }) => visible ? /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsx(
          BottomSheet,
          {
            draggable: props2.draggable,
            disabledDimOut: props2.disabledDimOut,
            header: props2.title && /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, style: { marginBottom: "32px" }, children: [
              /* @__PURE__ */ jsx("h4", { className: fonts.body2.semibold, style: { color: "var(--gray900)" }, children: props2.title }),
              props2.description && /* @__PURE__ */ jsx("span", { className: fonts.body4.regular, style: { color: "var(--gray400)" }, children: props2.description })
            ] }),
            onClose: props2.onClose,
            setShow: (v) => {
              if (!v) hideModal(key2);
            },
            buttons: props2.buttons,
            expanded: props2.expanded,
            children: typeof props2.children === "function" ? props2.children({
              closeModal: () => hideModal(key2),
              setState: (value) => setModalState((prev) => ({ ...prev, [key2]: value }))
            }) : props2.children
          }
        ) }, key2) : null
      ) });
    },
    [modals]
  );
  return { ModalComponents, showModal, modalState, key };
}
export {
  useModal as u
};
