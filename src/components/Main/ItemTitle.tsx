import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import { MdText, TitleText } from "@/src/styles/common";

interface Props {
    title: string;
    moreLink?: string;
}

function ItemTitle({ title, moreLink }: Props) {
    return (
        <Title>
            <TitleText>{title}</TitleText>
            {moreLink && (
                <Link href={moreLink}>
                    <MdText>더보기</MdText>
                </Link>
            )}
        </Title>
    );
}

const Title = styled.div`
    display: flex;
    margin: 0 0 16px;
    justify-content: space-between;
    align-items: center;
`;

export default ItemTitle;
