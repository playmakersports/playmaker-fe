import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { FormProvider, useForm } from "react-hook-form";

import { usePageTitle } from "@/hook/usePageTitle";
import useBackgroundGray from "@/hook/useBackgroundGray";

import JoinInput from "@/components/User/JoinInput";
import { BaseContainer } from "@/components/common/Container";

function Join() {
  usePageTitle("회원가입");
  useBackgroundGray();

  const forms = useForm();
  useEffect(() => {
    forms.setFocus("name");
  }, []);

  return (
    <FormProvider {...forms}>
      <Container as="form">
        <JoinInput type="text" label="이름" id="name" />
        <JoinInput type="text" label="이메일" id="email" />
        <JoinInput type="text" label="이메일" id="email" />
      </Container>
    </FormProvider>
  );
}

const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default Join;
