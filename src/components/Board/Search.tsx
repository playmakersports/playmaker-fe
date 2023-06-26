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
    border-radius: 16px;
    background-color: transparent;
    border: 1px solid var(--dark);
    color: var(--black);
    &:focus {
        font-weight: 600;
    }
`;
const Button = styled.button`
    padding: 8px 16px;
    border-radius: 16px;
    background-color: var(--dark);
    color: #fff;
    font-size: 0.75rem;
    font-weight: 600;
`;

export default Search;
