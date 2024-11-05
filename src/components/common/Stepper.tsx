import React from "react";
import styled from "@emotion/styled";

type Props = { type?: "line" | "simple"; length: number; now: number; children: React.ReactNode };
function Stepper({ type = "line", length, now, children }: Props) {
  if (type === "line") {
    return (
      <>
        <Container length={length}>
          {Array.from({ length }).map((_, index) => (
            <li key={index} className={now === index + 1 ? "active-step" : index + 1 < now ? "past-step" : ""}>
              <i />
            </li>
          ))}
        </Container>
        {children}
      </>
    );
  }

  if (type === "simple") {
    return (
      <>
        <SimpleContainer>
          {Array.from({ length }).map((_, index) => (
            <i key={index} className={now === index + 1 ? "active" : ""} />
          ))}
        </SimpleContainer>
        {children}
      </>
    );
  }
}

const Container = styled.ul<{ length: number }>`
  display: flex;
  margin: 16px 16px -12px;
  padding: 0 10px;
  height: 20px;
  justify-content: space-between;
  align-items: center;

  li {
    position: relative;
    z-index: 1;
    i {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--gray300);
      border: 2px solid var(--background-light);
      box-sizing: content-box;
    }

    &.active-step > i {
      width: 12px;
      height: 12px;
      background-color: var(--main);
      border: 1px solid var(--background);
      outline: 1px solid var(--sub1);
    }
    &.past-step > i {
      background-color: var(--sub1);
    }
    &::before {
      content: "";
      position: absolute;
      left: ${({ length }) => `calc(((min(600px, 100vw) - 26px) / ${length - 1} - 34px) * -1)`};
      width: ${({ length }) => `calc(((min(600px, 100vw) - 26px) / ${length - 1} - 40px))`};
      height: 2px;
      border-top: 1px dashed var(--gray300);
      top: 50%;
    }
    &.active-step::before,
    &.past-step::before {
      border-color: var(--sub1);
    }

    &:first-of-type::before {
      display: none;
    }
  }
`;

const SimpleContainer = styled.div`
  display: flex;
  margin: 18px 16px 0;
  padding: 0 10px;
  justify-content: center;
  gap: 5px;

  i {
    width: 6px;
    height: 6px;
    background-color: var(--gray300);
    border-radius: 50%;
    transition: all 0.15s;
  }
  i.active {
    width: 20px;
    background-color: var(--sub1);
    border-radius: 5px;
  }
`;

export default Stepper;
