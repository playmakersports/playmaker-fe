import React from "react";
import styled from "@emotion/styled";

import { BasicWhiteCard } from "./Card";
import { CARD_ACTIVE, FONTS } from "@/styles/common";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value"> & {
  type: "checkbox" | "radio";
  value: string;
  children: React.ReactNode;
};
const CardInput = React.forwardRef<HTMLInputElement, Props>(({ type, value, children, id, ...rest }, ref) => (
  <>
    <Input type={type} ref={ref} id={id} value={value} {...rest} />
    <Card htmlFor={id} role="button">
      {children}
    </Card>
  </>
));
CardInput.displayName = "CardInput";

const Card = styled(BasicWhiteCard.withComponent("label"))`
  cursor: pointer;
  ${FONTS.MD1W500};
  font-weight: 400;
  ${CARD_ACTIVE}
`;
const Input = styled.input`
  display: none;
  &:checked + ${Card} {
    font-weight: 500;
    padding: 17px 19px; // border 2px 고려
    border: 2px solid var(--main);
    color: var(--main);
  }
`;

export default CardInput;
