import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { FieldValues, RegisterOptions, UseFormRegister, UseFormWatch } from "react-hook-form";

import Button from "./Button";
import { MdHeadText } from "@/src/styles/common";

export interface IDropdownItemType {
    optionName: string;
    value: string;
    category?: string;
}

interface IDropdownType {
    register: UseFormRegister<FieldValues>;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    watch: UseFormWatch<FieldValues>;
    type: "checkbox" | "radio";
    items: IDropdownItemType[];
    name: string;
    filter?: IDropdownItemType[];
    optionSetting?: RegisterOptions;
    expanded?: boolean;
    maxChecked?: number;
}

function Dropdown({
    register,
    setShow,
    watch,
    type,
    items,
    name,
    filter,
    optionSetting,
    expanded,
    maxChecked,
}: IDropdownType) {
    const [isDropdownMount, setIsDropdownMount] = useState(() => false);
    const [selectedFilter, setSelectedFilter] = useState<string>("kleague1");
    useEffect(() => {
        document.body.style.overflow = "hidden";
        setIsDropdownMount((prev) => !prev);
        return () => {
            document.body.style.overflow = "auto";
            setIsDropdownMount((prev) => !prev);
        };
    }, []);

    const closeModal = () => {
        const WatchName = watch(name) ? watch(name) : [];
        if (maxChecked && WatchName.length > maxChecked) {
            alert(`최대 ${maxChecked}개까지 선택할 수 있는 항목입니다.`);
        } else if (WatchName.includes("NOT_SELECTED") && WatchName.length > 1) {
            alert("'없음'과 다른 항목이 함께 선택될 수 없습니다.");
        } else {
            setShow((prev) => !prev);
        }
        return;
    };

    function convertSelectedOption(data: string | string[]) {
        if (typeof data === "string") {
            return items?.filter((item) => item.value === data)[0].optionName;
        }
        return items
            ?.filter((item) => data.includes(item.value))
            .map((item) => item.optionName)
            .join(", ");
    }

    return (
        <>
            <Wrap isShow={isDropdownMount} expanded={!!expanded}>
                <Bar onClick={closeModal} />
                {watch(name).length > 0 ? (
                    <SelectedOptions>{convertSelectedOption(watch(name))}</SelectedOptions>
                ) : (
                    maxChecked && <BeforeSelected>최대 {maxChecked}개까지 선택할 수 있는 항목입니다.</BeforeSelected>
                )}
                <Container isFilter={!!filter?.length}>
                    {filter && (
                        <Filter>
                            {filter?.map((el) => (
                                <FilterItem
                                    key={el.value}
                                    type="button"
                                    isSelected={selectedFilter === el.value}
                                    onClick={() => setSelectedFilter(() => el.value)}
                                >
                                    {el.optionName}
                                </FilterItem>
                            ))}
                        </Filter>
                    )}
                    <Items>
                        {items.map((item) => (
                            <li
                                key={item.optionName}
                                style={{ display: item.category === selectedFilter ? "block" : "none" }}
                            >
                                <input
                                    type={type}
                                    id={item.value}
                                    value={item.value}
                                    {...register(name, { ...optionSetting })}
                                />
                                <label htmlFor={item.value}>{item.optionName}</label>
                            </li>
                        ))}
                    </Items>
                </Container>
                <Button
                    type="button"
                    mode="main1"
                    size="large"
                    text="확인"
                    callback={closeModal}
                    shadow={false}
                    main={true}
                />
            </Wrap>
            <Backdrop onClick={closeModal} />
        </>
    );
}

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 11;
`;

const Bar = styled.div`
    margin: 0 auto 20px;
    width: 50px;
    height: 4px;
    background-color: #d9d9d9;
`;
const SelectedOptions = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 4px 0 32px;
    font-size: 1.6rem;
    line-height: 1.55rem;
    font-weight: 500;
    word-break: keep-all;
    vertical-align: middle;
    text-align: center;
    gap: 6px;
    &::before {
        content: "✓ 선택됨";
        margin: 0 0 4px;
        padding: 6px 8px;
        border-radius: 24px;
        color: ${({ theme }) => theme.color.black};
        border: 1px solid ${({ theme }) => theme.color.black};
        font-family: SUITE Variable;
        font-size: 1.4rem;
        line-height: 1.2rem;
    }
`;

const BeforeSelected = styled(MdHeadText)`
    margin: 12px 0 24px;
    font-size: 1.6rem;
    text-align: center;
    opacity: 0.8;
    color: ${({ theme }) => theme.color.warn};
`;

const Wrap = styled.div<{ isShow: boolean; expanded: boolean }>`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 15px 40px;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: ${({ expanded }) => (expanded ? "90vh" : "320px")};
    z-index: 99;
    background: ${({ theme }) => theme.color.white};
    border-top: 1px solid ${({ theme }) => theme.color.gray1};
    border-radius: 30px 30px 0 0;
    transform: translateY(${({ isShow }) => (isShow ? "" : "100%")});
    transition: transform 0.3s;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;
const Container = styled.div<{ isFilter: boolean }>`
    display: flex;
    margin: 0 0 24px;
    padding: 0 8px;
`;
const Filter = styled.div`
    display: flex;
    flex: 0.5;
    padding: 0 12px 0 0;
    flex-direction: column;
    gap: 4px;
    border-right: 1px solid ${({ theme }) => theme.color.gray1};
`;
const FilterItem = styled.button<{ isSelected: boolean }>`
    padding: 12px 8px 12px 2px;
    font-size: 1.6rem;
    font-family: SUITE Variable;
    text-align: left;
    font-weight: ${({ isSelected }) => (isSelected ? 700 : 400)};
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0.7)};
    letter-spacing: -0.2px;
    user-select: none;
    &::before {
        content: "";
        display: ${({ isSelected }) => (isSelected ? "inline-block" : "none")};
        margin: 2px 6px 2px -12px;
        width: 6px;
        height: 6px;
        background-color: ${({ theme }) => theme.color.main};
        border-radius: 100%;
    }
    label::before {
        color: ${({ theme, isSelected }) => (isSelected ? theme.color.white : theme.color.black)};
    }
`;
const Items = styled.ul`
    display: flex;
    flex: 1;
    height: 320px;
    flex-direction: column;
    gap: 8px;
    overflow-y: scroll;
    user-select: none;
    li {
        font-size: 1.6rem;
        input {
            display: none;
            &:checked + label {
                background-color: ${({ theme }) => theme.color.main};
                color: #000;
                opacity: 1;
                &::before {
                    content: "✓";
                    opacity: 1;
                }
            }
        }
        label {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 20px 16px;
            font-weight: 500;
            color: ${({ theme }) => theme.color.black};
            opacity: 0.5;
            &::before {
                content: "✓";
                margin-right: 12px;
                opacity: 0.5;
            }
        }
    }
`;

export default Dropdown;
