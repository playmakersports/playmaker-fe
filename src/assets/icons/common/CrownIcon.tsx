import React, { SVGProps } from "react";

function CrownIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="512"
            height="512"
            viewBox="0 0 32 32"
            fill="#ffc50e"
            {...props}
        >
            <g>
                <path d="m29 13.84-2.46 10.87a1 1 0 0 1-1 .79H6.38a1 1 0 0 1-1-.79L3 13.84a1 1 0 0 1 .36-1 1 1 0 0 1 1.06-.11l5.84 2.83L15.1 7a1 1 0 0 1 1.74 0l4.84 8.57 5.88-2.85A1 1 0 0 1 29 13.84z"></path>
            </g>
        </svg>
    );
}

export default CrownIcon;
