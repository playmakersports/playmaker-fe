import React from "react";
import styled from "@emotion/styled";
import { BaseContainer } from "../common/Container";
import Button from "../common/Button";
import { StepPageDescription, StepPageTitle } from "../common/global/Text";

type Props = {
  children: React.ReactNode;
  stage?: { now: number; length: number };
  title?: string;
  description?: string;
  button?: {
    text: string;
    onClick: () => void;
    disabled?: boolean;
  };
};
function Stepper({ children, stage, title, description, button }: Props) {
  return (
    <Container>
      <article>
        {stage && (
          <Stage>
            {Array.from({ length: stage.length }).map((v, index) => (
              <li key={index} className={stage.now === index + 1 ? "active-step" : ""} />
            ))}
          </Stage>
        )}
        {title && <StepPageTitle>{title}</StepPageTitle>}
        {description && <StepPageDescription>{description}</StepPageDescription>}
        {children}
      </article>
      {button && (
        <ButtonWrapper>
          <Button type="button" mode="MAIN" onClick={button.onClick} disabled={button.disabled} fullWidth>
            {button.text}
          </Button>
        </ButtonWrapper>
      )}
    </Container>
  );
}

const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - var(--safe-area-top) - 1px);
`;
const ButtonWrapper = styled.div`
  padding-bottom: var(--env-sab);
`;

const Stage = styled.ul`
  display: flex;
  margin-bottom: 32px;
  height: 20px;
  justify-content: center;
  align-items: center;

  li {
    position: relative;
    margin: 0 1px;
    margin-left: 32px;
    width: 12px;
    height: 12px;
    background: var(--gray6);
    border-radius: 50%;
    border: 2px solid var(--background-light);
    box-sizing: content-box;
    transition: all 0.25s;

    &.active-step {
      width: 16px;
      height: 16px;
      background-color: var(--main);
      outline: 1px solid var(--sub1);
    }
    &:first-of-type {
      margin: 0 2px 0 0;
    }
    &:first-of-type::before {
      display: none;
    }
    &::before {
      content: "";
      position: relative;
      display: block;
      width: 32px;
      height: 2px;
      border-top: 1px dashed var(--gray6);
      left: calc((32px + 2px) * -1);
      top: 50%;
    }
  }
`;

export default Stepper;
