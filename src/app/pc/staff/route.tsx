"use client";

import React from "react";
import styled from "styled-components";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import PcLayout from "../_components/PcLayout";

export const Route = createFileRoute("/pc/staff")({
  component: Layout,
});

function Layout() {
  return (
    <>
      <PcLayout>
        <Outlet />
      </PcLayout>
      <PcAlert>현재 해상도에서 접근할 수 없는 페이지입니다.</PcAlert>
    </>
  );
}

const PcAlert = styled.section`
  display: none;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  @media (max-width: 960px) {
    display: flex;
  }
`;
