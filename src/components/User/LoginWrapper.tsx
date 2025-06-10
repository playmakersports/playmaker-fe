import React from "react";
import LogoSymbolType from "@/assets/logo/LogoSymbolGreen.svg";
import { fonts } from "@/styles/fonts.css";

type Props = {
  children: React.ReactNode;
  logoFill?: string;
};
function LoginWrapper({ children, logoFill }: Props) {
  return (
    <section
      style={{
        position: "relative",
        display: "flex",
        height: "calc(100vh - var(--safe-area-top) - 2px)",
        padding: "60px 20px 0",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <svg style={backgroundStyle} viewBox="0 0 414 694" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M145 193.5C73 66.7 3 12 -23 0.5L-38 721.5L440 709.5V330L418 240.5C357 277.667 217 320.3 145 193.5Z"
          fill="url(#paint0_linear_2198_3712)"
          fillOpacity="0.1"
        />
        <path
          d="M220 223C75.9086 245.359 3 60.5 -23 49L-38 770L440 758V378.5L423 196.5C376.5 145 249 218.5 220 223Z"
          fill="url(#paint1_linear_2198_3712)"
          fillOpacity="0.1"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2198_3712"
            x1="-38"
            y1="-8.08817"
            x2="70.9706"
            y2="269.69"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={logoFill ?? "#2BCE8A"} />
            <stop offset="1" stopColor={logoFill ?? "#2BCE8A"} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2198_3712"
            x1="-38"
            y1="40.9531"
            x2="180.542"
            y2="372.539"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={logoFill ?? "#2BCE8A"} />
            <stop offset="1" stopColor={logoFill ?? "#2BCE8A"} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div style={logoAreaStyle}>
        <LogoSymbolType className="logo-icon" width={132} height={72} />
        <div className={fonts.head5.semibold} style={{ color: "var(--primary500)" }}>
          플메
        </div>
        {/* <LogoTextType className="logo-text" width={150} height={16} fill={logoFill ?? "var(--main)"} /> */}
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "16px" }}>{children}</div>
      </div>
    </section>
  );
}

const backgroundStyle = {
  display: "block",
  position: "absolute",
  left: "-48px",
  top: "15%",
  width: "600px",
  height: "800px",
  zIndex: 0,
} as const;
const logoAreaStyle = {
  display: "flex",
  margin: "60px 0",
  flexDirection: "column",
  alignItems: "center",
  gap: "18px",
} as const;

export default LoginWrapper;
