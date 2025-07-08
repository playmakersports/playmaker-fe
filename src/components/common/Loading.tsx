"use client";
import LoadingAnimatedSvg from "@/assets/icon/common/Loading.svg";
import { fonts } from "@/styles/fonts.css";

type Props =
  | {
      page?: true;
      text?: string;
    }
  | {
      page?: false;
    };

function Loading(props: Props) {
  if (props.page) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          width: "100%",
          height: "100%",
          background: "rgba(256, 256, 256, 0.1)",
          zIndex: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "180px",
            minHeight: "180px",
            gap: "0",
            borderRadius: "20px",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(256, 256, 256, 0.9)",
          }}
        >
          <LoadingAnimatedSvg width={110} height={90} style={{ margin: 0 }} />
          <p
            className={fonts.body3.semibold}
            style={{
              color: "var(--primary600)",
            }}
          >
            {props.text}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: "block", margin: "0 auto", height: "120px" }}>
      <LoadingAnimatedSvg width={80} height={120} />
    </div>
  );
}

export default Loading;
