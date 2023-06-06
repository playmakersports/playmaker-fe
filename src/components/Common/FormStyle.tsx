import styled from "@emotion/styled";

export const Label = styled.label`
    display: block;
    margin: 0 0 8px;
    padding-left: 1px;
    color: var(--black);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: -0.15px;
    z-index: 1;
    opacity: 0.7;
`;
export const InputText = styled.input`
    flex: 1;
    width: 100%;
    height: 49px;
    padding: 12px;
    background-color: var(--bg-dark);
    border: 1px solid var(--bg-dark);
    color: var(--black);
    font-size: 1rem;
    &:focus {
        border: 1px solid var(--main);
    }
`;
export const SelectLabel = styled.label`
    cursor: pointer;
    padding: 12px;
    border: 1px solid var(--lightgray);
    color: var(--black);
    font-weight: 300;
    text-align: center;
    word-break: keep-all;
    opacity: 0.65;
    input {
        display: none;
    }
    &:has(input:checked) {
        background-color: var(--main);
        border: 1px solid var(--main);
        color: #000;
        font-weight: 500;
        opacity: 1;
        &::before {
            display: inline-block;
            margin: 0 4px 0 0;
        }
    }
`;
export const InputCheck = styled.input`
    &[type="checkbox"] {
        cursor: pointer;
        -webkit-appearance: none;
        width: 24px;
        height: 24px;
        border: 2px solid var(--black-op45);

        &:checked {
            background-color: var(--main);
            border: 2px solid var(--main);
            &::after {
                content: "✓";
                position: absolute;
                top: 0;
                left: 0;
                width: 24px;
                display: block;
                color: #000;
                font-size: 1.2rem;
                text-align: center;
            }
        }
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
    color: var(--warn);
    font-size: 0.8rem;
    font-weight: 600;
`;
