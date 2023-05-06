import styled from "@emotion/styled";
import React from "react";

interface ButtonLargePropsType {
    text: string;
    callback: () => void;
    main: boolean;
}

function ButtonLarge({ text, callback, main }: ButtonLargePropsType) {
    return (
        <Button onClick={callback} main={main}>
            {text}
        </Button>
    );
}

const Button = styled.button<{ main: boolean }>`
    flex: ${(props) => (props.main ? 2 : 1)};
    background-color: ${(props) => (props.main ? "var(--main)" : "#ffffff")};
    font-size: 0.95rem;
    color: #000;
    border: 1px solid ${(props) => (props.main ? "#aae732" : "#efefef")};
    box-shadow: 0 0 12px 8px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    font-weight: 600;
`;

export default ButtonLarge;
