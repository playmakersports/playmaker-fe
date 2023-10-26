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
    maxChecked?: number;
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
    maxChecked,
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
                    maxChecked={maxChecked}
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

    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.color.gray2};
    color: ${({ theme, isPlaceholder }) => (isPlaceholder ? theme.color.gray3 : theme.color.black)};

    font-size: 1.6rem;
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
