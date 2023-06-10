import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

import { loggedState } from "@/src/atoms/state";

function PlayerIndex() {
    const [logged] = useAtom(loggedState);
    const router = useRouter();

    if (logged.username) {
        useEffect(() => {
            router.push(`/player/${logged.username}`);
        }, []);

        return <div></div>;
    } else {
        useEffect(() => {
            router.push("/user/login");
        }, []);

        return <div></div>;
    }
}

export default PlayerIndex;
