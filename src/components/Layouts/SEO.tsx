import Head from "next/head";
import React from "react";

interface SEOPropsType {
    title?: string;
    content?: string;
}

function SEO({ title, content }: SEOPropsType) {
    return (
        <Head>
            <title>{title ?? `PlayMaker, 당신의 스포츠 파트너`}</title>
            <meta
                name="description"
                content={
                    content ??
                    `PlayMaker, 우리 동네에서 당신과 함께 할 스포츠 파트너를 찾아드립니다.`
                }
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

export default SEO;
