import React from "react";

function Spinner({ size = 20, color = "var(--primary500)" }: { size?: number; color?: string }) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width={size} height={size}>
        <radialGradient id="a11" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)">
          <stop offset="0" stopColor={color}></stop>
          <stop offset=".3" stopColor={color} stopOpacity=".9"></stop>
          <stop offset=".6" stopColor={color} stopOpacity=".6"></stop>
          <stop offset=".8" stopColor={color} stopOpacity=".3"></stop>
          <stop offset="1" stopColor={color} stopOpacity="0"></stop>
        </radialGradient>
        <circle
          fill="none"
          stroke="url(#a11)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeDasharray="200 1000"
          cx="100"
          cy="100"
          r="70"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="-360 100 100"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          fill="none"
          opacity=".2"
          stroke={color}
          strokeWidth="24"
          strokeLinecap="round"
          cx="100"
          cy="100"
          r="70"
        ></circle>
      </svg>
    </>
  );
}

export default Spinner;
