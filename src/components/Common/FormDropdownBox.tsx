import React, { useState } from "react";
import styled from "@emotion/styled";
import { FieldValues, RegisterOptions, UseFormRegister, UseFormWatch } from "react-hook-form";

import DropSelector, { IDropdownItemType } from "./DropSelector";

export interface IFormDropdownBoxType {
    register: UseFormRegister<FieldValues>;
    watch: UseFormWatch<FieldValues>;
    type: "radio" | "checkbox";
    id: string;
    options: IDropdownItemType[] | undefined;
    filter?: IDropdownItemType[];
    placeholder?: string;
    optionSetting?: RegisterOptions;
}

function FormDropdownBox({
    register,
    watch,
    type,
    id,
    options,
    filter,
    placeholder,
    optionSetting,
}: IFormDropdownBoxType) {
    const [showDropdown, setShowDropdown] = useState(() => false);

    function convertSelectedOption(data: string | string[]) {
        if (typeof data === "string") {
            return options?.filter((option) => option.value === data)[0].optionName;
        }
        return options
            ?.filter((item) => data.includes(item.value))
            .map((item) => item.optionName)
            .join(", ");
    }

    return (
        <>
            <BoxWrap
                type="button"
                isPlaceholder={!(watch(id)?.length > 0)}
                onClick={() => setShowDropdown((prev) => !prev)}
            >
                <div>{watch(id)?.length > 0 ? convertSelectedOption(watch(id)) : placeholder}</div>
            </BoxWrap>
            {!showDropdown && (
                <div style={{ display: "none" }}>
                    {options?.map((value) => (
                        <input
                            key={value.value}
                            type={type}
                            value={value.value}
                            {...register(id, { ...optionSetting })}
                        />
                    ))}
                </div>
            )}
            {showDropdown && (
                <DropSelector
                    register={register}
                    setShow={setShowDropdown}
                    watch={watch}
                    type={type}
                    name={id}
                    items={options ?? []}
                    filter={filter ?? []}
                    optionSetting={optionSetting}
                    expanded={false}
                />
            )}
        </>
    );
}

const BoxWrap = styled.button<{ isPlaceholder: boolean }>`
    cursor: pointer;
    user-select: none;
    padding: 12px;
    width: 100%;

    background-color: ${(props) => (props.isPlaceholder ? "var(--bg-dark)" : "var(--main)")};
    border: 1px solid ${(props) => (props.isPlaceholder ? "var(--bg-dark)" : "var(--main)")};
    color: ${(props) => (props.isPlaceholder ? "var(--black-op45)" : "#000")};

    font-size: 1rem;
    font-weight: 500;
    text-align: left;
    word-break: keep-all;

    div {
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`;

export default FormDropdownBox;
