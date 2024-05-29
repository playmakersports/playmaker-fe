import React from "react";
import styled from "@emotion/styled";
import { BasicWhiteCard } from "./Card";
import { InputCheckbox } from "./SelectInput";
import { CARD_ACTIVE, FONTS } from "@/styles/common";

type Props = {
  cardTitle: string;
  cardDescription: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function CardCheckboxButton(props: Props) {
  return (
    <Card htmlFor={props.id}>
      <h2>
        <InputCheckbox id={props.id} {...props} />
        {props.cardTitle}
      </h2>
      <p className="select-description">{props.cardDescription}</p>
    </Card>
  );
}

const Card = styled(BasicWhiteCard.withComponent("label"))`
  h2 {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 1.8rem;
    font-weight: 700;
  }
  .select-description {
    margin-left: 32px;
    color: rgb(var(--gray-h2));
    ${FONTS.MD1W500};
    font-size: 1.4rem;
    white-space: pre-wrap;
  }

  &:has(input:checked) {
    h2 {
      color: var(--main);
    }
    border: 2px solid var(--main);
    transform: scale(1.02);
    box-shadow: 0 0 10px 6px var(--box-shadow);
  }
  display: block;
  width: 100%;
  padding: 16px 20px;
  border: 1px solid rgba(var(--gray-h5), 0.9);
  ${CARD_ACTIVE};
`;
