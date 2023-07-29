import styled from "@emotion/styled";

export const Label = styled.label`
    display: block;
    margin: 0 0 8px;
    padding-left: 1px;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: -0.15px;
    z-index: 1;
    opacity: 0.6;
`;
export const InputText = styled.input`
    flex: 1;
    width: 100%;
    height: 52px;
    padding: 12px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.color.gray2};
    color: ${({ theme }) => theme.color.black};
    font-size: 1rem;
    &:focus {
        border: 1px solid ${({ theme }) => theme.color.gray3};
    }
    &:read-only {
        background-color: ${({ theme }) => theme.color.gray1};
        color: ${({ theme }) => theme.color.gray4};
    }
`;
export const SelectLabel = styled.label`
    cursor: pointer;
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.color.gray2};
    color: ${({ theme }) => theme.color.gray3};
    font-weight: 400;
    text-align: center;
    word-break: keep-all;
    user-select: none;
    input {
        display: none;
    }
    &:has(input:checked) {
        position: relative;
        background-color: ${({ theme }) => theme.color.gray4};
        border: 1px solid ${({ theme }) => theme.color.gray4};
        color: ${({ theme }) => theme.color.white};
        font-weight: 500;
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            margin: 4px;
            width: 20px;
            height: 20px;
            background-image: url("/assets/icons/common/check_icon_main.svg");
            background-size: 16px;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
`;
export const InputCheck = styled.input`
    &[type="checkbox"] {
        cursor: pointer;
        position: relative;
        -webkit-appearance: none;
        width: 24px;
        height: 24px;
        border: 2px solid ${({ theme }) => theme.color.gray2};
        border-radius: 2px;
        &:checked {
            background-color: ${({ theme }) => theme.color.gray4};
            border: 2px solid ${({ theme }) => theme.color.gray4};
            background-image: url("/assets/icons/common/check_icon_main.svg");
            background-size: 16px;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
`;
export const InputCheckRadioWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 1rem;
    font-weight: 400;
    label {
        cursor: pointer;
        opacity: 0.8;
        user-select: none;
    }
    &:has(input:checked) {
        font-weight: 500;
        label {
            opacity: 1;
        }
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 76px;
    padding: 12px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.color.gray2};
    color: ${({ theme }) => theme.color.black};
    font-size: 1rem;
    line-height: 1.6rem;
    resize: none;
    &:focus {
        border: 1px solid ${({ theme }) => theme.color.gray3};
    }
`;

export const TextAreaWrap = styled.div<{ length?: number; max?: number }>`
    position: relative;
    &::after {
        content: ${({ length, max }) => `'${length}${max ? `/${max}` : ""}'`};
        display: block;
        margin: 0 12px 12px 0;
        padding: 4px 6px;
        position: absolute;
        right: 0;
        bottom: 0;
        border-radius: 12px;
        color: ${({ theme }) => theme.color.gray4};
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: -0.3px;
        backdrop-filter: blur(8px);
    }
`;

export const InputRadioWrap = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    label {
        flex: 1;
    }
`;

export const ErrorMsg = styled.div`
    margin: 6px 0 0;
    padding: 0 4px;
    color: ${({ theme }) => theme.color.warn};
    font-size: 0.8rem;
    font-weight: 600;
`;
