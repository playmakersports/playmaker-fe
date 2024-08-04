import React from "react";
import styled from "@emotion/styled";
import { BaseContainer } from "../common/Container";
import Button from "../common/Button";

type Props = {
  children: React.ReactNode;
  button?: {
    text: string;
    onClick: () => void;
  };
};
function Stepper({ children, button }: Props) {
  return (
    <Container>
      <article>{children}</article>
      {button && (
        <ButtonWrapper>
          <Button type="button" mode="MAIN" onClick={button.onClick}>
            {button.text}
          </Button>
        </ButtonWrapper>
      )}
    </Container>
  );
}

const Container = styled(BaseContainer)``;
const ButtonWrapper = styled.div``;

export default Stepper;
