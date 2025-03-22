"use client";
import LoadingAnimatedSvg from "@/assets/icon/common/Loading.svg";

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
          background: "rgba(var(--background-rgb), 0.6)",
          zIndex: 100,
        }}
      >
        <LoadingAnimatedSvg width={60} height={70} style={{ margin: 0 }} />
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "var(--main)",
            marginTop: "10px",
          }}
        >
          {props.text}
        </p>
      </div>
    );
  }
  return (
    <div style={{ display: "block", margin: "0 auto", height: "120px" }}>
      <LoadingAnimatedSvg width={60} height={120} />
    </div>
  );
}

export default Loading;
