"use client";

import React, { useState } from "react";
import styled from "styled-components";

import { FONTS } from "@/styles/common";
import { BasicInput } from "@/components/common/input/BaseInput";
import LoginWrapper from "@/components/User/LoginWrapper";

function Staff() {
  const [login, setLogin] = useState({
    userId: "",
    password: "",
  });

  return (
    <LoginWrapper
      logoFill="#ecad00"
      button={{
        text: "로그인",
        onClick: () => console.log(""),
      }}
    >
      <PageText>
        <h2>협회 및 관계사 로그인</h2>
        <p>
          협회 및 관계사 가입은 별도 문의
          <br />
          playermaker@gmail.com
        </p>
      </PageText>
      <Login>
        <BasicInput
          type="text"
          placeholder="아이디"
          id="userId"
          value={login.userId}
          onChange={(e) => setLogin((prev) => ({ ...prev, userId: e.target.value.toLowerCase().replace(/\s+/g, "") }))}
        />
        <BasicInput
          type="password"
          placeholder="비밀번호"
          id="password"
          value={login.password}
          onChange={(e) => setLogin((prev) => ({ ...prev, password: e.target.value }))}
        />
      </Login>
    </LoginWrapper>
  );
}

const PageText = styled.div`
  position: fixed;
  top: calc(var(--safe-area-top) + 100px + 150px);
  left: 0;
  width: 100%;
  text-align: center;

  h2 {
    display: inline;
    user-select: none;
    padding: 6px 16px;
    ${FONTS.body3("semibold")};
    color: #e2a600;
    border-radius: 20px;
    border: 3px solid #ecad00;
  }

  p {
    margin-top: 40px;
    ${FONTS.body4("regular")};
    color: var(--gray600);
    line-height: 2.4rem;
  }
`;
const Login = styled.form`
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Staff;
