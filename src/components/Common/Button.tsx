import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
    mode: "main1" | "main2" | "basic" | "sub1" | "sub2";
    size: "large" | "medium" | "small" | "xsmall";
    type?: "button" | "submit" | "reset" | undefined;
    noFlex?: boolean;
    text: string;
    main?: boolean;
    shadow?: boolean;
    disabled?: boolean;
    callback?: () => void;
}

const BUTTON_SIZE_STYLE: { [key: string]: { [key: string]: string } } = {
    large: { fontSize: "1.8rem", height: "52px", weight: "600" },
    medium: { fontSize: "1.6rem", height: "48px", weight: "600" },
    small: { fontSize: "1.4rem", height: "32px", weight: "400" },
    xsmall: { fontSize: "1.4rem", height: "32px", weight: "500" },
};

function Button({
    mode,
    size,
    type,
    text,
    main = true,
    noFlex = false,
    shadow = true,
    disabled = false,
    callback,
}: Props) {
    const theme = useTheme();
    const BUTTON_MODE_STYLE = {
        main1: {
            background: theme.color.main,
            color: "#000",
            border: theme.color.main,
            shadow: "0 0 10px 4px rgba(0, 0, 0, 0.05)",
            radius: "8px",
        },
        main2: {
            background: theme.color.white,
            color: "#000",
            border: theme.color.main,
            shadow: "0 0 10px 4px rgba(0, 0, 0, 0.05)",
            radius: "8px",
        },
        basic: {
            background: "#fff",
            color: theme.color.gray4,
            border: "#e7e7e7",
            shadow: "0 0 10px 4px rgba(0, 0, 0, 0.05)",
            radius: "8px",
        },
        sub1: {
            background: theme.color.gray1,
            color: theme.color.gray4,
            border: "transparent",
            shadow: "none",
            radius: "4px",
        },
        sub2: {
            background: "#ececec",
            color: theme.color.gray4,
            border: "transparent",
            shadow: "none",
            radius: "8px",
        },
    };
    return (
        <Wrapper
            type={type ?? "button"}
            onClick={callback}
            modeStyle={BUTTON_MODE_STYLE}
            noFlex={noFlex}
            mode={mode}
            size={size}
            main={main}
            shadow={shadow}
            disabled={disabled}
        >
            {text}
        </Wrapper>
    );
}

const Wrapper = styled.button<{
    mode: string;
    size: string;
    noFlex: boolean;
    modeStyle: { [key: string]: { [key: string]: string } };
    main: boolean;
    shadow: boolean;
    disabled: boolean;
}>`
    padding: 0 16px;
    min-height: ${({ size }) => BUTTON_SIZE_STYLE[size].height};
    flex: ${({ noFlex, main }) => (noFlex ? "none" : main ? 2 : 1)};
    background-color: ${({ modeStyle, mode }) => modeStyle[mode].background};
    border: 1px solid ${({ modeStyle, mode }) => modeStyle[mode].border};
    box-shadow: ${({ modeStyle, mode, shadow }) => (shadow ? modeStyle[mode].shadow : "none")};
    border-radius: ${({ modeStyle, mode }) => modeStyle[mode].radius};
    color: ${({ modeStyle, mode }) => modeStyle[mode].color};
    font-family: SUITE Variable;
    font-size: ${({ size }) => BUTTON_SIZE_STYLE[size].fontSize};
    font-weight: ${({ size }) => BUTTON_SIZE_STYLE[size].weight};
    &:hover {
        opacity: 0.85;
    }
    &:disabled {
        cursor: not-allowed;
        filter: grayscale(1);
        background-color: ${({ theme }) => theme.color.gray1};
        color: ${({ theme }) => theme.color.gray2};
    }
`;

export default Button;
