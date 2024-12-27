"use client";
import { FONTS } from "@/styles/common";
import React from "react";
import styled from "styled-components";

function MyTabNav({ children }: { children: React.ReactNode }) {
  return (
    <Nav>
      <div className="tab-inner">{children}</div>
    </Nav>
  );
}

const Nav = styled.nav`
  box-shadow: 0 3px 4px 0 rgba(50, 50, 71, 0.08);
  padding: 0 20px;

  div.tab-inner {
    display: flex;
    gap: 10px;
    transform: translateY(2px);
  }
  a {
    ${FONTS.MD3};
    flex: 1;
    padding: 10px 0;
    font-size: 1.4rem;
    text-align: center;
    color: var(--gray500);

    &.active {
      color: var(--main);
      font-weight: 600;
      border-bottom: 3px solid var(--main);
    }
  }
`;

export default MyTabNav;
