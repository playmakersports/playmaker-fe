import styled from "@emotion/styled";
import React from "react";
import { ErrorMsg, InputText, Label, TextArea } from "./FormStyle";
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister, UseFormWatch } from "react-hook-form";

export type InputBoxDataType = {
    id: string;
    label: string;
    type: "text" | "date" | "tel" | "number" | "textarea" | "password";
    required?: boolean;
    readonly?: boolean;
    description?: string;
    placeholder?: string;
    maxLength?: number;
    showLength?: boolean;
    options?: RegisterOptions;
};
type InputBoxPropsType = {
    register: UseFormRegister<FieldValues>;
    watch: UseFormWatch<FieldValues>;
    errors?: FieldErrors<FieldValues>;
};

function InputBox({
    register,
    watch,
    id,
    label,
    type,
    required = true,
    readonly = false,
    description,
    placeholder,
    options,
    maxLength,
    showLength,
    errors,
}: InputBoxPropsType & InputBoxDataType) {
    return (
        <Item>
            <Label>{label}</Label>
            <div className="input-box-wrap">
                {type === "textarea" ? (
                    <TextArea required={required} maxLength={maxLength} {...register(id, { ...options })} />
                ) : (
                    <InputText
                        type={type}
                        maxLength={maxLength}
                        required={required}
                        placeholder={placeholder}
                        readOnly={readonly}
                        {...register(id, { ...options })}
                    />
                )}
            </div>
            {showLength && (
                <p className="input-length">
                    {watch(id)?.length ?? 0}/{maxLength}
                </p>
            )}
            {description && <p className="input-description">{description}</p>}
            {errors?.[id] && <ErrorMsg>{errors?.[id]?.message as React.ReactNode}</ErrorMsg>}
        </Item>
    );
}

const Item = styled.div`
    position: relative;
    .input-box-wrap {
        display: flex;
        input {
            &::-webkit-date-and-time-value {
                text-align: left;
                padding: 0 5px;
            }
            &::-webkit-calendar-picker-indicator {
                display: none;
                -webkit-appearance: none;
            }
            &[type="date"]::after {
                display: inline-block;
                content: "";
                padding-right: 5px;
                width: 24px;
                height: 24px;
                background-image: url("/assets/icons/calendar_icon.svg");
                background-position: center;
                background-repeat: no-repeat;
                background-size: 22px;
            }
        }
    }
    .input-description {
        margin: 8px 0 0;
        padding: 0 4px;
        color: ${({ theme }) => theme.color.black};
        font-size: 0.8rem;
        line-height: 1.3rem;
        opacity: 0.65;
    }
    .input-length {
        position: absolute;
        padding: 8px;
        right: 0;
        bottom: 0;
        opacity: 0.6;
        font-size: 0.8rem;
        text-align: right;
    }
`;

export default InputBox;
