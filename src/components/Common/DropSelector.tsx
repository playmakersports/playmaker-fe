import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { FieldValues, RegisterOptions, UseFormRegister, UseFormWatch } from "react-hook-form";
import ButtonLarge from "./ButtonLarge";

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
}

function Dropdown({ register, setShow, watch, type, items, name, filter, optionSetting, expanded }: IDropdownType) {
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
        if (watch(name)?.length > 0) {
            setShow((prev) => !prev);
        }
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
                {watch(name).length > 0 && <SelectedOptions>{convertSelectedOption(watch(name))}</SelectedOptions>}
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
                <ButtonLarge type="button" text="확인" callback={closeModal} main={true} />
            </Wrap>
            <Backdrop onClick={() => setShow((prev) => !prev)} />
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
    text-align: center;
    padding: 4px 0 32px;
    font-size: 1.05rem;
    line-height: 1.25rem;
    font-weight: 700;
    word-break: keep-all;
    vertical-align: middle;
    &::before {
        display: inline-block;
        content: "✓ 선택됨";
        margin: 2px 8px 2px 0;
        padding: 4px 8px;
        background-color: var(--main);
        border-radius: 32px;
        font-size: 0.9rem;
        font-weight: 500;
    }
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
    min-height: ${(props) => (props.expanded ? "90vh" : "320px")};
    z-index: 99;
    background: var(--bg);
    border-radius: 30px 30px 0 0;
    transform: translateY(${(props) => (props.isShow ? "" : "100%")});
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
    flex: 0.45;
    padding: 0 16px 0 0;
    flex-direction: column;
    gap: 4px;
    border-right: 1px solid var(--black-op15);
`;
const FilterItem = styled.button<{ isSelected: boolean }>`
    padding: 12px 8px 12px 2px;
    font-size: 0.9rem;
    text-align: left;
    font-weight: ${(props) => (props.isSelected ? 600 : 300)};
    &::before {
        content: "";
        display: ${(props) => (props.isSelected ? "inline-block" : "none")};
        margin: 2px 4px 2px 0;
        width: 6px;
        height: 6px;
        background-color: var(--main);
        border-radius: 100%;
    }
`;
const Items = styled.ul`
    display: flex;
    flex: 1;
    height: 320px;
    flex-direction: column;
    /* margin: 0 0 20px; */
    gap: 8px;
    overflow-y: scroll;
    li {
        font-size: 1.05rem;
        input {
            display: none;
            &:checked + label {
                background-color: var(--main);
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
            padding: 16px;
            font-weight: 400;
            color: var(--black);
            opacity: 0.5;
            &::before {
                display: inline-block;
                content: "✓";
                margin-right: 12px;
                opacity: 0.35;
            }
        }
    }
`;

export default Dropdown;
