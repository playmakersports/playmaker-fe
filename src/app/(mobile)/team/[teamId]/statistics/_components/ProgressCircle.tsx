import React from "react";
import styled from "styled-components";

const STROKE = 24;

const ArcTrack = styled.path`
  fill: none;
  stroke: var(--gray100);
  stroke-linecap: round;
  stroke-width: ${STROKE / 2};
`;

const ArcProgress = styled.path`
  fill: none;
  stroke: var(--primary500);
  stroke-width: ${STROKE};
  stroke-linecap: round;
  transition: stroke-dashoffset 0.8s ease;
`;

interface Props {
  size: number;
  percentage: number;
  direction: "left-to-right" | "right-to-left";
  rate?: number;
  children?: React.ReactNode;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = Math.abs(endAngle - startAngle) > 180 ? "1" : "0";

  return ["M", start.x, start.y, "A", r, r, 0, largeArcFlag, 1, end.x, end.y].join(" ");
}

const HalfDonutChart: React.FC<Props> = ({
  size = 200,
  percentage,
  rate = 0.5,
  children,
  direction = "right-to-left",
}) => {
  const RADIUS = (size - STROKE) / 2;
  const CENTER = size / 2;

  const arcDegrees = 360 * rate;
  const arcLength = (Math.PI * RADIUS * arcDegrees) / 180;
  const startAngle = 90 + arcDegrees / 2;
  const endAngle = 90 - arcDegrees / 2;
  const path = describeArc(CENTER, CENTER, RADIUS, startAngle, endAngle);
  const dashOffset = arcLength * (1 - percentage / 100);

  const isLeftToRight = direction === "left-to-right";

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        style={{
          transform: `rotate(${(isLeftToRight ? -1 : 1) * 90}deg) scaleX(${isLeftToRight ? 1 : -1})`,
        }}
      >
        <ArcTrack d={path} />
        <ArcProgress d={path} strokeDasharray={arcLength} strokeDashoffset={dashOffset} />
      </svg>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default HalfDonutChart;
