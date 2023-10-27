import React, { SVGProps } from "react";

export function DateTimeIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" fill="#000000" viewBox="0 0 24 24" {...props}>
            <g>
                <path d="M10 22.5A1.5 1.5 0 0 1 8.5 24h-3A5.506 5.506 0 0 1 0 18.5v-11C0 4.467 2.467 2 5.5 2H6v-.5a1.5 1.5 0 1 1 3 0V2h6v-.5a1.5 1.5 0 1 1 3 0V2h.5C21.532 2 24 4.467 24 7.5A1.5 1.5 0 0 1 22.5 9H3v9.5C3 19.878 4.122 21 5.5 21h3a1.5 1.5 0 0 1 1.5 1.5Zm14-5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-4.156.223L19 16.879V15.5a1.5 1.5 0 0 0-3 0v1.793a2 2 0 0 0 .586 1.414l1.137 1.137a1.5 1.5 0 1 0 2.121-2.121Z"></path>
            </g>
        </svg>
    );
}
