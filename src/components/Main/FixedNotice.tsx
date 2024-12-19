"use client";

import React from "react";
import styled from "styled-components";

import { FONTS } from "@/styles/common";
import ExclamationSolid from "@/assets/icon/global/ExclamationSolid.svg";

function FixedNotice() {
  return (
    <Container>
      <ExclamationSolid />{" "}
      <p className="notice-text">
        <strong>재학증명서</strong> 인증이 필요해요
      </p>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-bottom: -8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  border-radius: 20px;
  background: var(--background-light);
  gap: 6px;
  svg {
    width: 16px;
    height: 16px;
  }

  p.notice-text {
    ${FONTS.MD1W500}
    font-weight: 400;
    font-size: 1.4rem;
  }
  strong {
    color: #fe9e2a;
    font-weight: 500;
  }
`;

export default FixedNotice;
