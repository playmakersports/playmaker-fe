import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import ButtonLarge from "@/src/components/Common/ButtonLarge";

function TeamIndex() {
    const router = useRouter();

    return (
        <Container>
            <h3>소속된 팀이 없습니다</h3>
            <p>
                새로운 팀을 찾거나
                <br />
                직접 새 팀을 창단할 수 있어요
            </p>
            <Buttons>
                <ButtonLarge type="button" text="우리 동네 팀 찾기" shadow={false} main={false} />
                <ButtonLarge
                    type="button"
                    text="새로운 팀 창단"
                    shadow={false}
                    main={false}
                    callback={() => router.push("/team/create")}
                />
            </Buttons>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    height: 58vh;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h3 {
        margin: 12px 0;
        font-size: 1.8rem;
        font-weight: 600;
    }
    p {
        font-size: 1.1rem;
        line-height: 1.65rem;
    }
`;

const Buttons = styled.div`
    display: flex;
    margin: 32px 0 -24px;
    padding: 0 80px;
    flex-direction: column;
    gap: 12px;
`;

export default TeamIndex;
