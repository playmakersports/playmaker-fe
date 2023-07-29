import styled from "@emotion/styled";
import React from "react";

function Search() {
    return (
        <Wrapper>
            <Input />
            <Button type="button">검색</Button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 12px auto 0;
    display: flex;
    justify-content: center;
    gap: 8px;
    border-radius: 20px;
`;

const Input = styled.input`
    width: 180px;
    padding: 8px 12px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.color.gray2};
    &:focus {
        border: 1px solid ${({ theme }) => theme.color.gray3};
    }
`;
const Button = styled.button`
    padding: 0 16px;
    background-color: ${({ theme }) => theme.color.gray3};
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
`;

export default Search;
