import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

interface CardPropsType {
    title: string;
    localname?: string;
    link?: string;
    children: JSX.Element;
}

function Card({ title, localname, link, children }: CardPropsType) {
    return (
        <Container>
            <Title>
                <Name>
                    <h3>{title}</h3>
                    {localname && <p className="location">{localname}</p>}
                </Name>
                {link && (
                    <Link href={link}>
                        <ArrowIcon />
                    </Link>
                )}
            </Title>
            <>{children}</>
        </Container>
    );
}

const Container = styled.article`
    padding: 24px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.01);
    border-radius: 16px;
    @media (min-width: 768px) {
        margin: 0;
    }
`;
const Title = styled.div`
    display: flex;
    margin: 0 0 16px;
    justify-content: space-between;
    align-items: center;
`;
const Name = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    h3 {
        font-size: 1.2rem;
        font-weight: 600;
    }
    .location {
        display: inline-flex;
        padding: 4px 6px;
        align-items: center;
        background-color: ${({ theme }) => theme.color.gray4};
        color: #fff;
        font-size: 0.75rem;
        font-weight: 500;
        opacity: 0.6;
        border-radius: 20px;
    }
`;
const ArrowIcon = styled.i`
    display: block;
    margin-left: -6px;
    width: 24px;
    height: 24px;
    background-image: url("/assets/icons/arrow_right_icon.svg");
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: center;
`;

export default Card;
