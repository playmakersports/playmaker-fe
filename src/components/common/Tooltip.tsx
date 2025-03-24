import { FONTS } from "@/styles/common";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type TooltipColor = "white" | "gray";
type TooltipContents = {
  title: string;
  description: string;
};
export type TooltipProps = {
  color?: TooltipColor;
  contents: Array<TooltipContents>;
};
function useTooltip(props: TooltipProps) {
  const { color = "white", contents } = props;
  const tooltipRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<Record<string, any>>({
    activeX: "left",
    activeY: "top",
    tight: false,
  });

  const handleWindowResize = ({ clientWidth, clientHeight }: { clientWidth: number; clientHeight: number }) => {
    const tooltipWidth = 220;
    const tooltipHeight = 120;
    const rect = tooltipRef!.current?.getBoundingClientRect() ?? { left: 0, top: 0 };

    if (clientWidth - rect.left < tooltipWidth) {
      setTooltipPosition((prev) => ({ ...prev, activeX: "right" }));
      if (clientWidth - rect.left < tooltipWidth / 2) {
        setTooltipPosition((prev) => ({ ...prev, tight: true }));
      } else {
        setTooltipPosition((prev) => ({ ...prev, tight: false }));
      }
    } else {
      setTooltipPosition((prev) => ({ ...prev, activeX: "left" }));
      if (rect.left < tooltipWidth / 2) {
        setTooltipPosition((prev) => ({ ...prev, tight: true }));
      } else {
        setTooltipPosition((prev) => ({ ...prev, tight: false }));
      }
    }
    if (clientHeight - rect.top < tooltipHeight) {
      setTooltipPosition((prev) => ({ ...prev, activeY: "bottom" }));
    } else {
      setTooltipPosition((prev) => ({ ...prev, activeY: "top" }));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showTooltip &&
        tooltipRef.current &&
        containerRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowTooltip(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [showTooltip]);

  useEffect(() => {
    const handler = () =>
      handleWindowResize({
        clientWidth: Math.floor(document.body.clientWidth),
        clientHeight: Math.floor(document.body.clientHeight),
      });
    handler();
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  const onClickOpenTooltip = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    event.currentTarget.style.position = "relative";
    const clientWidth = Math.floor(document.body.clientWidth);
    const clientHeight = Math.floor(document.body.clientHeight);
    let rect;

    if (tooltipRef.current) {
      rect = tooltipRef.current.getBoundingClientRect();
    } else {
      tooltipRef.current = event.currentTarget;
      rect = tooltipRef.current.getBoundingClientRect();
    }
    handleWindowResize({
      clientWidth,
      clientHeight,
    });
    setShowTooltip((prev) => !prev);
  };

  const TriggerArea = ({ children }: { children: React.ReactNode }) => {
    return (
      <span ref={tooltipRef} style={{ position: "relative", cursor: "help" }} onClick={onClickOpenTooltip}>
        {children}
      </span>
    );
  };

  const Tooltip = () => {
    const [tooltipStage, setTooltipStage] = useState(0);
    const onClickSwitchTooltip = (type: "prev" | "next") => {
      setTooltipStage((prev) => {
        if (type === "prev") {
          return prev - 1 < 0 ? contents.length - 1 : prev - 1;
        } else {
          return prev + 1 >= contents.length ? 0 : prev + 1;
        }
      });
    };

    if (!showTooltip) return null;
    return (
      <Container
        ref={containerRef}
        $colors={TOOLTIP_COLORS[color]}
        data-position={`${tooltipPosition.activeY}-${tooltipPosition.activeX}-${tooltipPosition.tight}`}
        style={{
          [tooltipPosition.activeY]: tooltipPosition.tight
            ? tooltipPosition.activeY === "top"
              ? "-100%"
              : "-200%"
            : "100%",
          [tooltipPosition.activeX]: tooltipPosition.tight ? "100%" : "50%",
          transform: tooltipPosition.tight ? "" : `translateX(${tooltipPosition.activeX === "left" ? "-50%" : "50%"})`,
        }}
      >
        <Contents>
          <div
            className="tooltip-inner-wrapper"
            style={{
              transform: `translateX(-${tooltipStage * 100}%)`,
            }}
          >
            {contents.map((content, index) => (
              <div key={index} className="tooltip-content">
                {content.title && <h3 className="tooltip-title">{content.title}</h3>}
                <p className="tooltip-description">{content.description}</p>
              </div>
            ))}
          </div>
        </Contents>
        {contents.length > 1 && (
          <Bottom>
            <ul className="dots">
              {contents.map((_, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor:
                      tooltipStage === index ? TOOLTIP_COLORS[color].activeDot : TOOLTIP_COLORS[color].dots,
                  }}
                />
              ))}
            </ul>
            <div className="buttons">
              <button type="button" className="prev-button" onClick={() => onClickSwitchTooltip("prev")}>
                이전
              </button>
              <button type="button" className="next-button" onClick={() => onClickSwitchTooltip("next")}>
                다음
              </button>
            </div>
          </Bottom>
        )}
      </Container>
    );
  };

  return { TriggerArea, Tooltip, onClickOpenTooltip };
}

const Container = styled.div<{ $colors: TooltipColorDesign }>`
  position: absolute;
  padding: 12px;
  width: 220px;
  height: max-content;
  box-shadow: 0 0 35px 0 rgba(15, 23, 42, 0.08);
  border-radius: 10px;
  background-color: ${({ $colors }) => $colors.background};
  z-index: 100;

  h3.tooltip-title {
    margin-bottom: 4px;
    color: ${({ $colors }) => $colors.title};
    ${FONTS.caption1("semibold")};
  }
  p.tooltip-description {
    word-break: keep-all;
    color: ${({ $colors }) => $colors.description};
    ${FONTS.caption1("regular")};
  }

  div.buttons > button {
    ${FONTS.caption1("semibold")}
  }
  button.prev-button {
    color: ${({ $colors }) => $colors.prevBtn};
  }
  button.next-button {
    margin-left: 8px;
    color: ${({ $colors }) => $colors.nextBtn};
  }

  --margin-gap: 12px;
  &[data-position="top-right-false"],
  &[data-position="top-left-false"] {
    margin-top: var(--margin-gap);
    &::before {
      top: -5px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  }
  &[data-position="bottom-right-true"],
  &[data-position="top-right-true"] {
    margin-right: var(--margin-gap);
    &::before {
      right: -5px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
  }
  &[data-position="bottom-left-true"],
  &[data-position="top-left-true"] {
    margin-left: var(--margin-gap);
    &::before {
      left: -5px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
  }
  &[data-position="bottom-right-false"],
  &[data-position="bottom-left-false"] {
    margin-bottom: var(--margin-gap);
    &::before {
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background-color: ${({ $colors }) => $colors.background};
  }
`;
const Contents = styled.div`
  overflow: hidden;
  div.tooltip-inner-wrapper {
    display: flex;
    transition: transform 0.3s;
  }
  div.tooltip-content {
    width: 100%;
    flex-shrink: 0;
  }
`;
const Bottom = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: center;
  justify-content: space-between;

  ul.dots {
    display: inline-flex;
    gap: 4px;
    li {
      border-radius: 50%;
      width: 4px;
      height: 4px;
    }
  }
`;

type TooltipColorDesign = {
  background: string;
  title: string;
  description: string;
  activeDot: string;
  dots: string;
  nextBtn: string;
  prevBtn: string;
};
const TOOLTIP_COLORS: Record<TooltipColor, TooltipColorDesign> = {
  white: {
    background: "var(--white)",
    title: "var(--gray700)",
    description: "var(--gray700)",
    activeDot: "var(--gray700)",
    dots: "var(--gray200)",
    nextBtn: "var(--gray700)",
    prevBtn: "var(--gray400)",
  },
  gray: {
    background: "var(--gray700)",
    title: "var(--white)",
    description: "var(--gray300)",
    activeDot: "var(--white)",
    dots: "rgba(256,256,256,0.5)",
    nextBtn: "var(--white)",
    prevBtn: "rgba(256,256,256,0.5)",
  },
};

export default useTooltip;
