import styled from "@emotion/styled";
import React from "react";

interface ButtonLargePropsType {
    type?: "button" | "submit" | "reset" | undefined;
    text: string;
    main: boolean;
    shadow?: boolean;
    callback?: () => void;
}

function ButtonLarge({ type, text, main, shadow = true, callback }: ButtonLargePropsType) {
    return (
        <Button type={type ?? "button"} onClick={callback} main={main} shadow={shadow}>
            {text}
        </Button>
    );
}

const Button = styled.button<{ main: boolean; shadow: boolean }>`
    min-height: 56px;
    flex: ${({ main }) => (main ? 2 : 1)};
    background-color: ${({ theme, main }) => (main ? theme.color.main : "#fff")};
    border: 1px solid ${({ main }) => (main ? "#aae732" : "#e7e7e7")};
    box-shadow: ${({ shadow }) => (shadow ? "0 0 10px 4px rgba(0, 0, 0, 0.05)" : "none")};
    border-radius: 8px;
    color: #000;
    font-size: 1.05rem;
    font-weight: 600;
`;

export default ButtonLarge;
