import React from "react";
import styled from "styled-components";
import { InputWrapperStyledProps } from "./type";
import { FONTS } from "@/styles/common";

function InputWrapper({ children, ...props }: InputWrapperStyledProps & { children: React.ReactNode }) {
  const { title, information, required } = props;
  const onClickOpenToolTip = () => {};

  return (
    <Wrapper>
      {title && (
        <div className="input-header">
          <span className="title">{title}</span>
          {information && (
            <button type="button" className="question-icon" onClick={onClickOpenToolTip}>
              <InfoIcon fill="var(--gray400)" />
            </button>
          )}
          {required && <span style={{ color: "var(--red500)" }}>*</span>}
        </div>
      )}
      <div style={{ position: "relative" }}>{children}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: var(--mobile-max-width);
  div.input-header {
    display: flex;
    margin-bottom: 8px;
    align-items: center;
    gap: 4px;
    ${FONTS.body4("medium")};

    span.title {
      color: var(--gray700);
    }
    button.question-icon {
      width: 20px;
      height: 20px;
    }
  }
`;

const InfoIcon = ({ fill }: { fill: string }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_80_2937"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_80_2937)">
        <path d="M10 15C10.2778 15 10.5139 14.9028 10.7083 14.7083C10.9028 14.5139 11 14.2778 11 14C11 13.7222 10.9028 13.4861 10.7083 13.2917C10.5139 13.0972 10.2778 13 10 13C9.72222 13 9.48611 13.0972 9.29167 13.2917C9.09722 13.4861 9 13.7222 9 14C9 14.2778 9.09722 14.5139 9.29167 14.7083C9.48611 14.9028 9.72222 15 10 15ZM9.25 11.8125H10.7708C10.7708 11.2986 10.816 10.934 10.9062 10.7188C10.9965 10.5035 11.2153 10.2292 11.5625 9.89583C12.0486 9.42361 12.3854 9.02083 12.5729 8.6875C12.7604 8.35417 12.8542 7.98611 12.8542 7.58333C12.8542 6.81944 12.5938 6.19792 12.0729 5.71875C11.5521 5.23958 10.8889 5 10.0833 5C9.375 5 8.76042 5.1875 8.23958 5.5625C7.71875 5.9375 7.35417 6.44444 7.14583 7.08333L8.5 7.64583C8.625 7.25694 8.82292 6.95486 9.09375 6.73958C9.36458 6.52431 9.68056 6.41667 10.0417 6.41667C10.4306 6.41667 10.75 6.52778 11 6.75C11.25 6.97222 11.375 7.26389 11.375 7.625C11.375 7.94444 11.2674 8.22917 11.0521 8.47917C10.8368 8.72917 10.5972 8.97222 10.3333 9.20833C9.84722 9.65278 9.54514 10.0174 9.42708 10.3021C9.30903 10.5868 9.25 11.0903 9.25 11.8125ZM10 18C8.90278 18 7.86806 17.7917 6.89583 17.375C5.92361 16.9583 5.07292 16.3854 4.34375 15.6562C3.61458 14.9271 3.04167 14.0764 2.625 13.1042C2.20833 12.1319 2 11.0972 2 10C2 8.88889 2.20833 7.85069 2.625 6.88542C3.04167 5.92014 3.61458 5.07292 4.34375 4.34375C5.07292 3.61458 5.92361 3.04167 6.89583 2.625C7.86806 2.20833 8.90278 2 10 2C11.1111 2 12.1493 2.20833 13.1146 2.625C14.0799 3.04167 14.9271 3.61458 15.6562 4.34375C16.3854 5.07292 16.9583 5.92014 17.375 6.88542C17.7917 7.85069 18 8.88889 18 10C18 11.0972 17.7917 12.1319 17.375 13.1042C16.9583 14.0764 16.3854 14.9271 15.6562 15.6562C14.9271 16.3854 14.0799 16.9583 13.1146 17.375C12.1493 17.7917 11.1111 18 10 18ZM10 16.5C11.8056 16.5 13.3403 15.8681 14.6042 14.6042C15.8681 13.3403 16.5 11.8056 16.5 10C16.5 8.19444 15.8681 6.65972 14.6042 5.39583C13.3403 4.13194 11.8056 3.5 10 3.5C8.19444 3.5 6.65972 4.13194 5.39583 5.39583C4.13194 6.65972 3.5 8.19444 3.5 10C3.5 11.8056 4.13194 13.3403 5.39583 14.6042C6.65972 15.8681 8.19444 16.5 10 16.5Z" />
      </g>
    </svg>
  );
};

export default InputWrapper;
